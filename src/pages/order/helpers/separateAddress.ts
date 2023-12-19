import { IOrder } from "../../../shared";

export const getAddress = (order: IOrder | null) => {
    if (order) {
        return order.address.split(",")[0];
    }
};

export const getCity = (order: IOrder | null) => {
    if (order) {
        return order.address.split(",")[1];
    }
};
