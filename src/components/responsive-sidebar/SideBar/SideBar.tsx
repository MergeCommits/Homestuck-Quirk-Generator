import React, { CSSProperties } from "react";
import { Layout } from "antd";
import "./SideBar.css";
import { use100vh } from "react-div-100vh";

type SideBarProps = {
    menu: JSX.Element;
    onCollapse: (collapsed: boolean) => void;
};

const SideBar = (props: SideBarProps): JSX.Element => {
    const handleOpen = (collapsed: boolean): void => {
        props.onCollapse(collapsed);
    };

    const vh100 = use100vh();
    const styles: CSSProperties = {
        height: vh100 ? vh100 : "100vh"
    };

    return (
        <Layout.Sider
            className="sidebar"
            style={styles}
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