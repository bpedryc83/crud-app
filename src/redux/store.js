import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import postsReducer from './postsRedux';
import categoriesReducer from './categoriesRedux';

export const getAllPosts = (state) => state.posts;
export const getAllCategories = (state) => state.categories;
export const getPostbyId = ({ posts }, id) => posts.find(post => post.id === id);
export const getCategoryById = ({ categories }, id) => categories.find(category => category.id === id);
export const getPostsByCategory = ({ posts }, categoryId) => posts.filter(post => post.category === categoryId);

const subreducers = {
  posts: postsReducer,
  categories: categoriesReducer,
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;