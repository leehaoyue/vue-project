import Vue from 'vue';
import Vuex from 'vuex';
import common from './common';
import admin from './admin';
import usr from './usr';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common,
    admin,
    usr
  }
});
