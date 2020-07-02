import randomcolor from 'randomcolor'

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
  _yKeys.forEach(key => {
    const lineColor = randomcolor({
      luminosity: 'light',
      hue: 'blue'
    })
    series.push({
      name: key,
      type: 'line',
      stack: '总量',
      color: lineColor,
      smooth: true,
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: lineColor // 0% 处的颜色
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

function pieOption() {
  const data = [{
    name: 'Apples',
    value: 70
  }, {
    name: 'Strawberries',
    value: 68
  }, {
    name: 'Bananas',
    value: 48
  }, {
    name: 'Oranges',
    value: 40
  }, {
    name: 'Pears',
    value: 32
  }, {
    name: 'Pineapples',
    value: 27
  }, {
    name: 'Grapes',
    value: 18
  }]
  const option = {
    title: [{
      text: '粉丝性别分布',
      left: 'center',
      top: '10%'
    }, {
      subtext: 'alignTo: "none" (default)',
      left: '50%',
      top: '75%',
      textAlign: 'center'
    }],
    series: [{
      type: 'pie',
      radius: '25%',
      center: ['50%', '50%'],
      data: data,
      animation: false,
      label: {
        position: 'outer',
        alignTo: 'none',
        bleedMargin: 5
      },
      left: 'center',
      top: 0,
      bottom: 0
    }]
  }

  return option
}

export {
  basicLineOption,
  stackedLineOption,
  pieOption
}
