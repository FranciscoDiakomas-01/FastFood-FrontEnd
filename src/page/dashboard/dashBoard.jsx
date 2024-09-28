import {Outlet} from 'react-router-dom'
import SideBar from './componets/sideBar/index'
import './index.css'
import Header from './componets/header';
import { ToastContainer } from 'react-toastify';
export default function DashBoard() {
    return (
    <main id='DashBoard'>
        <ToastContainer></ToastContainer>
            <SideBar/>
            <Header/>
            <aside>
                <Outlet/>
            </aside>
    </main>
    );
}