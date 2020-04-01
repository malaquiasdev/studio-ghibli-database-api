const cheerio = require("cheerio");

const pageData = `
<!DOCTYPE html>
<html
    xmlns:og="http://ogp.me/ns#"
    xmlns:fb="http://www.facebook.com/2008/fbml">
    <head>
        
<script type='text/javascript'>var ue_t0=ue_t0||+new Date();</script>
<script type='text/javascript'>
window.ue_ihb = (window.ue_ihb || window.ueinit || 0) + 1;
if (window.ue_ihb === 1) {

var ue_csm = window,
    ue_hob = +new Date();
(function(d){var e=d.ue=d.ue||{},f=Date.now||function(){return+new Date};e.d=function(b){return f()-(b?0:d.ue_t0)};e.stub=function(b,a){if(!b[a]){var c=[];b[a]=function(){c.push([c.slice.call(arguments),e.d(),d.ue_id])};b[a].replay=function(b){for(var a;a=c.shift();)b(a[0],a[1],a[2])};b[a].isStub=1}};e.exec=function(b,a){return function(){try{return b.apply(this,arguments)}catch(c){ueLogError(c,{attribution:a||"undefined",logLevel:"WARN"})}}}})(ue_csm);


    var ue_err_chan = 'jserr';
(function(d,e){function h(f,b){if(!(a.ec>a.mxe)&&f){a.ter.push(f);b=b||{};var c=f.logLevel||b.logLevel;c&&c!==k&&c!==m&&c!==n&&c!==p||a.ec++;c&&c!=k||a.ecf++;b.pageURL=""+(e.location?e.location.href:"");b.logLevel=c;b.attribution=f.attribution||b.attribution;a.erl.push({ex:f,info:b})}}function l(a,b,c,e,g){d.ueLogError({m:a,f:b,l:c,c:""+e,err:g,fromOnError:1,args:arguments},g?{attribution:g.attribution,logLevel:g.logLevel}:void 0);return!1}var k="FATAL",m="ERROR",n="WARN",p="DOWNGRADED",a={ec:0,ecf:0,
pec:0,ts:0,erl:[],ter:[],mxe:50,startTimer:function(){a.ts++;setInterval(function(){d.ue&&a.pec<a.ec&&d.uex("at");a.pec=a.ec},1E4)}};l.skipTrace=1;h.skipTrace=1;h.isStub=1;d.ueLogError=h;d.ue_err=a;e.onerror=l})(ue_csm,window);


var ue_id = '92175SBNMSHDG2QTPPWB',
    ue_url,
    ue_navtiming = 1,
    ue_mid = 'A1EVAM02EL8SFB',
    ue_sid = '145-9667767-9362462',
    ue_sn = 'www.imdb.com',
    ue_furl = 'fls-na.amazon.com',
    ue_surl = 'https://unagi-na.amazon.com/1/events/com.amazon.csm.nexusclient.prod',
    ue_int = 0,
    ue_fcsn = 1,
    ue_urt = 3,
    ue_rpl_ns = 'cel-rpl',
    ue_ddq = 1,
    ue_fpf = '//fls-na.amazon.com/1/batch/1/OP/A1EVAM02EL8SFB:145-9667767-9362462:92175SBNMSHDG2QTPPWB$uedata=s:',
    ue_sbuimp = 1,

    ue_swi = 1;
function ue_viz(){(function(c,e,a){function k(b){if(c.ue.viz.length<p&&!l){var a=b.type;b=b.originalEvent;/^focus./.test(a)&&b&&(b.toElement||b.fromElement||b.relatedTarget)||(a=e[m]||("blur"==a||"focusout"==a?"hidden":"visible"),c.ue.viz.push(a+":"+(+new Date-c.ue.t0)),"visible"==a&&(ue.isl&&uex("at"),l=1))}}for(var l=0,f,g,m,n=["","webkit","o","ms","moz"],d=0,p=20,h=0;h<n.length&&!d;h++)if(a=n[h],f=(a?a+"H":"h")+"idden",d="boolean"==typeof e[f])g=a+"visibilitychange",m=(a?a+"V":"v")+"isibilityState";
k({});d&&e.addEventListener(g,k,0);c.ue&&d&&(c.ue.pageViz={event:g,propHid:f})})(ue_csm,document,window)};

(function(d,k,K){function E(a){return a&&a.replace&&a.replace(/^\s+|\s+$/g,"")}function r(a){return"undefined"===typeof a}function F(a,b){for(var c in b)b[t](c)&&(a[c]=b[c])}function G(a){try{var b=K.cookie.match(RegExp("(^| )"+a+"=([^;]+)"));if(b)return b[2].trim()}catch(c){}}function L(p,b,c){p&&(d.ue_id=a.id=a.rid=p,w=w.replace(/((.*?:){2})(\w+)/,function(a,b){return b+p}));b&&(w=w.replace(/(.*?:)(\w|-)+/,function(a,c){return c+b}),d.ue_sid=b);c&&a.tag("page-source:"+c);d.ue_fpf=w}function M(){var a=
{};return function(b){b&&(a[b]=1);b=[];for(var c in a)a[t](c)&&b.push(c);return b}}function x(d,b,c,e){e=e||+new B;var f,m,y=k.csa;if(b||r(c)){if(d){f=b?h("t",b)||h("t",b,{}):a.t;f[d]=e;for(m in c)c[t](m)&&h(m,b,c[m]);!b&&k.ue_csa_pl&&y&&y("PageTiming")("mark",Z[d]||d)}return e}}function h(d,b,c){var e=b&&b!=a.id?a.sc[b]:a;e||(e=a.sc[b]={});"id"===d&&c&&(N=1);return e[d]=c||e[d]}function O(d,b,c,e,f){c="on"+c;var h=b[c];"function"===typeof h?d&&(a.h[d]=h):h=function(){};b[c]=function(a){f?(e(a),h(a)):
(h(a),e(a))};b[c]&&(b[c].isUeh=1)}function P(p,b,c,e){function q(b,c){var d=[b],g=0,e={},f,k;c?(d.push("m=1"),e[c]=1):e=a.sc;for(k in e)if(e[t](k)){var q=h("wb",k),m=h("t",k)||{},n=h("t0",k)||a.t0,l;if(c||2==q){q=q?g++:"";d.push("sc"+q+"="+k);for(l in m)3>=l.length&&!r(m[l])&&null!==m[l]&&d.push(l+q+"="+(m[l]-n));d.push("t"+q+"="+m[p]);if(h("ctb",k)||h("wb",k))f=1}}!v&&f&&d.push("ctb=1");return d.join("&")}function m(b,c,g,e){if(b){var f=d.ue_err;d.ue_url&&!e&&b&&0<b.length&&(e=new Image,a.iel.push(e),
e.src=b,a.count&&a.count("postbackImageSize",b.length));if(w){var h=k.encodeURIComponent;h&&b&&(e=new Image,b=""+d.ue_fpf+h(b)+":"+(+new B-d.ue_t0),a.iel.push(e),e.src=b)}else a.log&&(a.log(b,"uedata",{n:1}),a.ielf.push(b));f&&!f.ts&&f.startTimer();a.b&&(f=a.b,a.b="",m(f,c,g,1))}}function y(b){var c=z?z.type:C,d=c&&2!=c,e=a.bfini;N||(e&&1<e&&(b+="&bfform=1",d||(a.isBFT=e-1)),2==c&&(b+="&bfnt=1",a.isBFT=a.isBFT||1),a.ssw&&a.isBFT&&(r(a.isNRBF)&&(c=a.ssw(a.oid),c.e||r(c.val)||(a.isNRBF=1<c.val?0:1)),
r(a.isNRBF)||(b+="&nrbf="+a.isNRBF)),a.isBFT&&!a.isNRBF&&(b+="&bft="+a.isBFT));return b}if(!a.paused&&(b||r(c))){for(var l in c)c[t](l)&&h(l,b,c[l]);x("pc",b,c);l=h("id",b)||a.id;var g=a.url+"?"+p+"&v="+a.v+"&id="+l,v=h("ctb",b)||h("wb",b),n,u;v&&(g+="&ctb="+v);1<d.ueinit&&(g+="&ic="+d.ueinit);if(!("ld"!=p&&"ul"!=p||b&&b!=l)){if("ld"==p){try{k[H]&&k[H].isUeh&&(k[H]=null)}catch(G){}if(k.chrome)for(u=0;u<I.length;u++)Q(D,I[u]);(u=K.ue_backdetect)&&u.ue_back&&u.ue_back.value++;d._uess&&(n=d._uess());
a.isl=1}a._bf&&(g+="&bf="+a._bf());d.ue_navtiming&&f&&(h("ctb",l,"1"),x("tc",C,C,J));A&&!R&&(f&&F(a.t,{na_:f.navigationStart,ul_:f.unloadEventStart,_ul:f.unloadEventEnd,rd_:f.redirectStart,_rd:f.redirectEnd,fe_:f.fetchStart,lk_:f.domainLookupStart,_lk:f.domainLookupEnd,co_:f.connectStart,_co:f.connectEnd,sc_:f.secureConnectionStart,rq_:f.requestStart,rs_:f.responseStart,_rs:f.responseEnd,dl_:f.domLoading,di_:f.domInteractive,de_:f.domContentLoadedEventStart,_de:f.domContentLoadedEventEnd,_dc:f.domComplete,
ld_:f.loadEventStart,_ld:f.loadEventEnd,ntd:("function"!==typeof A.now||r(J)?0:new B(J+A.now())-new B)+a.t0}),z&&F(a.t,{ty:z.type+a.t0,rc:z.redirectCount+a.t0}),R=1);F(a.t,{hob:d.ue_hob,hoe:d.ue_hoe});a.ifr&&(g+="&ifr=1")}x(p,b,c,e);c="ld"==p&&b&&h("wb",b);var s;c||b&&b!==l||$(b);c||l==a.oid||aa(l,(h("t",b)||{}).tc||+h("t0",b),+h("t0",b));(e=d.ue_mbl)&&e.cnt&&!c&&(g+=e.cnt());c?h("wb",b,2):"ld"==p&&(a.lid=E(l));for(s in a.sc)if(1==h("wb",s))break;if(c){if(a.s)return;g=q(g,null)}else e=q(g,null),e!=
g&&(e=y(e),a.b=e),n&&(g+=n),g=q(g,b||a.id);g=y(g);if(a.b||c)for(s in a.sc)2==h("wb",s)&&delete a.sc[s];n=0;a._rt&&(g+="&rt="+a._rt());c||(a.s=0,(n=d.ue_err)&&0<n.ec&&n.pec<n.ec&&(n.pec=n.ec,g+="&ec="+n.ec+"&ecf="+n.ecf),n=h("ctb",b),h("t",b,{}));a.tag&&a.tag().length&&(g+="&csmtags="+a.tag().join("|"),a.tag=M());s=a.viz||[];(e=s.length)&&(g+="&viz="+s.splice(0,e).join("|"));r(d.ue_pty)||(g+="&pty="+d.ue_pty+"&spty="+d.ue_spty+"&pti="+d.ue_pti);a.tabid&&(g+="&tid="+a.tabid);a.aftb&&(g+="&aftb=1");
!a._ui||b&&b!=l||(g+=a._ui());a.a=g;m(g,p,n,c)}}function $(a){var b=k.ue_csm_markers||{},c;for(c in b)b[t](c)&&x(c,a,C,b[c])}function v(a,b,c){c=c||k;if(c[S])c[S](a,b,!1);else if(c[T])c[T]("on"+a,b)}function Q(a,b,c){c=c||k;if(c[U])c[U](a,b,!1);else if(c[V])c[V]("on"+a,b)}function W(){function a(){d.onUl()}function b(a){return function(){c[a]||(c[a]=1,P(a))}}var c={},e,f;d.onLd=b("ld");d.onLdEnd=b("ld");d.onUl=b("ul");e={stop:b("os")};k.chrome?(v(D,a),I.push(a)):e[D]=d.onUl;for(f in e)e[t](f)&&O(0,
k,f,e[f]);d.ue_viz&&ue_viz();v("load",d.onLd);x("ue")}function aa(f,b,c){var e=d.ue_mbl,h=k.csa,m=h&&h("SPA"),h=h&&h("Content");e&&e.ajax&&e.ajax(b,c);m&&h&&(m("newPage",{requestId:f,transitionType:"soft"}),h("get","page")("emit","loaded"));a.tag("ajax-transition")}d.ueinit=(d.ueinit||0)+1;var a=d.ue=d.ue||{};a.t0=k.aPageStart||d.ue_t0;a.id=d.ue_id;a.url=d.ue_url;a.rid=d.ue_id;a.a="";a.b="";a.h={};a.s=1;a.t={};a.sc={};a.iel=[];a.ielf=[];a.viz=[];a.v="0.209584.0";a.paused=!1;var t="hasOwnProperty",
D="beforeunload",H="on"+D,S="addEventListener",U="removeEventListener",T="attachEvent",V="detachEvent",Z={cf:"criticalFeature",af:"aboveTheFold",fn:"functional",bb:"bodyBegin",be:"bodyEnd",ld:"loaded"},B=k.Date,A=k.performance||k.webkitPerformance,f=(A||{}).timing,z=(A||{}).navigation,J=(f||{}).navigationStart,w=d.ue_fpf,N=0,R=0,I=[],C;a.oid=E(a.id);a.lid=E(a.id);a._t0=a.t0;a.tag=M();a.ifr=k.top!==k.self||k.frameElement?1:0;a.attach=v;a.detach=Q;if("000-0000000-8675309"===d.ue_sid){var X=G("cdn-rid"),
Y=G("session-id");X&&Y&&L(X,Y)}d.uei=W;d.ueh=O;d.ues=h;d.uet=x;d.uex=P;a.reset=L;a.pause=function(d){a.paused=d};W()})(ue_csm,window,ue_csm.document);


ue.stub(ue,"log");ue.stub(ue,"onunload");ue.stub(ue,"onflush");
(function(c){var a=c.ue;a.cv={};a.cv.scopes={};a.count=function(d,c,b){var e={},f=a.cv,g=b&&0===b.c;e.counter=d;e.value=c;e.t=a.d();b&&b.scope&&(f=a.cv.scopes[b.scope]=a.cv.scopes[b.scope]||{},e.scope=b.scope);if(void 0===c)return f[d];f[d]=c;d=0;b&&b.bf&&(d=1);ue_csm.ue_sclog||!a.clog||0!==d||g?a.log&&a.log(e,"csmcount",{c:1,bf:d}):a.clog(e,"csmcount",{bf:d})};a.count("baselineCounter2",1);a&&a.event&&(a.event({requestId:c.ue_id||"rid",server:c.ue_sn||"sn",obfuscatedMarketplaceId:c.ue_mid||"mid"},
"csm","csm.CSMBaselineEvent.4"),a.count("nexusBaselineCounter",1,{bf:1}))})(ue_csm);



var ue_hoe = +new Date();
}
window.ueinit = window.ue_ihb;
</script>

<!-- 2cm1xybe2jjth6dva --> 
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="apple-itunes-app" content="app-id=342792525, app-argument=imdb:///?src=mdot">



        <script type="text/javascript">var IMDbTimer={starttime: new Date().getTime(),pt:'java'};</script>

<script>
    if (typeof uet == 'function') {
      uet("bb", "LoadTitle", {wb: 1});
    }
</script>
  <script>(function(t){ (t.events = t.events || {})["csm_head_pre_title"] = new Date().getTime(); })(IMDbTimer);</script>
        <title>Most Popular Studio Ghibli Movies and TV Shows  - IMDb</title>
  <script>(function(t){ (t.events = t.events || {})["csm_head_post_title"] = new Date().getTime(); })(IMDbTimer);</script>
<script>
    if (typeof uet == 'function') {
      uet("be", "LoadTitle", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "LoadTitle", {wb: 1});
    }
</script>

        <link rel="canonical" href="https://www.imdb.com/search/keyword/?keywords=studio-ghibli" />
        <meta property="og:url" content="http://www.imdb.com/search/keyword/?keywords=studio-ghibli" />

<script>
    if (typeof uet == 'function') {
      uet("bb", "LoadIcons", {wb: 1});
    }
</script>
  <script>(function(t){ (t.events = t.events || {})["csm_head_pre_icon"] = new Date().getTime(); })(IMDbTimer);</script>
        <link href="https://m.media-amazon.com/images/G/01/imdb/images/safari-favicon-517611381._CB466747087_.svg" mask rel="icon" sizes="any">
        <link rel="icon" type="image/ico" href="https://m.media-amazon.com/images/G/01/imdb/images/favicon-2165806970._CB468200532_.ico" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" type="image/x-icon" href="https://m.media-amazon.com/images/G/01/imdb/images/desktop-favicon-2165806970._CB466679383_.ico" />
        <link href="https://m.media-amazon.com/images/G/01/imdb/images/mobile/apple-touch-icon-web-4151659188._CB466678729_.png" rel="apple-touch-icon"> 
        <link href="https://m.media-amazon.com/images/G/01/imdb/images/mobile/apple-touch-icon-web-76x76-53536248._CB468298017_.png" rel="apple-touch-icon" sizes="76x76"> 
        <link href="https://m.media-amazon.com/images/G/01/imdb/images/mobile/apple-touch-icon-web-120x120-2442878471._CB466887861_.png" rel="apple-touch-icon" sizes="120x120"> 
        <link href="https://m.media-amazon.com/images/G/01/imdb/images/mobile/apple-touch-icon-web-152x152-1475823641._CB466997522_.png" rel="apple-touch-icon" sizes="152x152">            
        <link rel="search" type="application/opensearchdescription+xml" href="https://m.media-amazon.com/images/G/01/imdb/images/imdbsearch-3349468880._CB466670431_.xml" title="IMDb" />
  <script>(function(t){ (t.events = t.events || {})["csm_head_post_icon"] = new Date().getTime(); })(IMDbTimer);</script>
<script>
    if (typeof uet == 'function') {
      uet("be", "LoadIcons", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "LoadIcons", {wb: 1});
    }
</script>

        <meta property="pageType" content="search" />
        <meta property="subpageType" content="keyword" />


        <link rel='image_src' href="https://m.media-amazon.com/images/G/01/imdb/images-ANDW73HA/imdb_fb_logo._CB1542065250_.png">
        <meta property='og:image' content="https://m.media-amazon.com/images/G/01/imdb/images-ANDW73HA/imdb_fb_logo._CB1542065250_.png" />

    <meta property='fb:app_id' content='115109575169727' />

      <meta property='og:title' content="Most Popular Studio Ghibli Movies and TV Shows  - IMDb" />
    <meta property='og:site_name' content='IMDb' />
    <meta name="title" content="Most Popular Studio Ghibli Movies and TV Shows  - IMDb" />
        <meta name="description" content="IMDb's advanced search allows you to run extremely powerful queries over all people and titles in the database. Find exactly what you're looking for!" />
        <meta property="og:description" content="IMDb's advanced search allows you to run extremely powerful queries over all people and titles in the database. Find exactly what you're looking for!" />
        <meta name="request_id" content="92175SBNMSHDG2QTPPWB" />

    <script>
        (function (win) {
            win.PLAID_LOAD_FONTS_FIRED = true;

            if (typeof win.FontFace !== "undefined"
                && typeof win.Promise !== "undefined") {
                if (win.ue) {
                    win.uet("bb", "LoadRoboto", { wb: 1 });
                }
                var allowableLoadTime = 1000;
                var startTimeInt = +new Date();
                var roboto = new FontFace('Roboto',
                    'url(https://m.media-amazon.com/images/G/01/IMDb/cm9ib3Rv.woff2)',
                    { style:'normal', weight: 400 });
                var robotoMedium = new FontFace('Roboto',
                    'url(https://m.media-amazon.com/images/G/01/IMDb/cm9ib3RvTWVk.woff2)',
                    { style:'normal', weight: 500 });
                var robotoBold = new FontFace('Roboto',
                    'url(https://m.media-amazon.com/images/G/01/IMDb/cm9ib3RvQm9sZA.woff2)',
                    { style:'normal', weight: 600 });
                var robotoLoaded = roboto.load();
                var robotoMediumLoaded = robotoMedium.load();
                var robotoBoldLoaded = robotoBold.load();

                win.Promise.all([robotoLoaded, robotoMediumLoaded, robotoBoldLoaded]).then(function() {
                    var loadTimeInt = +new Date();
                    var robotoLoadedCount = 0;
                    if ((loadTimeInt - startTimeInt) <= allowableLoadTime) {
                        win.document.fonts.add(roboto);
                        win.document.fonts.add(robotoMedium);
                        win.document.fonts.add(robotoBold);
                        robotoLoadedCount++;
                    }
                    if (win.ue) {
                        win.ue.count("roboto-loaded", robotoLoadedCount);
                        win.uet("be", "LoadRoboto", { wb: 1 });
                        win.uex("ld", "LoadRoboto", { wb: 1 });
                    }
                }).catch(function() {
                    if (win.ue) {
                        win.ue.count("roboto-loaded", 0);
                    }
                });
            } else {
                if (win.ue) {
                    win.ue.count("roboto-load-not-attempted", 1);
                }
            }
        })(window);
    </script>

<script>
    if (typeof uet == 'function') {
      uet("bb", "LoadCSS", {wb: 1});
    }
</script>
  <script>(function(t){ (t.events = t.events || {})["csm_head_pre_css"] = new Date().getTime(); })(IMDbTimer);</script>
        
<link rel="stylesheet" type="text/css" href="https://m.media-amazon.com/images/I/41F+1kugfzL.css" /><link rel="stylesheet" type="text/css" href="https://m.media-amazon.com/images/I/31jGWl2bOPL.css" />

<link rel="stylesheet" type="text/css" href="https://m.media-amazon.com/images/G/01/imdb/css/collections/consumersite-4091446329._CB421198925_.css" />
<!-- h=ics-c52xl-12-1b-43986e7b.us-east-1 -->
<!--[if IE]><link rel="stylesheet" type="text/css" href="https://m.media-amazon.com/images/G/01/imdb/css/collections/ie-3579153447._CB468514839_.css" /><![endif]-->

            <link rel="stylesheet" type="text/css" href="https://m.media-amazon.com/images/G/01/imdb/css/collections/other-3053529766._CB438711245_.css" />
            <link rel="stylesheet" type="text/css" href="https://m.media-amazon.com/images/G/01/imdb/css/collections/starbarwidget-1368445358._CB440579467_.css" />
            <link rel="stylesheet" type="text/css" href="https://m.media-amazon.com/images/G/01/imdb/css/collections/watchlistButton-197279306._CB468513132_.css" />
        <noscript>
            <link rel="stylesheet" type="text/css" href="https://m.media-amazon.com/images/G/01/imdb/css/wheel/nojs-2827156349._CB468153063_.css">
        </noscript>
  <script>(function(t){ (t.events = t.events || {})["csm_head_post_css"] = new Date().getTime(); })(IMDbTimer);</script>
<script>
    if (typeof uet == 'function') {
      uet("be", "LoadCSS", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "LoadCSS", {wb: 1});
    }
</script>

<script>
    if (typeof uet == 'function') {
      uet("bb", "LoadJS", {wb: 1});
    }
</script>
<script>
    if (typeof uet == 'function') {
      uet("bb", "LoadHeaderJS", {wb: 1});
    }
</script>
  <script>(function(t){ (t.events = t.events || {})["csm_head_pre_ads"] = new Date().getTime(); })(IMDbTimer);</script>
        <script>
window.ads_js_start = new Date().getTime();
var imdbads = imdbads || {}; imdbads.cmd = imdbads.cmd || [];
</script>
<!-- begin SRA -->
<script>
!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";a(2)},{2:2}],2:[function(a,b,c){"use strict";!function(){var a,b,c=function(a){return"[object Array]"===Object.prototype.toString.call(a)},d=function(a,b){for(var c=0;c<a.length;c++)c in a&&b.call(null,a[c],c)},e=[],f=!1,g=!1,h=function(){var a=[],b=[],c={};return d(e,function(e){var f="";d(e.dartsite.split("/"),function(b){""!==b&&(b in c||(c[b]=a.length,a.push(b)),f+="/"+c[b])}),b.push(f)}),{iu_parts:a,enc_prev_ius:b}},i=function(){var a=[];return d(e,function(b){var c=[];d(b.sizes,function(a){c.push(a.join("x"))}),a.push(c.join("|"))}),a},j=function(){var a=[];return d(e,function(b){a.push(k(b.targeting))}),a.join("|")},k=function(a,b){var c,d=[];for(var e in a){c=[];for(var f=0;f<a[e].length;f++)c.push(encodeURIComponent(a[e][f]));b?d.push(e+"="+encodeURIComponent(c.join(","))):d.push(e+"="+c.join(","))}return d.join("&")},l=function(){var a=+new Date;g||document.readyState&&"loaded"!==document.readyState||(g=!0,f&&imdbads.cmd.push(function(){for(var b=0;b<e.length;b++)generic.monitoring.record_metric(e[b].name+".fail",csm.duration(a))}))};window.tinygpt={define_slot:function(a,b,c,d){e.push({dartsite:a.replace(/\/$/,""),sizes:b,name:c,targeting:d})},set_targeting:function(b){a=b},callback:function(a){var c,d,f={},g=+new Date;try{for(var h=0;h<e.length;h++)c=e[h].dartsite,d=e[h].name,a[h][c]?f[d]=a[h][c]:window.console&&console.error&&console.error("Unable to correlate GPT response for "+d);imdbads.cmd.push(function(){for(var a=0;a<e.length;a++)ad_utils.slot_events.trigger(e[a].name,"request",{timestamp:b}),ad_utils.slot_events.trigger(e[a].name,"tagdeliver",{timestamp:g});ad_utils.gpt.handle_response(f)})}catch(i){window.console&&console.error&&console.error("Exception in GPT callback: "+i.message)}},send:function(){var d,g,m=[],n=function(a,b){c(b)&&(b=b.join(",")),b&&m.push(a+"="+encodeURIComponent(""+b))};if(0===e.length)return void tinygpt.callback({});n("gdfp_req","1"),n("correlator",Math.floor(4503599627370496*Math.random())),n("output","json_html"),n("callback","tinygpt.callback"),n("impl","fifs"),n("json_a","1");var o=h();n("iu_parts",o.iu_parts),n("enc_prev_ius",o.enc_prev_ius),n("prev_iu_szs",i()),n("prev_scp",j()),n("cust_params",k(a,!0)),d=document.createElement("script"),g=document.getElementsByTagName("script")[0],d.async=!0,d.type="text/javascript",d.src="http://pubads.g.doubleclick.net/gampad/ads?"+m.join("&"),d.id="tinygpt",d.onload=d.onerror=d.onreadystatechange=l,f=!0,g.parentNode.insertBefore(d,g),b=+new Date}}}()},{}]},{},[1]);</script>
<!-- begin ads header -->
<script src="https://ia.media-imdb.com/images/G/01/imdbads/js/collections/tarnhelm-2353668352._CB421988838_.js"></script>
<script id="ads_doWithAds">
doWithAds = function(inside, failureMessage){
if ('consoleLog' in window &&
'generic' in window &&
'ad_utils' in window &&
'custom' in window &&
'monitoring' in generic &&
'document_is_ready' in generic) {
try{
inside.call(this);
}catch(e) {
if ( window.ueLogError ) {
if(typeof failureMessage !== 'undefined'){
e.message = failureMessage;
}
e.attribution = "Advertising";
e.logLevel = "ERROR";
ueLogError(e);
}
if( (document.location.hash.match('debug=1')) &&
(typeof failureMessage !== 'undefined') ){
console.error(failureMessage);
}
}
} else {
if( (document.location.hash.match('debug=1')) &&
(typeof failureMessage !== 'undefined') ){
console.error(failureMessage);
}
}
};
</script><script id="ads_monitoring_setup">
doWithAds(function(){
generic.monitoring.set_forester_info("main");
generic.monitoring.set_twilight_info(
"main",
"BR",
"148a41fc17c5898264514f35af73d2086b230466",
"2020-03-15T16%3A08%3A28GMT",
"https://s.media-imdb.com/twilight/?",
"consumer");
generic.monitoring.start_timing("page_load");
generic.seconds_to_midnight = 53492;
generic.days_to_midnight = 0.6191203594207764;
},"Generic not defined, skipping monitoring setup.");
</script>
<script src="https://images-na.ssl-images-amazon.com/images/G/01/ape/sf/desktop/DAsf-1.24._V496156188_.js"></script>
<script id="ads_safeframe_setup">
doWithAds(function(){
if (typeof DAsf != 'undefined' && typeof DAsf.registerCustomMessageListener === 'function') {
DAsf.registerCustomMessageListener('updateAdDetails', window.ad_utils.update_ad_details);
DAsf.registerCustomMessageListener('setPartner', window.ad_utils.set_partner);
DAsf.registerCustomMessageListener('adFeedback', window.ad_utils.show_ad_feedback);
DAsf.registerCustomMessageListener('sendMetrics', window.generic.monitoring.update_sf_slot_metrics);
DAsf.registerCustomMessageListener('expand', window.ad_utils.expand_overlay);
DAsf.registerCustomMessageListener('collapse', window.ad_utils.collapse_overlay);
}
},"ads js missing, skipping safeframe setup.");
</script>
<script id="ads_general_setup">
doWithAds(function(){
generic.monitoring.record_metric("ads_js_request_to_done", (new Date().getTime()) - window.ads_js_start);
generic.send_csm_head_metrics && generic.send_csm_head_metrics();
ad_utils.set_slots_on_page({ 'injected_billboard':1, 'injected_navstrip':1, 'inline80':1, 'sis_pixel':1, 'bottom_ad':1, 'top_ad':1, 'top_rhs':1, 'btf_rhs2':1, 'rhs_cornerstone':1 });
custom.full_page.data_url = "https://ia.media-imdb.com/images/G/01/imdbads/js/graffiti_data-14866052._CB426574947_.js";
consoleLog('advertising initialized','ads');
},"ads js missing, skipping general setup.");
</script>
<script>doWithAds(function() { ad_utils.ads_header.done(); });</script>
<link rel="stylesheet" href="https://ia.media-imdb.com/images/G/01/imdbads/css/homepage-styles-4224521496._CB426460418_.css"/>
<!-- end ads header -->
        <script  type="text/javascript">
            // ensures js doesn't die if ads service fails.  
            // Note that we need to define the js here, since ad js is being rendered inline after this.
            (function(f) {
                // Fallback javascript, when the ad Service call fails.  
                
                if((window.csm == null || window.generic == null || window.consoleLog == null)) {
                    if (window.console && console.log) {
                        console.log("one or more of window.csm, window.generic or window.consoleLog has been stubbed...");
                    }
                }
                
                window.csm = window.csm || { measure:f, record:f, duration:f, listen:f, metrics:{} };
                window.generic = window.generic || { monitoring: { start_timing: f, stop_timing: f } };
                window.consoleLog = window.consoleLog || f;
            })(function() {});
        </script>
<script type="text/javascript">
    if (!window.RadWidget) {
        window.RadWidget = {
            registerReactWidgetInstance: function(input) {
                window.RadWidget[input.widgetName] = window.RadWidget[input.widgetName] || [];
                window.RadWidget[input.widgetName].push({
                    id: input.instanceId,
                    props: JSON.stringify(input.model)
                })
            },
            getReactWidgetInstances: function(widgetName) {
                return window.RadWidget[widgetName] || []
            }
        };
    }
</script>  <script>
    if ('csm' in window) {
      csm.measure('csm_head_delivery_finished');
    }
  </script>
<script>
    if (typeof uet == 'function') {
      uet("be", "LoadHeaderJS", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "LoadHeaderJS", {wb: 1});
    }
</script>
<script>
    if (typeof uet == 'function') {
      uet("be", "LoadJS", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "LoadJS", {wb: 1});
    }
</script>
        <script type='text/javascript'>
window.ue_ihe = (window.ue_ihe || 0) + 1;
if (window.ue_ihe === 1) {
(function(k,l,g){function m(a){c||(c=b[a.type].id,"undefined"===typeof a.clientX?(e=a.pageX,f=a.pageY):(e=a.clientX,f=a.clientY),2!=c||h&&(h!=e||n!=f)?(r(),d.isl&&l.setTimeout(function(){p("at",d.id)},0)):(h=e,n=f,c=0))}function r(){for(var a in b)b.hasOwnProperty(a)&&d.detach(a,m,b[a].parent)}function s(){for(var a in b)b.hasOwnProperty(a)&&d.attach(a,m,b[a].parent)}function t(){var a="";!q&&c&&(q=1,a+="&ui="+c);return a}var d=k.ue,p=k.uex,q=0,c=0,h,n,e,f,b={click:{id:1,parent:g},mousemove:{id:2,
parent:g},scroll:{id:3,parent:l},keydown:{id:4,parent:g}};d&&p&&(s(),d._ui=t)})(ue_csm,window,document);



(function(s,l){function m(b,e,c){c=c||new Date(+new Date+t);c="expires="+c.toUTCString();n.cookie=b+"="+e+";"+c+";path=/"}function p(b){b+="=";for(var e=n.cookie.split(";"),c=0;c<e.length;c++){for(var a=e[c];" "==a.charAt(0);)a=a.substring(1);if(0===a.indexOf(b))return decodeURIComponent(a.substring(b.length,a.length))}return""}function q(b,e,c){if(!e)return b;-1<b.indexOf("{")&&(b="");for(var a=b.split("&"),f,d=!1,h=!1,g=0;g<a.length;g++)f=a[g].split(":"),f[0]==e?(!c||d?a.splice(g,1):(f[1]=c,a[g]=
f.join(":")),h=d=!0):2>f.length&&(a.splice(g,1),h=!0);h&&(b=a.join("&"));!d&&c&&(0<b.length&&(b+="&"),b+=e+":"+c);return b}var k=s.ue||{},t=6048E7,n=ue_csm.document||l.document,r=null,d;a:{try{d=l.localStorage;break a}catch(u){}d=void 0}k.count&&k.count("csm.cookieSize",document.cookie.length);k.cookie={get:p,set:m,updateCsmHit:function(b,e,c){try{var a;if(!(a=r)){var f;a:{try{if(d&&d.getItem){f=d.getItem("csm-hit");break a}}catch(k){}f=void 0}a=f||p("csm-hit")||"{}"}a=q(a,b,e);r=a=q(a,"t",+new Date);
try{d&&d.setItem&&d.setItem("csm-hit",a)}catch(h){}m("csm-hit",a,c)}catch(g){"function"==typeof l.ueLogError&&ueLogError(Error("Cookie manager: "+g.message),{logLevel:"WARN"})}}}})(ue_csm,window);

(function(l,d){function c(b){b="";var c=a.isBFT?"b":"s",d=""+a.oid,f=""+a.lid,g=d;d!=f&&20==f.length&&(c+="a",g+="-"+f);a.tabid&&(b=a.tabid+"+");b+=c+"-"+g;b!=e&&100>b.length&&(e=b,a.cookie?a.cookie.updateCsmHit(m,b+("|"+ +new Date)):document.cookie="csm-hit="+b+("|"+ +new Date)+n+"; path=/")}function p(){e=0}function h(b){!0===d[a.pageViz.propHid]?e=0:!1===d[a.pageViz.propHid]&&c({type:"visible"})}var n="; expires="+(new Date(+new Date+6048E5)).toGMTString(),m="tb",e,a=l.ue||{},k=a.pageViz&&a.pageViz.event&&
a.pageViz.propHid;a.attach&&(a.attach("click",c),a.attach("keyup",c),k||(a.attach("focus",c),a.attach("blur",p)),k&&(a.attach(a.pageViz.event,h,d),h({})));a.aftb=1})(ue_csm,document);


ue_csm.ue.stub(ue,"impression");


ue.stub(ue,"trigger");



if(window.ue&&uet) { uet('bb'); }

}
</script>
    </head>
    <body id="styleguide-v2" class="fixed">
        

<script>
!function(){function n(n,t){var r=i(n);return t&&(r=r("instance",t)),r}var r=[],c=0,i=function(t){return function(){var n=c++;return r.push([t,[].slice.call(arguments,0),n,{time:Date.now()}]),i(n)}};n._s=r,this.csa=n}();;
csa('Config', {});
if (window.csa) {
    csa("Config", {
        'Application': 'Retail',
        'ObfuscatedMarketplaceId': 'A1EVAM02EL8SFB',
        'Events.SushiEndpoint': 'https://unagi-na.amazon.com/1/events/com.amazon.csm.nexusclient.prod',
        'CacheDetection.RequestID': "92175SBNMSHDG2QTPPWB",
        'CacheDetection.Callback': window.ue && ue.reset
    });

    csa("Events")("setEntity", {
        page: {requestId: "92175SBNMSHDG2QTPPWB", meaningful: "interactive"},
        session: {id: "145-9667767-9362462"}
    });
}
!function(n){var e,o,r="splice",i=n.csa,t={},u={},f=n.csa._s,c=0,a={},s={},l=setTimeout,g=Object.keys;function h(n,t){return i(n,t)}function d(n,t){var i=u[n]||{};D(i,t),u[n]=i,l(b,0)}function p(n,t){a[n]||(a[n]=[]),a[n].push(t)}function v(n,t){if(n in s)t(s[n]);else{p(n,function(n){return t(n),!1})}}function m(n){if(t.DEBUG)throw n}function w(){return Math.abs(4294967295*Math.random()|0).toString(36)}function b(){for(var n=0;n<f.length;){var t=f[n],i=t[0]in u;if(!i&&!o)return void(c=t.length);i?(f[r](c=n,1),y(t)):n++}}function y(n){var arguments,t=u[n[0]],i=(arguments=n[1])[0];if(!t||!t[i])return m("Undefined function: "+t+"/"+i);e=n[3],u[n[2]]=t[i].apply(t,arguments.slice(1))||{},e=0}function S(){o=1,b()}function D(t,i){g(i).forEach(function(n){t[n]=i[n]})}v("$beforeunload",S),d("Config",{instance:function(n){D(t,n)}}),i.plugin=function(n){n(h)},h.config=t,h.register=d,h.on=p,h.removeListener=function(n,t){var i=a[n];i&&i[r](i.indexOf(t),1)},h.once=v,h.emit=function(n,t){for(var i=a[n]||[],e=0;e<i.length;)!1===i[e](t)?i[r](e,1):e++;s[n]=t||{}},h.UUID=function(){return[w(),w(),w(),w()].join("-")},h.time=function(n){var t=e?new Date(e.time):new Date;return"ISO"===n?t.toISOString():t.getTime()},h.error=m,h.exec=function(n,t){return function(){try{n.apply(this,arguments)}catch(n){}}},(h.global=n).csa._s.push=function(n){n[0]in u&&(!f.length||o)?y(n):f[r](c++,0,n)},b(),l(function(){l(S,t.SkipMissingPluginsTimeout||5e3)},1)}("undefined"!=typeof window?window:global);csa.plugin(function(t){var e;function n(){if(!e)try{e=t.global.localStorage||{}}catch(t){e={}}}t.store=function(t,c){try{if(n(),!t)return Object.keys(e);if(!c)return e[t];e[t]=c}catch(t){}},t.deleteStored=function(t){try{n(),delete e[t]}catch(t){}}});csa.plugin(function(n){var r,e=n.global,o=n("Events"),i=e.location,f=e.document,a=e.addEventListener,l=n.emit;function t(a){var e=!!r;e&&(l("$beforePageTransition"),l("$pageTransition"),o("removeEntity","page"));var t={schemaId:"csa.PageEntity.1",id:r=n.UUID(),url:i.href,server:i.hostname,path:i.pathname,referrer:f.referrer,title:f.title};Object.keys(a||{}).forEach(function(e){t[e]=a[e]}),o("setEntity",{page:t}),e&&l("$afterPageTransition")}function d(){l("$load"),l("$afterload")}function c(){l("$beforeunload"),l("$unload"),l("$afterunload")}i&&f&&(a&&(a("beforeunload",c),a("pagehide",c),"complete"===f.readyState?d():a("load",d)),n.register("SPA",{newPage:t}),t())});csa.plugin(function(o){var t="UNKNOWN",u="id",e="messageId",i="timestamp",f="producerId",c="application",a="obfuscatedMarketplaceId",r="entities",s="schemaId",d="version",l="attributes",p=o.config,v=o("Transport"),I={},g=function(n,t){Object.keys(n).forEach(t)};function m(t,e,i){g(e,function(n){n in t||(t[n]={version:1,id:e[n][u]||o.UUID()}),b(t[n],e[n],1===i||!0===i||(i||{})[n])})}function b(t,e,i){g(e,function(n){!i&&n!==u||(t[n]=e[n])})}function y(o,n,c){g(n,function(n){var t=o[n];if(t[s]){var e={},i={};E(e),e[u]=t[u],e[f]=t[f]||c,e[s]=t[s],e[d]=t[d]++,b(e[l]=i,t,1),O(i),v("log",e)}})}function E(n){n[i]=function(n){return"number"==typeof n&&(n=new Date(n).toISOString()),n||o.time("ISO")}(n[i]),n[e]=o.UUID(),n[c]=p.Application||t,n[a]=p.ObfuscatedMarketplaceId||t}function O(n){delete n[d],delete n[s],delete n[f]}function U(o){var c={};this.log=function(n,t){var e={},i=(t||{}).full;E(n),m(e,I,i),m(e,c,i),m(e,n[r]||{},i),g(e,function(n){O(e[n])}),n[f]=o[f],n[r]=e,v("log",n)},this.setEntity=function(n){m(c,n,1),y(c,n,o[f])}}o.register("Events",{setEntity:function(n){m(I,n,1),y(I,n,"csa")},removeEntity:function(n){delete I[n]},instance:function(n){return new U(n)}})});csa.plugin(function(s){var c,l="Transport",d="post",u="preflight",r="csa.cajun.",i="store",a="deleteStored",n="addEventListener",f="sendBeacon",t=0,e=s.config[l+".BufferSize"]||2e3,g=s.config[l+".RetryDelay"]||1500,o=[],h=0,p=[],v=s.global,y=v.document,m=s.config[l+".FlushInterval"]||5e3,E=0;function T(n){if(864e5<s.time()-+new Date(n.timestamp))return s.error("Event is too old: "+n);h<e&&(o.push(n),h++,!E&&t&&(E=setTimeout(R,m)))}function R(){p.forEach(function(t){var e=[];o.forEach(function(n){t.accepts(n)&&e.push(n)}),e.length&&(t.chunks?t.chunks(e).forEach(function(n){S(t,n)}):S(t,e))}),o=[],E=0}function S(t,e){function o(){s[a](r+n)}var n=s.UUID();s[i](r+n,JSON.stringify(e)),[function(n,t,e){var o=v.navigator||{},r=v.cordova||{};if(!o[f]||!n[d])return 0;n[u]&&r&&"ios"===r.platformId&&!c&&((new Image).src=n[u]().url,c=1);var i=n[d](t);if(!i.type&&o[f](i.url,i.body))return e(),1},function(n,t,e){if(!n[d])return 0;var o=n[d](t),r=o.url,i=o.body,c=o.type,u=new XMLHttpRequest,a=0;function f(n,t,e){u.open("POST",n),e&&u.setRequestHeader("Content-Type",e),u.send(t)}return u.onload=function(){u.status<299?e():s.config[l+".XHRRetries"]&&a<3&&setTimeout(function(){f(r,i,c)},++a*g)},f(r,i,c),1}].some(function(n){try{return n(t,e,o)}catch(n){}})}s.once("$afterload",function(){t=1,function(e){(s[i]()||[]).forEach(function(n){if(!n.indexOf(r))try{var t=s[i](n);s[a](n),JSON.parse(t).forEach(e)}catch(n){s.error(n)}})}(T),y&&y[n]&&y[n]("visibilitychange",R,!1),R()}),s.once("$afterunload",function(){t=1,R()}),s.on("$afterPageTransition",function(){h=0}),s.register(l,{log:T,register:function(n){p.push(n)}})});csa.plugin(function(n){var r=n.config["Events.SushiEndpoint"];n("Transport")("register",{accepts:function(n){return n.schemaId},post:function(n){var t=n.map(function(n){return{data:n}});return{url:r,body:JSON.stringify({events:t})}},preflight:function(){var n,t=/\/\/(.*?)\//.exec(r);return t&&t[1]&&(n="https://"+t[1]+"/ping"),{url:n}},chunks:function(n){for(var t=[];500<n.length;)t.push(n.splice(0,500));return t.push(n),t}})});csa.plugin(function(t){var i,a,o,r,d=t.config["Content.ImpressionMinimumTime"]||1e3,e="addEventListener",c="hidden",n="renderedTo",s=n+"Viewed",u=n+"Meaningful",f=n+"Impressed",g=1,m=2,l=3,v=4,p=5,h="loaded",T=7,I=t.global,P=t("Events",{producerId:"csa"}),y=I.document,C={},b={};if(!y||!y[e]||void 0===y[c])return E("PageStateChange.2",{state:"ignored"});function w(e){if(!C[T]){var n;if(C[e]=t.time(),e!==l&&e!==h||(i=i||C[e]),i&&!y[c])a=a||C[e],(n={})[u]=i-o,n[s]=a-o,E("PageView.4",n),r=r||setTimeout(S,d);if(e!==p&&e!==g&&e!==m||(clearTimeout(r),r=0),e!==g&&e!==m||E("PageRender.3",{transitionType:e===g?"hard":"soft"}),e===T)(n={})[u]=i-o,n[s]=a-o,n[f]=C[e]-o,E("PageImpressed.2",n)}}function E(e,n){b[e]||(n.schemaId="csa."+e,P("log",n,{full:1}),b[e]=1)}function M(){w(y[c]?p:v)}function S(){w(T),r=0}function V(){var e=o?m:g;C={},b={},a=i=0,o=t.time(),w(e),M()}function $(){var e=y.readyState;"interactive"===e&&w(l),"complete"===e&&w(h)}V(),y[e]("visibilitychange",M,!1),y[e]("readystatechange",$,!1),t.on("$afterPageTransition",V),t.once("$load",$),t.register("Content",{get:function(){return{emit:w}}})});
</script>

<script>
    if (typeof uet == 'function') {
      uet("bb");
    }
</script>
  <script>
    if ('csm' in window) {
      csm.measure('csm_body_delivery_started');
    }
  </script>
            <div id="sis_pixel">
                <!-- begin sis pixel slot -->



<!-- Begin SIS code -->
<script>
    if (typeof uet == 'function') {
      uet("bb", "LoadSis", {wb: 1});
    }
</script>

<div id="sis_pixel_r2" style="height:1px; position: absolute; left: -1000000px; top: -1000000px;">
    <iframe id="sis_pixel_sitewide" width="1" height="1" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
</div>

<script>
    setTimeout(function() {
        var el = document.getElementById("sis_pixel_sitewide");
        el.src="https://s.amazon-adsystem.com/iu3?d=imdb.com&a1=0101aec04d48d4c645973774e950e72030dae391542b7d592da0dfc840905e94c2c7&a2=01019d4f3b0652622c5db9c7ad88d7335beff6cc0bee30de077902126f5a8280c063&cb=716334424873&pId=&r=1&rP=https%3A%2F%2Fwww.imdb.com%2Fsearch%2Fkeyword%2F%3Fkeywords%3Dstudio-ghibli%26ref_%3Dtt_stry_kw&encoding=server&prid=010194a56fc1877fac4ec4fde65e1416d57db5357d4a40ffbe2c3e1f6ac03d8400bc";
        el.onload = function() {
            if (typeof uex == 'function') {
                uex("ld", "LoadSis", {wb: 1});
            }
        }
    },20);

    if (typeof uet == 'function') {
        uet("be", "LoadSis", {wb: 1});
    }
</script>

<!-- End SIS code -->
<!-- begin comscore beacon -->
<script type="text/javascript" src='https://ia.media-imdb.com/images/G/01/imdbads/js/beacon-1792157672._CB485934906_.js'></script>
<script type="text/javascript">
setTimeout(function() {
    if(window.COMSCORE){
        COMSCORE.beacon({
            c1: 2,
            c2:"6034961",
            c3:"",
            c4:"https://www.imdb.com/search/keyword/?keywords=studio-ghibli&ref_=tt_stry_kw",
            c5:"",
            c6:"",
            c15:""
        });
    }
}, 1000);
</script>
<noscript>
<img src="https://sb.scorecardresearch.com/p?c1=2&c2=6034961&c3=&c4=https%3A%2F%2Fwww.imdb.com%2Fsearch%2Fkeyword%2F%3Fkeywords%3Dstudio-ghibli%26ref_%3Dtt_stry_kw&c5=c6=&15=&cj=1"/>
</noscript>
<!-- end comscore beacon -->

<!-- end sis pixel slot -->
            </div>
       
<script>
    if (typeof uet == 'function') {
      uet("ns");
    }
</script>
        <style data-styled="jtQnwi hDlhac ceafwY hMFqdO RJOHx gVXRSl fjLstn kSadNP AlwcH iWlUOU hAUoSP hOwCdO iDnumk kNbGOU sVyDb gWMKkS iCQWEu jFBlcm bgIopm gBwnwt iTQkiJ" data-styled-version="4.3.2">
/* sc-component-id: sc-bdVaJa */
.iWlUOU{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-left:0.25rem;margin-right:auto;-webkit-order:1;-ms-flex-order:1;order:1;position:relative;} @media screen and (min-width:1024px){.iWlUOU{margin-left:auto;margin-right:0.5rem;-webkit-order:0;-ms-flex-order:0;order:0;padding-left:0;}} @media (hover:hover) and (pointer:fine){.iWlUOU:focus{outline:1px dashed currentColor;}.iWlUOU:focus:active{outline:0;}.iWlUOU:before,.iWlUOU:after{border-radius:10%;bottom:0;content:'';height:100%;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;-webkit-transition:opacity .2s cubic-bezier(1,1,1,1);transition:opacity .2s cubic-bezier(1,1,1,1);width:100%;}}
/* sc-component-id: sc-bZQynM */
.gWMKkS li:first-child > ._3CzPBqlWRmSAoWxtvQQ5Eo{border-top:none;}
/* sc-component-id: sc-gzVnrw */
.sVyDb{position:relative;} .sVyDb.navbar__flyout__text-button-after-mobile,.sVyDb .navbar__flyout__text-button-after-mobile{display:none;} .sVyDb .navbar__flyout__text-button-after-mobile > div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;} .sVyDb .navbar__flyout--menu{top:100%;position:absolute;margin-top:.25rem;} .sVyDb.sVyDb.navbar__flyout--positionLeft .navbar__flyout--menu{left:0;right:auto;} @media screen and (min-width:600px){.sVyDb.navbar__flyout--breakpoint-m .navbar__flyout__icon-on-mobile{display:none;}.sVyDb.navbar__flyout--breakpoint-m .navbar__flyout__text-button-after-mobile{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}} @media screen and (min-width:1024px){.sVyDb.navbar__flyout--breakpoint-l .navbar__flyout__icon-on-mobile{display:none;}.sVyDb.navbar__flyout--breakpoint-l .navbar__flyout__text-button-after-mobile{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}} @media screen and (min-width:1280px){.sVyDb.navbar__flyout--breakpoint-xl .navbar__flyout__icon-on-mobile{display:none;}.sVyDb.navbar__flyout--breakpoint-xl .navbar__flyout__text-button-after-mobile{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}} .sVyDb .navbar__flyout__button-pointer{-webkit-transition:-webkit-transform 0.2s;-webkit-transition:transform 0.2s;transition:transform 0.2s;-webkit-transform:rotateX(0);-ms-transform:rotateX(0);transform:rotateX(0);} .sVyDb.navbar__flyout--isVisible .navbar__flyout__button-pointer{-webkit-transform:rotateX(180deg);-ms-transform:rotateX(180deg);transform:rotateX(180deg);}
/* sc-component-id: sc-htoDjs */
.kNbGOU .search-category-selector__opener{border-radius:2px 0 0 2px;padding:0 0 0 0.5rem;min-height:32px;height:20px;border-right:1px solid rgba(0,0,0,0.3);} .kNbGOU _1L5qcXA4wOKR8LeHJgsqja{cursor:pointer;}
/* sc-component-id: sc-dnqmqq */
.iDnumk{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;margin:0;padding:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;} @media screen and (min-width:600px){.iDnumk{-webkit-transition:border 0.2s,background-color 0.2s,box-shadow 0.2s;transition:border 0.2s,background-color 0.2s,box-shadow 0.2s;}} .iDnumk .nav-search__search-input-container{width:100%;padding-right:3.5rem;} .iDnumk ._1-XI3_I8iwubPnQ1mmvW97{position:absolute;right:.35rem;min-width:2rem;cursor:pointer;top:.35rem;-webkit-transition:all 0.2s;transition:all 0.2s;} @media screen and (min-width:600px){.iDnumk.q2gp5sSzXI30d2n_razRe ._1-XI3_I8iwubPnQ1mmvW97{background:transparent;opacity:1;}} .iDnumk .imdb-header-search__input{background:transparent;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;outline:none;padding:1rem 1rem 1rem .75rem;width:100%;} @media screen and (min-width:600px){.iDnumk .imdb-header-search__input{padding:.375em 0 .375rem .5rem;}} .iDnumk .imdb-header-search__input::-ms-clear{display:none;}
/* sc-component-id: sc-iwsKbI */
.hAUoSP{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;left:0;margin:0;min-height:3.5rem;opacity:0;-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);-webkit-transition:none;transition:none;-webkit-order:3;-ms-flex-order:3;order:3;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%;z-index:1;} .hAUoSP .imdb-header-search__state-closer{-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);-webkit-transition:-webkit-transform 0.2s 0.1s;-webkit-transition:transform 0.2s 0.1s;transition:transform 0.2s 0.1s;display:inline;margin:.25rem;position:absolute;right:0;top:0;} .hAUoSP .imdb-header-search__state,.hAUoSP .imdb-header-search__input,.hAUoSP .nav-search__search-submit{-moz-appearance:none;-webkit-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;} @media screen and (min-width:600px){.hAUoSP{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;margin:0 0.5rem;padding:0;min-height:2.25rem;-webkit-order:3;-ms-flex-order:3;order:3;opacity:1;visibility:visible;pointer-events:auto;position:relative;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.hAUoSP .imdb-header-search__state,.hAUoSP .nav-search__search-submit{padding:0;}.hAUoSP .nav-search__search-submit:focus{outline:var(--ipt-focus-outline-on-base);outline-offset:1px;}.hAUoSP .imdb-header-search__state-closer{display:none;}}
/* sc-component-id: sc-gZMcBi */
.iCQWEu{-webkit-transition:all 0.3s;transition:all 0.3s;opacity:1;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-order:3;-ms-flex-order:3;order:3;} @media screen and (min-width:600px){.iCQWEu{-webkit-order:3;-ms-flex-order:3;order:3;}.iCQWEu.imdb-header-search__state-opener{display:none;}}
/* sc-component-id: sc-gqjmRU */
.hOwCdO:checked ~ .nav-search__search-container{opacity:1;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:opacity 0.2s,-webkit-transform 0.2s;-webkit-transition:opacity 0.2s,transform 0.2s;transition:opacity 0.2s,transform 0.2s;visibility:visible;pointer-events:auto;z-index:100;} .hOwCdO:checked ~ .nav-search__search-container .nav-search__search-select,.hOwCdO:checked ~ .nav-search__search-container .nav-search__search-submit{display:none;} .hOwCdO:checked ~ .nav-search__search-container .imdb-header-search__state-closer{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);} .hOwCdO:checked ~ .nav-search__search-container ~ .sc-gZMcBi{-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);-webkit-transition:all 0.3s 0.3s;transition:all 0.3s 0.3s;opacity:0;}
/* sc-component-id: sc-VigVT */
.hMFqdO._14--k36qjjvLW3hUWHDPb_{bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;left:0;overflow:hidden;-webkit-perspective:70vh;-moz-perspective:70vh;-ms-perspective:70vh;perspective:70vh;pointer-events:none;position:fixed;right:0;top:0;visibility:hidden;z-index:100;} .hMFqdO .iRO9SK-8q3D8_287dhn28{box-shadow:none;box-sizing:border-box;height:100%;overflow-x:hidden;overflow-y:auto;position:relative;-webkit-transform:translateX(calc(-100% - 36px));-ms-transform:translateX(calc(-100% - 36px));transform:translateX(calc(-100% - 36px));-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center;-webkit-transition:all 0.3s,box-shadow 0s;transition:all 0.3s,box-shadow 0s;width:280px;z-index:2;-webkit-overflow-scroll:touch;} .hMFqdO ._1iCYg55DI6ds7d3KVrdYBX{box-sizing:border-box;display:block;height:100%;left:0;opacity:0;position:absolute;top:0;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;visibility:hidden;width:100%;will-change:opacity;z-index:1;} .hMFqdO ._3rHHDKyPLOjL8tGKHWMRza{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;min-height:3.5rem;margin-bottom:0.5rem;padding:0.25rem;} .hMFqdO ._2RzUkzyrsjx_BPIQ5uoj5s{-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;} ._146x-LuQBSfM9yosRvjSGF:checked ~ .hMFqdO._14--k36qjjvLW3hUWHDPb_{pointer-events:auto;visibility:visible;} ._146x-LuQBSfM9yosRvjSGF:checked ~ .hMFqdO._14--k36qjjvLW3hUWHDPb_ > .iRO9SK-8q3D8_287dhn28{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);box-shadow:0px 11px 15px -7px rgba(var(--ipt-baseAlt-rgb),0.2), 0px 24px 38px 3px rgba(var(--ipt-baseAlt-rgb),0.14), 0px 9px 46px 8px rgba(var(--ipt-baseAlt-rgb),0.12);} ._146x-LuQBSfM9yosRvjSGF:checked ~ .hMFqdO._14--k36qjjvLW3hUWHDPb_ > ._1iCYg55DI6ds7d3KVrdYBX{opacity:0.5;visibility:visible;} @media screen and (min-width:1024px){.hMFqdO .iRO9SK-8q3D8_287dhn28{width:100%;-webkit-transform:translateY(calc(-100%));-ms-transform:translateY(calc(-100%));transform:translateY(calc(-100%));padding:2rem 0;}.hMFqdO ._3rHHDKyPLOjL8tGKHWMRza{background:none;max-width:1024px;margin:auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0 1rem;}.hMFqdO ._3bRJYEaOz1BKUQYqW6yb29{max-width:1024px;margin:auto;}.hMFqdO .WNY8DBPCS1ZbiSd7NoqdP{display:inline;}}
/* sc-component-id: sc-jTzLTM */
.fjLstn .ipc-icon{opacity:0.5;-webkit-transition:opacity 0.2s;transition:opacity 0.2s;} .fjLstn:hover .ipc-icon{opacity:1;} @media screen and (max-width:479px){.fjLstn.nav-link--hideXS{display:none;}} @media screen and (min-width:480px) and (max-width:599px){.fjLstn.nav-link--hideS{display:none;}} @media screen and (min-width:600px) and (max-width:1023px){.fjLstn.nav-link--hideM{display:none;}} @media screen and (min-width:1024px) and (max-width:1279px){.fjLstn.nav-link--hideL{display:none;}} @media screen and (min-width:1280px){.fjLstn.nav-link--hideXL{display:none;}}
/* sc-component-id: sc-fjdhpX */
.gVXRSl ._2vjThdvAXrHx6CofJjm03w{cursor:pointer;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-top:1px solid transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:3rem;margin:0;padding:0 1rem;-webkit-transition:color 0.1s ease-in,border-color 0.1s ease-in,opacity 0.12s ease-in;transition:color 0.1s ease-in,border-color 0.1s ease-in,opacity 0.12s ease-in;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;} .gVXRSl ._2vjThdvAXrHx6CofJjm03w:focus{outline:var(--ipt-focus-outline-on-baseAlt);outline-offset:1px;} .gVXRSl ._1tLXJMH37mh4UmvfVF8swF{padding-right:0.75rem;} .gVXRSl ._2aunAih-uMfbdgTUIjnQMd{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow:hidden;padding-right:0.75rem;text-overflow:ellipsis;white-space:nowrap;} .gVXRSl ._2BeDp2pKthfMnxArm4lS0T{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);} .gVXRSl ._1tLXJMH37mh4UmvfVF8swF,.gVXRSl ._2BeDp2pKthfMnxArm4lS0T{opacity:0.5;-webkit-transition:all 0.2s;transition:all 0.2s;} .gVXRSl ._2vjThdvAXrHx6CofJjm03w:focus ._2BeDp2pKthfMnxArm4lS0T,.gVXRSl ._2vjThdvAXrHx6CofJjm03w:hover ._2BeDp2pKthfMnxArm4lS0T,.gVXRSl ._2vjThdvAXrHx6CofJjm03w:focus ._1tLXJMH37mh4UmvfVF8swF,.gVXRSl ._2vjThdvAXrHx6CofJjm03w:hover ._1tLXJMH37mh4UmvfVF8swF{opacity:1;} .gVXRSl ._1S9IOoNAVMPB2VikET3Lr2{overflow:hidden;border-bottom:1px solid transparent;-webkit-transition:border-color 0.1s ease-in,height 0.2s;transition:border-color 0.1s ease-in,height 0.2s;} .gVXRSl .s6lVaL5MYgQM-fYJ9KWp7:checked ~ span ._2vjThdvAXrHx6CofJjm03w ._1tLXJMH37mh4UmvfVF8swF{opacity:1;} .gVXRSl .s6lVaL5MYgQM-fYJ9KWp7:checked ~ span ._2vjThdvAXrHx6CofJjm03w ._2BeDp2pKthfMnxArm4lS0T{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);} .gVXRSl .s6lVaL5MYgQM-fYJ9KWp7:checked ~ span ._1S9IOoNAVMPB2VikET3Lr2{display:block;} .gVXRSl:nth-of-type(1) ._2vjThdvAXrHx6CofJjm03w{border-top:none;} @media screen and (min-width:1024px){.gVXRSl{-webkit-flex-basis:33%;-ms-flex-preferred-size:33%;flex-basis:33%;}.gVXRSl ._2vjThdvAXrHx6CofJjm03w{pointer-events:none;margin-top:1.5rem;height:3rem;border:none;}.gVXRSl .s6lVaL5MYgQM-fYJ9KWp7:checked ~ ._2Q0QZxgQqVpU0nQBqv1xlY ._2vjThdvAXrHx6CofJjm03w ._2aunAih-uMfbdgTUIjnQMd{color:inherit;}.gVXRSl ._1S9IOoNAVMPB2VikET3Lr2{visibility:inherit;height:auto !important;border:0;}.gVXRSl ._2BeDp2pKthfMnxArm4lS0T{display:none;}.gVXRSl ._1tLXJMH37mh4UmvfVF8swF{color:var(--ipt-on-baseAlt-accent1-color);opacity:1;}.gVXRSl .ipc-list__item{height:2rem;}.gVXRSl .ipc-list--baseAlt .ipc-list__item:hover{background:none;-webkit-text-decoration:underline;text-decoration:underline;}} @media screen and (max-width:479px){.gVXRSl._2BpsDlqEMlo9unX-C84Nji--hideXS{display:none;}} @media screen and (min-width:480px) and (max-width:599px){.gVXRSl._2BpsDlqEMlo9unX-C84Nji--hideS{display:none;}} @media screen and (min-width:600px) and (max-width:1023px){.gVXRSl._2BpsDlqEMlo9unX-C84Nji--hideM{display:none;}} @media screen and (min-width:1024px) and (max-width:1279px){.gVXRSl._2BpsDlqEMlo9unX-C84Nji--hideL{display:none;}} @media screen and (min-width:1280px){.gVXRSl._2BpsDlqEMlo9unX-C84Nji--hideXL{display:none;}}
/* sc-component-id: sc-jzJRlG */
.RJOHx ._1cBEhLbHn9YeCkfPvo9USU{list-style:none;margin:0.5rem 0;opacity:0.2;} .RJOHx ._3xW8qYlqcCPv5fOHeXBer5{margin-bottom:3rem;margin-top:1.5rem;padding:1rem;height:auto;} @media screen and (min-width:1024px){.RJOHx{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.RJOHx ._1BC0pBnjYqz3wST1u3CwmG{display:none;}.RJOHx ._3xW8qYlqcCPv5fOHeXBer5{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;display:none;}.RJOHx:focus{outline:var(--ipt-focus-outline-on-baseAlt);outline-offset:1px;}}
/* sc-component-id: sc-cSHVUG */
.kSadNP{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}
/* sc-component-id: sc-kAzzGY */
.AlwcH{margin-top:.25rem;}
/* sc-component-id: sc-chPdSV */
.ceafwY{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-order:0;-ms-flex-order:0;order:0;} .ceafwY.desktop{display:none;} @media screen and (min-width:1024px){.ceafwY{-webkit-order:1;-ms-flex-order:1;order:1;}.ceafwY.mobile{display:none;}.ceafwY.desktop{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}
/* sc-component-id: sc-kgoBCf */
.iTQkiJ{-webkit-order:6;-ms-flex-order:6;order:6;} @media screen and (min-width:600px){.iTQkiJ .navbar__user-menu__username-divider,.iTQkiJ .navbar__user-menu__username{display:none;}} @media screen and (min-width:1024px){.iTQkiJ{-webkit-order:7;-ms-flex-order:7;order:7;}} .iTQkiJ .navbar__user-menu-toggle__button{padding-right:0.25rem;} .iTQkiJ .navbar__user-name{max-width:160px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}
/* sc-component-id: sc-kpOJdX */
.gBwnwt{-webkit-order:5;-ms-flex-order:5;order:5;display:none;} @media screen and (min-width:1024px){.gBwnwt{-webkit-order:6;-ms-flex-order:6;order:6;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}} .gBwnwt .imdb-header__watchlist-button-count{margin-left:0.5rem;background:var(--ipt-on-base-accent1-color);color:var(--ipt-on-accent1-color);padding:0 0.4rem;border-radius:10px;text-align:center;} .gBwnwt .ipc-button__text{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}
/* sc-component-id: sc-dxgOiQ */
.jFBlcm{-webkit-order:4;-ms-flex-order:4;order:4;} @media screen and (min-width:1024px){.jFBlcm{-webkit-order:4;-ms-flex-order:4;order:4;}} .jFBlcm .navbar__imdbpro-menu-toggle__name{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;} .jFBlcm .navbar__imdbpro-content .navbar__flyout--menu{background-image:url(//m.media-amazon.com/images/G/01/imdb/images/navbar/imdbpro_navbar_menu_bg-3083451252._V_.png);background-size:cover;padding-left:17px;padding-bottom:25px;padding-top:25px;color:white;font-weight:bold;} .jFBlcm .navbar__imdbpro-imdb-pro-ad{background-repeat:no-repeat;color:white;cursor:pointer;width:573px;overflow:hidden;border-radius:8px;left:initial;} .jFBlcm .navbar__imdbpro-imdb-pro-ad .imdb-pro-ad__content,.jFBlcm .navbar__imdbpro-imdb-pro-ad .imdb-pro-ad__image{display:inline-block;} .jFBlcm .navbar__imdbpro-imdb-pro-ad .imdb-pro-ad__title{color:white;line-height:1.3em;margin-bottom:10px;} .jFBlcm .navbar__imdbpro-imdb-pro-ad .imdb-pro-ad__line{cursor:inherit;} .jFBlcm .navbar__imdbpro-imdb-pro-ad .imdb-pro-ad__link{display:inline-block;-webkit-text-decoration:none;text-decoration:none;vertical-align:middle;} .jFBlcm .navbar__imdbpro-imdb-pro-ad .imdb-pro-ad__content,.jFBlcm .navbar__imdbpro-imdb-pro-ad .imdb-pro-ad__image{vertical-align:top;} .jFBlcm .navbar__imdbpro-imdb-pro-ad .imdb-pro-ad__content{font-family:'Arial';margin-left:15px;width:400px;} .jFBlcm .navbar__imdbpro-imdb-pro-ad .imdb-pro-ad__content .imdb-pro-ad__line{display:list-item;font-size:12px;list-style-position:inside;list-style-type:disc;margin:0px;padding:.1rem 0;} .jFBlcm .navbar__imdbpro-imdb-pro-ad .imdb-pro-ad__content .imdb-pro-ad__title{font-size:15px;} .jFBlcm .navbar__imdbpro-imdb-pro-ad .imdb-pro-new__button{margin-top:15px;} .jFBlcm .navbar__imdbpro-imdb-pro-ad .imdb-pro-new__button text{fill:#111111;font-size:13px;font-weight:normal;} .jFBlcm .navbar__imdbpro-imdb-pro-ad .imdb-pro-new__button svg:hover rect,.jFBlcm .navbar__imdbpro-imdb-pro-ad .imdb-pro-new__button text:hover rect{fill:#f7dd95;} .jFBlcm .navbar__imdbpro-content .sub_nav{background-color:#f2f2f2;border-bottom-left-radius:10px;border-bottom-right-radius:10px;box-shadow:0 2px 5px rgba(0,0,0,0.6);color:#999;height:325px;} .jFBlcm .navbar__imdbpro-content .sub_nav h5{color:#A58500;margin:20px 0 10px;position:relative;}
/* sc-component-id: sc-ckVGcZ */
.hDlhac{display:none;}
/* sc-component-id: sc-jKJlTe */
.jtQnwi{padding:0.25rem;margin:0;position:relative;z-index:1000;min-height:3.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;} .jtQnwi a{color:inherit;} .jtQnwi .navbar__inner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100vw;margin:0;} @media screen and (min-width:600px){.jtQnwi .navbar__inner{padding:0 .75rem;}} @media screen and (min-width:1024px){.jtQnwi .navbar__inner{width:100%;margin:0 auto;}} .jtQnwi label{margin-bottom:0;}
/* sc-component-id: sc-eNQAEJ */
.bgIopm{border:1px solid rgba(var(--ipt-on-baseAlt-rgb),.16);-webkit-order:5;-ms-flex-order:5;order:5;width:1px;height:2rem;margin:0 .5rem;} @media screen and (max-width:600px){.bgIopm{display:none;-webkit-order:7;-ms-flex-order:7;order:7;}}</style>
    <div id="67033f9e-a0f7-4409-b671-be70f6c4aa60">
       <nav id="imdbHeader" class="FHCtKBINjbqzCITNiccU0 imdb-header imdb-header--react sc-jKJlTe jtQnwi"><div id="nblogout" class="imdb-header__login-state-node"></div><div class="ipc-page-content-container ipc-page-content-container--center navbar__inner" role="presentation"><label aria-label="Open Navigation Drawer" role="button" class="ipc-icon-button jOOJQ0waXoTX6ZSthGtum sc-chPdSV ceafwY mobile ipc-icon-button--baseAlt ipc-icon-button--onBase" tabindex="0" id="imdbHeader-navDrawerOpen" for="imdbHeader-navDrawer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--menu" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path></svg></label><label id="imdbHeader-navDrawerOpen--desktop" aria-label="Open Navigation Drawer" class="ipc-button ipc-button--single-padding ipc-button--default-height ipc-button--core-baseAlt ipc-button--theme-baseAlt ipc-button--on-textPrimary ipc-text-button jOOJQ0waXoTX6ZSthGtum sc-chPdSV ceafwY desktop" tabindex="0" for="imdbHeader-navDrawer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--menu ipc-button__icon ipc-button__icon--pre" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path></svg><div class="ipc-button__text">Menu</div></label><input type="checkbox" class="_146x-LuQBSfM9yosRvjSGF" name="imdbHeader-navDrawer" id="imdbHeader-navDrawer" aria-hidden="true" hidden=""/><aside class="_14--k36qjjvLW3hUWHDPb_ _32i38MKalFVUkNAqPm88ln imdb-header__nav-drawer sc-VigVT hMFqdO" role="presentation" data-testid="drawer"><div class="iRO9SK-8q3D8_287dhn28" role="presentation" aria-hidden="true" data-testid="panel"><div class="_3rHHDKyPLOjL8tGKHWMRza" role="presentation" data-testid="panel-header"><a href="/?ref_=nv_home"><svg class="ipc-logo WNY8DBPCS1ZbiSd7NoqdP" xmlns="http://www.w3.org/2000/svg" width="98" height="56" viewBox="0 0 64 32" version="1.1"><g fill="#F5C518"><rect x="0" y="0" width="100%" height="100%" rx="4"></rect></g><g transform="translate(8.000000, 7.000000)" fill="#000000" fill-rule="nonzero"><polygon points="0 18 5 18 5 0 0 0"></polygon><path d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path><path d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path><path d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path></g></svg></a><label aria-label="Close Navigation Drawer" role="button" class="ipc-icon-button _2RzUkzyrsjx_BPIQ5uoj5s ipc-icon-button--baseAlt ipc-icon-button--onBase" tabindex="0" for="imdbHeader-navDrawer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--clear" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path></svg></label></div><div class="_3bRJYEaOz1BKUQYqW6yb29" role="presentation" data-testid="panel-content"><div role="presentation" class="_3wpok4xkiX-9E61ruFL_RA sc-jzJRlG RJOHx"><li role="separator" class="ipc-list-divider mdc-list-divider _1cBEhLbHn9YeCkfPvo9USU"></li><div class="_2BpsDlqEMlo9unX-C84Nji sc-fjdhpX gVXRSl" data-testid="nav-link-category" role="presentation"><input type="radio" class="s6lVaL5MYgQM-fYJ9KWp7" name="nav-categories-list" id="nav-link-categories-mov" tabindex="-1" data-category-id="mov" hidden="" aria-hidden="true"/><span class="_2Q0QZxgQqVpU0nQBqv1xlY"><label role="button" aria-label="Expand Movies Nav Links" class="_2vjThdvAXrHx6CofJjm03w" tabindex="0" for="nav-link-categories-mov" data-testid="category-expando"><span class="_1tLXJMH37mh4UmvfVF8swF"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--movie" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M18 4v1h-2V4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1H6V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></svg></span><span class="_2aunAih-uMfbdgTUIjnQMd">Movies</span><span class="_2BeDp2pKthfMnxArm4lS0T"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--chevron-right" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path></svg></span></label><div class="_1S9IOoNAVMPB2VikET3Lr2" aria-hidden="true" aria-expanded="false" data-testid="list-container"><div class="_1IQgIe3JwGh2arzItRgYN3" role="presentation"><ul class="ipc-list mdc-list _1gB7giE3RrFWXvlzwjWk-q ipc-list--baseAlt" role="menu" aria-orientation="vertical"><a role="menuitem" class="ipc-list__item mdc-list-item nav-link nav-link--hideXS nav-link--hideS nav-link--hideM sc-jTzLTM fjLstn ipc-list__item--indent-one" href="https://www.imdb.com/showtimes/?ref_=nv_mv_sh" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Showtimes &amp; Tickets</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link nav-link--hideL nav-link--hideXL sc-jTzLTM fjLstn ipc-list__item--indent-one" href="https://m.imdb.com/showtimes/movie/?ref_=nv_mv_sh" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Showtimes &amp; Tickets</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="/chart/top/?ref_=nv_mv_250" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Top Rated Movies</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="/chart/moviemeter/?ref_=nv_mv_mpm" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Most Popular Movies</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link nav-link--hideXS nav-link--hideS nav-link--hideM sc-jTzLTM fjLstn ipc-list__item--indent-one" href="https://www.imdb.com/feature/genre/?ref_=nv_ch_gr" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Browse Movies by Genre</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="/chart/boxoffice/?ref_=nv_ch_cht" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Top Box Office</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link nav-link--hideXS nav-link--hideS nav-link--hideM sc-jTzLTM fjLstn ipc-list__item--indent-one" href="https://www.imdb.com/movies-in-theaters/?ref_=nv_mv_inth" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">In Theaters</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link nav-link--hideL nav-link--hideXL sc-jTzLTM fjLstn ipc-list__item--indent-one" href="https://m.imdb.com/coming-soon/?ref_=nv_mv_cs" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Coming Soon</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link nav-link--hideXS nav-link--hideS nav-link--hideM sc-jTzLTM fjLstn ipc-list__item--indent-one" href="https://www.imdb.com/coming-soon/?ref_=nv_mv_cs" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Coming Soon</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link nav-link--hideXS nav-link--hideS nav-link--hideM sc-jTzLTM fjLstn ipc-list__item--indent-one" href="https://www.imdb.com/list/ls016522954/?ref_=nv_tvv_dvd" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">DVD &amp; Blu-ray Releases</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="https://www.imdb.com/calendar/?ref_=nv_mv_cal" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Release Calendar</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="/news/movie/?ref_=nv_nw_mv" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Movie News</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="/india/toprated/?ref_=nv_mv_in" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">India Movie Spotlight</span></a></ul></div></div></span></div><div class="_2BpsDlqEMlo9unX-C84Nji sc-fjdhpX gVXRSl" data-testid="nav-link-category" role="presentation"><input type="radio" class="s6lVaL5MYgQM-fYJ9KWp7" name="nav-categories-list" id="nav-link-categories-tvshows" tabindex="-1" data-category-id="tvshows" hidden="" aria-hidden="true"/><span class="_2Q0QZxgQqVpU0nQBqv1xlY"><label role="button" aria-label="Expand TV Shows Nav Links" class="_2vjThdvAXrHx6CofJjm03w" tabindex="0" for="nav-link-categories-tvshows" data-testid="category-expando"><span class="_1tLXJMH37mh4UmvfVF8swF"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--television" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 0 0-2-2zm-1 14H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z"></path></svg></span><span class="_2aunAih-uMfbdgTUIjnQMd">TV Shows</span><span class="_2BeDp2pKthfMnxArm4lS0T"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--chevron-right" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path></svg></span></label><div class="_1S9IOoNAVMPB2VikET3Lr2" aria-hidden="true" aria-expanded="false" data-testid="list-container"><div class="_1IQgIe3JwGh2arzItRgYN3" role="presentation"><ul class="ipc-list mdc-list _1gB7giE3RrFWXvlzwjWk-q ipc-list--baseAlt" role="menu" aria-orientation="vertical"><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="/chart/toptv/?ref_=nv_tvv_250" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Top Rated Shows</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="/chart/tvmeter/?ref_=nv_tvv_mptv" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Most Popular Shows</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link nav-link--hideXS nav-link--hideS nav-link--hideM sc-jTzLTM fjLstn ipc-list__item--indent-one" href="https://www.imdb.com/feature/genre/?ref_=nv_tv_gr" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Browse TV Shows by Genre</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="/news/tv/?ref_=nv_nw_tv" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">TV News</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="/india/tv?ref_=nv_tv_in" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">India TV Spotlight</span></a></ul></div></div></span></div><div class="_2BpsDlqEMlo9unX-C84Nji sc-fjdhpX gVXRSl" data-testid="nav-link-category" role="presentation"><input type="radio" class="s6lVaL5MYgQM-fYJ9KWp7" name="nav-categories-list" id="nav-link-categories-awards" tabindex="-1" data-category-id="awards" hidden="" aria-hidden="true"/><span class="_2Q0QZxgQqVpU0nQBqv1xlY"><label role="button" aria-label="Expand Awards &amp; Events Nav Links" class="_2vjThdvAXrHx6CofJjm03w" tabindex="0" for="nav-link-categories-awards" data-testid="category-expando"><span class="_1tLXJMH37mh4UmvfVF8swF"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--star-circle-filled" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.23 15.39L12 15.45l-3.22 1.94a.502.502 0 0 1-.75-.54l.85-3.66-2.83-2.45a.505.505 0 0 1 .29-.88l3.74-.32 1.46-3.45c.17-.41.75-.41.92 0l1.46 3.44 3.74.32a.5.5 0 0 1 .28.88l-2.83 2.45.85 3.67c.1.43-.36.77-.74.54z"></path></svg></span><span class="_2aunAih-uMfbdgTUIjnQMd">Awards &amp; Events</span><span class="_2BeDp2pKthfMnxArm4lS0T"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--chevron-right" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path></svg></span></label><div class="_1S9IOoNAVMPB2VikET3Lr2" aria-hidden="true" aria-expanded="false" data-testid="list-container"><div class="_1IQgIe3JwGh2arzItRgYN3" role="presentation"><ul class="ipc-list mdc-list _1gB7giE3RrFWXvlzwjWk-q ipc-list--baseAlt" role="menu" aria-orientation="vertical"><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="/oscars/?ref_=nv_ev_acd" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Oscars</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link nav-link--hideL nav-link--hideXL sc-jTzLTM fjLstn ipc-list__item--indent-one" href="https://m.imdb.com/feature/bestpicture/?ref_=nv_ch_osc" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Best Picture Winners</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link nav-link--hideXS nav-link--hideS nav-link--hideM sc-jTzLTM fjLstn ipc-list__item--indent-one" href="https://www.imdb.com/search/title/?count=100&amp;groups=oscar_best_picture_winners&amp;sort=year%2Cdesc&amp;ref_=nv_ch_osc" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Best Picture Winners</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="/golden-globes/?ref_=nv_ev_gg" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Golden Globes</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="/emmys/?ref_=nv_ev_rte" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Emmys</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="/comic-con/?ref_=nv_ev_comic" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">San Diego Comic-Con</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="/nycc/?ref_=nv_ev_nycc" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">New York Comic-Con</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="/sundance/?ref_=nv_ev_sun" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Sundance Film Festival</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="/toronto/?ref_=nv_ev_tor" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Toronto Int&#x27;l Film Festival</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="/awards-central/?ref_=nv_ev_awrd" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Awards Central</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="/festival-central/?ref_=nv_ev_fc" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Festival Central</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="https://www.imdb.com/event/all/?ref_=nv_ev_all" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">All Events</span></a></ul></div></div></span></div><div class="_2BpsDlqEMlo9unX-C84Nji sc-fjdhpX gVXRSl" data-testid="nav-link-category" role="presentation"><input type="radio" class="s6lVaL5MYgQM-fYJ9KWp7" name="nav-categories-list" id="nav-link-categories-celebs" tabindex="-1" data-category-id="celebs" hidden="" aria-hidden="true"/><span class="_2Q0QZxgQqVpU0nQBqv1xlY"><label role="button" aria-label="Expand Celebs Nav Links" class="_2vjThdvAXrHx6CofJjm03w" tabindex="0" for="nav-link-categories-celebs" data-testid="category-expando"><span class="_1tLXJMH37mh4UmvfVF8swF"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--people" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5z"></path></svg></span><span class="_2aunAih-uMfbdgTUIjnQMd">Celebs</span><span class="_2BeDp2pKthfMnxArm4lS0T"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--chevron-right" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path></svg></span></label><div class="_1S9IOoNAVMPB2VikET3Lr2" aria-hidden="true" aria-expanded="false" data-testid="list-container"><div class="_1IQgIe3JwGh2arzItRgYN3" role="presentation"><ul class="ipc-list mdc-list _1gB7giE3RrFWXvlzwjWk-q ipc-list--baseAlt" role="menu" aria-orientation="vertical"><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="/feature/bornondate/?ref_=nv_cel_brn" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Born Today</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link nav-link--hideL nav-link--hideXL sc-jTzLTM fjLstn ipc-list__item--indent-one" href="https://m.imdb.com/chart/starmeter/?ref_=nv_cel_brn" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Most Popular Celebs</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link nav-link--hideXS nav-link--hideS nav-link--hideM sc-jTzLTM fjLstn ipc-list__item--indent-one" href="https://www.imdb.com/search/name/?gender=male%2Cfemale&amp;ref_=nv_cel_m" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Most Popular Celebs</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="/news/celebrity/?ref_=nv_cel_nw" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Celebrity News</span></a></ul></div></div></span></div><div class="_2BpsDlqEMlo9unX-C84Nji sc-fjdhpX gVXRSl" data-testid="nav-link-category" role="presentation"><input type="radio" class="s6lVaL5MYgQM-fYJ9KWp7" name="nav-categories-list" id="nav-link-categories-video" tabindex="-1" data-category-id="video" hidden="" aria-hidden="true"/><span class="_2Q0QZxgQqVpU0nQBqv1xlY"><label role="button" aria-label="Expand Videos Nav Links" class="_2vjThdvAXrHx6CofJjm03w" tabindex="0" for="nav-link-categories-video" data-testid="category-expando"><span class="_1tLXJMH37mh4UmvfVF8swF"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--video-library" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1zm17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l5.47 4.1c.27.2.27.6 0 .8L12 14.5z"></path></svg></span><span class="_2aunAih-uMfbdgTUIjnQMd">Videos</span><span class="_2BeDp2pKthfMnxArm4lS0T"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--chevron-right" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path></svg></span></label><div class="_1S9IOoNAVMPB2VikET3Lr2" aria-hidden="true" aria-expanded="false" data-testid="list-container"><div class="_1IQgIe3JwGh2arzItRgYN3" role="presentation"><ul class="ipc-list mdc-list _1gB7giE3RrFWXvlzwjWk-q ipc-list--baseAlt" role="menu" aria-orientation="vertical"><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="/originals/?ref_=nv_sf_ori" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">IMDb Originals</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="/trailers/?ref_=nv_mv_tr" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Latest Trailers</span></a></ul></div></div></span></div><div class="_2BpsDlqEMlo9unX-C84Nji sc-fjdhpX gVXRSl" data-testid="nav-link-category" role="presentation"><input type="radio" class="s6lVaL5MYgQM-fYJ9KWp7" name="nav-categories-list" id="nav-link-categories-comm" tabindex="-1" data-category-id="comm" hidden="" aria-hidden="true"/><span class="_2Q0QZxgQqVpU0nQBqv1xlY"><label role="button" aria-label="Expand Community Nav Links" class="_2vjThdvAXrHx6CofJjm03w" tabindex="0" for="nav-link-categories-comm" data-testid="category-expando"><span class="_1tLXJMH37mh4UmvfVF8swF"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--earth" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg></span><span class="_2aunAih-uMfbdgTUIjnQMd">Community</span><span class="_2BeDp2pKthfMnxArm4lS0T"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--chevron-right" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path></svg></span></label><div class="_1S9IOoNAVMPB2VikET3Lr2" aria-hidden="true" aria-expanded="false" data-testid="list-container"><div class="_1IQgIe3JwGh2arzItRgYN3" role="presentation"><ul class="ipc-list mdc-list _1gB7giE3RrFWXvlzwjWk-q ipc-list--baseAlt" role="menu" aria-orientation="vertical"><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="https://help.imdb.com/imdb?ref_=cons_nb_hlp" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Help Center</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="https://contribute.imdb.com/czone?ref_=nv_cm_cz" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Contributor Zone</span></a><a role="menuitem" class="ipc-list__item mdc-list-item nav-link sc-jTzLTM fjLstn ipc-list__item--indent-one" href="/poll/?ref_=nv_cm_pl" tabindex="-1" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Polls</span></a></ul></div></div></span></div><a role="menuitem" class="ipc-list__item mdc-list-item nav-link _3xW8qYlqcCPv5fOHeXBer5 sc-jTzLTM fjLstn" href="https://pro.imdb.com?ref_=cons_nb_hm&amp;rf=cons_nb_hm" target="_blank" aria-label="Go To IMDb Pro" tabindex="0" aria-disabled="false"><span class="ipc-list-item__text" role="presentation"><div class="_33PK8nBHiT1fGjnfXwum3v sc-cSHVUG kSadNP"><svg class="ipc-logo" width="56" height="13" viewBox="0 0 56 13" version="1.1"><g fill="currentColor"><path d="M43.1161781,1.30854271 L43.1161781,2.6641206 L43.1573833,2.6641206 C43.6948426,1.45447236 44.6855592,1.10050251 45.8637894,1.10050251 L45.8637894,3.72844221 C43.3024973,3.56201005 43.2606949,5.0641206 43.2606949,6.10673367 L43.2606949,11.8444221 L40.3464712,11.8444221 L40.3464712,1.30854271 L43.1161781,1.30854271 Z" fill-rule="nonzero"></path><path d="M35.4334962,0 L30.3927253,0 L30.3927253,11.8444221 L33.5123779,11.8444221 L33.5123779,7.46653266 L35.2477742,7.46653266 C38.9030945,7.46653266 39.3999457,5.6321608 39.3999457,3.92140704 C39.3999457,1.16683417 38.2838219,0 35.4334962,0 Z M34.8811075,5.28603015 L33.5183496,5.28603015 L33.5183496,1.90914573 L34.8811075,1.90914573 C35.858089,1.90914573 36.4492942,2.38371859 36.4492942,3.6440201 C36.4492942,4.48341709 36.1011401,5.28603015 34.8811075,5.28603015 Z" fill-rule="nonzero"></path><path d="M46.4573833,6.32743719 C46.4573833,3.4480402 46.8706298,0.986532663 50.7140608,0.986532663 C54.5574919,0.986532663 54.9689468,3.4480402 54.9689468,6.32743719 C54.9689468,9.62351759 54.4738871,11.9396985 50.7140608,11.9396985 C46.9542345,11.9396985 46.4573833,9.62351759 46.4573833,6.32743719 Z M52.0571118,6.16100503 C52.0571118,3.96964824 51.9538002,2.86432161 50.7140608,2.86432161 C49.4743214,2.86432161 49.3710098,3.96964824 49.3710098,6.16100503 C49.3710098,9.37266332 49.6403366,10.0619095 50.7140608,10.0619095 C51.787785,10.0619095 52.0565147,9.37266332 52.0565147,6.16100503 L52.0571118,6.16100503 Z" fill-rule="nonzero"></path><rect fill-rule="nonzero" x="0" y="0.0301507538" width="3.03843648" height="11.8124623"></rect><path d="M9.51900109,0.0301507538 L8.8155266,5.54773869 L8.38018458,2.54713568 C8.25278683,1.58432161 8.13136084,0.745326633 8.01590662,0.0301507538 L4.07453855,0.0301507538 L4.07453855,11.8426131 L6.73615635,11.8426131 L6.74809989,4.04020101 L7.86840391,11.839598 L9.76444083,11.839598 L10.8268187,3.86653266 L10.8363735,11.839598 L13.4896308,11.839598 L13.4896308,0.0301507538 L9.51900109,0.0301507538 Z"></path><path d="M18.2401737,2.15577889 C18.3613005,2.22685521 18.4456965,2.34775012 18.4712812,2.48683417 C18.5047231,2.63758794 18.5214441,2.97929648 18.5214441,3.5119598 L18.5214441,8.09246231 C18.5214441,8.87919598 18.4710822,9.36160804 18.3703583,9.53969849 C18.2696345,9.71778894 18.0007058,9.80623116 17.5635722,9.80503729 L17.5635722,2.05025126 C17.8944083,2.05025126 18.1199421,2.08542714 18.2401737,2.15577889 Z M18.2085233,11.8426131 C18.9366811,11.8426131 19.4817047,11.8024121 19.8435939,11.7220101 C20.1760582,11.6557965 20.4883129,11.5111601 20.754886,11.2998995 C21.0104507,11.0828833 21.1913005,10.7896393 21.2714441,10.4623116 C21.3705755,10.1053266 21.429696,9.39738693 21.429696,8.33849246 L21.429696,4.18914573 C21.429696,3.07296482 21.3866992,2.32341709 21.3192182,1.94231156 C21.2491064,1.55561593 21.073757,1.19626854 20.8128122,0.904522613 C20.54249,0.592964824 20.1481542,0.369447236 19.6298046,0.233969849 C19.1114549,0.0982914573 18.2658523,0.0295477387 16.7944083,0.0295477387 L14.5251357,0.0295477387 L14.5251357,11.8426131 L18.2085233,11.8426131 Z"></path><path d="M26.416721,8.97527638 C26.416721,9.54693467 26.3886536,9.90874372 26.332519,10.0607035 C26.2763844,10.2102513 26.0339305,10.2868342 25.8458198,10.2868342 C25.657709,10.2868342 25.5472313,10.2132663 25.4833333,10.0673367 C25.4194354,9.92140704 25.3925624,9.59095477 25.3925624,9.07175879 L25.3925624,5.94934673 C25.3925624,5.41025126 25.4192363,5.07417085 25.4725841,4.94110553 C25.525932,4.8080402 25.6429786,4.74150754 25.8237242,4.74150754 C26.0094463,4.74150754 26.2584691,4.81748744 26.3211726,4.97065327 C26.3838762,5.1238191 26.416721,5.44884422 26.416721,5.9481407 L26.416721,8.97527638 Z M22.4652009,0.0301507538 L22.4652009,11.8426131 L25.2008686,11.8426131 L25.3901737,11.0900503 C25.6130801,11.37176 25.8917241,11.6034266 26.2083062,11.7702513 C26.5068947,11.921608 26.9517915,11.9975879 27.2963626,11.9975879 C27.741081,12.0083011 28.1774148,11.8742607 28.5408795,11.6152764 C28.8904271,11.360402 29.1125769,11.0588945 29.207329,10.7107538 C29.3020811,10.3626131 29.349059,9.83497487 29.3482628,9.1278392 L29.3482628,5.8160804 C29.3482628,5.10211055 29.3333333,4.63778894 29.301683,4.41889447 C29.2603631,4.17705181 29.1645365,3.94803829 29.0216069,3.74954774 C28.8515909,3.51011348 28.6163121,3.32574882 28.3444083,3.21889447 C28.0116005,3.08534049 27.6555905,3.02074296 27.297557,3.02894472 C26.9482085,3.02894472 26.5009229,3.09949749 26.2029316,3.23819095 C25.8905716,3.38828976 25.6139569,3.60466937 25.3919653,3.87256281 L25.3919653,0.0301507538 L22.4652009,0.0301507538 Z"></path></g></svg><div class="sc-kAzzGY AlwcH">For Industry Professionals</div></div></span><span class="ipc-list-item__icon ipc-list-item__icon--post" role="presentation"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--launch" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M16 16.667H8A.669.669 0 0 1 7.333 16V8c0-.367.3-.667.667-.667h3.333c.367 0 .667-.3.667-.666C12 6.3 11.7 6 11.333 6h-4C6.593 6 6 6.6 6 7.333v9.334C6 17.4 6.6 18 7.333 18h9.334C17.4 18 18 17.4 18 16.667v-4c0-.367-.3-.667-.667-.667-.366 0-.666.3-.666.667V16c0 .367-.3.667-.667.667zm-2.667-10c0 .366.3.666.667.666h1.727L9.64 13.42a.664.664 0 1 0 .94.94l6.087-6.087V10c0 .367.3.667.666.667.367 0 .667-.3.667-.667V6h-4c-.367 0-.667.3-.667.667z"></path></svg></span></a></div></div></div><label class="_1iCYg55DI6ds7d3KVrdYBX" data-testid="backdrop" role="button" for="imdbHeader-navDrawer" tabindex="0" aria-hidden="true" aria-label="Close Navigation Drawer"></label></aside><a class="sc-bdVaJa iWlUOU imdb-header__logo-link _3XaDsUnZG7ZfFqFF37dZPv" id="home_img_holder" href="/?ref_=nv_home" aria-label="Home"><svg id="home_img" class="ipc-logo" xmlns="http://www.w3.org/2000/svg" width="64" height="32" viewBox="0 0 64 32" version="1.1"><g fill="#F5C518"><rect x="0" y="0" width="100%" height="100%" rx="4"></rect></g><g transform="translate(8.000000, 7.000000)" fill="#000000" fill-rule="nonzero"><polygon points="0 18 5 18 5 0 0 0"></polygon><path d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path><path d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path><path d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path></g></svg></a><input type="checkbox" class="imdb-header-search__state EL4bTiUhQdfIvyX_PMRVv sc-gqjmRU hOwCdO" id="navSearch-searchState" name="navSearch-searchState" aria-hidden="true" hidden=""/><div id="suggestion-search-container" class="nav-search__search-container _2cVsg1cgtNxl8NEGDHTPH6 sc-iwsKbI hAUoSP"><form id="nav-search-form" name="nav-search-form" method="get" action="/find" class="_19kygDgP4Og4wL_TIXtDmm imdb-header__search-form sc-dnqmqq iDnumk" role="search"><div class="search-category-selector sc-htoDjs kNbGOU"><div class="sc-gzVnrw sVyDb navbar__flyout--breakpoint-m navbar__flyout--positionLeft"><label class="ipc-button ipc-button--single-padding ipc-button--default-height ipc-button--core-base ipc-button--theme-base ipc-button--on-textPrimary ipc-text-button navbar__flyout__text-button-after-mobile search-category-selector__opener P7UFTypc7bsdHDd2RHdil nav-search-form__categories" tabindex="0" for="navbar-search-category-select"><div class="ipc-button__text">All<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--arrow-drop-down navbar__flyout__button-pointer" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path></svg></div></label><input type="checkbox" class="ipc-menu__focused-state" id="navbar-search-category-select" name="navbar-search-category-select" hidden="" tabindex="-1" aria-hidden="true"/><div class="ipc-menu mdc-menu ipc-menu--not-initialized ipc-menu--on-baseAlt ipc-menu--anchored ipc-menu--with-checkbox ipc-menu--expand-from-top-left navbar__flyout--menu" data-menu-id="navbar-search-category-select" role="presentation"><div class="ipc-menu__items mdc-menu__items" role="presentation"><span id="navbar-search-category-select-contents"><ul class="ipc-list mdc-list _2crW0ewf49BFHCKEEUJ_9o ipc-list--baseAlt" role="menu" aria-orientation="vertical"><a role="menuitem" class="ipc-list__item mdc-list-item _1L5qcXA4wOKR8LeHJgsqja _3lrXaniHRqyCb5hUFHbcds" aria-label="All" tabindex="0" aria-disabled="false"><span class="ipc-list-item__text" role="presentation"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--search _2re8nTkPmRXI_TBcLnh1u8" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>All</span></a><a role="menuitem" class="ipc-list__item mdc-list-item _1L5qcXA4wOKR8LeHJgsqja" aria-label="Titles" tabindex="0" aria-disabled="false"><span class="ipc-list-item__text" role="presentation"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--movie _2re8nTkPmRXI_TBcLnh1u8" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M18 4v1h-2V4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1H6V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></svg>Titles</span></a><a role="menuitem" class="ipc-list__item mdc-list-item _1L5qcXA4wOKR8LeHJgsqja" aria-label="TV Episodes" tabindex="0" aria-disabled="false"><span class="ipc-list-item__text" role="presentation"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--television _2re8nTkPmRXI_TBcLnh1u8" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 0 0-2-2zm-1 14H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z"></path></svg>TV Episodes</span></a><a role="menuitem" class="ipc-list__item mdc-list-item _1L5qcXA4wOKR8LeHJgsqja" aria-label="Celebs" tabindex="0" aria-disabled="false"><span class="ipc-list-item__text" role="presentation"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--people _2re8nTkPmRXI_TBcLnh1u8" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>Celebs</span></a><a role="menuitem" class="ipc-list__item mdc-list-item _1L5qcXA4wOKR8LeHJgsqja" aria-label="Companies" tabindex="0" aria-disabled="false"><span class="ipc-list-item__text" role="presentation"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--business _2re8nTkPmRXI_TBcLnh1u8" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 7V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-8zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm9 12h-7v-2h2v-2h-2v-2h2v-2h-2V9h7c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1zm-1-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path></svg>Companies</span></a><a role="menuitem" class="ipc-list__item mdc-list-item _1L5qcXA4wOKR8LeHJgsqja" aria-label="Keywords" tabindex="0" aria-disabled="false"><span class="ipc-list-item__text" role="presentation"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--label _2re8nTkPmRXI_TBcLnh1u8" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84l3.96-5.58a.99.99 0 0 0 0-1.16l-3.96-5.58z"></path></svg>Keywords</span></a><li role="separator" class="ipc-list-divider mdc-list-divider"></li><a role="menuitem" class="ipc-list__item mdc-list-item _1L5qcXA4wOKR8LeHJgsqja" href="https://www.imdb.com/search/" tabindex="0" aria-disabled="false"><span class="ipc-list-item__text" role="presentation"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--find-in-page _2re8nTkPmRXI_TBcLnh1u8" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20 19.59V8.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.86.56-1.89.88-3 .82-2.37-.11-4.4-1.96-4.72-4.31a5.013 5.013 0 0 1 5.83-5.61c1.95.33 3.57 1.85 4 3.78.33 1.46.01 2.82-.7 3.9L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></svg>Advanced Search</span><span class="ipc-list-item__icon ipc-list-item__icon--post" role="presentation"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--chevron-right" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path></svg></span></a></ul></span></div></div></div></div><div class="nav-search__search-input-container sc-bZQynM gWMKkS"><div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-1" aria-expanded="false" class="react-autosuggest__container"><input type="text" value="" autoComplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-1" class="imdb-header-search__input _3gDVKsXm3b_VAMhhSw1haV react-autosuggest__input" id="suggestion-search" name="q" placeholder="Search IMDb" autoCapitalize="off" autoCorrect="off"/></div></div><button id="suggestion-search-button" type="submit" class="nav-search__search-submit _1-XI3_I8iwubPnQ1mmvW97"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--magnify" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></button><input type="hidden" name="ref_" value="nv_sr_sm"/></form><label role="button" class="ipc-icon-button imdb-header-search__state-closer ipc-icon-button--baseAlt ipc-icon-button--onBase" tabindex="0" id="imdbHeader-searchClose" for="navSearch-searchState"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--clear" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path></svg></label></div><label aria-label="Open Search" role="button" class="ipc-icon-button imdb-header-search__state-opener sc-gZMcBi iCQWEu ipc-icon-button--baseAlt ipc-icon-button--onBase" tabindex="0" id="imdbHeader-searchOpen" for="navSearch-searchState"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--magnify" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></label><div class="navbar__imdbpro sc-dxgOiQ jFBlcm"><div class="navbar__imdbpro-content sc-gzVnrw sVyDb navbar__flyout--breakpoint-l"><a aria-label="Go To IMDb Pro" class="ipc-button ipc-button--single-padding ipc-button--default-height ipc-button--core-baseAlt ipc-button--theme-baseAlt ipc-button--on-textPrimary ipc-text-button navbar__flyout__text-button-after-mobile navbar__imdb-pro--toggle" tabindex="0" href="https://pro.imdb.com/login/ap?u=/login/lwa&amp;imdbPageAction=signUp&amp;rf=cons_nb_hm&amp;ref_=cons_nb_hm"><div class="ipc-button__text"><svg class="ipc-logo navbar__imdbpro-menu-toggle__name" width="56" height="13" viewBox="0 0 56 13" version="1.1"><g fill="currentColor"><path d="M43.1161781,1.30854271 L43.1161781,2.6641206 L43.1573833,2.6641206 C43.6948426,1.45447236 44.6855592,1.10050251 45.8637894,1.10050251 L45.8637894,3.72844221 C43.3024973,3.56201005 43.2606949,5.0641206 43.2606949,6.10673367 L43.2606949,11.8444221 L40.3464712,11.8444221 L40.3464712,1.30854271 L43.1161781,1.30854271 Z" fill-rule="nonzero"></path><path d="M35.4334962,0 L30.3927253,0 L30.3927253,11.8444221 L33.5123779,11.8444221 L33.5123779,7.46653266 L35.2477742,7.46653266 C38.9030945,7.46653266 39.3999457,5.6321608 39.3999457,3.92140704 C39.3999457,1.16683417 38.2838219,0 35.4334962,0 Z M34.8811075,5.28603015 L33.5183496,5.28603015 L33.5183496,1.90914573 L34.8811075,1.90914573 C35.858089,1.90914573 36.4492942,2.38371859 36.4492942,3.6440201 C36.4492942,4.48341709 36.1011401,5.28603015 34.8811075,5.28603015 Z" fill-rule="nonzero"></path><path d="M46.4573833,6.32743719 C46.4573833,3.4480402 46.8706298,0.986532663 50.7140608,0.986532663 C54.5574919,0.986532663 54.9689468,3.4480402 54.9689468,6.32743719 C54.9689468,9.62351759 54.4738871,11.9396985 50.7140608,11.9396985 C46.9542345,11.9396985 46.4573833,9.62351759 46.4573833,6.32743719 Z M52.0571118,6.16100503 C52.0571118,3.96964824 51.9538002,2.86432161 50.7140608,2.86432161 C49.4743214,2.86432161 49.3710098,3.96964824 49.3710098,6.16100503 C49.3710098,9.37266332 49.6403366,10.0619095 50.7140608,10.0619095 C51.787785,10.0619095 52.0565147,9.37266332 52.0565147,6.16100503 L52.0571118,6.16100503 Z" fill-rule="nonzero"></path><rect fill-rule="nonzero" x="0" y="0.0301507538" width="3.03843648" height="11.8124623"></rect><path d="M9.51900109,0.0301507538 L8.8155266,5.54773869 L8.38018458,2.54713568 C8.25278683,1.58432161 8.13136084,0.745326633 8.01590662,0.0301507538 L4.07453855,0.0301507538 L4.07453855,11.8426131 L6.73615635,11.8426131 L6.74809989,4.04020101 L7.86840391,11.839598 L9.76444083,11.839598 L10.8268187,3.86653266 L10.8363735,11.839598 L13.4896308,11.839598 L13.4896308,0.0301507538 L9.51900109,0.0301507538 Z"></path><path d="M18.2401737,2.15577889 C18.3613005,2.22685521 18.4456965,2.34775012 18.4712812,2.48683417 C18.5047231,2.63758794 18.5214441,2.97929648 18.5214441,3.5119598 L18.5214441,8.09246231 C18.5214441,8.87919598 18.4710822,9.36160804 18.3703583,9.53969849 C18.2696345,9.71778894 18.0007058,9.80623116 17.5635722,9.80503729 L17.5635722,2.05025126 C17.8944083,2.05025126 18.1199421,2.08542714 18.2401737,2.15577889 Z M18.2085233,11.8426131 C18.9366811,11.8426131 19.4817047,11.8024121 19.8435939,11.7220101 C20.1760582,11.6557965 20.4883129,11.5111601 20.754886,11.2998995 C21.0104507,11.0828833 21.1913005,10.7896393 21.2714441,10.4623116 C21.3705755,10.1053266 21.429696,9.39738693 21.429696,8.33849246 L21.429696,4.18914573 C21.429696,3.07296482 21.3866992,2.32341709 21.3192182,1.94231156 C21.2491064,1.55561593 21.073757,1.19626854 20.8128122,0.904522613 C20.54249,0.592964824 20.1481542,0.369447236 19.6298046,0.233969849 C19.1114549,0.0982914573 18.2658523,0.0295477387 16.7944083,0.0295477387 L14.5251357,0.0295477387 L14.5251357,11.8426131 L18.2085233,11.8426131 Z"></path><path d="M26.416721,8.97527638 C26.416721,9.54693467 26.3886536,9.90874372 26.332519,10.0607035 C26.2763844,10.2102513 26.0339305,10.2868342 25.8458198,10.2868342 C25.657709,10.2868342 25.5472313,10.2132663 25.4833333,10.0673367 C25.4194354,9.92140704 25.3925624,9.59095477 25.3925624,9.07175879 L25.3925624,5.94934673 C25.3925624,5.41025126 25.4192363,5.07417085 25.4725841,4.94110553 C25.525932,4.8080402 25.6429786,4.74150754 25.8237242,4.74150754 C26.0094463,4.74150754 26.2584691,4.81748744 26.3211726,4.97065327 C26.3838762,5.1238191 26.416721,5.44884422 26.416721,5.9481407 L26.416721,8.97527638 Z M22.4652009,0.0301507538 L22.4652009,11.8426131 L25.2008686,11.8426131 L25.3901737,11.0900503 C25.6130801,11.37176 25.8917241,11.6034266 26.2083062,11.7702513 C26.5068947,11.921608 26.9517915,11.9975879 27.2963626,11.9975879 C27.741081,12.0083011 28.1774148,11.8742607 28.5408795,11.6152764 C28.8904271,11.360402 29.1125769,11.0588945 29.207329,10.7107538 C29.3020811,10.3626131 29.349059,9.83497487 29.3482628,9.1278392 L29.3482628,5.8160804 C29.3482628,5.10211055 29.3333333,4.63778894 29.301683,4.41889447 C29.2603631,4.17705181 29.1645365,3.94803829 29.0216069,3.74954774 C28.8515909,3.51011348 28.6163121,3.32574882 28.3444083,3.21889447 C28.0116005,3.08534049 27.6555905,3.02074296 27.297557,3.02894472 C26.9482085,3.02894472 26.5009229,3.09949749 26.2029316,3.23819095 C25.8905716,3.38828976 25.6139569,3.60466937 25.3919653,3.87256281 L25.3919653,0.0301507538 L22.4652009,0.0301507538 Z"></path></g></svg></div></a></div></div><div class="sc-eNQAEJ bgIopm"></div><div class="sc-kpOJdX gBwnwt imdb-header__watchlist-button"><a class="ipc-button ipc-button--single-padding ipc-button--default-height ipc-button--core-baseAlt ipc-button--theme-baseAlt ipc-button--on-textPrimary ipc-text-button" tabindex="0" href="/list/watchlist?ref_=nv_usr_wl_all_0"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--watchlist ipc-button__icon ipc-button__icon--pre" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M17 3c1.05 0 1.918.82 1.994 1.851L19 5v16l-7-3-7 3V5c0-1.05.82-1.918 1.851-1.994L7 3h10zm-4 4h-2v3H8v2h3v3h2v-3h3v-2h-3V7z" fill="currentColor"></path></svg><div class="ipc-button__text">Watchlist</div></a></div><div class="_3x17Igk9XRXcaKrcG3_MXQ navbar__user sc-kgoBCf iTQkiJ"><div class="sc-gzVnrw sVyDb navbar__flyout--breakpoint-m"><label aria-label="Toggle Acount Menu" role="button" class="ipc-icon-button navbar__flyout__icon-on-mobile imdb-header__account-toggle--logged-in imdb-header__accountmenu-toggle ipc-icon-button--baseAlt ipc-icon-button--onBase" tabindex="0" for="navUserMenu"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--account-circle" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z"></path></svg></label><label aria-label="Toggle Acount Menu" class="ipc-button ipc-button--single-padding ipc-button--default-height ipc-button--core-baseAlt ipc-button--theme-baseAlt ipc-button--on-textPrimary ipc-text-button navbar__flyout__text-button-after-mobile navbar__user-menu-toggle__button" tabindex="0" for="navUserMenu"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--account-circle ipc-button__icon ipc-button__icon--pre" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z"></path></svg><div class="ipc-button__text"><span class="imdb-header__account-toggle--logged-in imdb-header__accountmenu-toggle navbar__user-name navbar__user-menu-toggle__name navbar__user-menu-toggle--desktop">Mateus</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--arrow-drop-down navbar__flyout__button-pointer" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path></svg></div></label><input type="checkbox" class="ipc-menu__focused-state" id="navUserMenu" name="navUserMenu" hidden="" tabindex="-1" aria-hidden="true"/><div class="ipc-menu mdc-menu ipc-menu--not-initialized ipc-menu--on-baseAlt ipc-menu--anchored ipc-menu--with-checkbox ipc-menu--expand-from-top-right navbar__flyout--menu" data-menu-id="navUserMenu" role="presentation"><div class="ipc-menu__items mdc-menu__items" role="presentation"><span id="navUserMenu-contents"><ul class="ipc-list mdc-list imdb-header__account-menu ipc-list--baseAlt" role="menu" aria-orientation="vertical"><a role="menuitem" class="ipc-list__item mdc-list-item ipc-list__item--disabled navbar__user-name navbar__user-menu__username" tabindex="0" aria-disabled="true"><span class="ipc-list-item__text" role="presentation"><span>Mateus</span></span></a><li role="separator" class="ipc-list-divider mdc-list-divider navbar__user-menu__username-divider"></li><a role="menuitem" class="ipc-list__item mdc-list-item" href="/profile?ref_=nv_usr_prof_2" tabindex="0" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Your activity</span></a><a role="menuitem" class="ipc-list__item mdc-list-item" href="/list/watchlist?ref_=nv_usr_wl" tabindex="0" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Your watchlist</span></a><a role="menuitem" class="ipc-list__item mdc-list-item" href="/list/ratings?ref_=nv_usr_rt_4" tabindex="0" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Your ratings</span></a><a role="menuitem" class="ipc-list__item mdc-list-item" href="/profile/lists?ref_=nv_usr_lst_3" tabindex="0" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Your lists</span></a><a role="menuitem" class="ipc-list__item mdc-list-item" href="/registration/accountsettings?ref_=nv_usr_pers_1" tabindex="0" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Account settings</span></a><a role="menuitem" class="ipc-list__item mdc-list-item imdb-header-account-menu__sign-out" href="/registration/logout?ref=nv_usr_lgout_6" tabindex="0" aria-disabled="false"><span class="ipc-list-item__text" role="presentation">Sign out</span></a></ul></span></div></div></div></div></div></nav><svg style="width:0;height:0;overflow:hidden;display:block" xmlns="http://www.w3.org/2000/svg" version="1.1"><defs><linearGradient id="ipc-svg-gradient-tv-logo-t" x1="31.973%" y1="53.409%" x2="153.413%" y2="-16.853%"><stop stop-color="#D01F49" offset="21.89%"></stop><stop stop-color="#E8138B" offset="83.44%"></stop></linearGradient><linearGradient id="ipc-svg-gradient-tv-logo-v" x1="-38.521%" y1="84.997%" x2="104.155%" y2="14.735%"><stop stop-color="#D01F49" offset="21.89%"></stop><stop stop-color="#E8138B" offset="83.44%"></stop></linearGradient></defs></svg>
    </div>
<script type="text/javascript">
    if (!window.RadWidget) {
        window.RadWidget = {
            registerReactWidgetInstance: function(input) {
                window.RadWidget[input.widgetName] = window.RadWidget[input.widgetName] || [];
                window.RadWidget[input.widgetName].push({
                    id: input.instanceId,
                    props: JSON.stringify(input.model)
                })
            },
            getReactWidgetInstances: function(widgetName) {
                return window.RadWidget[widgetName] || []
            }
        };
    }
</script>    <script type="text/javascript">
        window['RadWidget'].registerReactWidgetInstance({
            widgetName: "IMDbConsumerSiteNavFeatureV1",
            instanceId: "67033f9e-a0f7-4409-b671-be70f6c4aa60",
            model: {"username":"Mateus","isLoggedIn":true,"showIMDbTVLink":false,"weblabs":[]}
        });
    </script>
<script>
    if (typeof uet == 'function') {
      uet("ne");
    }
</script>

        <div id="wrapper">
            <div id="root" class="redesign">
                <div id="nb20" class="navbarSprite">
                    <div id="supertab">	
	
<script type="text/javascript">
// Track beginning of ad html
if (typeof window.uet === 'function') {
window.uet('bb', 'adplacements:' + 'top_ad'.replace(/_/g, ':'), {wb: 1});
}
</script>
<!-- begin TOP_AD -->
<div id="top_ad_wrapper" class="cornerstone_slot">
<script type="text/javascript">
doWithAds(function(){
if ('cornerstone_slot' != 'injected_slot') {
ad_utils.register_ad('top_ad');
}
});
</script>
<iframe allowtransparency="true" class="yesScript" data-blank-serverside data-ad-viewability-treatment frameborder="0" id="top_ad" marginwidth="0" marginheight="0" name="top_ad" onload="doWithAds.call(this, function(){ ad_utils.on_ad_load(this); });" scrolling="no" data-original-width="0" data-original-height="0" width="0" height="0" ></iframe> </div>
<div id="top_ad_reflow_helper"></div>
<script id="top_ad_rendering">
doWithAds(function(){
if ('cornerstone_slot' == 'cornerstone_slot') {
ad_utils.inject_serverside_ad('top_ad', '');
}
else if ('cornerstone_slot' == 'injected_slot') {
ad_utils.inject_ad.register('top_ad');
}
}, "ad_utils not defined, unable to render client-side GPT ad or injected ad.");
</script>
<!-- End TOP_AD -->
	
</div>
	
	<!-- no content received for slot: navstrip -->
	
	
	
<script type="text/javascript">
// Track beginning of ad html
if (typeof window.uet === 'function') {
window.uet('bb', 'adplacements:' + 'injected_navstrip'.replace(/_/g, ':'), {wb: 1});
}
</script>
<!-- begin INJECTED_NAVSTRIP -->
<div id="injected_navstrip_wrapper" class="injected_slot">
<script type="text/javascript">
doWithAds(function(){
if ('injected_slot' != 'injected_slot') {
ad_utils.register_ad('injected_navstrip');
}
});
</script>
<iframe allowtransparency="true" class="yesScript" data-dart-params="#doubleclick;u=716334424873;ord=716334424873?" frameborder="0" id="injected_navstrip" marginwidth="0" marginheight="0" name="injected_navstrip" onload="doWithAds.call(this, function(){ ad_utils.on_ad_load(this); });" scrolling="no" data-original-width="0" data-original-height="0" width="0" height="0" ></iframe> </div>
<div id="injected_navstrip_reflow_helper"></div>
<script id="injected_navstrip_rendering">
doWithAds(function(){
if ('injected_slot' == 'cornerstone_slot') {
ad_utils.inject_serverside_ad('injected_navstrip', '');
}
else if ('injected_slot' == 'injected_slot') {
ad_utils.inject_ad.register('injected_navstrip');
}
}, "ad_utils not defined, unable to render client-side GPT ad or injected ad.");
</script>
<!-- End INJECTED_NAVSTRIP -->
	
                </div>
              

                <div id="pagecontent" class="pagecontent">
	
	
<script type="text/javascript">
// Track beginning of ad html
if (typeof window.uet === 'function') {
window.uet('bb', 'adplacements:' + 'injected_billboard'.replace(/_/g, ':'), {wb: 1});
}
</script>
<!-- begin INJECTED_BILLBOARD -->
<div id="injected_billboard_wrapper" class="injected_slot">
<script type="text/javascript">
doWithAds(function(){
if ('injected_slot' != 'injected_slot') {
ad_utils.register_ad('injected_billboard');
}
});
</script>
<iframe allowtransparency="true" class="yesScript" data-dart-params="#doubleclick;u=716334424873;ord=716334424873?" frameborder="0" id="injected_billboard" marginwidth="0" marginheight="0" name="injected_billboard" onload="doWithAds.call(this, function(){ ad_utils.on_ad_load(this); });" scrolling="no" data-original-width="0" data-original-height="0" width="0" height="0" ></iframe> </div>
<div id="injected_billboard_reflow_helper"></div>
<script id="injected_billboard_rendering">
doWithAds(function(){
if ('injected_slot' == 'cornerstone_slot') {
ad_utils.inject_serverside_ad('injected_billboard', '');
}
else if ('injected_slot' == 'injected_slot') {
ad_utils.inject_ad.register('injected_billboard');
}
}, "ad_utils not defined, unable to render client-side GPT ad or injected ad.");
</script>
<!-- End INJECTED_BILLBOARD -->
	
<div id="content-2-wide" class="redesign">
    <div id="main">
        <div class="article">
            <h1 class="header">Most Popular Studio Ghibli Movies and TV Shows  </h1>
    <div class="faceter nojs-hidden">
        <div class="faceter-header">
            <span class="expand">
                <span class="global-sprite double-arrow down active"></span>&nbsp;<strong>Refine</strong>
            </span>
            <span class="facets-active">
                <span class="empty text-muted">See titles to watch instantly, titles you haven't rated, etc</span>
            </span>
        </div>
            <div class="faceter-content">
                <div class="faceter-categories">
                    <ul>
                            <li class="faceter-category" data-for="title_type">
                                <strong>Movies or TV</strong>
                            </li>
                            <li class="faceter-category" data-for="genres">
                                <strong>Genres</strong>
                            </li>
                            <li class="faceter-category" data-for="keywords">
                                <strong>Keywords</strong>
                            </li>
                            <li class="faceter-category" data-for="imdb_rating">
                                <strong>IMDb Rating</strong>
                            </li>
                            <li class="faceter-category" data-for="in_theaters">
                                <strong>In Theaters</strong>
                            </li>
                            <li class="faceter-category" data-for="release_date">
                                <strong>Release Year</strong>
                            </li>
                            <li class="faceter-category" data-for="you_and_this_list">
                                <strong>You and This List</strong>
                            </li>
                    </ul>
                </div><div class="faceter-facets">
                        <div class="faceter-fieldset title_type">
    <fieldset data-join="or" name="title_type">
    <label class="unbold">
        <input type=checkbox data-count="19" name="movie"  ref-marker="kw_ref_typ"/>
        <span class="faceter-facet-text">Feature Film</span>
            <span class="text-muted text-small">(19)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="2" name="short"  ref-marker="kw_ref_typ"/>
        <span class="faceter-facet-text">Short Film</span>
            <span class="text-muted text-small">(2)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="2" name="tvMovie"  ref-marker="kw_ref_typ"/>
        <span class="faceter-facet-text">TV Movie</span>
            <span class="text-muted text-small">(2)</span>
    </label>
        <br />
    </fieldset>
                        </div>
                        <div class="faceter-fieldset genres">
    <fieldset data-join="and" name="genres">
        <span class="col-2">
    <label class="unbold">
        <input type=checkbox data-count="21" name="Animation"  ref-marker="kw_ref_gnr"/>
        <span class="faceter-facet-text">Animation</span>
            <span class="text-muted text-small">(21)</span>
    </label>
        </span>
        <span class="col-2">
    <label class="unbold">
        <input type=checkbox data-count="14" name="Family"  ref-marker="kw_ref_gnr"/>
        <span class="faceter-facet-text">Family</span>
            <span class="text-muted text-small">(14)</span>
    </label>
        </span>
        <span class="col-2">
    <label class="unbold">
        <input type=checkbox data-count="14" name="Fantasy"  ref-marker="kw_ref_gnr"/>
        <span class="faceter-facet-text">Fantasy</span>
            <span class="text-muted text-small">(14)</span>
    </label>
        </span>
        <span class="col-2">
    <label class="unbold">
        <input type=checkbox data-count="13" name="Adventure"  ref-marker="kw_ref_gnr"/>
        <span class="faceter-facet-text">Adventure</span>
            <span class="text-muted text-small">(13)</span>
    </label>
        </span>
        <span class="col-2">
    <label class="unbold">
        <input type=checkbox data-count="10" name="Drama"  ref-marker="kw_ref_gnr"/>
        <span class="faceter-facet-text">Drama</span>
            <span class="text-muted text-small">(10)</span>
    </label>
        </span>
        <span class="col-2">
    <label class="unbold">
        <input type=checkbox data-count="5" name="Romance"  ref-marker="kw_ref_gnr"/>
        <span class="faceter-facet-text">Romance</span>
            <span class="text-muted text-small">(5)</span>
    </label>
        </span>
        <span class="col-2">
    <label class="unbold">
        <input type=checkbox data-count="3" name="Comedy"  ref-marker="kw_ref_gnr"/>
        <span class="faceter-facet-text">Comedy</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        </span>
        <span class="col-2">
    <label class="unbold">
        <input type=checkbox data-count="3" name="Sci-Fi"  ref-marker="kw_ref_gnr"/>
        <span class="faceter-facet-text">Sci-Fi</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        </span>
        <span class="col-2">
    <label class="unbold">
        <input type=checkbox data-count="2" name="Mystery"  ref-marker="kw_ref_gnr"/>
        <span class="faceter-facet-text">Mystery</span>
            <span class="text-muted text-small">(2)</span>
    </label>
        </span>
        <span class="col-2">
    <label class="unbold">
        <input type=checkbox data-count="2" name="Short"  ref-marker="kw_ref_gnr"/>
        <span class="faceter-facet-text">Short</span>
            <span class="text-muted text-small">(2)</span>
    </label>
        </span>
        <span class="col-2">
    <label class="unbold">
        <input type=checkbox data-count="1" name="Biography"  ref-marker="kw_ref_gnr"/>
        <span class="faceter-facet-text">Biography</span>
            <span class="text-muted text-small">(1)</span>
    </label>
        </span>
        <span class="col-2">
    <label class="unbold">
        <input type=checkbox data-count="1" name="Documentary"  ref-marker="kw_ref_gnr"/>
        <span class="faceter-facet-text">Documentary</span>
            <span class="text-muted text-small">(1)</span>
    </label>
        </span>
        <span class="col-2">
    <label class="unbold">
        <input type=checkbox data-count="1" name="Music"  ref-marker="kw_ref_gnr"/>
        <span class="faceter-facet-text">Music</span>
            <span class="text-muted text-small">(1)</span>
    </label>
        </span>
        <span class="col-2">
    <label class="unbold">
        <input type=checkbox data-count="1" name="War"  ref-marker="kw_ref_gnr"/>
        <span class="faceter-facet-text">War</span>
            <span class="text-muted text-small">(1)</span>
    </label>
        </span>
    </fieldset>
                        </div>
                        <div class="faceter-fieldset keywords">
    <fieldset data-join="and" name="keywords">
    <label class="unbold">
        <input type=checkbox data-count="23" name="studio-ghibli"  checked="checked" ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Studio Ghibli</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="21" name="anime"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Anime</span>
            <span class="text-muted text-small">(21)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="12" name="character-name-in-title"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Character Name In Title</span>
            <span class="text-muted text-small">(12)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="10" name="friendship"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Friendship</span>
            <span class="text-muted text-small">(10)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="10" name="japan"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Japan</span>
            <span class="text-muted text-small">(10)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="10" name="surrealism"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Surrealism</span>
            <span class="text-muted text-small">(10)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="8" name="flashback"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Flashback</span>
            <span class="text-muted text-small">(8)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="7" name="based-on-novel"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Based On Novel</span>
            <span class="text-muted text-small">(7)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="6" name="cult-film"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Cult Film</span>
            <span class="text-muted text-small">(6)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="6" name="falling-from-height"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Falling From Height</span>
            <span class="text-muted text-small">(6)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="6" name="family-relationships"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Family Relationships</span>
            <span class="text-muted text-small">(6)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="6" name="female-protagonist"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Female Protagonist</span>
            <span class="text-muted text-small">(6)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="6" name="little-girl"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Little Girl</span>
            <span class="text-muted text-small">(6)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="6" name="mother-daughter-relationship"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Mother Daughter Relationship</span>
            <span class="text-muted text-small">(6)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="6" name="transformation"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Transformation</span>
            <span class="text-muted text-small">(6)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="5" name="airplane"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Airplane</span>
            <span class="text-muted text-small">(5)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="5" name="based-on-manga"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Based On Manga</span>
            <span class="text-muted text-small">(5)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="5" name="coming-of-age"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Coming Of Age</span>
            <span class="text-muted text-small">(5)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="5" name="flying"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Flying</span>
            <span class="text-muted text-small">(5)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="5" name="love"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Love</span>
            <span class="text-muted text-small">(5)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="5" name="magic"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Magic</span>
            <span class="text-muted text-small">(5)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="5" name="nature"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Nature</span>
            <span class="text-muted text-small">(5)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="5" name="princess"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Princess</span>
            <span class="text-muted text-small">(5)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="5" name="singing"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Singing</span>
            <span class="text-muted text-small">(5)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="5" name="teenage-girl"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Teenage Girl</span>
            <span class="text-muted text-small">(5)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="5" name="three-word-title"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Three Word Title</span>
            <span class="text-muted text-small">(5)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="5" name="two-word-title"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Two Word Title</span>
            <span class="text-muted text-small">(5)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="4" name="baby"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Baby</span>
            <span class="text-muted text-small">(4)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="4" name="blockbuster"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Blockbuster</span>
            <span class="text-muted text-small">(4)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="4" name="boat"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Boat</span>
            <span class="text-muted text-small">(4)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="4" name="cat"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Cat</span>
            <span class="text-muted text-small">(4)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="4" name="chase"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Chase</span>
            <span class="text-muted text-small">(4)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="4" name="crying"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Crying</span>
            <span class="text-muted text-small">(4)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="4" name="directorial-debut"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Directorial Debut</span>
            <span class="text-muted text-small">(4)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="4" name="escape"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Escape</span>
            <span class="text-muted text-small">(4)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="4" name="falling-in-love"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Falling In Love</span>
            <span class="text-muted text-small">(4)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="4" name="forest"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Forest</span>
            <span class="text-muted text-small">(4)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="4" name="friend"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Friend</span>
            <span class="text-muted text-small">(4)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="4" name="girl"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Girl</span>
            <span class="text-muted text-small">(4)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="4" name="japanese"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Japanese</span>
            <span class="text-muted text-small">(4)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="4" name="mother-son-relationship"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Mother Son Relationship</span>
            <span class="text-muted text-small">(4)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="4" name="multiple-english-dubs"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Multiple English Dubs</span>
            <span class="text-muted text-small">(4)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="4" name="photograph"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Photograph</span>
            <span class="text-muted text-small">(4)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="4" name="rain"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Rain</span>
            <span class="text-muted text-small">(4)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="4" name="rescue"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Rescue</span>
            <span class="text-muted text-small">(4)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="4" name="sister-sister-relationship"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Sister Sister Relationship</span>
            <span class="text-muted text-small">(4)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="4" name="steampunk"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Steampunk</span>
            <span class="text-muted text-small">(4)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="4" name="train"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Train</span>
            <span class="text-muted text-small">(4)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="animal-in-title"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Animal In Title</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="bathtub"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Bathtub</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="beach"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Beach</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="bicycle"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Bicycle</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="bird"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Bird</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="blood"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Blood</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="boyfriend-girlfriend-relationship"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Boyfriend Girlfriend Relationship</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="castle"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Castle</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="curse"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Curse</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="death"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Death</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="dog"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Dog</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="dream"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Dream</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="father-daughter-relationship"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Father Daughter Relationship</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="father-son-relationship"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Father Son Relationship</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="fire"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Fire</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="flight"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Flight</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="foreign-language-adaptation"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Foreign Language Adaptation</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="frog"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Frog</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="kidnapping"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Kidnapping</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="little-boy"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Little Boy</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="old-woman"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Old Woman</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="orphan"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Orphan</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="prince"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Prince</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="ring"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Ring</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="rowboat"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Rowboat</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="sea"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Sea</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="storm"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Storm</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="surprise-ending"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Surprise Ending</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="swimming"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Swimming</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="tears"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Tears</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="teenage-boy"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Teenage Boy</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="thief"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Thief</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="tokyo-japan"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Tokyo Japan</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="water"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Water</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="3" name="witch"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Witch</span>
            <span class="text-muted text-small">(3)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="2" name="adult-animation"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Adult Animation</span>
            <span class="text-muted text-small">(2)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="2" name="air-pirate"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Air Pirate</span>
            <span class="text-muted text-small">(2)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="2" name="airship"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Airship</span>
            <span class="text-muted text-small">(2)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="2" name="animal"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Animal</span>
            <span class="text-muted text-small">(2)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="2" name="anthropomorphism"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Anthropomorphism</span>
            <span class="text-muted text-small">(2)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="2" name="bakery"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Bakery</span>
            <span class="text-muted text-small">(2)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="2" name="bamboo"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Bamboo</span>
            <span class="text-muted text-small">(2)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="2" name="based-on-book"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Based On Book</span>
            <span class="text-muted text-small">(2)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="2" name="based-on-comic"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Based On Comic</span>
            <span class="text-muted text-small">(2)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="2" name="based-on-comic-book"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Based On Comic Book</span>
            <span class="text-muted text-small">(2)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="2" name="boy"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Boy</span>
            <span class="text-muted text-small">(2)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="2" name="broom"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Broom</span>
            <span class="text-muted text-small">(2)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="2" name="brother-sister-relationship"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Brother Sister Relationship</span>
            <span class="text-muted text-small">(2)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="2" name="bus"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Bus</span>
            <span class="text-muted text-small">(2)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="2" name="caterpillar"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Caterpillar</span>
            <span class="text-muted text-small">(2)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="2" name="cherry-blossom"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Cherry Blossom</span>
            <span class="text-muted text-small">(2)</span>
    </label>
        <br />
    <label class="unbold">
        <input type=checkbox data-count="2" name="cigarette-smoking"  ref-marker="kw_ref_key"/>
        <span class="faceter-facet-text">Cigarette Smoking</span>
            <span class="text-muted text-small">(2)</span>
    </label>
        <br />
    </fieldset>
                        </div>
                        <div class="faceter-fieldset imdb_rating">
    <fieldset data-join="between" name="user_rating">
            <legend class="text-muted unbold" data-tag="IMDb Rating">IMDb user rating (average)</legend>
    <span></span>
    <select name='min' value='0.0' ref-marker="kw_ref_rt_usr">
                    <option value="1">1</option>
                    <option value="1.1">1.1</option>
                    <option value="1.2">1.2</option>
                    <option value="1.3">1.3</option>
                    <option value="1.4">1.4</option>
                    <option value="1.5">1.5</option>
                    <option value="1.6">1.6</option>
                    <option value="1.7">1.7</option>
                    <option value="1.8">1.8</option>
                    <option value="1.9">1.9</option>
                    <option value="2.0">2.0</option>
                    <option value="2.1">2.1</option>
                    <option value="2.2">2.2</option>
                    <option value="2.3">2.3</option>
                    <option value="2.4">2.4</option>
                    <option value="2.5">2.5</option>
                    <option value="2.6">2.6</option>
                    <option value="2.7">2.7</option>
                    <option value="2.8">2.8</option>
                    <option value="2.9">2.9</option>
                    <option value="3.0">3.0</option>
                    <option value="3.1">3.1</option>
                    <option value="3.2">3.2</option>
                    <option value="3.3">3.3</option>
                    <option value="3.4">3.4</option>
                    <option value="3.5">3.5</option>
                    <option value="3.6">3.6</option>
                    <option value="3.7">3.7</option>
                    <option value="3.8">3.8</option>
                    <option value="3.9">3.9</option>
                    <option value="4.0">4.0</option>
                    <option value="4.1">4.1</option>
                    <option value="4.2">4.2</option>
                    <option value="4.3">4.3</option>
                    <option value="4.4">4.4</option>
                    <option value="4.5">4.5</option>
                    <option value="4.6">4.6</option>
                    <option value="4.7">4.7</option>
                    <option value="4.8">4.8</option>
                    <option value="4.9">4.9</option>
                    <option value="5.0">5.0</option>
                    <option value="5.1">5.1</option>
                    <option value="5.2">5.2</option>
                    <option value="5.3">5.3</option>
                    <option value="5.4">5.4</option>
                    <option value="5.5">5.5</option>
                    <option value="5.6">5.6</option>
                    <option value="5.7">5.7</option>
                    <option value="5.8">5.8</option>
                    <option value="5.9">5.9</option>
                    <option value="6.0">6.0</option>
                    <option value="6.1">6.1</option>
                    <option value="6.2">6.2</option>
                    <option value="6.3">6.3</option>
                    <option value="6.4">6.4</option>
                    <option value="6.5">6.5</option>
                    <option value="6.6">6.6</option>
                    <option value="6.7">6.7</option>
                    <option value="6.8">6.8</option>
                    <option value="6.9">6.9</option>
                    <option value="7.0">7.0</option>
                    <option value="7.1">7.1</option>
                    <option value="7.2">7.2</option>
                    <option value="7.3">7.3</option>
                    <option value="7.4">7.4</option>
                    <option value="7.5">7.5</option>
                    <option value="7.6">7.6</option>
                    <option value="7.7">7.7</option>
                    <option value="7.8">7.8</option>
                    <option value="7.9">7.9</option>
                    <option value="8.0">8.0</option>
                    <option value="8.1">8.1</option>
                    <option value="8.2">8.2</option>
                    <option value="8.3">8.3</option>
                    <option value="8.4">8.4</option>
                    <option value="8.5">8.5</option>
                    <option value="8.6">8.6</option>
                    <option value="8.7">8.7</option>
                    <option value="8.8">8.8</option>
                    <option value="8.9">8.9</option>
                    <option value="9.0">9.0</option>
                    <option value="9.1">9.1</option>
                    <option value="9.2">9.2</option>
                    <option value="9.3">9.3</option>
                    <option value="9.4">9.4</option>
                    <option value="9.5">9.5</option>
                    <option value="9.6">9.6</option>
                    <option value="9.7">9.7</option>
                    <option value="9.8">9.8</option>
                    <option value="9.9">9.9</option>
                    <option value="10">10</option>
    </select>
    <span>to</span>
    <select name='max' value='0.0' ref-marker="kw_ref_rt_usr">
                    <option value="10">10</option>
                    <option value="9.9">9.9</option>
                    <option value="9.8">9.8</option>
                    <option value="9.7">9.7</option>
                    <option value="9.6">9.6</option>
                    <option value="9.5">9.5</option>
                    <option value="9.4">9.4</option>
                    <option value="9.3">9.3</option>
                    <option value="9.2">9.2</option>
                    <option value="9.1">9.1</option>
                    <option value="9.0">9.0</option>
                    <option value="8.9">8.9</option>
                    <option value="8.8">8.8</option>
                    <option value="8.7">8.7</option>
                    <option value="8.6">8.6</option>
                    <option value="8.5">8.5</option>
                    <option value="8.4">8.4</option>
                    <option value="8.3">8.3</option>
                    <option value="8.2">8.2</option>
                    <option value="8.1">8.1</option>
                    <option value="8.0">8.0</option>
                    <option value="7.9">7.9</option>
                    <option value="7.8">7.8</option>
                    <option value="7.7">7.7</option>
                    <option value="7.6">7.6</option>
                    <option value="7.5">7.5</option>
                    <option value="7.4">7.4</option>
                    <option value="7.3">7.3</option>
                    <option value="7.2">7.2</option>
                    <option value="7.1">7.1</option>
                    <option value="7.0">7.0</option>
                    <option value="6.9">6.9</option>
                    <option value="6.8">6.8</option>
                    <option value="6.7">6.7</option>
                    <option value="6.6">6.6</option>
                    <option value="6.5">6.5</option>
                    <option value="6.4">6.4</option>
                    <option value="6.3">6.3</option>
                    <option value="6.2">6.2</option>
                    <option value="6.1">6.1</option>
                    <option value="6.0">6.0</option>
                    <option value="5.9">5.9</option>
                    <option value="5.8">5.8</option>
                    <option value="5.7">5.7</option>
                    <option value="5.6">5.6</option>
                    <option value="5.5">5.5</option>
                    <option value="5.4">5.4</option>
                    <option value="5.3">5.3</option>
                    <option value="5.2">5.2</option>
                    <option value="5.1">5.1</option>
                    <option value="5.0">5.0</option>
                    <option value="4.9">4.9</option>
                    <option value="4.8">4.8</option>
                    <option value="4.7">4.7</option>
                    <option value="4.6">4.6</option>
                    <option value="4.5">4.5</option>
                    <option value="4.4">4.4</option>
                    <option value="4.3">4.3</option>
                    <option value="4.2">4.2</option>
                    <option value="4.1">4.1</option>
                    <option value="4.0">4.0</option>
                    <option value="3.9">3.9</option>
                    <option value="3.8">3.8</option>
                    <option value="3.7">3.7</option>
                    <option value="3.6">3.6</option>
                    <option value="3.5">3.5</option>
                    <option value="3.4">3.4</option>
                    <option value="3.3">3.3</option>
                    <option value="3.2">3.2</option>
                    <option value="3.1">3.1</option>
                    <option value="3.0">3.0</option>
                    <option value="2.9">2.9</option>
                    <option value="2.8">2.8</option>
                    <option value="2.7">2.7</option>
                    <option value="2.6">2.6</option>
                    <option value="2.5">2.5</option>
                    <option value="2.4">2.4</option>
                    <option value="2.3">2.3</option>
                    <option value="2.2">2.2</option>
                    <option value="2.1">2.1</option>
                    <option value="2.0">2.0</option>
                    <option value="1.9">1.9</option>
                    <option value="1.8">1.8</option>
                    <option value="1.7">1.7</option>
                    <option value="1.6">1.6</option>
                    <option value="1.5">1.5</option>
                    <option value="1.4">1.4</option>
                    <option value="1.3">1.3</option>
                    <option value="1.2">1.2</option>
                    <option value="1.1">1.1</option>
                    <option value="1">1</option>
    </select>
    </fieldset>
    <fieldset data-join="between" name="num_votes">
            <legend class="text-muted unbold" data-tag="Votes">Number of votes</legend>
    <span></span>
    <input type="text" name="min" 
        data-validation="^[0-9]\d*$" size=10 value="" ref-marker="kw_ref_rt_vt">
    <span>to</span>
    <input type="text" name="max" 
        data-validation="^[0-9]\d*$" size=10 value="" ref-marker="kw_ref_rt_vt">
<a href="#"
title="Search" class="btn small secondary faceter-search-btn" data-group="num_votes"> &raquo;
</a>    </fieldset>
                        </div>
                        <div class="faceter-fieldset in_theaters">
    <fieldset data-join="and" name="now_playing">
    <label class="unbold">
        <input type=radio ref-marker="kw_ref_sh_fav" data-count="" name="in_theaters" value="favorite"  />
        <span class="faceter-facet-text">In Favorite Theaters</span>
    </label>
        <br />
    <label class="unbold">
        <input type=radio ref-marker="kw_ref_sh_you" data-count="" name="in_theaters" value="restrict"  />
        <span class="faceter-facet-text">In Theaters Near You</span>
    </label>
        <br />
        <hr />
    </fieldset>
                                <a href="#"
class="faceter-reset" data-fieldset="in_theaters">Reset</a>
                        </div>
                        <div class="faceter-fieldset release_date">
    <fieldset data-join="between" name="release_date">
            <legend class="text-muted unbold" data-tag="Released">Release year or range</legend>
    <span></span>
    <input type="text" name="min" 
        data-validation="^[0-9]\d*$" size=10 value="" ref-marker="kw_ref_yr">
    <span>to</span>
    <input type="text" name="max" 
        data-validation="^[0-9]\d*$" size=10 value="" ref-marker="kw_ref_yr">
<a href="#"
title="Search" class="btn small secondary faceter-search-btn" data-group="release_date"> &raquo;
</a>    </fieldset>
                        </div>
                        <div class="faceter-fieldset you_and_this_list">
    <fieldset data-join="and" name="lists">
    <label class="unbold">
        <input type=radio ref-marker="kw_ref_you_iwl" data-count="" name="you_and_this_list" value="watchlists"  />
        <span class="faceter-facet-text">In Watchlist</span>
    </label>
        <br />
    <label class="unbold">
        <input type=radio ref-marker="kw_ref_you_nwl" data-count="" name="you_and_this_list" value="!watchlists"  />
        <span class="faceter-facet-text">Not in Watchlist</span>
    </label>
        <br />
        <hr />
    </fieldset>
    <fieldset data-join="and" name="my_ratings">
    <label class="unbold">
        <input type=radio ref-marker="kw_ref_you_irt" data-count="" name="you_and_this_list" value="restrict"  />
        <span class="faceter-facet-text">Titles I rated</span>
    </label>
        <br />
    <label class="unbold">
        <input type=radio ref-marker="kw_ref_you_nrt" data-count="" name="you_and_this_list" value="exclude"  />
        <span class="faceter-facet-text">Titles I didn't rate</span>
    </label>
        <br />
        <hr />
    </fieldset>
                                <a href="#"
class="faceter-reset" data-fieldset="you_and_this_list">Reset</a>
                        </div>
                </div>
            </div>
        <div class="hidden faceter-working">
        </div>
    </div>
<div class="lister list detail sub-list" data-caller-name="search-keyword">
    <div class="header filmosearch">
        <div class="nav">
            <div class="lister-controls float-right lister-activated">
                    <div class="lister-control-group">
    Sort by: <br />
    <select class="lister-sort-by" name="sort">
<option value="moviemeter:ascending" selected="selected">Popularity</option>
<option value="alpha:ascending">Alphabetical</option>
<option value="user_rating:descending">IMDb Rating</option>
<option value="num_votes:descending">Number of Votes</option>
<option value="release_date:descending">Release Date</option>
<option value="runtime:descending">Runtime</option>
<option value="year:descending">Year</option>
    </select>
    
    <span class="global-sprite lister-sort-reverse descending" data-sort="moviemeter:descending" title="Ascending order"></span>
                    </div>
                    <div class="lister-control-group">
    View: <br />
        <span title="Advanced view" data-mode="advanced"
              class="global-sprite lister-mode advanced" ref-marker=kw_vw_adv + ></span>
        <span title="Compact view" data-mode="simple"
              class="global-sprite lister-mode simple" ref-marker=kw_vw_smp + ></span>
                    </div>
            </div>
    <div class="desc">
         
            23 titles
    </div>
            <div class="clear"></div>
        </div>
    </div>
    <div class="mode-simple column-headers hidden">
        <div class="col-title inline-block"><strong>Title & Date</strong></div>
        <div class="col-imdb-rating inline-block"><strong>IMDb<br />Rating</strong></div>
        <div class="col-user-rating inline-block"><strong>Your<br />Rating</strong></div>
    </div>
        <div class="lister-list">

    <div class="lister-item mode-detail">
        <div class="lister-item-image ribbonize" data-tconst="tt0245429">


<a href="/title/tt0245429/?ref_=kw_li_i"
> <img alt="A Viagem de Chihiro"
class="loadlate"
loadlate="https://m.media-amazon.com/images/M/MV5BNmU5OTQ0OWQtOTY0OS00Yjg4LWE1NDYtNDRhYWMxYWY4OTMwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR3,0,140,209_AL_.jpg"
data-tconst="tt0245429"
height="209"
src="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png"
width="140" />
</a>        </div>
        <div class="lister-item-content">
<h3 class="lister-item-header">
        <span class="lister-item-index unbold text-primary">1.</span>
    
    <a href="/title/tt0245429/?ref_=kw_li_tt"
>A Viagem de Chihiro</a>
    <span class="lister-item-year text-muted unbold">(2001)</span>
</h3>
    <p class="text-muted text-small">
            <span class="certificate">Livre</span>
                 <span class="ghost">|</span> 
                <span class="runtime">125 min</span>
                 <span class="ghost">|</span> 
            <span class="genre">
Animation, Adventure, Family            </span>
    </p>
    <div class="ratings-bar">
    <div class="inline-block ratings-imdb-rating" name="ir" data-value="8,6">
        <span class="global-sprite rating-star imdb-rating"></span>
        <strong>8,6</strong>
    </div>
            <div class="inline-block ratings-user-rating">
                <span class="userRatingValue" id="urv_tt0245429" data-tconst="tt0245429">
                    <span class="global-sprite rating-star no-rating"></span>
                    <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                </span>
    <div class="starBarWidget" id="sb_tt0245429">
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="BCYlw6B7Jdk8MPKBZFiXk1Zz8eDFV4TiBiOQxLuo6DUm0vvMoKxbaFAwuqEJ88Pgx1UhbglEdZwT%0D%0ARZglFsgmOEkNmo1JdRa_9dewJU8t-ECFBZtBwPGgICpAeswp1ZFIk8F1%0D%0A" data-user="ur112747879" id="tt0245429|imdb|8.6|8.6|kw_li_tt||search|keyword" data-ga-identifier=""
title="Users rated this 8,6/10 (592.966 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope itemprop="aggregateRating">
  <meta itemprop="ratingValue" content="8.6" />
  <meta itemprop="bestRating" content="10" />
  <meta itemprop="ratingCount" content="592966" />
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 120.4px">&nbsp;</span>
<span class="rating-stars">
      <a href="/title/tt0245429/vote?v=1&k=BCYlw6B7Jdk8MPKBZFiXk1Zz8eDFV4TiBiOQxLuo6DUm0vvMoKxbaFAwuqEJ88Pgx1UhbglEdZwT%0D%0ARZglFsgmOEkNmo1JdRa_9dewJU8t-ECFBZtBwPGgICpAeswp1ZFIk8F1%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 1" ><span>1</span></a>
      <a href="/title/tt0245429/vote?v=2&k=BCYlw6B7Jdk8MPKBZFiXk1Zz8eDFV4TiBiOQxLuo6DUm0vvMoKxbaFAwuqEJ88Pgx1UhbglEdZwT%0D%0ARZglFsgmOEkNmo1JdRa_9dewJU8t-ECFBZtBwPGgICpAeswp1ZFIk8F1%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 2" ><span>2</span></a>
      <a href="/title/tt0245429/vote?v=3&k=BCYlw6B7Jdk8MPKBZFiXk1Zz8eDFV4TiBiOQxLuo6DUm0vvMoKxbaFAwuqEJ88Pgx1UhbglEdZwT%0D%0ARZglFsgmOEkNmo1JdRa_9dewJU8t-ECFBZtBwPGgICpAeswp1ZFIk8F1%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 3" ><span>3</span></a>
      <a href="/title/tt0245429/vote?v=4&k=BCYlw6B7Jdk8MPKBZFiXk1Zz8eDFV4TiBiOQxLuo6DUm0vvMoKxbaFAwuqEJ88Pgx1UhbglEdZwT%0D%0ARZglFsgmOEkNmo1JdRa_9dewJU8t-ECFBZtBwPGgICpAeswp1ZFIk8F1%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 4" ><span>4</span></a>
      <a href="/title/tt0245429/vote?v=5&k=BCYlw6B7Jdk8MPKBZFiXk1Zz8eDFV4TiBiOQxLuo6DUm0vvMoKxbaFAwuqEJ88Pgx1UhbglEdZwT%0D%0ARZglFsgmOEkNmo1JdRa_9dewJU8t-ECFBZtBwPGgICpAeswp1ZFIk8F1%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 5" ><span>5</span></a>
      <a href="/title/tt0245429/vote?v=6&k=BCYlw6B7Jdk8MPKBZFiXk1Zz8eDFV4TiBiOQxLuo6DUm0vvMoKxbaFAwuqEJ88Pgx1UhbglEdZwT%0D%0ARZglFsgmOEkNmo1JdRa_9dewJU8t-ECFBZtBwPGgICpAeswp1ZFIk8F1%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 6" ><span>6</span></a>
      <a href="/title/tt0245429/vote?v=7&k=BCYlw6B7Jdk8MPKBZFiXk1Zz8eDFV4TiBiOQxLuo6DUm0vvMoKxbaFAwuqEJ88Pgx1UhbglEdZwT%0D%0ARZglFsgmOEkNmo1JdRa_9dewJU8t-ECFBZtBwPGgICpAeswp1ZFIk8F1%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 7" ><span>7</span></a>
      <a href="/title/tt0245429/vote?v=8&k=BCYlw6B7Jdk8MPKBZFiXk1Zz8eDFV4TiBiOQxLuo6DUm0vvMoKxbaFAwuqEJ88Pgx1UhbglEdZwT%0D%0ARZglFsgmOEkNmo1JdRa_9dewJU8t-ECFBZtBwPGgICpAeswp1ZFIk8F1%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 8" ><span>8</span></a>
      <a href="/title/tt0245429/vote?v=9&k=BCYlw6B7Jdk8MPKBZFiXk1Zz8eDFV4TiBiOQxLuo6DUm0vvMoKxbaFAwuqEJ88Pgx1UhbglEdZwT%0D%0ARZglFsgmOEkNmo1JdRa_9dewJU8t-ECFBZtBwPGgICpAeswp1ZFIk8F1%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 9" ><span>9</span></a>
      <a href="/title/tt0245429/vote?v=10&k=BCYlw6B7Jdk8MPKBZFiXk1Zz8eDFV4TiBiOQxLuo6DUm0vvMoKxbaFAwuqEJ88Pgx1UhbglEdZwT%0D%0ARZglFsgmOEkNmo1JdRa_9dewJU8t-ECFBZtBwPGgICpAeswp1ZFIk8F1%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 10" ><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">8,6</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a href="/title/tt0245429/vote?v=X;k=BCYlw6B7Jdk8MPKBZFiXk1Zz8eDFV4TiBiOQxLuo6DUm0vvMoKxbaFAwuqEJ88Pgx1UhbglEdZwT%0D%0ARZglFsgmOEkNmo1JdRa_9dewJU8t-ECFBZtBwPGgICpAeswp1ZFIk8F1%0D%0A" title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>
    </div>
            </div>
            <div class="inline-block ratings-metascore">
<span class="metascore  favorable">96        </span>
        Metascore
            </div>
    </div>
<p class="">
    During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.</p>
    <p class="text-muted text-small">
    Director:
<a href="/name/nm0594503/?ref_=kw_li_dr_0"
>Hayao Miyazaki</a>
                 <span class="ghost">|</span> 
    Stars:
<a href="/name/nm0153738/?ref_=kw_li_st_0"
>Daveigh Chase</a>, 
<a href="/name/nm0687189/?ref_=kw_li_st_1"
>Suzanne Pleshette</a>, 
<a href="/name/nm0997115/?ref_=kw_li_st_2"
>Miyu Irino</a>, 
<a href="/name/nm0383708/?ref_=kw_li_st_3"
>Rumi Hiiragi</a>
    </p>
        <p class="text-muted text-small">
                <span class="text-muted">Votes:</span>
                <span name="nv" data-value="592966">592.966</span>
    <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                <span name="nv" data-value="10.055.859">$10.06M</span>
        </p>
        </div>
        <div class="clear"></div>
    </div>
    <div class="lister-item mode-detail">
        <div class="lister-item-image ribbonize" data-tconst="tt0119698">


<a href="/title/tt0119698/?ref_=kw_li_i"
> <img alt="Princesa Mononoke"
class="loadlate"
loadlate="https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_UX140_CR0,0,140,209_AL_.jpg"
data-tconst="tt0119698"
height="209"
src="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png"
width="140" />
</a>        </div>
        <div class="lister-item-content">
<h3 class="lister-item-header">
        <span class="lister-item-index unbold text-primary">2.</span>
    
    <a href="/title/tt0119698/?ref_=kw_li_tt"
>Princesa Mononoke</a>
    <span class="lister-item-year text-muted unbold">(1997)</span>
</h3>
    <p class="text-muted text-small">
            <span class="certificate">12</span>
                 <span class="ghost">|</span> 
                <span class="runtime">134 min</span>
                 <span class="ghost">|</span> 
            <span class="genre">
Animation, Adventure, Fantasy            </span>
    </p>
    <div class="ratings-bar">
    <div class="inline-block ratings-imdb-rating" name="ir" data-value="8,4">
        <span class="global-sprite rating-star imdb-rating"></span>
        <strong>8,4</strong>
    </div>
            <div class="inline-block ratings-user-rating">
                <span class="userRatingValue" id="urv_tt0119698" data-tconst="tt0119698">
                    <span class="global-sprite rating-star no-rating"></span>
                    <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                </span>
    <div class="starBarWidget" id="sb_tt0119698">
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="BCYqnuEwSsswGtybJQoEFsOFrgiP5uuZdSS46PYAavZEb2uKMy8A3qAftjDPhTtwCCOsxJ8EwBRI%0D%0AUWGW_zaJrgd3EY6iTcpBQwJwUdg_hzgmU18X1-Cl74UjLO08v_KqA5UU%0D%0A" data-user="ur112747879" id="tt0119698|imdb|8.4|8.4|kw_li_tt||search|keyword" data-ga-identifier=""
title="Users rated this 8,4/10 (312.385 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope itemprop="aggregateRating">
  <meta itemprop="ratingValue" content="8.4" />
  <meta itemprop="bestRating" content="10" />
  <meta itemprop="ratingCount" content="312385" />
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 117.6px">&nbsp;</span>
<span class="rating-stars">
      <a href="/title/tt0119698/vote?v=1&k=BCYqnuEwSsswGtybJQoEFsOFrgiP5uuZdSS46PYAavZEb2uKMy8A3qAftjDPhTtwCCOsxJ8EwBRI%0D%0AUWGW_zaJrgd3EY6iTcpBQwJwUdg_hzgmU18X1-Cl74UjLO08v_KqA5UU%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 1" ><span>1</span></a>
      <a href="/title/tt0119698/vote?v=2&k=BCYqnuEwSsswGtybJQoEFsOFrgiP5uuZdSS46PYAavZEb2uKMy8A3qAftjDPhTtwCCOsxJ8EwBRI%0D%0AUWGW_zaJrgd3EY6iTcpBQwJwUdg_hzgmU18X1-Cl74UjLO08v_KqA5UU%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 2" ><span>2</span></a>
      <a href="/title/tt0119698/vote?v=3&k=BCYqnuEwSsswGtybJQoEFsOFrgiP5uuZdSS46PYAavZEb2uKMy8A3qAftjDPhTtwCCOsxJ8EwBRI%0D%0AUWGW_zaJrgd3EY6iTcpBQwJwUdg_hzgmU18X1-Cl74UjLO08v_KqA5UU%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 3" ><span>3</span></a>
      <a href="/title/tt0119698/vote?v=4&k=BCYqnuEwSsswGtybJQoEFsOFrgiP5uuZdSS46PYAavZEb2uKMy8A3qAftjDPhTtwCCOsxJ8EwBRI%0D%0AUWGW_zaJrgd3EY6iTcpBQwJwUdg_hzgmU18X1-Cl74UjLO08v_KqA5UU%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 4" ><span>4</span></a>
      <a href="/title/tt0119698/vote?v=5&k=BCYqnuEwSsswGtybJQoEFsOFrgiP5uuZdSS46PYAavZEb2uKMy8A3qAftjDPhTtwCCOsxJ8EwBRI%0D%0AUWGW_zaJrgd3EY6iTcpBQwJwUdg_hzgmU18X1-Cl74UjLO08v_KqA5UU%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 5" ><span>5</span></a>
      <a href="/title/tt0119698/vote?v=6&k=BCYqnuEwSsswGtybJQoEFsOFrgiP5uuZdSS46PYAavZEb2uKMy8A3qAftjDPhTtwCCOsxJ8EwBRI%0D%0AUWGW_zaJrgd3EY6iTcpBQwJwUdg_hzgmU18X1-Cl74UjLO08v_KqA5UU%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 6" ><span>6</span></a>
      <a href="/title/tt0119698/vote?v=7&k=BCYqnuEwSsswGtybJQoEFsOFrgiP5uuZdSS46PYAavZEb2uKMy8A3qAftjDPhTtwCCOsxJ8EwBRI%0D%0AUWGW_zaJrgd3EY6iTcpBQwJwUdg_hzgmU18X1-Cl74UjLO08v_KqA5UU%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 7" ><span>7</span></a>
      <a href="/title/tt0119698/vote?v=8&k=BCYqnuEwSsswGtybJQoEFsOFrgiP5uuZdSS46PYAavZEb2uKMy8A3qAftjDPhTtwCCOsxJ8EwBRI%0D%0AUWGW_zaJrgd3EY6iTcpBQwJwUdg_hzgmU18X1-Cl74UjLO08v_KqA5UU%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 8" ><span>8</span></a>
      <a href="/title/tt0119698/vote?v=9&k=BCYqnuEwSsswGtybJQoEFsOFrgiP5uuZdSS46PYAavZEb2uKMy8A3qAftjDPhTtwCCOsxJ8EwBRI%0D%0AUWGW_zaJrgd3EY6iTcpBQwJwUdg_hzgmU18X1-Cl74UjLO08v_KqA5UU%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 9" ><span>9</span></a>
      <a href="/title/tt0119698/vote?v=10&k=BCYqnuEwSsswGtybJQoEFsOFrgiP5uuZdSS46PYAavZEb2uKMy8A3qAftjDPhTtwCCOsxJ8EwBRI%0D%0AUWGW_zaJrgd3EY6iTcpBQwJwUdg_hzgmU18X1-Cl74UjLO08v_KqA5UU%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 10" ><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">8,4</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a href="/title/tt0119698/vote?v=X;k=BCYqnuEwSsswGtybJQoEFsOFrgiP5uuZdSS46PYAavZEb2uKMy8A3qAftjDPhTtwCCOsxJ8EwBRI%0D%0AUWGW_zaJrgd3EY6iTcpBQwJwUdg_hzgmU18X1-Cl74UjLO08v_KqA5UU%0D%0A" title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>
    </div>
            </div>
            <div class="inline-block ratings-metascore">
<span class="metascore  favorable">76        </span>
        Metascore
            </div>
    </div>
<p class="">
    On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.</p>
    <p class="text-muted text-small">
    Director:
<a href="/name/nm0594503/?ref_=kw_li_dr_0"
>Hayao Miyazaki</a>
                 <span class="ghost">|</span> 
    Stars:
<a href="/name/nm0559444/?ref_=kw_li_st_0"
>Yôji Matsuda</a>, 
<a href="/name/nm0410942/?ref_=kw_li_st_1"
>Yuriko Ishida</a>, 
<a href="/name/nm0849100/?ref_=kw_li_st_2"
>Yûko Tanaka</a>, 
<a href="/name/nm0001082/?ref_=kw_li_st_3"
>Billy Crudup</a>
    </p>
        <p class="text-muted text-small">
                <span class="text-muted">Votes:</span>
                <span name="nv" data-value="312385">312.385</span>
    <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                <span name="nv" data-value="2.375.308">$2.38M</span>
        </p>
        </div>
        <div class="clear"></div>
    </div>
    <div class="lister-item mode-detail">
        <div class="lister-item-image ribbonize" data-tconst="tt0087544">


<a href="/title/tt0087544/?ref_=kw_li_i"
> <img alt="Nausicaä do Vale do Vento"
class="loadlate"
loadlate="https://m.media-amazon.com/images/M/MV5BODJiNmUzYmQtZTNhNS00NjY0LThmYjMtOTliOTM1NTdkYzY1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR4,0,140,209_AL_.jpg"
data-tconst="tt0087544"
height="209"
src="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png"
width="140" />
</a>        </div>
        <div class="lister-item-content">
<h3 class="lister-item-header">
        <span class="lister-item-index unbold text-primary">3.</span>
    
    <a href="/title/tt0087544/?ref_=kw_li_tt"
>Nausicaä do Vale do Vento</a>
    <span class="lister-item-year text-muted unbold">(1984)</span>
</h3>
    <p class="text-muted text-small">
            <span class="certificate">10</span>
                 <span class="ghost">|</span> 
                <span class="runtime">117 min</span>
                 <span class="ghost">|</span> 
            <span class="genre">
Animation, Adventure, Fantasy            </span>
    </p>
    <div class="ratings-bar">
    <div class="inline-block ratings-imdb-rating" name="ir" data-value="8,1">
        <span class="global-sprite rating-star imdb-rating"></span>
        <strong>8,1</strong>
    </div>
            <div class="inline-block ratings-user-rating">
                <span class="userRatingValue" id="urv_tt0087544" data-tconst="tt0087544">
                    <span class="global-sprite rating-star no-rating"></span>
                    <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                </span>
    <div class="starBarWidget" id="sb_tt0087544">
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="BCYotn3YBOP1iaj5hnKQglN3QlYyVx6qTMgeWqDmAlbk46ATHoaDNIIZm5yb89ATl7dDBG00YvDS%0D%0AhLepjLomMYFR_GNSLJUOSLgSOuodEMo6V0j4qhOzJMzwLTZIwWaRproL%0D%0A" data-user="ur112747879" id="tt0087544|imdb|8.1|8.1|kw_li_tt||search|keyword" data-ga-identifier=""
title="Users rated this 8,1/10 (135.740 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope itemprop="aggregateRating">
  <meta itemprop="ratingValue" content="8.1" />
  <meta itemprop="bestRating" content="10" />
  <meta itemprop="ratingCount" content="135740" />
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 113.4px">&nbsp;</span>
<span class="rating-stars">
      <a href="/title/tt0087544/vote?v=1&k=BCYotn3YBOP1iaj5hnKQglN3QlYyVx6qTMgeWqDmAlbk46ATHoaDNIIZm5yb89ATl7dDBG00YvDS%0D%0AhLepjLomMYFR_GNSLJUOSLgSOuodEMo6V0j4qhOzJMzwLTZIwWaRproL%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 1" ><span>1</span></a>
      <a href="/title/tt0087544/vote?v=2&k=BCYotn3YBOP1iaj5hnKQglN3QlYyVx6qTMgeWqDmAlbk46ATHoaDNIIZm5yb89ATl7dDBG00YvDS%0D%0AhLepjLomMYFR_GNSLJUOSLgSOuodEMo6V0j4qhOzJMzwLTZIwWaRproL%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 2" ><span>2</span></a>
      <a href="/title/tt0087544/vote?v=3&k=BCYotn3YBOP1iaj5hnKQglN3QlYyVx6qTMgeWqDmAlbk46ATHoaDNIIZm5yb89ATl7dDBG00YvDS%0D%0AhLepjLomMYFR_GNSLJUOSLgSOuodEMo6V0j4qhOzJMzwLTZIwWaRproL%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 3" ><span>3</span></a>
      <a href="/title/tt0087544/vote?v=4&k=BCYotn3YBOP1iaj5hnKQglN3QlYyVx6qTMgeWqDmAlbk46ATHoaDNIIZm5yb89ATl7dDBG00YvDS%0D%0AhLepjLomMYFR_GNSLJUOSLgSOuodEMo6V0j4qhOzJMzwLTZIwWaRproL%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 4" ><span>4</span></a>
      <a href="/title/tt0087544/vote?v=5&k=BCYotn3YBOP1iaj5hnKQglN3QlYyVx6qTMgeWqDmAlbk46ATHoaDNIIZm5yb89ATl7dDBG00YvDS%0D%0AhLepjLomMYFR_GNSLJUOSLgSOuodEMo6V0j4qhOzJMzwLTZIwWaRproL%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 5" ><span>5</span></a>
      <a href="/title/tt0087544/vote?v=6&k=BCYotn3YBOP1iaj5hnKQglN3QlYyVx6qTMgeWqDmAlbk46ATHoaDNIIZm5yb89ATl7dDBG00YvDS%0D%0AhLepjLomMYFR_GNSLJUOSLgSOuodEMo6V0j4qhOzJMzwLTZIwWaRproL%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 6" ><span>6</span></a>
      <a href="/title/tt0087544/vote?v=7&k=BCYotn3YBOP1iaj5hnKQglN3QlYyVx6qTMgeWqDmAlbk46ATHoaDNIIZm5yb89ATl7dDBG00YvDS%0D%0AhLepjLomMYFR_GNSLJUOSLgSOuodEMo6V0j4qhOzJMzwLTZIwWaRproL%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 7" ><span>7</span></a>
      <a href="/title/tt0087544/vote?v=8&k=BCYotn3YBOP1iaj5hnKQglN3QlYyVx6qTMgeWqDmAlbk46ATHoaDNIIZm5yb89ATl7dDBG00YvDS%0D%0AhLepjLomMYFR_GNSLJUOSLgSOuodEMo6V0j4qhOzJMzwLTZIwWaRproL%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 8" ><span>8</span></a>
      <a href="/title/tt0087544/vote?v=9&k=BCYotn3YBOP1iaj5hnKQglN3QlYyVx6qTMgeWqDmAlbk46ATHoaDNIIZm5yb89ATl7dDBG00YvDS%0D%0AhLepjLomMYFR_GNSLJUOSLgSOuodEMo6V0j4qhOzJMzwLTZIwWaRproL%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 9" ><span>9</span></a>
      <a href="/title/tt0087544/vote?v=10&k=BCYotn3YBOP1iaj5hnKQglN3QlYyVx6qTMgeWqDmAlbk46ATHoaDNIIZm5yb89ATl7dDBG00YvDS%0D%0AhLepjLomMYFR_GNSLJUOSLgSOuodEMo6V0j4qhOzJMzwLTZIwWaRproL%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 10" ><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">8,1</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a href="/title/tt0087544/vote?v=X;k=BCYotn3YBOP1iaj5hnKQglN3QlYyVx6qTMgeWqDmAlbk46ATHoaDNIIZm5yb89ATl7dDBG00YvDS%0D%0AhLepjLomMYFR_GNSLJUOSLgSOuodEMo6V0j4qhOzJMzwLTZIwWaRproL%0D%0A" title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>
    </div>
            </div>
            <div class="inline-block ratings-metascore">
<span class="metascore  favorable">86        </span>
        Metascore
            </div>
    </div>
<p class="">
    Warrior and pacifist Princess Nausicaä desperately struggles to prevent two warring nations from destroying themselves and their dying planet.</p>
    <p class="text-muted text-small">
    Director:
<a href="/name/nm0594503/?ref_=kw_li_dr_0"
>Hayao Miyazaki</a>
                 <span class="ghost">|</span> 
    Stars:
<a href="/name/nm0793585/?ref_=kw_li_st_0"
>Sumi Shimamoto</a>, 
<a href="/name/nm0875332/?ref_=kw_li_st_1"
>Mahito Tsujimura</a>, 
<a href="/name/nm0477449/?ref_=kw_li_st_2"
>Hisako Kyôda</a>, 
<a href="/name/nm0623214/?ref_=kw_li_st_3"
>Gorô Naya</a>
    </p>
        <p class="text-muted text-small">
                <span class="text-muted">Votes:</span>
                <span name="nv" data-value="135740">135.740</span>
    <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                <span name="nv" data-value="495.770">$0.50M</span>
        </p>
        </div>
        <div class="clear"></div>
    </div>
    <div class="lister-item mode-detail">
        <div class="lister-item-image ribbonize" data-tconst="tt0347149">


<a href="/title/tt0347149/?ref_=kw_li_i"
> <img alt="O Castelo Animado"
class="loadlate"
loadlate="https://m.media-amazon.com/images/M/MV5BZTRhY2QwM2UtNWRlNy00ZWQwLTg3MjktZThmNjQ3NTdjN2IxXkEyXkFqcGdeQXVyMzg2MzE2OTE@._V1_UY209_CR5,0,140,209_AL_.jpg"
data-tconst="tt0347149"
height="209"
src="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png"
width="140" />
</a>        </div>
        <div class="lister-item-content">
<h3 class="lister-item-header">
        <span class="lister-item-index unbold text-primary">4.</span>
    
    <a href="/title/tt0347149/?ref_=kw_li_tt"
>O Castelo Animado</a>
    <span class="lister-item-year text-muted unbold">(2004)</span>
</h3>
    <p class="text-muted text-small">
            <span class="certificate">Livre</span>
                 <span class="ghost">|</span> 
                <span class="runtime">119 min</span>
                 <span class="ghost">|</span> 
            <span class="genre">
Animation, Adventure, Family            </span>
    </p>
    <div class="ratings-bar">
    <div class="inline-block ratings-imdb-rating" name="ir" data-value="8,2">
        <span class="global-sprite rating-star imdb-rating"></span>
        <strong>8,2</strong>
    </div>
            <div class="inline-block ratings-user-rating">
                <span class="userRatingValue" id="urv_tt0347149" data-tconst="tt0347149">
                    <span class="global-sprite rating-star no-rating"></span>
                    <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                </span>
    <div class="starBarWidget" id="sb_tt0347149">
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="BCYndEWPJdD_d_Vun1LITbvPb2FT6LzBBgsEbVl896kUUPoPTZPaupcrgPaG7MqzqEF47SuIx4qn%0D%0A5z1gTcfcSFTl7P0d5cIY6fIUjp7OPVZFrQKUOA7xlfPmMn50cO3zFnSr%0D%0A" data-user="ur112747879" id="tt0347149|imdb|8.2|8.2|kw_li_tt||search|keyword" data-ga-identifier=""
title="Users rated this 8,2/10 (298.348 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope itemprop="aggregateRating">
  <meta itemprop="ratingValue" content="8.2" />
  <meta itemprop="bestRating" content="10" />
  <meta itemprop="ratingCount" content="298348" />
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 114.8px">&nbsp;</span>
<span class="rating-stars">
      <a href="/title/tt0347149/vote?v=1&k=BCYndEWPJdD_d_Vun1LITbvPb2FT6LzBBgsEbVl896kUUPoPTZPaupcrgPaG7MqzqEF47SuIx4qn%0D%0A5z1gTcfcSFTl7P0d5cIY6fIUjp7OPVZFrQKUOA7xlfPmMn50cO3zFnSr%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 1" ><span>1</span></a>
      <a href="/title/tt0347149/vote?v=2&k=BCYndEWPJdD_d_Vun1LITbvPb2FT6LzBBgsEbVl896kUUPoPTZPaupcrgPaG7MqzqEF47SuIx4qn%0D%0A5z1gTcfcSFTl7P0d5cIY6fIUjp7OPVZFrQKUOA7xlfPmMn50cO3zFnSr%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 2" ><span>2</span></a>
      <a href="/title/tt0347149/vote?v=3&k=BCYndEWPJdD_d_Vun1LITbvPb2FT6LzBBgsEbVl896kUUPoPTZPaupcrgPaG7MqzqEF47SuIx4qn%0D%0A5z1gTcfcSFTl7P0d5cIY6fIUjp7OPVZFrQKUOA7xlfPmMn50cO3zFnSr%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 3" ><span>3</span></a>
      <a href="/title/tt0347149/vote?v=4&k=BCYndEWPJdD_d_Vun1LITbvPb2FT6LzBBgsEbVl896kUUPoPTZPaupcrgPaG7MqzqEF47SuIx4qn%0D%0A5z1gTcfcSFTl7P0d5cIY6fIUjp7OPVZFrQKUOA7xlfPmMn50cO3zFnSr%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 4" ><span>4</span></a>
      <a href="/title/tt0347149/vote?v=5&k=BCYndEWPJdD_d_Vun1LITbvPb2FT6LzBBgsEbVl896kUUPoPTZPaupcrgPaG7MqzqEF47SuIx4qn%0D%0A5z1gTcfcSFTl7P0d5cIY6fIUjp7OPVZFrQKUOA7xlfPmMn50cO3zFnSr%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 5" ><span>5</span></a>
      <a href="/title/tt0347149/vote?v=6&k=BCYndEWPJdD_d_Vun1LITbvPb2FT6LzBBgsEbVl896kUUPoPTZPaupcrgPaG7MqzqEF47SuIx4qn%0D%0A5z1gTcfcSFTl7P0d5cIY6fIUjp7OPVZFrQKUOA7xlfPmMn50cO3zFnSr%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 6" ><span>6</span></a>
      <a href="/title/tt0347149/vote?v=7&k=BCYndEWPJdD_d_Vun1LITbvPb2FT6LzBBgsEbVl896kUUPoPTZPaupcrgPaG7MqzqEF47SuIx4qn%0D%0A5z1gTcfcSFTl7P0d5cIY6fIUjp7OPVZFrQKUOA7xlfPmMn50cO3zFnSr%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 7" ><span>7</span></a>
      <a href="/title/tt0347149/vote?v=8&k=BCYndEWPJdD_d_Vun1LITbvPb2FT6LzBBgsEbVl896kUUPoPTZPaupcrgPaG7MqzqEF47SuIx4qn%0D%0A5z1gTcfcSFTl7P0d5cIY6fIUjp7OPVZFrQKUOA7xlfPmMn50cO3zFnSr%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 8" ><span>8</span></a>
      <a href="/title/tt0347149/vote?v=9&k=BCYndEWPJdD_d_Vun1LITbvPb2FT6LzBBgsEbVl896kUUPoPTZPaupcrgPaG7MqzqEF47SuIx4qn%0D%0A5z1gTcfcSFTl7P0d5cIY6fIUjp7OPVZFrQKUOA7xlfPmMn50cO3zFnSr%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 9" ><span>9</span></a>
      <a href="/title/tt0347149/vote?v=10&k=BCYndEWPJdD_d_Vun1LITbvPb2FT6LzBBgsEbVl896kUUPoPTZPaupcrgPaG7MqzqEF47SuIx4qn%0D%0A5z1gTcfcSFTl7P0d5cIY6fIUjp7OPVZFrQKUOA7xlfPmMn50cO3zFnSr%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 10" ><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">8,2</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a href="/title/tt0347149/vote?v=X;k=BCYndEWPJdD_d_Vun1LITbvPb2FT6LzBBgsEbVl896kUUPoPTZPaupcrgPaG7MqzqEF47SuIx4qn%0D%0A5z1gTcfcSFTl7P0d5cIY6fIUjp7OPVZFrQKUOA7xlfPmMn50cO3zFnSr%0D%0A" title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>
    </div>
            </div>
            <div class="inline-block ratings-metascore">
<span class="metascore  favorable">80        </span>
        Metascore
            </div>
    </div>
<p class="">
    When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.</p>
    <p class="text-muted text-small">
    Director:
<a href="/name/nm0594503/?ref_=kw_li_dr_0"
>Hayao Miyazaki</a>
                 <span class="ghost">|</span> 
    Stars:
<a href="/name/nm0047962/?ref_=kw_li_st_0"
>Chieko Baishô</a>, 
<a href="/name/nm0454120/?ref_=kw_li_st_1"
>Takuya Kimura</a>, 
<a href="/name/nm0309107/?ref_=kw_li_st_2"
>Tatsuya Gashûin</a>, 
<a href="/name/nm0594271/?ref_=kw_li_st_3"
>Akihiro Miwa</a>
    </p>
        <p class="text-muted text-small">
                <span class="text-muted">Votes:</span>
                <span name="nv" data-value="298348">298.348</span>
    <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                <span name="nv" data-value="4.711.096">$4.71M</span>
        </p>
        </div>
        <div class="clear"></div>
    </div>
    <div class="lister-item mode-detail">
        <div class="lister-item-image ribbonize" data-tconst="tt0095327">


<a href="/title/tt0095327/?ref_=kw_li_i"
> <img alt="Túmulo dos Vagalumes"
class="loadlate"
loadlate="https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX140_CR0,0,140,209_AL_.jpg"
data-tconst="tt0095327"
height="209"
src="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png"
width="140" />
</a>        </div>
        <div class="lister-item-content">
<h3 class="lister-item-header">
        <span class="lister-item-index unbold text-primary">5.</span>
    
    <a href="/title/tt0095327/?ref_=kw_li_tt"
>Túmulo dos Vagalumes</a>
    <span class="lister-item-year text-muted unbold">(1988)</span>
</h3>
    <p class="text-muted text-small">
            <span class="certificate">12</span>
                 <span class="ghost">|</span> 
                <span class="runtime">89 min</span>
                 <span class="ghost">|</span> 
            <span class="genre">
Animation, Drama, War            </span>
    </p>
    <div class="ratings-bar">
    <div class="inline-block ratings-imdb-rating" name="ir" data-value="8,5">
        <span class="global-sprite rating-star imdb-rating"></span>
        <strong>8,5</strong>
    </div>
            <div class="inline-block ratings-user-rating">
                <span class="userRatingValue" id="urv_tt0095327" data-tconst="tt0095327">
                    <span class="global-sprite rating-star no-rating"></span>
                    <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                </span>
    <div class="starBarWidget" id="sb_tt0095327">
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="BCYnww5W2Wu-5UgwuppVuf23BGVpT_3Q3aRjWw3npkoLLnHVr22uresr_faJnXqGVJzVRzcWM0WB%0D%0AegsUSLHuGfuwMLtiIoc2jAylDbEHKZdxGmY2cTEg5xcPz4Sqnu8HPTMA%0D%0A" data-user="ur112747879" id="tt0095327|imdb|8.5|8.5|kw_li_tt||search|keyword" data-ga-identifier=""
title="Users rated this 8,5/10 (212.732 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope itemprop="aggregateRating">
  <meta itemprop="ratingValue" content="8.5" />
  <meta itemprop="bestRating" content="10" />
  <meta itemprop="ratingCount" content="212732" />
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 119px">&nbsp;</span>
<span class="rating-stars">
      <a href="/title/tt0095327/vote?v=1&k=BCYnww5W2Wu-5UgwuppVuf23BGVpT_3Q3aRjWw3npkoLLnHVr22uresr_faJnXqGVJzVRzcWM0WB%0D%0AegsUSLHuGfuwMLtiIoc2jAylDbEHKZdxGmY2cTEg5xcPz4Sqnu8HPTMA%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 1" ><span>1</span></a>
      <a href="/title/tt0095327/vote?v=2&k=BCYnww5W2Wu-5UgwuppVuf23BGVpT_3Q3aRjWw3npkoLLnHVr22uresr_faJnXqGVJzVRzcWM0WB%0D%0AegsUSLHuGfuwMLtiIoc2jAylDbEHKZdxGmY2cTEg5xcPz4Sqnu8HPTMA%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 2" ><span>2</span></a>
      <a href="/title/tt0095327/vote?v=3&k=BCYnww5W2Wu-5UgwuppVuf23BGVpT_3Q3aRjWw3npkoLLnHVr22uresr_faJnXqGVJzVRzcWM0WB%0D%0AegsUSLHuGfuwMLtiIoc2jAylDbEHKZdxGmY2cTEg5xcPz4Sqnu8HPTMA%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 3" ><span>3</span></a>
      <a href="/title/tt0095327/vote?v=4&k=BCYnww5W2Wu-5UgwuppVuf23BGVpT_3Q3aRjWw3npkoLLnHVr22uresr_faJnXqGVJzVRzcWM0WB%0D%0AegsUSLHuGfuwMLtiIoc2jAylDbEHKZdxGmY2cTEg5xcPz4Sqnu8HPTMA%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 4" ><span>4</span></a>
      <a href="/title/tt0095327/vote?v=5&k=BCYnww5W2Wu-5UgwuppVuf23BGVpT_3Q3aRjWw3npkoLLnHVr22uresr_faJnXqGVJzVRzcWM0WB%0D%0AegsUSLHuGfuwMLtiIoc2jAylDbEHKZdxGmY2cTEg5xcPz4Sqnu8HPTMA%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 5" ><span>5</span></a>
      <a href="/title/tt0095327/vote?v=6&k=BCYnww5W2Wu-5UgwuppVuf23BGVpT_3Q3aRjWw3npkoLLnHVr22uresr_faJnXqGVJzVRzcWM0WB%0D%0AegsUSLHuGfuwMLtiIoc2jAylDbEHKZdxGmY2cTEg5xcPz4Sqnu8HPTMA%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 6" ><span>6</span></a>
      <a href="/title/tt0095327/vote?v=7&k=BCYnww5W2Wu-5UgwuppVuf23BGVpT_3Q3aRjWw3npkoLLnHVr22uresr_faJnXqGVJzVRzcWM0WB%0D%0AegsUSLHuGfuwMLtiIoc2jAylDbEHKZdxGmY2cTEg5xcPz4Sqnu8HPTMA%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 7" ><span>7</span></a>
      <a href="/title/tt0095327/vote?v=8&k=BCYnww5W2Wu-5UgwuppVuf23BGVpT_3Q3aRjWw3npkoLLnHVr22uresr_faJnXqGVJzVRzcWM0WB%0D%0AegsUSLHuGfuwMLtiIoc2jAylDbEHKZdxGmY2cTEg5xcPz4Sqnu8HPTMA%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 8" ><span>8</span></a>
      <a href="/title/tt0095327/vote?v=9&k=BCYnww5W2Wu-5UgwuppVuf23BGVpT_3Q3aRjWw3npkoLLnHVr22uresr_faJnXqGVJzVRzcWM0WB%0D%0AegsUSLHuGfuwMLtiIoc2jAylDbEHKZdxGmY2cTEg5xcPz4Sqnu8HPTMA%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 9" ><span>9</span></a>
      <a href="/title/tt0095327/vote?v=10&k=BCYnww5W2Wu-5UgwuppVuf23BGVpT_3Q3aRjWw3npkoLLnHVr22uresr_faJnXqGVJzVRzcWM0WB%0D%0AegsUSLHuGfuwMLtiIoc2jAylDbEHKZdxGmY2cTEg5xcPz4Sqnu8HPTMA%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 10" ><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">8,5</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a href="/title/tt0095327/vote?v=X;k=BCYnww5W2Wu-5UgwuppVuf23BGVpT_3Q3aRjWw3npkoLLnHVr22uresr_faJnXqGVJzVRzcWM0WB%0D%0AegsUSLHuGfuwMLtiIoc2jAylDbEHKZdxGmY2cTEg5xcPz4Sqnu8HPTMA%0D%0A" title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>
    </div>
            </div>
    </div>
<p class="">
    A young boy and his little sister struggle to survive in Japan during World War II.</p>
    <p class="text-muted text-small">
    Director:
<a href="/name/nm0847223/?ref_=kw_li_dr_0"
>Isao Takahata</a>
                 <span class="ghost">|</span> 
    Stars:
<a href="/name/nm0851302/?ref_=kw_li_st_0"
>Tsutomu Tatsumi</a>, 
<a href="/name/nm0794186/?ref_=kw_li_st_1"
>Ayano Shiraishi</a>, 
<a href="/name/nm0945312/?ref_=kw_li_st_2"
>Akemi Yamaguchi</a>, 
<a href="/name/nm0794002/?ref_=kw_li_st_3"
>Yoshiko Shinohara</a>
    </p>
        <p class="text-muted text-small">
                <span class="text-muted">Votes:</span>
                <span name="nv" data-value="212732">212.732</span>
        </p>
        </div>
        <div class="clear"></div>
    </div>
    <div class="lister-item mode-detail">
        <div class="lister-item-image ribbonize" data-tconst="tt0092067">


<a href="/title/tt0092067/?ref_=kw_li_i"
> <img alt="O Castelo no Céu"
class="loadlate"
loadlate="https://m.media-amazon.com/images/M/MV5BNTg0NmI1ZGQtZTUxNC00NTgxLThjMDUtZmRlYmEzM2MwOWYwXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_UY209_CR3,0,140,209_AL_.jpg"
data-tconst="tt0092067"
height="209"
src="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png"
width="140" />
</a>        </div>
        <div class="lister-item-content">
<h3 class="lister-item-header">
        <span class="lister-item-index unbold text-primary">6.</span>
    
    <a href="/title/tt0092067/?ref_=kw_li_tt"
>O Castelo no Céu</a>
    <span class="lister-item-year text-muted unbold">(1986)</span>
</h3>
    <p class="text-muted text-small">
            <span class="certificate">Livre</span>
                 <span class="ghost">|</span> 
                <span class="runtime">125 min</span>
                 <span class="ghost">|</span> 
            <span class="genre">
Animation, Adventure, Drama            </span>
    </p>
    <div class="ratings-bar">
    <div class="inline-block ratings-imdb-rating" name="ir" data-value="8">
        <span class="global-sprite rating-star imdb-rating"></span>
        <strong>8,0</strong>
    </div>
            <div class="inline-block ratings-user-rating">
                <span class="userRatingValue" id="urv_tt0092067" data-tconst="tt0092067">
                    <span class="global-sprite rating-star no-rating"></span>
                    <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                </span>
    <div class="starBarWidget" id="sb_tt0092067">
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="BCYviouNsD6OUKvWJ1csdR8u3uzBUxJ_SobFvSlSeQhOsk6AUL4rjUbiKH1sR-1RkY46qQV1GX6J%0D%0Axsm5OnteZ4HYrHNCIc_mW8OShqm-gPRKQgr9Rn_Q2kNzIHQdrpA9cqrF%0D%0A" data-user="ur112747879" id="tt0092067|imdb|8|8|kw_li_tt||search|keyword" data-ga-identifier=""
title="Users rated this 8/10 (137.507 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope itemprop="aggregateRating">
  <meta itemprop="ratingValue" content="8" />
  <meta itemprop="bestRating" content="10" />
  <meta itemprop="ratingCount" content="137507" />
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 112px">&nbsp;</span>
<span class="rating-stars">
      <a href="/title/tt0092067/vote?v=1&k=BCYviouNsD6OUKvWJ1csdR8u3uzBUxJ_SobFvSlSeQhOsk6AUL4rjUbiKH1sR-1RkY46qQV1GX6J%0D%0Axsm5OnteZ4HYrHNCIc_mW8OShqm-gPRKQgr9Rn_Q2kNzIHQdrpA9cqrF%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 1" ><span>1</span></a>
      <a href="/title/tt0092067/vote?v=2&k=BCYviouNsD6OUKvWJ1csdR8u3uzBUxJ_SobFvSlSeQhOsk6AUL4rjUbiKH1sR-1RkY46qQV1GX6J%0D%0Axsm5OnteZ4HYrHNCIc_mW8OShqm-gPRKQgr9Rn_Q2kNzIHQdrpA9cqrF%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 2" ><span>2</span></a>
      <a href="/title/tt0092067/vote?v=3&k=BCYviouNsD6OUKvWJ1csdR8u3uzBUxJ_SobFvSlSeQhOsk6AUL4rjUbiKH1sR-1RkY46qQV1GX6J%0D%0Axsm5OnteZ4HYrHNCIc_mW8OShqm-gPRKQgr9Rn_Q2kNzIHQdrpA9cqrF%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 3" ><span>3</span></a>
      <a href="/title/tt0092067/vote?v=4&k=BCYviouNsD6OUKvWJ1csdR8u3uzBUxJ_SobFvSlSeQhOsk6AUL4rjUbiKH1sR-1RkY46qQV1GX6J%0D%0Axsm5OnteZ4HYrHNCIc_mW8OShqm-gPRKQgr9Rn_Q2kNzIHQdrpA9cqrF%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 4" ><span>4</span></a>
      <a href="/title/tt0092067/vote?v=5&k=BCYviouNsD6OUKvWJ1csdR8u3uzBUxJ_SobFvSlSeQhOsk6AUL4rjUbiKH1sR-1RkY46qQV1GX6J%0D%0Axsm5OnteZ4HYrHNCIc_mW8OShqm-gPRKQgr9Rn_Q2kNzIHQdrpA9cqrF%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 5" ><span>5</span></a>
      <a href="/title/tt0092067/vote?v=6&k=BCYviouNsD6OUKvWJ1csdR8u3uzBUxJ_SobFvSlSeQhOsk6AUL4rjUbiKH1sR-1RkY46qQV1GX6J%0D%0Axsm5OnteZ4HYrHNCIc_mW8OShqm-gPRKQgr9Rn_Q2kNzIHQdrpA9cqrF%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 6" ><span>6</span></a>
      <a href="/title/tt0092067/vote?v=7&k=BCYviouNsD6OUKvWJ1csdR8u3uzBUxJ_SobFvSlSeQhOsk6AUL4rjUbiKH1sR-1RkY46qQV1GX6J%0D%0Axsm5OnteZ4HYrHNCIc_mW8OShqm-gPRKQgr9Rn_Q2kNzIHQdrpA9cqrF%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 7" ><span>7</span></a>
      <a href="/title/tt0092067/vote?v=8&k=BCYviouNsD6OUKvWJ1csdR8u3uzBUxJ_SobFvSlSeQhOsk6AUL4rjUbiKH1sR-1RkY46qQV1GX6J%0D%0Axsm5OnteZ4HYrHNCIc_mW8OShqm-gPRKQgr9Rn_Q2kNzIHQdrpA9cqrF%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 8" ><span>8</span></a>
      <a href="/title/tt0092067/vote?v=9&k=BCYviouNsD6OUKvWJ1csdR8u3uzBUxJ_SobFvSlSeQhOsk6AUL4rjUbiKH1sR-1RkY46qQV1GX6J%0D%0Axsm5OnteZ4HYrHNCIc_mW8OShqm-gPRKQgr9Rn_Q2kNzIHQdrpA9cqrF%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 9" ><span>9</span></a>
      <a href="/title/tt0092067/vote?v=10&k=BCYviouNsD6OUKvWJ1csdR8u3uzBUxJ_SobFvSlSeQhOsk6AUL4rjUbiKH1sR-1RkY46qQV1GX6J%0D%0Axsm5OnteZ4HYrHNCIc_mW8OShqm-gPRKQgr9Rn_Q2kNzIHQdrpA9cqrF%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 10" ><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">8</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a href="/title/tt0092067/vote?v=X;k=BCYviouNsD6OUKvWJ1csdR8u3uzBUxJ_SobFvSlSeQhOsk6AUL4rjUbiKH1sR-1RkY46qQV1GX6J%0D%0Axsm5OnteZ4HYrHNCIc_mW8OShqm-gPRKQgr9Rn_Q2kNzIHQdrpA9cqrF%0D%0A" title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>
    </div>
            </div>
            <div class="inline-block ratings-metascore">
<span class="metascore  favorable">78        </span>
        Metascore
            </div>
    </div>
<p class="">
    A young boy and a girl with a magic crystal must race against pirates and foreign agents in a search for a legendary floating castle.</p>
    <p class="text-muted text-small">
    Director:
<a href="/name/nm0594503/?ref_=kw_li_dr_0"
>Hayao Miyazaki</a>
                 <span class="ghost">|</span> 
    Stars:
<a href="/name/nm0849028/?ref_=kw_li_st_0"
>Mayumi Tanaka</a>, 
<a href="/name/nm0004735/?ref_=kw_li_st_1"
>James Van Der Beek</a>, 
<a href="/name/nm0948445/?ref_=kw_li_st_2"
>Keiko Yokozawa</a>, 
<a href="/name/nm0368969/?ref_=kw_li_st_3"
>Kotoe Hatsui</a>
    </p>
        <p class="text-muted text-small">
                <span class="text-muted">Votes:</span>
                <span name="nv" data-value="137507">137.507</span>
        </p>
        </div>
        <div class="clear"></div>
    </div>
    <div class="lister-item mode-detail">
        <div class="lister-item-image ribbonize" data-tconst="tt1568921">


<a href="/title/tt1568921/?ref_=kw_li_i"
> <img alt="O Mundo dos Pequeninos"
class="loadlate"
loadlate="https://m.media-amazon.com/images/M/MV5BNjY2OWYyNmEtNzYwMy00OGU4LWI4YzgtMWZjZDUwYWZlYjA3XkEyXkFqcGdeQXVyODU2MDg1NzU@._V1_UY209_CR0,0,140,209_AL_.jpg"
data-tconst="tt1568921"
height="209"
src="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png"
width="140" />
</a>        </div>
        <div class="lister-item-content">
<h3 class="lister-item-header">
        <span class="lister-item-index unbold text-primary">7.</span>
    
    <a href="/title/tt1568921/?ref_=kw_li_tt"
>O Mundo dos Pequeninos</a>
    <span class="lister-item-year text-muted unbold">(2010)</span>
</h3>
    <p class="text-muted text-small">
            <span class="certificate">Livre</span>
                 <span class="ghost">|</span> 
                <span class="runtime">94 min</span>
                 <span class="ghost">|</span> 
            <span class="genre">
Animation, Adventure, Family            </span>
    </p>
    <div class="ratings-bar">
    <div class="inline-block ratings-imdb-rating" name="ir" data-value="7,6">
        <span class="global-sprite rating-star imdb-rating"></span>
        <strong>7,6</strong>
    </div>
            <div class="inline-block ratings-user-rating">
                <span class="userRatingValue" id="urv_tt1568921" data-tconst="tt1568921">
                    <span class="global-sprite rating-star no-rating"></span>
                    <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                </span>
    <div class="starBarWidget" id="sb_tt1568921">
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="BCYuzEkmv4_TUZdADv_FGKFY9RrotyXXjQwIiyMwOKeGUeIl5QDrfqc-CddYadYztAIrZcGk8X7z%0D%0AeaW77uE-ecnCBefSMMhDnLM3lZ7T1-n76Yk5nPCOOg0EoHcRetdheEcr%0D%0A" data-user="ur112747879" id="tt1568921|imdb|7.6|7.6|kw_li_tt||search|keyword" data-ga-identifier=""
title="Users rated this 7,6/10 (72.233 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope itemprop="aggregateRating">
  <meta itemprop="ratingValue" content="7.6" />
  <meta itemprop="bestRating" content="10" />
  <meta itemprop="ratingCount" content="72233" />
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 106.4px">&nbsp;</span>
<span class="rating-stars">
      <a href="/title/tt1568921/vote?v=1&k=BCYuzEkmv4_TUZdADv_FGKFY9RrotyXXjQwIiyMwOKeGUeIl5QDrfqc-CddYadYztAIrZcGk8X7z%0D%0AeaW77uE-ecnCBefSMMhDnLM3lZ7T1-n76Yk5nPCOOg0EoHcRetdheEcr%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 1" ><span>1</span></a>
      <a href="/title/tt1568921/vote?v=2&k=BCYuzEkmv4_TUZdADv_FGKFY9RrotyXXjQwIiyMwOKeGUeIl5QDrfqc-CddYadYztAIrZcGk8X7z%0D%0AeaW77uE-ecnCBefSMMhDnLM3lZ7T1-n76Yk5nPCOOg0EoHcRetdheEcr%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 2" ><span>2</span></a>
      <a href="/title/tt1568921/vote?v=3&k=BCYuzEkmv4_TUZdADv_FGKFY9RrotyXXjQwIiyMwOKeGUeIl5QDrfqc-CddYadYztAIrZcGk8X7z%0D%0AeaW77uE-ecnCBefSMMhDnLM3lZ7T1-n76Yk5nPCOOg0EoHcRetdheEcr%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 3" ><span>3</span></a>
      <a href="/title/tt1568921/vote?v=4&k=BCYuzEkmv4_TUZdADv_FGKFY9RrotyXXjQwIiyMwOKeGUeIl5QDrfqc-CddYadYztAIrZcGk8X7z%0D%0AeaW77uE-ecnCBefSMMhDnLM3lZ7T1-n76Yk5nPCOOg0EoHcRetdheEcr%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 4" ><span>4</span></a>
      <a href="/title/tt1568921/vote?v=5&k=BCYuzEkmv4_TUZdADv_FGKFY9RrotyXXjQwIiyMwOKeGUeIl5QDrfqc-CddYadYztAIrZcGk8X7z%0D%0AeaW77uE-ecnCBefSMMhDnLM3lZ7T1-n76Yk5nPCOOg0EoHcRetdheEcr%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 5" ><span>5</span></a>
      <a href="/title/tt1568921/vote?v=6&k=BCYuzEkmv4_TUZdADv_FGKFY9RrotyXXjQwIiyMwOKeGUeIl5QDrfqc-CddYadYztAIrZcGk8X7z%0D%0AeaW77uE-ecnCBefSMMhDnLM3lZ7T1-n76Yk5nPCOOg0EoHcRetdheEcr%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 6" ><span>6</span></a>
      <a href="/title/tt1568921/vote?v=7&k=BCYuzEkmv4_TUZdADv_FGKFY9RrotyXXjQwIiyMwOKeGUeIl5QDrfqc-CddYadYztAIrZcGk8X7z%0D%0AeaW77uE-ecnCBefSMMhDnLM3lZ7T1-n76Yk5nPCOOg0EoHcRetdheEcr%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 7" ><span>7</span></a>
      <a href="/title/tt1568921/vote?v=8&k=BCYuzEkmv4_TUZdADv_FGKFY9RrotyXXjQwIiyMwOKeGUeIl5QDrfqc-CddYadYztAIrZcGk8X7z%0D%0AeaW77uE-ecnCBefSMMhDnLM3lZ7T1-n76Yk5nPCOOg0EoHcRetdheEcr%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 8" ><span>8</span></a>
      <a href="/title/tt1568921/vote?v=9&k=BCYuzEkmv4_TUZdADv_FGKFY9RrotyXXjQwIiyMwOKeGUeIl5QDrfqc-CddYadYztAIrZcGk8X7z%0D%0AeaW77uE-ecnCBefSMMhDnLM3lZ7T1-n76Yk5nPCOOg0EoHcRetdheEcr%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 9" ><span>9</span></a>
      <a href="/title/tt1568921/vote?v=10&k=BCYuzEkmv4_TUZdADv_FGKFY9RrotyXXjQwIiyMwOKeGUeIl5QDrfqc-CddYadYztAIrZcGk8X7z%0D%0AeaW77uE-ecnCBefSMMhDnLM3lZ7T1-n76Yk5nPCOOg0EoHcRetdheEcr%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 10" ><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">7,6</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a href="/title/tt1568921/vote?v=X;k=BCYuzEkmv4_TUZdADv_FGKFY9RrotyXXjQwIiyMwOKeGUeIl5QDrfqc-CddYadYztAIrZcGk8X7z%0D%0AeaW77uE-ecnCBefSMMhDnLM3lZ7T1-n76Yk5nPCOOg0EoHcRetdheEcr%0D%0A" title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>
    </div>
            </div>
            <div class="inline-block ratings-metascore">
<span class="metascore  favorable">80        </span>
        Metascore
            </div>
    </div>
<p class="">
    The Clock family are four-inch-tall people who live anonymously in another family's residence, borrowing simple items to make their home. Life changes for the Clocks when their teenage daughter, Arrietty, is discovered.</p>
    <p class="text-muted text-small">
    Director:
<a href="/name/nm0948488/?ref_=kw_li_dr_0"
>Hiromasa Yonebayashi</a>
                 <span class="ghost">|</span> 
    Stars:
<a href="/name/nm1847099/?ref_=kw_li_st_0"
>Bridgit Mendler</a>, 
<a href="/name/nm0688132/?ref_=kw_li_st_1"
>Amy Poehler</a>, 
<a href="/name/nm0004715/?ref_=kw_li_st_2"
>Will Arnett</a>, 
<a href="/name/nm2030779/?ref_=kw_li_st_3"
>Moises Arias</a>
    </p>
        <p class="text-muted text-small">
                <span class="text-muted">Votes:</span>
                <span name="nv" data-value="72233">72.233</span>
    <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                <span name="nv" data-value="19.202.743">$19.20M</span>
        </p>
        </div>
        <div class="clear"></div>
    </div>
    <div class="lister-item mode-detail">
        <div class="lister-item-image ribbonize" data-tconst="tt0097814">


<a href="/title/tt0097814/?ref_=kw_li_i"
> <img alt="O Serviço de Entregas da Kiki"
class="loadlate"
loadlate="https://m.media-amazon.com/images/M/MV5BOTc0ODM1Njk1NF5BMl5BanBnXkFtZTcwMDI5OTEyNw@@._V1_UY209_CR3,0,140,209_AL_.jpg"
data-tconst="tt0097814"
height="209"
src="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png"
width="140" />
</a>        </div>
        <div class="lister-item-content">
<h3 class="lister-item-header">
        <span class="lister-item-index unbold text-primary">8.</span>
    
    <a href="/title/tt0097814/?ref_=kw_li_tt"
>O Serviço de Entregas da Kiki</a>
    <span class="lister-item-year text-muted unbold">(1989)</span>
</h3>
    <p class="text-muted text-small">
            <span class="certificate">Livre</span>
                 <span class="ghost">|</span> 
                <span class="runtime">103 min</span>
                 <span class="ghost">|</span> 
            <span class="genre">
Animation, Adventure, Drama            </span>
    </p>
    <div class="ratings-bar">
    <div class="inline-block ratings-imdb-rating" name="ir" data-value="7,9">
        <span class="global-sprite rating-star imdb-rating"></span>
        <strong>7,9</strong>
    </div>
            <div class="inline-block ratings-user-rating">
                <span class="userRatingValue" id="urv_tt0097814" data-tconst="tt0097814">
                    <span class="global-sprite rating-star no-rating"></span>
                    <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                </span>
    <div class="starBarWidget" id="sb_tt0097814">
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="BCYrvb6kvWIKOTWj5MWGBcj81PAKVrOBvdNizu0Mq-JDr_VmEj_Ql-s94azZRrYyjs7KfbWl4obf%0D%0Aqb_Y4Z8UooxNiLRESQVT-k36PlFfvBRys6SxFaFjxO4IKLFDTODpmKIZ%0D%0A" data-user="ur112747879" id="tt0097814|imdb|7.9|7.9|kw_li_tt||search|keyword" data-ga-identifier=""
title="Users rated this 7,9/10 (108.535 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope itemprop="aggregateRating">
  <meta itemprop="ratingValue" content="7.9" />
  <meta itemprop="bestRating" content="10" />
  <meta itemprop="ratingCount" content="108535" />
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 110.6px">&nbsp;</span>
<span class="rating-stars">
      <a href="/title/tt0097814/vote?v=1&k=BCYrvb6kvWIKOTWj5MWGBcj81PAKVrOBvdNizu0Mq-JDr_VmEj_Ql-s94azZRrYyjs7KfbWl4obf%0D%0Aqb_Y4Z8UooxNiLRESQVT-k36PlFfvBRys6SxFaFjxO4IKLFDTODpmKIZ%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 1" ><span>1</span></a>
      <a href="/title/tt0097814/vote?v=2&k=BCYrvb6kvWIKOTWj5MWGBcj81PAKVrOBvdNizu0Mq-JDr_VmEj_Ql-s94azZRrYyjs7KfbWl4obf%0D%0Aqb_Y4Z8UooxNiLRESQVT-k36PlFfvBRys6SxFaFjxO4IKLFDTODpmKIZ%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 2" ><span>2</span></a>
      <a href="/title/tt0097814/vote?v=3&k=BCYrvb6kvWIKOTWj5MWGBcj81PAKVrOBvdNizu0Mq-JDr_VmEj_Ql-s94azZRrYyjs7KfbWl4obf%0D%0Aqb_Y4Z8UooxNiLRESQVT-k36PlFfvBRys6SxFaFjxO4IKLFDTODpmKIZ%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 3" ><span>3</span></a>
      <a href="/title/tt0097814/vote?v=4&k=BCYrvb6kvWIKOTWj5MWGBcj81PAKVrOBvdNizu0Mq-JDr_VmEj_Ql-s94azZRrYyjs7KfbWl4obf%0D%0Aqb_Y4Z8UooxNiLRESQVT-k36PlFfvBRys6SxFaFjxO4IKLFDTODpmKIZ%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 4" ><span>4</span></a>
      <a href="/title/tt0097814/vote?v=5&k=BCYrvb6kvWIKOTWj5MWGBcj81PAKVrOBvdNizu0Mq-JDr_VmEj_Ql-s94azZRrYyjs7KfbWl4obf%0D%0Aqb_Y4Z8UooxNiLRESQVT-k36PlFfvBRys6SxFaFjxO4IKLFDTODpmKIZ%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 5" ><span>5</span></a>
      <a href="/title/tt0097814/vote?v=6&k=BCYrvb6kvWIKOTWj5MWGBcj81PAKVrOBvdNizu0Mq-JDr_VmEj_Ql-s94azZRrYyjs7KfbWl4obf%0D%0Aqb_Y4Z8UooxNiLRESQVT-k36PlFfvBRys6SxFaFjxO4IKLFDTODpmKIZ%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 6" ><span>6</span></a>
      <a href="/title/tt0097814/vote?v=7&k=BCYrvb6kvWIKOTWj5MWGBcj81PAKVrOBvdNizu0Mq-JDr_VmEj_Ql-s94azZRrYyjs7KfbWl4obf%0D%0Aqb_Y4Z8UooxNiLRESQVT-k36PlFfvBRys6SxFaFjxO4IKLFDTODpmKIZ%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 7" ><span>7</span></a>
      <a href="/title/tt0097814/vote?v=8&k=BCYrvb6kvWIKOTWj5MWGBcj81PAKVrOBvdNizu0Mq-JDr_VmEj_Ql-s94azZRrYyjs7KfbWl4obf%0D%0Aqb_Y4Z8UooxNiLRESQVT-k36PlFfvBRys6SxFaFjxO4IKLFDTODpmKIZ%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 8" ><span>8</span></a>
      <a href="/title/tt0097814/vote?v=9&k=BCYrvb6kvWIKOTWj5MWGBcj81PAKVrOBvdNizu0Mq-JDr_VmEj_Ql-s94azZRrYyjs7KfbWl4obf%0D%0Aqb_Y4Z8UooxNiLRESQVT-k36PlFfvBRys6SxFaFjxO4IKLFDTODpmKIZ%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 9" ><span>9</span></a>
      <a href="/title/tt0097814/vote?v=10&k=BCYrvb6kvWIKOTWj5MWGBcj81PAKVrOBvdNizu0Mq-JDr_VmEj_Ql-s94azZRrYyjs7KfbWl4obf%0D%0Aqb_Y4Z8UooxNiLRESQVT-k36PlFfvBRys6SxFaFjxO4IKLFDTODpmKIZ%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 10" ><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">7,9</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a href="/title/tt0097814/vote?v=X;k=BCYrvb6kvWIKOTWj5MWGBcj81PAKVrOBvdNizu0Mq-JDr_VmEj_Ql-s94azZRrYyjs7KfbWl4obf%0D%0Aqb_Y4Z8UooxNiLRESQVT-k36PlFfvBRys6SxFaFjxO4IKLFDTODpmKIZ%0D%0A" title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>
    </div>
            </div>
            <div class="inline-block ratings-metascore">
<span class="metascore  favorable">83        </span>
        Metascore
            </div>
    </div>
<p class="">
    A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.</p>
    <p class="text-muted text-small">
    Director:
<a href="/name/nm0594503/?ref_=kw_li_dr_0"
>Hayao Miyazaki</a>
                 <span class="ghost">|</span> 
    Stars:
<a href="/name/nm0000379/?ref_=kw_li_st_0"
>Kirsten Dunst</a>, 
<a href="/name/nm0847439/?ref_=kw_li_st_1"
>Minami Takayama</a>, 
<a href="/name/nm0757290/?ref_=kw_li_st_2"
>Rei Sakuma</a>, 
<a href="/name/nm0945322/?ref_=kw_li_st_3"
>Kappei Yamaguchi</a>
    </p>
        <p class="text-muted text-small">
                <span class="text-muted">Votes:</span>
                <span name="nv" data-value="108535">108.535</span>
        </p>
        </div>
        <div class="clear"></div>
    </div>
    <div class="lister-item mode-detail">
        <div class="lister-item-image ribbonize" data-tconst="tt2576852">


<a href="/title/tt2576852/?ref_=kw_li_i"
> <img alt="O Conto da Princesa Kaguya"
class="loadlate"
loadlate="https://m.media-amazon.com/images/M/MV5BMTcwODI0MzEwOF5BMl5BanBnXkFtZTgwNjkyNTEwMTE@._V1_UY209_CR4,0,140,209_AL_.jpg"
data-tconst="tt2576852"
height="209"
src="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png"
width="140" />
</a>        </div>
        <div class="lister-item-content">
<h3 class="lister-item-header">
        <span class="lister-item-index unbold text-primary">9.</span>
    
    <a href="/title/tt2576852/?ref_=kw_li_tt"
>O Conto da Princesa Kaguya</a>
    <span class="lister-item-year text-muted unbold">(2013)</span>
</h3>
    <p class="text-muted text-small">
            <span class="certificate">Livre</span>
                 <span class="ghost">|</span> 
                <span class="runtime">137 min</span>
                 <span class="ghost">|</span> 
            <span class="genre">
Animation, Adventure, Drama            </span>
    </p>
    <div class="ratings-bar">
    <div class="inline-block ratings-imdb-rating" name="ir" data-value="8">
        <span class="global-sprite rating-star imdb-rating"></span>
        <strong>8,0</strong>
    </div>
            <div class="inline-block ratings-user-rating">
                <span class="userRatingValue" id="urv_tt2576852" data-tconst="tt2576852">
                    <span class="global-sprite rating-star no-rating"></span>
                    <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                </span>
    <div class="starBarWidget" id="sb_tt2576852">
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="BCYkjqI50sdpz4KGpKLqOj--F7BeN9iS7ML44Jq_OpJmf-O3XuvMNXt7Nz5Lt5zRuanIdHf8TJ50%0D%0AC3xG1YfWBJLmjc3JLGuaw8nKiqI0IQGy3Komiy-Dmib1UmpKXnKh4gi2%0D%0A" data-user="ur112747879" id="tt2576852|imdb|8|8|kw_li_tt||search|keyword" data-ga-identifier=""
title="Users rated this 8/10 (31.910 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope itemprop="aggregateRating">
  <meta itemprop="ratingValue" content="8" />
  <meta itemprop="bestRating" content="10" />
  <meta itemprop="ratingCount" content="31910" />
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 112px">&nbsp;</span>
<span class="rating-stars">
      <a href="/title/tt2576852/vote?v=1&k=BCYkjqI50sdpz4KGpKLqOj--F7BeN9iS7ML44Jq_OpJmf-O3XuvMNXt7Nz5Lt5zRuanIdHf8TJ50%0D%0AC3xG1YfWBJLmjc3JLGuaw8nKiqI0IQGy3Komiy-Dmib1UmpKXnKh4gi2%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 1" ><span>1</span></a>
      <a href="/title/tt2576852/vote?v=2&k=BCYkjqI50sdpz4KGpKLqOj--F7BeN9iS7ML44Jq_OpJmf-O3XuvMNXt7Nz5Lt5zRuanIdHf8TJ50%0D%0AC3xG1YfWBJLmjc3JLGuaw8nKiqI0IQGy3Komiy-Dmib1UmpKXnKh4gi2%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 2" ><span>2</span></a>
      <a href="/title/tt2576852/vote?v=3&k=BCYkjqI50sdpz4KGpKLqOj--F7BeN9iS7ML44Jq_OpJmf-O3XuvMNXt7Nz5Lt5zRuanIdHf8TJ50%0D%0AC3xG1YfWBJLmjc3JLGuaw8nKiqI0IQGy3Komiy-Dmib1UmpKXnKh4gi2%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 3" ><span>3</span></a>
      <a href="/title/tt2576852/vote?v=4&k=BCYkjqI50sdpz4KGpKLqOj--F7BeN9iS7ML44Jq_OpJmf-O3XuvMNXt7Nz5Lt5zRuanIdHf8TJ50%0D%0AC3xG1YfWBJLmjc3JLGuaw8nKiqI0IQGy3Komiy-Dmib1UmpKXnKh4gi2%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 4" ><span>4</span></a>
      <a href="/title/tt2576852/vote?v=5&k=BCYkjqI50sdpz4KGpKLqOj--F7BeN9iS7ML44Jq_OpJmf-O3XuvMNXt7Nz5Lt5zRuanIdHf8TJ50%0D%0AC3xG1YfWBJLmjc3JLGuaw8nKiqI0IQGy3Komiy-Dmib1UmpKXnKh4gi2%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 5" ><span>5</span></a>
      <a href="/title/tt2576852/vote?v=6&k=BCYkjqI50sdpz4KGpKLqOj--F7BeN9iS7ML44Jq_OpJmf-O3XuvMNXt7Nz5Lt5zRuanIdHf8TJ50%0D%0AC3xG1YfWBJLmjc3JLGuaw8nKiqI0IQGy3Komiy-Dmib1UmpKXnKh4gi2%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 6" ><span>6</span></a>
      <a href="/title/tt2576852/vote?v=7&k=BCYkjqI50sdpz4KGpKLqOj--F7BeN9iS7ML44Jq_OpJmf-O3XuvMNXt7Nz5Lt5zRuanIdHf8TJ50%0D%0AC3xG1YfWBJLmjc3JLGuaw8nKiqI0IQGy3Komiy-Dmib1UmpKXnKh4gi2%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 7" ><span>7</span></a>
      <a href="/title/tt2576852/vote?v=8&k=BCYkjqI50sdpz4KGpKLqOj--F7BeN9iS7ML44Jq_OpJmf-O3XuvMNXt7Nz5Lt5zRuanIdHf8TJ50%0D%0AC3xG1YfWBJLmjc3JLGuaw8nKiqI0IQGy3Komiy-Dmib1UmpKXnKh4gi2%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 8" ><span>8</span></a>
      <a href="/title/tt2576852/vote?v=9&k=BCYkjqI50sdpz4KGpKLqOj--F7BeN9iS7ML44Jq_OpJmf-O3XuvMNXt7Nz5Lt5zRuanIdHf8TJ50%0D%0AC3xG1YfWBJLmjc3JLGuaw8nKiqI0IQGy3Komiy-Dmib1UmpKXnKh4gi2%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 9" ><span>9</span></a>
      <a href="/title/tt2576852/vote?v=10&k=BCYkjqI50sdpz4KGpKLqOj--F7BeN9iS7ML44Jq_OpJmf-O3XuvMNXt7Nz5Lt5zRuanIdHf8TJ50%0D%0AC3xG1YfWBJLmjc3JLGuaw8nKiqI0IQGy3Komiy-Dmib1UmpKXnKh4gi2%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 10" ><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">8</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a href="/title/tt2576852/vote?v=X;k=BCYkjqI50sdpz4KGpKLqOj--F7BeN9iS7ML44Jq_OpJmf-O3XuvMNXt7Nz5Lt5zRuanIdHf8TJ50%0D%0AC3xG1YfWBJLmjc3JLGuaw8nKiqI0IQGy3Komiy-Dmib1UmpKXnKh4gi2%0D%0A" title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>
    </div>
            </div>
            <div class="inline-block ratings-metascore">
<span class="metascore  favorable">89        </span>
        Metascore
            </div>
    </div>
<p class="">
    Found inside a shining stalk of bamboo by an old bamboo cutter and his wife, a tiny girl grows rapidly into an exquisite young lady. The mysterious young princess enthralls all who encounter her, but ultimately she must confront her fate, the punishment for her crime.</p>
    <p class="text-muted text-small">
    Director:
<a href="/name/nm0847223/?ref_=kw_li_dr_0"
>Isao Takahata</a>
                 <span class="ghost">|</span> 
    Stars:
<a href="/name/nm1631269/?ref_=kw_li_st_0"
>Chloë Grace Moretz</a>, 
<a href="/name/nm0001001/?ref_=kw_li_st_1"
>James Caan</a>, 
<a href="/name/nm0005460/?ref_=kw_li_st_2"
>Mary Steenburgen</a>, 
<a href="/name/nm0005188/?ref_=kw_li_st_3"
>James Marsden</a>
    </p>
        <p class="text-muted text-small">
                <span class="text-muted">Votes:</span>
                <span name="nv" data-value="31910">31.910</span>
    <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                <span name="nv" data-value="1.506.975">$1.51M</span>
        </p>
        </div>
        <div class="clear"></div>
    </div>
    <div class="lister-item mode-detail">
        <div class="lister-item-image ribbonize" data-tconst="tt0104652">


<a href="/title/tt0104652/?ref_=kw_li_i"
> <img alt="Porco Rosso: O Último Herói Romântico"
class="loadlate"
loadlate="https://m.media-amazon.com/images/M/MV5BZDIyOTBiZjktYTE0NS00ZGE2LWEzM2YtMzM0MWI2YzIzMGM2L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY209_CR3,0,140,209_AL_.jpg"
data-tconst="tt0104652"
height="209"
src="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png"
width="140" />
</a>        </div>
        <div class="lister-item-content">
<h3 class="lister-item-header">
        <span class="lister-item-index unbold text-primary">10.</span>
    
    <a href="/title/tt0104652/?ref_=kw_li_tt"
>Porco Rosso: O Último Herói Romântico</a>
    <span class="lister-item-year text-muted unbold">(1992)</span>
</h3>
    <p class="text-muted text-small">
            <span class="certificate">Livre</span>
                 <span class="ghost">|</span> 
                <span class="runtime">94 min</span>
                 <span class="ghost">|</span> 
            <span class="genre">
Animation, Adventure, Comedy            </span>
    </p>
    <div class="ratings-bar">
    <div class="inline-block ratings-imdb-rating" name="ir" data-value="7,8">
        <span class="global-sprite rating-star imdb-rating"></span>
        <strong>7,8</strong>
    </div>
            <div class="inline-block ratings-user-rating">
                <span class="userRatingValue" id="urv_tt0104652" data-tconst="tt0104652">
                    <span class="global-sprite rating-star no-rating"></span>
                    <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                </span>
    <div class="starBarWidget" id="sb_tt0104652">
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="BCYt8LGxcFMioumI6dcYPrYyUz6sUt6yC8MzVxUV72xehhwnf1ZLGedyGDxcdW9L1cjUZ16Vr2Se%0D%0AbaPauZ0QXNiaf1FFw9sCvn5mKXn14YtiEb1OFwgysZej3dEz2nK0Mtdf%0D%0A" data-user="ur112747879" id="tt0104652|imdb|7.8|7.8|kw_li_tt||search|keyword" data-ga-identifier=""
title="Users rated this 7,8/10 (68.023 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope itemprop="aggregateRating">
  <meta itemprop="ratingValue" content="7.8" />
  <meta itemprop="bestRating" content="10" />
  <meta itemprop="ratingCount" content="68023" />
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 109.2px">&nbsp;</span>
<span class="rating-stars">
      <a href="/title/tt0104652/vote?v=1&k=BCYt8LGxcFMioumI6dcYPrYyUz6sUt6yC8MzVxUV72xehhwnf1ZLGedyGDxcdW9L1cjUZ16Vr2Se%0D%0AbaPauZ0QXNiaf1FFw9sCvn5mKXn14YtiEb1OFwgysZej3dEz2nK0Mtdf%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 1" ><span>1</span></a>
      <a href="/title/tt0104652/vote?v=2&k=BCYt8LGxcFMioumI6dcYPrYyUz6sUt6yC8MzVxUV72xehhwnf1ZLGedyGDxcdW9L1cjUZ16Vr2Se%0D%0AbaPauZ0QXNiaf1FFw9sCvn5mKXn14YtiEb1OFwgysZej3dEz2nK0Mtdf%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 2" ><span>2</span></a>
      <a href="/title/tt0104652/vote?v=3&k=BCYt8LGxcFMioumI6dcYPrYyUz6sUt6yC8MzVxUV72xehhwnf1ZLGedyGDxcdW9L1cjUZ16Vr2Se%0D%0AbaPauZ0QXNiaf1FFw9sCvn5mKXn14YtiEb1OFwgysZej3dEz2nK0Mtdf%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 3" ><span>3</span></a>
      <a href="/title/tt0104652/vote?v=4&k=BCYt8LGxcFMioumI6dcYPrYyUz6sUt6yC8MzVxUV72xehhwnf1ZLGedyGDxcdW9L1cjUZ16Vr2Se%0D%0AbaPauZ0QXNiaf1FFw9sCvn5mKXn14YtiEb1OFwgysZej3dEz2nK0Mtdf%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 4" ><span>4</span></a>
      <a href="/title/tt0104652/vote?v=5&k=BCYt8LGxcFMioumI6dcYPrYyUz6sUt6yC8MzVxUV72xehhwnf1ZLGedyGDxcdW9L1cjUZ16Vr2Se%0D%0AbaPauZ0QXNiaf1FFw9sCvn5mKXn14YtiEb1OFwgysZej3dEz2nK0Mtdf%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 5" ><span>5</span></a>
      <a href="/title/tt0104652/vote?v=6&k=BCYt8LGxcFMioumI6dcYPrYyUz6sUt6yC8MzVxUV72xehhwnf1ZLGedyGDxcdW9L1cjUZ16Vr2Se%0D%0AbaPauZ0QXNiaf1FFw9sCvn5mKXn14YtiEb1OFwgysZej3dEz2nK0Mtdf%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 6" ><span>6</span></a>
      <a href="/title/tt0104652/vote?v=7&k=BCYt8LGxcFMioumI6dcYPrYyUz6sUt6yC8MzVxUV72xehhwnf1ZLGedyGDxcdW9L1cjUZ16Vr2Se%0D%0AbaPauZ0QXNiaf1FFw9sCvn5mKXn14YtiEb1OFwgysZej3dEz2nK0Mtdf%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 7" ><span>7</span></a>
      <a href="/title/tt0104652/vote?v=8&k=BCYt8LGxcFMioumI6dcYPrYyUz6sUt6yC8MzVxUV72xehhwnf1ZLGedyGDxcdW9L1cjUZ16Vr2Se%0D%0AbaPauZ0QXNiaf1FFw9sCvn5mKXn14YtiEb1OFwgysZej3dEz2nK0Mtdf%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 8" ><span>8</span></a>
      <a href="/title/tt0104652/vote?v=9&k=BCYt8LGxcFMioumI6dcYPrYyUz6sUt6yC8MzVxUV72xehhwnf1ZLGedyGDxcdW9L1cjUZ16Vr2Se%0D%0AbaPauZ0QXNiaf1FFw9sCvn5mKXn14YtiEb1OFwgysZej3dEz2nK0Mtdf%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 9" ><span>9</span></a>
      <a href="/title/tt0104652/vote?v=10&k=BCYt8LGxcFMioumI6dcYPrYyUz6sUt6yC8MzVxUV72xehhwnf1ZLGedyGDxcdW9L1cjUZ16Vr2Se%0D%0AbaPauZ0QXNiaf1FFw9sCvn5mKXn14YtiEb1OFwgysZej3dEz2nK0Mtdf%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 10" ><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">7,8</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a href="/title/tt0104652/vote?v=X;k=BCYt8LGxcFMioumI6dcYPrYyUz6sUt6yC8MzVxUV72xehhwnf1ZLGedyGDxcdW9L1cjUZ16Vr2Se%0D%0AbaPauZ0QXNiaf1FFw9sCvn5mKXn14YtiEb1OFwgysZej3dEz2nK0Mtdf%0D%0A" title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>
    </div>
            </div>
            <div class="inline-block ratings-metascore">
<span class="metascore  favorable">83        </span>
        Metascore
            </div>
    </div>
<p class="">
    In 1930s Italy, a veteran World War I pilot is cursed to look like an anthropomorphic pig.</p>
    <p class="text-muted text-small">
    Director:
<a href="/name/nm0594503/?ref_=kw_li_dr_0"
>Hayao Miyazaki</a>
                 <span class="ghost">|</span> 
    Stars:
<a href="/name/nm0605797/?ref_=kw_li_st_0"
>Shûichirô Moriyama</a>, 
<a href="/name/nm0441401/?ref_=kw_li_st_1"
>Tokiko Katô</a>, 
<a href="/name/nm1185314/?ref_=kw_li_st_2"
>Bunshi Katsura Vi</a>, 
<a href="/name/nm0436639/?ref_=kw_li_st_3"
>Tsunehiko Kamijô</a>
    </p>
        <p class="text-muted text-small">
                <span class="text-muted">Votes:</span>
                <span name="nv" data-value="68023">68.023</span>
        </p>
        </div>
        <div class="clear"></div>
    </div>
    <div class="lister-item mode-detail">
        <div class="lister-item-image ribbonize" data-tconst="tt0876563">


<a href="/title/tt0876563/?ref_=kw_li_i"
> <img alt="Ponyo: Uma Amizade que Veio do Mar"
class="loadlate"
loadlate="https://m.media-amazon.com/images/M/MV5BMjA5NzkxNTg2MF5BMl5BanBnXkFtZTcwMTA3MjU1Mg@@._V1_UY209_CR0,0,140,209_AL_.jpg"
data-tconst="tt0876563"
height="209"
src="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png"
width="140" />
</a>        </div>
        <div class="lister-item-content">
<h3 class="lister-item-header">
        <span class="lister-item-index unbold text-primary">11.</span>
    
    <a href="/title/tt0876563/?ref_=kw_li_tt"
>Ponyo: Uma Amizade que Veio do Mar</a>
    <span class="lister-item-year text-muted unbold">(2008)</span>
</h3>
    <p class="text-muted text-small">
            <span class="certificate">Livre</span>
                 <span class="ghost">|</span> 
                <span class="runtime">101 min</span>
                 <span class="ghost">|</span> 
            <span class="genre">
Animation, Adventure, Comedy            </span>
    </p>
    <div class="ratings-bar">
    <div class="inline-block ratings-imdb-rating" name="ir" data-value="7,7">
        <span class="global-sprite rating-star imdb-rating"></span>
        <strong>7,7</strong>
    </div>
            <div class="inline-block ratings-user-rating">
                <span class="userRatingValue" id="urv_tt0876563" data-tconst="tt0876563">
                    <span class="global-sprite rating-star no-rating"></span>
                    <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                </span>
    <div class="starBarWidget" id="sb_tt0876563">
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="BCYkDtw_V3fLq247Derb5g7-t-SQw3mfBMo-XDEsqj4oYOjfF-C6s-4-ZGiw8J9-Va7hE9MmVSsK%0D%0AUZJUjbOjfMBC70tO_QEkrxDdzMBnXQ6zzrKl4uGDk5U_vBXgkEaPYBZs%0D%0A" data-user="ur112747879" id="tt0876563|imdb|7.7|7.7|kw_li_tt||search|keyword" data-ga-identifier=""
title="Users rated this 7,7/10 (112.496 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope itemprop="aggregateRating">
  <meta itemprop="ratingValue" content="7.7" />
  <meta itemprop="bestRating" content="10" />
  <meta itemprop="ratingCount" content="112496" />
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 107.8px">&nbsp;</span>
<span class="rating-stars">
      <a href="/title/tt0876563/vote?v=1&k=BCYkDtw_V3fLq247Derb5g7-t-SQw3mfBMo-XDEsqj4oYOjfF-C6s-4-ZGiw8J9-Va7hE9MmVSsK%0D%0AUZJUjbOjfMBC70tO_QEkrxDdzMBnXQ6zzrKl4uGDk5U_vBXgkEaPYBZs%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 1" ><span>1</span></a>
      <a href="/title/tt0876563/vote?v=2&k=BCYkDtw_V3fLq247Derb5g7-t-SQw3mfBMo-XDEsqj4oYOjfF-C6s-4-ZGiw8J9-Va7hE9MmVSsK%0D%0AUZJUjbOjfMBC70tO_QEkrxDdzMBnXQ6zzrKl4uGDk5U_vBXgkEaPYBZs%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 2" ><span>2</span></a>
      <a href="/title/tt0876563/vote?v=3&k=BCYkDtw_V3fLq247Derb5g7-t-SQw3mfBMo-XDEsqj4oYOjfF-C6s-4-ZGiw8J9-Va7hE9MmVSsK%0D%0AUZJUjbOjfMBC70tO_QEkrxDdzMBnXQ6zzrKl4uGDk5U_vBXgkEaPYBZs%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 3" ><span>3</span></a>
      <a href="/title/tt0876563/vote?v=4&k=BCYkDtw_V3fLq247Derb5g7-t-SQw3mfBMo-XDEsqj4oYOjfF-C6s-4-ZGiw8J9-Va7hE9MmVSsK%0D%0AUZJUjbOjfMBC70tO_QEkrxDdzMBnXQ6zzrKl4uGDk5U_vBXgkEaPYBZs%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 4" ><span>4</span></a>
      <a href="/title/tt0876563/vote?v=5&k=BCYkDtw_V3fLq247Derb5g7-t-SQw3mfBMo-XDEsqj4oYOjfF-C6s-4-ZGiw8J9-Va7hE9MmVSsK%0D%0AUZJUjbOjfMBC70tO_QEkrxDdzMBnXQ6zzrKl4uGDk5U_vBXgkEaPYBZs%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 5" ><span>5</span></a>
      <a href="/title/tt0876563/vote?v=6&k=BCYkDtw_V3fLq247Derb5g7-t-SQw3mfBMo-XDEsqj4oYOjfF-C6s-4-ZGiw8J9-Va7hE9MmVSsK%0D%0AUZJUjbOjfMBC70tO_QEkrxDdzMBnXQ6zzrKl4uGDk5U_vBXgkEaPYBZs%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 6" ><span>6</span></a>
      <a href="/title/tt0876563/vote?v=7&k=BCYkDtw_V3fLq247Derb5g7-t-SQw3mfBMo-XDEsqj4oYOjfF-C6s-4-ZGiw8J9-Va7hE9MmVSsK%0D%0AUZJUjbOjfMBC70tO_QEkrxDdzMBnXQ6zzrKl4uGDk5U_vBXgkEaPYBZs%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 7" ><span>7</span></a>
      <a href="/title/tt0876563/vote?v=8&k=BCYkDtw_V3fLq247Derb5g7-t-SQw3mfBMo-XDEsqj4oYOjfF-C6s-4-ZGiw8J9-Va7hE9MmVSsK%0D%0AUZJUjbOjfMBC70tO_QEkrxDdzMBnXQ6zzrKl4uGDk5U_vBXgkEaPYBZs%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 8" ><span>8</span></a>
      <a href="/title/tt0876563/vote?v=9&k=BCYkDtw_V3fLq247Derb5g7-t-SQw3mfBMo-XDEsqj4oYOjfF-C6s-4-ZGiw8J9-Va7hE9MmVSsK%0D%0AUZJUjbOjfMBC70tO_QEkrxDdzMBnXQ6zzrKl4uGDk5U_vBXgkEaPYBZs%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 9" ><span>9</span></a>
      <a href="/title/tt0876563/vote?v=10&k=BCYkDtw_V3fLq247Derb5g7-t-SQw3mfBMo-XDEsqj4oYOjfF-C6s-4-ZGiw8J9-Va7hE9MmVSsK%0D%0AUZJUjbOjfMBC70tO_QEkrxDdzMBnXQ6zzrKl4uGDk5U_vBXgkEaPYBZs%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 10" ><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">7,7</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a href="/title/tt0876563/vote?v=X;k=BCYkDtw_V3fLq247Derb5g7-t-SQw3mfBMo-XDEsqj4oYOjfF-C6s-4-ZGiw8J9-Va7hE9MmVSsK%0D%0AUZJUjbOjfMBC70tO_QEkrxDdzMBnXQ6zzrKl4uGDk5U_vBXgkEaPYBZs%0D%0A" title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>
    </div>
            </div>
            <div class="inline-block ratings-metascore">
<span class="metascore  favorable">86        </span>
        Metascore
            </div>
    </div>
<p class="">
    A five-year-old boy develops a relationship with Ponyo, a young goldfish princess who longs to become a human after falling in love with him.</p>
    <p class="text-muted text-small">
    Director:
<a href="/name/nm0594503/?ref_=kw_li_dr_0"
>Hayao Miyazaki</a>
                 <span class="ghost">|</span> 
    Stars:
<a href="/name/nm0000949/?ref_=kw_li_st_0"
>Cate Blanchett</a>, 
<a href="/name/nm0000354/?ref_=kw_li_st_1"
>Matt Damon</a>, 
<a href="/name/nm0000553/?ref_=kw_li_st_2"
>Liam Neeson</a>, 
<a href="/name/nm0945359/?ref_=kw_li_st_3"
>Tomoko Yamaguchi</a>
    </p>
        <p class="text-muted text-small">
                <span class="text-muted">Votes:</span>
                <span name="nv" data-value="112496">112.496</span>
    <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                <span name="nv" data-value="15.090.400">$15.09M</span>
        </p>
        </div>
        <div class="clear"></div>
    </div>
    <div class="lister-item mode-detail">
        <div class="lister-item-image ribbonize" data-tconst="tt0495596">


<a href="/title/tt0495596/?ref_=kw_li_i"
> <img alt="Contos de Terramar"
class="loadlate"
loadlate="https://m.media-amazon.com/images/M/MV5BYjM3MzQ0YzEtMzY3My00YjhlLThjYWQtNjY5ZTYwYWRkNjhjL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY209_CR4,0,140,209_AL_.jpg"
data-tconst="tt0495596"
height="209"
src="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png"
width="140" />
</a>        </div>
        <div class="lister-item-content">
<h3 class="lister-item-header">
        <span class="lister-item-index unbold text-primary">12.</span>
    
    <a href="/title/tt0495596/?ref_=kw_li_tt"
>Contos de Terramar</a>
    <span class="lister-item-year text-muted unbold">(2006)</span>
</h3>
    <p class="text-muted text-small">
            <span class="certificate">12</span>
                 <span class="ghost">|</span> 
                <span class="runtime">115 min</span>
                 <span class="ghost">|</span> 
            <span class="genre">
Animation, Adventure, Fantasy            </span>
    </p>
    <div class="ratings-bar">
    <div class="inline-block ratings-imdb-rating" name="ir" data-value="6,5">
        <span class="global-sprite rating-star imdb-rating"></span>
        <strong>6,5</strong>
    </div>
            <div class="inline-block ratings-user-rating">
                <span class="userRatingValue" id="urv_tt0495596" data-tconst="tt0495596">
                    <span class="global-sprite rating-star no-rating"></span>
                    <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                </span>
    <div class="starBarWidget" id="sb_tt0495596">
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="BCYtIFK91m1WpY5FiLFu21TiTxvMZcnFCDNUijgH4x8IXWSVwH4zS3pKpwq94ADmjqsPz6HRao2k%0D%0AAA1T8w0kEsg_aa42ly57RCUJqbs-JiUQkdajSVMErd6UqMsXIJuf_He7%0D%0A" data-user="ur112747879" id="tt0495596|imdb|6.5|6.5|kw_li_tt||search|keyword" data-ga-identifier=""
title="Users rated this 6,5/10 (31.332 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope itemprop="aggregateRating">
  <meta itemprop="ratingValue" content="6.5" />
  <meta itemprop="bestRating" content="10" />
  <meta itemprop="ratingCount" content="31332" />
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 91px">&nbsp;</span>
<span class="rating-stars">
      <a href="/title/tt0495596/vote?v=1&k=BCYtIFK91m1WpY5FiLFu21TiTxvMZcnFCDNUijgH4x8IXWSVwH4zS3pKpwq94ADmjqsPz6HRao2k%0D%0AAA1T8w0kEsg_aa42ly57RCUJqbs-JiUQkdajSVMErd6UqMsXIJuf_He7%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 1" ><span>1</span></a>
      <a href="/title/tt0495596/vote?v=2&k=BCYtIFK91m1WpY5FiLFu21TiTxvMZcnFCDNUijgH4x8IXWSVwH4zS3pKpwq94ADmjqsPz6HRao2k%0D%0AAA1T8w0kEsg_aa42ly57RCUJqbs-JiUQkdajSVMErd6UqMsXIJuf_He7%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 2" ><span>2</span></a>
      <a href="/title/tt0495596/vote?v=3&k=BCYtIFK91m1WpY5FiLFu21TiTxvMZcnFCDNUijgH4x8IXWSVwH4zS3pKpwq94ADmjqsPz6HRao2k%0D%0AAA1T8w0kEsg_aa42ly57RCUJqbs-JiUQkdajSVMErd6UqMsXIJuf_He7%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 3" ><span>3</span></a>
      <a href="/title/tt0495596/vote?v=4&k=BCYtIFK91m1WpY5FiLFu21TiTxvMZcnFCDNUijgH4x8IXWSVwH4zS3pKpwq94ADmjqsPz6HRao2k%0D%0AAA1T8w0kEsg_aa42ly57RCUJqbs-JiUQkdajSVMErd6UqMsXIJuf_He7%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 4" ><span>4</span></a>
      <a href="/title/tt0495596/vote?v=5&k=BCYtIFK91m1WpY5FiLFu21TiTxvMZcnFCDNUijgH4x8IXWSVwH4zS3pKpwq94ADmjqsPz6HRao2k%0D%0AAA1T8w0kEsg_aa42ly57RCUJqbs-JiUQkdajSVMErd6UqMsXIJuf_He7%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 5" ><span>5</span></a>
      <a href="/title/tt0495596/vote?v=6&k=BCYtIFK91m1WpY5FiLFu21TiTxvMZcnFCDNUijgH4x8IXWSVwH4zS3pKpwq94ADmjqsPz6HRao2k%0D%0AAA1T8w0kEsg_aa42ly57RCUJqbs-JiUQkdajSVMErd6UqMsXIJuf_He7%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 6" ><span>6</span></a>
      <a href="/title/tt0495596/vote?v=7&k=BCYtIFK91m1WpY5FiLFu21TiTxvMZcnFCDNUijgH4x8IXWSVwH4zS3pKpwq94ADmjqsPz6HRao2k%0D%0AAA1T8w0kEsg_aa42ly57RCUJqbs-JiUQkdajSVMErd6UqMsXIJuf_He7%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 7" ><span>7</span></a>
      <a href="/title/tt0495596/vote?v=8&k=BCYtIFK91m1WpY5FiLFu21TiTxvMZcnFCDNUijgH4x8IXWSVwH4zS3pKpwq94ADmjqsPz6HRao2k%0D%0AAA1T8w0kEsg_aa42ly57RCUJqbs-JiUQkdajSVMErd6UqMsXIJuf_He7%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 8" ><span>8</span></a>
      <a href="/title/tt0495596/vote?v=9&k=BCYtIFK91m1WpY5FiLFu21TiTxvMZcnFCDNUijgH4x8IXWSVwH4zS3pKpwq94ADmjqsPz6HRao2k%0D%0AAA1T8w0kEsg_aa42ly57RCUJqbs-JiUQkdajSVMErd6UqMsXIJuf_He7%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 9" ><span>9</span></a>
      <a href="/title/tt0495596/vote?v=10&k=BCYtIFK91m1WpY5FiLFu21TiTxvMZcnFCDNUijgH4x8IXWSVwH4zS3pKpwq94ADmjqsPz6HRao2k%0D%0AAA1T8w0kEsg_aa42ly57RCUJqbs-JiUQkdajSVMErd6UqMsXIJuf_He7%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 10" ><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">6,5</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a href="/title/tt0495596/vote?v=X;k=BCYtIFK91m1WpY5FiLFu21TiTxvMZcnFCDNUijgH4x8IXWSVwH4zS3pKpwq94ADmjqsPz6HRao2k%0D%0AAA1T8w0kEsg_aa42ly57RCUJqbs-JiUQkdajSVMErd6UqMsXIJuf_He7%0D%0A" title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>
    </div>
            </div>
            <div class="inline-block ratings-metascore">
<span class="metascore  mixed">47        </span>
        Metascore
            </div>
    </div>
<p class="">
    In a mythical land, a man and a young boy investigate a series of unusual occurrences.</p>
    <p class="text-muted text-small">
    Director:
<a href="/name/nm2066439/?ref_=kw_li_dr_0"
>Gorô Miyazaki</a>
                 <span class="ghost">|</span> 
    Stars:
<a href="/name/nm0001096/?ref_=kw_li_st_0"
>Timothy Dalton</a>, 
<a href="/name/nm0000353/?ref_=kw_li_st_1"
>Willem Dafoe</a>, 
<a href="/name/nm0002127/?ref_=kw_li_st_2"
>Mariska Hargitay</a>, 
<a href="/name/nm0645411/?ref_=kw_li_st_3"
>Jun'ichi Okada</a>
    </p>
        <p class="text-muted text-small">
                <span class="text-muted">Votes:</span>
                <span name="nv" data-value="31332">31.332</span>
    <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                <span name="nv" data-value="48.461">$0.05M</span>
        </p>
        </div>
        <div class="clear"></div>
    </div>
    <div class="lister-item mode-detail">
        <div class="lister-item-image ribbonize" data-tconst="tt0102587">


<a href="/title/tt0102587/?ref_=kw_li_i"
> <img alt="Memórias de Ontem"
class="loadlate"
loadlate="https://m.media-amazon.com/images/M/MV5BMTY5NjI2MjQxMl5BMl5BanBnXkFtZTgwMDA2MzM2NzE@._V1_UY209_CR1,0,140,209_AL_.jpg"
data-tconst="tt0102587"
height="209"
src="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png"
width="140" />
</a>        </div>
        <div class="lister-item-content">
<h3 class="lister-item-header">
        <span class="lister-item-index unbold text-primary">13.</span>
    
    <a href="/title/tt0102587/?ref_=kw_li_tt"
>Memórias de Ontem</a>
    <span class="lister-item-year text-muted unbold">(1991)</span>
</h3>
    <p class="text-muted text-small">
            <span class="certificate">Livre</span>
                 <span class="ghost">|</span> 
                <span class="runtime">118 min</span>
                 <span class="ghost">|</span> 
            <span class="genre">
Animation, Drama, Romance            </span>
    </p>
    <div class="ratings-bar">
    <div class="inline-block ratings-imdb-rating" name="ir" data-value="7,7">
        <span class="global-sprite rating-star imdb-rating"></span>
        <strong>7,7</strong>
    </div>
            <div class="inline-block ratings-user-rating">
                <span class="userRatingValue" id="urv_tt0102587" data-tconst="tt0102587">
                    <span class="global-sprite rating-star no-rating"></span>
                    <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                </span>
    <div class="starBarWidget" id="sb_tt0102587">
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="BCYoA3AbJ-HGlUFPe1h8xWN09eoEFRHGCJoGQka4g_Fg8oHV5ly7NykLPiGh2pdQapOMLqZvbtKH%0D%0AK4iJMeTITTHtmFd0ARxyokmkXo3R0jrLZm6OSvlcVEJE1L1ZwDf0hgDY%0D%0A" data-user="ur112747879" id="tt0102587|imdb|7.7|7.7|kw_li_tt||search|keyword" data-ga-identifier=""
title="Users rated this 7,7/10 (22.174 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope itemprop="aggregateRating">
  <meta itemprop="ratingValue" content="7.7" />
  <meta itemprop="bestRating" content="10" />
  <meta itemprop="ratingCount" content="22174" />
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 107.8px">&nbsp;</span>
<span class="rating-stars">
      <a href="/title/tt0102587/vote?v=1&k=BCYoA3AbJ-HGlUFPe1h8xWN09eoEFRHGCJoGQka4g_Fg8oHV5ly7NykLPiGh2pdQapOMLqZvbtKH%0D%0AK4iJMeTITTHtmFd0ARxyokmkXo3R0jrLZm6OSvlcVEJE1L1ZwDf0hgDY%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 1" ><span>1</span></a>
      <a href="/title/tt0102587/vote?v=2&k=BCYoA3AbJ-HGlUFPe1h8xWN09eoEFRHGCJoGQka4g_Fg8oHV5ly7NykLPiGh2pdQapOMLqZvbtKH%0D%0AK4iJMeTITTHtmFd0ARxyokmkXo3R0jrLZm6OSvlcVEJE1L1ZwDf0hgDY%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 2" ><span>2</span></a>
      <a href="/title/tt0102587/vote?v=3&k=BCYoA3AbJ-HGlUFPe1h8xWN09eoEFRHGCJoGQka4g_Fg8oHV5ly7NykLPiGh2pdQapOMLqZvbtKH%0D%0AK4iJMeTITTHtmFd0ARxyokmkXo3R0jrLZm6OSvlcVEJE1L1ZwDf0hgDY%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 3" ><span>3</span></a>
      <a href="/title/tt0102587/vote?v=4&k=BCYoA3AbJ-HGlUFPe1h8xWN09eoEFRHGCJoGQka4g_Fg8oHV5ly7NykLPiGh2pdQapOMLqZvbtKH%0D%0AK4iJMeTITTHtmFd0ARxyokmkXo3R0jrLZm6OSvlcVEJE1L1ZwDf0hgDY%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 4" ><span>4</span></a>
      <a href="/title/tt0102587/vote?v=5&k=BCYoA3AbJ-HGlUFPe1h8xWN09eoEFRHGCJoGQka4g_Fg8oHV5ly7NykLPiGh2pdQapOMLqZvbtKH%0D%0AK4iJMeTITTHtmFd0ARxyokmkXo3R0jrLZm6OSvlcVEJE1L1ZwDf0hgDY%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 5" ><span>5</span></a>
      <a href="/title/tt0102587/vote?v=6&k=BCYoA3AbJ-HGlUFPe1h8xWN09eoEFRHGCJoGQka4g_Fg8oHV5ly7NykLPiGh2pdQapOMLqZvbtKH%0D%0AK4iJMeTITTHtmFd0ARxyokmkXo3R0jrLZm6OSvlcVEJE1L1ZwDf0hgDY%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 6" ><span>6</span></a>
      <a href="/title/tt0102587/vote?v=7&k=BCYoA3AbJ-HGlUFPe1h8xWN09eoEFRHGCJoGQka4g_Fg8oHV5ly7NykLPiGh2pdQapOMLqZvbtKH%0D%0AK4iJMeTITTHtmFd0ARxyokmkXo3R0jrLZm6OSvlcVEJE1L1ZwDf0hgDY%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 7" ><span>7</span></a>
      <a href="/title/tt0102587/vote?v=8&k=BCYoA3AbJ-HGlUFPe1h8xWN09eoEFRHGCJoGQka4g_Fg8oHV5ly7NykLPiGh2pdQapOMLqZvbtKH%0D%0AK4iJMeTITTHtmFd0ARxyokmkXo3R0jrLZm6OSvlcVEJE1L1ZwDf0hgDY%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 8" ><span>8</span></a>
      <a href="/title/tt0102587/vote?v=9&k=BCYoA3AbJ-HGlUFPe1h8xWN09eoEFRHGCJoGQka4g_Fg8oHV5ly7NykLPiGh2pdQapOMLqZvbtKH%0D%0AK4iJMeTITTHtmFd0ARxyokmkXo3R0jrLZm6OSvlcVEJE1L1ZwDf0hgDY%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 9" ><span>9</span></a>
      <a href="/title/tt0102587/vote?v=10&k=BCYoA3AbJ-HGlUFPe1h8xWN09eoEFRHGCJoGQka4g_Fg8oHV5ly7NykLPiGh2pdQapOMLqZvbtKH%0D%0AK4iJMeTITTHtmFd0ARxyokmkXo3R0jrLZm6OSvlcVEJE1L1ZwDf0hgDY%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 10" ><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">7,7</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a href="/title/tt0102587/vote?v=X;k=BCYoA3AbJ-HGlUFPe1h8xWN09eoEFRHGCJoGQka4g_Fg8oHV5ly7NykLPiGh2pdQapOMLqZvbtKH%0D%0AK4iJMeTITTHtmFd0ARxyokmkXo3R0jrLZm6OSvlcVEJE1L1ZwDf0hgDY%0D%0A" title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>
    </div>
            </div>
            <div class="inline-block ratings-metascore">
<span class="metascore  favorable">90        </span>
        Metascore
            </div>
    </div>
<p class="">
    A twenty-seven-year-old office worker travels to the countryside while reminiscing about her childhood in Tokyo.</p>
    <p class="text-muted text-small">
    Director:
<a href="/name/nm0847223/?ref_=kw_li_dr_0"
>Isao Takahata</a>
                 <span class="ghost">|</span> 
    Stars:
<a href="/name/nm0408030/?ref_=kw_li_st_0"
>Miki Imai</a>, 
<a href="/name/nm0945839/?ref_=kw_li_st_1"
>Toshirô Yanagiba</a>, 
<a href="/name/nm0393365/?ref_=kw_li_st_2"
>Yoko Honna</a>, 
<a href="/name/nm0407372/?ref_=kw_li_st_3"
>Mayumi Izuka</a>
    </p>
        <p class="text-muted text-small">
                <span class="text-muted">Votes:</span>
                <span name="nv" data-value="22174">22.174</span>
    <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                <span name="nv" data-value="453.243">$0.45M</span>
        </p>
        </div>
        <div class="clear"></div>
    </div>
    <div class="lister-item mode-detail">
        <div class="lister-item-image ribbonize" data-tconst="tt0113824">


<a href="/title/tt0113824/?ref_=kw_li_i"
> <img alt="Sussurros do Coração"
class="loadlate"
loadlate="https://m.media-amazon.com/images/M/MV5BNmQ3N2U5NGMtNjU0MS00YTQzLWE1ZDctZDU5M2M5NTNjOGRmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY209_CR4,0,140,209_AL_.jpg"
data-tconst="tt0113824"
height="209"
src="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png"
width="140" />
</a>        </div>
        <div class="lister-item-content">
<h3 class="lister-item-header">
        <span class="lister-item-index unbold text-primary">14.</span>
    
    <a href="/title/tt0113824/?ref_=kw_li_tt"
>Sussurros do Coração</a>
    <span class="lister-item-year text-muted unbold">(1995)</span>
</h3>
    <p class="text-muted text-small">
            <span class="certificate">Livre</span>
                 <span class="ghost">|</span> 
                <span class="runtime">111 min</span>
                 <span class="ghost">|</span> 
            <span class="genre">
Animation, Drama, Family            </span>
    </p>
    <div class="ratings-bar">
    <div class="inline-block ratings-imdb-rating" name="ir" data-value="8">
        <span class="global-sprite rating-star imdb-rating"></span>
        <strong>8,0</strong>
    </div>
            <div class="inline-block ratings-user-rating">
                <span class="userRatingValue" id="urv_tt0113824" data-tconst="tt0113824">
                    <span class="global-sprite rating-star no-rating"></span>
                    <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                </span>
    <div class="starBarWidget" id="sb_tt0113824">
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="BCYqRDVvLH1Sil9PxwaEWoon2hx3fRf1GnR81KssEA2I9fd19U2Cpa2GRvI6us_yhol0Fp7eZzz-%0D%0AXbxFq2zFnY3fYoohWSWCuppLRKnwEB6cY7_W7bfmIAvNtkt1OlLUAM5_%0D%0A" data-user="ur112747879" id="tt0113824|imdb|8|8|kw_li_tt||search|keyword" data-ga-identifier=""
title="Users rated this 8/10 (43.250 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope itemprop="aggregateRating">
  <meta itemprop="ratingValue" content="8" />
  <meta itemprop="bestRating" content="10" />
  <meta itemprop="ratingCount" content="43250" />
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 112px">&nbsp;</span>
<span class="rating-stars">
      <a href="/title/tt0113824/vote?v=1&k=BCYqRDVvLH1Sil9PxwaEWoon2hx3fRf1GnR81KssEA2I9fd19U2Cpa2GRvI6us_yhol0Fp7eZzz-%0D%0AXbxFq2zFnY3fYoohWSWCuppLRKnwEB6cY7_W7bfmIAvNtkt1OlLUAM5_%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 1" ><span>1</span></a>
      <a href="/title/tt0113824/vote?v=2&k=BCYqRDVvLH1Sil9PxwaEWoon2hx3fRf1GnR81KssEA2I9fd19U2Cpa2GRvI6us_yhol0Fp7eZzz-%0D%0AXbxFq2zFnY3fYoohWSWCuppLRKnwEB6cY7_W7bfmIAvNtkt1OlLUAM5_%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 2" ><span>2</span></a>
      <a href="/title/tt0113824/vote?v=3&k=BCYqRDVvLH1Sil9PxwaEWoon2hx3fRf1GnR81KssEA2I9fd19U2Cpa2GRvI6us_yhol0Fp7eZzz-%0D%0AXbxFq2zFnY3fYoohWSWCuppLRKnwEB6cY7_W7bfmIAvNtkt1OlLUAM5_%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 3" ><span>3</span></a>
      <a href="/title/tt0113824/vote?v=4&k=BCYqRDVvLH1Sil9PxwaEWoon2hx3fRf1GnR81KssEA2I9fd19U2Cpa2GRvI6us_yhol0Fp7eZzz-%0D%0AXbxFq2zFnY3fYoohWSWCuppLRKnwEB6cY7_W7bfmIAvNtkt1OlLUAM5_%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 4" ><span>4</span></a>
      <a href="/title/tt0113824/vote?v=5&k=BCYqRDVvLH1Sil9PxwaEWoon2hx3fRf1GnR81KssEA2I9fd19U2Cpa2GRvI6us_yhol0Fp7eZzz-%0D%0AXbxFq2zFnY3fYoohWSWCuppLRKnwEB6cY7_W7bfmIAvNtkt1OlLUAM5_%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 5" ><span>5</span></a>
      <a href="/title/tt0113824/vote?v=6&k=BCYqRDVvLH1Sil9PxwaEWoon2hx3fRf1GnR81KssEA2I9fd19U2Cpa2GRvI6us_yhol0Fp7eZzz-%0D%0AXbxFq2zFnY3fYoohWSWCuppLRKnwEB6cY7_W7bfmIAvNtkt1OlLUAM5_%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 6" ><span>6</span></a>
      <a href="/title/tt0113824/vote?v=7&k=BCYqRDVvLH1Sil9PxwaEWoon2hx3fRf1GnR81KssEA2I9fd19U2Cpa2GRvI6us_yhol0Fp7eZzz-%0D%0AXbxFq2zFnY3fYoohWSWCuppLRKnwEB6cY7_W7bfmIAvNtkt1OlLUAM5_%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 7" ><span>7</span></a>
      <a href="/title/tt0113824/vote?v=8&k=BCYqRDVvLH1Sil9PxwaEWoon2hx3fRf1GnR81KssEA2I9fd19U2Cpa2GRvI6us_yhol0Fp7eZzz-%0D%0AXbxFq2zFnY3fYoohWSWCuppLRKnwEB6cY7_W7bfmIAvNtkt1OlLUAM5_%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 8" ><span>8</span></a>
      <a href="/title/tt0113824/vote?v=9&k=BCYqRDVvLH1Sil9PxwaEWoon2hx3fRf1GnR81KssEA2I9fd19U2Cpa2GRvI6us_yhol0Fp7eZzz-%0D%0AXbxFq2zFnY3fYoohWSWCuppLRKnwEB6cY7_W7bfmIAvNtkt1OlLUAM5_%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 9" ><span>9</span></a>
      <a href="/title/tt0113824/vote?v=10&k=BCYqRDVvLH1Sil9PxwaEWoon2hx3fRf1GnR81KssEA2I9fd19U2Cpa2GRvI6us_yhol0Fp7eZzz-%0D%0AXbxFq2zFnY3fYoohWSWCuppLRKnwEB6cY7_W7bfmIAvNtkt1OlLUAM5_%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 10" ><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">8</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a href="/title/tt0113824/vote?v=X;k=BCYqRDVvLH1Sil9PxwaEWoon2hx3fRf1GnR81KssEA2I9fd19U2Cpa2GRvI6us_yhol0Fp7eZzz-%0D%0AXbxFq2zFnY3fYoohWSWCuppLRKnwEB6cY7_W7bfmIAvNtkt1OlLUAM5_%0D%0A" title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>
    </div>
            </div>
            <div class="inline-block ratings-metascore">
<span class="metascore  favorable">75        </span>
        Metascore
            </div>
    </div>
<p class="">
    A love story between a girl who loves reading books, and a boy who has previously checked out all of the library books she chooses.</p>
    <p class="text-muted text-small">
    Director:
<a href="/name/nm0464911/?ref_=kw_li_dr_0"
>Yoshifumi Kondô</a>
                 <span class="ghost">|</span> 
    Stars:
<a href="/name/nm0393365/?ref_=kw_li_st_0"
>Yoko Honna</a>, 
<a href="/name/nm1534063/?ref_=kw_li_st_1"
>Issey Takahashi</a>, 
<a href="/name/nm0846181/?ref_=kw_li_st_2"
>Takashi Tachibana</a>, 
<a href="/name/nm0614026/?ref_=kw_li_st_3"
>Shigeru Muroi</a>
    </p>
        <p class="text-muted text-small">
                <span class="text-muted">Votes:</span>
                <span name="nv" data-value="43250">43.250</span>
        </p>
        </div>
        <div class="clear"></div>
    </div>
    <div class="lister-item mode-detail">
        <div class="lister-item-image ribbonize" data-tconst="tt0206013">


<a href="/title/tt0206013/?ref_=kw_li_i"
> <img alt="Meus Vizinhos, Os Yamadas"
class="loadlate"
loadlate="https://m.media-amazon.com/images/M/MV5BOThkZjMyMGYtMDNjNy00NjcwLTk1NmEtZmQwYTliMmM4YjBhXkEyXkFqcGdeQXVyMzM4NjcxOTc@._V1_UY209_CR3,0,140,209_AL_.jpg"
data-tconst="tt0206013"
height="209"
src="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png"
width="140" />
</a>        </div>
        <div class="lister-item-content">
<h3 class="lister-item-header">
        <span class="lister-item-index unbold text-primary">15.</span>
    
    <a href="/title/tt0206013/?ref_=kw_li_tt"
>Meus Vizinhos, Os Yamadas</a>
    <span class="lister-item-year text-muted unbold">(1999)</span>
</h3>
    <p class="text-muted text-small">
            <span class="certificate">PG</span>
                 <span class="ghost">|</span> 
                <span class="runtime">104 min</span>
                 <span class="ghost">|</span> 
            <span class="genre">
Animation, Comedy, Family            </span>
    </p>
    <div class="ratings-bar">
    <div class="inline-block ratings-imdb-rating" name="ir" data-value="7,2">
        <span class="global-sprite rating-star imdb-rating"></span>
        <strong>7,2</strong>
    </div>
            <div class="inline-block ratings-user-rating">
                <span class="userRatingValue" id="urv_tt0206013" data-tconst="tt0206013">
                    <span class="global-sprite rating-star no-rating"></span>
                    <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                </span>
    <div class="starBarWidget" id="sb_tt0206013">
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="BCYty6ivmmsqY1A0Y_uRjoQFYU6Inky1LpUPa2ynu5IzCumud8r7CIhNrCEVRUy8UBkiVDKAgvp2%0D%0ARh9gGvFp4IP2Nc2kKD8seFVREUH45q0FovK6Ic6NuBw7UzcM4Yi4EhOf%0D%0A" data-user="ur112747879" id="tt0206013|imdb|7.2|7.2|kw_li_tt||search|keyword" data-ga-identifier=""
title="Users rated this 7,2/10 (9.683 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope itemprop="aggregateRating">
  <meta itemprop="ratingValue" content="7.2" />
  <meta itemprop="bestRating" content="10" />
  <meta itemprop="ratingCount" content="9683" />
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 100.8px">&nbsp;</span>
<span class="rating-stars">
      <a href="/title/tt0206013/vote?v=1&k=BCYty6ivmmsqY1A0Y_uRjoQFYU6Inky1LpUPa2ynu5IzCumud8r7CIhNrCEVRUy8UBkiVDKAgvp2%0D%0ARh9gGvFp4IP2Nc2kKD8seFVREUH45q0FovK6Ic6NuBw7UzcM4Yi4EhOf%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 1" ><span>1</span></a>
      <a href="/title/tt0206013/vote?v=2&k=BCYty6ivmmsqY1A0Y_uRjoQFYU6Inky1LpUPa2ynu5IzCumud8r7CIhNrCEVRUy8UBkiVDKAgvp2%0D%0ARh9gGvFp4IP2Nc2kKD8seFVREUH45q0FovK6Ic6NuBw7UzcM4Yi4EhOf%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 2" ><span>2</span></a>
      <a href="/title/tt0206013/vote?v=3&k=BCYty6ivmmsqY1A0Y_uRjoQFYU6Inky1LpUPa2ynu5IzCumud8r7CIhNrCEVRUy8UBkiVDKAgvp2%0D%0ARh9gGvFp4IP2Nc2kKD8seFVREUH45q0FovK6Ic6NuBw7UzcM4Yi4EhOf%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 3" ><span>3</span></a>
      <a href="/title/tt0206013/vote?v=4&k=BCYty6ivmmsqY1A0Y_uRjoQFYU6Inky1LpUPa2ynu5IzCumud8r7CIhNrCEVRUy8UBkiVDKAgvp2%0D%0ARh9gGvFp4IP2Nc2kKD8seFVREUH45q0FovK6Ic6NuBw7UzcM4Yi4EhOf%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 4" ><span>4</span></a>
      <a href="/title/tt0206013/vote?v=5&k=BCYty6ivmmsqY1A0Y_uRjoQFYU6Inky1LpUPa2ynu5IzCumud8r7CIhNrCEVRUy8UBkiVDKAgvp2%0D%0ARh9gGvFp4IP2Nc2kKD8seFVREUH45q0FovK6Ic6NuBw7UzcM4Yi4EhOf%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 5" ><span>5</span></a>
      <a href="/title/tt0206013/vote?v=6&k=BCYty6ivmmsqY1A0Y_uRjoQFYU6Inky1LpUPa2ynu5IzCumud8r7CIhNrCEVRUy8UBkiVDKAgvp2%0D%0ARh9gGvFp4IP2Nc2kKD8seFVREUH45q0FovK6Ic6NuBw7UzcM4Yi4EhOf%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 6" ><span>6</span></a>
      <a href="/title/tt0206013/vote?v=7&k=BCYty6ivmmsqY1A0Y_uRjoQFYU6Inky1LpUPa2ynu5IzCumud8r7CIhNrCEVRUy8UBkiVDKAgvp2%0D%0ARh9gGvFp4IP2Nc2kKD8seFVREUH45q0FovK6Ic6NuBw7UzcM4Yi4EhOf%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 7" ><span>7</span></a>
      <a href="/title/tt0206013/vote?v=8&k=BCYty6ivmmsqY1A0Y_uRjoQFYU6Inky1LpUPa2ynu5IzCumud8r7CIhNrCEVRUy8UBkiVDKAgvp2%0D%0ARh9gGvFp4IP2Nc2kKD8seFVREUH45q0FovK6Ic6NuBw7UzcM4Yi4EhOf%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 8" ><span>8</span></a>
      <a href="/title/tt0206013/vote?v=9&k=BCYty6ivmmsqY1A0Y_uRjoQFYU6Inky1LpUPa2ynu5IzCumud8r7CIhNrCEVRUy8UBkiVDKAgvp2%0D%0ARh9gGvFp4IP2Nc2kKD8seFVREUH45q0FovK6Ic6NuBw7UzcM4Yi4EhOf%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 9" ><span>9</span></a>
      <a href="/title/tt0206013/vote?v=10&k=BCYty6ivmmsqY1A0Y_uRjoQFYU6Inky1LpUPa2ynu5IzCumud8r7CIhNrCEVRUy8UBkiVDKAgvp2%0D%0ARh9gGvFp4IP2Nc2kKD8seFVREUH45q0FovK6Ic6NuBw7UzcM4Yi4EhOf%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 10" ><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">7,2</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a href="/title/tt0206013/vote?v=X;k=BCYty6ivmmsqY1A0Y_uRjoQFYU6Inky1LpUPa2ynu5IzCumud8r7CIhNrCEVRUy8UBkiVDKAgvp2%0D%0ARh9gGvFp4IP2Nc2kKD8seFVREUH45q0FovK6Ic6NuBw7UzcM4Yi4EhOf%0D%0A" title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>
    </div>
            </div>
            <div class="inline-block ratings-metascore">
<span class="metascore  favorable">75        </span>
        Metascore
            </div>
    </div>
<p class="">
    The life and misadventures of a family in contemporary Japan.</p>
    <p class="text-muted text-small">
    Director:
<a href="/name/nm0847223/?ref_=kw_li_dr_0"
>Isao Takahata</a>
                 <span class="ghost">|</span> 
    Stars:
<a href="/name/nm0038378/?ref_=kw_li_st_0"
>Yukiji Asaoka</a>, 
<a href="/name/nm0557953/?ref_=kw_li_st_1"
>Tôru Masuoka</a>, 
<a href="/name/nm0032892/?ref_=kw_li_st_2"
>Masako Araki</a>, 
<a href="/name/nm4626963/?ref_=kw_li_st_3"
>Hayato Isohata</a>
    </p>
        <p class="text-muted text-small">
                <span class="text-muted">Votes:</span>
                <span name="nv" data-value="9683">9.683</span>
        </p>
        </div>
        <div class="clear"></div>
    </div>
    <div class="lister-item mode-detail">
        <div class="lister-item-image ribbonize" data-tconst="tt0108432">


<a href="/title/tt0108432/?ref_=kw_li_i"
> <img alt="Eu Posso Ouvir o Oceano"
class="loadlate"
loadlate="https://m.media-amazon.com/images/M/MV5BMTBkNTUyZjYtMjIzZC00NDIzLWIyOTEtYmRkYzgxYzFiYzk3XkEyXkFqcGdeQXVyNDYzNTI2ODc@._V1_UX140_CR0,0,140,209_AL_.jpg"
data-tconst="tt0108432"
height="209"
src="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png"
width="140" />
</a>        </div>
        <div class="lister-item-content">
<h3 class="lister-item-header">
        <span class="lister-item-index unbold text-primary">16.</span>
    
    <a href="/title/tt0108432/?ref_=kw_li_tt"
>Eu Posso Ouvir o Oceano</a>
    <span class="lister-item-year text-muted unbold">(1993 TV Movie)</span>
</h3>
    <p class="text-muted text-small">
            <span class="certificate">10</span>
                 <span class="ghost">|</span> 
                <span class="runtime">72 min</span>
                 <span class="ghost">|</span> 
            <span class="genre">
Animation, Drama, Romance            </span>
    </p>
    <div class="ratings-bar">
    <div class="inline-block ratings-imdb-rating" name="ir" data-value="6,8">
        <span class="global-sprite rating-star imdb-rating"></span>
        <strong>6,8</strong>
    </div>
            <div class="inline-block ratings-user-rating">
                <span class="userRatingValue" id="urv_tt0108432" data-tconst="tt0108432">
                    <span class="global-sprite rating-star no-rating"></span>
                    <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                </span>
    <div class="starBarWidget" id="sb_tt0108432">
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="BCYplVLzLTSoQjEMKf8FBemFVEwfmMyNj3Uztr5jkM6L6M9Kec2dkkIVh_ekGwJZhFOb-ssjhttF%0D%0AFR-T3bGe-7bLdIhkGcosxbkgws5pwcD1j_u5mCZqIPZQjAnozXuugStM%0D%0A" data-user="ur112747879" id="tt0108432|imdb|6.8|6.8|kw_li_tt||search|keyword" data-ga-identifier=""
title="Users rated this 6,8/10 (9.651 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope itemprop="aggregateRating">
  <meta itemprop="ratingValue" content="6.8" />
  <meta itemprop="bestRating" content="10" />
  <meta itemprop="ratingCount" content="9651" />
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 95.2px">&nbsp;</span>
<span class="rating-stars">
      <a href="/title/tt0108432/vote?v=1&k=BCYplVLzLTSoQjEMKf8FBemFVEwfmMyNj3Uztr5jkM6L6M9Kec2dkkIVh_ekGwJZhFOb-ssjhttF%0D%0AFR-T3bGe-7bLdIhkGcosxbkgws5pwcD1j_u5mCZqIPZQjAnozXuugStM%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 1" ><span>1</span></a>
      <a href="/title/tt0108432/vote?v=2&k=BCYplVLzLTSoQjEMKf8FBemFVEwfmMyNj3Uztr5jkM6L6M9Kec2dkkIVh_ekGwJZhFOb-ssjhttF%0D%0AFR-T3bGe-7bLdIhkGcosxbkgws5pwcD1j_u5mCZqIPZQjAnozXuugStM%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 2" ><span>2</span></a>
      <a href="/title/tt0108432/vote?v=3&k=BCYplVLzLTSoQjEMKf8FBemFVEwfmMyNj3Uztr5jkM6L6M9Kec2dkkIVh_ekGwJZhFOb-ssjhttF%0D%0AFR-T3bGe-7bLdIhkGcosxbkgws5pwcD1j_u5mCZqIPZQjAnozXuugStM%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 3" ><span>3</span></a>
      <a href="/title/tt0108432/vote?v=4&k=BCYplVLzLTSoQjEMKf8FBemFVEwfmMyNj3Uztr5jkM6L6M9Kec2dkkIVh_ekGwJZhFOb-ssjhttF%0D%0AFR-T3bGe-7bLdIhkGcosxbkgws5pwcD1j_u5mCZqIPZQjAnozXuugStM%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 4" ><span>4</span></a>
      <a href="/title/tt0108432/vote?v=5&k=BCYplVLzLTSoQjEMKf8FBemFVEwfmMyNj3Uztr5jkM6L6M9Kec2dkkIVh_ekGwJZhFOb-ssjhttF%0D%0AFR-T3bGe-7bLdIhkGcosxbkgws5pwcD1j_u5mCZqIPZQjAnozXuugStM%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 5" ><span>5</span></a>
      <a href="/title/tt0108432/vote?v=6&k=BCYplVLzLTSoQjEMKf8FBemFVEwfmMyNj3Uztr5jkM6L6M9Kec2dkkIVh_ekGwJZhFOb-ssjhttF%0D%0AFR-T3bGe-7bLdIhkGcosxbkgws5pwcD1j_u5mCZqIPZQjAnozXuugStM%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 6" ><span>6</span></a>
      <a href="/title/tt0108432/vote?v=7&k=BCYplVLzLTSoQjEMKf8FBemFVEwfmMyNj3Uztr5jkM6L6M9Kec2dkkIVh_ekGwJZhFOb-ssjhttF%0D%0AFR-T3bGe-7bLdIhkGcosxbkgws5pwcD1j_u5mCZqIPZQjAnozXuugStM%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 7" ><span>7</span></a>
      <a href="/title/tt0108432/vote?v=8&k=BCYplVLzLTSoQjEMKf8FBemFVEwfmMyNj3Uztr5jkM6L6M9Kec2dkkIVh_ekGwJZhFOb-ssjhttF%0D%0AFR-T3bGe-7bLdIhkGcosxbkgws5pwcD1j_u5mCZqIPZQjAnozXuugStM%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 8" ><span>8</span></a>
      <a href="/title/tt0108432/vote?v=9&k=BCYplVLzLTSoQjEMKf8FBemFVEwfmMyNj3Uztr5jkM6L6M9Kec2dkkIVh_ekGwJZhFOb-ssjhttF%0D%0AFR-T3bGe-7bLdIhkGcosxbkgws5pwcD1j_u5mCZqIPZQjAnozXuugStM%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 9" ><span>9</span></a>
      <a href="/title/tt0108432/vote?v=10&k=BCYplVLzLTSoQjEMKf8FBemFVEwfmMyNj3Uztr5jkM6L6M9Kec2dkkIVh_ekGwJZhFOb-ssjhttF%0D%0AFR-T3bGe-7bLdIhkGcosxbkgws5pwcD1j_u5mCZqIPZQjAnozXuugStM%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 10" ><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">6,8</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a href="/title/tt0108432/vote?v=X;k=BCYplVLzLTSoQjEMKf8FBemFVEwfmMyNj3Uztr5jkM6L6M9Kec2dkkIVh_ekGwJZhFOb-ssjhttF%0D%0AFR-T3bGe-7bLdIhkGcosxbkgws5pwcD1j_u5mCZqIPZQjAnozXuugStM%0D%0A" title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>
    </div>
            </div>
            <div class="inline-block ratings-metascore">
<span class="metascore  favorable">73        </span>
        Metascore
            </div>
    </div>
<p class="">
    As a young man returns home after his first year away at college he recalls his senior year of high school and the iron-willed, big city girl that turned his world upside down.</p>
    <p class="text-muted text-small">
    Director:
<a href="/name/nm0595101/?ref_=kw_li_dr_0"
>Tomomi Mochizuki</a>
                 <span class="ghost">|</span> 
    Stars:
<a href="/name/nm0864980/?ref_=kw_li_st_0"
>Nobuo Tobita</a>, 
<a href="/name/nm0782841/?ref_=kw_li_st_1"
>Toshihiko Seki</a>, 
<a href="/name/nm1296967/?ref_=kw_li_st_2"
>Yoko Sakamoto</a>, 
<a href="/name/nm0023924/?ref_=kw_li_st_3"
>Yuri Amano</a>
    </p>
        <p class="text-muted text-small">
                <span class="text-muted">Votes:</span>
                <span name="nv" data-value="9651">9.651</span>
        </p>
        </div>
        <div class="clear"></div>
    </div>
    <div class="lister-item mode-detail">
        <div class="lister-item-image ribbonize" data-tconst="tt1798188">


<a href="/title/tt1798188/?ref_=kw_li_i"
> <img alt="Da Colina Kokuriko"
class="loadlate"
loadlate="https://m.media-amazon.com/images/M/MV5BYWFiYjE0NTctZThiZC00NTYxLTllOWQtYmMyYzY4NWZiZDYyXkEyXkFqcGdeQXVyMTIyNzY1NzM@._V1_UY209_CR4,0,140,209_AL_.jpg"
data-tconst="tt1798188"
height="209"
src="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png"
width="140" />
</a>        </div>
        <div class="lister-item-content">
<h3 class="lister-item-header">
        <span class="lister-item-index unbold text-primary">17.</span>
    
    <a href="/title/tt1798188/?ref_=kw_li_tt"
>Da Colina Kokuriko</a>
    <span class="lister-item-year text-muted unbold">(2011)</span>
</h3>
    <p class="text-muted text-small">
            <span class="certificate">Livre</span>
                 <span class="ghost">|</span> 
                <span class="runtime">91 min</span>
                 <span class="ghost">|</span> 
            <span class="genre">
Animation, Drama, Family            </span>
    </p>
    <div class="ratings-bar">
    <div class="inline-block ratings-imdb-rating" name="ir" data-value="7,4">
        <span class="global-sprite rating-star imdb-rating"></span>
        <strong>7,4</strong>
    </div>
            <div class="inline-block ratings-user-rating">
                <span class="userRatingValue" id="urv_tt1798188" data-tconst="tt1798188">
                    <span class="global-sprite rating-star no-rating"></span>
                    <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                </span>
    <div class="starBarWidget" id="sb_tt1798188">
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="BCYhDhx0Q2ZIFC5Ox1JubJQHXRi4npaOu3TEbKLN1gUFcbEWh22Z5m1Y3eGkr_S4mV9sYlp7wZAV%0D%0AkYdZ7l3bcboVBYjlcH7T2mJu0KS6XH3a-9ivsccwEGnrfbLBnjRAAh_R%0D%0A" data-user="ur112747879" id="tt1798188|imdb|7.4|7.4|kw_li_tt||search|keyword" data-ga-identifier=""
title="Users rated this 7,4/10 (28.321 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope itemprop="aggregateRating">
  <meta itemprop="ratingValue" content="7.4" />
  <meta itemprop="bestRating" content="10" />
  <meta itemprop="ratingCount" content="28321" />
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 103.6px">&nbsp;</span>
<span class="rating-stars">
      <a href="/title/tt1798188/vote?v=1&k=BCYhDhx0Q2ZIFC5Ox1JubJQHXRi4npaOu3TEbKLN1gUFcbEWh22Z5m1Y3eGkr_S4mV9sYlp7wZAV%0D%0AkYdZ7l3bcboVBYjlcH7T2mJu0KS6XH3a-9ivsccwEGnrfbLBnjRAAh_R%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 1" ><span>1</span></a>
      <a href="/title/tt1798188/vote?v=2&k=BCYhDhx0Q2ZIFC5Ox1JubJQHXRi4npaOu3TEbKLN1gUFcbEWh22Z5m1Y3eGkr_S4mV9sYlp7wZAV%0D%0AkYdZ7l3bcboVBYjlcH7T2mJu0KS6XH3a-9ivsccwEGnrfbLBnjRAAh_R%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 2" ><span>2</span></a>
      <a href="/title/tt1798188/vote?v=3&k=BCYhDhx0Q2ZIFC5Ox1JubJQHXRi4npaOu3TEbKLN1gUFcbEWh22Z5m1Y3eGkr_S4mV9sYlp7wZAV%0D%0AkYdZ7l3bcboVBYjlcH7T2mJu0KS6XH3a-9ivsccwEGnrfbLBnjRAAh_R%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 3" ><span>3</span></a>
      <a href="/title/tt1798188/vote?v=4&k=BCYhDhx0Q2ZIFC5Ox1JubJQHXRi4npaOu3TEbKLN1gUFcbEWh22Z5m1Y3eGkr_S4mV9sYlp7wZAV%0D%0AkYdZ7l3bcboVBYjlcH7T2mJu0KS6XH3a-9ivsccwEGnrfbLBnjRAAh_R%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 4" ><span>4</span></a>
      <a href="/title/tt1798188/vote?v=5&k=BCYhDhx0Q2ZIFC5Ox1JubJQHXRi4npaOu3TEbKLN1gUFcbEWh22Z5m1Y3eGkr_S4mV9sYlp7wZAV%0D%0AkYdZ7l3bcboVBYjlcH7T2mJu0KS6XH3a-9ivsccwEGnrfbLBnjRAAh_R%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 5" ><span>5</span></a>
      <a href="/title/tt1798188/vote?v=6&k=BCYhDhx0Q2ZIFC5Ox1JubJQHXRi4npaOu3TEbKLN1gUFcbEWh22Z5m1Y3eGkr_S4mV9sYlp7wZAV%0D%0AkYdZ7l3bcboVBYjlcH7T2mJu0KS6XH3a-9ivsccwEGnrfbLBnjRAAh_R%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 6" ><span>6</span></a>
      <a href="/title/tt1798188/vote?v=7&k=BCYhDhx0Q2ZIFC5Ox1JubJQHXRi4npaOu3TEbKLN1gUFcbEWh22Z5m1Y3eGkr_S4mV9sYlp7wZAV%0D%0AkYdZ7l3bcboVBYjlcH7T2mJu0KS6XH3a-9ivsccwEGnrfbLBnjRAAh_R%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 7" ><span>7</span></a>
      <a href="/title/tt1798188/vote?v=8&k=BCYhDhx0Q2ZIFC5Ox1JubJQHXRi4npaOu3TEbKLN1gUFcbEWh22Z5m1Y3eGkr_S4mV9sYlp7wZAV%0D%0AkYdZ7l3bcboVBYjlcH7T2mJu0KS6XH3a-9ivsccwEGnrfbLBnjRAAh_R%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 8" ><span>8</span></a>
      <a href="/title/tt1798188/vote?v=9&k=BCYhDhx0Q2ZIFC5Ox1JubJQHXRi4npaOu3TEbKLN1gUFcbEWh22Z5m1Y3eGkr_S4mV9sYlp7wZAV%0D%0AkYdZ7l3bcboVBYjlcH7T2mJu0KS6XH3a-9ivsccwEGnrfbLBnjRAAh_R%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 9" ><span>9</span></a>
      <a href="/title/tt1798188/vote?v=10&k=BCYhDhx0Q2ZIFC5Ox1JubJQHXRi4npaOu3TEbKLN1gUFcbEWh22Z5m1Y3eGkr_S4mV9sYlp7wZAV%0D%0AkYdZ7l3bcboVBYjlcH7T2mJu0KS6XH3a-9ivsccwEGnrfbLBnjRAAh_R%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 10" ><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">7,4</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a href="/title/tt1798188/vote?v=X;k=BCYhDhx0Q2ZIFC5Ox1JubJQHXRi4npaOu3TEbKLN1gUFcbEWh22Z5m1Y3eGkr_S4mV9sYlp7wZAV%0D%0AkYdZ7l3bcboVBYjlcH7T2mJu0KS6XH3a-9ivsccwEGnrfbLBnjRAAh_R%0D%0A" title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>
    </div>
            </div>
            <div class="inline-block ratings-metascore">
<span class="metascore  favorable">71        </span>
        Metascore
            </div>
    </div>
<p class="">
    A group of Yokohama teens look to save their school's clubhouse from the wrecking ball in preparations for the 1964 Tokyo Olympics.</p>
    <p class="text-muted text-small">
    Director:
<a href="/name/nm2066439/?ref_=kw_li_dr_0"
>Gorô Miyazaki</a>
                 <span class="ghost">|</span> 
    Stars:
<a href="/name/nm0092961/?ref_=kw_li_st_0"
>Sarah Bolger</a>, 
<a href="/name/nm0636562/?ref_=kw_li_st_1"
>Chris Noth</a>, 
<a href="/name/nm0947338/?ref_=kw_li_st_2"
>Anton Yelchin</a>, 
<a href="/name/nm0376716/?ref_=kw_li_st_3"
>Christina Hendricks</a>
    </p>
        <p class="text-muted text-small">
                <span class="text-muted">Votes:</span>
                <span name="nv" data-value="28321">28.321</span>
    <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                <span name="nv" data-value="1.002.895">$1.00M</span>
        </p>
        </div>
        <div class="clear"></div>
    </div>
    <div class="lister-item mode-detail">
        <div class="lister-item-image ribbonize" data-tconst="tt3398268">


<a href="/title/tt3398268/?ref_=kw_li_i"
> <img alt="As Memórias de Marnie"
class="loadlate"
loadlate="https://m.media-amazon.com/images/M/MV5BYTkyMTNmY2EtOTZmYi00YWU4LTgxN2UtZWU0NTI0OGFkMWRjXkEyXkFqcGdeQXVyMzg2MzE2OTE@._V1_UY209_CR3,0,140,209_AL_.jpg"
data-tconst="tt3398268"
height="209"
src="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png"
width="140" />
</a>        </div>
        <div class="lister-item-content">
<h3 class="lister-item-header">
        <span class="lister-item-index unbold text-primary">18.</span>
    
    <a href="/title/tt3398268/?ref_=kw_li_tt"
>As Memórias de Marnie</a>
    <span class="lister-item-year text-muted unbold">(2014)</span>
</h3>
    <p class="text-muted text-small">
            <span class="certificate">10</span>
                 <span class="ghost">|</span> 
                <span class="runtime">103 min</span>
                 <span class="ghost">|</span> 
            <span class="genre">
Animation, Drama, Family            </span>
    </p>
    <div class="ratings-bar">
    <div class="inline-block ratings-imdb-rating" name="ir" data-value="7,7">
        <span class="global-sprite rating-star imdb-rating"></span>
        <strong>7,7</strong>
    </div>
            <div class="inline-block ratings-user-rating">
                <span class="userRatingValue" id="urv_tt3398268" data-tconst="tt3398268">
                    <span class="global-sprite rating-star no-rating"></span>
                    <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                </span>
    <div class="starBarWidget" id="sb_tt3398268">
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="BCYmwlbUMghpcHs6nmSCJgDOHU3uUHFyY24X-5Pas20tmHUnr_VL1uhaZ8AgX5lGReFjMKs1wfLG%0D%0AcbbUYvvE_p_mMfHkdOULHBi1uYhPNodRghjIe89RROCKciEt51QWOKhu%0D%0A" data-user="ur112747879" id="tt3398268|imdb|7.7|7.7|kw_li_tt||search|keyword" data-ga-identifier=""
title="Users rated this 7,7/10 (26.648 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope itemprop="aggregateRating">
  <meta itemprop="ratingValue" content="7.7" />
  <meta itemprop="bestRating" content="10" />
  <meta itemprop="ratingCount" content="26648" />
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 107.8px">&nbsp;</span>
<span class="rating-stars">
      <a href="/title/tt3398268/vote?v=1&k=BCYmwlbUMghpcHs6nmSCJgDOHU3uUHFyY24X-5Pas20tmHUnr_VL1uhaZ8AgX5lGReFjMKs1wfLG%0D%0AcbbUYvvE_p_mMfHkdOULHBi1uYhPNodRghjIe89RROCKciEt51QWOKhu%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 1" ><span>1</span></a>
      <a href="/title/tt3398268/vote?v=2&k=BCYmwlbUMghpcHs6nmSCJgDOHU3uUHFyY24X-5Pas20tmHUnr_VL1uhaZ8AgX5lGReFjMKs1wfLG%0D%0AcbbUYvvE_p_mMfHkdOULHBi1uYhPNodRghjIe89RROCKciEt51QWOKhu%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 2" ><span>2</span></a>
      <a href="/title/tt3398268/vote?v=3&k=BCYmwlbUMghpcHs6nmSCJgDOHU3uUHFyY24X-5Pas20tmHUnr_VL1uhaZ8AgX5lGReFjMKs1wfLG%0D%0AcbbUYvvE_p_mMfHkdOULHBi1uYhPNodRghjIe89RROCKciEt51QWOKhu%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 3" ><span>3</span></a>
      <a href="/title/tt3398268/vote?v=4&k=BCYmwlbUMghpcHs6nmSCJgDOHU3uUHFyY24X-5Pas20tmHUnr_VL1uhaZ8AgX5lGReFjMKs1wfLG%0D%0AcbbUYvvE_p_mMfHkdOULHBi1uYhPNodRghjIe89RROCKciEt51QWOKhu%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 4" ><span>4</span></a>
      <a href="/title/tt3398268/vote?v=5&k=BCYmwlbUMghpcHs6nmSCJgDOHU3uUHFyY24X-5Pas20tmHUnr_VL1uhaZ8AgX5lGReFjMKs1wfLG%0D%0AcbbUYvvE_p_mMfHkdOULHBi1uYhPNodRghjIe89RROCKciEt51QWOKhu%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 5" ><span>5</span></a>
      <a href="/title/tt3398268/vote?v=6&k=BCYmwlbUMghpcHs6nmSCJgDOHU3uUHFyY24X-5Pas20tmHUnr_VL1uhaZ8AgX5lGReFjMKs1wfLG%0D%0AcbbUYvvE_p_mMfHkdOULHBi1uYhPNodRghjIe89RROCKciEt51QWOKhu%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 6" ><span>6</span></a>
      <a href="/title/tt3398268/vote?v=7&k=BCYmwlbUMghpcHs6nmSCJgDOHU3uUHFyY24X-5Pas20tmHUnr_VL1uhaZ8AgX5lGReFjMKs1wfLG%0D%0AcbbUYvvE_p_mMfHkdOULHBi1uYhPNodRghjIe89RROCKciEt51QWOKhu%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 7" ><span>7</span></a>
      <a href="/title/tt3398268/vote?v=8&k=BCYmwlbUMghpcHs6nmSCJgDOHU3uUHFyY24X-5Pas20tmHUnr_VL1uhaZ8AgX5lGReFjMKs1wfLG%0D%0AcbbUYvvE_p_mMfHkdOULHBi1uYhPNodRghjIe89RROCKciEt51QWOKhu%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 8" ><span>8</span></a>
      <a href="/title/tt3398268/vote?v=9&k=BCYmwlbUMghpcHs6nmSCJgDOHU3uUHFyY24X-5Pas20tmHUnr_VL1uhaZ8AgX5lGReFjMKs1wfLG%0D%0AcbbUYvvE_p_mMfHkdOULHBi1uYhPNodRghjIe89RROCKciEt51QWOKhu%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 9" ><span>9</span></a>
      <a href="/title/tt3398268/vote?v=10&k=BCYmwlbUMghpcHs6nmSCJgDOHU3uUHFyY24X-5Pas20tmHUnr_VL1uhaZ8AgX5lGReFjMKs1wfLG%0D%0AcbbUYvvE_p_mMfHkdOULHBi1uYhPNodRghjIe89RROCKciEt51QWOKhu%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 10" ><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">7,7</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a href="/title/tt3398268/vote?v=X;k=BCYmwlbUMghpcHs6nmSCJgDOHU3uUHFyY24X-5Pas20tmHUnr_VL1uhaZ8AgX5lGReFjMKs1wfLG%0D%0AcbbUYvvE_p_mMfHkdOULHBi1uYhPNodRghjIe89RROCKciEt51QWOKhu%0D%0A" title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>
    </div>
            </div>
            <div class="inline-block ratings-metascore">
<span class="metascore  favorable">72        </span>
        Metascore
            </div>
    </div>
<p class="">
    Due to 12 y.o. Anna's asthma, she's sent to stay with relatives of her guardian in the Japanese countryside. She likes to be alone, sketching. She befriends Marnie. Who is the mysterious, blonde Marnie.</p>
    <p class="text-muted text-small">
    Directors:
<a href="/name/nm9985593/?ref_=kw_li_dr_0"
>James Simone</a>, 
<a href="/name/nm0948488/?ref_=kw_li_dr_1"
>Hiromasa Yonebayashi</a>
                 <span class="ghost">|</span> 
    Stars:
<a href="/name/nm3268918/?ref_=kw_li_st_0"
>Sara Takatsuki</a>, 
<a href="/name/nm4134328/?ref_=kw_li_st_1"
>Kasumi Arimura</a>, 
<a href="/name/nm0559652/?ref_=kw_li_st_2"
>Nanako Matsushima</a>, 
<a href="/name/nm0855398/?ref_=kw_li_st_3"
>Susumu Terajima</a>
    </p>
        <p class="text-muted text-small">
                <span class="text-muted">Votes:</span>
                <span name="nv" data-value="26648">26.648</span>
    <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                <span name="nv" data-value="765.127">$0.77M</span>
        </p>
        </div>
        <div class="clear"></div>
    </div>
    <div class="lister-item mode-detail">
        <div class="lister-item-image ribbonize" data-tconst="tt0079833">


<a href="/title/tt0079833/?ref_=kw_li_i"
> <img alt="O Castelo de Cagliostro"
class="loadlate"
loadlate="https://m.media-amazon.com/images/M/MV5BYWZlOWNjZGUtZTAxMi00MWIxLTlkYTUtYmE5ZWNjMWRlMTA3XkEyXkFqcGdeQXVyNTc5OTMwOTQ@._V1_UY209_CR8,0,140,209_AL_.jpg"
data-tconst="tt0079833"
height="209"
src="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png"
width="140" />
</a>        </div>
        <div class="lister-item-content">
<h3 class="lister-item-header">
        <span class="lister-item-index unbold text-primary">19.</span>
    
    <a href="/title/tt0079833/?ref_=kw_li_tt"
>O Castelo de Cagliostro</a>
    <span class="lister-item-year text-muted unbold">(1979)</span>
</h3>
    <p class="text-muted text-small">
            <span class="certificate">10</span>
                 <span class="ghost">|</span> 
                <span class="runtime">100 min</span>
                 <span class="ghost">|</span> 
            <span class="genre">
Animation, Adventure, Family            </span>
    </p>
    <div class="ratings-bar">
    <div class="inline-block ratings-imdb-rating" name="ir" data-value="7,7">
        <span class="global-sprite rating-star imdb-rating"></span>
        <strong>7,7</strong>
    </div>
            <div class="inline-block ratings-user-rating">
                <span class="userRatingValue" id="urv_tt0079833" data-tconst="tt0079833">
                    <span class="global-sprite rating-star no-rating"></span>
                    <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                </span>
    <div class="starBarWidget" id="sb_tt0079833">
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="BCYnXgebxMyi_Pv_zjjRug9YrttTQjLrPzrRxiLZv4adWOboB3Os-aSng83NvdDRqE04noKal1tQ%0D%0Ap7wK99Nl72524BWGQveHLtZ-EUJ36YVFceIXCwAa_uLprBWau_bH2Cnv%0D%0A" data-user="ur112747879" id="tt0079833|imdb|7.7|7.7|kw_li_tt||search|keyword" data-ga-identifier=""
title="Users rated this 7,7/10 (24.215 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope itemprop="aggregateRating">
  <meta itemprop="ratingValue" content="7.7" />
  <meta itemprop="bestRating" content="10" />
  <meta itemprop="ratingCount" content="24215" />
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 107.8px">&nbsp;</span>
<span class="rating-stars">
      <a href="/title/tt0079833/vote?v=1&k=BCYnXgebxMyi_Pv_zjjRug9YrttTQjLrPzrRxiLZv4adWOboB3Os-aSng83NvdDRqE04noKal1tQ%0D%0Ap7wK99Nl72524BWGQveHLtZ-EUJ36YVFceIXCwAa_uLprBWau_bH2Cnv%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 1" ><span>1</span></a>
      <a href="/title/tt0079833/vote?v=2&k=BCYnXgebxMyi_Pv_zjjRug9YrttTQjLrPzrRxiLZv4adWOboB3Os-aSng83NvdDRqE04noKal1tQ%0D%0Ap7wK99Nl72524BWGQveHLtZ-EUJ36YVFceIXCwAa_uLprBWau_bH2Cnv%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 2" ><span>2</span></a>
      <a href="/title/tt0079833/vote?v=3&k=BCYnXgebxMyi_Pv_zjjRug9YrttTQjLrPzrRxiLZv4adWOboB3Os-aSng83NvdDRqE04noKal1tQ%0D%0Ap7wK99Nl72524BWGQveHLtZ-EUJ36YVFceIXCwAa_uLprBWau_bH2Cnv%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 3" ><span>3</span></a>
      <a href="/title/tt0079833/vote?v=4&k=BCYnXgebxMyi_Pv_zjjRug9YrttTQjLrPzrRxiLZv4adWOboB3Os-aSng83NvdDRqE04noKal1tQ%0D%0Ap7wK99Nl72524BWGQveHLtZ-EUJ36YVFceIXCwAa_uLprBWau_bH2Cnv%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 4" ><span>4</span></a>
      <a href="/title/tt0079833/vote?v=5&k=BCYnXgebxMyi_Pv_zjjRug9YrttTQjLrPzrRxiLZv4adWOboB3Os-aSng83NvdDRqE04noKal1tQ%0D%0Ap7wK99Nl72524BWGQveHLtZ-EUJ36YVFceIXCwAa_uLprBWau_bH2Cnv%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 5" ><span>5</span></a>
      <a href="/title/tt0079833/vote?v=6&k=BCYnXgebxMyi_Pv_zjjRug9YrttTQjLrPzrRxiLZv4adWOboB3Os-aSng83NvdDRqE04noKal1tQ%0D%0Ap7wK99Nl72524BWGQveHLtZ-EUJ36YVFceIXCwAa_uLprBWau_bH2Cnv%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 6" ><span>6</span></a>
      <a href="/title/tt0079833/vote?v=7&k=BCYnXgebxMyi_Pv_zjjRug9YrttTQjLrPzrRxiLZv4adWOboB3Os-aSng83NvdDRqE04noKal1tQ%0D%0Ap7wK99Nl72524BWGQveHLtZ-EUJ36YVFceIXCwAa_uLprBWau_bH2Cnv%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 7" ><span>7</span></a>
      <a href="/title/tt0079833/vote?v=8&k=BCYnXgebxMyi_Pv_zjjRug9YrttTQjLrPzrRxiLZv4adWOboB3Os-aSng83NvdDRqE04noKal1tQ%0D%0Ap7wK99Nl72524BWGQveHLtZ-EUJ36YVFceIXCwAa_uLprBWau_bH2Cnv%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 8" ><span>8</span></a>
      <a href="/title/tt0079833/vote?v=9&k=BCYnXgebxMyi_Pv_zjjRug9YrttTQjLrPzrRxiLZv4adWOboB3Os-aSng83NvdDRqE04noKal1tQ%0D%0Ap7wK99Nl72524BWGQveHLtZ-EUJ36YVFceIXCwAa_uLprBWau_bH2Cnv%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 9" ><span>9</span></a>
      <a href="/title/tt0079833/vote?v=10&k=BCYnXgebxMyi_Pv_zjjRug9YrttTQjLrPzrRxiLZv4adWOboB3Os-aSng83NvdDRqE04noKal1tQ%0D%0Ap7wK99Nl72524BWGQveHLtZ-EUJ36YVFceIXCwAa_uLprBWau_bH2Cnv%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 10" ><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">7,7</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a href="/title/tt0079833/vote?v=X;k=BCYnXgebxMyi_Pv_zjjRug9YrttTQjLrPzrRxiLZv4adWOboB3Os-aSng83NvdDRqE04noKal1tQ%0D%0Ap7wK99Nl72524BWGQveHLtZ-EUJ36YVFceIXCwAa_uLprBWau_bH2Cnv%0D%0A" title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>
    </div>
            </div>
            <div class="inline-block ratings-metascore">
<span class="metascore  favorable">71        </span>
        Metascore
            </div>
    </div>
<p class="">
    A dashing thief, his gang of desperadoes and an intrepid policeman struggle to free a princess from an evil count's clutches, and learn the hidden secret to a fabulous treasure that she holds part of a key to.</p>
    <p class="text-muted text-small">
    Director:
<a href="/name/nm0594503/?ref_=kw_li_dr_0"
>Hayao Miyazaki</a>
                 <span class="ghost">|</span> 
    Stars:
<a href="/name/nm0945280/?ref_=kw_li_st_0"
>Yasuo Yamada</a>, 
<a href="/name/nm0557968/?ref_=kw_li_st_1"
>Eiko Masuyama</a>, 
<a href="/name/nm0462017/?ref_=kw_li_st_2"
>Kiyoshi Kobayashi</a>, 
<a href="/name/nm0409296/?ref_=kw_li_st_3"
>Makio Inoue</a>
    </p>
        <p class="text-muted text-small">
                <span class="text-muted">Votes:</span>
                <span name="nv" data-value="24215">24.215</span>
        </p>
        </div>
        <div class="clear"></div>
    </div>
    <div class="lister-item mode-detail">
        <div class="lister-item-image ribbonize" data-tconst="tt3666024">


<a href="/title/tt3666024/?ref_=kw_li_i"
> <img alt="A Tartaruga Vermelha"
class="loadlate"
loadlate="https://m.media-amazon.com/images/M/MV5BODU3MjIxZWMtODFjYy00ZTI5LThmMzctMTMzZWFlOTIzNTc2L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY209_CR8,0,140,209_AL_.jpg"
data-tconst="tt3666024"
height="209"
src="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png"
width="140" />
</a>        </div>
        <div class="lister-item-content">
<h3 class="lister-item-header">
        <span class="lister-item-index unbold text-primary">20.</span>
    
    <a href="/title/tt3666024/?ref_=kw_li_tt"
>A Tartaruga Vermelha</a>
    <span class="lister-item-year text-muted unbold">(2016)</span>
</h3>
    <p class="text-muted text-small">
            <span class="certificate">Livre</span>
                 <span class="ghost">|</span> 
                <span class="runtime">80 min</span>
                 <span class="ghost">|</span> 
            <span class="genre">
Animation, Family, Fantasy            </span>
    </p>
    <div class="ratings-bar">
    <div class="inline-block ratings-imdb-rating" name="ir" data-value="7,5">
        <span class="global-sprite rating-star imdb-rating"></span>
        <strong>7,5</strong>
    </div>
            <div class="inline-block ratings-user-rating">
                <span class="userRatingValue" id="urv_tt3666024" data-tconst="tt3666024">
                    <span class="global-sprite rating-star no-rating"></span>
                    <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                </span>
    <div class="starBarWidget" id="sb_tt3666024">
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="BCYmyC5o9tqd7WP2Nx3o-TbVVklKXatuY7kG1qcMAtuSqanuuNloPbdcyKcV7kjlN_57FHxx4seZ%0D%0A0DzTYAyB0kXABPrp9pdde-8m1ULUA2GFNeDLkcdV6X_dkgmp-NvC48XD%0D%0A" data-user="ur112747879" id="tt3666024|imdb|7.5|7.5|kw_li_tt||search|keyword" data-ga-identifier=""
title="Users rated this 7,5/10 (27.859 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope itemprop="aggregateRating">
  <meta itemprop="ratingValue" content="7.5" />
  <meta itemprop="bestRating" content="10" />
  <meta itemprop="ratingCount" content="27859" />
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 105px">&nbsp;</span>
<span class="rating-stars">
      <a href="/title/tt3666024/vote?v=1&k=BCYmyC5o9tqd7WP2Nx3o-TbVVklKXatuY7kG1qcMAtuSqanuuNloPbdcyKcV7kjlN_57FHxx4seZ%0D%0A0DzTYAyB0kXABPrp9pdde-8m1ULUA2GFNeDLkcdV6X_dkgmp-NvC48XD%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 1" ><span>1</span></a>
      <a href="/title/tt3666024/vote?v=2&k=BCYmyC5o9tqd7WP2Nx3o-TbVVklKXatuY7kG1qcMAtuSqanuuNloPbdcyKcV7kjlN_57FHxx4seZ%0D%0A0DzTYAyB0kXABPrp9pdde-8m1ULUA2GFNeDLkcdV6X_dkgmp-NvC48XD%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 2" ><span>2</span></a>
      <a href="/title/tt3666024/vote?v=3&k=BCYmyC5o9tqd7WP2Nx3o-TbVVklKXatuY7kG1qcMAtuSqanuuNloPbdcyKcV7kjlN_57FHxx4seZ%0D%0A0DzTYAyB0kXABPrp9pdde-8m1ULUA2GFNeDLkcdV6X_dkgmp-NvC48XD%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 3" ><span>3</span></a>
      <a href="/title/tt3666024/vote?v=4&k=BCYmyC5o9tqd7WP2Nx3o-TbVVklKXatuY7kG1qcMAtuSqanuuNloPbdcyKcV7kjlN_57FHxx4seZ%0D%0A0DzTYAyB0kXABPrp9pdde-8m1ULUA2GFNeDLkcdV6X_dkgmp-NvC48XD%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 4" ><span>4</span></a>
      <a href="/title/tt3666024/vote?v=5&k=BCYmyC5o9tqd7WP2Nx3o-TbVVklKXatuY7kG1qcMAtuSqanuuNloPbdcyKcV7kjlN_57FHxx4seZ%0D%0A0DzTYAyB0kXABPrp9pdde-8m1ULUA2GFNeDLkcdV6X_dkgmp-NvC48XD%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 5" ><span>5</span></a>
      <a href="/title/tt3666024/vote?v=6&k=BCYmyC5o9tqd7WP2Nx3o-TbVVklKXatuY7kG1qcMAtuSqanuuNloPbdcyKcV7kjlN_57FHxx4seZ%0D%0A0DzTYAyB0kXABPrp9pdde-8m1ULUA2GFNeDLkcdV6X_dkgmp-NvC48XD%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 6" ><span>6</span></a>
      <a href="/title/tt3666024/vote?v=7&k=BCYmyC5o9tqd7WP2Nx3o-TbVVklKXatuY7kG1qcMAtuSqanuuNloPbdcyKcV7kjlN_57FHxx4seZ%0D%0A0DzTYAyB0kXABPrp9pdde-8m1ULUA2GFNeDLkcdV6X_dkgmp-NvC48XD%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 7" ><span>7</span></a>
      <a href="/title/tt3666024/vote?v=8&k=BCYmyC5o9tqd7WP2Nx3o-TbVVklKXatuY7kG1qcMAtuSqanuuNloPbdcyKcV7kjlN_57FHxx4seZ%0D%0A0DzTYAyB0kXABPrp9pdde-8m1ULUA2GFNeDLkcdV6X_dkgmp-NvC48XD%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 8" ><span>8</span></a>
      <a href="/title/tt3666024/vote?v=9&k=BCYmyC5o9tqd7WP2Nx3o-TbVVklKXatuY7kG1qcMAtuSqanuuNloPbdcyKcV7kjlN_57FHxx4seZ%0D%0A0DzTYAyB0kXABPrp9pdde-8m1ULUA2GFNeDLkcdV6X_dkgmp-NvC48XD%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 9" ><span>9</span></a>
      <a href="/title/tt3666024/vote?v=10&k=BCYmyC5o9tqd7WP2Nx3o-TbVVklKXatuY7kG1qcMAtuSqanuuNloPbdcyKcV7kjlN_57FHxx4seZ%0D%0A0DzTYAyB0kXABPrp9pdde-8m1ULUA2GFNeDLkcdV6X_dkgmp-NvC48XD%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 10" ><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">7,5</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a href="/title/tt3666024/vote?v=X;k=BCYmyC5o9tqd7WP2Nx3o-TbVVklKXatuY7kG1qcMAtuSqanuuNloPbdcyKcV7kjlN_57FHxx4seZ%0D%0A0DzTYAyB0kXABPrp9pdde-8m1ULUA2GFNeDLkcdV6X_dkgmp-NvC48XD%0D%0A" title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>
    </div>
            </div>
            <div class="inline-block ratings-metascore">
<span class="metascore  favorable">86        </span>
        Metascore
            </div>
    </div>
<p class="">
    A man is shipwrecked on a deserted island and encounters a red turtle, which changes his life.</p>
    <p class="text-muted text-small">
    Director:
<a href="/name/nm0240196/?ref_=kw_li_dr_0"
>Michael Dudok de Wit</a>
                 <span class="ghost">|</span> 
    Stars:
<a href="/name/nm0307430/?ref_=kw_li_st_0"
>Emmanuel Garijo</a>, 
<a href="/name/nm8940317/?ref_=kw_li_st_1"
>Tom Hudson</a>, 
<a href="/name/nm8940318/?ref_=kw_li_st_2"
>Baptiste Goy</a>, 
<a href="/name/nm8940319/?ref_=kw_li_st_3"
>Axel Devillers</a>
    </p>
        <p class="text-muted text-small">
                <span class="text-muted">Votes:</span>
                <span name="nv" data-value="27859">27.859</span>
    <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                <span name="nv" data-value="920.057">$0.92M</span>
        </p>
        </div>
        <div class="clear"></div>
    </div>
    <div class="lister-item mode-detail">
        <div class="lister-item-image ribbonize" data-tconst="tt6572002">


<a href="/title/tt6572002/?ref_=kw_li_i"
> <img alt="Boro the Caterpillar"
class="loadlate"
loadlate="https://m.media-amazon.com/images/M/MV5BMDY5M2NhNGUtYjk2MS00NjQwLWJhODQtMDAwZjJiMzE2NWZkXkEyXkFqcGdeQXVyMTk3NDAwMzI@._V1_UX140_CR0,0,140,209_AL_.jpg"
data-tconst="tt6572002"
height="209"
src="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png"
width="140" />
</a>        </div>
        <div class="lister-item-content">
<h3 class="lister-item-header">
        <span class="lister-item-index unbold text-primary">21.</span>
    
    <a href="/title/tt6572002/?ref_=kw_li_tt"
>Boro the Caterpillar</a>
    <span class="lister-item-year text-muted unbold">(2018)</span>
</h3>
    <p class="text-muted text-small">
            
                <span class="runtime">14 min</span>
                 <span class="ghost">|</span> 
            <span class="genre">
Animation, Short, Adventure            </span>
    </p>
    <div class="ratings-bar">
    <div class="inline-block ratings-imdb-rating" name="ir" data-value="8,1">
        <span class="global-sprite rating-star imdb-rating"></span>
        <strong>8,1</strong>
    </div>
            <div class="inline-block ratings-user-rating">
                <span class="userRatingValue" id="urv_tt6572002" data-tconst="tt6572002">
                    <span class="global-sprite rating-star no-rating"></span>
                    <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                </span>
    <div class="starBarWidget" id="sb_tt6572002">
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="BCYjDvclbIGAoG_LXLT1KuuWBVJR74jdrIbCtENcI3YYfuNsb410iCxSOm5ZMd8IW2TAkl74Kqqm%0D%0APP_Mh0Kj0hSFz-kv0O956XBVLFxIUVOW9Z3EC52_z5Z9NebUxuiiS31W%0D%0A" data-user="ur112747879" id="tt6572002|imdb|8.1|8.1|kw_li_tt||search|keyword" data-ga-identifier=""
title="Users rated this 8,1/10 (100 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope itemprop="aggregateRating">
  <meta itemprop="ratingValue" content="8.1" />
  <meta itemprop="bestRating" content="10" />
  <meta itemprop="ratingCount" content="100" />
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 113.4px">&nbsp;</span>
<span class="rating-stars">
      <a href="/title/tt6572002/vote?v=1&k=BCYjDvclbIGAoG_LXLT1KuuWBVJR74jdrIbCtENcI3YYfuNsb410iCxSOm5ZMd8IW2TAkl74Kqqm%0D%0APP_Mh0Kj0hSFz-kv0O956XBVLFxIUVOW9Z3EC52_z5Z9NebUxuiiS31W%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 1" ><span>1</span></a>
      <a href="/title/tt6572002/vote?v=2&k=BCYjDvclbIGAoG_LXLT1KuuWBVJR74jdrIbCtENcI3YYfuNsb410iCxSOm5ZMd8IW2TAkl74Kqqm%0D%0APP_Mh0Kj0hSFz-kv0O956XBVLFxIUVOW9Z3EC52_z5Z9NebUxuiiS31W%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 2" ><span>2</span></a>
      <a href="/title/tt6572002/vote?v=3&k=BCYjDvclbIGAoG_LXLT1KuuWBVJR74jdrIbCtENcI3YYfuNsb410iCxSOm5ZMd8IW2TAkl74Kqqm%0D%0APP_Mh0Kj0hSFz-kv0O956XBVLFxIUVOW9Z3EC52_z5Z9NebUxuiiS31W%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 3" ><span>3</span></a>
      <a href="/title/tt6572002/vote?v=4&k=BCYjDvclbIGAoG_LXLT1KuuWBVJR74jdrIbCtENcI3YYfuNsb410iCxSOm5ZMd8IW2TAkl74Kqqm%0D%0APP_Mh0Kj0hSFz-kv0O956XBVLFxIUVOW9Z3EC52_z5Z9NebUxuiiS31W%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 4" ><span>4</span></a>
      <a href="/title/tt6572002/vote?v=5&k=BCYjDvclbIGAoG_LXLT1KuuWBVJR74jdrIbCtENcI3YYfuNsb410iCxSOm5ZMd8IW2TAkl74Kqqm%0D%0APP_Mh0Kj0hSFz-kv0O956XBVLFxIUVOW9Z3EC52_z5Z9NebUxuiiS31W%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 5" ><span>5</span></a>
      <a href="/title/tt6572002/vote?v=6&k=BCYjDvclbIGAoG_LXLT1KuuWBVJR74jdrIbCtENcI3YYfuNsb410iCxSOm5ZMd8IW2TAkl74Kqqm%0D%0APP_Mh0Kj0hSFz-kv0O956XBVLFxIUVOW9Z3EC52_z5Z9NebUxuiiS31W%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 6" ><span>6</span></a>
      <a href="/title/tt6572002/vote?v=7&k=BCYjDvclbIGAoG_LXLT1KuuWBVJR74jdrIbCtENcI3YYfuNsb410iCxSOm5ZMd8IW2TAkl74Kqqm%0D%0APP_Mh0Kj0hSFz-kv0O956XBVLFxIUVOW9Z3EC52_z5Z9NebUxuiiS31W%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 7" ><span>7</span></a>
      <a href="/title/tt6572002/vote?v=8&k=BCYjDvclbIGAoG_LXLT1KuuWBVJR74jdrIbCtENcI3YYfuNsb410iCxSOm5ZMd8IW2TAkl74Kqqm%0D%0APP_Mh0Kj0hSFz-kv0O956XBVLFxIUVOW9Z3EC52_z5Z9NebUxuiiS31W%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 8" ><span>8</span></a>
      <a href="/title/tt6572002/vote?v=9&k=BCYjDvclbIGAoG_LXLT1KuuWBVJR74jdrIbCtENcI3YYfuNsb410iCxSOm5ZMd8IW2TAkl74Kqqm%0D%0APP_Mh0Kj0hSFz-kv0O956XBVLFxIUVOW9Z3EC52_z5Z9NebUxuiiS31W%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 9" ><span>9</span></a>
      <a href="/title/tt6572002/vote?v=10&k=BCYjDvclbIGAoG_LXLT1KuuWBVJR74jdrIbCtENcI3YYfuNsb410iCxSOm5ZMd8IW2TAkl74Kqqm%0D%0APP_Mh0Kj0hSFz-kv0O956XBVLFxIUVOW9Z3EC52_z5Z9NebUxuiiS31W%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 10" ><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">8,1</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a href="/title/tt6572002/vote?v=X;k=BCYjDvclbIGAoG_LXLT1KuuWBVJR74jdrIbCtENcI3YYfuNsb410iCxSOm5ZMd8IW2TAkl74Kqqm%0D%0APP_Mh0Kj0hSFz-kv0O956XBVLFxIUVOW9Z3EC52_z5Z9NebUxuiiS31W%0D%0A" title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>
    </div>
            </div>
    </div>
<p class="">
    A diving bell spider who seems to have fallen in love with a water strider.</p>
    <p class="text-muted text-small">
    Director:
<a href="/name/nm0594503/?ref_=kw_li_dr_0"
>Hayao Miyazaki</a>
                 <span class="ghost">|</span> 
    Star:
<a href="/name/nm1041699/?ref_=kw_li_st_0"
>Tamori</a>
    </p>
        <p class="text-muted text-small">
                <span class="text-muted">Votes:</span>
                <span name="nv" data-value="100">100</span>
        </p>
        </div>
        <div class="clear"></div>
    </div>
    <div class="lister-item mode-detail">
        <div class="lister-item-image ribbonize" data-tconst="tt6848624">


<a href="/title/tt6848624/?ref_=kw_li_i"
> <img alt="Owaranai hito: Miyazaki Hayao"
class="loadlate"
loadlate="https://m.media-amazon.com/images/M/MV5BMTA2ODIzNjA2MTFeQTJeQWpwZ15BbWU4MDIxMTU1NzYz._V1_UY209_CR0,0,140,209_AL_.jpg"
data-tconst="tt6848624"
height="209"
src="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png"
width="140" />
</a>        </div>
        <div class="lister-item-content">
<h3 class="lister-item-header">
        <span class="lister-item-index unbold text-primary">22.</span>
    
    <a href="/title/tt6848624/?ref_=kw_li_tt"
>Owaranai hito: Miyazaki Hayao</a>
    <span class="lister-item-year text-muted unbold">(2016 TV Movie)</span>
</h3>
    <p class="text-muted text-small">
            
                <span class="runtime">70 min</span>
                 <span class="ghost">|</span> 
            <span class="genre">
Documentary, Biography            </span>
    </p>
    <div class="ratings-bar">
    <div class="inline-block ratings-imdb-rating" name="ir" data-value="6,8">
        <span class="global-sprite rating-star imdb-rating"></span>
        <strong>6,8</strong>
    </div>
            <div class="inline-block ratings-user-rating">
                <span class="userRatingValue" id="urv_tt6848624" data-tconst="tt6848624">
                    <span class="global-sprite rating-star no-rating"></span>
                    <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                </span>
    <div class="starBarWidget" id="sb_tt6848624">
<div class="rating rating-list" data-starbar-class="rating-list" data-auth="BCYr7BKSDLt5PdIYbRPtVbdmqP4S0Vq_IK1x94MkX5VmwVnDCgOcWPfYHbIi_Pp8-RjgaN2yLMJa%0D%0AWfx4BBFi4eeB45wzik2xOqXNDMzc1QqWT8DZzeWnAV8VISkmwbOV4DcE%0D%0A" data-user="ur112747879" id="tt6848624|imdb|6.8|6.8|kw_li_tt||search|keyword" data-ga-identifier=""
title="Users rated this 6,8/10 (345 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope itemprop="aggregateRating">
  <meta itemprop="ratingValue" content="6.8" />
  <meta itemprop="bestRating" content="10" />
  <meta itemprop="ratingCount" content="345" />
<span class="rating-bg">&nbsp;</span>
<span class="rating-imdb " style="width: 95.2px">&nbsp;</span>
<span class="rating-stars">
      <a href="/title/tt6848624/vote?v=1&k=BCYr7BKSDLt5PdIYbRPtVbdmqP4S0Vq_IK1x94MkX5VmwVnDCgOcWPfYHbIi_Pp8-RjgaN2yLMJa%0D%0AWfx4BBFi4eeB45wzik2xOqXNDMzc1QqWT8DZzeWnAV8VISkmwbOV4DcE%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 1" ><span>1</span></a>
      <a href="/title/tt6848624/vote?v=2&k=BCYr7BKSDLt5PdIYbRPtVbdmqP4S0Vq_IK1x94MkX5VmwVnDCgOcWPfYHbIi_Pp8-RjgaN2yLMJa%0D%0AWfx4BBFi4eeB45wzik2xOqXNDMzc1QqWT8DZzeWnAV8VISkmwbOV4DcE%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 2" ><span>2</span></a>
      <a href="/title/tt6848624/vote?v=3&k=BCYr7BKSDLt5PdIYbRPtVbdmqP4S0Vq_IK1x94MkX5VmwVnDCgOcWPfYHbIi_Pp8-RjgaN2yLMJa%0D%0AWfx4BBFi4eeB45wzik2xOqXNDMzc1QqWT8DZzeWnAV8VISkmwbOV4DcE%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 3" ><span>3</span></a>
      <a href="/title/tt6848624/vote?v=4&k=BCYr7BKSDLt5PdIYbRPtVbdmqP4S0Vq_IK1x94MkX5VmwVnDCgOcWPfYHbIi_Pp8-RjgaN2yLMJa%0D%0AWfx4BBFi4eeB45wzik2xOqXNDMzc1QqWT8DZzeWnAV8VISkmwbOV4DcE%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 4" ><span>4</span></a>
      <a href="/title/tt6848624/vote?v=5&k=BCYr7BKSDLt5PdIYbRPtVbdmqP4S0Vq_IK1x94MkX5VmwVnDCgOcWPfYHbIi_Pp8-RjgaN2yLMJa%0D%0AWfx4BBFi4eeB45wzik2xOqXNDMzc1QqWT8DZzeWnAV8VISkmwbOV4DcE%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 5" ><span>5</span></a>
      <a href="/title/tt6848624/vote?v=6&k=BCYr7BKSDLt5PdIYbRPtVbdmqP4S0Vq_IK1x94MkX5VmwVnDCgOcWPfYHbIi_Pp8-RjgaN2yLMJa%0D%0AWfx4BBFi4eeB45wzik2xOqXNDMzc1QqWT8DZzeWnAV8VISkmwbOV4DcE%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 6" ><span>6</span></a>
      <a href="/title/tt6848624/vote?v=7&k=BCYr7BKSDLt5PdIYbRPtVbdmqP4S0Vq_IK1x94MkX5VmwVnDCgOcWPfYHbIi_Pp8-RjgaN2yLMJa%0D%0AWfx4BBFi4eeB45wzik2xOqXNDMzc1QqWT8DZzeWnAV8VISkmwbOV4DcE%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 7" ><span>7</span></a>
      <a href="/title/tt6848624/vote?v=8&k=BCYr7BKSDLt5PdIYbRPtVbdmqP4S0Vq_IK1x94MkX5VmwVnDCgOcWPfYHbIi_Pp8-RjgaN2yLMJa%0D%0AWfx4BBFi4eeB45wzik2xOqXNDMzc1QqWT8DZzeWnAV8VISkmwbOV4DcE%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 8" ><span>8</span></a>
      <a href="/title/tt6848624/vote?v=9&k=BCYr7BKSDLt5PdIYbRPtVbdmqP4S0Vq_IK1x94MkX5VmwVnDCgOcWPfYHbIi_Pp8-RjgaN2yLMJa%0D%0AWfx4BBFi4eeB45wzik2xOqXNDMzc1QqWT8DZzeWnAV8VISkmwbOV4DcE%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 9" ><span>9</span></a>
      <a href="/title/tt6848624/vote?v=10&k=BCYr7BKSDLt5PdIYbRPtVbdmqP4S0Vq_IK1x94MkX5VmwVnDCgOcWPfYHbIi_Pp8-RjgaN2yLMJa%0D%0AWfx4BBFi4eeB45wzik2xOqXNDMzc1QqWT8DZzeWnAV8VISkmwbOV4DcE%0D%0A&ref_=tt_ov_rt"
rel="nofollow" title="Click to rate: 10" ><span>10</span></a>
</span>
<span class="rating-rating "><span class="value">6,8</span><span class="grey">/</span><span class="grey">10</span></span>
<span class="rating-cancel "><a href="/title/tt6848624/vote?v=X;k=BCYr7BKSDLt5PdIYbRPtVbdmqP4S0Vq_IK1x94MkX5VmwVnDCgOcWPfYHbIi_Pp8-RjgaN2yLMJa%0D%0AWfx4BBFi4eeB45wzik2xOqXNDMzc1QqWT8DZzeWnAV8VISkmwbOV4DcE%0D%0A" title="Delete" rel="nofollow"><span>X</span></a></span>
&nbsp;</div>
    </div>
            </div>
            <div class="inline-block ratings-metascore">
<span class="metascore  favorable">64        </span>
        Metascore
            </div>
    </div>
<p class="">
    A look at famous Japanese animator Hayao Miyazaki following his retirement in 2013.</p>
    <p class="text-muted text-small">
    Director:
<a href="/name/nm9237177/?ref_=kw_li_dr_0"
>Kaku Arakawa</a>
                 <span class="ghost">|</span> 
    Stars:
<a href="/name/nm0594503/?ref_=kw_li_st_0"
>Hayao Miyazaki</a>, 
<a href="/name/nm0840699/?ref_=kw_li_st_1"
>Toshio Suzuki</a>, 
<a href="/name/nm7626188/?ref_=kw_li_st_2"
>Yuhei Sakuragi</a>, 
<a href="/name/nm5505856/?ref_=kw_li_st_3"
>Yukinori Nakamura</a>
    </p>
        <p class="text-muted text-small">
                <span class="text-muted">Votes:</span>
                <span name="nv" data-value="345">345</span>
    <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                <span name="nv" data-value="187.320">$0.19M</span>
        </p>
        </div>
        <div class="clear"></div>
    </div>
    <div class="lister-item mode-detail">
        <div class="lister-item-image ribbonize" data-tconst="tt11299420">


<a href="/title/tt11299420/?ref_=kw_li_i"
> <img alt="Children of Chronos"
class="loadlate"
loadlate="https://m.media-amazon.com/images/M/MV5BMWY2ZWQxNWItZDZmNS00NGFlLWFhZGItYTdlOGJkNDNmZDkyXkEyXkFqcGdeQXVyOTk3NTM1OTY@._V1_UY209_CR4,0,140,209_AL_.jpg"
data-tconst="tt11299420"
height="209"
src="https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png"
width="140" />
</a>        </div>
        <div class="lister-item-content">
<h3 class="lister-item-header">
        <span class="lister-item-index unbold text-primary">23.</span>
    
    <a href="/title/tt11299420/?ref_=kw_li_tt"
>Children of Chronos</a>
    <span class="lister-item-year text-muted unbold"></span>
</h3>
    <p class="text-muted text-small">
            
            <span class="genre">
Short, Sci-Fi            </span>
                     <span class="ghost">|</span> 
                <b>Post-production</b>
    </p>
<p class="">
    A young woman, Nikita, takes a treacherous journey towards a mystical far away city, Chronos, in hope of a better life. After an epic journey arriving at the gates of Chronos, they find that the great stories of Chronos aren't quite true.</p>
    <p class="text-muted text-small">
    Director:
<a href="/name/nm9631241/?ref_=kw_li_dr_0"
>Jamie Sundance</a>
                 <span class="ghost">|</span> 
    Stars:
<a href="/name/nm8821146/?ref_=kw_li_st_0"
>Ronan Doyle</a>, 
<a href="/name/nm1002929/?ref_=kw_li_st_1"
>Alec Westwood</a>, 
<a href="/name/nm9081906/?ref_=kw_li_st_2"
>Chloe Johnson</a>
    </p>
        </div>
        <div class="clear"></div>
    </div>
        </div>
    <br>
    <div class="footer filmosearch">
        <div class="nav">
    <div class="desc">
         
            23 titles
    </div>
        </div>
    </div>
    <div class="hidden lister-working"></div>
</div>
        </div>
<script>
    if (typeof uet == 'function') {
      uet("cf");
    }
</script>
    </div>
    <div id="sidebar">
	
	
<script type="text/javascript">
// Track beginning of ad html
if (typeof window.uet === 'function') {
window.uet('bb', 'adplacements:' + 'top_rhs'.replace(/_/g, ':'), {wb: 1});
}
</script>
<!-- begin TOP_RHS -->
<div id="top_rhs_wrapper" class="cornerstone_slot">
<script type="text/javascript">
doWithAds(function(){
if ('cornerstone_slot' != 'injected_slot') {
ad_utils.register_ad('top_rhs');
}
});
</script>
<iframe allowtransparency="true" class="yesScript" data-blank-serverside data-ad-viewability-treatment frameborder="0" id="top_rhs" marginwidth="0" marginheight="0" name="top_rhs" onload="doWithAds.call(this, function(){ ad_utils.on_ad_load(this); });" scrolling="no" data-original-width="0" data-original-height="0" width="0" height="0" ></iframe> </div>
<div id="top_rhs_reflow_helper"></div>
<div id="top_rhs_after" class="after_ad" style="visibility:hidden;">
<a class="yesScript" href="#" onclick="ad_utils.show_ad_feedback('top_rhs');return false;" id="ad_feedback_top_rhs">ad feedback</a>
</div>
<script id="top_rhs_rendering">
doWithAds(function(){
if ('cornerstone_slot' == 'cornerstone_slot') {
ad_utils.inject_serverside_ad('top_rhs', '');
}
else if ('cornerstone_slot' == 'injected_slot') {
ad_utils.inject_ad.register('top_rhs');
}
}, "ad_utils not defined, unable to render client-side GPT ad or injected ad.");
</script>
<!-- End TOP_RHS -->
	
    </div>
</div>

                   <br class="clear" />
                </div>


                    <div id="rvi-div">
                        <div class="recently-viewed">
                        <div class="header">
                            <div class="rhs">
                                <a id="clear_rvi" href="#">Clear your history</a>
                            </div>
                            <h3>Recently Viewed</h3>
                        </div>
                            <div class="items">&nbsp;</div>
                        </div>
                    </div>

	
	
<script type="text/javascript">
// Track beginning of ad html
if (typeof window.uet === 'function') {
window.uet('bb', 'adplacements:' + 'bottom_ad'.replace(/_/g, ':'), {wb: 1});
}
</script>
<!-- begin BOTTOM_AD -->
<div id="bottom_ad_wrapper" class="cornerstone_slot">
<script type="text/javascript">
doWithAds(function(){
if ('cornerstone_slot' != 'injected_slot') {
ad_utils.register_ad('bottom_ad');
}
});
</script>
<iframe allowtransparency="true" class="yesScript" data-blank-serverside data-ad-viewability-treatment frameborder="0" id="bottom_ad" marginwidth="0" marginheight="0" name="bottom_ad" onload="doWithAds.call(this, function(){ ad_utils.on_ad_load(this); });" scrolling="no" data-original-width="0" data-original-height="0" width="0" height="0" ></iframe> </div>
<div id="bottom_ad_reflow_helper"></div>
<script id="bottom_ad_rendering">
doWithAds(function(){
if ('cornerstone_slot' == 'cornerstone_slot') {
ad_utils.inject_serverside_ad('bottom_ad', '');
}
else if ('cornerstone_slot' == 'injected_slot') {
ad_utils.inject_ad.register('bottom_ad');
}
}, "ad_utils not defined, unable to render client-side GPT ad or injected ad.");
</script>
<!-- End BOTTOM_AD -->
	

    <script type="text/javascript">
        try {
            window.lumierePlayer = window.lumierePlayer || {};
            window.lumierePlayer.weblab = JSON.parse('{"IMDB_VIDEO_SINGLE_PAGE_239260":"T1","IMDB_VIDEO_PLAYER_162496":"C","IMDB_VIDEO_SINGLE_PAGE_REDIRECT_241512":"T1","IMDB_VIDEO_SINGLE_PAGE_REDIRECT_DESKTOP_247130":"T1"}');
        } catch (error) {
            if (window.ueLogError) {
                window.ueLogError(error, {
                    logLevel: "WARN",
                    attribution: "videoplayer",
                    message: "Failed to parse weblabs for video player."
                });
            }
        }
    </script>
            </div>
        </div>
        
<script>
    if (typeof uet == 'function') {
      uet("bb", "desktopFooter", {wb: 1});
    }
</script>
    <div id="c59db4e8-c3b3-4e9b-988d-bc886976bac7">
       <footer class="imdb-footer VUGIPjGgHtzvbHiU19iTQ"><div class="_32mc4FXftSbwhpJwmGCYUQ"><div class="ipc-page-content-container ipc-page-content-container--center" role="presentation"><a class="ipc-button ipc-button--double-padding ipc-button--default-height ipc-button--core-baseAlt ipc-button--theme-baseAlt ipc-button imdb-footer__open-in-app-button" tabindex="0" href="/whitelist-offsite?url=https%3A%2F%2Ftqp-4.tlnk.io%2Fserve%3Faction%3Dclick%26campaign_id_android%3D427112%26campaign_id_ios%3D427111%26destination_id_android%3D464200%26destination_id_ios%3D464199%26my_campaign%3Dmdot%2520sitewide%2520footer%2520%26my_site%3Dm.imdb.com%26publisher_id%3D350552%26site_id_android%3D133429%26site_id_ios%3D133428&amp;page-action=ft-gettheapp&amp;ref=ft_apps"><div class="ipc-button__text">Get the IMDb App</div></a></div></div><div class="ipc-page-content-container ipc-page-content-container--center _2AR8CsLqQAMCT1_Q7eidSY" role="presentation"><div class="imdb-footer__links"><div class="_2Wc8yXs8SzGv7TVS-oOmhT"><ul class="ipc-inline-list _1O3-k0VDASm1IeBrfofV4g" role="presentation"><li role="presentation" class="ipc-inline-list__item"><a href="/whitelist-offsite?url=https%3A%2F%2Ffacebook.com%2Fimdb&amp;page-action=fol_fb&amp;ref=ft_fol_fb" role="button" aria-label="Facebook" tabindex="0" title="Facebook" target="_blank" rel="nofollow" class="ipc-icon-link ipc-icon-link--external ipc-icon-link--baseAlt ipc-icon-link--onBase"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--facebook" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M20.896 2H3.104C2.494 2 2 2.494 2 3.104v17.792C2 21.506 2.494 22 3.104 22h9.579v-7.745h-2.607v-3.018h2.607V9.01c0-2.584 1.577-3.99 3.882-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.595-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V22h5.097c.61 0 1.104-.494 1.104-1.104V3.104C22 2.494 21.506 2 20.896 2"></path></svg></a></li><li role="presentation" class="ipc-inline-list__item"><a href="/whitelist-offsite?url=https%3A%2F%2Finstagram.com%2Fimdb&amp;page-action=fol_inst&amp;ref=ft_fol_inst" role="button" aria-label="Instagram" tabindex="0" title="Instagram" target="_blank" rel="nofollow" class="ipc-icon-link ipc-icon-link--external ipc-icon-link--baseAlt ipc-icon-link--onBase"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--instagram" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M11.997 2.04c-2.715 0-3.056.011-4.122.06-1.064.048-1.79.217-2.426.463a4.901 4.901 0 0 0-1.771 1.151 4.89 4.89 0 0 0-1.153 1.767c-.247.635-.416 1.36-.465 2.422C2.011 8.967 2 9.307 2 12.017s.011 3.049.06 4.113c.049 1.062.218 1.787.465 2.422a4.89 4.89 0 0 0 1.153 1.767 4.901 4.901 0 0 0 1.77 1.15c.636.248 1.363.416 2.427.465 1.066.048 1.407.06 4.122.06s3.055-.012 4.122-.06c1.064-.049 1.79-.217 2.426-.464a4.901 4.901 0 0 0 1.77-1.15 4.89 4.89 0 0 0 1.154-1.768c.247-.635.416-1.36.465-2.422.048-1.064.06-1.404.06-4.113 0-2.71-.012-3.05-.06-4.114-.049-1.062-.218-1.787-.465-2.422a4.89 4.89 0 0 0-1.153-1.767 4.901 4.901 0 0 0-1.77-1.15c-.637-.247-1.363-.416-2.427-.464-1.067-.049-1.407-.06-4.122-.06m0 1.797c2.67 0 2.985.01 4.04.058.974.045 1.503.207 1.856.344.466.181.8.397 1.15.746.349.35.566.682.747 1.147.137.352.3.88.344 1.853.048 1.052.058 1.368.058 4.032 0 2.664-.01 2.98-.058 4.031-.044.973-.207 1.501-.344 1.853a3.09 3.09 0 0 1-.748 1.147c-.35.35-.683.565-1.15.746-.352.137-.88.3-1.856.344-1.054.048-1.37.058-4.04.058-2.669 0-2.985-.01-4.039-.058-.974-.044-1.504-.207-1.856-.344a3.098 3.098 0 0 1-1.15-.746 3.09 3.09 0 0 1-.747-1.147c-.137-.352-.3-.88-.344-1.853-.049-1.052-.059-1.367-.059-4.031 0-2.664.01-2.98.059-4.032.044-.973.207-1.501.344-1.853a3.09 3.09 0 0 1 .748-1.147c.35-.349.682-.565 1.149-.746.352-.137.882-.3 1.856-.344 1.054-.048 1.37-.058 4.04-.058"></path><path d="M11.997 15.342a3.329 3.329 0 0 1-3.332-3.325 3.329 3.329 0 0 1 3.332-3.326 3.329 3.329 0 0 1 3.332 3.326 3.329 3.329 0 0 1-3.332 3.325m0-8.449a5.128 5.128 0 0 0-5.134 5.124 5.128 5.128 0 0 0 5.134 5.123 5.128 5.128 0 0 0 5.133-5.123 5.128 5.128 0 0 0-5.133-5.124m6.536-.203c0 .662-.537 1.198-1.2 1.198a1.198 1.198 0 1 1 1.2-1.197"></path></svg></a></li><li role="presentation" class="ipc-inline-list__item"><a href="/whitelist-offsite?url=https%3A%2F%2Ftwitch.tv%2FIMDb&amp;page-action=fol_twch&amp;ref=ft_fol_twch" role="button" aria-label="Twitch" tabindex="0" title="Twitch" target="_blank" rel="nofollow" class="ipc-icon-link ipc-icon-link--external ipc-icon-link--baseAlt ipc-icon-link--onBase"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--twitch" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M3.406 2h18.596v12.814l-5.469 5.47H12.47L9.813 22.94H7.001v-2.657H2V5.594L3.406 2zm16.721 11.876v-10H5.125v13.126h4.22v2.656L12 17.002h5l3.126-3.126z"></path><path d="M17.002 7.47v5.469h-1.875v-5.47zM12.001 7.47v5.469h-1.875v-5.47z"></path></svg></a></li><li role="presentation" class="ipc-inline-list__item"><a href="/whitelist-offsite?url=https%3A%2F%2Ftwitter.com%2Fimdb&amp;page-action=fol_tw&amp;ref=ft_fol_tw" role="button" aria-label="Twitter" tabindex="0" title="Twitter" target="_blank" rel="nofollow" class="ipc-icon-link ipc-icon-link--external ipc-icon-link--baseAlt ipc-icon-link--onBase"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--twitter" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M8.29 19.936c7.547 0 11.675-6.13 11.675-11.446 0-.175-.004-.348-.012-.52A8.259 8.259 0 0 0 22 5.886a8.319 8.319 0 0 1-2.356.633 4.052 4.052 0 0 0 1.804-2.225c-.793.46-1.67.796-2.606.976A4.138 4.138 0 0 0 15.847 4c-2.266 0-4.104 1.802-4.104 4.023 0 .315.036.622.107.917a11.728 11.728 0 0 1-8.458-4.203 3.949 3.949 0 0 0-.556 2.022 4 4 0 0 0 1.826 3.348 4.136 4.136 0 0 1-1.858-.503l-.001.051c0 1.949 1.415 3.575 3.292 3.944a4.193 4.193 0 0 1-1.853.07c.522 1.597 2.037 2.76 3.833 2.793a8.34 8.34 0 0 1-5.096 1.722A8.51 8.51 0 0 1 2 18.13a11.785 11.785 0 0 0 6.29 1.807"></path></svg></a></li><li role="presentation" class="ipc-inline-list__item"><a href="/whitelist-offsite?url=https%3A%2F%2Fyoutube.com%2Fimdb%2F&amp;page-action=fol_yt&amp;ref=ft_fol_yt" role="button" aria-label="YouTube" tabindex="0" title="YouTube" target="_blank" rel="nofollow" class="ipc-icon-link ipc-icon-link--external ipc-icon-link--baseAlt ipc-icon-link--onBase"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--youtube" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M9.955 14.955v-5.91L15.182 12l-5.227 2.955zm11.627-7.769a2.505 2.505 0 0 0-1.768-1.768C18.254 5 12 5 12 5s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 8.746 2 12 2 12s0 3.254.418 4.814c.23.86.908 1.538 1.768 1.768C5.746 19 12 19 12 19s6.254 0 7.814-.418a2.505 2.505 0 0 0 1.768-1.768C22 15.254 22 12 22 12s0-3.254-.418-4.814z"></path></svg></a></li></ul></div><div><ul class="ipc-inline-list _1O3-k0VDASm1IeBrfofV4g" role="presentation"><li role="presentation" class="ipc-inline-list__item zgFV3U-XECrqVQnyDbx2B"><a href="/whitelist-offsite?url=https%3A%2F%2Ftqp-4.tlnk.io%2Fserve%3Faction%3Dclick%26campaign_id_android%3D427112%26campaign_id_ios%3D427111%26destination_id_android%3D464200%26destination_id_ios%3D464199%26my_campaign%3Dmdot%2520sitewide%2520footer%2520%26my_site%3Dm.imdb.com%26publisher_id%3D350552%26site_id_android%3D133429%26site_id_ios%3D133428&amp;page-action=ft-gettheapp&amp;ref=ft_apps" target="_blank" class="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color ipc-link--launch">Get the IMDb App<svg class="ipc-link__launch-icon" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g><path d="M9,9 L1,9 L1,1 L4,1 L4,0 L-1.42108547e-14,0 L-1.42108547e-14,10 L10,10 L10,6 L9,6 L9,9 Z M6,0 L6,1 L8,1 L2.998122,6.03786058 L3.998122,7.03786058 L9,2 L9,4 L10,4 L10,0 L6,0 Z"></path></g></svg></a></li><li role="presentation" class="ipc-inline-list__item X17C45Q1MH_7XboLL_EEG"><a href="?mode=desktop&amp;ref_=m_ft_dsk" class="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color">View Full Site</a></li><li role="presentation" class="ipc-inline-list__item"><a href="https://help.imdb.com/imdb?ref_=ft_hlp" target="_blank" class="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color ipc-link--launch">Help<svg class="ipc-link__launch-icon" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g><path d="M9,9 L1,9 L1,1 L4,1 L4,0 L-1.42108547e-14,0 L-1.42108547e-14,10 L10,10 L10,6 L9,6 L9,9 Z M6,0 L6,1 L8,1 L2.998122,6.03786058 L3.998122,7.03786058 L9,2 L9,4 L10,4 L10,0 L6,0 Z"></path></g></svg></a></li><li role="presentation" class="ipc-inline-list__item"><a href="https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ?ref_=ft_si#so" target="_blank" class="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color ipc-link--launch">Site Index<svg class="ipc-link__launch-icon" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g><path d="M9,9 L1,9 L1,1 L4,1 L4,0 L-1.42108547e-14,0 L-1.42108547e-14,10 L10,10 L10,6 L9,6 L9,9 Z M6,0 L6,1 L8,1 L2.998122,6.03786058 L3.998122,7.03786058 L9,2 L9,4 L10,4 L10,0 L6,0 Z"></path></g></svg></a></li><li role="presentation" class="ipc-inline-list__item"><a href="https://pro.imdb.com?ref_=ft_pro&amp;rf=cons_tf_pro" target="_blank" class="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color ipc-link--launch">IMDbPro<svg class="ipc-link__launch-icon" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g><path d="M9,9 L1,9 L1,1 L4,1 L4,0 L-1.42108547e-14,0 L-1.42108547e-14,10 L10,10 L10,6 L9,6 L9,9 Z M6,0 L6,1 L8,1 L2.998122,6.03786058 L3.998122,7.03786058 L9,2 L9,4 L10,4 L10,0 L6,0 Z"></path></g></svg></a></li><li role="presentation" class="ipc-inline-list__item"><a href="https://www.boxofficemojo.com" target="_blank" class="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color ipc-link--launch">Box Office Mojo<svg class="ipc-link__launch-icon" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g><path d="M9,9 L1,9 L1,1 L4,1 L4,0 L-1.42108547e-14,0 L-1.42108547e-14,10 L10,10 L10,6 L9,6 L9,9 Z M6,0 L6,1 L8,1 L2.998122,6.03786058 L3.998122,7.03786058 L9,2 L9,4 L10,4 L10,0 L6,0 Z"></path></g></svg></a></li><li role="presentation" class="ipc-inline-list__item"><a href="https://www.imdb.com/pressroom/?ref_=ft_pr" class="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color">Press Room</a></li><li role="presentation" class="ipc-inline-list__item"><a href="https://advertising.amazon.com/products/display-ads" target="_blank" class="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color ipc-link--launch">Advertising<svg class="ipc-link__launch-icon" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g><path d="M9,9 L1,9 L1,1 L4,1 L4,0 L-1.42108547e-14,0 L-1.42108547e-14,10 L10,10 L10,6 L9,6 L9,9 Z M6,0 L6,1 L8,1 L2.998122,6.03786058 L3.998122,7.03786058 L9,2 L9,4 L10,4 L10,0 L6,0 Z"></path></g></svg></a></li></ul></div><div><ul class="ipc-inline-list _1O3-k0VDASm1IeBrfofV4g" role="presentation"><li role="presentation" class="ipc-inline-list__item"><a href="https://www.amazon.jobs/en/teams/imdb?ref_=ft_jb" target="_blank" class="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color ipc-link--launch">Jobs<svg class="ipc-link__launch-icon" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g><path d="M9,9 L1,9 L1,1 L4,1 L4,0 L-1.42108547e-14,0 L-1.42108547e-14,10 L10,10 L10,6 L9,6 L9,9 Z M6,0 L6,1 L8,1 L2.998122,6.03786058 L3.998122,7.03786058 L9,2 L9,4 L10,4 L10,0 L6,0 Z"></path></g></svg></a></li><li role="presentation" class="ipc-inline-list__item"><a href="/conditions?ref_=ft_cou" class="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color">Conditions of Use</a></li><li role="presentation" class="ipc-inline-list__item"><a href="/privacy?ref_=ft_pvc" class="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color">Privacy Policy</a></li><li role="presentation" class="ipc-inline-list__item"><a href="/whitelist-offsite?url=https%3A%2F%2Fwww.amazon.com%2Fb%2F%3F%26node%3D5160028011%26ref_%3Dft_iba&amp;page-action=ft-iba&amp;ref=ft_iba" target="_blank" class="ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color ipc-link--launch">Interest-Based Ads<svg class="ipc-link__launch-icon" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g><path d="M9,9 L1,9 L1,1 L4,1 L4,0 L-1.42108547e-14,0 L-1.42108547e-14,10 L10,10 L10,6 L9,6 L9,9 Z M6,0 L6,1 L8,1 L2.998122,6.03786058 L3.998122,7.03786058 L9,2 L9,4 L10,4 L10,0 L6,0 Z"></path></g></svg></a></li></ul></div></div><div class="imdb-footer__logo _1eKbSAFyeJgUyBUy2VbcS_"><svg aria-label="IMDb, an Amazon company" title="IMDb, an Amazon company" width="160" height="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M26.707 2.45c-3.227 2.374-7.906 3.637-11.935 3.637C9.125 6.087 4.04 4.006.193.542-.11.27.161-.101.523.109 4.675 2.517 9.81 3.968 15.111 3.968c3.577 0 7.51-.74 11.127-2.27.546-.23 1.003.358.47.752z" id="ftr__a"/><path d="M4.113 1.677C3.7 1.15 1.385 1.427.344 1.552c-.315.037-.364-.237-.08-.436C2.112-.178 5.138.196 5.49.629c.354.437-.093 3.462-1.824 4.906-.266.222-.52.104-.401-.19.39-.97 1.261-3.14.848-3.668z" id="ftr__c"/><path d="M.435 1.805V.548A.311.311 0 0 1 .755.23l5.65-.001c.181 0 .326.13.326.317v1.078c-.002.181-.154.417-.425.791L3.378 6.582c1.087-.026 2.236.137 3.224.69.222.125.282.309.3.49v1.342c0 .185-.203.398-.417.287-1.74-.908-4.047-1.008-5.97.011-.197.104-.403-.107-.403-.292V7.835c0-.204.004-.552.21-.863l3.392-4.85H.761a.314.314 0 0 1-.326-.317z" id="ftr__e"/><path d="M2.247 9.655H.528a.323.323 0 0 1-.307-.29L.222.569C.222.393.37.253.554.253h1.601a.323.323 0 0 1 .313.295v1.148h.031C2.917.586 3.703.067 4.762.067c1.075 0 1.75.518 2.23 1.629C7.41.586 8.358.067 9.369.067c.722 0 1.508.296 1.99.963.545.74.433 1.813.433 2.757l-.002 5.551a.324.324 0 0 1-.331.317H9.74a.321.321 0 0 1-.308-.316l-.001-4.663c0-.37.032-1.296-.048-1.647-.128-.593-.514-.76-1.011-.76-.418 0-.85.278-1.027.722-.177.445-.161 1.185-.161 1.685v4.662a.323.323 0 0 1-.331.317H5.137a.322.322 0 0 1-.31-.316l-.001-4.663c0-.981.16-2.424-1.059-2.424-1.236 0-1.188 1.406-1.188 2.424v4.662a.324.324 0 0 1-.332.317z" id="ftr__g"/><path d="M4.037.067c2.551 0 3.931 2.184 3.931 4.96 0 2.684-1.524 4.814-3.931 4.814C1.533 9.84.169 7.656.169 4.935.17 2.195 1.55.067 4.037.067zm.015 1.796c-1.267 0-1.347 1.721-1.347 2.795 0 1.073-.016 3.368 1.332 3.368 1.332 0 1.395-1.851 1.395-2.98 0-.74-.031-1.629-.256-2.332-.193-.61-.578-.851-1.124-.851z" id="ftr__i"/><path d="M2.206 9.655H.493a.321.321 0 0 1-.308-.316L.182.54a.325.325 0 0 1 .33-.287h1.595c.15.007.274.109.305.245v1.346h.033C2.926.641 3.6.067 4.788.067c.77 0 1.524.277 2.006 1.037.449.703.449 1.887.449 2.739v5.535a.325.325 0 0 1-.33.277H5.19a.324.324 0 0 1-.306-.277V4.602c0-.962.113-2.37-1.075-2.37-.418 0-.803.278-.995.704-.24.537-.273 1.074-.273 1.666v4.736a.328.328 0 0 1-.335.317z" id="ftr__k"/><path d="M8.314 8.295c.11.156.134.341-.006.455-.35.294-.974.834-1.318 1.139l-.004-.004a.357.357 0 0 1-.406.04c-.571-.473-.673-.692-.986-1.142-.943.958-1.611 1.246-2.834 1.246-1.447 0-2.573-.89-2.573-2.672 0-1.39.756-2.337 1.833-2.8.933-.409 2.235-.483 3.233-.595V3.74c0-.409.032-.89-.209-1.243-.21-.315-.611-.445-.965-.445-.656 0-1.238.335-1.382 1.029-.03.154-.143.307-.298.315l-1.667-.18c-.14-.032-.297-.144-.256-.358C.859.842 2.684.234 4.32.234c.837 0 1.93.222 2.59.853.836.78.755 1.818.755 2.95v2.67c0 .804.335 1.155.65 1.588zM5.253 5.706v-.37c-1.244 0-2.557.265-2.557 1.724 0 .742.386 1.244 1.045 1.244.483 0 .917-.297 1.19-.78.338-.593.322-1.15.322-1.818z" id="ftr__m"/><path d="M8.203 8.295c.11.156.135.341-.005.455-.352.294-.976.834-1.319 1.139l-.004-.004a.356.356 0 0 1-.406.04c-.571-.473-.673-.692-.985-1.142-.944.958-1.613 1.246-2.835 1.246-1.447 0-2.573-.89-2.573-2.672 0-1.39.756-2.337 1.833-2.8.933-.409 2.236-.483 3.233-.595V3.74c0-.409.032-.89-.21-1.243-.208-.315-.61-.445-.964-.445-.656 0-1.239.335-1.382 1.029-.03.154-.142.307-.298.315l-1.666-.18C.48 3.184.324 3.072.365 2.858.748.842 2.573.234 4.209.234c.836 0 1.93.222 2.59.853.835.78.755 1.818.755 2.95v2.67c0 .804.335 1.155.649 1.588zM5.142 5.706v-.37c-1.243 0-2.557.265-2.557 1.724 0 .742.386 1.244 1.045 1.244.482 0 .917-.297 1.19-.78.338-.593.322-1.15.322-1.818z" id="ftr__o"/><path d="M2.935 10.148c-.88 0-1.583-.25-2.11-.75-.527-.501-.79-1.171-.79-2.011 0-.902.322-1.622.967-2.159.644-.538 1.511-.806 2.602-.806.694 0 1.475.104 2.342.315V3.513c0-.667-.151-1.136-.455-1.408-.304-.271-.821-.407-1.553-.407-.855 0-1.691.123-2.509.37-.285.087-.464.13-.539.13-.148 0-.223-.111-.223-.334v-.5c0-.16.025-.278.075-.352C.79.938.89.87 1.039.808c.383-.173.87-.312 1.459-.417A9.997 9.997 0 0 1 4.255.234c1.177 0 2.045.244 2.602.731.557.489.836 1.233.836 2.233v6.338c0 .247-.124.37-.372.37h-.798c-.236 0-.373-.117-.41-.351l-.093-.612c-.445.383-.939.68-1.477.89-.54.21-1.076.315-1.608.315zm.446-1.39c.41 0 .836-.08 1.282-.241.447-.16.874-.395 1.283-.704v-1.89a8.408 8.408 0 0 0-1.97-.241c-1.401 0-2.1.537-2.1 1.612 0 .47.13.831.39 1.084.26.254.632.38 1.115.38z" id="ftr__q"/><path d="M.467 9.907c-.248 0-.372-.124-.372-.37V.883C.095.635.219.51.467.51h.817c.125 0 .22.026.288.075.068.05.115.142.14.277l.111.686C3 .672 4.24.234 5.541.234c.904 0 1.592.238 2.063.713.471.476.707 1.165.707 2.066v6.524c0 .246-.124.37-.372.37H6.842c-.248 0-.372-.124-.372-.37V3.625c0-.655-.133-1.137-.4-1.445-.266-.31-.684-.464-1.254-.464-.979 0-1.94.315-2.881.946v6.875c0 .246-.125.37-.372.37H.467z" id="ftr__s"/><path d="M4.641 9.859c-1.462 0-2.58-.417-3.355-1.251C.51 7.774.124 6.566.124 4.985c0-1.569.4-2.783 1.2-3.641C2.121.486 3.252.055 4.714.055c.67 0 1.326.118 1.971.353.136.05.232.111.288.185.056.074.083.198.083.37v.501c0 .248-.08.37-.241.37-.062 0-.162-.018-.297-.055a5.488 5.488 0 0 0-1.544-.222c-1.04 0-1.79.262-2.248.787-.459.526-.688 1.362-.688 2.511v.241c0 1.124.232 1.949.697 2.474.465.525 1.198.788 2.203.788a5.98 5.98 0 0 0 1.672-.26c.136-.037.23-.056.279-.056.161 0 .242.124.242.371v.5c0 .162-.025.279-.075.353-.05.074-.148.142-.297.204-.608.259-1.314.389-2.119.389z" id="ftr__u"/><path d="M4.598 10.185c-1.413 0-2.516-.438-3.31-1.316C.497 7.992.1 6.769.1 5.199c0-1.555.397-2.773 1.19-3.65C2.082.673 3.185.235 4.598.235c1.412 0 2.515.438 3.308 1.316.793.876 1.19 2.094 1.19 3.65 0 1.569-.397 2.792-1.19 3.669-.793.878-1.896 1.316-3.308 1.316zm0-1.483c1.747 0 2.62-1.167 2.62-3.502 0-2.323-.873-3.484-2.62-3.484S1.977 2.877 1.977 5.2c0 2.335.874 3.502 2.62 3.502z" id="ftr__w"/><path d="M.396 9.907c-.248 0-.371-.124-.371-.37V.883C.025.635.148.51.396.51h.818a.49.49 0 0 1 .288.075c.068.05.115.142.14.277l.111.594C2.943.64 4.102.234 5.23.234c1.152 0 1.934.438 2.342 1.315C8.798.672 10.025.234 11.25.234c.856 0 1.512.24 1.971.722.458.482.688 1.168.688 2.057v6.524c0 .246-.124.37-.372.37h-1.097c-.248 0-.371-.124-.371-.37V3.533c0-.618-.119-1.075-.354-1.372-.235-.297-.607-.445-1.115-.445-.904 0-1.815.278-2.732.834.012.087.018.18.018.278v6.709c0 .246-.124.37-.372.37H6.42c-.249 0-.372-.124-.372-.37V3.533c0-.618-.118-1.075-.353-1.372-.235-.297-.608-.445-1.115-.445-.942 0-1.847.272-2.714.815v7.006c0 .246-.125.37-.372.37H.396z" id="ftr__y"/><path d="M.617 13.724c-.248 0-.371-.124-.371-.37V.882c0-.247.123-.37.371-.37h.818c.248 0 .39.123.428.37l.093.594C2.897.648 3.944.234 5.096.234c1.203 0 2.15.435 2.845 1.307.693.87 1.04 2.053 1.04 3.548 0 1.52-.365 2.736-1.096 3.65-.731.915-1.704 1.372-2.918 1.372-1.116 0-2.076-.365-2.881-1.094v4.337c0 .246-.125.37-.372.37H.617zM4.54 8.628c1.71 0 2.566-1.149 2.566-3.447 0-1.173-.208-2.044-.624-2.612-.415-.569-1.05-.853-1.904-.853-.88 0-1.711.284-2.491.853v5.17c.805.593 1.623.889 2.453.889z" id="ftr__A"/><path d="M2.971 10.148c-.88 0-1.583-.25-2.11-.75-.526-.501-.79-1.171-.79-2.011 0-.902.322-1.622.967-2.159.644-.538 1.512-.806 2.602-.806.694 0 1.475.104 2.342.315V3.513c0-.667-.15-1.136-.455-1.408-.304-.271-.821-.407-1.552-.407-.855 0-1.692.123-2.509.37-.285.087-.465.13-.54.13-.148 0-.223-.111-.223-.334v-.5c0-.16.025-.278.075-.352.05-.074.148-.142.297-.204.384-.173.87-.312 1.46-.417A9.991 9.991 0 0 1 4.29.234c1.177 0 2.045.244 2.603.731.557.489.836 1.233.836 2.233v6.338c0 .247-.125.37-.372.37h-.799c-.236 0-.372-.117-.41-.351l-.092-.612a5.09 5.09 0 0 1-1.478.89 4.4 4.4 0 0 1-1.608.315zm.446-1.39c.41 0 .836-.08 1.283-.241.446-.16.874-.395 1.282-.704v-1.89a8.403 8.403 0 0 0-1.97-.241c-1.4 0-2.1.537-2.1 1.612 0 .47.13.831.39 1.084.26.254.632.38 1.115.38z" id="ftr__C"/><path d="M.503 9.907c-.248 0-.371-.124-.371-.37V.883C.132.635.255.51.503.51h.818a.49.49 0 0 1 .288.075c.068.05.115.142.14.277l.111.686C3.037.672 4.277.234 5.578.234c.904 0 1.592.238 2.063.713.47.476.706 1.165.706 2.066v6.524c0 .246-.123.37-.371.37H6.879c-.248 0-.372-.124-.372-.37V3.625c0-.655-.133-1.137-.4-1.445-.266-.31-.684-.464-1.254-.464-.98 0-1.94.315-2.882.946v6.875c0 .246-.124.37-.371.37H.503z" id="ftr__E"/><path d="M1.988 13.443c-.397 0-.75-.043-1.059-.13-.15-.037-.251-.1-.307-.185a.684.684 0 0 1-.084-.37v-.483c0-.234.093-.352.28-.352.06 0 .154.013.278.037.124.025.291.037.502.037.459 0 .82-.114 1.087-.343.266-.228.505-.633.716-1.213l.353-.945L.167.675C.08.465.037.316.037.23c0-.149.086-.222.26-.222h1.115c.198 0 .334.03.409.093.075.062.148.197.223.407l2.602 7.19 2.51-7.19c.074-.21.148-.345.222-.407.075-.062.211-.093.41-.093h1.04c.174 0 .261.073.261.222 0 .086-.044.235-.13.445l-4.09 10.377c-.334.853-.725 1.464-1.17 1.835-.446.37-1.017.556-1.711.556z" id="ftr__G"/></defs><g fill="none" fill-rule="evenodd"><g transform="translate(31.496 11.553)"><mask id="ftr__b" fill="currentColor"><use xlink:href="#ftr__a"/></mask><path fill="currentColor" mask="url(#ftr__b)" d="M.04 6.088h26.91V.04H.04z"/></g><g transform="translate(55.433 10.797)"><mask id="ftr__d" fill="currentColor"><use xlink:href="#ftr__c"/></mask><path fill="currentColor" mask="url(#ftr__d)" d="M.05 5.664h5.564V.222H.05z"/></g><g transform="translate(55.433 .97)"><mask id="ftr__f" fill="currentColor"><use xlink:href="#ftr__e"/></mask><path fill="currentColor" mask="url(#ftr__f)" d="M.11 9.444h6.804V.222H.111z"/></g><g transform="translate(33.008 .97)"><mask id="ftr__h" fill="currentColor"><use xlink:href="#ftr__g"/></mask><path fill="currentColor" mask="url(#ftr__h)" d="M.191 9.655h11.611V.04H.192z"/></g><g transform="translate(62.992 .97)"><mask id="ftr__j" fill="currentColor"><use xlink:href="#ftr__i"/></mask><path fill="currentColor" mask="url(#ftr__j)" d="M.141 9.867h7.831V.04H.142z"/></g><g transform="translate(72.063 .97)"><mask id="ftr__l" fill="currentColor"><use xlink:href="#ftr__k"/></mask><path fill="currentColor" mask="url(#ftr__l)" d="M.171 9.655h7.076V.04H.17z"/></g><g transform="translate(46.11 .718)"><mask id="ftr__n" fill="currentColor"><use xlink:href="#ftr__m"/></mask><path fill="currentColor" mask="url(#ftr__n)" d="M.181 10.059h8.225V.232H.18z"/></g><g transform="translate(23.685 .718)"><mask id="ftr__p" fill="currentColor"><use xlink:href="#ftr__o"/></mask><path fill="currentColor" mask="url(#ftr__p)" d="M.05 10.059h8.255V.232H.05z"/></g><g transform="translate(0 .718)"><mask id="ftr__r" fill="currentColor"><use xlink:href="#ftr__q"/></mask><path fill="currentColor" mask="url(#ftr__r)" d="M.03 10.15h7.68V.231H.03z"/></g><g transform="translate(10.33 .718)"><mask id="ftr__t" fill="currentColor"><use xlink:href="#ftr__s"/></mask><path fill="currentColor" mask="url(#ftr__t)" d="M.07 9.907h8.255V.232H.071z"/></g><g transform="translate(84.157 .97)"><mask id="ftr__v" fill="currentColor"><use xlink:href="#ftr__u"/></mask><path fill="currentColor" mask="url(#ftr__v)" d="M.11 9.867h7.046V.04H.11z"/></g><g transform="translate(92.472 .718)"><mask id="ftr__x" fill="currentColor"><use xlink:href="#ftr__w"/></mask><path fill="currentColor" mask="url(#ftr__x)" d="M.08 10.21h9.041V.232H.081z"/></g><g transform="translate(103.811 .718)"><mask id="ftr__z" fill="currentColor"><use xlink:href="#ftr__y"/></mask><path fill="currentColor" mask="url(#ftr__z)" d="M.02 9.907H13.93V.232H.02z"/></g><g transform="translate(120.189 .718)"><mask id="ftr__B" fill="currentColor"><use xlink:href="#ftr__A"/></mask><path fill="currentColor" mask="url(#ftr__B)" d="M.242 13.747H9.01V.232H.242z"/></g><g transform="translate(130.772 .718)"><mask id="ftr__D" fill="currentColor"><use xlink:href="#ftr__C"/></mask><path fill="currentColor" mask="url(#ftr__D)" d="M.06 10.15h7.68V.231H.06z"/></g><g transform="translate(141.102 .718)"><mask id="ftr__F" fill="currentColor"><use xlink:href="#ftr__E"/></mask><path fill="currentColor" mask="url(#ftr__F)" d="M.131 9.907h8.224V.232H.131z"/></g><g transform="translate(150.677 1.222)"><mask id="ftr__H" fill="currentColor"><use xlink:href="#ftr__G"/></mask><path fill="currentColor" mask="url(#ftr__H)" d="M.02 13.455h9.071V0H.021z"/></g></g></svg></div><p class="imdb-footer__copyright _2-iNNCFskmr4l2OFN2DRsf">© 1990-<!-- -->2020<!-- --> by IMDb.com, Inc.</p></div></footer><svg style="width:0;height:0;overflow:hidden;display:block" xmlns="http://www.w3.org/2000/svg" version="1.1"><defs><linearGradient id="ipc-svg-gradient-tv-logo-t" x1="31.973%" y1="53.409%" x2="153.413%" y2="-16.853%"><stop stop-color="#D01F49" offset="21.89%"></stop><stop stop-color="#E8138B" offset="83.44%"></stop></linearGradient><linearGradient id="ipc-svg-gradient-tv-logo-v" x1="-38.521%" y1="84.997%" x2="104.155%" y2="14.735%"><stop stop-color="#D01F49" offset="21.89%"></stop><stop stop-color="#E8138B" offset="83.44%"></stop></linearGradient></defs></svg>
    </div>
<script type="text/javascript">
    if (!window.RadWidget) {
        window.RadWidget = {
            registerReactWidgetInstance: function(input) {
                window.RadWidget[input.widgetName] = window.RadWidget[input.widgetName] || [];
                window.RadWidget[input.widgetName].push({
                    id: input.instanceId,
                    props: JSON.stringify(input.model)
                })
            },
            getReactWidgetInstances: function(widgetName) {
                return window.RadWidget[widgetName] || []
            }
        };
    }
</script>    <script type="text/javascript">
        window['RadWidget'].registerReactWidgetInstance({
            widgetName: "IMDbConsumerSiteFooterFeatureV1",
            instanceId: "c59db4e8-c3b3-4e9b-988d-bc886976bac7",
            model: {"ResponsiveFooterModel":{"showIMDbTVLink":false,"desktopLink":"?mode=desktop&ref_=m_ft_dsk"}}
        });
    </script>
<script>
    if (typeof uet == 'function') {
      uet("be", "desktopFooter", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "desktopFooter", {wb: 1});
    }
</script>

<script>
    if (typeof uet == 'function') {
      uet("bb", "LoadHeaderJS", {wb: 1});
    }
</script>
            <script type="text/javascript">
                window.IMDbReactInitialState=window.IMDbReactInitialState||[];
                window.IMDbReactInitialState.push({'user': {'id': 'ur112747879'}});
            </script>

<script type="text/javascript" src="https://m.media-amazon.com/images/G/01/imdb/js/collections/common-858210017._CB450536991_.js"></script>
<script type="text/javascript" src="https://m.media-amazon.com/images/G/01/imdb/js/collections/jquery-185131483._CB447141647_.js"></script>
<script type="text/javascript" src="https://m.media-amazon.com/images/G/01/imdb/js/collections/consumersite-955418287._CB422649394_.js"></script>


<script type="text/javascript" src="https://m.media-amazon.com/images/G/01/imdb/js/collections/other-1157937439._CB423019938_.js"></script>
<script type="text/javascript" src="https://m.media-amazon.com/images/G/01/imdb/js/collections/starbarwidget-1888862031._CB423079965_.js"></script>
<script type="text/javascript" src="https://m.media-amazon.com/images/G/01/imdb/js/collections/watchlistButton-1817690010._CB448978296_.js"></script>

            <script type="text/javascript">
            function jQueryOnReady(remaining_count) {
                if (window.jQuery && typeof $.fn.watchlistRibbon !== 'undefined') {
                    jQuery(
                            function() {
        // Init the watchlist rendering
        $("a.wlb_watchlist_lite").wlb_lite();
        $(".lister").watchlistRibbon(".ribbonize");
        
        // Invoke the rating animation
        $(".lister-item").rating_animation();
        
        // TODO: we should have a method to populate all formated query params avaiable from mavAdvancedSearchForm
        // the sort param is required by CloudSearch, need to pass it if the current query link does not have it
        var queryString = window.location.search;
        // replaced the user sort inputs with sanitized sort ones
        var sortPattern = /[\\?&]sort=[^&#]*/g;
        queryString = queryString.replace(sortPattern, "");
        var sortQuery = 'moviemeter,asc';
        if (queryString.length == 0) {
            queryString = queryString + "?sort=" + sortQuery;
        } else {
            queryString = queryString + "&sort=" + sortQuery;
        }
        // ShowtimesDate is a hidden value from the 1st load, populate it here
        
        // lister initialization, returns an instance user for the faceter
        var listerInst = $('.lister').lister({
            externalCallbacks : [window.imdb.CS.filmosearchUpdate],
            initialMode : 'detail',
            initialPage : 1,
            initialParams : queryString,
            viewMoreOption : 'PAGINATE',
            ajaxRequestURL: ''
        });
        
        // Init faceter
        $(".faceter").faceter({
            Lister : listerInst.data('lister'),
            explore: "keywords"
        });
        
        if ($('.lister-item.mode-grid').length) {
            // if grid mode, initialize the popouts
            $('.lister-item.mode-grid > .lister-item-image').smartPopout({
                containerSelector : '.lister',
                popoutSelector : '.lister-item-content',
                triangleAltitude : 9, // triangle altitude in px
                triangleBaseLength : 24 // triangle base length in px
            });
        }
     }

                    );
                } else if (remaining_count > 0) {
                    setTimeout(function() { jQueryOnReady(remaining_count-1) }, 100);
                }
            }
            jQueryOnReady(50);
            </script>


<script type="text/javascript">window.webpackManifest_IMDbConsumerSiteNavFeature={}</script><script type="text/javascript">window.webpackManifest_IMDbConsumerSiteFooterFeature={}</script><script crossorigin="anonymous" type="text/javascript" src="https://m.media-amazon.com/images/I/61SeeyqsNHL.js"></script><script crossorigin="anonymous" type="text/javascript" src="https://m.media-amazon.com/images/I/81S6m3Vm+-L.js"></script><script crossorigin="anonymous" type="text/javascript" src="https://m.media-amazon.com/images/I/61-PIyIGyUL.js"></script><script crossorigin="anonymous" type="text/javascript" src="https://m.media-amazon.com/images/I/31827uXCh4L.js"></script><script crossorigin="anonymous" type="text/javascript" src="https://m.media-amazon.com/images/I/317ZcIHzftL.js"></script><script crossorigin="anonymous" type="text/javascript" src="https://m.media-amazon.com/images/I/41YE2iK3GnL.js"></script><script crossorigin="anonymous" type="text/javascript" src="https://m.media-amazon.com/images/I/51GDom0+d0L.js"></script><script crossorigin="anonymous" type="text/javascript" src="https://m.media-amazon.com/images/I/01ZyMmZoX7L.js"></script><script crossorigin="anonymous" type="text/javascript" src="https://m.media-amazon.com/images/I/61Ka2ezTX9L.js"></script><script crossorigin="anonymous" type="text/javascript" src="https://m.media-amazon.com/images/I/019vMGkrlkL.js"></script><script crossorigin="anonymous" type="text/javascript" src="https://m.media-amazon.com/images/I/11UNuUz7BzL.js"></script><script crossorigin="anonymous" type="text/javascript" src="https://m.media-amazon.com/images/I/21QhnrxvhtL.js"></script><script crossorigin="anonymous" type="text/javascript" src="https://m.media-amazon.com/images/I/01EjywnajPL.js"></script><script crossorigin="anonymous" type="text/javascript" src="https://m.media-amazon.com/images/I/01eEXY1YetL.js"></script><script crossorigin="anonymous" type="text/javascript" src="https://m.media-amazon.com/images/I/21n5fdlWBhL.js"></script><script crossorigin="anonymous" type="text/javascript" src="https://m.media-amazon.com/images/I/21a9eB+eAFL.js"></script><script crossorigin="anonymous" type="text/javascript" src="https://m.media-amazon.com/images/I/01X4+ME2ObL.js"></script><script crossorigin="anonymous" type="text/javascript" src="https://m.media-amazon.com/images/I/61VxP1iEAJL.js"></script><script crossorigin="anonymous" type="text/javascript" src="https://m.media-amazon.com/images/I/81AwSfXW9YL.js"></script><script crossorigin="anonymous" type="text/javascript" src="https://m.media-amazon.com/images/I/313VVU76AiL.js"></script><script crossorigin="anonymous" type="text/javascript" src="https://m.media-amazon.com/images/I/01lfk7y+8rL.js"></script><script crossorigin="anonymous" type="text/javascript" src="https://m.media-amazon.com/images/I/31VYLn8dVDL.js"></script><script crossorigin="anonymous" type="text/javascript" src="https://m.media-amazon.com/images/I/01qhBQyMr+L.js"></script><script crossorigin="anonymous" type="text/javascript" src="https://m.media-amazon.com/images/I/41w5hWaO+JL.js"></script>
<script>
    if (typeof uet == 'function') {
      uet("be", "LoadFooterJS", {wb: 1});
    }
</script>
<script>
    if (typeof uex == 'function') {
      uex("ld", "LoadFooterJS", {wb: 1});
    }
</script>
        <!-- begin ads footer -->
<!-- end ads footer -->

        <div id="servertime" time="424"/>



<script>
    if (typeof uet == 'function') {
      uet("be");
    }
</script>
        <div id='be' style="display:none;visibility:hidden;"><form name='ue_backdetect' action="get"><input type="hidden" name='ue_back' value='1' /></form>


<script type="text/javascript">
window.ue_ibe = (window.ue_ibe || 0) + 1;
if (window.ue_ibe === 1) {

(function(e,c){function h(b,a){f.push([b,a])}function g(b,a){if(b){var c=e.head||e.getElementsByTagName("head")[0]||e.documentElement,d=e.createElement("script");d.async="async";d.src=b;d.setAttribute("crossorigin","anonymous");a&&a.onerror&&(d.onerror=a.onerror);a&&a.onload&&(d.onload=a.onload);c.insertBefore(d,c.firstChild)}}function k(){ue.uels=g;for(var b=0;b<f.length;b++){var a=f[b];g(a[0],a[1])}ue.deffered=1}var f=[];c.ue&&(ue.uels=h,c.ue.attach&&c.ue.attach("load",k))})(document,window);


if (window.ue && window.ue.uels) {
        var cel_widgets = [ { "c":"celwidget" },{ "s":"#nav-swmslot > div", "id_gen":function(elem, index){ return 'nav_sitewide_msg'; } } ];

                ue.uels("https://images-na.ssl-images-amazon.com/images/I/31BVuidgT8L.js");
}
var ue_mbl=ue_csm.ue.exec(function(e,a){function l(f){b=f||{};a.AMZNPerformance=b;b.transition=b.transition||{};b.timing=b.timing||{};e.ue.exec(m,"csm-android-check")()&&b.tags instanceof Array&&(f=-1!=b.tags.indexOf("usesAppStartTime")||b.transition.type?!b.transition.type&&-1<b.tags.indexOf("usesAppStartTime")?"warm-start":void 0:"view-transition",f&&(b.transition.type=f));"reload"===c._nt&&e.ue_orct||"intrapage-transition"===c._nt?a.performance&&performance.timing&&performance.timing.navigationStart?
b.timing.transitionStart=a.performance.timing.navigationStart:delete b.timing.transitionStart:"undefined"===typeof c._nt&&a.performance&&performance.timing&&performance.timing.navigationStart&&a.history&&"function"===typeof a.History&&"object"===typeof a.history&&history.length&&1!=history.length&&(b.timing.transitionStart=a.performance.timing.navigationStart);f=b.transition;var d;d=c._nt?c._nt:void 0;f.subType=d;a.ue&&a.ue.tag&&a.ue.tag("has-AMZNPerformance");c.isl&&a.uex&&uex("at","csm-timing");
n()}function p(b){a.ue&&a.ue.count&&a.ue.count("csm-cordova-plugin-failed",1)}function m(){return a.webclient&&"function"===typeof a.webclient.getRealClickTime?a.cordova&&a.cordova.platformId&&"ios"==a.cordova.platformId?!1:!0:!1}function n(){try{P.register("AMZNPerformance",function(){return b})}catch(a){}}function h(){if(!b)return"";ue_mbl.cnt=null;for(var a=b.timing,d=b.transition,a=["mts",k(a.transitionStart),"mps",k(a.processStart),"mtt",d.type,"mtst",d.subType,"mtlt",d.launchType],d="",c=0;c<
a.length;c+=2){var e=a[c],g=a[c+1];"undefined"!==typeof g&&(d+="&"+e+"="+g)}return d}function k(a){if("undefined"!==typeof a&&"undefined"!==typeof g)return a-g}function q(a,c){b&&(g=c,b.timing.transitionStart=a,b.transition.type="view-transition",b.transition.subType="ajax-transition",b.transition.launchType="normal",ue_mbl.cnt=h)}var c=e.ue||{},g=e.ue_t0,b;if(a.P&&a.P.when&&a.P.register)return a.P.when("CSMPlugin").execute(function(a){a.buildAMZNPerformance&&a.buildAMZNPerformance({successCallback:l,
failCallback:p})}),{cnt:h,ajax:q}},"mobile-timing")(ue_csm,window);

(function(d){d._uess=function(){var a="";screen&&screen.width&&screen.height&&(a+="&sw="+screen.width+"&sh="+screen.height);var b=function(a){var b=document.documentElement["client"+a];return"CSS1Compat"===document.compatMode&&b||document.body["client"+a]||b},c=b("Width"),b=b("Height");c&&b&&(a+="&vw="+c+"&vh="+b);return a}})(ue_csm);

(function(a){var b=document.ue_backdetect;b&&b.ue_back&&a.ue&&(a.ue.bfini=b.ue_back.value);a.uet&&a.uet("be");a.onLdEnd&&(window.addEventListener?window.addEventListener("load",a.onLdEnd,!1):window.attachEvent&&window.attachEvent("onload",a.onLdEnd));a.ueh&&a.ueh(0,window,"load",a.onLd,1);a.ue&&a.ue.tag&&(a.ue_furl?(b=a.ue_furl.replace(/\./g,"-"),a.ue.tag(b)):a.ue.tag("nofls"))})(ue_csm);

(function(g,h){function d(a,d){var b={};if(!e||!f)try{var c=h.sessionStorage;c?a&&("undefined"!==typeof d?c.setItem(a,d):b.val=c.getItem(a)):f=1}catch(g){e=1}e&&(b.e=1);return b}var b=g.ue||{},a="",f,e,c,a=d("csmtid");f?a="NA":a.e?a="ET":(a=a.val,a||(a=b.oid||"NI",d("csmtid",a)),c=d(b.oid),c.e||(c.val=c.val||0,d(b.oid,c.val+1)),b.ssw=d);b.tabid=a})(ue_csm,window);
ue_csm.ue.exec(function(e,f){var a=e.ue||{},b=a._wlo,d;if(a.ssw){d=a.ssw("CSM_previousURL").val;var c=f.location,b=b?b:c&&c.href?c.href.split("#")[0]:void 0;c=(b||"")===a.ssw("CSM_previousURL").val;!c&&b&&a.ssw("CSM_previousURL",b);d=c?"reload":d?"intrapage-transition":"first-view"}else d="unknown";a._nt=d},"NavTypeModule")(ue_csm,window);
ue_csm.ue.exec(function(c,a){function g(a){a.run(function(e){d.tag("csm-feature-"+a.name+":"+e);d.isl&&c.uex("at")})}if(a.addEventListener)for(var d=c.ue||{},f=[{name:"touch-enabled",run:function(b){var e=function(){a.removeEventListener("touchstart",c,!0);a.removeEventListener("mousemove",d,!0)},c=function(){b("true");e()},d=function(){b("false");e()};a.addEventListener("touchstart",c,!0);a.addEventListener("mousemove",d,!0)}}],b=0;b<f.length;b++)g(f[b])},"csm-features")(ue_csm,window);


(function(b,c){var a=c.images;a&&a.length&&b.ue.count("totalImages",a.length)})(ue_csm,document);
(function(b){function c(){var d=[];a.log&&a.log.isStub&&a.log.replay(function(a){e(d,a)});a.clog&&a.clog.isStub&&a.clog.replay(function(a){e(d,a)});d.length&&(a._flhs+=1,n(d),p(d))}function g(){a.log&&a.log.isStub&&(a.onflush&&a.onflush.replay&&a.onflush.replay(function(a){a[0]()}),a.onunload&&a.onunload.replay&&a.onunload.replay(function(a){a[0]()}),c())}function e(d,b){var c=b[1],f=b[0],e={};a._lpn[c]=(a._lpn[c]||0)+1;e[c]=f;d.push(e)}function n(b){q&&(a._lpn.csm=(a._lpn.csm||0)+1,b.push({csm:{k:"chk",
f:a._flhs,l:a._lpn,s:"inln"}}))}function p(a){if(h)a=k(a),b.navigator.sendBeacon(l,a);else{a=k(a);var c=new b[f];c.open("POST",l,!0);c.setRequestHeader&&c.setRequestHeader("Content-type","text/plain");c.send(a)}}function k(a){return JSON.stringify({rid:b.ue_id,sid:b.ue_sid,mid:b.ue_mid,mkt:b.ue_mkt,sn:b.ue_sn,reqs:a})}var f="XMLHttpRequest",q=1===b.ue_ddq,a=b.ue,r=b[f]&&"withCredentials"in new b[f],h=b.navigator&&b.navigator.sendBeacon,l="//"+b.ue_furl+"/1/batch/1/OE/",m=b.ue_fci_ft||5E3;a&&(r||h)&&
(a._flhs=a._flhs||0,a._lpn=a._lpn||{},a.attach&&(a.attach("beforeunload",g),a.attach("pagehide",g)),m&&b.setTimeout(c,m),a._ffci=c)})(window);


(function(k,c){function l(a,b){return a.filter(function(a){return a.initiatorType==b})}function f(a,c){if(b.t[a]){var g=b.t[a]-b._t0,e=c.filter(function(a){return 0!==a.responseEnd&&m(a)<g}),f=l(e,"script"),h=l(e,"link"),k=l(e,"img"),n=e.map(function(a){return a.name.split("/")[2]}).filter(function(a,b,c){return a&&c.lastIndexOf(a)==b}),q=e.filter(function(a){return a.duration<p}),s=g-Math.max.apply(null,e.map(m))<r|0;"af"==a&&(b._afjs=f.length);return a+":"+[e[d],f[d],h[d],k[d],n[d],q[d],s].join("-")}}
function m(a){return a.responseEnd-(b._t0-c.timing.navigationStart)}function n(){var a=c[h]("resource"),d=f("cf",a),g=f("af",a),a=f("ld",a);delete b._rt;b._ld=b.t.ld-b._t0;b._art&&b._art();return[d,g,a].join("_")}var p=20,r=50,d="length",b=k.ue,h="getEntriesByType";b._rre=m;b._rt=c&&c.timing&&c[h]&&n})(ue_csm,window.performance);


(function(c,d){var b=c.ue,a=d.navigator;b&&b.tag&&a&&(a=a.connection||a.mozConnection||a.webkitConnection)&&a.type&&b.tag("netInfo:"+a.type)})(ue_csm,window);


(function(c,d){function h(a,b){for(var c=[],d=0;d<a.length;d++){var e=a[d],f=b.encode(e);if(e[k]){var g=b.metaSep,e=e[k],l=b.metaPairSep,h=[],m=void 0;for(m in e)e.hasOwnProperty(m)&&h.push(m+"="+e[m]);e=h.join(l);f+=g+e}c.push(f)}return c.join(b.resourceSep)}function s(a){var b=a[k]=a[k]||{};b[t]||(b[t]=c.ue_mid);b[u]||(b[u]=c.ue_sid);b[f]||(b[f]=c.ue_id);b.csm=1;a="//"+c.ue_furl+"/1/"+a[v]+"/1/OP/"+a[w]+"/"+a[x]+"/"+h([a],y);if(n)try{n.call(d[p],a)}catch(g){c.ue.sbf=1,(new Image).src=a}else(new Image).src=
a}function q(){g&&g.isStub&&g.replay(function(a,b,c){a=a[0];b=a[k]=a[k]||{};b[f]=b[f]||c;s(a)});l.impression=s;g=null}if(!(1<c.ueinit)){var k="metadata",x="impressionType",v="foresterChannel",w="programGroup",t="marketplaceId",u="session",f="requestId",p="navigator",l=c.ue||{},n=d[p]&&d[p].sendBeacon,r=function(a,b,c,d){return{encode:d,resourceSep:a,metaSep:b,metaPairSep:c}},y=r("","?","&",function(a){return h(a.impressionData,z)}),z=r("/",":",",",function(a){return a.featureName+":"+h(a.resources,
A)}),A=r(",","@","|",function(a){return a.id}),g=l.impression;n?q():(l.attach("load",q),l.attach("beforeunload",q));try{d.P&&d.P.register&&d.P.register("impression-client",function(){})}catch(B){c.ueLogError(B,{logLevel:"WARN"})}}})(ue_csm,window);



var ue_pty = "search";

var ue_spty = "keyword";



var ue_adb = 4;
var ue_adb_rtla = 1;
ue_csm.ue.exec(function(w,a){function q(){if(d&&f){var a;a:{try{a=d.getItem(g);break a}catch(c){}a=void 0}if(a)return b=a,!0}return!1}function r(){b=h;k();if(f)try{d.setItem(g,b)}catch(a){}}function s(){b=1===a.ue_adb_chk?l:h;k();if(f)try{d.setItem(g,b)}catch(c){}}function m(){a.ue_adb_rtla&&c&&0<c.ec&&!1===n&&(c.elh=null,ueLogError({m:"Hit Info",fromOnError:1},{logLevel:"INFO",adb:b}),n=!0)}function k(){e.tag(b);e.isl&&a.uex&&uex("at",b);p&&p.updateCsmHit("adb",b);c&&0<c.ec?m():a.ue_adb_rtla&&c&&
(c.elh=m)}function t(){return b}if(a.ue_adb){a.ue_fadb=a.ue_fadb||10;var e=a.ue,h="adblk_yes",l="adblk_no",b="adblk_unk",d;a:{try{d=a.localStorage;break a}catch(x){}d=void 0}var g="csm:adb",c=a.ue_err,p=e.cookie,f=void 0!==a.localStorage,u=Math.random()>1-1/a.ue_fadb,n=!1,v=q();u||!v?e.uels("https://m.media-amazon.com/images/G/01/csm/showads.v2.js",{onerror:r,onload:s}):k();a.ue_isAdb=t;a.ue_isAdb.unk="adblk_unk";a.ue_isAdb.no=l;a.ue_isAdb.yes=h}},"adb")(document,window);




(function(c,l,m){function h(a){if(a)try{if(a.id)return"//*[@id='"+a.id+"']";var b,d=1,e;for(e=a.previousSibling;e;e=e.previousSibling)e.nodeName===a.nodeName&&(d+=1);b=d;var c=a.nodeName;1!==b&&(c+="["+b+"]");a.parentNode&&(c=h(a.parentNode)+"/"+c);return c}catch(f){return"DETACHED"}}function f(a){if(a&&a.getAttribute)return a.getAttribute(k)?a.getAttribute(k):f(a.parentElement)}var k="data-cel-widget",g=!1,d=[];(c.ue||{}).isBF=function(){try{var a=JSON.parse(localStorage["csm-bf"]||"[]"),b=0<=a.indexOf(c.ue_id);
a.unshift(c.ue_id);a=a.slice(0,20);localStorage["csm-bf"]=JSON.stringify(a);return b}catch(d){return!1}}();c.ue_utils={getXPath:h,getFirstAscendingWidget:function(a,b){c.ue_cel&&c.ue_fem?!0===g?b(f(a)):d.push({element:a,callback:b}):b()},notifyWidgetsLabeled:function(){if(!1===g){g=!0;for(var a=f,b=0;b<d.length;b++)if(d[b].hasOwnProperty("callback")&&d[b].hasOwnProperty("element")){var c=d[b].callback,e=d[b].element;"function"===typeof c&&"function"===typeof a&&c(a(e))}d=null}},extractStringValue:function(a){if("string"===
typeof a)return a}}})(ue_csm,window,document);


(function(a,c){a.ue_cel||(a.ue_cel=function(){function h(a,b){b?b.r=y:b={r:y,c:1};!ue_csm.ue_sclog&&b.clog&&e.clog?e.clog(a,b.ns||n,b):b.glog&&e.glog?e.glog(a,b.ns||n,b):e.log(a,b.ns||n,b)}function l(){var a=b.length;if(0<a){for(var f=[],c=0;c<a;c++){var g=b[c].api;g.ready()?(g.on({ts:e.d,ns:n}),d.push(b[c]),h({k:"mso",n:b[c].name,t:e.d()})):f.push(b[c])}b=f}}function f(){if(!f.executed){for(var a=0;a<d.length;a++)d[a].api.off&&d[a].api.off({ts:e.d,ns:n});q();h({k:"eod",t0:e.t0,t:e.d()},{c:1,il:1});
f.executed=1;for(a=0;a<d.length;a++)b.push(d[a]);d=[];clearTimeout(t);clearTimeout(v)}}function q(a){h({k:"hrt",t:e.d()},{c:1,il:1,n:a});g=Math.min(k,r*g);z()}function z(){clearTimeout(v);v=setTimeout(function(){q(!0)},g)}function u(){f.executed||q()}var r=1.5,k=c.ue_cel_max_hrt||3E4,b=[],d=[],n=a.ue_cel_ns||"cel",t,v,e=a.ue,m=a.uet,w=a.uex,y=e.rid,g=c.ue_cel_hrt_int||3E3,s=c.requestAnimationFrame||function(a){a()};if(e.isBF)h({k:"bft",t:e.d()});else{"function"==typeof m&&m("bb","csmCELLSframework",
{wb:1});setTimeout(l,0);e.onunload(f);if(e.onflush)e.onflush(u);t=setTimeout(f,6E5);z();"function"==typeof w&&w("ld","csmCELLSframework",{wb:1});return{registerModule:function(a,c){b.push({name:a,api:c});h({k:"mrg",n:a,t:e.d()});l()},reset:function(a){h({k:"rst",t0:e.t0,t:e.d()});b=b.concat(d);d=[];for(var c=b.length,g=0;g<c;g++)b[g].api.off(),b[g].api.reset();y=a||e.rid;l();clearTimeout(t);t=setTimeout(f,6E5);f.executed=0},timeout:function(a,b){return c.setTimeout(function(){s(function(){f.executed||
a()})},b)},log:h,off:f}}}())})(ue_csm,window);
(function(a,c,h){a.ue_pdm||!a.ue_cel||ue.isBF||(a.ue_pdm=function(){function l(){try{var b=window.screen;if(b){var c={w:b.width,aw:b.availWidth,h:b.height,ah:b.availHeight,cd:b.colorDepth,pd:b.pixelDepth};e&&e.w===c.w&&e.h===c.h&&e.aw===c.aw&&e.ah===c.ah&&e.pd===c.pd&&e.cd===c.cd||(e=c,e.t=t(),e.k="sci",s(e))}var g=h.body||{},f=h.documentElement||{},d={w:Math.max(g.scrollWidth||0,g.offsetWidth||0,f.clientWidth||0,f.scrollWidth||0,f.offsetWidth||0),h:Math.max(g.scrollHeight||0,g.offsetHeight||0,f.clientHeight||
0,f.scrollHeight||0,f.offsetHeight||0)};m&&m.w===d.w&&m.h===d.h||(m=d,m.t=t(),m.k="doi",s(m));n=a.ue_cel.timeout(l,v);y+=1}catch(r){window.ueLogError&&ueLogError(r,{attribution:"csm-cel-page-module",logLevel:"WARN"})}}function f(){k("ebl","default",!1)}function q(){k("efo","default",!0)}function z(){k("ebl","app",!1)}function u(){k("efo","app",!0)}function r(){c.setTimeout(function(){h[D]?k("ebl","pageviz",!1):k("efo","pageviz",!0)},0)}function k(a,b,c){w!==c&&s({k:a,t:t(),s:b},{ff:!0===c?0:1});w=
c}function b(){g.attach&&(x&&g.attach(p,r,h),A&&P.when("mash").execute(function(a){a&&a.addEventListener&&(a.addEventListener("appPause",z),a.addEventListener("appResume",u))}),g.attach("blur",f,c),g.attach("focus",q,c))}function d(){g.detach&&(x&&g.detach(p,r,h),A&&P.when("mash").execute(function(a){a&&a.removeEventListener&&(a.removeEventListener("appPause",z),a.removeEventListener("appResume",u))}),g.detach("blur",f,c),g.detach("focus",q,c))}var n,t,v,e,m,w=null,y=0,g=a.ue,s=a.ue_cel.log,B=a.uet,
E=a.uex,x=!!g.pageViz,p=x&&g.pageViz.event,D=x&&g.pageViz.propHid,A=c.P&&c.P.when;"function"==typeof B&&B("bb","csmCELLSpdm",{wb:1});return{on:function(a){v=a.timespan||500;t=a.ts;b();a=c.location;s({k:"pmd",o:a.origin,p:a.pathname,t:t()});l();"function"==typeof E&&E("ld","csmCELLSpdm",{wb:1})},off:function(a){clearTimeout(n);d();g.count&&g.count("cel.PDM.TotalExecutions",y)},ready:function(){return h.body&&a.ue_cel&&a.ue_cel.log},reset:function(){e=m=null}}}(),a.ue_cel&&a.ue_cel.registerModule("page module",
a.ue_pdm))})(ue_csm,window,document);
(function(a,c){a.ue_vpm||!a.ue_cel||ue.isBF||(a.ue_vpm=function(){function h(){var a=u(),b={w:c.innerWidth,h:c.innerHeight,x:c.pageXOffset,y:c.pageYOffset};f&&f.w==b.w&&f.h==b.h&&f.x==b.x&&f.y==b.y||(b.t=a,b.k="vpi",f=b,d(f,{clog:1}));q=0;r=u()-a;k+=1}function l(){q||(q=a.ue_cel.timeout(h,z))}var f,q,z,u,r=0,k=0,b=a.ue,d=a.ue_cel.log,n=a.uet,t=a.uex,v=b.attach,e=b.detach;"function"==typeof n&&n("bb","csmCELLSvpm",{wb:1});return{on:function(a){u=a.ts;z=a.timespan||100;h();v&&(v("scroll",l),v("resize",
l));"function"==typeof t&&t("ld","csmCELLSvpm",{wb:1})},off:function(a){clearTimeout(q);e&&(e("scroll",l),e("resize",l));b.count&&(b.count("cel.VPI.TotalExecutions",k),b.count("cel.VPI.TotalExecutionTime",r),b.count("cel.VPI.AverageExecutionTime",r/k))},ready:function(){return a.ue_cel&&a.ue_cel.log},reset:function(){f=void 0},getVpi:function(){return f}}}(),a.ue_cel&&a.ue_cel.registerModule("viewport module",a.ue_vpm))})(ue_csm,window);
(function(a,c,h){if(!a.ue_fem&&a.ue_cel&&a.ue_utils){var l=a.ue||{};!l.isBF&&!a.ue_fem&&h.querySelector&&c.getComputedStyle&&[].forEach&&(a.ue_fem=function(){function f(a,b){return a>b?3>a-b:3>b-a}function q(a,b){var e=c.pageXOffset,g=c.pageYOffset,d;a:{try{if(a){var h=a.getBoundingClientRect(),r,l=0===a.offsetWidth&&0===a.offsetHeight;c:{for(var k=a.parentNode,n=h.left||0,p=h.top||0,s=h.width||0,t=h.height||0;k&&k!==document.body;){var m;d:{try{var q=void 0;if(k)var C=k.getBoundingClientRect(),q=
{x:C.left||0,y:C.top||0,w:C.width||0,h:C.height||0};else q=void 0;m=q;break d}catch(v){}m=void 0}var u=window.getComputedStyle(k),w="hidden"===u.overflow,N=w||"hidden"===u.overflowX,J=w||"hidden"===u.overflowY,z=p+t-1<m.y+1||p+1>m.y+m.h-1;if((n+s-1<m.x+1||n+1>m.x+m.w-1)&&N||z&&J){r=!0;break c}k=k.parentNode}r=!1}d={x:h.left+e||0,y:h.top+g||0,w:h.width||0,h:h.height||0,d:(l||r)|0}}else d=void 0;break a}catch(A){}d=void 0}if(d&&!a.cel_b)a.cel_b=d,x({n:a.getAttribute(y),w:a.cel_b.w,h:a.cel_b.h,d:a.cel_b.d,
x:a.cel_b.x,y:a.cel_b.y,t:b,k:"ewi",cl:a.className},{clog:1});else{if(e=d)e=a.cel_b,g=d,e=g.d===e.d&&1===g.d?!1:!(f(e.x,g.x)&&f(e.y,g.y)&&f(e.w,g.w)&&f(e.h,g.h)&&e.d===g.d);e&&(a.cel_b=d,x({n:a.getAttribute(y),w:a.cel_b.w,h:a.cel_b.h,d:a.cel_b.d,x:a.cel_b.x,y:a.cel_b.y,t:b,k:"ewi"},{clog:1}))}}function z(b,e){var c;c=b.c?h.getElementsByClassName(b.c):b.id?[h.getElementById(b.id)]:h.querySelectorAll(b.s);b.w=[];for(var d=0;d<c.length;d++){var f=c[d];if(f){if(!f.getAttribute(y)){var r=f.getAttribute("cel_widget_id")||
(b.id_gen||E)(f,d)||f.id;f.setAttribute(y,r)}b.w.push(f);k(Q,f,e)}}!1===B&&(s++,s===g.length&&(B=!0,a.ue_utils.notifyWidgetsLabeled()))}function u(a,b){p.contains(a)||x({n:a.getAttribute(y),t:b,k:"ewd"},{clog:1})}function r(a){I.length&&ue_cel.timeout(function(){if(m){for(var b=R(),c=!1;R()-b<e&&!c;){for(c=S;0<c--&&0<I.length;){var g=I.shift();T[g.type](g.elem,g.time)}c=0===I.length}U++;r(a)}},0)}function k(a,b,c){I.push({type:a,elem:b,time:c})}function b(a,b){for(var c=0;c<g.length;c++)for(var e=
g[c].w||[],d=0;d<e.length;d++)k(a,e[d],b)}function d(){K||(K=a.ue_cel.timeout(function(){K=null;var c=w();b(W,c);for(var e=0;e<g.length;e++)k(X,g[e],c);0===g.length&&!1===B&&(B=!0,a.ue_utils.notifyWidgetsLabeled());r(c)},v))}function n(){K||O||(O=a.ue_cel.timeout(function(){O=null;var a=w();b(Q,a);r(a)},v))}function t(){return A&&F&&p&&p.contains&&p.getBoundingClientRect&&w}var v=50,e=4.5,m=!1,w,y="data-cel-widget",g=[],s=0,B=!1,E=function(){},x=a.ue_cel.log,p,D,A,F,G=c.MutationObserver||c.WebKitMutationObserver||
c.MozMutationObserver,N=!!G,H,C,J="DOMAttrModified",L="DOMNodeInserted",M="DOMNodeRemoved",O,K,I=[],U=0,S=null,W="removedWidget",X="updateWidgets",Q="processWidget",T,V=c.performance||{},R=V.now&&function(){return V.now()}||function(){return Date.now()};"function"==typeof uet&&uet("bb","csmCELLSfem",{wb:1});return{on:function(b){function c(){if(t()){T={removedWidget:u,updateWidgets:z,processWidget:q};if(N){var a={attributes:!0,subtree:!0};H=new G(n);C=new G(d);H.observe(p,a);C.observe(p,{childList:!0,
subtree:!0});C.observe(D,a)}else A.call(p,J,n),A.call(p,L,d),A.call(p,M,d),A.call(D,L,n),A.call(D,M,n);d()}}p=h.body;D=h.head;A=p.addEventListener;F=p.removeEventListener;w=b.ts;g=a.cel_widgets||[];S=b.bs||5;l.deffered?c():l.attach&&l.attach("load",c);"function"==typeof uex&&uex("ld","csmCELLSfem",{wb:1});m=!0},off:function(){t()&&(C&&(C.disconnect(),C=null),H&&(H.disconnect(),H=null),F.call(p,J,n),F.call(p,L,d),F.call(p,M,d),F.call(D,L,n),F.call(D,M,n));l.count&&l.count("cel.widgets.batchesProcessed",
U);m=!1},ready:function(){return a.ue_cel&&a.ue_cel.log},reset:function(){g=a.cel_widgets||[]}}}(),a.ue_cel&&a.ue_fem&&a.ue_cel.registerModule("features module",a.ue_fem))}})(ue_csm,window,document);
(function(a,c,h){!a.ue_mcm&&a.ue_cel&&a.ue_utils&&!a.ue.isBF&&(a.ue_mcm=function(){function l(a,k){var b=a.srcElement||a.target||{},d={k:f,w:(k||{}).ow||(c.body||{}).scrollWidth,h:(k||{}).oh||(c.body||{}).scrollHeight,t:(k||{}).ots||q(),x:a.pageX,y:a.pageY,p:u.getXPath(b),n:b.nodeName};h&&"function"===typeof h.now&&a.timeStamp&&(d.dt=(k||{}).odt||h.now()-a.timeStamp,d.dt=parseFloat(d.dt.toFixed(2)));a.button&&(d.b=a.button);b.href&&(d.r=u.extractStringValue(b.href));b.id&&(d.i=b.id);b.className&&
b.className.split&&(d.c=b.className.split(/\s+/));z(d,{c:1})}var f="mcm",q,z=a.ue_cel.log,u=a.ue_utils;return{on:function(c){q=c.ts;a.ue_cel_stub&&a.ue_cel_stub.replayModule(f,l);window.addEventListener&&window.addEventListener("mousedown",l,!0)},off:function(a){window.addEventListener&&window.removeEventListener("mousedown",l,!0)},ready:function(){return a.ue_cel&&a.ue_cel.log},reset:function(){}}}(),a.ue_cel&&a.ue_cel.registerModule("mouse click module",a.ue_mcm))})(ue_csm,document,window.performance);
(function(a,c){a.ue_mmm||!a.ue_cel||a.ue.isBF||(a.ue_mmm=function(h){function l(a,b){var c={x:a.pageX||a.x||0,y:a.pageY||a.y||0,t:k()};!b&&x&&(c.t-x.t<z||c.x==x.x&&c.y==x.y)||(x=c,s.push(c))}function f(){if(s.length){y=G.now();for(var a=0;a<s.length;a++){var b=s[a],c=a;p=s[E];D=b;var d=void 0;if(!(d=2>c)){d=void 0;a:if(s[c].t-s[c-1].t>q)d=0;else{for(d=E+1;d<c;d++){var f=p,h=D,k=s[d];A=(h.x-f.x)*(f.y-k.y)-(f.x-k.x)*(h.y-f.y);if(A*A/((h.x-f.x)*(h.x-f.x)+(h.y-f.y)*(h.y-f.y))>u){d=0;break a}}d=1}d=!d}(F=
d)?E=c-1:B.pop();B.push(b)}g=G.now()-y;v=Math.min(v,g);e=Math.max(e,g);m=(m*w+g)/(w+1);w+=1;n({k:r,e:B,min:Math.floor(1E3*v),max:Math.floor(1E3*e),avg:Math.floor(1E3*m)},{c:1});s=[];B=[];E=0}}var q=100,z=20,u=25,r="mmm1",k,b,d=a.ue,n=a.ue_cel.log,t,v=1E3,e=0,m=0,w=0,y,g,s=[],B=[],E=0,x,p,D,A,F,G=h&&h.now&&h||Date.now&&Date||{now:function(){return(new Date).getTime()}};return{on:function(a){k=a.ts;b=a.ns;d.attach&&d.attach("mousemove",l,c);t=setInterval(f,3E3)},off:function(a){b&&(x&&l(x,!0),f());
clearInterval(t);d.detach&&d.detach("mousemove",l,c)},ready:function(){return a.ue_cel&&a.ue_cel.log},reset:function(){s=[];B=[];E=0;x=null}}}(window.performance),a.ue_cel&&a.ue_cel.registerModule("mouse move module",a.ue_mmm))})(ue_csm,document);




ue_csm.ue_unrt = 1500;
(function(d,b,t){function u(a,b){var c=a.srcElement||a.target||{},e={k:w,t:b.t,dt:b.dt,x:a.pageX,y:a.pageY,p:f.getXPath(c),n:c.nodeName};a.button&&(e.b=a.button);c.type&&(e.ty=c.type);c.href&&(e.r=f.extractStringValue(c.href));c.id&&(e.i=c.id);c.className&&c.className.split&&(e.c=c.className.split(/\s+/));g+=1;f.getFirstAscendingWidget(c,function(a){e.wd=a;d.ue.log(e,r)})}function x(a){if(!y(a.srcElement||a.target)){k+=1;n=!0;var v=h=d.ue.d(),c;p&&"function"===typeof p.now&&a.timeStamp&&(c=p.now()-
a.timeStamp,c=parseFloat(c.toFixed(2)));s=b.setTimeout(function(){u(a,{t:v,dt:c})},z)}}function A(a){if(a){var b=a.filter(B);a.length!==b.length&&(q=!0,l=d.ue.d(),n&&q&&(l&&h&&d.ue.log({k:C,t:h,m:Math.abs(l-h)},r),m(),q=!1,l=0))}}function B(a){if(!a)return!1;var b="characterData"===a.type?a.target.parentElement:a.target;if(!b||!b.hasAttributes||!b.attributes)return!1;var c={"class":"gw-clock gw-clock-aria s-item-container-height-auto feed-carousel using-mouse kfs-inner-container".split(" "),id:["dealClock",
"deal_expiry_timer","timer"],role:["timer"]},e=!1;Object.keys(c).forEach(function(a){var d=b.attributes[a]?b.attributes[a].value:"";(c[a]||"").forEach(function(a){-1!==d.indexOf(a)&&(e=!0)})});return e}function y(a){if(!a)return!1;var b=(f.extractStringValue(a.nodeName)||"").toLowerCase(),c=(f.extractStringValue(a.type)||"").toLowerCase(),d=(f.extractStringValue(a.href)||"").toLowerCase();a=(f.extractStringValue(a.id)||"").toLowerCase();var g="checkbox color date datetime-local email file month number password radio range reset search tel text time url week".split(" ");
if(-1!==["select","textarea","html"].indexOf(b)||"input"===b&&-1!==g.indexOf(c)||"a"===b&&-1!==d.indexOf("http")||-1!==["sitbreaderrightpageturner","sitbreaderleftpageturner","sitbreaderpagecontainer"].indexOf(a))return!0}function m(){n=!1;h=0;b.clearTimeout(s)}function D(){b.ue.onSushiUnload(function(){ue.event({violationType:"unresponsive-clicks",violationCount:g,totalScanned:k},"csm","csm.ArmoredCXGuardrailsViolation.3")});b.ue.onunload(function(){ue.count("armored-cxguardrails.unresponsive-clicks.violations",
g);ue.count("armored-cxguardrails.unresponsive-clicks.violationRate",g/k*100||0)})}if(b.MutationObserver&&b.addEventListener&&Object.keys&&d&&d.ue&&d.ue.log&&d.ue_unrt&&d.ue_utils){var z=d.ue_unrt,r="cel",w="unr_mcm",C="res_mcm",p=b.performance,f=d.ue_utils,n=!1,h=0,s=0,q=!1,l=0,g=0,k=0;b.addEventListener&&(b.addEventListener("mousedown",x,!0),b.addEventListener("beforeunload",m,!0),b.addEventListener("visibilitychange",m,!0),b.addEventListener("pagehide",m,!0));b.ue&&b.ue.event&&b.ue.onSushiUnload&&
b.ue.onunload&&D();(new MutationObserver(A)).observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}})(ue_csm,window,document);


ue_csm.ue.exec(function(g,e){if(e.ue_err){var f="";e.ue_err.errorHandlers||(e.ue_err.errorHandlers=[]);e.ue_err.errorHandlers.push({name:"fctx",handler:function(a){if(!a.logLevel||"FATAL"===a.logLevel)if(f=g.getElementsByTagName("html")[0].innerHTML){var b=f.indexOf("var ue_t0=ue_t0||+new Date();");if(-1!==b){var b=f.substr(0,b).split(String.fromCharCode(10)),d=Math.max(b.length-10-1,0),b=b.slice(d,b.length-1);a.fcsmln=d+b.length+1;a.cinfo=a.cinfo||{};for(var c=0;c<b.length;c++)a.cinfo[d+c+1+""]=
b[c]}b=f.split(String.fromCharCode(10));a.cinfo=a.cinfo||{};if(!(a.f||void 0===a.l||a.l in a.cinfo))for(c=+a.l-1,d=Math.max(c-5,0),c=Math.min(c+5,b.length-1);d<=c;d++)a.cinfo[d+1+""]=b[d]}}})}},"fatals-context")(document,window);


(function(m,a){function c(k){function f(b){b&&"string"===typeof b&&(b=(b=b.match(/^(?:https?:)?\/\/(.*?)(\/|$)/i))&&1<b.length?b[1]:null,b&&b&&("number"===typeof e[b]?e[b]++:e[b]=1))}function d(b){var e=10,d=+new Date;b&&b.timeRemaining?e=b.timeRemaining():b={timeRemaining:function(){return Math.max(0,e-(+new Date-d))}};for(var c=a.performance.getEntries(),k=e;g<c.length&&k>n;)c[g].name&&f(c[g].name),g++,k=b.timeRemaining();g>=c.length?h(!0):l()}function h(b){if(!b){b=m.scripts;var c;if(b)for(var d=
0;d<b.length;d++)(c=b[d].getAttribute("src"))&&"undefined"!==c&&f(c)}0<Object.keys(e).length&&(p&&ue_csm.ue&&ue_csm.ue.event&&ue_csm.ue.event({domains:e,pageType:a.ue_pty||null,subPageType:a.ue_spty||null,pageTypeId:a.ue_pti||null},"csm","csm.CrossOriginDomains.2"),a.ue_ext=e)}function l(){!0===k?d():a.requestIdleCallback?a.requestIdleCallback(d):a.requestAnimationFrame?a.requestAnimationFrame(d):a.setTimeout(d,100)}function c(){if(a.performance&&a.performance.getEntries){var b=a.performance.getEntries();
!b||0>=b.length?h(!1):l()}else h(!1)}var e=a.ue_ext||{};a.ue_ext||c();return e}function q(){setTimeout(c,r)}var s=a.ue_dserr||!1,p=!0,n=1,r=2E3,g=0;a.ue_err&&s&&(a.ue_err.errorHandlers||(a.ue_err.errorHandlers=[]),a.ue_err.errorHandlers.push({name:"ext",handler:function(a){if(!a.logLevel||"FATAL"===a.logLevel){var f=c(!0),d=[],h;for(h in f){var f=h,g=f.match(/amazon(\.com?)?\.\w{2,3}$/i);g&&1<g.length||-1!==f.indexOf("amazon-adsystem.com")||-1!==f.indexOf("amazonpay.com")||-1!==f.indexOf("cloudfront-labs.amazonaws.com")||
d.push(h)}a.ext=d}}}));a.ue&&a.ue.isl?c():a.ue&&ue.attach&&ue.attach("load",q)})(document,window);





var ue_wtc_c = 0;
ue_csm.ue.exec(function(b,e){function l(){for(var a=0;a<f.length;a++)a:for(var d=s.replace(A,f[a])+g[f[a]]+t,c=arguments,b=0;b<c.length;b++)try{c[b].send(d);break a}catch(e){}g={};f=[];n=0;k=p}function u(){B?l(q):l(C,q)}function v(a,m,c){r++;if(r>w)d.count&&1==r-w&&(d.count("WeblabTriggerThresholdReached",1),b.ue_int&&console.error("Number of max call reached. Data will no longer be send"));else{var h=c||{};h&&-1<h.constructor.toString().indexOf(D)&&a&&-1<a.constructor.toString().indexOf(x)&&m&&-1<
m.constructor.toString().indexOf(x)?(h=b.ue_id,c&&c.rid&&(h=c.rid),c=h,a=encodeURIComponent(",wl="+a+"/"+m),2E3>a.length+p?(2E3<k+a.length&&u(),void 0===g[c]&&(g[c]="",f.push(c)),g[c]+=a,k+=a.length,n||(n=e.setTimeout(u,E))):b.ue_int&&console.error("Invalid API call. The input provided is over 2000 chars.")):d.count&&(d.count("WeblabTriggerImproperAPICall",1),b.ue_int&&console.error("Invalid API call. The input provided does not match the API protocol i.e ue.trigger(String, String, Object)."))}}function F(){d.trigger&&
d.trigger.isStub&&d.trigger.replay(function(a){v.apply(this,a)})}function y(){z||(f.length&&l(q),z=!0)}var t=":1234",s="//"+b.ue_furl+"/1/remote-weblab-triggers/1/OE/"+b.ue_mid+":"+b.ue_sid+":PLCHLDR_RID$s:wl-client-id%3DCSMTriger",A="PLCHLDR_RID",E=b.wtt||1E4,p=s.length+t.length,w=b.mwtc||2E3,G=1===e.ue_wtc_c,B=3===e.ue_wtc_c,H=e.XMLHttpRequest&&"withCredentials"in new e.XMLHttpRequest,x="String",D="Object",d=b.ue,g={},f=[],k=p,n,z=!1,r=0,C=function(){return{send:function(a){if(H){var b=new e.XMLHttpRequest;
b.open("GET",a,!0);G&&(b.withCredentials=!0);b.send()}else throw"";}}}(),q=function(){return{send:function(a){(new Image).src=a}}}();e.encodeURIComponent&&(d.attach&&(d.attach("beforeunload",y),d.attach("pagehide",y)),F(),d.trigger=v)},"client-wbl-trg")(ue_csm,window);


(function(k,d,h){function f(a,c,b){a&&a.indexOf&&0===a.indexOf("http")&&0!==a.indexOf("https")&&l(s,c,a,b)}function g(a,c,b){a&&a.indexOf&&(location.href.split("#")[0]!=a&&null!==a&&"undefined"!==typeof a||l(t,c,a,b))}function l(a,c,b,e){m[b]||(e=u&&e?n(e):"N/A",d.ueLogError&&d.ueLogError({message:a+c+" : "+b,logLevel:v,stack:"N/A"},{attribution:e}),m[b]=1,p++)}function e(a,c){if(a&&c)for(var b=0;b<a.length;b++)try{c(a[b])}catch(d){}}function q(){return d.performance&&d.performance.getEntriesByType?
d.performance.getEntriesByType("resource"):[]}function n(a){if(a.id)return"//*[@id='"+a.id+"']";var c;c=1;var b;for(b=a.previousSibling;b;b=b.previousSibling)b.nodeName==a.nodeName&&(c+=1);b=a.nodeName;1!=c&&(b+="["+c+"]");a.parentNode&&(b=n(a.parentNode)+"/"+b);return b}function w(){var a=h.images;a&&a.length&&e(a,function(a){var b=a.getAttribute("src");f(b,"img",a);g(b,"img",a)})}function x(){var a=h.scripts;a&&a.length&&e(a,function(a){var b=a.getAttribute("src");f(b,"script",a);g(b,"script",a)})}
function y(){var a=h.styleSheets;a&&a.length&&e(a,function(a){if(a=a.ownerNode){var b=a.getAttribute("href");f(b,"style",a);g(b,"style",a)}})}function z(){if(A){var a=q();e(a,function(a){f(a.name,a.initiatorType)})}}function B(){e(q(),function(a){g(a.name,a.initiatorType)})}function r(){var a;a=d.location&&d.location.protocol?d.location.protocol:void 0;"https:"==a&&(z(),w(),x(),y(),B(),p<C&&setTimeout(r,D))}var s="[CSM] Insecure content detected ",t="[CSM] Ajax request to same page detected ",v="WARN",
m={},p=0,D=k.ue_nsip||1E3,C=5,A=1==k.ue_urt,u=!0;ue_csm.ue_disableNonSecure||(d.performance&&d.performance.setResourceTimingBufferSize&&d.performance.setResourceTimingBufferSize(300),r())})(ue_csm,window,document);


var ue_aa_a = "";
if (ue.trigger && (ue_aa_a === "C" || ue_aa_a === "T1")) {
    ue.trigger("UEDATA_AA_SERVERSIDE_ASSIGNMENT_CLIENTSIDE_TRIGGER_190249", ue_aa_a);
}
(function(f,b){function g(){try{b.PerformanceObserver&&"function"===typeof b.PerformanceObserver&&(a=new b.PerformanceObserver(function(b){c(b.getEntries())}),a.observe(d))}catch(h){k()}}function m(){for(var h=d.entryTypes,a=0;a<h.length;a++)c(b.performance.getEntriesByType(h[a]))}function c(a){if(a&&Array.isArray(a)){for(var c=0,e=0;e<a.length;e++){var d=l.indexOf(a[e].name);if(-1!==d){var g=Math.round(b.performance.timing.navigationStart+a[e].startTime);f.uet(n[d],void 0,void 0,g);c++}}l.length===
c&&k()}}function k(){a&&a.disconnect&&"function"===typeof a.disconnect&&a.disconnect()}if("function"===typeof f.uet&&b.performance&&"object"===typeof b.performance&&b.performance.getEntriesByType&&"function"===typeof b.performance.getEntriesByType&&b.performance.timing&&"object"===typeof b.performance.timing&&"number"===typeof b.performance.timing.navigationStart){var d={entryTypes:["paint"]},l=["first-paint","first-contentful-paint"],n=["fp","fcp"],a;try{m(),g()}catch(p){f.ueLogError(p,{logLevel:"ERROR",
attribution:"performanceMetrics"})}}})(ue_csm,window);


if (window.csa) {
    csa("Events")("setEntity", {
        page:{pageType: "search", subPageType: "keyword", pageTypeId: ""}
    });
}
csa.plugin(function(i){var s,e="CacheDetection",n="csa-cache",u="onsuccess",d="target",p="result",l="exp",f=i.exec,c=i.config,g=c[e+".RequestID"],v=c[e+".Callback"],h=c[e+".EnableCallback"],I=1,t=i.global,r=t.document||{},a=t.indexedDB,x=t.IDBKeyRange,b=i("Events"),C=i("Events",{producerId:"csa"});if(a&&x)try{var o=a.open(n);o.onupgradeneeded=f(function(e){e[d][p].createObjectStore(n).createIndex(l,l)}),o[u]=f(function(e){var o=e[d][p].transaction(n,"readwrite").objectStore(n);o.get(g)[u]=f(function(e){var n=D("session-id"),c=function(e){var n=D("cdn-rid");if(n)return{r:n,s:"cdn"};if(e)return{r:i.UUID().toUpperCase().replace(/-/g,"").slice(0,20),s:"device"}}(e[d][p])||{},t=c.r,r=c.s,a=!!t;!function(e){var n=Date.now(),c=x.upperBound(n);e.index(l).openCursor(c)[u]=f(function(e){var n=e[d][p];n&&(n.delete(),n.continue())}),e.put({exp:n+60*I*60*1e3},g)}(o),function(e,n,c){b("setEntity",{page:{requestId:e||g,cacheRequestId:n?g:s,pageSource:n?"cache":"origin"},session:{id:c}}),n&&C("log",{schemaId:"csa.CacheImpression.1"},{full:1})}(t,a,n),a&&h&&v&&v(t,n,r)})})}catch(e){}function D(e){try{var n=r.cookie.match(RegExp("(^| )"+e+"=([^;]+)"));return n&&n[2].trim()}catch(e){}}});









}
/* ◬ */
</script>

</div>

<noscript>
    <img height="1" width="1" style='display:none;visibility:hidden;' src='//fls-na.amazon.com/1/batch/1/OP/A1EVAM02EL8SFB:145-9667767-9362462:92175SBNMSHDG2QTPPWB$uedata=s:%2Fgp%2Fuedata%3Fnoscript%26id%3D92175SBNMSHDG2QTPPWB:0' alt=""/>
</noscript>

    </body>
</html>
`;

const imdbSearchPage = cheerio.load(pageData);

module.exports = imdbSearchPage;
