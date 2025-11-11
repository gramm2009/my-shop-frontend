
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <div> Hello World! </div>
  },
  {
    path: "*",
    element: <div>Not found</div>
  }
]);

function AppRouter() {
  return <RouterProvider router = {router}/>
};

export default AppRouter;