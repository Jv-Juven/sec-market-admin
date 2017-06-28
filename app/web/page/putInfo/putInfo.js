import Vue from 'vue';
import App from 'app';
import PutInfo from './putInfo.vue';
import ElementUi from 'element-ui';
Vue.use(ElementUi);
export default App.init({
    ...PutInfo
});
