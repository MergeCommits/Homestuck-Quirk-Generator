import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "components/responsive-sidebar/ResponsiveDrawer/ResponsiveDrawer.css";

type NavBarProps = {
    menu: JSX.Element;
    forceClose: boolean;
};

const ResponsiveDrawer = (props: NavBarProps): JSX.Element => {
    const [visible, setVisible] = useState(false);

    if (props.forceClose && visible) {
        setVisible(false);
    }

    return (
        <React.Fragment>
            <Button
                className="drawer-button"
                type="primary"
                icon={<MenuOutlined />}
                onClick={() => setVisible(true)}
            />
            <Drawer
                placement="right"
                onClose={() => setVisible(false)}
                closable={false}
                visible={visible}
            >
                {props.menu}
            </Drawer>
        </React.Fragment>
    );
};

export default ResponsiveDrawer;
