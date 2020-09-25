import tool from '@/utils/tool'
import { updateMoreTask } from '@/api/task'
const initForm = {
  devices: '',
  group: false, // 是否为用户组
  day: false, // 是否为每日任务
  name: '',
  operTime: '',
  type: '',
  plugId: '',
  pushType: 1,
  avg: 0,
  tagName: '',
  more: false, // 是否为批量营销
  tag: false, // 筛选时是否为标签获取
  phone: false, // 是否为通讯录营销
  content: {}
}

const initContent = {
  packageNames: '', // 应用包名 发布单任务时 为必传参数
  operType: [], // 操作类型 单任务传插件英文名，多任务传任务内容，以逗号隔开
  operMsg: '', // 操作说明 单任务传插件中文名 多任务传当前所属菜单名
  num: '', // 数量、个数之类的
  source: '', // 视频来源
  tiktok: '', // 传入多个抖音号 以'|'分割
  city: '',
  operTime: '', // 定时任务执行时间
  timeInterval: [], // 间隔时间、停留时间，观看时间 以'|'分割
  continueTime: [], // 持续时间
  serialNumber: [], // 视频序号
  type: '', // 执行方式
  content: {
    comments: [],
    shares: [],
    messages: []
  },
  otherType: '', // 涨粉类别
  search: '', // 搜索内容
  obj: '', // 群发对象
  isExitThirdAPP: '', // 执行完是否退出
  isAttention: '', // 是否关注
  remark: '', // 备注
  playNum: [], // 播放数量区间
  operatorNum: [], // 操作数量区间
  letterTime: [] // 私信下停留时间
}

const handleTask = (form, content, cb, needContent) => {
  const _form = Object.assign({}, initForm)
  const _content = Object.assign({}, initContent)
  tool.copyObj(_form, form)
  tool.copyObj(_content, content)

  _form.devices = _form.devices.join(',')

  _content.operType = Array.isArray(_content.operType) ? _content.operType.join(',') : _content.operType
  _content.timeInterval = Array.isArray(_content.timeInterval) ? _content.timeInterval.join('|') : _content.timeInterval
  _content.continueTime = Array.isArray(_content.continueTime) ? _content.continueTime.join('|') : _content.continueTime
  _content.serialNumber = Array.isArray(_content.serialNumber) ? _content.serialNumber.join('|') : _content.serialNumber
  _content.playNum = _content.playNum.join('|')
  _content.operatorNum = Array.isArray(_content.operatorNum) ? _content.operatorNum.join('|') : _content.operatorNum
  _content.letterTime = Array.isArray(_content.letterTime) ? _content.letterTime.join('|') : _content.letterTime
  // _content.obj = Array.isArray(_content.obj) ? JSON.stringify(_content.obj) : _content.obj

  if (_content.operType.indexOf('评论') === -1) {
    delete _content.content['comments']
  }
  if (_content.operType.indexOf('转发') === -1) {
    delete _content.content['shares']
  }
  if (_content.operType.indexOf('私信') === -1 && !needContent) {
    delete _content.content['messages']
  }

  const _keys = Object.keys(_content.content)
  if (_keys.length) {
    _keys.forEach(key => {
      if (_content.content[key]) {
        _content.content[key] = Array.isArray(_content.content[key]) ? _content.content[key].join('|') : _content.content[key]
      }
    })
  } else {
    delete _content.content
  }

  const _ctxKeys = Object.keys(_content)
  _ctxKeys.forEach(key => {
    if (!isValue(_content[key])) delete _content[key]
  })

  _form.content = JSON.stringify(_content)
  // debugger

  updateMoreTask(_form).then(res => {
    cb(res)
  })
  // cb({ message: 'test success' })
}

const isValue = (sth) => {
  if (sth === undefined) {
    return false
  } else if (sth === null) {
    return false
  } else if (typeof sth === 'string' && !sth.length || sth === '|') {
    return false
  } else if (Array.isArray(sth) && sth.join('') === '') {
    return false
  }
  return true
}

export {
  handleTask
}
