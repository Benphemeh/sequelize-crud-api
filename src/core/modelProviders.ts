
import { USER_REPOSITORY } from "./constants";
import User from "./database/models/user";


export const modelProviders = [{
    provide: USER_REPOSITORY,
    useValue: User
}];