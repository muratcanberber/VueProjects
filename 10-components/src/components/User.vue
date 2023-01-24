<template>
  <button type="button" @click="onClickAge">Update Age</button>
  <button type="button" @click="ageChangeFn(3)">Update Age CB</button>
  <p>User age is {{ age }} years old</p>
</template>

<script>
export default {
  name: "User",
  props: {
    age: {
      type: Number,
    },
    ageChangeFn: Function,
  },
  methods: {
    onclickAge() {
      this.$emit("age-change");
    },
  },
};
</script>
