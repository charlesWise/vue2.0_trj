// import * as types from './types';
import {
    HIDE_LOADING,
    SHOW_LOADING
} from './types'; //解构

const state = {
    isLoading: false
};

const mutations = {
    //loading
    [HIDE_LOADING](state) {
        state.isLoading = false;
    },
    [SHOW_LOADING](state) {
        state.isLoading = true;
    }
};

const getters = {
    isLoading(state){
    	return state.isLoading;
    },
    // isLoading: (state) => {
    //     return state.isLoading
    // }
};

export default {
    state,
    mutations,
    getters
}