import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Descriptions, Spin } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import * as Styled from "./order-styles.ts";
import { formatDate, getAddress, getCity } from "./helpers";
import { AppRoutes, useStore } from "../../shared";

export const Order: React.FC = observer(() => {
    const params = useParams();
    const navigate = useNavigate();

    const { ordersStore } = useStore();

    useEffect(() => {
        if (params?.id) {
            ordersStore.getOrderById(Number(params?.id));
            return () => {
                ordersStore.setOrder(null);
            };
        }
    }, [ordersStore.getOrderById, params?.id, ordersStore.setOrder]);

    const handleDeleteOrderClick = async () => {
        await ordersStore.deleteOrder(ordersStore?.order?.id as number);
        navigate(AppRoutes.Orders);
    };

    if (ordersStore.isOrderLoading) {
        return (
            <Spin tip="Loading" size="large">
                <div className="content" />
            </Spin>
        );
    }

    return (
        <Descriptions
            title="Order Info"
            size="middle"
            column={1}
            extra={
                <Button type="primary" icon={<DeleteOutlined />} onClick={handleDeleteOrderClick}>
                    Delete
                </Button>
            }>
            <Descriptions.Item label="Id">{ordersStore.order?.id}</Descriptions.Item>
            <Descriptions.Item label="City">{getCity(ordersStore.order)}</Descriptions.Item>
            <Descriptions.Item label="Addresss">{getAddress(ordersStore.order)}</Descriptions.Item>
            <Descriptions.Item label="Register Date">
                {formatDate(ordersStore.order?.registrationDateTime)}
            </Descriptions.Item>
            <Descriptions.Item label="Delivery Date">
                {formatDate(ordersStore.order?.deliveryDateTime)}
            </Descriptions.Item>
            <Descriptions.Item label="Status">
                <Styled.DeliveryStatus status={ordersStore.order?.status}>
                    {ordersStore.order?.status}
                </Styled.DeliveryStatus>
            </Descriptions.Item>
        </Descriptions>
    );
});
