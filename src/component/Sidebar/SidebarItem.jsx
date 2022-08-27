import React from "react";
import '../../asset/app.scss';

function SidebarItem({ menu }) {
  return (
    <div>
      <p>* {menu.name}</p>
    </div>
  );
}

export default SidebarItem;