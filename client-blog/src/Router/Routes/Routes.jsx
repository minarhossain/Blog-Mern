import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import ReadPage from "../../Pages/ReadPage";
import CreatePage from "../../Pages/CreatePage";
import UpdatePage from "../../Pages/UpdatePage";
import NewsDetails from "../../Pages/NewsDetails";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <ReadPage></ReadPage>
            },
            {
                path: '/create',
                element: <CreatePage></CreatePage>
            },
            {
                path: '/update/:id',
                element: <UpdatePage></UpdatePage>
            },
            {
                path: '/readBlogById/:id',
                element: <NewsDetails></NewsDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/api/v1/readBlogById/${params.id}`)
            }
        ]
    }
])