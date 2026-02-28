const mainUrl = "https://la.movie";
const apiBase = mainUrl + "/api/providers/lamovie";
const commonHeaders = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "en-US,en;q=0.9",
    "Referer": "https://la.movie/",
    "Origin": "https://la.movie"
};

function getManifest() {
    return {
        name: "LaMovie",
        id: "com.rheno911.lamovie",  // YOUR UNIQUE ID
        version: 1,
        baseUrl: mainUrl
    };
}

function getHome(callback) {
    const url = apiBase + "?action=home";
    http_get(url, commonHeaders, (status, body) => {
        if (status !== 200) return callback("{}");
        
        let json;
        try { json = JSON.parse(body); } catch(e) { return callback("{}"); }
        
        const result = {};
        const sections = json.sections || json.data || [];
        
        sections.forEach(sec => {
            const secName = sec.name || sec.title || "Home";
            const items = sec.items || sec.movies || [];
            const list = items.map(item => ({
                title: item.title || item.name || "",
                url: String(item.id || item.url || ""),
                posterUrl: item.poster || item.posterUrl || item.image || "",
                headers: { Referer: mainUrl }
            })).filter(i => i.title && i.url);
            if (list.length > 0) result[secName] = list;
        });
        
        callback(JSON.stringify(result));
    });
}

function search(query, callback) {
    const url = apiBase + "?action=search&query=" + encodeURIComponent(query);
    http_get(url, commonHeaders, (status, body) => {
        if (status !== 200) return callback("[]");
        
        let json;
        try { json = JSON.parse(body); } catch(e) { return callback("[]"); }
        
        const results = (json.results || json.data || []).map(item => ({
            title: item.title || item.name || "",
            url: String(item.id || item.url || ""),
            posterUrl: item.poster || item.posterUrl || item.image || ""
        })).filter(i => i.title && i.url);
        
        callback(JSON.stringify(results));
    });
}

function load(id, callback) {
    const movieId = id;
    const url = apiBase + "?action=movie&id=" + encodeURIComponent(movieId);
    
    http_get(url, commonHeaders, (status, body) => {
        if (status !== 200) return callback("{}");
        
        let json;
        try { json = JSON.parse(body); } catch(e) { 
            // Fallback: parse from HTML title
            const titleMatch = body.match(/<title>([^|]+)|/);
            return callback(JSON.stringify({
                url: movieId,
                data: movieId,
                title: titleMatch ? titleMatch[1].trim() : "Movie",
                description: "",
                year: undefined
            }));
        }
        
        callback(JSON.stringify({
            url: movieId,
            data: movieId,
            title: json.title || "",
            description: json.plot || json.description || "",
            year: parseInt(json.year) || undefined,
            posterUrl: json.poster || json.posterUrl || ""
        }));
    });
}

function loadStreams(id, callback) {
    const movieId = id;
    const url = apiBase + "?action=stream&id=" + encodeURIComponent(movieId);
    
    http_get(url, commonHeaders, (status, body) => {
        if (status !== 200) return callback("[]");
        
        let json;
        try { json = JSON.parse(body); } catch(e) { return callback("[]"); }
        
        const streams = [];
        const sources = json.sources || json.streams || json.data || [];
        
        sources.forEach(source => {
            const streamUrl = source.file || source.url;
            if (!streamUrl || !streamUrl.includes('.m3u8')) return;
            
            const quality = source.label || source.quality || 
                           (streamUrl.includes('master') ? 'Auto' : 'HD');
            
            streams.push({
                name: `${quality} - LaMovie`,
                url: streamUrl,
                headers: {
                    "User-Agent": commonHeaders["User-Agent"],
                    "Referer": "https://player.vimeo.com/",
                    "Origin": "https://player.vimeo.com"
                }
            });
        });
        
        callback(JSON.stringify(streams));
    });
}
