(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/eHF":function(e,t,a){"use strict";function n(e,t){var a=t.distance,n=t.left,o=t.right,r=t.up,i=t.down,c=t.top,u=t.bottom,l=t.big,m=t.mirror,d=t.opposite,b=(a?a.toString():0)+((n?1:0)|(o?2:0)|(c||i?4:0)|(u||r?8:0)|(m?16:0)|(d?32:0)|(e?64:0)|(l?128:0));if(p.hasOwnProperty(b))return p[b];var f=n||o||r||i||c||u,v=void 0,h=void 0;if(f){if(!m!=!(e&&d)){var g=[o,n,u,c,i,r];n=g[0],o=g[1],c=g[2],u=g[3],r=g[4],i=g[5]}var y=a||(l?"2000px":"100%");v=n?"-"+y:o?y:"0",h=i||c?"-"+y:r||u?y:"0"}return p[b]=(0,s.animation)((e?"to":"from")+" {opacity: 0;"+(f?" transform: translate3d("+v+", "+h+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),p[b]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e.children,o=(e.out,e.forever),r=e.timeout,i=e.duration,c=void 0===i?s.defaults.duration:i,l=e.delay,p=void 0===l?s.defaults.delay:l,m=e.count,d=void 0===m?s.defaults.count:m,b=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["children","out","forever","timeout","duration","delay","count"]),f={make:n,duration:void 0===r?c:r,delay:p,forever:o,count:d,style:{animationFillMode:"both"},reverse:b.left};return t?(0,u.default)(b,f,f,a):f}Object.defineProperty(t,"__esModule",{value:!0});var r,i=a("17x9"),s=a("ar19"),c=a("eH+L"),u=(r=c)&&r.__esModule?r:{default:r},l={out:i.bool,left:i.bool,right:i.bool,top:i.bool,bottom:i.bool,big:i.bool,mirror:i.bool,opposite:i.bool,duration:i.number,timeout:i.number,distance:i.string,delay:i.number,count:i.number,forever:i.bool},p={};o.propTypes=l,t.default=o,e.exports=t.default},"4fZv":function(e,t){e.exports="/_next/static/images/i3sm-9262fabddfbe77cd1b033f4e3b34712a.jpg.webp"},"7faO":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("hlFM"),i=a("/eHF"),s=a.n(i),c=a("zVPG"),u=a("k2yn"),l=a("5Yp1"),p=o.a.createElement,m=function(e){return p(l.a,null,e.head,p(r.a,{bgcolor:"primary.main",color:"primary.contrastText"},p(c.a,{paddingTop:160},p(u.a,{sm:10,md:6,justify:"center"},p(s.a,{bottom:!0,cascade:!0},e.children)))))},d=a("NbdC"),b=a("wx14"),f=a("ofer"),v=a("R/WZ"),h=o.a.createElement,g=Object(v.a)({typoTitle:{marginBottom:40,textTransform:"uppercase"}}),y=function(e){var t=g();return h(f.a,Object(b.a)({variant:"h3",component:"h1",className:t.typoTitle},e),e.children)},j=o.a.createElement,k=Object(v.a)({typoSubtitle:{fontWeight:600}}),w=function(e){var t=k();return j(f.a,Object(b.a)({variant:"h5",component:"h2",className:t.typoSubtitle,paragraph:!0},e),e.children)},x=a("Ff2n"),S=a("vlpV"),O=o.a.createElement,T=Object(v.a)({typoLinkout:{textDecoration:"underline"}}),F=function(e){var t=T(),a=e.href,n=Object(x.a)(e,["href"]);return O(f.a,Object(b.a)({component:"p"},n,{className:t.typoLinkout}),O(S.a,{href:a},e.children))},E=o.a.createElement;t.a=function(e){return E(m,{head:e.head,image:e.image},E(y,null,e.text.title),E(w,null,e.text.subTitle),e.text.paragraphs.map((function(e,t){return E(d.a,{key:t},e)})),E(w,null,"Zdroje"),e.text.sources.map((function(e,t){return E(F,{href:e[1],key:t},e[0])})))}},"F+1Z":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/informace/kaceni-destneho-pralesa",function(){return a("SfIi")}])},NbdC:function(e,t,a){"use strict";var n=a("wx14"),o=a("q1tI"),r=a.n(o),i=a("ofer"),s=r.a.createElement;t.a=function(e){return s(i.a,Object(n.a)({component:"p",variant:"h6",paragraph:!0},e),e.children)}},SfIi:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("7faO"),i=a("cooF"),s=a("uZaF"),c=a("mpVH"),u=o.a.createElement;t.default=function(){return u(r.a,{head:u(c.a,{head:(e=s.a,{title:e.title,description:e.subTitle+e.paragraphs[0],path:t,image:e.imgSmJpeg}),path:s.a.path}),text:s.a,image:u(i.a,{imgSmWebp:s.a.imgSmWebp,imgSmJpeg:s.a.imgSmJpeg,imgXsWebp:s.a.imgXsWebp,imgXsJpeg:s.a.imgXsJpeg,alt:s.a.imgAlt})});var e,t}},ZeUS:function(e,t){e.exports="/_next/static/images/i3xs-ceea36f97299713ad789a7ccd7333060.jpg"},cooF:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("q1tI"),o=a.n(n),r=a("hlFM"),i=a("R/WZ"),s=a("hXnw"),c=a.n(s),u=o.a.createElement,l=Object(i.a)({image:{width:"100%",display:"block",borderRadius:8},box:{marginTop:8,marginBottom:24}});function p(e){var t=l();return u(c.a,{bottom:!0},u(r.a,{boxShadow:2,className:t.box,borderRadius:8},u("picture",null,u("source",{media:"(min-width: 381px)",type:"image/webp",srcSet:e.imgSmWebp}),u("source",{media:"(min-width: 381px)",srcSet:e.imgSmJpeg}),u("source",{type:"image/webp",srcSet:e.imgXsWebp}),u("img",{className:t.image,srcSet:e.imgXsJpeg,alt:e.alt}))))}},hsQZ:function(e,t){e.exports="/_next/static/images/i3sm-21df4a42b328525053c1d5829a428c17.jpg"},nWU7:function(e,t){e.exports="/_next/static/images/i3xs-56b8dae930d2654bbd034d2a41ce370b.jpg.webp"},uZaF:function(e,t,a){"use strict";var n={path:"/informace/kaceni-destneho-pralesa",title:"K\xe1c\xe9n\xed de\u0161tn\xe9ho pralesa",subTitle:"V\xed\u0161, kv\u016fli \u010demu se k\xe1c\xed nejv\xedc de\u0161tn\xe9ho pralesa? Kv\u016fli palm\xe1\u010di to nen\xed ...",paragraphs:["Palm\xe1\u010d to skute\u010dn\u011b nen\xed. Ten je na \u017eeb\u0159\xed\u010dku nejv\u011bt\u0161\xedch p\u0159\xed\u010din a\u017e na t\u0159et\xedm m\xedst\u011b. \ud83c\udf34 Na prvn\xedm m\xedst\u011b, daleko p\u0159ed ostatn\xedmi, je \u017eivo\u010di\u0161n\xfd pr\u016fmysl. Jak ten se na tom m\u016f\u017ee pod\xedlet? Plocha po vyk\xe1cen\xed se pou\u017e\xedv\xe1 jako pastvina pro dobytek. \ud83d\udc02\ud83d\udc03 Samy o sob\u011b jsou pastviny pro dobytek zodpov\u011bdn\xe9 za v\xedc jak dvojn\xe1sobek toho, co v\u0161echny ostatn\xed hlavn\xed p\u0159\xed\u010diny dohromady. [1]","Na druh\xe9m m\xedst\u011b v na\u0161em pomysln\xe9m \u017eeb\u0159\xed\u010dku je s\xf3ja. \ud83c\udf3f Ale nenechte se zm\xe1st, nejde tady o s\xf3ju na v\xfdrobu tofu. Lid\xe9 ve skute\u010dnosti spot\u0159ebuj\xed jen 6 % sv\u011btov\xe9 produkce s\xf3ji. \ud83d\udc81\u200d\u2640\ufe0f Drtiv\xe1 v\u011bt\u0161ina produkce se vyu\u017e\xedv\xe1 jako krmivo pro hospod\xe1\u0159sk\xe1 zv\xed\u0159ata a ryby chovan\xe9 na farm\xe1ch. [1] \ud83d\udc04\ud83d\udc1f\ud83d\udc16 S\xf3ja vyp\u011bstovan\xe1 na pol\xedch po de\u0161tn\xfdch pralesech se rozv\xe1\u017e\xed po cel\xe9m sv\u011bt\u011b. Nap\u0159\xedklad v EU si vyp\u011bstujeme jen 2 % s\xf3ji, zbytek dov\xe1\u017e\xedme z Braz\xedlie a Argentiny. [2]"],sources:[["[1] WHAT ARE THE BIGGEST DRIVERS OF TROPICAL DEFORESTATION?","https://www.worldwildlife.org/magazine/issues/summer-2018/articles/what-are-the-biggest-drivers-of-tropical-deforestation"],["[2] Geneticky modifikovan\xe9 potraviny a krmiva","https://www.bezpecnostpotravin.cz/stranka/geneticky-modifikovane-organismy-(gmo).aspx"]],imgSmWebp:a("4fZv"),imgSmJpeg:a("hsQZ"),imgXsWebp:a("nWU7"),imgXsJpeg:a("ZeUS"),imgAlt:"K\xe1cen\xed de\u0161tn\xe9ho pralesa"};t.a=n},vlpV:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a("wx14"),o=a("q1tI"),r=a.n(o),i=a("Ff2n"),s=(a("17x9"),a("iuhU")),c=a("NqtD"),u=a("H2TA"),l=a("G7As"),p=a("bfFb"),m=a("ofer"),d=o.forwardRef((function(e,t){var a=e.classes,r=e.className,u=e.color,d=void 0===u?"primary":u,b=e.component,f=void 0===b?"a":b,v=e.onBlur,h=e.onFocus,g=e.TypographyClasses,y=e.underline,j=void 0===y?"hover":y,k=e.variant,w=void 0===k?"inherit":k,x=Object(i.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),S=Object(l.a)(),O=S.isFocusVisible,T=S.onBlurVisible,F=S.ref,E=o.useState(!1),N=E[0],W=E[1],_=Object(p.a)(t,F);return o.createElement(m.a,Object(n.a)({className:Object(s.a)(a.root,a["underline".concat(Object(c.a)(j))],r,N&&a.focusVisible,"button"===f&&a.button),classes:g,color:d,component:f,onBlur:function(e){N&&(T(),W(!1)),v&&v(e)},onFocus:function(e){O(e)&&W(!0),h&&h(e)},ref:_,variant:w},x))})),b=Object(u.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(d),f=r.a.createElement;function v(e){return f(b,Object(n.a)({href:e.href,target:"_blank",color:"inherit",rel:"noreferrer noopener"},e),e.children)}}},[["F+1Z",0,2,1,3,4]]]);