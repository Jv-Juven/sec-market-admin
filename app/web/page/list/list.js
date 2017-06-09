import Vue from 'vue';
import App from 'app';
import List from './list.vue';
import ElementUi from 'element-ui';
Vue.use(ElementUi);
export default App.init({
    ...List
});
