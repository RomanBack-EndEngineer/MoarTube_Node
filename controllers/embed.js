

function videoVideoId_GET(req, res) {
    const videoId = req.params.videoId;
    
    if(isVideoIdValid(videoId)) {
        const pagePath = path.join(PAGES_DIRECTORY_PATH, 'embed-video.html');
        
        const fileStream = fs.createReadStream(pagePath);
        
        res.setHeader('Content-Type', 'text/html');
        
        fileStream.pipe(res);
    }
    else {
        res.status(404).send('embed video not found');
    }
}

function chatVideoId_GET(req, res) {
    const videoId = req.params.videoId;
    
    if(isVideoIdValid(videoId)) {
        const pagePath = path.join(PAGES_DIRECTORY_PATH, 'embed-chat.html');
        
        const fileStream = fs.createReadStream(pagePath);
        
        res.setHeader('Content-Type', 'text/html');
        
        fileStream.pipe(res);
    }
    else {
        res.status(404).send('embed chat not found');
    }
}

module.exports = {
    videoVideoId_GET,
    chatVideoId_GET
};