// ==UserScript==
// @name         Pistonheads Ad Hider
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://www.pistonheads.com/gassing/topic.asp?*
// @grant        none
// ==/UserScript==

document.getElementsByClassName("mpu")[0].setAttribute("hidden","true");
