import { createStore } from 'vuex';
import common from './common';
import admin from './admin';
import usr from './usr';

export default createStore({
  modules: {
    common,
    admin,
    usr
  }
});
