//bind vue to the #app div in the html
Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Dogget",
    };
  },
}).mount("#app");
