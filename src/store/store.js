import {createStore} from "vuex";
import axios from "axios";

export const store = createStore({
    state() {
        return {
            users: [],
            user: null,
            loadingUsers: false,
            isSearchNotFound: false,
            errorMessage: ''
        }
    },
    getters: {},
    actions: {
        async requestUsers({ commit }, val) {
            commit("setLoadingUser", true);
            let query = '';
            if (val.includes(',')) query = val.replaceAll(' ', '').split(',').map((item) => {return (isNaN(Number(item)) ? 'name=' : 'id=') + item}).join('&');
            else query = val ? isNaN(Number(val)) ? `name=${val}` : `id=${val}` : '';
            try {
                const data = await axios.get(
                    `https://jsonplaceholder.typicode.com/users?${query}`
                );
                commit("setUsers", data.data);
                commit("setSearchNotFound", !data.data.length);
            } catch (error) {
                commit("setUsers", []);
                commit("setSearchNotFound", true);
                commit("setError", 'Ошибка запроса');
            }
            commit("setLoadingUser", false);
        },
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
        setUser(state, user) {
            state.user = user;
        },
        clearUsers(state) {
            state.users = [];
        },
        clearUser(state) {
            state.user = null;
        },
        setLoadingUser(state, val) {
            state.loadingUsers = val;
        },
        setSearchNotFound(state, val) {
            state.isSearchNotFound = val;
        },
        setError(state, val) {
            state.errorMessage = val;
        }
    }
})