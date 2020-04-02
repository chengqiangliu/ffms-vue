<script>
import { Line } from 'vue-chartjs';

export default {
  name: 'ConsumeLineChat',
  extends: Line,
  mounted() {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: '工资金额',
        borderWidth: 3,
        borderColor: '#65cea7',
        backgroundColor: 'transparent',
        pointBackgroundColor: '#f87979',
        data: [60, 69, 60, 60, 69, 90, 60, 60, 69, 60],
      }, {
        label: '消费金额',
        borderWidth: 3,
        borderColor: '#f87979',
        backgroundColor: 'transparent',
        pointBackgroundColor: '#65cea7',
        data: [40, 39, 10, 40, 39, 80, 40, 10, 40, 39],
      }],
    }, {
      responsive: true,
      maintainAspectRatio: false,
    });
  },
};
</script>
