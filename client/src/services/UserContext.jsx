/* eslint-disable react/prop-types */
import { createContext, useState, useMemo } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const props = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return <UserContext.Provider value={props}>{children}</UserContext.Provider>;
}

export default UserContext;
