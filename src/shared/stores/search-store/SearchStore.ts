import { action, makeObservable, observable } from "mobx";

export class SearchStore {
    searchInputValue = "";

    constructor() {
        makeObservable(this, {
            searchInputValue: observable,
            setSearchInputValue: action.bound,
        });
    }

    setSearchInputValue(value: string) {
        this.searchInputValue = value;
    }
}
