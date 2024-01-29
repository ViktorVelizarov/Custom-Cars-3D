//this is an example of how to access the user in client side
//is the user is logged in we show children

'use client';

import { useSession } from 'next-auth/react'; // this hook allows us to access the
                                              // current session and user status( "loading", "authenticated", "unautenticated")

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return <>{children}</>;
  } else {
    return <></>;
  }
}
