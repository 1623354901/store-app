import Mock from 'mockjs'
const Random = Mock.Random;
function getData() {
  let datalist = [];
  for (let i = 0; i < 100; i++) {
    let newData = {
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time(),// Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      // 中文名字 | 姓 | 名
      china_name: Random.cname(),
      china_first: Random.cfirst(),
      china_last: Random.clast(),
      // 英文名 | firatname | lastname | 带中间字的
      eng_name: Random.name(),
      eng_first: Random.first(),
      eng_last: Random.last(),
      eng_last: Random.name(true),
      // 长度为4的字符串
      string: Random.string(4),
      // 数字 最小1 最大100
      age: Random.integer(1, 100),
      // 数字 浮点数
      num: Random.float(1, 10, 1, 4),
      // 数字 字符串
      numString: Random.character('number'),
      // 日期 YYYY-MM-DD
      date: Random.date(),
      // 时间 HH:mm:ss
      time: Random.time(),
      // 日期 时间 YYYY-MM-DD HH:mm:ss
      dateTime: Random.datetime(),
      // 当前日期
      now: Random.now(),

      // 图片
      image: Random.image('200x100', '#ffcc33', '#FFF', 'png', '文字'),
      // 颜色 hex  rgb
      color: Random.color(),
      // 标题
      title: Random.ctitle(),
      cword: Random.cword(),
      // 一段文本 1段-100段
      cparagraph: Random.cparagraph(1, 2),
      // 英文 句子
      sentence: Random.sentence(),
      // 区域
      region: Random.region(),
      // 省 city zip couty 等
      province: Random.province(),

      // ip 域名 网址
      ip: Random.ip(),
      url: Random.url(),

      // 身份证
      identify: Random.id(),
      // 全局自增ID
      id1: Random.increment(),
      id2: Random.increment(),
      id3: Random.increment(),
    }
    datalist.push(newData)
  }
  return {
    data: datalist
  }
}
const data = Mock.mock('/msg1', getData)
export default { data };
// const Mock = require('mockjs')
// const Random = Mock.Random;
// const data = Mock.mock({
//     // 中文名字 | 姓 | 名
//     china_name: Random.cname(),
//     china_first: Random.cfirst(),
//     china_last: Random.clast(),
//     // 英文名 | firatname | lastname | 带中间字的
//     eng_name: Random.name(),
//     eng_first: Random.first(),
//     eng_last: Random.last(),
//     eng_last: Random.name(true),
//     // 长度为4的字符串
//     string: Random.string(4),
//     // 数字 最小1 最大100
//     age: Random.integer(1, 100),
//     // 数字 浮点数
//     num: Random.float(1, 10, 1, 4),
//     // 数字 字符串
//     numString: Random.character('number'),
//     // 日期 YYYY-MM-DD
//     date: Random.date(),
//     // 时间 HH:mm:ss
//     time: Random.time(),
//     // 日期 时间 YYYY-MM-DD HH:mm:ss
//     dateTime: Random.datetime(),
//     // 当前日期
//     now: Random.now(),

//     // 图片
//     image: Random.image('200x100', '#ffcc33', '#FFF', 'png', '文字'),
//     // 颜色 hex  rgb
//     color: Random.color(),
//     // 标题
//     title: Random.ctitle(),
//     cword: Random.cword(),
//     // 一段文本 1段-100段
//     cparagraph: Random.cparagraph(1, 2),
//     // 英文 句子
//     sentence: Random.sentence(),
//     // 区域
//     region: Random.region(),
//     // 省 city zip couty 等
//     province: Random.province(),

//     // ip 域名 网址
//     ip: Random.ip(),
//     url: Random.url(),

//     // 身份证
//     identify: Random.id(),
//     // 全局自增ID
//     id1: Random.increment(),
//     id2: Random.increment(),
//     id3: Random.increment(),
// })

console.log(data);
