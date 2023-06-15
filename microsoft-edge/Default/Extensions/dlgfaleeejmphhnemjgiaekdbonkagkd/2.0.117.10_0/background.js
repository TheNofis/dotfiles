/*
##
##  Enhancer for YouTube™
##  =====================
##
##  Author: Maxime RF <https://www.mrfdev.com>
##
##  This file is protected by copyright laws and international copyright
##  treaties, as well as other intellectual property laws and treaties.
##
##  All rights not expressly granted to you are retained by the author.
##  Read the license.txt file for more details.
##
##  © MRFDEV.com - All Rights Reserved
##
*/
(function(){chrome.runtime.onInstalled.addListener(function(c){"install"===c.reason?(chrome.runtime.openOptionsPage(),chrome.tabs.create({url:"https://www.mrfdev.com/event?n=install&b=edge&e=enhancer-for-youtube&v="+chrome.runtime.getManifest().version,active:!0}),chrome.storage.local.set({date:Date.now()}),chrome.tabs.query({url:"*://www.youtube.com/*"},function(a){a.forEach(function(b){chrome.scripting.executeScript({target:{tabId:b.id},files:["start.js","content.js"]})})})):"update"===
c.reason&&"2.0.116"===c.previousVersion?chrome.storage.local.set({whatsnew:!0}):"update"===c.reason&&/2\.0\.11[0-5]/.test(c.previousVersion)?chrome.storage.local.set({reload:!0,update:Date.now(),whatsnew:!0}):"update"===c.reason&&/2\.0\.103/.test(c.previousVersion)?chrome.storage.local.get({theme:"default-light"},function(a){"default-light"===a.theme?a.theme="default-dark":a.darktheme=!0;a.controlbar={active:!1,autohide:!1,centered:!0,position:"absolute"};a.update=Date.now();a.reload=!0;chrome.storage.local.set(a)}):
"update"===c.reason&&/2\.0\.(9|10[0-1])/.test(c.previousVersion)&&chrome.storage.local.get({autopausevideos:!0,customtheme:"",disablepreloading:!1,enablefilters:!1,pinnedplayer:!0,pinnedplayerposition:"_top-left",pinnedplayersize:"_400x225",quality1:"hd1080",quality2:"hd720",removeads:!1,removeannotations:!1,slideeffect:!1,theme:"default",toolbarbuttons:"clean,cinema,resize,detach,boost,loop,slowdown,speed,speedup,filters,script",script:""},function(a){a.customcolors={"--main-color":"#00adee","--main-background":"#111111",
"--second-background":"#181818","--hover-background":"#232323","--main-text":"#eff0f1","--dimmer-text":"#cccccc","--shadow":"#000000"};a.customcssrules=a.customtheme;a.customtheme="custom"===a.theme?!0:!1;"default"===a.theme||"custom"===a.theme?(a.themevariant="youtube-deep-dark.css",a.theme="default-dark"):(a.themevariant=a.theme,a.theme="youtube-deep-dark",a.darktheme=!0);a.controlbar={active:!0,autohide:a.slideeffect,centered:!0,position:"fixed"};delete a.slideeffect;a.controls=[];a.controls.push("loop");
a.controls.push("reverse-playlist");0<=a.toolbarbuttons.indexOf("boost")&&a.controls.push("volume-booster");a.controls.push("whitelist");a.controls.push("not-interested");a.controls.push("cards-end-screens");0<=a.toolbarbuttons.indexOf("cinema")&&a.controls.push("cinema-mode");0<=a.toolbarbuttons.indexOf("resize")&&a.controls.push("size");a.controls.push("pop-up-player");0<=a.toolbarbuttons.indexOf("slowdown")&&a.controls.push("speed-minus");a.controls.push("speed");0<=a.toolbarbuttons.indexOf("speedup")&&
a.controls.push("speed-plus");a.controls.push("video-filters");a.controls.push("screenshot");a.controls.push("keyboard-shortcuts");0<=a.toolbarbuttons.indexOf("script")&&a.controls.push("custom-script");0<=a.toolbarbuttons.indexOf("options")&&a.controls.push("options");delete a.toolbarbuttons;a.applyvideofilters=a.enablefilters;delete a.enablefilters;a.blockads=a.removeads;delete a.removeads;a.blockautoplay=a.autopausevideos;delete a.autopausevideos;a.customscript=a.script;delete a.script;a.hidecardsendscreens=
a.removeannotations;delete a.removeannotations;a.miniplayer=a.pinnedplayer;delete a.pinnedplayer;a.miniplayerposition=a.pinnedplayerposition;delete a.pinnedplayerposition;a.miniplayersize=a.pinnedplayersize;delete a.pinnedplayersize;a.qualityembeds=a.quality2;a.qualityembedsfullscreen=a.quality1;a.qualityplaylists=a.quality1;a.qualityplaylistsfullscreen=a.quality1;a.qualityvideos=a.quality1;a.qualityvideosfullscreen=a.quality1;delete a.quality1;delete a.quality2;a.stopvideos=a.disablepreloading;delete a.disablepreloading;
a.update=Date.now();a.reload=!0;chrome.storage.local.set(a);chrome.storage.local.remove("autofocusevents autopausevideos disablepreloading enablefilters permissions pinnedplayer pinnedplayerposition pinnedplayersize quality1 quality2 quality3 quality4 removeads removeannotations script slideeffect toolbarbackgroundcolor toolbarbordercolor toolbarbuttons toolbarcolor toolbarcoloractive toolbaropacity toolbartooltips transparency visitor_info1_live".split(" "))});"update"===c.reason&&chrome.tabs.query({url:"*://www.youtube.com/*"},
function(a){a.forEach(function(b){chrome.scripting.executeScript({target:{tabId:b.id},files:["start.js","content.js"]})})})});chrome.runtime.setUninstallURL("https://www.mrfdev.com/event?n=uninstall&b=edge&e=enhancer-for-youtube&v="+chrome.runtime.getManifest().version);chrome.runtime.onMessage.addListener(function(c,a,b){b=c.request;if("init"===b)chrome.scripting.executeScript({target:{tabId:a.tab.id},func:(d,e,g)=>{var h=window.efyt||{};h.prefs=d;h.reload=d.reload;h.resources=e;h.version=g;window.efyt=
h;window.Polymer&&(d=document.createElement("script"),d.src=e+"/youtube-polymer.js",document.head.appendChild(d),d.remove())},args:[c.prefs,chrome.runtime.getURL("resources"),chrome.runtime.getManifest().version],world:"MAIN",injectImmediately:!0});else if("get-messages"===b){var f=chrome.i18n.getMessage("locale_code"),k="add_to_whitelist boost_volume brightness cinema_mode color_inversion contrast custom_script expand flip_horizontally flip_vertically gaussian_blur grayscale hue_rotation keyboard_shortcuts loop loop_end loop_start message options pop_up_player remove_ads remove_from_whitelist reset reverse_playlist saturation screenshot sepia shrink skip_ads speed stop toggle_visibility video_filters".split(" ");
chrome.storage.local.get({localecode:f,whatsnew:!1},function(d){var e={};if(f===d.localecode){for(var g=k.length-1;0<=g;g--)e[k[g]]=chrome.i18n.getMessage(k[g]);chrome.tabs.sendMessage(a.tab.id,{message:"set-messages",messages:e})}else fetch(`_locales/${d.localecode}/messages.json`).then(function(h){return h.json()}).then(function(h){for(var l=k.length-1;0<=l;l--)e[k[l]]=h[k[l]].message;chrome.tabs.sendMessage(a.tab.id,{message:"set-messages",messages:e})});d.whatsnew&&(chrome.storage.local.remove("whatsnew"),
chrome.tabs.create({url:"whats-new.html",active:!0}),chrome.tabs.query({url:"*://www.youtube.com/*"},function(h){h.forEach(function(l){chrome.tabs.sendMessage(l.id,{message:"pause-video"})})}))})}else"pause-videos"===b?chrome.tabs.query({url:"*://www.youtube.com/*"},function(d){d.forEach(function(e){chrome.tabs.sendMessage(e.id,{message:"pause-video"})})}):"set-cookie"===b?chrome.cookies.set({url:c.url,name:c.name,value:c.value,domain:".youtube.com",path:"/",expirationDate:Math.floor(Date.now()/1E3)+
31556926}):"convert-short"===b?chrome.tabs.update(a.tab.id,{url:a.tab.url.replace("shorts/","watch?v=")}):"pop-up-player"===b?chrome.windows.create(c.options,function(d){chrome.windows.update(d.id,{drawAttention:!0})}):"configure-keyboard-shortcuts"===b?chrome.tabs.create({url:"edge://extensions/shortcuts",active:!0}):"keyboard-shortcuts"===b?chrome.tabs.create({url:"https://www.mrfdev.com/youtube-keyboard-shortcuts",active:!0}):"always-on-top"===b?chrome.tabs.create({url:"https://www.mrfdev.com/always-on-top",
active:!0}):"custom-script"===b?chrome.storage.local.get({customscript:""},function(d){chrome.scripting.executeScript({target:{tabId:a.tab.id},func:e=>{var g=document.createElement("script");g.textContent=e;document.head.appendChild(g);g.remove()},args:[d.customscript],world:"MAIN",injectImmediately:!0})}):"whitelist"===b?chrome.storage.local.get({whitelist:""},function(d){d=""!==d.whitelist?d.whitelist.split(","):[];var e=c.channel.replace(/,/g,"").trim();if("add"===c.action&&0>d.indexOf(e)){d.push(e);
try{d.sort(function(g,h){return g.localeCompare(h)})}catch(g){d.sort()}}else"remove"===c.action&&(e=d.indexOf(e),-1!==e&&d.splice(e,1));chrome.storage.local.set({whitelist:d.toString()})}):"dark-theme-off"===b?chrome.storage.local.get({darktheme:!1},function(d){d.darktheme&&chrome.storage.local.set({darktheme:!1})}):"options-page"===b?chrome.runtime.openOptionsPage():"content-scripts"===b&&chrome.scripting.executeScript({target:{tabId:a.tab.id},files:["start.js","content.js"]})});chrome.storage.onChanged.addListener(function(c,
a){for(const b in c)"undefined"!==typeof c[b].newValue&&("customscript"!==b&&"popuplayersize"!==b&&chrome.tabs.query({url:"*://www.youtube.com/*"},function(f){f.forEach(function(k){chrome.tabs.sendMessage(k.id,{message:"preference-changed",name:b,value:c[b].newValue})})}),"disableautoplay"===b&&chrome.cookies.get({url:"https://www.youtube.com",name:"PREF"},function(f){f=f?f.value.split("&"):[];var k=f.findIndex(function(d){return/f5=[\w\d]+/.test(d)});-1===k&&(k=f.length);f[k]=!0===c[b].newValue?
"f5=30000":"f5=20000";chrome.cookies.set({url:"https://www.youtube.com",name:"PREF",value:f.join("&"),domain:".youtube.com",path:"/",expirationDate:Math.floor(Date.now()/1E3)+31556926})}))});chrome.commands.onCommand.addListener(function(c){var a={"c070-toggle-loop":"loop","c080-stop-video":"stop","c090-reverse-playlist":"reverse-playlist","c100-toggle-volume-booster":"volume-booster","c110-whitelist":"whitelist","c120-clear-ads":"not-interested","c130-toggle-annotations":"cards-end-screens","c140-toggle-cinema-mode":"cinema-mode",
"c150-toggle-player-size":"size","c160-center-video-player":"size","c170-pop-up-player":"pop-up-player","c180-decrease-speed":"speed-minus","c190-increase-speed":"speed-plus","c200-default-speed":"speed","c210-normal-speed":"speed","c220-toggle-video-filters":"video-filters","c230-flip-horizontally":"flip-horizontally","c240-flip-vertically":"flip-vertically","c250-take-screenshot":"screenshot","c260-keyboard-shortcuts":"keyboard-shortcuts","c270-custom-script":"custom-script"};switch(c){case "c000-options-page":chrome.runtime.openOptionsPage();
break;case "c020-theme-youtube-dark":chrome.storage.local.set({darktheme:!0,theme:"default-dark"});break;case "c030-theme-youtube-deep-dark":chrome.storage.local.set({darktheme:!0,theme:"youtube-deep-dark"});break;case "c040-theme-youtube-deep-dark-custom":chrome.storage.local.set({darktheme:!0,theme:"youtube-deep-dark-custom"});break;case "c050-theme-custom-theme":chrome.storage.local.get({customtheme:!1},function(b){chrome.storage.local.set({customtheme:!b.customtheme})});break;default:chrome.tabs.query({lastFocusedWindow:!0,
active:!0},function(b){chrome.tabs.sendMessage(b[0].id,{message:"command",command:c,control:a[c]?a[c]:""})})}});chrome.action.onClicked.addListener(function(c){chrome.runtime.openOptionsPage()});chrome.storage.local.get({disableautoplay:!1,theatermode:!1},function(c){c.disableautoplay&&chrome.cookies.get({url:"https://www.youtube.com",name:"PREF"},function(a){a=a?a.value.split("&"):[];var b=a.findIndex(function(f){return/f5=[\w\d]+/.test(f)});-1===b&&(b=a.length);a[b]="f5=30000";chrome.cookies.set({url:"https://www.youtube.com",
name:"PREF",value:a.join("&"),domain:".youtube.com",path:"/",expirationDate:Math.floor(Date.now()/1E3)+31556926})});c.theatermode&&chrome.cookies.set({url:"https://www.youtube.com",name:"wide",value:"1",domain:".youtube.com",path:"/",expirationDate:Math.floor(Date.now()/1E3)+31556926});chrome.tabs.query({url:"*://www.youtube.com/*"},function(a){a.forEach(function(b){chrome.scripting.executeScript({target:{tabId:b.id},files:["init.js"]})})})})})();