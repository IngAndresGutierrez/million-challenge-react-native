import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { CryptoCurrency } from '../types'

const baseUrl = 'https://api.coinlore.net/api/'

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query<{ data: CryptoCurrency[] }, void>({
      query: () => 'tickers/',
    }),
    getCryptoById: builder.query<CryptoCurrency[], string>({
      query: (id) => `ticker/?id=${id}`,
    }),
  }),
})

export const { useGetCryptosQuery, useGetCryptoByIdQuery } = cryptoApi
