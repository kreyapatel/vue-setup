<template>
  <v-container>
    <!-- <h1>Home Page</h1> -->
    <SidebarComponent/>
  </v-container>
</template>

<script>
  import SidebarComponent from'@/components/SidebarComponent.vue'
  export default {
    name: 'HomePage',
    components:{
      SidebarComponent,
    },
    data: () => ({
    }),
  }
</script>
