import moment from "moment";

export const formatDeliveryDate = (value: string): string => {
    const date = new Date(value);
    return moment(date).format("D MMM H:mm");
};
