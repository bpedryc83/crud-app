const DELETE_POST = 'app/posts/DELETE_POST';
const ADD_POST = 'app/posts/ADD_POST';
const EDIT_POST = 'app/posts/EDIT_POST';

export const deletePost = payload => ({ type: DELETE_POST, payload });
export const addPost = payload => ({ type: ADD_POST, payload});
export const editPost = payload => ({ type: EDIT_POST, payload});

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case DELETE_POST: {
      const indexToRemove = statePart.findIndex(post => post.id === action.payload.id);
      if (indexToRemove > -1) {
        statePart.splice(indexToRemove, 1);
      }
      return [...statePart];
    }
    case ADD_POST: {
      return [...statePart, { ...action.payload }];
    }
    case EDIT_POST: {
      return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
    }
    default:
      return statePart;
  };
};

export default postsReducer;