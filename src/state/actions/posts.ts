import { ActionType } from '../action-types';
import { Post } from '../domainTypes';

export interface FetchPostsAction {
  type: ActionType.FETCH_POSTS;
}

export interface FetchPostsSuccessAction {
  type: ActionType.FETCH_POSTS_SUCCESS;
  payload: {
    author: string
    posts: Post[]
  };
}

export interface FetchPostsErrorAction {
  type: ActionType.FETCH_POSTS_ERROR;
  payload: string;
}

export interface SetPostsUserIdAction {
  type: ActionType.SET_POSTS_USERID;
  payload: number;
}