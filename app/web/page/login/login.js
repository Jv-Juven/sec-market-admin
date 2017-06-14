import Vue from 'vue';
import App from 'app';
import Login from './login.vue';
import ElementUi from 'element-ui';
import axios from 'axios';
Vue.use(ElementUi);
export default App.init({
  ...Login
});
