'use client';
import React from 'react';
import { signIn, signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import { GuildMember } from '@/services/discord/types';
import { MONAD_DEFAULT_ROLE_NAME, MONAD_ROLES } from '@/constants/monad_roles';

export default function HomeComponent({
  session,
  userIsPartOfMonad,
  userGuildMember,
}: {
  session: Session | null;
  userIsPartOfMonad: boolean;
  userGuildMember: GuildMember | undefined;
}) {
  const roles = userGuildMember?.roles;
  let roleNames = roles?.map((role) => {
    const potentialMonadRole = MONAD_ROLES[role as keyof typeof MONAD_ROLES];
    return potentialMonadRole ? potentialMonadRole : MONAD_DEFAULT_ROLE_NAME;
  });
  // if there's at least one role that's not the default role, we want to only show the roles that are not the default role
  const hasNonDefaultRole = roleNames?.some((role) => role !== MONAD_DEFAULT_ROLE_NAME);
  if (hasNonDefaultRole) {
    roleNames = roleNames?.filter((role) => role !== MONAD_DEFAULT_ROLE_NAME);
  } else {
    roleNames = [MONAD_DEFAULT_ROLE_NAME];
  }
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex lg:flex-col">
      {session ? (
        <>
          Signed in as {session?.user?.name} <br />
          <button onClick={() => signOut()}>Sign out</button>
          <h2>
            {userIsPartOfMonad
              ? 'You are part of Monad'
              : 'You are not part of Monad yet, please join the discord'}
          </h2>
          {userIsPartOfMonad && (
            <>
              <h3>These are your roles:</h3>
              <div>{roleNames?.map((roleName) => <div key={roleName}>{roleName}</div>)}</div>
            </>
          )}
        </>
      ) : (
        <>
          <div>Not signed in</div>
          <button onClick={() => signIn()}>Click me to Sign in</button>
        </>
      )}
    </div>
  );
}
