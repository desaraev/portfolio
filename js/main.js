(function() { (function(){function c(a){this.t={};this.tick=function(a,c,b){var d=void 0!=b?b:(new Date).getTime();this.t[a]=[d,c];if(void 0==b)try{window.console.timeStamp("CSI/"+a)}catch(e){}};this.tick("start",null,a)}var a;window.performance&&(a=window.performance.timing);var h=a?new c(a.responseStart):new c;window.jstiming={Timer:c,load:h};if(a){var b=a.navigationStart,e=a.responseStart;0<b&&e>=b&&(window.jstiming.srt=e-b)}if(a){var d=window.jstiming.load;0<b&&e>=b&&(d.tick("_wtsrt",void 0,b),d.tick("wtsrt_",
"_wtsrt",e),d.tick("tbsd_","wtsrt_"))}try{a=null,window.chrome&&window.chrome.csi&&(a=Math.floor(window.chrome.csi().pageT),d&&0<b&&(d.tick("_tbnd",void 0,window.chrome.csi().startE),d.tick("tbnd_","_tbnd",b))),null==a&&window.gtbExternal&&(a=window.gtbExternal.pageT()),null==a&&window.external&&(a=window.external.pageT,d&&0<b&&(d.tick("_tbnd",void 0,window.external.startE),d.tick("tbnd_","_tbnd",b))),a&&(window.jstiming.pt=a)}catch(k){}})();window.tickAboveFold=function(c){var a=0;if(c.offsetParent){do a+=c.offsetTop;while(c=c.offsetParent)}c=a;750>=c&&window.jstiming.load.tick("aft")};var f=!1;function g(){f||(f=!0,window.jstiming.load.tick("firstScrollTime"))}window.addEventListener?window.addEventListener("scroll",g,!1):window.attachEvent("onscroll",g);
 })();
             
             WebFontConfig = {
  google: { families: [ 'Open Sans:bold' ],
  api: '//fonts.googleapis.com/css?kit=k3k702ZOKiLJc3WVjuplzPaUH6-UtVqa1RRLS31Rcsw'
  },
  loading: function() {
    if (window.jstiming) window.jstiming.load.tick('webFontLoading');
  },
  active: function() {
    if (window.jstiming) window.jstiming.load.tick('webFontActive');
  }
};
(function() {
  var wf = document.createElement('script');
  wf.src = '//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
             
              var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-6625488-2']);
        _gaq.push(['_trackPageview']);
        (function() {
          var ga = document.createElement('script');
          ga.type = 'text/javascript';
          ga.async = true;
          ga.src = (document.location.protocol == 'https:' ?
                    'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(ga, s);
        })();
             
             if (window.jstiming) window.jstiming.load.tick('headEnd');
             
             (function() {
  var $check = $("input[type='checkbox']");
  var $label = $(".togglebtn");
  var $body = $("body");
  var $a = $("a");
  var $mainbg = $("div[class='mainbg']");

  $check.on("click", function() {
    var $this = $(this);
    if ($this.hasClass("checked")) {
      $this.removeClass("checked").val("false");
      $this.removeAttr("checked");
	  $body.addClass("magicbg");
	  $body.removeClass("darkbg");
	  $mainbg.removeClass("mainbg");
      $label.animate({
        color: "#FFF"
      }, 500);
      $a.animate({
        color: "#FFF"
      }, 500);
    } else {
      $this.addClass("checked").val("true");
      $this.attr("checked", "checked");
	  $body.addClass("darkbg");
	  $body.removeClass("magicbg");
	  $mainbg.removeClass("mainbg");
      $label.animate({
        color: "#FFF"
      }, 500);
      $a.animate({
        color: "#558FC1"
      }, 500);
    }
  });
  }.call(this));
             
             
             
             if (typeof(BLOG_attachCsiOnload) != 'undefined' && BLOG_attachCsiOnload != null) { window['blogger_templates_experiment_id'] = "templatesV2";window['blogger_blog_id'] = '5358063918643889764';BLOG_attachCsiOnload('item_'); }_WidgetManager._Init('//www.blogger.com/rearrange?blogID\x3d5358063918643889764','//www.desaraev.com/2016/06/testing.html','5358063918643889764');
_WidgetManager._SetDataContext([{'name': 'blog', 'data': {'blogId': '5358063918643889764', 'bloggerUrl': 'https://www.blogger.com', 'title': '&#8249;&#8260;&#8250; Portfolio', 'pageType': 'item', 'postId': '2144286231299090726', 'url': 'http://www.desaraev.com/2016/06/testing.html', 'canonicalUrl': 'http://www.desaraev.com/2016/06/testing.html', 'homepageUrl': 'http://www.desaraev.com/', 'searchUrl': 'http://www.desaraev.com/search', 'canonicalHomepageUrl': 'http://www.desaraev.com/', 'blogspotFaviconUrl': 'http://www.desaraev.com/favicon.ico', 'enabledCommentProfileImages': true, 'adultContent': false, 'analyticsAccountNumber': 'UA-6625488-2', 'useUniversalAnalytics': false, 'pageName': 'Testing ', 'pageTitle': '&#8249;&#8260;&#8250; Portfolio: Testing ', 'encoding': 'UTF-8', 'locale': 'en', 'localeUnderscoreDelimited': 'en', 'isPrivate': false, 'isMobile': false, 'isMobileRequest': false, 'mobileClass': '', 'isPrivateBlog': false, 'languageDirection': 'ltr', 'feedLinks': '\x3clink rel\x3d\x22alternate\x22 type\x3d\x22application/atom+xml\x22 title\x3d\x22&#8249;&#8260;&#8250; Portfolio - Atom\x22 href\x3d\x22http://www.desaraev.com/feeds/posts/default\x22 /\x3e\n\x3clink rel\x3d\x22alternate\x22 type\x3d\x22application/rss+xml\x22 title\x3d\x22&#8249;&#8260;&#8250; Portfolio - RSS\x22 href\x3d\x22http://www.desaraev.com/feeds/posts/default?alt\x3drss\x22 /\x3e\n\x3clink rel\x3d\x22service.post\x22 type\x3d\x22application/atom+xml\x22 title\x3d\x22&#8249;&#8260;&#8250; Portfolio - Atom\x22 href\x3d\x22https://www.blogger.com/feeds/5358063918643889764/posts/default\x22 /\x3e\n\n\x3clink rel\x3d\x22alternate\x22 type\x3d\x22application/atom+xml\x22 title\x3d\x22&#8249;&#8260;&#8250; Portfolio - Atom\x22 href\x3d\x22http://www.desaraev.com/feeds/2144286231299090726/comments/default\x22 /\x3e\n', 'meTag': '', 'openIdOpTag': '', 'latencyHeadScript': '\x3cscript type\x3d\x22text/javascript\x22\x3e(function() { (function(){function c(a){this.t\x3d{};this.tick\x3dfunction(a,c,b){var d\x3dvoid 0!\x3db?b:(new Date).getTime();this.t[a]\x3d[d,c];if(void 0\x3d\x3db)try{window.console.timeStamp(\x22CSI/\x22+a)}catch(e){}};this.tick(\x22start\x22,null,a)}var a;window.performance\x26\x26(a\x3dwindow.performance.timing);var h\x3da?new c(a.responseStart):new c;window.jstiming\x3d{Timer:c,load:h};if(a){var b\x3da.navigationStart,e\x3da.responseStart;0\x3cb\x26\x26e\x3e\x3db\x26\x26(window.jstiming.srt\x3de-b)}if(a){var d\x3dwindow.jstiming.load;0\x3cb\x26\x26e\x3e\x3db\x26\x26(d.tick(\x22_wtsrt\x22,void 0,b),d.tick(\x22wtsrt_\x22,\n\x22_wtsrt\x22,e),d.tick(\x22tbsd_\x22,\x22wtsrt_\x22))}try{a\x3dnull,window.chrome\x26\x26window.chrome.csi\x26\x26(a\x3dMath.floor(window.chrome.csi().pageT),d\x26\x260\x3cb\x26\x26(d.tick(\x22_tbnd\x22,void 0,window.chrome.csi().startE),d.tick(\x22tbnd_\x22,\x22_tbnd\x22,b))),null\x3d\x3da\x26\x26window.gtbExternal\x26\x26(a\x3dwindow.gtbExternal.pageT()),null\x3d\x3da\x26\x26window.external\x26\x26(a\x3dwindow.external.pageT,d\x26\x260\x3cb\x26\x26(d.tick(\x22_tbnd\x22,void 0,window.external.startE),d.tick(\x22tbnd_\x22,\x22_tbnd\x22,b))),a\x26\x26(window.jstiming.pt\x3da)}catch(k){}})();window.tickAboveFold\x3dfunction(c){var a\x3d0;if(c.offsetParent){do a+\x3dc.offsetTop;while(c\x3dc.offsetParent)}c\x3da;750\x3e\x3dc\x26\x26window.jstiming.load.tick(\x22aft\x22)};var f\x3d!1;function g(){f||(f\x3d!0,window.jstiming.load.tick(\x22firstScrollTime\x22))}window.addEventListener?window.addEventListener(\x22scroll\x22,g,!1):window.attachEvent(\x22onscroll\x22,g);\n })();\x3c/script\x3e', 'mobileHeadScript': '', 'adsenseHostId': 'ca-host-pub-1556223355139109', 'ieCssRetrofitLinks': '\x3c!--[if IE]\x3e\x3cscript type\x3d\x22text/javascript\x22 src\x3d\x22https://www.blogger.com/static/v1/jsbin/2591933621-ieretrofit.js\x22\x3e\x3c/script\x3e\n\x3c![endif]--\x3e', 'view': '', 'dynamicViewsCommentsSrc': '//www.blogblog.com/dynamicviews/4224c15c4e7c9321/js/comments.js', 'dynamicViewsScriptSrc': '//www.blogblog.com/dynamicviews/285f8adf5e0327ac', 'plusOneApiSrc': 'https://apis.google.com/js/plusone.js', 'sf': 'n', 'tf': '', 'sharing': {'platforms': [{'name': 'Get link', 'key': 'link', 'shareMessage': 'Get link', 'target': ''}, {'name': 'Facebook', 'key': 'facebook', 'shareMessage': 'Share to Facebook', 'target': 'facebook'}, {'name': 'BlogThis!', 'key': 'blogThis', 'shareMessage': 'BlogThis!', 'target': 'blog'}, {'name': 'Twitter', 'key': 'twitter', 'shareMessage': 'Share to Twitter', 'target': 'twitter'}, {'name': 'Pinterest', 'key': 'pinterest', 'shareMessage': 'Share to Pinterest', 'target': 'pinterest'}, {'name': 'Google+', 'key': 'googlePlus', 'shareMessage': 'Share to Google+', 'target': 'googleplus'}, {'name': 'Email', 'key': 'email', 'shareMessage': 'Email', 'target': 'email'}], 'googlePlusShareButtonWidth': 300, 'googlePlusBootstrap': '\x3cscript type\x3d\x22text/javascript\x22\x3ewindow.___gcfg \x3d {\x27lang\x27: \x27en\x27};\x3c/script\x3e'}}}, {'name': 'features', 'data': {'templateBrowserTheme': true, 'widgetVisibility': true}}, {'name': 'messages', 'data': {'adsGoHere': 'Ads go here', 'archive': 'Archive', 'authorSaid': '%1 said...', 'authorSaidWithLink': '\x3ca href\x3d\x22%2\x22 rel\x3d\x22nofollow\x22\x3e%1\x3c/a\x3e said...', 'blogArchive': 'Blog Archive', 'by': 'By', 'byAuthor': 'By %1', 'byAuthorLink': 'By \x3ca href\x3d\x22%2\x22\x3e%1\x3c/a\x3e', 'configurationRequired': 'Configuration required', 'deleteBacklink': 'Delete Backlink', 'deleteComment': 'Delete Comment', 'edit': 'Edit', 'emailAddress': 'Email Address', 'getEmailNotifications': 'Get email notifications', 'hidden': 'Hidden', 'keepReading': 'Keep reading', 'labels': 'Labels', 'loadMorePosts': 'Load more posts', 'loading': 'Loading...', 'myBlogList': 'My Blog List', 'myFavoriteSites': 'My favorite sites', 'newer': 'Newer', 'newerPosts': 'Newer Posts', 'newest': 'Newest', 'noResultsFound': 'No results found', 'noTitle': 'No title', 'numberOfComments': '{numComments, plural, \x3d0 {No comments} \x3d1 {1 comment} other {# comments}}', 'older': 'Older', 'olderPosts': 'Older Posts', 'oldest': 'Oldest', 'onlyTeamMembersCanComment': 'Note: Only a member of this blog may post a comment.', 'popularPosts': 'Popular Posts', 'popularPostsFromThisBlog': 'Popular posts from this blog', 'postAComment': 'Post a Comment', 'postedBy': 'Posted by', 'postedByAuthor': 'Posted by %1', 'postedByAuthorLink': 'Posted by \x3ca href\x3d\x22%2\x22\x3e%1\x3c/a\x3e', 'readMore': 'Read more', 'recentPosts': 'Recent posts', 'reportAbuse': 'Report Abuse', 'search': 'Search', 'searchBlog': 'Search blog', 'share': 'Share', 'showAll': 'Show all', 'showLess': 'Show less', 'showMore': 'Show more', 'someOfMyFavoriteSites': 'Some of my favorite sites', 'subscribe': 'Subscribe', 'subscribeTo': 'Subscribe to:', 'subscribeToThisBlog': 'Subscribe to this blog', 'theresNothingHere': 'There\x27s nothing here!', 'viewAll': 'View all', 'visible': 'Visible', 'visitProfile': 'Visit profile', 'widgetNotAvailableInPreview': 'This content is not available in blog preview.', 'widgetNotAvailableOnHttps': 'This content is not yet available over encrypted connections.'}}, {'name': 'skin', 'data': {'vars': {'tabs_text_color': '#5f524b', 'content_shadow_spread': '3px', 'footer_widget_title_text_color': '#ffffff', 'body_background': '#1e4c5b url(http://4.bp.blogspot.com/-mFcXFf9YiG0/VLsSFKQuc_I/AAAAAAAAsIQ/gQdjqnK7HsY/s0/Screen%2BShot%2B2015-01-17%2Bat%2B7.50.21%2BPM.jpg) no-repeat fixed top left', 'footer_link_color': '#cc0000', 'tabs_border_radius': '0', 'date_header_color': '#4d6979', 'tabs_margin_bottom': '1em', 'tabs_margin_sides': '15px', 'widget_title_font': 'normal normal 18px Arial, Tahoma, Helvetica, FreeSans, sans-serif', 'post_title_font': 'normal bold 24px Open Sans', 'content_margin': '0', 'body_text_color': '#8c7b7b', 'content_padding': '10px', 'header_background_gradient': 'none', 'footer_border_radius_top': '0', 'tabs_background_color': '#fff1cc', 'tab_first_border_radius': '0', 'link_visited_color': '#53b6cc', 'tabs_selected_text_color': '#413e3c', 'footer_border_radius_bottom': '0', 'post_background_color': '#eeeeee', 'main_background': 'transparent none repeat scroll top center', 'region_shadow_spread': '0', 'link_color': '#53b6cc', 'main_border_radius_top': '0', 'tabs_background_gradient': 'none', 'header_font': 'normal normal 48px Arial, Tahoma, Helvetica, FreeSans, sans-serif', 'tab_selected_background_gradient': 'none', 'post_margin_sides': '-20px', 'startSide': 'left', 'tabs_font': 'normal bold 20px Open Sans', 'footer_link_visited_color': '#cc0000', 'widget_title_text_color': '#53b6cc', 'footer_text_color': '#c5c5c5', 'widget_title_text_transform': 'none', 'tabs_selected_background_color': '#f2c073', 'content_border_radius': '0', 'tabs_separator_color': '#f4e5bf', 'tabs_spacing': '0', 'footer_link_hover_color': '#cc0000', 'mobile_background_overlay': 'transparent none repeat scroll top left', 'endSide': 'right', 'body_background_color': '#1e4c5b', 'header_text_color': '#ffffff', 'content_background': 'transparent url(//www.blogblog.com/1kt/transparent/black50.png) repeat scroll top left', 'post_border_color': '#1e4c5b', 'footer_background': 'transparent none repeat scroll top center', 'body_font': 'normal normal 15px Arial, Tahoma, Helvetica, FreeSans, sans-serif', 'header_border_radius': '0', 'link_hover_color': '#53b6cc', 'header_background_color': 'transparent', 'keycolor': '#331201', 'region_shadow_offset': '0', 'tab_background': 'transparent none no-repeat scroll top left', 'post_footer_text_color': '#000000', 'post_border_radius': '0', 'main_padding_sides': '20px', 'header_padding': '30px', 'tab_border_radius': '0'}, 'override': ''}}, {'name': 'template', 'data': {'name': 'custom', 'localizedName': 'Custom', 'isResponsive': false, 'isAlternateRendering': false, 'isCustom': true}}, {'name': 'view', 'data': {'classic': {'name': 'classic', 'url': '?view\x3dclassic'}, 'flipcard': {'name': 'flipcard', 'url': '?view\x3dflipcard'}, 'magazine': {'name': 'magazine', 'url': '?view\x3dmagazine'}, 'mosaic': {'name': 'mosaic', 'url': '?view\x3dmosaic'}, 'sidebar': {'name': 'sidebar', 'url': '?view\x3dsidebar'}, 'snapshot': {'name': 'snapshot', 'url': '?view\x3dsnapshot'}, 'timeslide': {'name': 'timeslide', 'url': '?view\x3dtimeslide'}, 'title': 'Testing ', 'description': '              Hello, {{ yourName }}!    {{ 5 + 10 }}                  '}}]);
_WidgetManager._RegisterWidget('_HeaderView', new _WidgetInfo('Header1', 'header', null, document.getElementById('Header1'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_BlogArchiveView', new _WidgetInfo('BlogArchive1', 'sidebar-left-1', null, document.getElementById('BlogArchive1'), {'languageDirection': 'ltr', 'loadingMessage': 'Loading...'}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_LabelView', new _WidgetInfo('Label2', 'main', null, document.getElementById('Label2'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_BlogView', new _WidgetInfo('Blog1', 'main', null, document.getElementById('Blog1'), {'cmtInteractionsEnabled': false, 'lightboxEnabled': true, 'lightboxModuleUrl': 'https://www.blogger.com/static/v1/jsbin/4174178637-lbx.js', 'lightboxCssUrl': 'https://www.blogger.com/static/v1/v-css/368954415-lightbox_bundle.css'}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_TextView', new _WidgetInfo('Text1', 'footer-3', null, document.getElementById('Text1'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_PageListView', new _WidgetInfo('PageList1', 'crosscol-overflow', null, document.getElementById('PageList1'), {'title': 'Pages', 'links': [{'href': 'http://www.desaraev.com/', 'title': 'Home', 'isCurrentPage': false}], 'mobile': false}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML6', 'crosscol-overflow', null, document.getElementById('HTML6'), {}, 'displayModeFull'));



if (window.jstiming) window.jstiming.load.tick('widgetJsBefore');



 window.setTimeout(function() {
        document.body.className = document.body.className.replace('loading', '');
      }, 10);
