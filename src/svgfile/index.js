import Vue from 'vue';
import svgReader from './reader/index.vue';

Vue.component('svgReader', svgReader);

const requireAll = requireContext => requireContext.keys().map(requireContext),
  req = require.context('./svg', false, /\.svg$/);

requireAll(req);
