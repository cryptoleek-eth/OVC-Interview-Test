import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { User } from '../domainTypes';

export const searchUsers = (name: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_USERS,
      payload: name
    });
  }
}

export const fetchUsers = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_USERS,
    });

    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );

      const users = data.map((result: any) : User => {
        return {
          "id": result.id,
          "name": result.name,
          "email": result.email,
          "city": result.address.city,
          "company": result.company.name
        }
      });

      dispatch({
        type: ActionType.FETCH_USERS_SUCCESS,
        payload: users,
      });
    } catch (err) {
      dispatch({
        type: ActionType.FETCH_USERS_ERROR,
        payload: err.message,
      });
    }
  };
};
