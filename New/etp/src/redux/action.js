import axios from 'axios'; // Import axios for making HTTP requests (or any async library)

export const fetchUsers = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({ type: 'USERS_LOADED', payload: response.data });
        } catch (error) {
            dispatch({ type: 'USERS_FETCH_ERROR', payload: error.message });
        }
    };
};
