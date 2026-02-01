import postgres from 'postgres';
import { users, posts, comments } from '../lib/placeholder-data-generator';

const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      username VARCHAR(255) NOT NULL UNIQUE,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      profile_pic TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => { 
      return sql`
        INSERT INTO users (id, name, username, email, password, profile_pic)
        VALUES (${user.id}, ${user.name}, ${user.username} ,${user.email}, ${user.password}, ${user.profile_pic})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedPosts() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
  await sql`
    CREATE TABLE IF NOT EXISTS posts(
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id UUID NOT NULL,
      title VARCHAR(255),
      description VARCHAR(1023),
      post_image VARCHAR(255)
    );
  `;

  const insertedPosts = await Promise.all(
    posts.map(
      (post) => sql`
      INSERT INTO posts (id, user_id, title, description, post_image)
      VALUES (${post.id}, ${post.user_id}, ${post.title}, ${post.description}, ${post.post_image})
      ON CONFLICT (id) DO NOTHING;
      `
    )
  )
 return insertedPosts;
}

// TODO: seed comment function sql insert
async function seedComments() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS comments(
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      post_id UUID NOT NULL,
      user_id UUID NOT NULL,
      comment_text VARCHAR(255) NOT NULL
    )
  `;

  const insertedComments = await Promise.all(
    comments.map(
      (comment) => sql`
        INSERT INTO comments (id, post_id, user_id, comment_text) 
        VALUES (${comment.id}, ${comment.post_id}, ${comment.user_id}, ${comment.comment_text})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  )
  return insertedComments;
}

export async function GET() {
  try {
    await sql.begin(() => [
      seedUsers(),
      seedPosts(),
      seedComments(),
    ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}