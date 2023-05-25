import { NavLink, Outlet } from "react-router-dom";
import "./Pages.css";
const tabNavs = [
    { path: '/profile/dashboard', title: 'Dashboard' },
    { path: '/profile/download', title: 'Download' },
];

const profile = () => {
    return (<div className="profile">
        <h1>Profile</h1>
        <main>
            <aside>
                <ul>
                    {tabNavs.map(tabNav => <li key={tabNav.path} ><NavLink to={tabNav.path} activeclassname="active">{tabNav.title}</NavLink></li>)}
                </ul>
            </aside>
            <Outlet />
        </main>

    </div >);
}

export default profile;