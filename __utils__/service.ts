const date = new Date();

const movies = [
    {id: 1, title: 'Three Idiots', year: 2014, rating: 10},
    {id: 2, title: 'Deep Water Horizon', year: 2015, rating: 8}
];

const persons = [
    {id: 1, name: "Tom Cruise", birthday: date, countryId: 1},
    {id: 2, name: "Bradley Cooper", birthday: date, countryId: 2}
];

const countries = [
    {id: 1, name: "USA"},
    {id: 2, name: "Australia"}
];

export const authToken = "abcdefghijsllmnopqrstuv";

export const baseUser = {
    name: "Ese Erigha",
    email: "ese.erigha@gmail.com",
    password: "fgfhfhfjfjfkfkfkfk"
};

export const mockedUser = {
    ...baseUser,
    id: 1,
    password: "abcdefghij",
    get: function(query={}){
        return {
            ...baseUser,
            id: this.id,
            password: this.password
        }
    }
};

export const movieTestCaseData = {
    data: {
        movies: [
            {
                title: 'Three Idiots', 
                year: 2014,
                rating: 10,
                actors: [
                    {
                        name: "Tom Cruise", 
                        birthday: date, 
                        country: {
                            name: "USA"
                        }
                    },
                    {
                        name: "Bradley Cooper", 
                        birthday: date, 
                        country: {
                            name: "Australia"
                        }
                    },
                ],
                directors: [
                    {
                        name: "Tom Cruise", 
                        birthday: date, 
                        country: {
                            name: "USA"
                        }
                    },
                    {
                        name: "Bradley Cooper", 
                        birthday: date, 
                        country: {
                            name: "Australia"
                        }
                    },
                ]
            },
            {
                title: 'Deep Water Horizon', 
                year: 2015,
                rating: 18,
                actors: [
                    {
                        name: "Tom Cruise", 
                        birthday: date, 
                        country: {
                            name: "USA"
                        }
                    },
                    {
                        name: "Bradley Cooper", 
                        birthday: date, 
                        country: {
                            name: "Australia"
                        }
                    },
                ],
                directors: [
                    {
                        name: "Tom Cruise", 
                        birthday: date, 
                        country: {
                            name: "USA"
                        }
                    },
                    {
                        name: "Bradley Cooper", 
                        birthday: date, 
                        country: {
                            name: "Australia"
                        }
                    },
                ]
            }
        ]
    }
};


export const mockMovieService = {
    findAll: ()=>movies,
    batchFindActorsLoader: {
        load: (id: number|number[]) => persons
    },
    batchFindDirectorsLoader: {
        load: (id: number|number[]) => persons
    }
};


export const mockCountryService = {
    batchFindCountriesLoader: {
        load: (id: any)=> countries[id-1]
    }
};


export const userService = {
    create: (user)=> mockedUser.get({}),
    findOne: ({name})=> mockedUser.get({})
};