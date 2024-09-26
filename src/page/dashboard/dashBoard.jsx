import {Outlet} from 'react-router-dom'
import SideBar from './componets/sideBar/index'
import './index.css'


export default function DashBoard() {
    return (
    <main id='DashBoard'>
            <SideBar/>
            <aside>

                oooo
                <Outlet/>
            </aside>
    </main>
    );
}