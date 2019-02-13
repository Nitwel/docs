(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{255:function(e,t,s){"use strict";s.r(t);var r={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},a=s(5),n=Object(a.a)(r,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[s("h1",{attrs:{id:"🤔-troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🤔-troubleshooting","aria-hidden":"true"}},[e._v("#")]),e._v(" 🤔 Troubleshooting")]),e._v(" "),s("blockquote",[s("p",[e._v("Below are solutions to some common issues that you may experience when working with Directus. You can also post questions to "),s("a",{attrs:{href:"https://stackoverflow.com/questions/tagged/directus",target:"_blank",rel:"noopener noreferrer"}},[e._v("StackOverflow"),s("OutboundLink")],1),e._v(" or reach out to the members of our "),s("a",{attrs:{href:"https://slack.getdirectus.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Slack"),s("OutboundLink")],1),e._v(" community!")])]),e._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("Premium Support")]),e._v(" "),s("p",[e._v("Due to the enormous number of people using Directus, our Core Team can only provide support to paying Directus Cloud customers or clients who purchase support hours.")])]),e._v(" "),s("h2",{attrs:{id:"installation-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-issues","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation Issues")]),e._v(" "),s("h3",{attrs:{id:"the-app-shows-an-error-saying-that-there-aren-t-any-system-extensions-installed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-app-shows-an-error-saying-that-there-aren-t-any-system-extensions-installed","aria-hidden":"true"}},[e._v("#")]),e._v(" The app shows an error saying that there aren't any system extensions installed")]),e._v(" "),s("p",[e._v("This is shown when the API you're trying to connect to doesn't have any extensions installed. This often occurs when you've installed the API from source, but forgot to build the extensions. You can fix this by going in the "),s("code",[e._v("extensions")]),e._v(" folder in your "),s("code",[e._v("api")]),e._v(" directory and running "),s("code",[e._v("npm install && npm run build")])]),e._v(" "),s("h3",{attrs:{id:"when-i-refresh-i-get-a-404"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-i-refresh-i-get-a-404","aria-hidden":"true"}},[e._v("#")]),e._v(" When I refresh, I get a 404")]),e._v(" "),s("p",[e._v("The application is a single-page webapp, meaning that all routing is done client side. By default, the app tries using pretty URLs for it's pages. If your webserver doesn't route all requests to "),s("code",[e._v("/index.html")]),e._v(" correctly, there's no page to return and you'll end up with a 404. To fix this, you can either update your servers routing setup "),s("em",[e._v("or")]),e._v(" switch the app's "),s("router-link",{attrs:{to:"./../advanced/app/configuration.html"}},[s("code",[e._v("routerMode")]),e._v(" to "),s("code",[e._v("hash")])]),e._v(".")],1),e._v(" "),s("h3",{attrs:{id:"my-mamp-installation-returns-403s-for-everything"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#my-mamp-installation-returns-403s-for-everything","aria-hidden":"true"}},[e._v("#")]),e._v(" My MAMP installation returns 403s for everything")]),e._v(" "),s("p",[e._v("MAMP has a known issue where it strips out the "),s("code",[e._v("Authorization")]),e._v(" header which Directus uses to provide the API with the user token. To fix this, change MAMP's PHP setting from CGI to Module mode.")]),e._v(" "),s("h2",{attrs:{id:"buildchain-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#buildchain-issues","aria-hidden":"true"}},[e._v("#")]),e._v(" Buildchain Issues")]),e._v(" "),s("p",[e._v("If for some reason the buildchain is acting up, or you're not seeing the changes you've made reflected in the browser, please try the following things:")]),e._v(" "),s("h3",{attrs:{id:"restart-the-buildchain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restart-the-buildchain","aria-hidden":"true"}},[e._v("#")]),e._v(" Restart the buildchain")]),e._v(" "),s("p",[e._v("If you're running the application in development mode (by running "),s("code",[e._v("npm run dev")]),e._v("), stop the buildchain by pressing Ctrl+C and re-start it by running "),s("code",[e._v("npm run dev")]),e._v(" again.")]),e._v(" "),s("h3",{attrs:{id:"delete-the-caches"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-the-caches","aria-hidden":"true"}},[e._v("#")]),e._v(" Delete the caches")]),e._v(" "),s("p",[e._v("The buildchain caches the changes in the "),s("code",[e._v("node_modules/.cache")]),e._v(" folder. Stop the buildchain by pressing Ctrl+C, delete that folder and restart the buildchain.")]),e._v(" "),s("h3",{attrs:{id:"delete-and-re-install-node-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-and-re-install-node-modules","aria-hidden":"true"}},[e._v("#")]),e._v(" Delete and re-install node_modules")]),e._v(" "),s("p",[e._v("This will both delete the cache and makes sure you're using the latest versions of the dependencies that Directus uses.")]),e._v(" "),s("h3",{attrs:{id:"re-clone-the-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#re-clone-the-project","aria-hidden":"true"}},[e._v("#")]),e._v(" Re-clone the project")]),e._v(" "),s("p",[e._v("If all else fails, a full reinstall of everything has to work. If it doesn't work after a reinstall, something else in the code is broken.")])])},[],!1,null,null,null);n.options.__file="troubleshooting.md";t.default=n.exports}}]);