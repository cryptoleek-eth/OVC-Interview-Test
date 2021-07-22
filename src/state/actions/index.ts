import { FetchUsersAction, FetchUsersSuccessAction, FetchUsersErrorAction, SearchUsersAction  } from './users';

import { FetchPostsAction, FetchPostsSuccessAction, FetchPostsErrorAction, SetPostsUserIdAction  } from './posts';


export type Action =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction
  | SearchUsersAction
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsErrorAction
  | SetPostsUserIdAction
