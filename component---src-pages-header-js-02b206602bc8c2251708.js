"use strict";(self.webpackChunkprofile_technology_icons=self.webpackChunkprofile_technology_icons||[]).push([[146],{6861:function(o,r,e){e.r(r),e.d(r,{default:function(){return w}});var t=e(7294),a=e(3366),n=e(7462),i=e(5505),l=e(9236),s=e(2729),c=e(7639),p=e(7869),u=e(5604),d=e(9508),g=e(1351);function f(o){return(0,g.Z)("MuiAppBar",o)}(0,d.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var v=e(5893),m=["className","color","enableColorOnDark","position"],b=function(o,r){return"".concat(null==o?void 0:o.replace(")",""),", ").concat(r,")")},h=(0,s.ZP)(u.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:function(o,r){var e=o.ownerState;return[r.root,r["position".concat((0,p.Z)(e.position))],r["color".concat((0,p.Z)(e.color))]]}})((function(o){var r=o.theme,e=o.ownerState,t="light"===r.palette.mode?r.palette.grey[100]:r.palette.grey[900];return(0,n.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===e.position&&{position:"fixed",zIndex:(r.vars||r).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===e.position&&{position:"absolute",zIndex:(r.vars||r).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===e.position&&{position:"sticky",zIndex:(r.vars||r).zIndex.appBar,top:0,left:"auto",right:0},"static"===e.position&&{position:"static"},"relative"===e.position&&{position:"relative"},!r.vars&&(0,n.Z)({},"default"===e.color&&{backgroundColor:t,color:r.palette.getContrastText(t)},e.color&&"default"!==e.color&&"inherit"!==e.color&&"transparent"!==e.color&&{backgroundColor:r.palette[e.color].main,color:r.palette[e.color].contrastText},"inherit"===e.color&&{color:"inherit"},"dark"===r.palette.mode&&!e.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===e.color&&(0,n.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===r.palette.mode&&{backgroundImage:"none"})),r.vars&&(0,n.Z)({},"default"===e.color&&{"--AppBar-background":e.enableColorOnDark?r.vars.palette.AppBar.defaultBg:b(r.vars.palette.AppBar.darkBg,r.vars.palette.AppBar.defaultBg),"--AppBar-color":e.enableColorOnDark?r.vars.palette.text.primary:b(r.vars.palette.AppBar.darkColor,r.vars.palette.text.primary)},e.color&&!e.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":e.enableColorOnDark?r.vars.palette[e.color].main:b(r.vars.palette.AppBar.darkBg,r.vars.palette[e.color].main),"--AppBar-color":e.enableColorOnDark?r.vars.palette[e.color].contrastText:b(r.vars.palette.AppBar.darkColor,r.vars.palette[e.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===e.color?"inherit":"var(--AppBar-color)"},"transparent"===e.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))})),k=t.forwardRef((function(o,r){var e=(0,c.Z)({props:o,name:"MuiAppBar"}),t=e.className,s=e.color,u=void 0===s?"primary":s,d=e.enableColorOnDark,g=void 0!==d&&d,b=e.position,k=void 0===b?"fixed":b,Z=(0,a.Z)(e,m),x=(0,n.Z)({},e,{color:u,position:k,enableColorOnDark:g}),B=function(o){var r=o.color,e=o.position,t=o.classes,a={root:["root","color".concat((0,p.Z)(r)),"position".concat((0,p.Z)(e))]};return(0,l.Z)(a,f,t)}(x);return(0,v.jsx)(h,(0,n.Z)({square:!0,component:"header",ownerState:x,elevation:4,className:(0,i.Z)(B.root,t,"fixed"===k&&"mui-fixed"),ref:r},Z))})),Z=e(4942);function x(o){return(0,g.Z)("MuiToolbar",o)}(0,d.Z)("MuiToolbar",["root","gutters","regular","dense"]);var B=["className","component","disableGutters","variant"],y=(0,s.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(o,r){var e=o.ownerState;return[r.root,!e.disableGutters&&r.gutters,r[e.variant]]}})((function(o){var r=o.theme,e=o.ownerState;return(0,n.Z)({position:"relative",display:"flex",alignItems:"center"},!e.disableGutters&&(0,Z.Z)({paddingLeft:r.spacing(2),paddingRight:r.spacing(2)},r.breakpoints.up("sm"),{paddingLeft:r.spacing(3),paddingRight:r.spacing(3)}),"dense"===e.variant&&{minHeight:48})}),(function(o){var r=o.theme;return"regular"===o.ownerState.variant&&r.mixins.toolbar})),C=t.forwardRef((function(o,r){var e=(0,c.Z)({props:o,name:"MuiToolbar"}),t=e.className,s=e.component,p=void 0===s?"div":s,u=e.disableGutters,d=void 0!==u&&u,g=e.variant,f=void 0===g?"regular":g,m=(0,a.Z)(e,B),b=(0,n.Z)({},e,{component:p,disableGutters:d,variant:f}),h=function(o){var r=o.classes,e={root:["root",!o.disableGutters&&"gutters",o.variant]};return(0,l.Z)(e,x,r)}(b);return(0,v.jsx)(y,(0,n.Z)({as:p,className:(0,i.Z)(h.root,t),ref:r,ownerState:b},m))})),A=e(3854);function w(o){return t.createElement(t.Fragment,null,t.createElement(k,{style:{background:"#ffffff"}},t.createElement(C,null,t.createElement(A.Z,{variant:"h6",style:{color:"#26292d"}},t.createElement("span",{role:"img","aria-label":"Clipboard"},"📋 "),t.createElement("span",{role:"img","aria-label":"Grinning Face with Smiling Eyes"},"😄 "),"Profile Technology Icons"),t.createElement("div",{style:{marginLeft:15,marginRight:15}},t.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=marwin1991&repo=profile-technology-icons&type=star&count=true&size=large",frameBorder:"0",scrolling:"0",width:"170",height:"30",title:"GitHub"})))))}}}]);
//# sourceMappingURL=component---src-pages-header-js-02b206602bc8c2251708.js.map