__NEXT_REGISTER_CHUNK("app_components_PortalWrapper_react_75f11707e84e8b5561f059486322baa5",function(){webpackJsonp([2],{689:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});o.d(t,"default",function(){return c});var r=o(1);var n=o.n(r);var a=o(241);var l=o.n(a);var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||false;r.configurable=true;"value"in r&&(r.writable=true);Object.defineProperty(e,r.key,r)}}return function(t,o,r){o&&e(t.prototype,o);r&&e(t,r);return t}}();function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}false;var c=function(e){s(t,e);function t(){var e;var o,n,a;p(this,t);for(var l=arguments.length,i=Array(l),s=0;s<l;s++)i[s]=arguments[s];return a=(o=(n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n),n.state={isPortalOpen:false},n.setIsPortalOpen=function(e){return n.setState({isPortalOpen:e})},n.Portal=function(e){var t=e.children;if(!n._portalNode)return null;return r["createElement"](f,{setIsPortalOpen:n.setIsPortalOpen,node:n._portalNode},t)},n.openPortal=function(){n._portalNode=document.createElement("div");n._rootNode&&n._rootNode.appendChild(n._portalNode);n.forceUpdate()},n.closePortal=function(){n._portalNode&&n._rootNode&&n._rootNode.removeChild(n._portalNode);n._portalNode=null;n.forceUpdate()},o),u(n,a)}i(t,[{key:"componentWillMount",value:function e(){this._rootNode=this.props.rootId?document.getElementById(this.props.rootId):document.body;this.openPortal()}},{key:"componentWillUnmount",value:function e(){this.closePortal()}},{key:"render",value:function e(){return this.props.children({openPortal:this.openPortal,closePortal:this.closePortal,Portal:this.Portal,isPortalOpen:this.state.isPortalOpen})}}]);return t}(r["Component"]);var f=function(e){s(t,e);function t(){p(this,t);return u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}i(t,[{key:"componentDidMount",value:function e(){this.props.setIsPortalOpen(true)}},{key:"componentWillUnmount",value:function e(){this.props.setIsPortalOpen(false)}},{key:"render",value:function e(){return Object(a["createPortal"])(this.props.children,this.props.node)}}]);return t}(r["PureComponent"])}})});