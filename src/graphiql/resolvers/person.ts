
export default{
    Person: {
        country: ({countryId}, args,{countryService})=> countryService.batchFindCountriesLoader.load(countryId)
    }
}