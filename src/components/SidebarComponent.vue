<template>
    <div class="sidebar">
      <v-navigation-drawer
          class="app--drawer"
            v-model="drawer"
            :mini-variant.sync="mini"
            app
            fixed
          > 
          <v-list-item class="px-2 sidebar-title">
            <div class="logo-img">
              <router-link to="/home">
                <img src="@/assets/images/logo.png" alt="logo" >
              </router-link>
            </div>        
            <!-- <v-app-bar-nav-icon class="toggle-btn" icon  @click.stop="mini = !mini"></v-app-bar-nav-icon> -->
          </v-list-item>
          <vue-custom-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
            <v-list>  
              <v-list-item-group  v-model="selectedItem">                        
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  >
                  <router-link :to="item.path" class="sidebar-link">
                    <v-tooltip content-class="tooltip-right" right  :disabled = "!mini">
                      <template v-slot:activator="{ on, attrs }">
                        <v-list-item-icon 
                        v-bind="attrs"
                        v-on="on">
                          <img  :src="require('@/assets/images/' + item.icon)" alt="dashboard" class="normal-img" >
                          
                          <img :src="require('@/assets/images/' + item.iconH)" alt="dashboard-h" class="hover-img" >
                        </v-list-item-icon>
                      </template>
                      <span>{{ item.title }}</span>
                    </v-tooltip>
                    <v-list-item-content>
                        {{ item.title }}
                    </v-list-item-content>
                  </router-link>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </vue-custom-scrollbar>
        </v-navigation-drawer>
    </div>
</template>

<script>
  import vueCustomScrollbar from 'vue-custom-scrollbar'
  import "vue-custom-scrollbar/dist/vueScrollbar.css"
  export default {
    name: 'SidebarComponent',
    components: {
      vueCustomScrollbar
    },

    data () {
      return {         
        selectedItem:0,
        drawer: true,
        mini: false,      
        settings: {
          suppressScrollY: false,
          suppressScrollX: false,
          wheelPropagation: true
        },
        items: [
          { title: 'Dashboard',path: '/home', icon: 'dashboard.png', iconH: 'dashboard-h.png' },
          { title: 'Map View',path: '/map-view', icon: 'map-view.png', iconH: 'map-view-h.png' },
          { title: 'Drivers', path: '/drivers', icon: 'drivers.png', iconH: 'drivers-h.png' },
          { title: 'Requests', path: '/requests', icon: 'requests.png', iconH: 'requests-h.png' },
          { title: 'Schedules', path: '/schedules', icon: 'schedules.png', iconH: 'schedules-h.png' },
          { title: 'Customers', path: '/customers', icon: 'customers.png', iconH: 'customers-h.png' },
          { title: 'Reviews', path: '/reviews', icon: 'reviews.png', iconH: 'reviews-h.png' },
          { title: 'Types', path: '/types', icon: 'types.png', iconH: 'types-h.png' },
          { title: 'Promotions', path: '/promotions', icon: 'promotions.png', iconH: 'promotions-h.png' },
          { title: 'Payment Details', path: '/payment', icon: 'payment.png', iconH: 'payment-h.png' },
          { title: 'Weekly Statement', path: '/weekly-statement', icon: 'statement.png', iconH: 'statement-h.png' },
          { title: 'Referral Management', path: '/referral-management', icon: 'referral-mgt.png', iconH: 'referral-mgt-h.png' },
          { title: 'Location Management', path: '/location-management', icon: 'map-view.png', iconH: 'map-view-h.png' },
          { title: 'Chat History to Admin', path: '/chat-history', icon: 'chat-mgt.png', iconH: 'chat-mgt-h.png' },
          { title: 'Quote Management', path: '/quote-management', icon: 'quote-mgt.png', iconH: 'quote-mgt-h.png' }          
        ], 
      }      
    },
    methods: {
      scrollHanle(evt) {
        console.log(evt)
      }
    }
  }
</script>
