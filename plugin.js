function getManifest(){return{name:"LaMovie",id:"com.rheno911.lamovie",version:9};}
function getHome(callback){callback({type:"success",value:'{"Peliculas":[{"title":"Test LaMovie","url":"61323","posterUrl":"https://la.movie/wp-content/uploads"}]'});}
function search(query,callback){callback({type:"success",value:'[{"title":"'+query+' LaMovie","url":"61323","posterUrl":"https://la.movie/wp-content/uploads"}]'});}
function load(id,callback){callback({type:"success",value:'{"url":"'+id+'","data":"'+id+'","title":"Pelicula ID '+id+'","year":2024}'});}
function loadStreams(id,callback){callback({type:"success",value:'[{"name":"HD LaMovie","url":"https://s15.vimeos.zip/hls2/01/00009/8l2e7h1uapnz_h/master.m3u8","headers":{"Referer":"https://la.movie/"}}]'});}
