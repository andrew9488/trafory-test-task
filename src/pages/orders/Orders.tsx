import React from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import type { ColumnsType } from "antd/es/table";

import * as Styled from "./order-styles.ts";
import { formatDeliveryDate } from "./helpers";
import { OrderAddress, OrderStatus } from "./components";
import { Typography, useStore, SearchInput, IOrder, AppRoutes } from "../../shared";

export const Orders: React.FC = observer(() => {
    const { ordersStore, searchStore } = useStore();
    const navigate = useNavigate();

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        searchStore.setSearchInputValue(event.currentTarget.value);
    };

    const handleRowActions = (row: IOrder) => ({
        onClick: () => navigate(`${AppRoutes.Orders}/${row.id}`),
    });

    return (
        <Styled.Container>
            <Styled.PageHeader>
                <Typography type="h1">Orders</Typography>
                <Styled.InputContainer>
                    <SearchInput
                        placeholder="Search by address..."
                        value={searchStore.searchInputValue}
                        onChange={handleSearchInputChange}
                    />
                </Styled.InputContainer>
            </Styled.PageHeader>
            <Styled.TableContainer>
                <Styled.Table
                    loading={ordersStore.isOrdersListLoading}
                    columns={columns}
                    dataSource={ordersStore.orders}
                    bordered
                    size="small"
                    onRow={handleRowActions}
                    rowKey="id"
                />
            </Styled.TableContainer>
        </Styled.Container>
    );
});

const columns: ColumnsType<IOrder> = [
    {
        title: "Delivery place",
        dataIndex: "address",
        key: "address",
        render: (value) => <OrderAddress address={value} />,
        sorter: (a, b) => a.address.localeCompare(b.address),
    },
    {
        title: "Registration date",
        dataIndex: "deliveryDateTime",
        key: "deliveryDateTime",
        render: (value) => formatDeliveryDate(value),
        responsive: ["md"],
    },
    {
        title: "Delivery date",
        dataIndex: "registrationDateTime",
        key: "registrationDateTime",
        render: (value) => formatDeliveryDate(value),
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
        render: (value) => `${value} €`,
        responsive: ["sm"],
        sorter: (a, b) => a.price - b.price,
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (value) => <OrderStatus status={value} />,
    },
];
