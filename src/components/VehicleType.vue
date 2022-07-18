<template>
  <div>
    <div class="home-wraper">     
      <HeaderComponent @toggle-mini="$refs.drawer.mini = !$refs.drawer.mini" />  
      <SidebarComponent ref="drawer" />   
    </div>
    <div class="main-panel">
        <div class="inner-content">
            <div class="page-title">
              Vehicles
            </div>
            <div class="content-wrap container--fluid">
              <div class="card-inner-bg">
                <div class="inner-header">Vehicles</div>
                <div class="inner-content-wrppaer">
                  <form>
                    <template>
                      <v-row>
                        <v-col cols="12" md="6">
                          <v-text-field
                            ref="name"
                            v-model="name"
                            :rules="[() => !!name || 'This field is required']"
                            :error-messages="errorMessages"
                            label="Make/Brand"
                            required
                          ></v-text-field>
                          <v-text-field
                            ref="number"
                            v-model="number"
                            :rules="[() => !!number || 'This field is required']"
                            label="Modal Number"
                            required
                          ></v-text-field>
                          <v-select
                            :items="Year"
                            label="Year"
                            :rules="[() => !!year|| 'This field is required']"
                          ></v-select>
                          <v-text-field
                            ref="number"
                            v-model="number"
                            :rules="[() => !!number || 'This field is required']"
                            label="License Plate Number"
                            required
                          ></v-text-field> 
                          <v-select
                            :items="Vehicle"
                            label="Vehicle Type"
                            :rules="[() => !!vehicle|| 'This field is required']"
                          ></v-select> 
                          <v-text-field
                            ref="number"
                            v-model="number"
                            :rules="[() => !!number || 'This field is required']"
                            label="Max Number of Passenger"
                            required
                          ></v-text-field>                            
                        </v-col>
                        <v-col cols="12" md="6">
                           <div class="custom-file-input">
                              <v-btn
                                :loading="isSelecting"
                                @click="onButtonClick"
                              >
                                {{ buttonText }}
                              </v-btn>
                              <input
                                ref="uploader"
                                class="d-none"
                                type="file"
                                accept="image/*"
                                @change="onFileChanged"
                              >
                            </div>
                        </v-col>
                        <v-col cols="12">
                           <v-btn tile class="primary-btn link-inside">
                            <router-link to="/">Save Vehicles</router-link>
                          </v-btn>
                        </v-col>

                      </v-row>
                    </template>
                  </form>
                </div>
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
    name: 'VehicleType',
    components: {
      FooterComponent,
      HeaderComponent,
      SidebarComponent,
    },
    
    

    data: () => ({
      Year: ['2015', '2015','2016','2017','2018','2019','2020','2021','2022'],
      Vehicle: ['Visible', 'Invisible'],

      defaultButtonText: 'Drag and Drop File here!',
      selectedFile: null,
      isSelecting: false

    }),
    computed: {
      buttonText() {
        return this.selectedFile ? this.selectedFile.name : this.defaultButtonText
      }
    },
    methods: {
      onButtonClick() {
        this.isSelecting = true
        window.addEventListener('focus', () => {
          this.isSelecting = false
        }, { once: true })

        this.$refs.uploader.click()
      },
      onFileChanged(e) {
        this.selectedFile = e.target.files[0]
        
        // do something
      }
    } 
  }
</script>
<style scoped lang="scss">
@import "@/assets/scss/main.scss";
.primary-btn {
  margin: 15px 0 0;
}
.custom-file-input {
  overflow: hidden;
  position: relative;
  border: 1px solid #e4e5e9;
  cursor: pointer;
  color: #aaa;
  min-width: 250px;
  min-height: 250px;
  max-height: 356px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    box-shadow: none;
    background: transparent !important;
  }
}
</style>


