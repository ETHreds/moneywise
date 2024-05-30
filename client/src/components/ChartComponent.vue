<template>
  <div class="q-p-lg">
    <apexchart type="bar" :options="options" :series="series"></apexchart>
  </div>
</template>
<script setup>
// import VueApexCharts from 'vue-apexcharts'

const options = {
  chart: {
    id: 'vuechart-example',
    width: '100%',
    toolbar: false,
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
  },
  title: {
    text: 'Cashflow',
    align: 'left',
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize: '24px',
      fontWeight: 'bold',
      fontFamily: undefined,
      color: '#263238'
    },
  }
}

const series = [{
  name: 'income',
  data: [30, 40, 45, 50, 49, 60, 70, 91]
},
{
  name: 'expense',
  data: [20, 10, 25, 50, 79, 50, 200, 1]
}]

</script>
<style scoped>
.echarts {
  width: 100%;
  height: 400px;
}
</style>
