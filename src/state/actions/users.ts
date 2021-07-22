import { ActionType } from '../action-types';
import { User } from '../domainTypes';

export interface FetchUsersAction {
  type: ActionType.FETCH_USERS;
}

export interface FetchUsersSuccessAction {
  type: ActionType.FETCH_USERS_SUCCESS;
  payload: User[];
}

export interface FetchUsersErrorAction {
  type: ActionType.FETCH_USERS_ERROR;
  payload: string;
}

export interface SearchUsersAction {
  type: ActionType.SEARCH_USERS;
  payload: string;
}

