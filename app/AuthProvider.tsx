//in this comp we just wrap the children in the sessionProvider for auth,
//so any children have access to the current session
//we use this comp in layout.tsx

//we dont directly use the sessionProvider wrap in layout because it needs client features and the layout.tsx is server side
'use client';

import { SessionProvider } from 'next-auth/react';

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}