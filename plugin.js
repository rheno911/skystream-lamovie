const provider = {
  getManifest: function() {
    return {
      name: "LaMovie", 
      id: "com.rheno911.lamovie",
      version: 1, 
      baseUrl: "https://la.movie"
    };
  },
  
  getHome: function(callback) {
    callback({
      type: "success",
      value: JSON.stringify({
        "Featured": [{
          title: "Test Movie 1",
          url: "61323",
          posterUrl: "https://via.placeholder.com/300x450/FF6B35/FFFFFF?text=LaMovie"
        }]
      })
    });
  },
  
  search: function(query, callback) {
    callback({
      type: "success",
      value: JSON.stringify([{
        title: query + " Results", 
        url: "61323",
        posterUrl: "https://via.placeholder.com/300x450/FF6B35/FFFFFF?text=LaMovie"
      }])
    });
  },
  
  load: function(id, callback) {
    callback({
      type: "success", 
      value: JSON.stringify({
        url: id,
        data: id,
        title: "Una loca película de vampiros",
        description: "Working perfectly now!",
        year: 2010
      })
    });
  },
  
  loadStreams: function(id, callback) {
    callback({
      type: "success",
      value: JSON.stringify([{
        name: "HD 1080p",
        url: "https://s15.vimeos.zip/hls2/01/00009/8l2e7h1uapnz_h/master.m3u8?t=5VZL1TGidmweEI7Ac1ongv7fK3LPxareQzp0noB1izs&s=1772269709&e=43200&v=129352366&i=0.0&sp=0&fr=8l2e7h1uapnz&r=e",
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          "Referer": "https://player.vimeo.com/",
          "Origin": "https://player.vimeo.com"
        }
      }])
    });
  }
};

if(typeof module !== "undefined" && module.exports) {
  module.exports = provider;
}
