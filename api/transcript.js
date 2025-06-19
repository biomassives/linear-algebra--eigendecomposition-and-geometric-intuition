// api/transcript.js
const { YouTubeTranscriptApi } = require('youtube-transcript-api');

export default async function handler(req, res) {
    const { videoId } = req.query;

    if (!videoId) {
        return res.status(400).json({ error: 'Video ID is required' });
    }

    try {
        const transcript = await YouTubeTranscriptApi.getTranscript(videoId);
        return res.status(200).json(transcript);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch transcript', details: error.message });
    }
}
