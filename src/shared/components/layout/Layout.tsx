import React from "react";
import { Layout as AntdLayout, theme } from "antd";
import { Outlet } from "react-router-dom";

import * as Styled from "./layout-styles.ts";
import { Navbar } from "../navbar";
import { Header } from "../header";

export const Layout: React.FC = () => {
    const { token } = theme.useToken();

    return (
        <Styled.Layout>
            <AntdLayout.Sider breakpoint="lg" collapsedWidth="0">
                <Navbar />
            </AntdLayout.Sider>
            <AntdLayout>
                <Styled.Header bgColor={token.colorBgContainer}>
                    <Header />
                </Styled.Header>
                <Styled.Content>
                    <Styled.Section bgColor={token.colorBgContainer} radius={token.borderRadiusLG}>
                        <Outlet />
                    </Styled.Section>
                </Styled.Content>
            </AntdLayout>
        </Styled.Layout>
    );
};
