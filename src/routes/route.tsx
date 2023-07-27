import { createBrowserRouter } from "react-router-dom";

import { Root } from '../ui/pages/root/Root'
import Cassio from "../ui/pages/cassio/Cassio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/cassio',
        element: <Cassio />
      }
    ]
  },
]);

export default router;