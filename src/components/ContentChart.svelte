<script>
    import Chart from 'chart.js/auto';
    import { onMount, onDestroy } from 'svelte';
    import { filteredRetention } from '../store';
  
    let chart;
  
    // Function to create and update the chart
    function renderChart(data) {
      // Convert days to retention percentages
      function calculateRetention(days) {
        const labels = ['D0', 'D5', 'D10', 'D20', 'D25', 'D30', 'D60', 'D90'];
        return labels.map((day, index) => (days[index] / days[0]) * 100);
      }
  
      // Populate chart data
      const chartData = data.map(item => ({
        label: `${item.country} - ${item.app_ver}`,
        data: calculateRetention(item.days)
      }));
  
      // Chart configuration
      const chartConfig = {
        type: 'bar',
        data: {
          labels: ['D0', 'D5', 'D10', 'D20', 'D25', 'D30', 'D60', 'D90'],
          datasets: chartData
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Days'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Retention (%)'
              }
            }
          }
        }
      };
  
      // Destroy existing chart if it exists
      if (chart) {
        chart.destroy();
      }
  
      // Create new chart
      const ctx = document.getElementById('chart').getContext('2d');
      chart = new Chart(ctx, chartConfig);
    }
  
  // Create or update chart on mount and when filteredRetention changes
  onMount(() => {
    filteredRetention.subscribe(value => {
      renderChart(value);
    });

    // Resize chart when window size changes
    window.addEventListener('resize', handleResize);
  });

  // Cleanup on component destroy
  onDestroy(() => {
    if (chart) {
      chart.destroy();
      chart = null;
    }
    window.removeEventListener('resize', handleResize);
  });

  // Function to handle window resize
  function handleResize() {
    if (chart) {
      chart.resize();
    }
  }
</script>

  
  <div class="chart-container">
    <canvas id="chart" width=100% ></canvas>
  </div>
  
  <style>
    .chart-container {
     
      height: 100%;
      position: relative;
    }
  </style>