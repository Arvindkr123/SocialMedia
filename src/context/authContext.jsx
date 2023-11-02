import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );

  const login = () => {
    setCurrentUser({
      id: 1,
      name: "Elon Musk",
      profilePicture:
        "https://imgs.search.brave.com/znWGB0TDz3hSwwyOyy1ExZ4vKOq2tp_4_Lg-F5d8wqs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTY5NDM0/MS8xNDQxNC9pLzYw/MC9kZXBvc2l0cGhv/dG9zXzE0NDE0MDcw/OS1zdG9jay1waG90/by1hY3Rvci1lbG9u/LW11c2suanBn",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
