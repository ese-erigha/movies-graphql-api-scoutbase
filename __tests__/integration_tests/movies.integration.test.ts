import {createTestClient} from "apollo-server-testing";
import {mockMovieService, mockCountryService} from "../../__utils__/service";
import {createTestServer} from "../../__utils__/server";
import gql from "graphql-tag";

describe("Integration Tests for movies query",()=>{

    let server = null;
    let moviesQuery = null;

    beforeAll(()=>{

     moviesQuery = gql`
        query {
            movies {
                scoutbase_rating
                title
                year
                rating
                actors{
                    name
                    birthday
                    country{
                        name
                    }
                }
                directors{
                    name
                    birthday
                    country{
                        name
                    }
                }
            }
        }
    `;

    });

    test("It should return data for movies query",async()=>{

        server = createTestServer({
            user: null,
            movieService: mockMovieService,
            countryService: mockCountryService
        });
        
        const {query} = createTestClient(server);
        const res = await query({query: moviesQuery});
        expect(res.data.movies.length).toEqual(2);
    });

    test("It should return null for field scoutbase_rating if user is not authorized",async()=>{

        server = createTestServer({
            user: null,
            movieService: mockMovieService,
            countryService: mockCountryService
        });
        
        const {query} = createTestClient(server);
        const res = await query({query: moviesQuery});
        expect(res.data.movies[0].scoutbase_rating).toEqual(null);
    });


    test("It should return a value greater than 5.0 and less than 9.0 for field scoutbase_rating if user is authorized",async()=>{

        server = createTestServer({
            user: {id: 1, name: "Ese Erigha", email: "ese.erigha@gmail.com"},
            movieService: mockMovieService,
            countryService: mockCountryService
        });
        const {query} = createTestClient(server);
        const res = await query({query: moviesQuery});
        expect(res.data.movies[0].scoutbase_rating).toBeGreaterThan(5.0);
        expect(res.data.movies[0].scoutbase_rating).toBeLessThan(9.0);
    });
});