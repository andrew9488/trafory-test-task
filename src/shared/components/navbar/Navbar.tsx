import React, { useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import {
    GlobalOutlined,
    MailOutlined,
    UserOutlined,
    FileTextOutlined,
    EuroOutlined,
    TeamOutlined,
} from "@ant-design/icons";

import { AppRoutes } from "../../constants";

export const Navbar: React.FC = () => {
    const [locationPath, setLocationPath] = useState<string>(AppRoutes.Orders);
    const navigate = useNavigate();
    const location = useLocation();

    useLayoutEffect(() => {
        setLocationPath(location.pathname);
    }, [location.pathname]);

    const onItemClick: MenuProps["onClick"] = (e) => {
        navigate(e.key);
        setLocationPath(e.key);
    };

    return (
        <Menu
            onClick={onItemClick}
            selectedKeys={[locationPath]}
            mode="vertical"
            items={items}
            theme="dark"
            style={{ padding: 8 }}
        />
    );
};

const items: MenuProps["items"] = [
    {
        label: "Orders",
        key: AppRoutes.Orders,
        icon: <MailOutlined />,
    },
    {
        label: "Companies",
        key: AppRoutes.Companies,
        icon: <GlobalOutlined />,
    },
    {
        label: "Groups",
        key: AppRoutes.Groups,
        icon: <TeamOutlined />,
    },
    {
        label: "Users",
        key: AppRoutes.Users,
        icon: <UserOutlined />,
    },
    {
        label: "Credits",
        key: AppRoutes.Credits,
        icon: <EuroOutlined />,
    },
    {
        label: "Documents",
        key: AppRoutes.Documents,
        icon: <FileTextOutlined />,
    },
];
