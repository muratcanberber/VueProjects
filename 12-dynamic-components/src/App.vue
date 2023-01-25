
import About from './components/About.vue';

<template>
  <select v-model="componentName">
    <option value="Home">Home</option>
    <option value="About">About</option>
  </select>
  <KeepAlive>
    <Component :is="componentName" />
  </KeepAlive>
</template>

<script>
import About from './components/About.vue';
import Home from './components/Home.vue';

export default {
  name: "App",
  components: { Home, About },
  data() {
    return {
      componentName: "Home"
    }
  }
}
</script>
