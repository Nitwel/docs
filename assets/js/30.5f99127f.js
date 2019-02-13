(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{269:function(t,e,a){"use strict";a.r(e);var s={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},r=a(5),i=Object(r.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h1",{attrs:{id:"standalone-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#standalone-application","aria-hidden":"true"}},[t._v("#")]),t._v(" Standalone Application")]),t._v(" "),a("blockquote",[a("p",[t._v("Our decoupled architecture allows you to install just the Directus Application, without the API. This is useful if you want one App to manage multiple APIs.")])]),t._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),a("p",[t._v('The Directus App is comprised of static files and does not have any special requirements. However if you would like to use "history" mode for clean URLs then you will need a way to route all traffic to the App\'s '),a("code",[t._v("/public/index.html")]),t._v(" file.")]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("The Directus application is a static single-page webapp (SPA) and can be installed in three ways:")]),t._v(" "),a("h3",{attrs:{id:"using-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-git","aria-hidden":"true"}},[t._v("#")]),t._v(" Using Git")]),t._v(" "),a("p",[t._v("The easiest way of installing and updating the app is through Git. By using the build branch on our repo, you're assured to have the latest version pre-bundled and ready to go.")]),t._v(" "),a("p",[t._v("To install the pre-bundled build version through Git, run")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clone -b build https://github.com/directus/app.git directus\n")])])]),a("h3",{attrs:{id:"manually"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manually","aria-hidden":"true"}},[t._v("#")]),t._v(" Manually")]),t._v(" "),a("p",[t._v("If you don't have access to the command line in your server, you can download the static bundle manually as a zip. Head over to "),a("a",{attrs:{href:"https://github.com/directus/app/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("the releases page"),a("OutboundLink")],1),t._v(" to download a fresh copy of the latest version.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("For instructions on how to setup a local development copy, checkout our "),a("a",{attrs:{href:"https://docs.directus.io/app/contributor/install-dev.html#decoupled",target:"_blank",rel:"noopener noreferrer"}},[t._v("dev install guide"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"using-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-docker","aria-hidden":"true"}},[t._v("#")]),t._v(" Using Docker")]),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"https://github.com/directus/docker",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/directus/docker"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p",[t._v("After you've installed the application, you need to create a config file. This file controls what API instances the app tries to connect to. The easiest way to create this file is by renaming or duplicating the "),a("code",[t._v("config_example.js")]),t._v(" file to "),a("code",[t._v("config.js")]),t._v(" and adjusting the default settings within.")]),t._v(" "),a("h2",{attrs:{id:"updating"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating","aria-hidden":"true"}},[t._v("#")]),t._v(" Updating")]),t._v(" "),a("h3",{attrs:{id:"using-git-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-git-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Using Git")]),t._v(" "),a("p",[t._v("If you're using a direct clone of the "),a("code",[t._v("build")]),t._v(" branch, all you need to do to update the application is run")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" pull\n")])])]),a("h3",{attrs:{id:"manually-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manually-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Manually")]),t._v(" "),a("p",[t._v("Updating is basically the same as installing fresh. You can download a copy of the latest version from "),a("a",{attrs:{href:"https://github.com/directus/app/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("the releases page"),a("OutboundLink")],1),t._v(" and overwrite the files you had before. "),a("strong",[t._v("Make sure not to override your "),a("code",[t._v("config.js")]),t._v(" file")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"using-docker-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-docker-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Using Docker")]),t._v(" "),a("p",[t._v("Updating the application is the same as in the manual way. Download a fresh copy of the application from the "),a("a",{attrs:{href:"https://github.com/directus/app/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("releases page"),a("OutboundLink")],1),t._v(" and overwrite all the files in use. Remember to restart your Docker process.")])])},[],!1,null,null,null);i.options.__file="standalone.md";e.default=i.exports}}]);