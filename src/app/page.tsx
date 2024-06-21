"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex lg:flex-col">
        {session ? (
          <>
            Signed in as {session?.user?.name} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <>
            <div>Not signed in</div>
            <button onClick={() => signIn()}>Click me to Sign in</button>
          </>
        )}
      </div>
    </main>
  );
}
