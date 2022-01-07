//github/action.js

import { GithubProfile } from "../../api/github";
import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";

/* 액션 */
export const GET_USER_PROFILE = "github/GET_USER_PROFILE";
export const GET_USER_PROFILE_SUCCESS = "github/GET_USER_PROFILE_SUCCESS";
export const GET_USER_PROFILE_ERROR = "github/GET_USER_PROFILE_ERROR";

/* 액션 생성 */

export const getUserProfileAsync = createAsyncAction(
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR
)<undefined, GithubProfile, AxiosError>();
