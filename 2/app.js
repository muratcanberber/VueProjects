let vm = Vue.createApp({
  data() {
    return {
      isPurple: false,
      selectedColor: "",
      size: 150,
      degree: 30,
    };
  },
  methods: {},
  computed: {
    circle_classes() {
      return {
        purple: this.isPurple,
      };
    },
  },
  watch: {
    size: {
      immediate: true,
      handler(newSize, oldSize) {
        this.degree++;
      },
    },
  },
}).mount("#app");
