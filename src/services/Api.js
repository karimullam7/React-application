// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const Api = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
   enteringRegDetails: builder.mutation({
    query:(newReg)=>{
      return {
        method:'POST',
        url: 'Register',
        body: newReg
      }
    }
   }),
   enteringLogDetails: builder.mutation({
    query:(newLog)=>{
      return {
        method:'POST',
        url: 'Login',
        body: newLog
      }
    }
   }),




  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

export const { useEnteringRegDetailsMutation, useEnteringLogDetailsMutation } = Api