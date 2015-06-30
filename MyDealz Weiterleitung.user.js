// ==UserScript==
// @name         MyDealz Weiterleitung
// @namespace    http://www.mydealz.de/deals
// @version      1.0
// @description  Automatische Weiterleitung von heißen Dealz auf aktuelle Dealz
// @author       Ramoth
// @include      http://www.mydealz.de/deals
// @grant        none
// ==/UserScript==

var oldPage = "http://www.mydealz.de/deals"; 
var newPage = "http://www.mydealz.de/deals-new"; 

if (document.location.href.indexOf(oldPage) == 0) 
{ 
    document.location.href=newPage; 
}  
