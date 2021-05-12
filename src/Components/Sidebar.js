import PeopleIcon from "@material-ui/icons/People";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import React from "react";
import "../CssOfComponents/Sidebar.css";
import SidebarOption from "./SidebarOption";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from "@material-ui/icons";
import { useDataLayerValue } from "../HelperTool/DataLayer";

function Sidebar() {
  
  const [{user}, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <SidebarOption src={user.photoURL} title={user.displayName} />
      <SidebarOption Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarOption Icon={PeopleIcon} title="Friends" />
      <SidebarOption Icon={ChatIcon} title="Messages" />
      <SidebarOption Icon={StorefrontIcon} title="Marketplace" />
      <SidebarOption Icon={VideoLibraryIcon} title="Videos" />
      <SidebarOption Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
