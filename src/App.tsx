import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthLayout, HomePage, LoginPage, PageLayoute } from "./pages";

function App() {
  const appRouter = createBrowserRouter([
    // home routes(public)
    {
      path: "/",
      element: <PageLayoute />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },

    // auth routes(public)
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
