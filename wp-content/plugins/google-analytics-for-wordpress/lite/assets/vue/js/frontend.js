(function(t){function e(e){for(var o,i,a=e[0],l=e[1],c=e[2],d=0,f=[];d<a.length;d++)i=a[d],r[i]&&f.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={frontend:0},s=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="https://am-plugins.site/";var a=window["monsterinsightsjsonp"]=window["monsterinsightsjsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;s.push([4,"chunk-frontend-vendors","chunk-common"]),n()})({4:function(t,e,n){t.exports=n("d67f")},d67f:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"monsterinsights-adminbar-menu-item",attrs:{id:"wp-admin-bar-monsterinsights_frontend_button"}},[n("div",{class:t.toggleButtonClass,on:{click:t.toggleStatsVisibility}},[n("span",{staticClass:"ab-icon dashicons-before dashicons-chart-bar"}),n("span",{staticClass:"monsterinsights-admin-bar-handle-text",domProps:{textContent:t._s(t.text_insights)}}),t.has_notifications?n("span",{staticClass:"monsterinsights-menu-notification-indicator",domProps:{textContent:t._s(t.notifications.length)}}):t._e()]),t.statsVisible?n("div",{staticClass:"monsterinsights-frontend-stats"},[t.noauth?n("frontend-no-auth"):t.error?n("widget-report-error",{attrs:{error:t.error}}):n("frontend-stats-content"),t.loaded?t._e():n("div",{staticClass:"monsterinsights-frontend-stats-loading"},[n("span",{staticClass:"monsterinsights-frontend-spinner"})]),n("frontend-powered-by")],1):t._e()])},r=[],s=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("fc11")),i=(n("d3b7"),n("bc3a")),a=n.n(i),l=n("2b0e"),c=function(t){return new Promise((function(e){var n=new FormData,o=l["a"].prototype.$mi.page_id?l["a"].prototype.$mi.page_id:window.location.pathname;n.append("action","monsterinsights_pageinsights_refresh_report"),n.append("security",l["a"].prototype.$mi.nonce),n.append("report","pageinsights"),n.append("post_id",o),n.append("json",1),a.a.post(l["a"].prototype.$mi.ajax,n).then((function(t){e(t.data)})).catch((function(e){t.dispatch("$_app/block",!1,{root:!0}),e.response}))}))},u={fetchReportData:c},d=function(t){return new Promise((function(e){u.fetchReportData(t).then((function(n){"license_level"!==n.data.message?n.success?(t.commit("UPDATE_REPORT_DATA",{report:"pageinsights",data:n.data}),e(!0)):(l["a"].prototype.$mi_error_toast(!1,n.data.message,n.data.footer),e(!1)):e(!1)}))}))},f={getReportData:d},p=function(t){return t.date},g=function(t){return t.pageinsights},h=function(t){return t.loaded},b=function(t){return t.error},_=function(t){return t.noauth},m={date:p,pageinsights:g,loaded:h,error:b,noauth:_},v=function(t,e){e.report&&e.data&&t[e.report]&&l["a"].set(t,e.report,e.data)},w=function(t,e){e.start&&e.end&&(l["a"].set(t.date,"start",e.start),l["a"].set(t.date,"end",e.end))},y=function(t,e){l["a"].set(t.date,"interval",e)},O=function(t,e){t.loaded=e},j=function(t,e){t.error=e},x=function(t){t.noauth=!0,t.loaded=!0},C={UPDATE_REPORT_DATA:v,UPDATE_DATE:w,UPDATE_INTERVAL:y,UPDATE_LOADED:O,SET_ERROR:j,ENABLE_NOAUTH:x},P={loaded:!1,pageinsights:{},error:!1,noauth:!1},$={namespaced:!0,state:P,actions:f,getters:m,mutations:C},E=n("561c"),D=n("2f62"),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"monsterinsights-content-lite"},[n("frontend-stats-general")],1)},A=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.overview.infobox?n("div",{staticClass:"monsterinsights-frontend-stats-inner"},[n("frontend-stats-column",{attrs:{label:t.text_insights_for,value:t.text_your_website}}),n("frontend-stats-column",{attrs:{label:t.text_sessions,value:t.overview.infobox.sessions.value}}),n("frontend-stats-column",{attrs:{label:t.text_pageviews,value:t.overview.infobox.pageviews.value}}),n("frontend-stats-column",{attrs:{label:t.text_session_duration,value:t.overview.infobox.duration.value}}),t.hasBounceData?n("frontend-stats-column",{attrs:{label:t.text_bounce_rate,value:t.overview.infobox.bounce.value}}):t._e(),!t.hasBounceData&&t.hasTotalUsersData?n("frontend-stats-column",{attrs:{label:t.text_total_users,value:t.overview.infobox.totalusers.value}}):t._e(),n("frontend-stats-column",{staticClass:"monsterinsights-frontend-column-button",attrs:{label:t.text_upsell_title}},[n("frontend-upsell")],1),n("frontend-stats-column",{staticClass:"monsterinsights-frontend-column-notifications"},[n("notifications-indicator")],1)],1):t._e()},U=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.columnClass},[t.label?n("div",{staticClass:"monsterinsights-stats-label",domProps:{textContent:t._s(t.label)}}):t._e(),t.value?n("div",{staticClass:"monsterinsights-stats-value",domProps:{innerHTML:t._s(t.value)}}):t._e(),t._t("default")],2)},M=[],F={name:"FrontendStatsColumn",props:{extraClass:{type:String,default:""},label:String,value:String},computed:{columnClass:function(){return"monsterinsights-stats-column "+this.extraClass}}},B=F,k=n("2877"),I=Object(k["a"])(B,R,M,!1,null,null,null),V=I.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"monsterinsights-button",attrs:{href:t.upgradeUrl},domProps:{textContent:t._s(t.text_button)}})},L=[],W={name:"FrontendUpsell",data:function(){return{text_button:Object(E["a"])("Upgrade to PRO","google-analytics-for-wordpress")}},computed:{upgradeUrl:function(){return this.$getUpgradeUrl("frontend-reports","admin-bar")}}},z=W,H=Object(k["a"])(z,N,L,!1,null,null,null),K=H.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"monsterinsights-notifications-indicator"},[n("a",{attrs:{href:t.sidebar_url,title:t.text_view_notifications}},[n("svg",{attrs:{width:"35",height:"39",viewBox:"0 0 35 39",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M17.6898 39C20.3431 39 22.4954 36.8177 22.4954 34.125H12.8841C12.8841 36.8177 15.0364 39 17.6898 39ZM33.8706 27.5963C32.4192 26.015 29.7035 23.6361 29.7035 15.8438C29.7035 9.9252 25.6108 5.18731 20.0922 4.02492V2.4375C20.0922 1.09154 19.0164 0 17.6898 0C16.3631 0 15.2873 1.09154 15.2873 2.4375V4.02492C9.76874 5.18731 5.67602 9.9252 5.67602 15.8438C5.67602 23.6361 2.96031 26.015 1.50893 27.5963C1.05818 28.0876 0.858356 28.6749 0.862112 29.25C0.870376 30.4992 1.83721 31.6875 3.27357 31.6875H32.1059C33.5423 31.6875 34.5099 30.4992 34.5174 29.25C34.5212 28.6749 34.3213 28.0869 33.8706 27.5963Z",fill:"#393F4C"}})]),t.has_notifications?n("span",{staticClass:"monsterinsights-notifications-unread",domProps:{textContent:t._s(t.notifications.length)}}):t._e()])])},Z=[];function Y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Y(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var J={name:"NotificationsIndicator",data:function(){return{text_view_notifications:Object(E["a"])("View notifications","google-analytics-for-wordpress")}},computed:q({},Object(D["b"])({notifications:"$_notifications/notifications",view_url:"$_notifications/view_url",sidebar_url:"$_notifications/sidebar_url"}),{has_notifications:function(){return this.notifications&&this.notifications.length>0}})},Q=J,X=Object(k["a"])(Q,G,Z,!1,null,null,null),tt=X.exports;function et(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function nt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?et(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):et(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ot={name:"FrontendStatsGeneral",components:{NotificationsIndicator:tt,FrontendUpsell:K,FrontendStatsColumn:V},data:function(){return{text_insights_for:Object(E["a"])("Last 30 Days Insights for:","google-analytics-for-wordpress"),text_your_website:Object(E["a"])("Your Website","google-analytics-for-wordpress"),text_sessions:Object(E["a"])("Sessions","google-analytics-for-wordpress"),text_pageviews:Object(E["a"])("Pageviews","google-analytics-for-wordpress"),text_session_duration:Object(E["a"])("Avg. Duration","google-analytics-for-wordpress"),text_bounce_rate:Object(E["a"])("Bounce Rate","google-analytics-for-wordpress"),text_total_users:Object(E["a"])("Total Users","google-analytics-for-wordpress")}},computed:nt({},Object(D["b"])({overview:"$_reports/overview"}),{text_upsell_title:function(){return this.$mi.is_admin?Object(E["a"])("More data is available","google-analytics-for-wordpress"):Object(E["a"])("Want to see page-specific stats?","google-analytics-for-wordpress")},hasBounceData:function(){return"undefined"!==typeof this.overview.infobox.bounce&&"undefined"!==typeof this.overview.infobox.bounce.value},hasTotalUsersData:function(){return"undefined"!==typeof this.overview.infobox.totalusers&&"undefined"!==typeof this.overview.infobox.totalusers.value}}),mounted:function(){var t=this;this.$mi.authed?this.$store.dispatch("$_reports/getReportData","overview").then((function(){t.$store.commit("$_frontend/UPDATE_LOADED",!0)})):this.$store.commit("$_frontend/ENABLE_NOAUTH")}},rt=ot,st=Object(k["a"])(rt,T,U,!1,null,null,null),it=st.exports,at={name:"FrontendStatsContent",components:{FrontendStatsGeneral:it}},lt=at,ct=Object(k["a"])(lt,S,A,!1,null,null,null),ut=ct.exports,dt=n("f284"),ft=n("d3fc"),pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"monsterinsights-powered-by",attrs:{href:t.upgrade_url},domProps:{textContent:t._s(t.text_powered_by)}})},gt=[],ht={name:"FrontendPoweredBy",data:function(){return{text_powered_by:Object(E["a"])("Powered by MonsterInsights","google-analytics-for-wordpress"),upgrade_url:this.$getUpgradeUrl("admin-bar","powered-by")}}},bt=ht,_t=Object(k["a"])(bt,pt,gt,!1,null,null,null),mt=_t.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"monsterinsights-not-authenticated-notice"},[n("h3",{domProps:{textContent:t._s(t.text_no_auth)}}),n("div",{staticClass:"monsterinsights-settings-input monsterinsights-settings-input-authenticate"},[n("p",{domProps:{textContent:t._s(t.text_auth_label)}}),n("div",[n("a",{staticClass:"monsterinsights-wp-button monsterinsights-wp-button-primary",attrs:{href:t.wizard_url},domProps:{textContent:t._s(t.text_wizard)}}),n("a",{staticClass:"monsterinsights-wp-button",attrs:{href:t.learn_link},domProps:{textContent:t._s(t.text_learn)}})])])])},wt=[],yt={name:"FrontendNoAuth",data:function(){return{text_no_auth:Object(E["a"])("Please Setup Website Analytics to See Audience Insights","google-analytics-for-wordpress"),text_auth_label:Object(E["a"])("MonsterInsights, WordPress analytics plugin, helps you connect your website with Google Analytics, so you can see how people find and use your website. Over 3 million website owners use MonsterInsights to see the stats that matter and grow their business.","google-analytics-for-wordpress"),text_wizard:Object(E["a"])("Connect MonsterInsights and Setup Website Analytics","google-analytics-for-wordpress"),text_learn:Object(E["a"])("Learn More","google-analytics-for-wordpress"),wizard_url:this.$mi.wizard_url,learn_link:this.$mi.getting_started_url}}},Ot=yt,jt=Object(k["a"])(Ot,vt,wt,!1,null,null,null),xt=jt.exports;function Ct(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function Pt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ct(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ct(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var $t={name:"ModuleFrontendReports",components:{FrontendNoAuth:xt,FrontendPoweredBy:mt,WidgetReportError:ft["a"],FrontendStatsContent:ut},data:function(){return{statsVisible:!1,page_id:this.$mi.page_id,text_insights:Object(E["a"])("Insights","google-analytics-for-wordpress")}},created:function(){var t="$_reports";t in this.$store._modules.root._children||this.$store.registerModule(t,dt["a"]);var e="$_frontend";e in this.$store._modules.root._children||this.$store.registerModule(e,$)},computed:Pt({},Object(D["b"])({reportdata:"$_frontend/pageinsights",loaded:"$_frontend/loaded",error:"$_frontend/error",noauth:"$_frontend/noauth",notifications:"$_notifications/notifications"}),{toggleButtonClass:function(){var t="ab-item ab-empty-item monsterinsights-toggle";return this.statsVisible&&(t+=" monsterinsights-toggle-active"),t},has_notifications:function(){return this.notifications&&this.notifications.length>0}}),methods:{toggleStatsVisibility:function(){this.statsVisible=!this.statsVisible}}},Et=$t,Dt=Object(k["a"])(Et,o,r,!1,null,null,null),St=Dt.exports,At=n("7460"),Tt=n("6c6b"),Ut=(n("f531"),n("4360")),Rt={install:function(t,e){var n=e.store;t.prototype.$mi_loading_toast=function(){},t.prototype.$mi_error_toast=function(t){var e=t,o=e.type,r=void 0===o?"error":o,s=e.customContainerClass,i=void 0===s?"monsterinsights-swal":s,a=e.allowOutsideClick,l=void 0!==a&&a,c=e.allowEscapeKey,u=void 0!==c&&c,d=e.allowEnterKey,f=void 0!==d&&d,p=e.title,g=void 0===p?Object(E["a"])("Error","google-analytics-for-wordpress"):p,h=e.html,b=void 0===h?Object(E["a"])("Please try again.","google-analytics-for-wordpress"):h,_=e.footer,m=void 0!==_&&_;t={type:r,customContainerClass:i,allowOutsideClick:l,allowEscapeKey:u,allowEnterKey:f,title:g,html:b,footer:m},n.commit("$_frontend/SET_ERROR",{title:t.title,content:t.html,footer:t.footer})},t.prototype.$swal={close:function(){}}}},Mt=Rt;window.addEventListener("load",(function(){var t=document.getElementById("wp-admin-bar-monsterinsights_frontend_button");(l["a"].config.productionTip=!1,t)&&(Object(Tt["a"])({ctrl:!0}),l["a"].use(At["a"]),l["a"].use(Mt,{store:Ut["a"]}),Object(E["c"])(window.monsterinsights.translations,"google-analytics-for-wordpress"),new l["a"]({store:Ut["a"],mounted:function(){Ut["a"].dispatch("$_notifications/getNotifications")},render:function(t){return t(St)}}).$mount(t))}))},f531:function(t,e,n){}});