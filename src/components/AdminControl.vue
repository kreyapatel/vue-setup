<template>
  <div class="home-wraper"> 
    <HeaderComponent  @toggle-mini="$refs.drawer.mini = !$refs.drawer.mini" />  
    <SidebarComponent ref="drawer" />
    <div class="main-panel">
      <div class="inner-content">
          <div class="page-title">
            Admin Control
          </div>
          <div class="content-wrap container--fluid card-form-wrapper admin-control-wrapper">
            <v-row no-gutters >
                <v-col
                cols="12"
                md="12"
                lg="12"
                >
                    <v-card>
                        <v-card-title>                            
                            <span>Admin Control List</span>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>                                            
                            
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
          </div>
      </div>
      <FooterComponent/>
   </div>
  </div> 
</template>
<style lang="scss" scoped>
    @import "@/assets/scss/main.scss";
</style>

<script>
import FooterComponent from './FooterComponent';
import HeaderComponent from '@/components/HeaderComponent.vue'
import SidebarComponent from '@/components/SidebarComponent.vue'
  export default {
    name: 'HomePage',
    components: {
      FooterComponent,
      HeaderComponent,
      SidebarComponent,
    },

    data: () => ({
        
    }),
  }
</script>


