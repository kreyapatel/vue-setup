<template> 
  <div class="home-wraper">     
    <HeaderComponent />  
    <SidebarComponent />  
  </div>
</template>

<script>
  import HeaderComponent from '@/components/HeaderComponent.vue'
  import SidebarComponent from '@/components/SidebarComponent.vue'
  export default {
    name: 'HomePage',
    components: {
      HeaderComponent,
      SidebarComponent,
    },
    data: () => ({
    }),
  }
</script>
