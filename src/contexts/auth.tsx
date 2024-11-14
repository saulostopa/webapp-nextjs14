/* eslint-disable react/jsx-no-constructed-context-values */
import type { Session } from 'next-auth';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext<any>({});
interface AuthProviderProps {
  children: React.ReactNode;
  session: Session;
}

export const AuthProvider = ({ children, session }: AuthProviderProps) => {
  const [user, setUser] = useState(session?.user ? session.user : session);

  useEffect(() => {
    const fetchAvatar = async () => {
      if (session) {
        try {
          const response = await fetch(
            `/api/profile?email=${session.user?.email}`,
            {
              method: 'GET',
            },
          );

          if (!response.ok) {
            throw new Error('Failed to fetch the data. Please try again!!');
          }

          const data = await response.json();

          setUser(data[0]);
        } catch (error) {
          // console.error(error);
        }
      }
    };

    fetchAvatar();
  }, [session]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
