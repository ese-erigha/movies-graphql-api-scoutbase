
import {merge} from "lodash";
import Date from "../schema/scalars/date-time"
import userResolvers from "./user";
import personResolvers from "./person";
import movieResolvers from "./movie";

export default merge(
    {Date},
    personResolvers,
    userResolvers,
    movieResolvers
)