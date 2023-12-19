import moment from "moment";

export const formatDate = (value: string | undefined) => {
    if (value) {
        const date = new Date(value);
        return moment(date).format("ddd, D MMMM YYYY");
    }
};
