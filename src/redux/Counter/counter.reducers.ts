import { PayloadAction } from "@reduxjs/toolkit";
import { ICounterState } from "./counter.types";

class CounterReducers {

    constructor() {}

    increment(state: ICounterState, action: PayloadAction<number>) {
        state.counter += action.payload;
    }

    decrement(state: ICounterState, action: PayloadAction<number>) {
        state.counter -= action.payload;
    }

    reset(state: ICounterState) {
        state.counter = 0;
    }
    
    reducers() {
        return {
            increment: this.increment,
            decrement: this.decrement,
            reset: this.reset,
        }    
    }
}

export default CounterReducers;