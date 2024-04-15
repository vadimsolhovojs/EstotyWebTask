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
  
      // Create chart if not already created
      if (!chart) {
        const ctx = document.getElementById('chart').getContext('2d');
        chart = new Chart(ctx, chartConfig);
      } else {
        // Update chart data
        chart.data.datasets = chartData;
        chart.update();
      }
    }
  
    // Create or update chart on mount and when filteredRetention changes
    onMount(() => {
      filteredRetention.subscribe(value => {
        renderChart(value);
      });
    });
  
    // Cleanup on component destroy
    onDestroy(() => {
      if (chart) {
        chart.destroy();
        chart = null;
      }
    });
  </script>
  
  <div class="chart-container">
    <canvas id="chart" width="800" height="600"></canvas>
  </div>
  
  <style>
    .chart-container {
      width: 100%;
      height: 600px;
      margin: auto;
      position: relative;
    }
  </style>