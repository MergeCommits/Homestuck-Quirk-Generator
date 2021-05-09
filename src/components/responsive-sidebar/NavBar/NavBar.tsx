import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./NavBar.css";

export type NavBarProps = {
    menu: JSX.Element | JSX.Element[]
};

const NavBar = (props: NavBarProps): JSX.Element => {
    const [visible, setVisible] = useState(false);
    //className="navbar">
    return (
        <React.Fragment>
            <Button
                className="drawer-button"
                type="primary"
                icon={<MenuOutlined />}
                onClick={() => setVisible(true)}
            />
            <Drawer
                // title="Topics"
                placement="right"
                // onClick={() => setVisible(false)}
                onClose={() => setVisible(false)}
                visible={visible}
            >
                {props.menu}
            </Drawer>
        </React.Fragment>
    );
};

export default NavBar;
