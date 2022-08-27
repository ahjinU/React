import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import '../../asset/app.scss';

function Sidebar() {
    const menus = [
        {name: "메인 화면",path:"/"},
        {name: "내 소개", path:"/intro"}
    ];

    return (
        <div className="sidebar">
          {menus.map((menu, index) => {
            return (
            <div>
              <Link to={menu.path} key={index}>
                <SidebarItem
                  menu={menu}
                />
              </Link>
            </div>
            );
          })}
        </div>
      );
}

export default Sidebar;