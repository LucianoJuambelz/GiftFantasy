export interface Keyword {
    keyword: string;
}

export interface Id {
    id: string;
}

export interface data {
    data: Gif;
}

export interface Gif {
    type: string;
    id: string;
    url: string;
    username: string;
    title: string;
    images: Image;
    user: User;
}
  
export interface User {
    avatar_url: string;
    banner_image: string;
    banner_url: string;
    profile_url: string;
    username: string;
    display_name: string;
    description: string;
    instagram_url: string;
    website_url: string;
    is_verified: boolean;
}

export interface Image {
    original: Original;
    downsized_medium: Downsized;
    downsized_small: Downsizedsmall;
}

interface Downsizedsmall {
    height: string;
    width: string;
    mp4_size: string;
    mp4: string;
}

export interface Downsized {
    height: string;
    width: string;
    size: string;
    url: string;
}

export interface Original {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size: string;
    webp: string;
    frames: string;
    hash: string;
}
