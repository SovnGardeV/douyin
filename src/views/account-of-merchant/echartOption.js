function basicLineOption(xData, yData) {
  const option = {
    xAxis: {
      type: 'category',
      data: xData || ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: yData || [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
    }]
  }
  return option
}

function stackedLineOption(xData, yData, map) {
  const _yKeys = Object.keys(yData)
  const series = []; const label = []
  _yKeys.forEach(item => {
    series.push({
      name: map[item],
      type: 'line',
      stack: '总量',
      data: yData[item]
    })
    label.push(map[item])
  })
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: label || []
    },
    xAxis: {
      type: 'category',
      data: xData || []
    },
    yAxis: {
      type: 'value'
    },
    series
  }
  return option
}

export {
  basicLineOption,
  stackedLineOption
}
