//vm represents Vue Model
const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Dogget",
      middleName: "",
      url: "https://google.com",
      raw_url: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20,
    };
  },
  methods: {
    increase() {
      this.age++;
    },
    updateLastName(message, e) {
      //console.log(message);
      this.lastName = e.target.value;
    },
    updateMiddleName(e) {
      this.middleName = e.target.value;
    },
  },
  computed: {
    fullName() {
      console.log("Full name method was called");
      return `${this.firstName} ${
        this.middleName
      }  ${this.lastName.toUpperCase()}`;
    },
  },
  watch: {
    age(newVal, oldVal) {
      //async code can be used here
      setTimeout(() => {
        this.age = 20;
      }, 3000);
    },
  },
}).mount("#app");
//bind vue to the #app div in the html

// setTimeout(() => {
//   vm.firstName = "Bob";
//   //we dont need to specify vm.data... vue does this magicly
// }, 5000);
