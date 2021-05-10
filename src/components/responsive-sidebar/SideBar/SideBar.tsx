import React from "react";
import { Layout } from "antd";
import "./SideBar.css";

type SideBarProps = {
    menu: JSX.Element;
    onCollapse: (collapsed: boolean) => void;
};

const SideBar = (props: SideBarProps): JSX.Element => {
    const handleOpen = (collapsed: boolean): void => {
        props.onCollapse(collapsed);
    };

    return (
        <Layout.Sider
            className="sidebar"
            breakpoint={"md"}
            theme="dark"
            collapsedWidth={0}
            trigger={null}
            width={"33.3%"}
            onCollapse={(collapsed) => handleOpen(collapsed)}
        >
            {props.menu}
        </Layout.Sider>
    );
};

export default SideBar;