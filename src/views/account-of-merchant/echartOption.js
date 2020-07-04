import randomcolor from 'randomcolor'

const colors = [
  '#2997ff',
  '#269696',
  '#fe2270',
  '#fc8c63',
  '#fbcb6f'
]

function basicLineOption(xData = {}, yData = {}) {
  const option = {
    xAxis: {
      type: 'category',
      name: '日期',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
    }]
  }
  return option
}

function stackedLineOption(xData = {}, yData = {}) {
  const _yKeys = Object.keys(yData)
  const _xKeys = Object.keys(xData)
  const series = []; const yLabel = []
  let xLabel
  _xKeys.length && (xLabel = _xKeys[0])
  _yKeys.forEach((key, index) => {
    const lineColor = randomcolor({
      luminosity: 'light',
      hue: 'blue'
    })
    series.push({
      name: key,
      type: 'line',
      stack: '总量',
      color: colors[index] ? colors[index] : lineColor,
      smooth: true,
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: colors[index] ? colors[index] : lineColor // 0% 处的颜色
          }, {
            offset: 1, color: 'white' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }
      },
      data: yData[key]
    })
    yLabel.push(key)
  })
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: yLabel || []
    },
    xAxis: {
      type: 'category',
      name: xLabel,
      data: xData[xLabel] || []
    },
    yAxis: {
      type: 'value'
    },
    series
  }
  return option
}

function pieOption(data, title) {
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}'
    },
    title: [{
      text: title,
      left: 'center',
      top: '5%'
    }],
    series: [{
      name: title,
      type: 'pie',
      color: colors,
      radius: ['65%', '90%'],
      data: data,
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '30',
          fontWeight: 'bold'
        }
      },
      left: 'center',
      top: 0,
      bottom: 0
    }]
  }

  return option
}

function barOption(source) {
  const option = {
    legend: {},
    tooltip: {},
    dataset: {
      source
    },
    xAxis: { type: 'category' },
    yAxis: {},
    color: colors,
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
      { type: 'bar' },
      { type: 'bar' },
      { type: 'bar' }
    ]
  }

  return option
}

export {
  basicLineOption,
  stackedLineOption,
  pieOption,
  barOption
}
