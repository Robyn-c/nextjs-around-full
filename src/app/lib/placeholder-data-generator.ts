// Faker data call
import { faker } from '@faker-js/faker';
import type { User, Post, Comment} from './definitions';

// Each user has a defined amount of posts, likes, bookmarks, or comments.
const createRandomUser = (): User => {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    username: faker.internet.displayName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    profile_pic: faker.image.avatar(),
  }
}

// Create 10 users 
const users: User[] = [];

for(let i = 0; i < 10; i++) {
  users.push(createRandomUser());
}

// Each post comes from a set amount of users
const createRandomPost = (user_id : string): Post => {
  return {
    id: faker.string.uuid(),
    user_id,
    title: faker.location.city(),
    description: faker.lorem.paragraph(1),
    post_image: faker.image.url(),
    }
}

// Create 20 posts
const posts: Post[] = [];

for(let i = 0; i < users.length; i++) {
  // Pick a random usere out of the ones generated previously
  const randomUserNumber = Math.floor(Math.random() * (users.length))
  posts.push(createRandomPost(users[randomUserNumber].id));
}


// Each comment has is made by a random user
const createRandomComment = (user_id: string, post_id: string) => {
  return {
    id: faker.string.uuid(),
    post_id,
    user_id,
    comment_text: faker.lorem.lines(1),
  }
}

// Create 10 comments per post
const comments: Comment[] = [];
posts.map((post) => {
  for(let i = 0; i < 10; i++) {
    comments.push(createRandomComment(post.user_id, post.id)
)}})

// TODO: add likes, bookmarks

export { posts, users, comments };