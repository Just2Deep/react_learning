# React Router

```
npm i react-router-dom
```

To enable client side routing, we create browser router and configure the route

first we create a **root route** because rest of the root is rendered inside this route.

we can create an error page to show whenever there is issue in rendering a page.

```jsx
/* previous imports */
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

Use **Outlet** to specify where to render the child routes.
