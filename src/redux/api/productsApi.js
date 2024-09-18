import { api } from "./index";

const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => ({
        url: "/products",
      }),
      providesTags: ["PRODUCTS"],
    }),
    updateProduct: build.mutation({
      query: ({ id, name }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: { name },
      }),
      invalidatesTags: ["PRODUCTS"],
    }),
  }),
});

export const { useGetProductsQuery, useUpdateProductMutation } = productsApi;