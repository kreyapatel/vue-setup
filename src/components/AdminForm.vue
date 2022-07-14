<template>
  <div class="admin-form-wraper"> 
    <HeaderComponent  @toggle-mini="$refs.drawer.mini = !$refs.drawer.mini" />  
    <SidebarComponent ref="drawer" />
    <div class="main-panel">
      <div class="inner-content">
          <div class="page-title">
            Add admin
          </div>
          <div class="content-wrap container--fluid card-form-wrapper">
            <v-row              
              no-gutters
            >
              <v-col
                cols="12"
                md="12"
                lg="6"
              >
                <v-card>
                  <v-card-title>
                    <span>Add admin</span>
                  </v-card-title>
                  <v-divider></v-divider>    
                  
                  <v-card-text>
                    <v-form>
                      <v-text-field
                        placeholder="Name"
                        class="custom-input"
                      >
                      </v-text-field>
                      <v-text-field
                        placeholder="Email Address"
                        class="custom-input"
                      >
                      </v-text-field>                 
                    </v-form>
                    <v-card-actions>
                      <v-btn tile class="primary-btn">
                        Save
                      </v-btn>               
                    </v-card-actions>
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

<style scoped lang="scss">
  @import "@/assets/scss/main.scss";  
</style>

<script>
import FooterComponent from './FooterComponent';
import HeaderComponent from '@/components/HeaderComponent.vue'
import SidebarComponent from '@/components/SidebarComponent.vue'
  export default {
    name: 'AdminForm',
    components: {
      FooterComponent,
      HeaderComponent,
      SidebarComponent,
    },

    data: () => ({
     }),
  }
</script>


