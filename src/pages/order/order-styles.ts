import { styled } from "styled-components";

import { getColorByStatus, IOrder, Typography } from "../../shared";

export const DeliveryStatus = styled(Typography)<{ status?: IOrder["status"] }>`
    color: ${({ status }) => getColorByStatus(status)}!important;
`;
