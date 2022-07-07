<template>
  <v-app>
    <v-main>
      <!-- <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link> -->
      <router-view></router-view>
      <!-- <HelloWorld/> -->
    </v-main>
  </v-app>
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
