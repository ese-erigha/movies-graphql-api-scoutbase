import {countryService} from "../../services";
import {batchFindCountriesLoader} from "../dataloaders/country.dataloader";

export default{
    Person: {
        //country: async({countryId})=> await countryService.findById(countryId)
        country: ({countryId})=> batchFindCountriesLoader.load(countryId)
    }
}