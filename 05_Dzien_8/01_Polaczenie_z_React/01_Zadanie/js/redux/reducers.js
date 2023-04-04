import {ADD_ARTICLE, ADD_USER} from "./actions";
import {combineReducers} from "redux";

const initialUsersState = {
    jan: 0,
    gosia: 0,
};

function usersReducer(state = initialUsersState, action) {
    switch (action.type) {
        case ADD_USER:
            const uID = action.payload.user;
            return {
                ...state,
                [uID]: 0,
            };

        case ADD_ARTICLE:
            const userId = action.payload.article.userId;
            const userState = state[userId];
            return {
                ...state,
                [userId]: userState + 1,
            };
        default:
            return state;
    }
}

const initialArticlesState = [];

function articlesReducer(state = initialArticlesState, action) {
    switch (action.type) {
        case ADD_ARTICLE:
            return [...state, { ...action.payload.article }];

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    users: usersReducer,
    articles: articlesReducer
})
export default rootReducer;