(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{277:function(e,t,a){"use strict";a.r(t);var s={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},o=a(5),r=Object(o.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[a("h1",{attrs:{id:"extending-directus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extending-directus","aria-hidden":"true"}},[e._v("#")]),e._v(" Extending Directus")]),e._v(" "),a("blockquote",[a("p",[e._v("To keep the core codebase as simple and clean as possible, all edge-case functionality is added through extensions. Directus is completely modular and extensible, so you'll never hit a ceiling or outgrow the framework.")])]),e._v(" "),a("h2",{attrs:{id:"architecture-explanation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#architecture-explanation","aria-hidden":"true"}},[e._v("#")]),e._v(" Architecture Explanation")]),e._v(" "),a("p",[e._v("Despite being an App resource, Directus extensions are actually stored in the API codebase/repository. This seems counter-intuitive, but is neccesary because the Directus App supports multitenancy (you can connect to multiple APIs from one App).")]),e._v(" "),a("p",[e._v('If you install a custom interface, like a "Seating Chart", you\'ll want that interface to be available within your project no matter which App you connect through. Because of this, we store all '),a("em",[e._v("custom")]),e._v(" extensions in the API Instance, and to keep things organized, we decided to also serve all "),a("em",[e._v("core")]),e._v(" extensions from the same place.")]),e._v(" "),a("p",[a("router-link",{attrs:{to:"./architecture.html"}},[e._v("Learn more about the Extension Architecture")])],1),e._v(" "),a("h2",{attrs:{id:"extension-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extension-types","aria-hidden":"true"}},[e._v("#")]),e._v(" Extension Types")]),e._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"./interfaces.html"}},[e._v("Interfaces")]),e._v(" — Interfaces customize how a field's presentation. For example a "),a("code",[e._v("STRING")]),e._v(" field type might be shown as a text-input, dropdown, Map, WYSIWYG, or Color Picker. And on the Item Browse page you may want a "),a("code",[e._v("BOOLEAN")]),e._v(" shown as a "),a("code",[e._v("✓")]),e._v(" or "),a("code",[e._v("×")]),e._v(" instead of "),a("code",[e._v("true")]),e._v(" or "),a("code",[e._v("false")]),e._v(".")],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"./layouts.html"}},[e._v("Layouts")]),e._v(" — Layouts are custom designs for the Item Browse page. You can set the layout to different optins based on the data you are viewing. For example you can use the default Listing view for raw data, the Card view for images, or a Calendar view when browsing items by date.")],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"./pages.html"}},[e._v("Pages")]),e._v(" — Pages are a way to add full-featured modules to Directus. You can build page modules for: custom dashboards, reports, point-of-sale systems, or anything else. Each page is protected within the auth gateway and can easily access project data and global variables.")],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"./hooks.html"}},[e._v("Hooks")]),e._v(" — Directus provides event hooks for all actions performed within the App or API. For example, you can run code every time an item is edited within a specific collection. We've also included an example Web Hook which pushes an HTTP callback whenever certain events occur.")],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"./custom-endpoints.html"}},[e._v("Custom Endpoints")]),e._v(" — The Directus API gives you comprehensive access to all content in your database dynamically, but you can add additional endpoints as needed. You can also use API Filters to augment the data returned by our core endpoints.")],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"./storage-adapters.html"}},[e._v("Storage Adapters")]),e._v(" — Storage Adapters allow you to save Directus files anywhere. The default storage adapter is the API server's filesystem, but Directus includes adapters for AWS-S3 and other popular services. Or you can create custom storage adapters to store your assets elsewhere.")],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"./auth-providers.html"}},[e._v("Auth Providers")]),e._v(" — Directus offers built-in authentication using securely hashed passwords. Alternatively, you can enable any of our Single Sing-On (SSO) services or create your own adapter for custom authentication. Directus also supports SCIM for external user management.")],1)]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Disabled Extensions")]),e._v(" "),a("p",[e._v("You can include an extension in your project but disable it from being used by prepending its container directory with an underscore ("),a("code",[e._v("_")]),e._v("). For example, the demo Page is included in the API codebase but is disabled by default: "),a("code",[e._v("api/extensions/core/pages/_demo/")])])]),e._v(" "),a("h2",{attrs:{id:"customizing-the-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customizing-the-app","aria-hidden":"true"}},[e._v("#")]),e._v(" Customizing the App")]),e._v(" "),a("h3",{attrs:{id:"custom-scripts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-scripts","aria-hidden":"true"}},[e._v("#")]),e._v(" Custom Scripts")]),e._v(" "),a("p",[e._v("The App includes an empty "),a("code",[e._v("/script.js")]),e._v(" file where you can add additional functionality to the App. For example you could use this file to add analytics or other trackers to the Directus Application.")]),e._v(" "),a("h3",{attrs:{id:"custom-styles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-styles","aria-hidden":"true"}},[e._v("#")]),e._v(" Custom Styles")]),e._v(" "),a("p",[e._v("The Directus Application includes an empty "),a("code",[e._v("/style.css")]),e._v(" file to override any part of the App with custom styles. Nearly every component in the platform has a class associated with it you can use to tweak the styles.")]),e._v(" "),a("p",[e._v("Most styling related properties in the application are using CSS Custom Properties (variables). These variables can be overwritten in your custom styles file to efficiently change the appearance of the whole app. All variables that can be overwritten can be referenced in the "),a("a",{attrs:{href:"https://github.com/directus/app/blob/master/src/assets/global.scss",target:"_blank",rel:"noopener noreferrer"}},[e._v("global styles file"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If you have a style tweak that would benefit all users of Directus, please consider opening a Pull Request for it!")])]),e._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("The styles of the actual components in the app are being added to the DOM dynamically. Therefore, to avoid being overwritten by the cascade you'll need to use "),a("code",[e._v("!important")]),e._v(" in your styles.")])])])},[],!1,null,null,null);r.options.__file="README.md";t.default=r.exports}}]);