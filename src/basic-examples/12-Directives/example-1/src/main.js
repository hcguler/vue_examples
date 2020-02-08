import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.directive('highlight', {
  bind(el, binding) {
    // no argument
    // el.style.backgroundColor = 'green'
    // single argument
    // el.style.backgroundColor = binding.value;

    var delay = 0;
    if (binding.modifiers['delayed']){
      delay = 3000;
    }
    setTimeout(()=>{
      if (binding.arg == 'background'){
        el.style.backgroundColor = binding.value;
      }
      if (binding.arg == 'textcolor'){
        el.style.color = binding.value;
      }
    },delay)
  }
});


new Vue({
  render: h => h(App),
}).$mount('#app')
