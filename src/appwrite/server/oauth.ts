"use server"

import { createAdminClient } from "./config";
import { redirect } from "next/navigation";
import { OAuthProvider } from "node-appwrite";

export async function signInWithGoogle() {
  const { account } = await createAdminClient();
  const appUrl = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_APP_URL : "http://localhost:3000";
  console.log(appUrl)
  
  const successUrl = `${appUrl}/api/oauth`;
  const failureUrl = `${appUrl}/login`;

  const redirectUrl = await account.createOAuth2Token(
    OAuthProvider.Google,
    successUrl,
    failureUrl
  );

  return redirect(redirectUrl);
}