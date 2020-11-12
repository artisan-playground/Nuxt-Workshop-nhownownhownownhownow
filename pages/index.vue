<template>
  <div class="container">
    <div>
      <Logo />
      <Hello :data="data" :fromParent="fromParent" @result="getData"></Hello>
      <div>
        <h2>Result: {{ this.result }}</h2>
      </div>
      <h1 class="title">{{ time }}</h1>
      <nuxt-link to="/about">About</nuxt-link>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: this.$dayjs(),
      data: 20,
      result: 0,
    };
  },
  mounted() {
    // setInterval(() => {
    //   this.time = this.$dayjs();
    // }, 1000);
  },
  methods: {
    getData(data) {
      console.log(data);
      this.result = data;
    },
    fromParent() {
      return "Wow";
    },
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
