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

function pieOption(data, title, fontSize = '30') {
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
          fontSize,
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
  const dimensions = source[0]
  source.splice(0, 1)
  const remainSource = source
  const _source = []
  const _obj = {}
  dimensions.forEach(key => {
    _obj[key] = ''
  })
  for (let i = 0; i < remainSource.length; i++) {
    const sourceItem = Object.assign({}, _obj)
    const _keys = Object.keys(sourceItem)
    _keys.forEach((key, index) => {
      sourceItem[key] = remainSource[i][index]
    })
    _source.push(sourceItem)
  }
  const option = {
    legend: {},
    tooltip: {},
    dataset: {
      dimensions,
      source: _source
    },
    xAxis: { type: 'category' },
    yAxis: {},
    color: colors,
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
      { type: 'bar' },
      { type: 'bar' }
    ]
  }

  return option
}

function mapOption(data, title) {
  let _max = 0
  if (Array.isArray(data)) {
    data.forEach(item => {
      if (item.value > _max) {
        _max = item.value
      }
    })
  }

  const option = {
    title: {
      text: title,
      left: 'center',
      top: '5%'
    },
    tooltip: {
      trigger: 'item'
    },
    visualMap: {
      inRange: {
        color: ['#DEF1FE', '#0997F7']
      },
      min: 0,
      max: _max + 10,
      top: 'bottom',
      left: '5%',
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: true
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '数量',
        type: 'map',
        mapType: 'china',
        roam: false,
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: true
          }
        },
        data
      }
    ]
  }

  return option
}

export {
  basicLineOption,
  stackedLineOption,
  pieOption,
  barOption,
  mapOption
}
