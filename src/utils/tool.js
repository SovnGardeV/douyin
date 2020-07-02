const uuid = () => {
  var s = []
  var hexDigits = '0123456789abcdef'
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-'

  var uuid = s.join('')
  return uuid
}

const bulidStr = (obj) => {
  var str = ''
  for (var key in obj) {
    str += key + '=' + obj[key] + '&'
  }
  str = str.substr(0, str.lastIndexOf('&'))
  return str
}

/**
 * @param {int} 除法
 * @returns {string}
 */
const division = (number1, number2 = 100) => {
  if (!number1) return 0
  return parseFloat((number1 / number2).toFixed(2))
}

const multiplication = (number1, number2 = 100) => {
  if (!number1) return 0
  return parseFloat((number1 * number2).toFixed(2))
}

const percentage = (number1, number2) => {
  return (Math.round(number1 / number2 * 10000) / 100.00 + '%')
}

const add = (number1, number2) => {
  return number1 + number2
}

/**
 * Parse the time to string
 * @param {(Object|string|n umber)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
const parseTime = function(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
const formatTime = (time, option) => {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

const initForm = (form, unClearList = []) => {
  const keyNameArr = Object.keys(form)
  keyNameArr.forEach(item => {
    if (unClearList.indexOf(item) === -1) form[item] = ''
  })

  // this.$nextTick(() => {
  //   if (this.$refs[formName]) this.$refs[formName].clearValidate()
  // })
}

const copyObj = (obj1, obj2 = {}) => {
  const keys = Object.keys(obj2)
  keys.forEach(key => {
    if (key in obj1) {
      obj1[key] = obj2[key]
    }
  })
  return obj1
}

const isJSON = (str) => {
  if (typeof str === 'string') {
    try {
      JSON.parse(str)
      return true
    } catch (e) {
      return false
    }
  }
  return false
}

const handleMapIntoArray = (map) => {
  var arr = Object.keys(map)
  arr.forEach((item, index) => {
    var obj = {
      id: item,
      name: map[item]
    }
    arr[index] = obj
  })

  return arr
}

const duplicateRemove = (arr, id = 'id') => {
  const obj = {}
  arr = arr.reduce(function(item, next) {
    obj[next[id]] ? '' : obj[next[id]] = true && item.push(next)
    return item
  }, [])
  return arr
}

const handleNumber = (num) => {
  if (num >= 10000) {
    return division(num, 10000) + '万'
  } else if (num >= 100000000) {
    return division(num, 100000000) + '亿'
  }

  return num
}

export default {
  uuid,
  division,
  multiplication,
  percentage,
  add,
  parseTime,
  formatTime,
  initForm,
  copyObj,
  isJSON,
  handleMapIntoArray,
  bulidStr,
  duplicateRemove,
  handleNumber
}
