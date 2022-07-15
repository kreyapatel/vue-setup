<template>
  <div class="home-wraper">  
    <HeaderComponent  @toggle-mini="$refs.drawer.mini = !$refs.drawer.mini" />  
    <SidebarComponent ref="drawer" />
    <div class="main-panel">
      <div class="inner-content">
          <div class="page-title">
            Provider Types
          </div>
          <div class="content-wrap container--fluid">
            <div class="card-inner-bg">
              <div class="inner-header">Filter</div>
              <form class="data-table-form">
                <template>
                  <v-row> 
                    <v-col cols="12" md="2">
                      <v-select
                        :items="customerID"
                        label="Customer ID"
                        outlined
                      ></v-select>
                    </v-col>
                    <v-col cols="12" md="2">
                      <v-select
                        :items="Select"
                        label="Select"
                        outlined
                      ></v-select>
                    </v-col>
                    <v-col cols="12" md="2">
                        <v-text-field
                            label="Keyword"
                            outlined
                            v-model="search"
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
                          <v-btn tile depressed >
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
              
              <template>
                <v-data-table
                  :headers="headers"
                  :items="desserts"
                  :search="search"
                  sort-by="calories"
                  class="custom-datatable"
                >
                
                  <template v-slot:top>
                    <v-toolbar flat>
                      <v-dialog
                        v-model="dialog"
                        max-width="500px" 
                      >
                        <template v-slot:activator="{ on, attrs }" >
                          <v-btn
                            class="primary-btn"
                            v-bind="attrs"
                            v-on="on"
                            depressed
                            color="error"
                          >
                            <v-icon dark>mdi-plus</v-icon>
                            Add New Vehicle Type
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="text-h5">{{ formTitle }}</span>
                          </v-card-title>

                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field
                                    v-model="editedItem.id"
                                    label="Request ID"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field
                                    v-model="editedItem.type"
                                    label="Vehicle Type"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field
                                    v-model="editedItem.space"
                                    label="Maximum space"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field
                                    v-model="editedItem.visibility"
                                    label="Visibility"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-card-text>

                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="close"
                            >
                              Cancel
                            </v-btn>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="save"
                            >
                              Save
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                      <v-dialog v-model="dialogDelete" max-width="500px">
                        <v-card>
                          <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                            <v-spacer></v-spacer>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-toolbar>
                  </template>
                  
                  <template v-slot:[`item.actions`]="{ item }">
                    <v-icon
                      small
                      class="mr-2"
                      @click="editItem(item)"
                    >
                      mdi-pencil
                    </v-icon>
                    <v-icon
                      small
                      @click="deleteItem(item)"
                    >
                      mdi-delete
                    </v-icon>
                  </template>
                  <template v-slot:no-data>
                    <v-btn
                      color="primary"
                      @click="initialize"
                    >
                      Reset
                    </v-btn>
                  </template>
                </v-data-table>
              </template>
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
    name: 'ProviderTypes',
    components: {
      FooterComponent,
      HeaderComponent,
      SidebarComponent,
    },

    data: () => ({
      customerID: ['617', '616','615','614','613','612'],
      Select: ['Ascending', 'Descending'],

      search: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Request ID',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'Vehicle Type', value: 'type' },
        { text: 'Maximum space', value: 'space' },
        { text: 'Visibility', value: 'visibility' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        type: '',
        space: '',
        visibility: '',
      },
      defaultItem: {
        id: '',
        type: 0,
        space: 0,
        visibility: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            id: '617',
            type: 'Drive Black SUV',
            space: '1000',
            visibility: 'Visible',
          },
          {
            id: '616',
            type: 'Bus',
            space: '05',
            visibility: 'Visible',
          },
          {
            id: '615',
            type: 'Limo',
            space: '01',
            visibility: 'Visible',
          },
          {
            id: '614',
            type: 'Drive Black SUV',
            space: '54',
            visibility: 'Visible',
          },
          {
            id: '613',
            type: 'Drive Black SUV',
            space: '23',
            visibility: 'Visible',
          },
          {
            id: '612',
            type: 'Bus',
            space: '11',
            visibility: 'Invisible',
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>
<style scoped lang="scss">
@import "@/assets/scss/main.scss";
.custom-datatable {
  header {
    .primary-btn {
      margin: 0 -16px;
    }
  }
}
</style>


