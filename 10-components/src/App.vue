<template>
  <p>Hey</p>
  <Greating :age="age" />
  <User :age="age" @age-change="age++" :ageChangeFn="updateAgeCB" />
</template>

<script>
import Greating from "@/components/Greating.vue";
import User from "./components/User.vue";
export default {
  name: "App",
  components: {
    Greating,
    User,
  },
  data() {
    return {
      age: 20,
    };
  },
  methods: {
    updateAge(num) {
      this.age += num;
    },
    updateAgeCB(num) {
      this.age += num;
    },
  },
};
</script>
