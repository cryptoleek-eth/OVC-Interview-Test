import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Post } from '../domainTypes';

export const fetchPosts = (userId: number, author: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_POSTS,
    });

    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts', {
          params: {
            userId
          }
        }
      );

      const posts = data.map((result: any) : Post => {
        return {
          "id": result.id,
          "userId": result.userId,
          "title": result.title,
          "body": result.body,
        }
      });

      dispatch({
        type: ActionType.FETCH_POSTS_SUCCESS,
        payload: {author, posts},
      });
    } catch (err) {
      dispatch({
        type: ActionType.FETCH_POSTS_ERROR,
        payload: err.message,
      });
    }
  };
};
