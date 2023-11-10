const YOUTUBE_HOST = 'https://youtube.googleapis.com';

export async function getChannelInfo(channelId) {
  try {
    const response = await fetch(
      `${YOUTUBE_HOST}/youtube/v3/search?order=date&part=snippet&channelId=${channelId}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`
    );

    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }

  return null;
}
