import React from "react";
import { Avatar, Badge, Space } from "antd";
import { UserOutlined, BellOutlined } from "@ant-design/icons";

import * as Styled from "./header-styles.ts";

export const Header: React.FC = () => {
    return (
        <Styled.Header>
            <Space size={16}>
                <Badge count={5}>
                    <Avatar icon={<BellOutlined />} />
                </Badge>
                <Avatar icon={<UserOutlined />} />
            </Space>
        </Styled.Header>
    );
};
