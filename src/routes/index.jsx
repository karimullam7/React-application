import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExplorePag from "../pages/ExplorePag";
import DetailsPage from "../pages/DetailsPage";
import SearchPage from "../pages/SearchPage";



const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children :[
            {
                path : "",
                element : <Home/>
            },
            {
                path : ":explore",
                element: <ExplorePag/>
            },
            {
                path : ':explore/:id',
                element: <DetailsPage/>
            },
            {
                path: 'search',
                element: <SearchPage/>
            }
        ]
    }
])

export default router;