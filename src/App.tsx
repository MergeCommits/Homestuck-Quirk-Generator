import React from "react";
import "App.css";
import JMain from "components/JMain";
import { Layout, Menu } from "antd";
import NavBar from "components/responsive-sidebar/NavBar/NavBar";
import SideBar from "components/responsive-sidebar/SideBar/SideBar";

function App(): JSX.Element {
    const menu = (
        <Menu mode="inline">
            <Menu.Item>
                dssdsd
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="App">

            <NavBar menu={menu} />
            <Layout>
                <Layout.Content className="content">
                    uh
                </Layout.Content>
                <SideBar menu={menu} />
            </Layout>
        </div>
    );
}

export default App;
