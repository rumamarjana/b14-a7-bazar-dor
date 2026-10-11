"use client";

import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "https://b14-a7-bazar-dor-two.vercel.app/",
});

export const { signIn, signUp, signOut, useSession } = authClient;