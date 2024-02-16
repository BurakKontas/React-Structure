import { ICounterState } from "./counter.types";

class CounterSelectors {

    constructor() {}

    getCounter(state: ICounterState) {
        return state.counter;
    }

    selectors() {
        return {
            getCounter: this.getCounter,
        };
    }
}

export default CounterSelectors;