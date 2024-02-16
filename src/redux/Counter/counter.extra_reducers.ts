import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { ICounterState } from ".";

import AsyncThunks from "./counter.async_thunks";
import { IFetchCounter, IFetchCounterParams } from "./counter.types";

class CounterExtraReducers {
    private readonly builder: ActionReducerMapBuilder<ICounterState>;

    constructor(builder: ActionReducerMapBuilder<ICounterState>) {
        this.builder = builder;
    }

    fetchPosts = {
        pending(state: ICounterState, action: Pending<IFetchCounterParams>) {
            console.log("Pending:", state, action)
        },
        fulfilled(state: ICounterState, action: Fulfilled<IFetchCounter, IFetchCounterParams>) {
            console.log("Fullfilled:", state, action)
        },
        rejected(state: ICounterState, action: Rejected<IFetchCounterParams>) {
            console.log("Rejected:", state, action)
        }
    }

    addCasesToBuilder(name: keyof typeof AsyncThunks) {
        this.builder.addCase(AsyncThunks[name].pending, this[name].pending);
        this.builder.addCase(AsyncThunks[name].fulfilled, this[name].fulfilled);
        this.builder.addCase(AsyncThunks[name].rejected, this[name].rejected);
    }
    
    extraReducers() {
        this.addCasesToBuilder("fetchPosts");

        return this.builder;
    }
}

export default CounterExtraReducers;

// Types (do not edit)
type Pending<P> = PayloadAction<void, string, { arg: P; requestId: string; requestStatus: "pending"; }, never>
type Fulfilled<T, P> = PayloadAction<T, string, { arg: P; requestId: string; requestStatus: "fulfilled"; }, never>
type Rejected<P> = PayloadAction<unknown, string, { arg: P; requestId: string; requestStatus: "rejected"; aborted: boolean; condition: boolean; } & ({ rejectedWithValue: true;} | ({ rejectedWithValue: false; } & {})), unknown>
