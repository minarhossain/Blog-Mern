
import { RouterProvider } from "react-router";
import { router } from "./Router/Routes/Routes";
import { Toaster } from "react-hot-toast"

// import './App.css'



function App() {


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />

    </>
  )
}

export default App