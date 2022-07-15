<template>
  <div>
    <div class="home-wraper">     
      <HeaderComponent @toggle-mini="$refs.drawer.mini = !$refs.drawer.mini" />  
      <SidebarComponent ref="drawer" />  
    </div>
    <div class="main-panel">
        <div class="inner-content">
            <div class="page-title">
              Weekly Statement
            </div>
            <div class="content-wrap container--fluid">
              <div class="card-inner-bg">
                <div class="inner-header">Payment Statement</div>
                <form class="data-table-form">
                  <template>
                    <v-row> 
                      <v-col cols="12" md="2">
                        <v-text-field
                            label="Keyword"
                            outlined
                          ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2" class="btn-wrapper-outer">
                        <div class="btn-wrapper">
                            <v-text-field
                              v-model="search"
                              append-icon="mdi-magnify"
                              label="Search"
                              single-line
                              hide-details
                              outlined
                            ></v-text-field>
                            <v-btn tile depressed :ripple="{ class: 'red--text' }" >
                              <v-icon left>
                                mdi-cached
                              </v-icon>
                              Reset
                            </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </template>
                </form>
                <v-data-table
                  :headers="headers"
                  :items="desserts"
                  :search="search"
                  @page-count="pageCount = $event"
                  :page.sync="page"
                  :items-per-page="itemsPerPage"
                  class="custom-datatable"
                >
                <template v-slot:[`item.actions`]="{ item }">
                    <v-icon
                      large
                      teal darken-2
                      @click="(item)"
                    >
                      mdi-file
                    </v-icon>
                  </template>
                </v-data-table>
              </div>
            </div>
        </div>
        <FooterComponent/>
    </div>
  </div>
</template>

<script>
import FooterComponent from './FooterComponent';
import HeaderComponent from '@/components/HeaderComponent.vue'
import SidebarComponent from '@/components/SidebarComponent.vue'
  export default {
    name: 'WeeklyStatement',
    components: {
      FooterComponent,
      HeaderComponent,
      SidebarComponent,
    },

    data: () => ({
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      menu2: false,

      Status: ['Cancelled', 'Completed'],
      Provider: ['Un Assigned', 'Malel Akter'],
      User: ['Le Tri', 'Cliente Taxi','Jagdev Brar','Cla Clau'],


        page: 1,
        pageCount: 0,
        itemsPerPage: 3,
        search: '',
        
        headers: [
          {
            text: 'Request ID',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Trips', value: 'trips' },
          { text: 'Total', value: 'total' },
          { text: 'Week Ending On', value: 'week' },
          { text: 'Download', value: 'actions'},
        ],
        desserts: [
          {
            id: '8089',
            trips: '10',
            total: '47.44',
            week: '28-2-2016 23:59:59',
          },
          {
            id: '8088',
            trips: '84',
            total: '165192.18',
            week: '28-2-2016 23:59:59',
          },
          {
            id: '8087',
            trips: '10',
            total: '47.44',
            week: '28-2-2016 23:59:59',
          },
          {
            id: '8086',
            trips: '10',
            total: '47.44',
            week: '28-2-2016 23:59:59',
          },

        ],
    }),
  }
</script>


