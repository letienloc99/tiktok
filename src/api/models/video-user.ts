export interface IUserVideos extends Record<string, any> {
  id: number;
  first_name: string;
  last_name: string;
  nickname: string;
  avatar: string;
  bio: string;
  tick: boolean;
  isFollowed: boolean;
  followings_count: number;
  followers_count: number;
  likes_count: number;
  website_url: string | null;
  facebook_url: string | null;
  youtube_url: string | null;
  twitter_url: string | null;
  instagram_url: string | null;
  created_at: string;
  updated_at: string;
  videos: [];
}
export interface IVideo {
  id: number;
  uuid: string;
  user_id: number;
  type: string;
  thumb_url: string;
  file_url: string;
  description: string;
  music: string;
  is_liked: false;
  likes_count: number;
  comments_count: number;
  shares_count: number;
  views_count: number;
  viewable: string;
  allows: [];
  published_at: string;
  created_at: string;
  updated_at: string;
  user: {};
  meta: {};
}
