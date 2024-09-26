import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import {register} from 'swiper/element/bundle'
import LadingPage from './page/LadingPage/ladingPage/index.jsx'
import LoginSindIn from './page/LadingPage/LoginSindIn/index.jsx'
import DashBoard from './page/dashboard/dashBoard.jsx'
register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import UserProvider
 from './context/userData.jsx'
const router = createBrowserRouter([

  {
    path: "/",
    element : <App/>,
    children: [
      {
        path : "/",
        element : <LadingPage/>
      }
    ]
  },
  {
    path : '/enter',
    element : <LoginSindIn/>
  },
  {
    path : '/dashBoard',
    element : <DashBoard/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
        <RouterProvider router={router}>
        </RouterProvider>
    </UserProvider>
  </StrictMode>,
)
