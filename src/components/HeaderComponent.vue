<template>
  <v-app-bar app class="header"> 
    <div class="header-left">
      <v-app-bar-nav-icon @click.stop="$emit('toggle-mini')" class="sidebar-toggle">
      </v-app-bar-nav-icon> 
      <v-badge 
        color="#ed6c44" 
        class="badge" 
        overlap
      >
        <template v-slot:badge>
          <span>3</span>
        </template>
        <v-img src="@/assets/images/error.png" alt="error" width="21" height="20" />
      </v-badge>
    </div>

    <div class="header-right">
      <v-menu offset-y class="profile-drodown">
        <template v-slot:activator="{ on, attrs }">
          <v-btn        
            v-bind="attrs"
            v-on="on" 
            class="profile-dropdown-btn"         
          >
            <v-avatar size="46">
              <v-img src="@/assets/images/review-pro-pic.jpg" alt="review-pro-pic" />
            </v-avatar>
            Aadil A. Al-Abbasi
            <span class="caret"></span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"                              
          >
            <v-list-item-title>
              <router-link :to="item.path" :title="item.title" class="dropdown-menu-link">
                <v-img contain
                  :src="require('@/assets/images/' + item.icon)"
                  width="18" height="18" class="dropdown-icon normal-img"
                />  
                <v-img contain
                  :src="require('@/assets/images/' + item.iconH)"
                  width="18" height="18" class="dropdown-icon hover-img"
                />              
                <span class="dropdown-title">{{ item.title }}</span>
              </router-link>   
              </v-list-item-title>             
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn
        class="rounded-0 logout-link"
      >
        <v-img src="@/assets/images/logout-icon.png" alt="logout-icon" width="22" height="26" /> 
      </v-btn>
    </div>
  </v-app-bar>
</template>

<style lang="scss" scoped>
  @import "@/assets/scss/main.scss";  
   .v-menu__content {
      margin-top: 15px;
      @include border-radii(0, 0, 3px, 3px);            
      @include box-shadow2(-2px, 7px, 5px, -3px, rgba(0, 0, 0, 0.4));
      border: 0px;
      .dropdown-menu-link {
          display: flex;
          font-size: 13px;
          line-height: 18px;
          letter-spacing: 0.2px;
          color: $black2;   
          &:hover {
            color: $red3;
            .normal-img {
              display: none;
            }
            .hover-img {
              display: block;
            }
          }       
          .hover-img {
            display: none;
          }
          .dropdown-icon {
              max-width: 18px;
              margin-right: 10px;
          }
          
      }
      .v-list {
          padding: 0;
      }
      .v-list-item {
          min-height: 41px;
          border-bottom: 1px dashed $gray3;
          &:last-child {
              border-bottom: 0;
          }
      }
  }    
</style>

<script>
  export default {
    name: 'HeaderComponent',

    data: () => ({      
      items: [
        { title: 'My Profile', path: '/my-profile', icon: 'profile-icon.png', iconH: 'profile-icon-h.png' },
        { title: 'Help', path: '/help', icon: 'help-icon.png', iconH: 'help-icon-h.png' },
      ],
    }),
  }
</script>
