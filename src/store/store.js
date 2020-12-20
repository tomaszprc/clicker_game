import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        stores: require("../data/gold-store.json"),
        score: 0,
        bonus: 0,
        buyOption: true,
    },
    mutations,
    actions
});
