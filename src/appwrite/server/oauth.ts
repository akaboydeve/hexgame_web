"use server"

import { createAdminClient } from "./config";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { OAuthProvider } from "node-appwrite";

export async function signInWithGoogle() {
  const { account } = await createAdminClient();

  const origin = (await headers()).get("origin");
  console.log("origin", origin);
  
  const successUrl = `${origin}/api/oauth`;
  const failureUrl = `${origin}/login`;
  console.log("successUrl", successUrl);
  console.log("failureUrl", failureUrl);

  const redirectUrl = await account.createOAuth2Token(
    OAuthProvider.Google,
    successUrl,
    failureUrl
  );

  console.log("redirectUrl", redirectUrl);

  redirect(redirectUrl);
}