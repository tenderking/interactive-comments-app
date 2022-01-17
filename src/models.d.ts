export interface ChatModels {
  currentUser: UserOrCurrentUser;
  comments?: (CommentsEntity)[] | null;
}
export interface UserOrCurrentUser {
  image: Image;
  username: string;
}
export interface Image {
  png: string;
  webp: string;
}
export interface CommentsEntity {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: UserOrCurrentUser;
  replies?: (RepliesEntity | null)[] | null;
}
export interface RepliesEntity {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: UserOrCurrentUser;
}
