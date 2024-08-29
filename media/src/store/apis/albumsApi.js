import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

/* Not recommended for production, dev and test only */
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
        /* 
            RTKQ is going to use the fetch that is built into the the browser to make requests.
            In some cases we want to overwrite the fetch function therefore, we have fetchFn.
        */
        fetchFn: async (...args) => {
            await pause(1000); 
            return fetch(...args); 
        }
    }),
    endpoints(builder) {
        return {
            removeAlbum: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [{ type: 'Album', id: album.id }];
                },
                query: (album) => {
                    return {
                        url: `/albums/${album.id}`,
                        method: 'DELETE'
                    };
                }
            }),
            addAlbum: builder.mutation({
                invalidatesTags: (result, error, user) => {
                    return [{ type: 'UsersAlbums', id: user.id }];
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        method: 'POST',
                        body: {
                            userId: user.id,
                            title: faker.commerce.productName()
                        } 
                    };
                }
            }),
            fetchAlbums: builder.query({
                // result is the data that we fetch from the backend server
                providesTags: (result, error, user) => {
                    const tags = result.map(album => {
                        return { type: 'Album', id: album.id }
                    });
                    tags.push({ type: 'UsersAlbums', id: user.id });
                    return tags;
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        params: {
                            userId: user.id
                        },
                        method: 'GET'
                    };
                }
            })
        };
    }
});

export const { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } = albumsApi;
export { albumsApi };