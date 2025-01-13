import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  try {
    const channelUsername = '@jacoborodriguezgzz'
    const response = await fetch(`https://www.youtube.com/${channelUsername}/streams`)
    const text = await response.text()
    
    // Extract video ID from the response
    const videoIdMatch = text.match(/watch\?v=([a-zA-Z0-9_-]{11})/)
    const videoId = videoIdMatch ? videoIdMatch[1] : null
    
    return {
      videoId: videoId || '6Qo5F_Qy8zI', // Fallback to current known live stream
      timestamp: new Date().toISOString()
    }
  } catch (error) {
    console.error('Error fetching live stream:', error)
    return {
      videoId: '6Qo5F_Qy8zI', // Fallback to current known live stream
      timestamp: new Date().toISOString(),
      error: 'Failed to fetch live stream'
    }
  }
})
