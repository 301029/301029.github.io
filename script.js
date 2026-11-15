/* ==========================================================================
   Luther. 个人主页 · 脚本
   手写站点用不上多少 JS，这里就管三件小事：记住你选的主题、顶栏滚下去时加条
   分割线、页脚年份自己算出来。加起来不到一百行，看得完，坏了也好改。
   ========================================================================== */

(function () {
  'use strict';

  var root = document.documentElement;
  var STORAGE_KEY = 'theme';

  /* ------------------------------------------------------------------------
     1. 主题切换
     初始主题已在 <head> 的内联脚本里定好，这里只管「点一下换过去」。
     ---------------------------------------------------------------------- */

  function systemPrefersDark() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  /* 按钮的开关状态：深色算「按下」。读屏器靠这个 attribute 才知道现在是什么状态 */
  function syncToggleState() {
    if (toggle) {
      toggle.setAttribute('aria-pressed', root.dataset.theme === 'dark' ? 'true' : 'false');
    }
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', theme === 'dark' ? '#0f1012' : '#faf8f4');
    }
    syncToggleState();
  }

  var toggle = document.querySelector('[data-theme-toggle]');

  if (toggle) {
    syncToggleState();   /* 首屏主题是内联脚本定的，这里补一次状态 */

    toggle.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        /* 隐私模式下 localStorage 可能不可写，忽略即可，不影响使用 */
      }
    });
  }

  /* 用户没手动选过的话，跟着系统走 */
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  var onSystemChange = function () {
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      saved = null;
    }
    if (!saved) {
      applyTheme(systemPrefersDark() ? 'dark' : 'light');
    }
  };

  if (typeof mq.addEventListener === 'function') {
    mq.addEventListener('change', onSystemChange);
  } else if (typeof mq.addListener === 'function') {
    mq.addListener(onSystemChange);   // 老 Safari
  }

  /* ------------------------------------------------------------------------
     2. 顶栏：滚下去一点才出现分割线
     ---------------------------------------------------------------------- */

  var topbar = document.querySelector('.topbar');

  if (topbar) {
    var ticking = false;

    var syncTopbar = function () {
      topbar.classList.toggle('is-scrolled', window.scrollY > 8);
      ticking = false;
    };

    window.addEventListener(
      'scroll',
      function () {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(syncTopbar);
        }
      },
      { passive: true }
    );

    syncTopbar();
  }

  /* ------------------------------------------------------------------------
     3. 页脚年份
     ---------------------------------------------------------------------- */

  var yearEl = document.querySelector('[data-year]');

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
