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
                          <v-row class="filter-controls">
                              <v-text-field
                              hide-details="auto"
                              class="custom-input"
                              placeholder="Keyword"
                              ></v-text-field>
                              <v-btn block tile class="primary-btn search-btn">
                                  <v-icon left>mdi-magnify</v-icon>
                                  Search
                              </v-btn>  
                              <v-btn block tile class="reset-btn">
                                  <v-icon left>mdi-restore</v-icon>
                                  Reset
                              </v-btn>  
                              <router-link to="/admin-form" >
                                  <v-btn block tile class="primary-btn admin-btn">
                                      <v-icon left>mdi-plus</v-icon>
                                      Add Admin
                                  </v-btn> 
                              </router-link>
                          </v-row>  
                          <v-data-table
                              :headers="headers"
                              :items="items"
                              :items-per-page="10"
                              class="custom-datatable"
                              @page-count="pageCount = $event"
                              :page.sync="page"
                            >
                              <template v-slot:[`item.actions`]="{ item }">
                                <v-icon 
                                    @click="(item)"
                                  >
                                  mdi-credit-card-edit
                                </v-icon>
                                <v-icon 
                                @click="(item)"
                              >
                                mdi-delete
                              </v-icon>
                              </template>
                            </v-data-table> 
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
      page: 1,
      pageCount: 5,
      headers: [
          {
            text: 'Admin ID',
            align: 'start',
            sortable: false,
            value: 'admin_id',
          },
          { text: 'Name', sortable: false, value: 'name' },
          { text: 'Email', sortable: false, value: 'email' },
          { text: 'Actions', sortable: false, value: 'actions' },
        ],
        items: [
          {
            admin_id: '01',
            name: 'Kinjal Patel',
            email: 'kinjal_patel.com',
          },
          {
            admin_id: '02',
            name: '	Pavan Patel',
            email: 'pavan@gmail.com',
          },
          {
            admin_id: '03',
            name: 'Jassi Gill',
            email: 'jassi_gill @gmail.com',
          },
          {
            admin_id: '04',
            name: 'Samuel Oliveira',
            email: 'samuoliversky@hotmail.com',
          },
          {
            admin_id: '05',
            name: 'Malek Akter',
            email: '	myfbwork25@gmail.com',
          },
          {
            admin_id: '06',
            name: 'Alireza Sabeti',
            email: '	alireza.sabeti@gmail.com',
          },
          {
            admin_id: '07',
            name: 'Mohammad Babaei',
            email: 'm.bb@gmail.com',
          },
          {
            admin_id: '08',
            name: 'Samuel Oliveira',
            email: 'samuoliversky@hotmail.com',
          },
          {
            admin_id: '09',
            name: 'Abdul Lawal',
            email: 'abdul@paratechng.com',
          },
          {
            admin_id: '10',
            name: 'Guillaume Chirouse',
            email: 'guillaume.chirouse@gmail.com',
          },
          {
            admin_id: '01',
            name: 'Kinjal Patel',
            email: 'kinjal_patel',
          },
          {
            admin_id: '01',
            name: 'Kinjal Patel',
            email: 'kinjal_patel',
          },
          {
            admin_id: '01',
            name: 'Kinjal Patel',
            email: 'kinjal_patel.com',
          },
          {
            admin_id: '01',
            name: 'Kinjal Patel',
            email: 'kinjal_patel.com',
          },
          {
            admin_id: '01',
            name: 'Kinjal Patel',
            email: 'kinjal_patel.com',
          }
        ],
    }),
  }
</script>


