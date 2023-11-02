import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Home, Login, Register, Profile } from "./pages";
import { Leftbar, Navbar, Rightbar } from "./components";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
import { AuthContext } from "./context/authContext";

export const Layout = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`theme-${darkMode ? "light" : "dark"}`}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Leftbar />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <Rightbar />
      </div>
    </div>
  );
};

function App() {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (currentUser) {
      return children;
    }
    return <Navigate to={"/login"} />;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
