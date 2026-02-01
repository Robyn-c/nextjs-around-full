
export interface User {
  id: string;
  name: string;
  username: string;
  email: string
  password: string;
  profile_pic: string;
}

export interface Post {
  id: string;
  user_id: string;
  title: string;
  description: string;
  post_image: string;
}

export interface Like {
  id: string;
  user_id: string;
  post_id: string
}

export interface Bookmark {
  id: string;
  user_id: string;
  post_id: string;
}

export interface Comment {
  id: string;
  post_id: string;
  user_id: string;
  comment_text: string;
}