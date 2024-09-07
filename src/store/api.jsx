import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



const token = localStorage.getItem("token");

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://oxuaz.yetim.me" }),
    endpoints: (builder) => ({
        loginPost: builder.mutation({
            query: ({login, password}) => ({
                url: `/login`,
                method: 'POST',
                body: {login, password}
            })
        }),
        getAllNews: builder.query({
            query: () => `/news`
        }),
        getAllCategories: builder.query({
            query: () => `/categories`
        }),
        getDetailNews: builder.query({
            query: (id) => `/news/${id}`
        }),
        deleteNews: builder.mutation({
            query: (id) => ({
                url: `/news/${id}`,
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        }),
        editNews: builder.mutation({
            query: ({id , obj}) => ({
                url: `/news/${id}`,
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(obj)

            })
        }),
        addNews: builder.mutation({
            query: ({ img, title, description, category_id }) => ({
                url: `/news`,
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ img, title, description, category_id })
            })
        }),
        addCat: builder.mutation({
            query: ({name}) => ({
                url: `/categories`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ name })
            })
        }),
        deleteCat: builder.mutation({
            query: (id) => ({
                url: `/categories/${id}`,
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }) 
        }),
        likeNews: builder.mutation({
            query: (id) => ({
                url: `news_like/${id}`,
                method: 'PATCH'
            })
        }),
        disLikeNews: builder.mutation({
            query: (id) => ({
                url: `news_dislike/${id}`,
                method: 'PATCH'
            })
        }),
        getCatNews: builder.query({
            query: (id) => `/news_by_categ/${id}`
        }),
        getPagNews: builder.query({
            query: (page) => `/news_page/${page}`
        }),
    })
})


export const {
    useLoginPostMutation,
    useGetAllNewsQuery,
    useDeleteNewsMutation,
    useEditNewsMutation,
    useGetAllCategoriesQuery,
    useAddCatMutation,
    useDeleteCatMutation,
    useAddNewsMutation,
    useGetCatNewsQuery,
    useLikeNewsMutation,
    useDisLikeNewsMutation,
    useGetPagNewsQuery,
    useGetDetailNewsQuery
} = api