var _sTrackingAlreadyPresent = (typeof window._svd !== 'undefined' && typeof window._svc !== 'undefined');var _svc = window._svc || {};var _svd = window._svd || {};_svc.workspaceKey = _svc.workspaceKey || 'c943b378118aec6e802f4fa2b14e1e5c';_svd.integrations = _svd.integrations || [{"provider":"google_analytics","tracker":false,"enabled":true}];_svd.installing = _svd.installing || false;(function () {
  if (_sTrackingAlreadyPresent) {
    return;
  }
  var coreUrls = [''];
  if ("function" == typeof require && "function" == typeof define && define.amd) {
    // if loaded, load modules with the explicit require(), which loads the UMD modules correctly
    require(coreUrls);
  } else {
    //if no requireJS, load the survicate modules with <script>, and the UMD module will be loaded to browser globals.
    for (var i = 0; i < coreUrls.length; i++) {
      var s = document.createElement('script');
      s.setAttribute('crossorigin', 'anonymous');
      s.src = coreUrls[i];
      s.async = true;
      var e = document.getElementsByTagName('script')[0];
      e.parentNode.insertBefore(s, e);
    }
  }
})();
