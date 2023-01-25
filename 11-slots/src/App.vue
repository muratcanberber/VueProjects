<template>
  <Form>
    <template v-slot:help>
      <p>{{ help }}</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
    <p>lorem10</p>
  </Form>
  <Form>
    <template v-slot:help>
      <p>Contact help text</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="username" />
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </Form>
</template>

<script>
import Form from "./components/Form.vue";

export default {
  name: "App",
  components: { Form },
  data() {
    return {
      help: "This is some help text",
    };
  },
};
</script>
