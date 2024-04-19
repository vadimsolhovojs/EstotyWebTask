<script>
    import { onMount, onDestroy } from 'svelte'
    import Chart from 'chart.js/auto'
    
    import { filteredRetention } from '../../store'
  
    let chart
  
    function renderChart(data, ctx) {
      function calculateRetention(days) {
        const labels = ['D0', 'D5', 'D10', 'D20', 'D25', 'D30', 'D60', 'D90']
        return labels.map((day, index) => (days[index] / days[0]) * 100)
      }
  
      const chartData = data.map(item => ({
        label: `${item.country} - ${item.app_ver}`,
        data: calculateRetention(item.days)
      }));
  
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
      }

      if (chart) {
        chart.destroy()
      }
  
      if (ctx) {
        chart = new Chart(ctx, chartConfig)
      }
    }
  
  onMount(() => {
    const ctx = document.getElementById('chart').getContext('2d')

    filteredRetention.subscribe(value => {
      renderChart(value, ctx)
    })

    window.addEventListener('resize', handleResize)
  })

  onDestroy(() => {
    if (chart) {
      chart.destroy()
      chart = null
    }
    window.removeEventListener('resize', handleResize)
  })

  function handleResize() {
    if (chart) {
      chart.resize()
    }
  }
</script>

<div class="chart-container">
  <canvas id="chart" width=100%></canvas>
</div>
