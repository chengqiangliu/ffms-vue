<script>
import { Line } from 'vue-chartjs';

export default {
  name: 'ConsumeLineChat',
  extends: Line,
  data() {
    return {
      chartData: {
        consumeData: [],
        salaryData: [],
      },
    };
  },

  mounted() {
    const that = this;
    this.$request.httpRequest({
      method: 'get',
      url: '/chart/list',
      params: {},
      success(response) {
        that.chartData = { ...response.data };
        that.renderChart({
          labels: ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [{
            label: '工资金额',
            borderWidth: 2,
            borderColor: '#65cea7',
            backgroundColor: 'transparent',
            pointBackgroundColor: '#f87979',
            data: that.chartData.salaryData,
          }, {
            label: '消费金额',
            borderWidth: 2,
            borderColor: '#f87979',
            backgroundColor: 'transparent',
            pointBackgroundColor: '#65cea7',
            data: that.chartData.consumeData,
          }],
        }, {
          responsive: true,
          maintainAspectRatio: false,
        });
      },
    });
  },
};
</script>
