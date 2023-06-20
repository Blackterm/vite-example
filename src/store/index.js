import axios from "axios";
import { createStore } from "vuex";

export default createStore({
    state: {
        data: [],
        name: "xXxMuro Başgan Tarafından HekledinxXx",
    },
    getters: {
        data: state => state.data,
        name: state => state.name,

    },
    actions: {
        fectData(context) {
            axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
                context.commit('SET_DATA', res.data)

            }).catch((e) => {
                console.log(e.response)
            });
        },


        getName(context) {
            context.commit('GET_NAME')
        }


    },
    mutations: {
        SET_DATA(state, data) {
            state.data = data;
        },

        GET_NAME(state) {
            state.name;
        },

    }

});

