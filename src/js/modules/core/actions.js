import * as t from "./actionTypes";
import { fetchArticles, fetchAuthorships } from "../articles/actions";
import { fetchComments } from "../comments/actions";
import { fetchMedia } from "../media/actions";
import { fetchSections } from "../sections/actions";
import { fetchUsers, fetchUserRoles, fetchRoles } from "../users/actions";

export const refreshWindowDimensions = () => ({
  type: t.REFRESH_WINDOW_DIMENSIONS,
  payload: {},
});

export const openSidebar = () => ({
  type: t.OPEN_SIDEBAR,
});
export const closeSidebar = () => ({
  type: t.CLOSE_SIDEBAR,
});

export const fetchAllData = () => {
  return dispatch => {
    dispatch(fetchComments());
    dispatch(fetchMedia());
    dispatch(fetchSections());
    dispatch(fetchArticles());
    dispatch(fetchAuthorships());
    dispatch(fetchRoles());
    dispatch(fetchUsers());
    dispatch(fetchUserRoles());
  };
};
