import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key','346ba98da2msh093caf121cbd662p128567jsn6a50868677ef');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/track'}),
        getSongDetails: builder.query({ query: ({songid}) => `/songs/get-details?key=${songid}`}),
        // getSongRelated: builder.query({query: ({songid}) => `/shazam-songs/list-similarities?id=track-similarities-id-${songid}`}),
        getArtistDetails: builder.query({query: (artistId) => `/artists/get-details?id=${artistId}`}),
        getArtistTopSongs: builder.query({query: (artistId) => `/artists/get-top-songs?id=${artistId}`}),
        getSongByCountry: builder.query({query: (countryCode) => `/charts/track?locale=${countryCode}&pageSize=20&startFrom=0`}),
        getSongsByGenre: builder.query({query: (genre)=>`/charts/genre-world?genre_code=${genre}`}),
        getSongsBySearch: builder.query({query: (searchTerm) => `/search?term=${searchTerm}&locale=en-US&offset=0&limit=5`})
    }),
});

export const{
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetArtistDetailsQuery,
    useGetArtistTopSongsQuery,
    useGetSongByCountryQuery,
    useGetSongsByGenreQuery,
    useGetSongsBySearchQuery,
    // useGetSongRelatedQuery
} = shazamCoreApi;