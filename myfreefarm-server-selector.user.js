// ==UserScript==
// @name         MyFreeFarm Server Selector
// @namespace    therealhypr-myfreefarm-server-selector
// @updateURL    https://github.com/TheRealHypR/myfreefarm-userscripts/raw/main/myfreefarm-server-selector.user.js
// @downloadURL  https://github.com/TheRealHypR/myfreefarm-userscripts/raw/main/myfreefarm-server-selector.user.js
// @icon         https://github.com/TheRealHypR/myfreefarm-userscripts/raw/main/farming.png
// @version      1.0
// @description  a script to always select a certain server
// @author       TheRealHypR
// @match        https://www.myfreefarm.de/*
// @grant        unsafeWindow
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js
// @run-at       document-end
// ==/UserScript==

//Change val() to the desired server
$('#loginserver').val('8')
