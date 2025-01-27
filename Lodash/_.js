_ = {
  clamp(num, low, up) {
    const  temp = Math.max(num, low);
    return Math.min(temp, up);
  },
  inRange(num, up, low = 0) {
    if (up < low) {
      let temp = up;
      up = low; 
      low = temp;
    }
    if (num >= up || num < low) {
      return false
    } 
    return true;
  },
  words(Str) {
    return Str.split(' ');
    /*
    let str = '';
    const N = Str.length, res = [];
    for (let i = 0; i < N; i++) {
      if (Str[i] === ' ') {
        res.push(str);
        str = '';
      } else {
        str = str + Str[i];
      }
    }
    if (str) {
      res.push(str);
    }
    return res;
    */
  },
  pad(str, len) {
    len -= str.length
    if (len > 0) {
      if (len % 2) {
        str += ' ';
        len--;
      }
      for (len; len > 0; len -= 2) {
        str = ' ' + str + ' ';
      }
    }
    return str;
  },
  has(obj, notKey) {
    const o = obj[notKey];
    if (o === undefined) {
      return false;
    }   
    return true;
  },
  invert(obj) {
    const newObj = {}
    for (let [key, value] of Object.entries(obj)) {
      newObj[value] = key;
    }
    console.log(newObj)
    return newObj;
  },
  findKey(obj, fun) {
    for (const property in obj) {
      if (fun(obj[property])) {
        return property;
      }
    }
    return undefined;
  },
  drop(arr, num = 1) {
    const newArr = arr.slice(num);
    /*for (num; num < arr.length; num++) {
      newArr.push(arr[num]);
    }*/
    return newArr;
  },
  drop(arr, num = 1) {
    const newArr = arr.slice(num);
    /*for (num; num < arr.length; num++) {
      newArr.push(arr[num]);
    }*/
    return newArr;
  },
  dropWhile(arr, fun) {
    const n = arr.length;
    const j = arr.findIndex((value, index, array) => {
      return fun(value, index, array) == false;
    })
    /*let j = 0;
    for (let i = 0; i < n; i++) {
      if (fun(arr[i], i, arr)) {
        j++;
      } else {
        break;
      }
    }*/
    const newArr = this.drop(arr, j);
    //const newArr = arr.slice(j);
    return newArr;
  },
  chunk(arr, size = 1) {
    const newArr = [], n = arr.length;
    for (let i = 0; i < n; i = i + size) {
      const chunk = arr.slice(i, i + size);
      newArr.push(chunk);
    }
    /*let count = 0;
    for (const item of arr) {
      if (count < size) {
        chunk.push(item)
        count++;
      } else {
        newArr.push(chunk);
        chunk = [];
        chunk.push(item);
        count = 1;
      }
    }
    newArr.push(chunk);*/
    return newArr;
  }


  

}




module.exports = _;
