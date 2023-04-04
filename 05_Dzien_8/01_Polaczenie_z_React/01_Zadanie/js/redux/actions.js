const ADD_ARTICLE = "ADD_ARTICLE";
const ADD_USER = "ADD_USER";

const addArticle = (article) => ({
    type: ADD_ARTICLE,
    payload: {article}
})

const addUser = (user) => ({
    type: ADD_USER,
    payload: {user}

})


export { ADD_ARTICLE, ADD_USER, addArticle, addUser };
