import axios from 'axios';

interface VideoInfo {
  url: string;
  title: string;
  author_url: string;
  author_name: string;
}

const videoInfoCache = new Map<string, VideoInfo>();

export type ThumbnailQuality = 'default' | 'mqdefault' | 'hqdefault';

export class Channel {
  constructor(
    readonly url: string,
    readonly name: string,
  ) {}

  public clone(): Channel {
    return new Channel(this.url, this.name);
  }
}

export class Video {
  constructor(
    readonly id: string,
    protected url: string |null = null,
    protected title: string | null = null,
    protected channel: Channel | null = null,
    protected isVideoInfoFetched = false,
    useCache = true,
  ) {
    if (useCache) {
      const cache = videoInfoCache.get(this.id);
      if (cache) {
        this.url = cache.url;
        this.title = cache.title;
        this.channel = new Channel(cache.author_url, cache.author_name);
        this.isVideoInfoFetched = true;
      }
    }
  }

  public clone(): Video {
    return new Video(
      this.id,
      this.url,
      this.title,
      this.channel !== null ? this.channel.clone() : null,
      this.isVideoInfoFetched,
      false,
    );
  }

  public async fetchVideoInfo(force = false) {
    if (!force && this.isVideoInfoFetched) {
      return;
    }
    const cache = videoInfoCache.get(this.id);
    if (!force && cache) {
      this.url = cache.url;
      this.title = cache.title;
      this.channel = new Channel(cache.author_url, cache.author_name);
      this.isVideoInfoFetched = true;
    }
    const url = "https://noembed.com/embed?url=https://www.youtube.com/watch?v=" + this.id;
    await axios.get(url).then(response => {
      if (response.status !== 200) {
        throw new Error("failed to fetch video info: " + response);
      }

      if (response.data.error !== undefined) {
        throw new Error("failed to fetch video info: " + response.data.url);
      }

      this.url = response.data.url;
      this.title = response.data.title;
      this.channel = new Channel(response.data.author_url, response.data.author_name);
    });
    this.isVideoInfoFetched = true;
  }

  public getTitle(): string {
    if (this.title === null) {
      throw new Error("video info not fetched");
    }
    return this.title;
  }

  public getURL(): string {
    if (this.url === null) {
      throw new Error("video info not fetched");
    }
    return this.url;
  }

  public getChannel(): Channel {
    if (this.channel === null) {
      throw new Error("video info not fetched");
    }
    return this.channel;
  }

  public getThumbnailURL(quality: ThumbnailQuality): string {
    return 'https://i.ytimg.com/vi/' + this.id + '/' + quality + '.jpg';
  }

  public hasVideoInfo(): boolean {
    return this.isVideoInfoFetched;
  }
}
