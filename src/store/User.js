export const UserModule = {
    namespaced: true,

    state: {
        user: null,
    },
    // mutation --> fungsi yang berefek pada state
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
    },
    // function --> fungsi yang akan dipanggil dalam aplikasi dan memanggil mutation
    actions: {
        setUser({ commit }, user) {
            commit("SET_USER", user);
        },
    },
};