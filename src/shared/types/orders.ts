export type OrderStatus = "Packing" | "Registered" | "Sent" | "Canceled";

export interface IOrder {
    address: string;
    deliveryDateTime: string;
    id: number;
    price: number;
    registrationDateTime: string;
    status: OrderStatus;
}
