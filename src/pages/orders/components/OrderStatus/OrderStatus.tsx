import React from "react";

import * as Styled from "./order-status-styles.ts";
import { IOrder } from "../../../../shared";

interface IOrderStatusProps {
    status: IOrder["status"];
}

export const OrderStatus: React.FC<IOrderStatusProps> = ({ status }) => {
    return <Styled.OrderStatus status={status}>{status}</Styled.OrderStatus>;
};
