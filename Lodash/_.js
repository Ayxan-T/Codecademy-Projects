_ = {
  clamp(num, low, up) {
    const  temp = Math.max(num, low);
    return Math.min(temp, up);
  }
}



module.exports = _;
