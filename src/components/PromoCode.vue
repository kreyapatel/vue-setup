<template>
  <div class="home-wraper"> 
    <HeaderComponent  @toggle-mini="$refs.drawer.mini = !$refs.drawer.mini" />  
    <SidebarComponent ref="drawer" />
    <div class="main-panel">
      <div class="inner-content">
          <div class="page-title">
            Promocode
          </div>
          <div class="content-wrap container--fluid card-form-wrapper promocode-wrapper">
            <v-row no-gutters >
                <v-col
                cols="12"
                md="12"
                lg="6"
                >
                    <v-card>
                        <v-card-title>
                        <span>Add Promo Code</span>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-form>
                                <v-row>
                                    <v-col class="col-lg-6 col">
                                        <v-text-field
                                        hide-details="auto"
                                        class="custom-input"
                                        placeholder="Value"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="col-lg-6 col">
                                        <v-select                                
                                            :items="stateItems"
                                            placeholder="State"
                                        ></v-select>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-menu
                                            v-model="dateMenu"
                                            :close-on-content-click="false"
                                            :nudge-right="40"
                                            transition="scale-transition"
                                            offset-y
                                            min-width="auto"
                                        >
                                            <template v-slot:activator="{ on, attrs }">
                                            <v-text-field
                                                v-model="date"
                                                label="Satrt Date"
                                                append-icon="mdi-calendar"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
                                                class="date-input"
                                            ></v-text-field>
                                            </template>
                                            <v-date-picker
                                            v-model="date"
                                            @input="dateMenu = false"
                                            ></v-date-picker>
                                        </v-menu>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-menu
                                            v-model="dateMenu2"
                                            :close-on-content-click="false"
                                            :nudge-right="40"
                                            transition="scale-transition"
                                            offset-y
                                            min-width="auto"                                            
                                        >
                                            <template v-slot:activator="{ on, attrs }">
                                            <v-text-field
                                                v-model="date2"
                                                label="End Date"
                                                append-icon="mdi-calendar"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
                                                class="date-input"
                                            ></v-text-field>
                                            </template>
                                            <v-date-picker
                                            v-model="date"
                                            @input="dateMenu2 = false"
                                            ></v-date-picker>
                                        </v-menu>
                                    </v-col>
                                </v-row>
                            </v-form>                        
                            <v-card-actions>
                            <v-btn block tile class="primary-btn">
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
<style lang="scss" scoped>
    @import "@/assets/scss/colours.scss";
    @import "@/assets/scss/fonts.scss";   
    @import "@/assets/scss/mixin.scss";  
    
    .card-form-wrapper {
        &.promocode-wrapper{
            .v-card__actions{
                max-width: 145px;
            }
            .v-select{
                margin: 0 0 21px;
                padding: 0;
                .v-input__append-inner{
                    margin-top: 8px;
                }
            }
            .date-input{
                .v-input__icon{
                    margin-bottom: 5px;
                }
            }
        }
    }
    
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
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        dateMenu: false,
        dateMenu2: false,
        stateItems: ['Active', 'Dactive'],
    }),
  }
</script>


