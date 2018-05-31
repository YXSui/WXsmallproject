const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//事件处理函数
function power(base, power) {
  if (1 == power)
    return base
  if (0 == power)
    return 1;
  var result = base;
  for (var i = 0; i < power - 1; i++) {
    result = result * base;
  }
  return result;
}
/*取复利*/
function fuli(rate, year) {
  var result = 0;
  for (var i = year; i > 0; i--) {
    result += power(rate, i);
  }
  return result;
}

module.exports = {
  formatTime: formatTime,
  fuli:fuli,
  power:power
}
