const app = Vue.createApp({
  data() {
    return {
      advice: "Happiness is a journey, not a destination.",
      adviceId: 8,
    };
  },
  mounted() {
    this.advice =
      "It's easy to sit up and take notice, what's difficult is getting up and taking action";
    this.adviceId = "117";
  },
  methods: {
    async getData() {
      let res = await fetch("https://api.adviceslip.com/advice");
      let { slip } = await res.json();

      this.advice = slip.advice;
      this.adviceId = slip.id;
    },
  },
}).mount("#app");
