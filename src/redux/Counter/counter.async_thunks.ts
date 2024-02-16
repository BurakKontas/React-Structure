import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { IFetchCounter, IFetchCounterParams } from "./counter.types";


const fetchPosts: AsyncThunk<IFetchCounter, IFetchCounterParams , any> = createAsyncThunk(
    "posts/fetchPosts",
    async ({ counter }: IFetchCounterParams): Promise<IFetchCounter> => { // Dönüş değeri olarak Promise<PostData> belirtildi
        try {
            //api response example
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let randomNumber = Math.floor(Math.random() * 100);
                    if (randomNumber % 2 === 0) {
                        resolve({ counter });
                    } else {
                        reject("Bir hata oluştu");
                    }
                }, 3000)
            });
        } catch (error) {
            throw error; 
        }
    }
);

export default {
    fetchPosts
}