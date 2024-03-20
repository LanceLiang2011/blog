import createDataContext from "./createDataContext";

const ACTION_TYPES = {
  add_post: "add_post",
};

const reducer = (blogPosts, action) => {
  switch (action.type) {
    case ACTION_TYPES.add_post: {
      return [
        ...blogPosts,
        {
          id: (blogPosts.length + 1).toString(),
          title: `POST #${blogPosts.length + 1}`,
        },
      ];
    }
    default:
      return blogPosts;
  }
};

const addNewPost = (dispatch) => () => {
  dispatch({ type: ACTION_TYPES.add_post });
};

const [BlogContext, BlogProvider] = createDataContext(reducer, [], {
  addNewPost,
});

export { BlogContext, BlogProvider };
