
import { POST_REPOSITORY, USER_REPOSITORY } from "./constants";
import Post from "./database/models/post.model";
import User from "./database/models/user.model";


export const modelProviders = [{
    provide: USER_REPOSITORY,
    useValue: User
},
{
    provide: POST_REPOSITORY,
    useValue: Post, 
},

];