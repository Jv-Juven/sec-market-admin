import Vue from 'vue';
import App from 'app';
import ElementUi from 'element-ui';
import GoodDetails from './goodDetails.vue';
Vue.use(ElementUi);
export default App.init({
    ...GoodDetails
});
