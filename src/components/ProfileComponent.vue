<template>
  <div class="home-wraper"> 
    <HeaderComponent  @toggle-mini="$refs.drawer.mini = !$refs.drawer.mini" />  
    <SidebarComponent ref="drawer" />
    <div class="main-panel">
      <div class="inner-content">
          <div class="page-title">
            Profile
          </div>
          <div class="content-wrap container--fluid card-form-wrapper profile-wrapper">
            <v-row no-gutters >
                <v-col
                cols="12"
                md="12"
                lg="6"
                >
                    <v-card>
                        <v-card-title>
                            <em>
                                <img src="@/assets/images/review-pro-pic.jpg" alt="review-pro-pic" />
                            </em>
                            <span>Aadil A Al-Abbasi</span>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-form>
                                <v-row>
                                    <v-col class="col-lg-6 col">
                                        <v-text-field
                                        hide-details="auto"
                                        class="custom-input"
                                        placeholder="Aadil A"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col class="col-lg-6 col">
                                        <v-text-field
                                        hide-details="auto"
                                        class="custom-input"
                                        placeholder="Al-Abbasi"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                        hide-details="auto"
                                        class="custom-input"
                                        placeholder="adilai-abbasi@gmail.com"
                                        ></v-text-field>
                                    </v-col>
                                </v-row> 
                                <v-row>
                                    <v-col>
                                        <v-text-field 
                                            class="custom-input"
                                            v-model="password"
                                            append-icon="mdi-pencil"
                                            :type="login ? 'text' : 'password'"                                           
                                            placeholder="Password"
                                            persistent-placeholder="true"
                                            @click:append="login = !login"
                                            ></v-text-field>
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
        &.profile-wrapper{
            .v-card{
                .v-card__title{
                    background-color: $gray4;
                    padding: 45px 20px;
                    em{
                        background-color: $white;
                        margin:0 auto 28px;
                        border: 2px solid $white;
                        border-radius: 100%;
                        display: table;
                        height: 131px;
                        width: 131px;
                        line-height:0;
                        img{
                            width: 100%;
                            border-radius: 100%;
                        }
                    }
                    span{
                        display: block;
                        width: 100%;
                        text-align: center;
                        color: $white;
                        font-size:19px;
                    }
                }
            }
            .v-card__actions{
                max-width: 145px;
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
        
    }),
  }
</script>


