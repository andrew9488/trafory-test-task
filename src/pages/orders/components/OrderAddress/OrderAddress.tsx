import React from "react";

import * as Styled from "./order-address-styles.ts";

interface IOrderAddressProps {
    address: string;
}

export const OrderAddress: React.FC<IOrderAddressProps> = ({ address }) => {
    return (
        <Styled.OrderAddress>
            <Styled.Icon />
            {address}
        </Styled.OrderAddress>
    );
};
