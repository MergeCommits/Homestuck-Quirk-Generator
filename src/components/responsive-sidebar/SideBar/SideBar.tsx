import React from "react";
import { Layout } from "antd";
import "./SideBar.css";
import { NavBarProps } from "components/responsive-sidebar/NavBar/NavBar";

const SideBar = (props: NavBarProps): JSX.Element => {
    return (
        <Layout.Sider
            className="sidebar"
            breakpoint={"md"}
            theme="dark"
            collapsedWidth={0}
            trigger={null}
        >
            {props.menu}
        </Layout.Sider>
    );
};

export default SideBar;