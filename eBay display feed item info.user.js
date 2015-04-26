// ==UserScript==
// @name         eBay display feed item info
// @namespace    http://mbignell.com/
// @version      0.1
// @description  Shows hover information on feed
// @author       Mike Bignell
// @match        http://www.ebay.co.uk/
// @grant        none
// ==/UserScript==

var allHoverInfos = document.getElementsByClassName("hover-info");

for(var i = 0; i < allHoverInfos.length; i++)
{
    var div = allHoverInfos[i];
    console.log(div);
    
    div.setAttribute("style","opacity: 0.5;");
}
