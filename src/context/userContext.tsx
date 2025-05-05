import { createContext, useState, useContext } from "react";
import axios from "axios";
import useSWR from "swr";

import { User } from "@/interfaces/users";
const UserContext = createContext<{
  users: User[];
  setUsers: (users: User[]) => void;
  isLoading: boolean;
  error: unknown | null;
}>({
  users: [],
  setUsers: () => {},
  isLoading: false,
  error: null,
});
const fetcher = (url: string) => axios.get(url).then((res) => res.data.users);
function UserProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [users, setUsers] = useState<User[]>([]);
  const { error, isLoading } = useSWR("/api/users", fetcher, {
    onSuccess: (data) => setUsers(data),
  });

  return (
    <UserContext.Provider
      value={{ users: users, setUsers: setUsers, isLoading, error }}
    >
      {children}
    </UserContext.Provider>
  );
}
function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
}
export { UserProvider, useUserContext };
