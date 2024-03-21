import createDataContext from "./createDataContext";

const ACTION_TYPES = {
  add_post: "add_post",
  delete_post: "delete_post",
  edit_post: "edit_post",
};

const reducer = (blogPosts, action) => {
  switch (action.type) {
    case ACTION_TYPES.add_post: {
      return [
        ...blogPosts,
        {
          id: action.payload.id,
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    }
    case ACTION_TYPES.delete_post: {
      return blogPosts.filter((post) => post.id !== action.payload);
    }
    case ACTION_TYPES.edit_post: {
      return blogPosts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    }
    default:
      return blogPosts;
  }
};

const addNewPost = (dispatch) => (title, content, id, onSuccess) => {
  if (!id) id = Math.floor(Math.random() * 999999).toString();
  dispatch({ type: ACTION_TYPES.add_post, payload: { title, content, id } });
  if (onSuccess) onSuccess();
};

const deletePost = (dispatch) => (id) => {
  dispatch({ type: ACTION_TYPES.delete_post, payload: id });
};

const editPost = (dispatch) => (title, content, id, onSuccess) => {
  dispatch({ type: ACTION_TYPES.edit_post, payload: { id, title, content } });
  if (onSuccess) onSuccess();
};

const [BlogContext, BlogProvider] = createDataContext(reducer, [], {
  addNewPost,
  deletePost,
  editPost,
});

export { BlogContext, BlogProvider };
