<template>
  
 <div class="main-panel">
    <div class="inner-content">
        <div class="page-title">
					Dashboard
				</div>
        <div class="content-wrap container--fluid">
          <v-row>
              <v-col class="col-lg-4 col">
                  <v-card class="card-wrapper">
                      <div class="card-content">
                        <span class="stats-number dolar">3783</span>
                        <p>Total Trips </p>
                      </div>
                      <div class="card-img">
                          <img src="@/assets/images/trips.png">
                      </div>
                  </v-card>
              </v-col>
              <v-col class="col-lg-4 col">
                  <v-card class="card-wrapper">
                      <div class="card-content">
                        <span class="stats-number dolar">615</span>
                        <p>Completed Service Receiveds </p>
                      </div>
                      <div class="card-img">
                          <img src="@/assets/images/service.png">
                      </div>
                  </v-card>
              </v-col>
              <v-col class="col-lg-4 col">
                  <v-card class="card-wrapper">
                      <div class="card-content">
                        <span class="stats-number dolar">3168</span>
                        <p>Cancelled Service Receiveds</p>
                      </div>
                      <div class="card-img">
                          <img src="@/assets/images/cancelled.png">
                      </div>
                  </v-card>
              </v-col>
              <v-col class="col-lg-4 col">
                  <v-card class="card-wrapper">
                      <div class="card-content">
                        <span class="stats-number dolar">SAR 46257.83</span>
                        <p>Total Payment</p>
                      </div>
                      <div class="card-img">
                          <img src="@/assets/images/total-payment.png">
                      </div>
                  </v-card>
              </v-col>
              <v-col class="col-lg-4 col">
                  <v-card class="card-wrapper">
                      <div class="card-content">
                        <span class="stats-number dolar">SAR 457.45</span>
                        <p>Card Payment</p>
                      </div>
                      <div class="card-img">
                          <img src="@/assets/images/card.png">
                      </div>
                  </v-card>
              </v-col>
              <v-col class="col-lg-4 col">
                  <v-card class="card-wrapper">
                      <div class="card-content">
                        <span class="stats-number dolar">SAR 11.00</span>
                        <p>Referral Payment</p>
                      </div>
                      <div class="card-img">
                          <img src="@/assets/images/referral.png">
                      </div>
                  </v-card>
              </v-col>
              <v-col class="col-lg-4 col">
                  <v-card class="card-wrapper">
                      <div class="card-content">
                        <span class="stats-number dolar">SAR 461939.88</span>
                        <p>Cash Payment</p>
                      </div>
                      <div class="card-img">
                          <img src="@/assets/images/cash.png">
                      </div>
                  </v-card>
              </v-col>
              <v-col class="col-lg-4 col">
                  <v-card class="card-wrapper">
                      <div class="card-content">
                        <span class="stats-number dolar">SAR 149.50</span>
                        <p>Promotional Payment</p>
                      </div>
                      <div class="card-img">
                          <img src="@/assets/images/promotional.png">
                      </div>
                  </v-card>
              </v-col>
              <v-col class="col-lg-4 col">
                  <v-card class="card-wrapper">
                      <div class="card-content">
                        <span class="stats-number dolar">0</span>
                        <p>Total Schedules</p>
                      </div>
                      <div class="card-img">
                          <img src="@/assets/images/total-schedules.png">
                      </div>
                  </v-card>
              </v-col>
          </v-row>
          <div class="card-inner-bg">
            <div class="inner-header">Filter</div>
            <form class="data-table-form">
              <template>
                <v-row> 
                  <v-col cols="12" md="2">
                    <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="date"
                          label="Start Date"
                          append-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          outlined
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="date"
                          label="End Date"
                          append-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          outlined
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-select
                      :items="Status"
                      label="Status"
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-select
                      :items="Provider"
                      label="Provider"
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-select
                      :items="User"
                      label="User"
                      outlined
                    ></v-select>
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
             <v-data-table
              :headers="headers"
              :items="desserts"
              :search="search"
              @page-count="pageCount = $event"
              :page.sync="page"
              :items-per-page="itemsPerPage"
              class="custom-datatable"
            >
            </v-data-table>
          </div>
        </div>
    </div>
    <FooterComponent/>
 </div>
</template>

<script>
import FooterComponent from './FooterComponent';

  export default {
    name: 'HomePage',
    components: {
      FooterComponent,
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
          { text: 'Customer Name', value: 'name' },
          { text: 'Provider', value: 'provider' },
          { text: 'Date', value: 'date' },
          { text: 'Time', value: 'time' },
          { text: 'Status', value: 'status' },
          { text: 'Amount', value: 'amount' },
          { text: 'Payment Status', value: 'paymentstatus' },
          { text: 'Referral Bonus', value: 'referralbonus' },
          { text: 'Promotional Bonus', value: 'promotionalbonus' },
          { text: 'Card Payment', value: 'cardpayment' },
          { text: 'Cash Payment', value: 'cashpayment' },
        ],
        desserts: [
          {
            id: '4059',
            name: 'Le Tri',
            provider: 'Un Assigned',
            date: '29 Feb 2016',
            time: '3:25AM',
            status: 'Cancelled',
            amount: '0.00',
            paymentstatus: 'Request Not Completed',
            referralbonus: '0.00',
            promotionalbonus: '0.00',
            cardpayment: '0.00',
            cashpayment: '0.00',
          },
          {
            id: '4058',
            name: 'Cliente Taxi',
            provider: 'Un Assigned', 
            date: '29 Feb 2016',
            time: '2:27AM',
            status: 'Cancelled',
            amount: '0.00',
            paymentstatus: 'Request Not Completed',
            referralbonus: '0.00',
            promotionalbonus: '0.00',
            cardpayment: '0.00',
            cashpayment: '0.00',
          },
          {
            id: '4057',
            name: 'Jagdev Brar',
            provider: 'Un Assigned',
            date: '29 Feb 2016',
            time: '1:04AM',
            status: 'Cancelled',
            amount: '0.00',
            paymentstatus: 'Request Not Completed',
            referralbonus: '0.00',
            promotionalbonus: '0.00',
            cardpayment: '0.00',
            cashpayment: '0.00',
          },
          {
            id: '4056',
            name: 'Cla Clau',
            provider: 'Un Assigned',
            date: '28 Feb 2016',
            time: '11:56PM',
            status: 'Cancelled',
            amount: '0.00',
            paymentstatus: 'Request Not Completed',
            referralbonus: '0.00',
            promotionalbonus: '0.00',
            cardpayment: '0.00',
            cashpayment: '0.00',
          },
          {
            id: '4055',
            name: 'Malak Akmol',
            provider: 'Malek Akter',
            date: '28 Feb 2016',
            time: '10:54PM',
            status: 'Completed',
            amount: '0.00',
            paymentstatus: 'Completed',
            referralbonus: '0.00',
            promotionalbonus: '0.00',
            cardpayment: '0.00',
            cashpayment: '0.00',
          },
          {
            id: '4052',
            name: 'Malak Akmol',
            provider: 'Malek Akter',
            date: '28 Feb 2016',
            time: '10:50PM',
            status: 'Completed',
            amount: '0.00',
            paymentstatus: 'Completed',
            referralbonus: '0.00',
            promotionalbonus: '0.00',
            cardpayment: '0.00',
            cashpayment: '0.00',
          },
          {
            id: '4051',
            name: 'Martin Martin',
            provider: 'Un Assigned',
            date: '28 Feb 2016',
            time: '10:08PM',
            status: 'Cancelled',
            amount: '0.00',
            paymentstatus: 'Request Not Completed',
            referralbonus: '0.00',
            promotionalbonus: '0.00',
            cardpayment: '0.00',
            cashpayment: '0.00',
          },
          {
            id: '4050',
            name: 'Malak Akmol',
            provider: 'Malek Akter',
            date: '28 Feb 2016',
            time: '8:29PM',
            status: 'Completed',
            amount: '0.00',
            paymentstatus: 'Completed',
            referralbonus: '0.00',
            promotionalbonus: '0.00',
            cardpayment: '0.00',
            cashpayment: '0.00',
          },
        ],
    }),
  }
</script>


