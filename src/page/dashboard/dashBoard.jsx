import {Outlet} from 'react-router-dom'
import SideBar from './componets/sideBar/index'
import './index.css'
import Header from './componets/header';

export default function DashBoard() {
    return (
    <main id='DashBoard'>
            <SideBar/>
            <Header/>
            <aside>
                <Outlet/>
            </aside>
    </main>
    );
}