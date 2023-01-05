//vm represents Vue Model
const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Dogget",
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
  },
}).mount("#app");
//bind vue to the #app div in the html

// setTimeout(() => {
//   vm.firstName = "Bob";
//   //we dont need to specify vm.data... vue does this magicly
// }, 5000);
