import React, { createContext, useMemo } from "react";
import { OrdersStore, SearchStore } from "../../stores";

export interface IStoreContext {
    ordersStore: OrdersStore;
    searchStore: SearchStore;
}
export const StoreContext = createContext<IStoreContext>({} as IStoreContext);

export const StoreProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    //подключать сюда сторы
    const store = useMemo(() => {
        const searchStore = new SearchStore();
        return {
            ordersStore: new OrdersStore(searchStore),
            searchStore,
        };
    }, []);
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
