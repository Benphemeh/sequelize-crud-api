import { POST_REPOSITORY } from '../../core/constants';
import Post from 'src/core/database/models/post.model';

export const postsProviders = [
  {
    provide: POST_REPOSITORY,
    useValue: Post,
  },
];
