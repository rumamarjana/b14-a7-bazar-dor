
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(
  process.env.BETTER_AUTH_DB_URL as string
);

const db = client.db("bazar-dor");

export const auth = betterAuth({
  baseURL:
    process.env.BETTER_AUTH_URL ||
    "https://b14-a7-bazar-dor-two.vercel.app",

  trustedOrigins: [
    "http://localhost:3000",
    "https://b14-a7-bazar-dor-two.vercel.app",
  ],

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },

  database: mongodbAdapter(db, {
    client,
  }),
});