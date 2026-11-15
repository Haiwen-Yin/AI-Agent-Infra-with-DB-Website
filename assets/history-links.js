// Open the containing release for any retained historical bookmark.
(function () {
  'use strict';
  function openHistoryBookmark() {
    if (!location.hash) return;
    var id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch (_) { return; }
    var target = document.getElementById(id);
    var entry = target && target.closest('details.release-history-entry');
    if (!entry && target && /^v\d+-history$/.test(target.id)) {
      entry = document.getElementById(target.id.replace('-history', '-release'));
    }
    if (!entry) return;
    entry.open = true;
    var ancestor = target.parentElement;
    while (ancestor && ancestor !== entry) {
      if (ancestor.tagName === 'DETAILS') ancestor.open = true;
      ancestor = ancestor.parentElement;
    }
    requestAnimationFrame(function () { target.scrollIntoView(); });
  }
  openHistoryBookmark();
  window.addEventListener('hashchange', openHistoryBookmark);
})();
