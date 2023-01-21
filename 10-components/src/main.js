import { createApp } from 'vue'
import App from './App.vue'
// import Greating from './components/Greating.vue';

let vm = createApp(App)

// vm.component("Greating", Greating);

vm.mount('#app')
