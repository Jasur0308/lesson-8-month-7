import { api } from "./index";

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    signInUser: build.mutation({
      query: (body) => ({
        url: "/gql/users/",
        method: "POST",
        body: {
          query: `
            mutation {
              login(input: {email: "${body.email}", password: "${body.password}"}) {
                token
              }
            }
          `,
        },
      }),
    }),
  }),
});

export const { useSignInUserMutation } = authApi;