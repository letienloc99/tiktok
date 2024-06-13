export interface ISuggest extends Record<string, any> {
  id: number;
  first_name: string;
  last_name: string;
  nickname: string;
  avatar: string;
  tick: boolean;
  is_followed: boolean;
  followings_count: number;
  followers_count: number;
  likes_count: number;
  website_url: string;
  facebook_url: string | null;
  youtube_url: string | null;
  twitter_url: string | null;
  instagram_url: string | null;
  created_at: string;
  updated_at: string;
}
