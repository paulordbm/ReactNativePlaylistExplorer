import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const musicApi = createApi({
  reducerPath: 'musicApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getArtists: builder.query({
      query: () => 'artists',
    }),
    getSongById: builder.query({
      query: (id) => `songs/${id}`,
    }),
    getAlbumById: builder.query({
      query: (id) => `albums/${id}`,
    }),
    getAlbumsByArtistId: builder.query({
      query: (id) => `albums?artistId=${id}`,
    }),
  }),
});

export const {
  useGetArtistsQuery,
  useGetSongByIdQuery,
  useGetAlbumByIdQuery,
  useGetAlbumsByArtistIdQuery
} = musicApi;
