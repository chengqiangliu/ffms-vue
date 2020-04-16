/* eslint-disable */

// 判断是否为空
export function isNotEmpty(obj) {
  try {
    if (obj == null || obj == undefined) {
      return false
    }
    //判断数字是否是NaN
    if (typeof obj === 'number') {
      if (isNaN(obj)) {
        return false
      } else {
        return true
      }
    }
    //判断参数是否是布尔、函数、日期、正则，是则返回true
    if (
      typeof obj === 'boolean' ||
      typeof obj === 'function' ||
      obj instanceof Date ||
      obj instanceof RegExp
    ) {
      return true
    }
    //判断参数是否是字符串，去空，如果长度为0则返回false
    if (typeof obj === 'string') {
      if (obj.trim().length == 0) {
        return false
      } else {
        return true
      }
    }

    if (typeof obj === 'object') {
      //判断参数是否是数组，数组为空则返回false
      if (obj instanceof Array) {
        if (obj.length == 0) {
          return false
        } else {
          return true
        }
      }

      //判断参数是否是对象，判断是否是空对象，是则返回false
      if (obj instanceof Object) {
        //判断对象属性个数
        if (Object.getOwnPropertyNames(obj).length == 0) {
          return false
        } else {
          return true
        }
      }
    }
  } catch (e) {
    console.log(e)
    return false
  }
}

export function isvalidPositiveFloat(str) {
  // 正浮点数，不包括0
  const strRegex = /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/
  return strRegex.test(str)
}

export function isvalidPositiveNumber(str) {
  // 正整数，不包括0
  const strRegex = /^[0-9]*[1-9][0-9]*$/
  return strRegex.test(str)
}

/* 合法手机号码 */
export function isvalidPhoneNumber(str) {
  const phoneRegex = /^1[34578]\d{9}$/
  return phoneRegex.test(str)
}

/* 合法密码 */
export function isvalidPassword(str) {
  // 字符或字母6-20位，不考虑全为数字和全为字符情况
  // const passwordRegex = /^[0-9a-zA-Z]{6,20}$/ // 不能保证不能是纯数字或纯英文
  const passwordRegex = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
  return passwordRegex.test(str)
}

/* 四位数字*/
export function isvalidCode(str) {
  const codeRegex = /^\d{6}$/
  return codeRegex.test(str)
}

/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}
