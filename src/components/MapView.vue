<template>
  <div class="map-wraper"> 
    <HeaderComponent  @toggle-mini="$refs.drawer.mini = !$refs.drawer.mini" />  
    <SidebarComponent ref="drawer" />
    <div class="main-panel">
      <div class="inner-content">
          <div class="page-title">
            Map View
          </div>
          <div class="content-wrap container--fluid card-form-wrapper">
            <v-row              
              no-gutters
            >
              <v-col>
                <v-card>
                  <v-card-title>
                    <span>Filter</span>
                  </v-card-title>
                  <v-divider></v-divider>    
                  
                  <v-card-text>
                    <v-form>
                      <v-row class="map-row">
                        <v-col
                          lg="4"
                        >
                          <v-text-field
                          placeholder="Please enter your address"
                          outlined
                          dense
                          class="full-border"
                          ></v-text-field> 
                        </v-col>
                        <v-col
                          lg="4"
                        >
                          <v-btn class="primary-btn location-btn">
                            Find Location
                          </v-btn>     
                        </v-col>  
                      </v-row>        
                    </v-form>
                    <div class="map-wrapper">
                      <iframe 
                        class="embed-responsive-item" 
                        src="https://www.youtube.com/embed/v64KOxKVLVg" 
                        frameborder="0"
                        allowfullscreen>
                      </iframe>
                    </div>
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
    name: 'MapPage',
    components: {
      FooterComponent,
      HeaderComponent,
      SidebarComponent,
    },

    data: () => ({
     }),
  }
</script>


