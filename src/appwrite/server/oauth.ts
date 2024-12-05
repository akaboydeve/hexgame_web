"use server"

import { createAdminClient } from "./config";
import { redirect } from "next/navigation";
import { OAuthProvider } from "node-appwrite";

export async function signInWithGoogle() {
  const { account } = await createAdminClient();
  
  const successUrl = `https://hexgame.in/api/oauth`;
  const failureUrl = `https://hexgame.in/login`;

  const redirectUrl = await account.createOAuth2Token(
    OAuthProvider.Google,
    successUrl,
    failureUrl
  );

  return redirect(redirectUrl);
}