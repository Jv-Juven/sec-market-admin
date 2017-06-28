import Vue from 'vue';

import Layout from 'component/layout/standard';
import BaseLayout from 'component/layout/base';
import MobileLayout from 'component/layout/mobile';

Vue.component(MobileLayout.name, MobileLayout);
Vue.component(Layout.name, Layout);
Vue.component(BaseLayout.name, BaseLayout);
