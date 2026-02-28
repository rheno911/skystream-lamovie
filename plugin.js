function getManifest() {
  return {
    "name": "LaMovie",
    "id": "com.rheno911.lamovie", 
    "version": 1,
    "baseUrl": "https://la.movie"
  };
}

function getHome(callback) {
  callback({
    "type": "success",
    "value": JSON.stringify({
      "Featured": [{
        "title": "Test Movie",
        "url": "61323",
        "posterUrl": "https://via.placeholder.com/300x450?text=LaMovie"
      }]
    })
  });
}

function search(query, callback) {
  callback({
    "type": "success", 
    "value": JSON.stringify([{
      "title": query + " (Test)",
      "url": "61323",
      "posterUrl": "https://via.placeholder.com/300x450?text=LaMovie"
    }])
  });
}

function load(id, callback) {
  callback({
    "type": "success",
    "value": JSON.stringify({
      "url": id,
      "data": id,
      "title": "Una loca película de vampiros (2010)",
      "description": "Test stream working!",
      "year": 2010
    })
  });
}

function loadStreams(id, callback) {
  callback({
    "type": "success",
    "value": JSON.stringify([{
      "name": "HD - LaMovie",
      "url": "https://s15.vimeos.zip/hls2/01/00009/8l2e7h1uapnz_h/master.m3u8",
      "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Referer": "https://player.vimeo.com/"
      }
    }])
  });
}
