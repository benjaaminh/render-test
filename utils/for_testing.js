const reverse = (string) => {
    return string
      .split('')
      .reverse()
      .join('')
  }
  
  const average = (array) => {          
    const reducer = (sum, item) => {        //sum is sum hittills, while item is current value
      return sum + item
    }
  
    return array.length === 0                       //if length===0, then return 0, else reduce
    ? 0
    : array.reduce(reducer, 0) / array.length //0 is initial value
  }
  
  module.exports = {
    reverse,
    average,
  }