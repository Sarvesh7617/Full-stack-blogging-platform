import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Store from "./store/store.js"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import {AuthProtect, Login, SignUp} from './components/index.js'
import AllPost from './pages/AllPost.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'

const Router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}/>             {/*index matlab hota hai: “Jab base route / ho, tab <Home /> dikhana. */}
      <Route path='/login' element={
        <AuthProtect authentication={false}>
          <Login/>
        </AuthProtect>
      }/>
      <Route path='/signup' element={
        <AuthProtect authentication={false}>
          <SignUp/>
        </AuthProtect>
      }/>
      <Route path='/all-posts' element={
        <AuthProtect authentication={true}>
          <AllPost/>
        </AuthProtect>
      }/>
      <Route path='/add-post' element={
        <AuthProtect authentication={true}>
          {" "}
          <AddPost/>
        </AuthProtect>
      }/>
      <Route path='/edit-post/:postId' element={
        <AuthProtect authentication={true}>
          {" "}
          <EditPost/>
        </AuthProtect>
      }/>
      <Route path='/post/:postId' element={<Post/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
    <RouterProvider router={Router}/>
    </Provider>
  </StrictMode>,
)
