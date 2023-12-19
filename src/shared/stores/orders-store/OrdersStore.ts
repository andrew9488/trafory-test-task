import { action, makeObservable, observable, reaction, runInAction } from "mobx";

import { SearchStore } from "../search-store";
import { IOrder } from "../../types";
import { mockOrders } from "../../constants";

export class OrdersStore {
    initialOrders: IOrder[] = mockOrders;

    orders: IOrder[] = [];
    isOrdersListLoading = false;

    order: IOrder | null = null;
    isOrderLoading = false;

    private readonly searchStore: SearchStore;

    constructor(searchStore: SearchStore) {
        makeObservable(this, {
            orders: observable,
            isOrdersListLoading: observable,
            getOrdersList: action.bound,
            filterOrdersBySearchParam: action.bound,
            setOrder: action.bound,
            isOrderLoading: observable,
            deleteOrder: action.bound,
            sortOrdersByAddress: action.bound,
        });
        this.searchStore = searchStore;
        this.getOrdersList();

        reaction(
            () => this.searchStore.searchInputValue,
            (search) => {
                this.getOrdersList({ search });
            },
        );
    }

    async getOrdersList(params?: { search: string }) {
        this.isOrdersListLoading = true;
        let timeoutId;
        try {
            //эмитирую запрос на сервер
            const orders: IOrder[] = await new Promise((resolve) => {
                timeoutId = setTimeout(() => {
                    const orders = params?.search ? this.filterOrdersBySearchParam(params.search) : this.initialOrders;
                    resolve(orders);
                }, 2000);
            });
            runInAction(() => {
                this.orders = orders;
            });
        } catch (error) {
            console.error(error);
        } finally {
            runInAction(() => {
                this.isOrdersListLoading = false;
            });
            //очищаю timeout чтобы не было утечек
            timeoutId && clearTimeout(timeoutId);
        }
    }

    async getOrderById(orderId: number) {
        this.isOrderLoading = true;
        let timeoutId;
        try {
            //эмитирую запрос на сервер
            const order: IOrder = await new Promise((resolve) => {
                timeoutId = setTimeout(() => {
                    const order = this.initialOrders.find(({ id }) => id === orderId) || ({} as IOrder);
                    resolve(order);
                }, 1000);
            });
            console.log(order);
            this.setOrder(order);
        } catch (error) {
            console.error(error);
        } finally {
            runInAction(() => {
                this.isOrderLoading = false;
            });
            //очищаю timeout чтобы не было утечек
            timeoutId && clearTimeout(timeoutId);
        }
    }

    async deleteOrder(orderId: number) {
        try {
            const orders: IOrder[] = await new Promise((resolve) => {
                const orders = this.initialOrders.filter(({ id }) => id !== orderId);
                resolve(orders);
            });
            runInAction(() => {
                this.orders = orders;
            });
        } catch (error) {
            console.error(error);
        }
    }

    //helpers
    filterOrdersBySearchParam(search: string) {
        return this.initialOrders.filter((order) => order.address.toLowerCase().includes(search.toLowerCase()));
    }

    setOrder(order: IOrder | null) {
        this.order = order;
    }

    sortOrdersByAddress() {
        this.orders = this.orders.sort((a, b) => a.address.localeCompare(b.address));
    }
}
