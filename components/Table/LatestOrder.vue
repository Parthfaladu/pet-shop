<template>
  <div class="elevation-1 pa-6 mt-10">
    <div class="text--primary body-1">Latest Orders</div>
    <v-data-table
      :headers="headers"
      :items="orders"
      :items-per-page="5"
      class="elevation-0"
    >
      <template v-slot:[`item.uuid`]="{ item }">
        <div class="text--secondary">{{ item.uuid }}</div>
      </template>
      <template v-slot:[`item.status`]="{ item }">
        <v-chip :color="getColor(item.status)" dark class="caption white--text">
          {{ item.status }}
        </v-chip>
      </template>
      <template v-slot:[`item.invoice`]>
        <div class="grey lighten-3 pa-1 w-32 ml-8">
          <v-icon> mdi-tray-arrow-down </v-icon>
        </div>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  name: 'LatestOrder',
  data() {
    return {
      headers: [
        {
          text: 'Order UUID',
          align: 'start',
          sortable: false,
          value: 'uuid',
        },
        { text: 'Status', value: 'status' },
        { text: 'Download invoice', value: 'invoice' },
      ],
      orders: [
        {
          uuid: '083d0036-9616-3f1e-9b03-4fe51ad2e1c2',
          status: 'Open',
          invoice: '',
        },
        {
          uuid: '083d0036-9616-3f1e-9b03-4fe51ad2e1c2',
          status: 'Pending payment',
          invoice: '',
        },
        {
          uuid: '083d0036-9616-3f1e-9b03-4fe51ad2e1c2',
          status: 'Paid',
          invoice: '',
        },
        {
          uuid: '083d0036-9616-3f1e-9b03-4fe51ad2e1c2',
          status: 'Shipped',
          invoice: '',
        },
        {
          uuid: '083d0036-9616-3f1e-9b03-4fe51ad2e1c2',
          status: 'Cancelled',
          invoice: '',
        },
      ],
    }
  },
  methods: {
    getColor(status) {
      if (status === 'Open') return '#2196F3'
      else if (status === 'Pending payment') return '#F09E00'
      else if (status === 'Paid') return '#4EC690'
      else if (status === 'Shipped') return '#008655'
      else if (status === 'Cancelled') return '#B6C4C1'
      else return 'white'
    },
  },
}
</script>