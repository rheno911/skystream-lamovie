function getManifest(){return{name:"LaMovie",id:"com.rheno911.lamovie",version:1};}
function getHome(cb){cb({type:"success",value:'{"Featured":[{"title":"Batman","url":"61323","posterUrl":"https://via.placeholder.com/300x450"}]}'});}
function search(q,cb){cb({type:"success",value:'[{"title":"'+q+' Movie","url":"61323","posterUrl":"https://via.placeholder.com/300x450"}]'});}
function load(id,cb){cb({type:"success",value:{title:"LaMovie "+id,description:"From la.movie",url:id,data:id,posterUrl:"https://via.placeholder.com/300x450"}});}
function loadStreams(id,cb){cb({type:"success",value:[{name:"Vimeo HD",url:"https://s15.vimeos.zip/hls2/01/00009/8l2e7h1uapnz_h/master.m3u8",headers:{Referer:"https://player.vimeo.com/"}}]});}
