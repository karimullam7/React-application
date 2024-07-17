import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Explorepage from "../pages/Explorepage";
import Detailespage from "../pages/Detailespage";
import Searchpage from "../pages/Searchpage";

const router = createBrowserRouter([

    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path: ":explore",
                element: <Explorepage/>
            },
            {
                path:":explore/:id",
                element:  <Detailespage/>
            },
            {
                path:"Search",
                element:<Searchpage/>
            }
        ]
    }

])

export default router;