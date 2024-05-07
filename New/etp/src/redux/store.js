import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { combineReducers } from 'redux';
const initialState = {
    count: 0,
    users: [],
    loading: false,
    error: null,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1,
            };
        case 'DECREMENT':
            return {
                count: state.count - 1,
            };
        default:
            return state;
    }
}

export function increment() {
    return {
        type: 'INCREMENT',
    };
}

export function decrement() {
    return {
        type: 'DECREMENT',
    };
}


function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'USERS_LOADED':
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        case 'USERS_FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case 'USERS_FETCH_REQUEST': // Optional: Handle loading state
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    counter: reducer,
    users: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;