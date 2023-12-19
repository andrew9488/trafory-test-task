import { IOrder } from "../types";

export const getColorByStatus = (status?: IOrder["status"]) => {
    switch (status) {
        case "Registered": {
            return "#3356cb";
        }
        case "Canceled": {
            return "#F54614";
        }
        case "Sent": {
            return "#00BD55";
        }
        case "Packing": {
            return "#FFC340";
        }
        default: {
            return "#252525";
        }
    }
};
