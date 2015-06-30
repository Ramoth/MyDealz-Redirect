// ==UserScript==
// @name         MyDealz Weiterleitung
// @namespace    http://www.mydealz.de
// @version      1.1
// @description  Automatische Weiterleitung von heißen Dealz auf aktuelle Dealz
// @author       Ramoth
// @include      http://www.mydealz.de/deals
// @include      http://www.mydealz.de/gutscheine
// @include      http://www.mydealz.de/freebies
// @grant        none
// ==/UserScript==

var oldDeals = "http://www.mydealz.de/deals"; 
var newDeals = "http://www.mydealz.de/deals-new"; 

var oldGutscheine = "http://www.mydealz.de/gutscheine"; 
var newGutscheine = "http://www.mydealz.de/gutscheine-new"; 

var oldFreebies = "http://www.mydealz.de/freebies"; 
var newFreebies = "http://www.mydealz.de/freebies-new"; 

if (document.location.href.indexOf(oldDeals) == 0) 
{ 
    document.location.href=newDeals; 
}  

if (document.location.href.indexOf(oldGutscheine) == 0) 
{ 
    document.location.href=newGutscheine; 
}  

if (document.location.href.indexOf(oldFreebies) == 0) 
{ 
    document.location.href=newFreebies; 
}  
