import UIkit from 'uikit'
import Icons from './uikit-icons-gentzler'
UIkit.use(Icons)

// Simple fade effect on page transition
$(window).on('load', function(){
    $('body').removeClass('fade-out')
})


import Vue from 'vue'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)
import axios from 'axios'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
Vue.prototype.$http = axios

import DynamicForm from './components/DynamicForm.vue'
new Vue({
  components: { DynamicForm }
}).$mount('#form')