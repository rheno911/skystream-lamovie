function getManifest(){
return{name:"LaMovie",id:"com.rheno911.lamovie",version:1,baseUrl:"https://la.movie"};
}

function getHome(callback){
callback({type:"success",value:'{"Featured":[{"title":"Test","url":"61323","posterUrl":"https://via.placeholder.com/300x450"}]}'});
}

function search(query,callback){
callback({type:"success",value:'[{"title":"'+query+' Test","url":"61323","posterUrl":"https://via.placeholder.com/300x450"}]'});  
}

function load(id,callback){
callback({type:"success",value:'{"url":"'+id+'","data":"'+id+'","title":"Test Movie","description":"Working","year":2010}'});
}

function loadStreams(id,callback){
callback({type:"success",value:'[{"name":"HD LaMovie","url":"https://s15.vimeos.zip/hls2/01/00009/8l2e7h1uapnz_h/master.m3u8?t=5VZL1TGidmweEI7Ac1ongv7fK3LPxareQzp0noB1izs&s=1772269709&e=43200&v=129352366&i=0.0&sp=0&fr=8l2e7h1uapnz&r=e","headers":{"User-Agent":"Mozilla/5.0","Referer":"https://player.vimeo.com/"}}]'});
}
