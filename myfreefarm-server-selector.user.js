// ==UserScript==
// @name         MyFreeFarm Server Selector
// @namespace    myfreefarm-server-selector
// @homepageURL  https://github.com/TheRealHypR/myfreefarm-userscripts/
// @updateURL    https://github.com/TheRealHypR/myfreefarm-userscripts/raw/master/myfreefarm-server-selector.user.js
// @downloadURL  https://github.com/TheRealHypR/myfreefarm-userscripts/raw/master/myfreefarm-server-selector.user.js
// @version      1.0
// @description  a script to always select a certain server
// @author       TheRealHypR
// @match        https://www.myfreefarm.de/*
// @grant        all
// @require      http://code.jquery.com/jquery-3.5.1.min.js
// @run-at       document-end
// ==/UserScript==

//Change val() to the desired server
$('#loginserver').val('8')
