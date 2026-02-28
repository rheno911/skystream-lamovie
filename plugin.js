function getManifest(){
    return {name:"LaMovie",id:"com.rheno911.lamovie",version:1,baseUrl:"https://la.movie"};
}

function getHome(callback){
    callback({type:"success",value:'{"Featured":[{"title":"Test Movie","url":"61323","posterUrl":"https://via.placeholder.com/300x450"}]}'});
}

function search(query,callback){
    callback({type:"success",value:'[{"title":"'+query+'","url":"61323","posterUrl":"https://via.placeholder.com/300x450"}]'});
}

function load(id,callback){
    callback({type:"success",value:JSON.stringify({
        url:id,data:id,title:"Test Movie (2010)",description:"Working!",year:2010
    })});
}

function loadStreams(id,callback){
    callback({type:"success",value:JSON.stringify([{
        name:"Auto - LaMovie",
        url:"https://s15.vimeos.zip/hls2/01/00009/8l2e7h1uapnz_h/master.m3u8",
        headers:{"User-Agent":"Mozilla/5.0","Referer":"https://player.vimeo.com/"}
    }])});
}
