import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../shared/models/IProduct";

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
    endpoints: (builder) => ({
        fetchAllProducts: builder.query<IProduct[], number>({
            query: (limit: number = 5) => ({
                url: '/products',
                params: {
                    limit
                }
            }),
          }),
      }),
})