import { useContext } from "react";
import { IStoreContext, StoreContext } from "./StoreProvider.tsx";

export const useStore = (): IStoreContext => useContext(StoreContext);
