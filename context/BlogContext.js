import createDataContext from "./createDataContext";

const ACTION_TYPES = {
  add_post: "add_post",
  delete_post: "delete_post",
};

const reducer = (blogPosts, action) => {
  switch (action.type) {
    case ACTION_TYPES.add_post: {
      return [
        ...blogPosts,
        {
          id: Math.floor(Math.random() * 999999).toString(),
          title: `POST #${blogPosts.length + 1}`,
        },
      ];
    }
    case ACTION_TYPES.delete_post: {
      return blogPosts.filter((post) => post.id !== action.payload);
    }
    default:
      return blogPosts;
  }
};

const addNewPost = (dispatch) => () => {
  dispatch({ type: ACTION_TYPES.add_post });
};

const deletePost = (dispatch) => (id) => {
  dispatch({ type: ACTION_TYPES.delete_post, payload: id });
};

const [BlogContext, BlogProvider] = createDataContext(reducer, [], {
  addNewPost,
  deletePost,
});

export { BlogContext, BlogProvider };
