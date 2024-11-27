import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataApi = createApi({
    reducerPath: 'dataApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        fetchData: builder.query({
            query: (page) => `/todos?_page=${page}&_limit=20`,
            serializeQueryArgs: ({ endpointName }) => endpointName,
            merge: (currentCache, newItems) => {
                currentCache.push(...newItems);
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },
        }),
    }),
});

export const { useLazyFetchDataQuery } = dataApi;
