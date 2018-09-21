module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximun()}
o) 元素数量 = ${sequence.number()}
o) 平均值 = ${sequence.average()}`); 
};

class Sequence {
  constructor(input) {
    // Write your code here
    this.list = input
    this.size = this.list.length
    this.list.sort(function(a,b){return a-b;})

    var sum = 0;
    for (var i = 0;i<this.size;i++) {
      sum += this.list[i]
    }
    this.sum = sum

    this.avg = (this.sum/this.size).toFixed(2)
    //console.log(this.list)
  }

  minimum() {
    // Write your code here
    
    return this.list[0]
  }

  maximun() {
    return this.list[this.size - 1]
  }

  number() {
    return this.size
  }

  average() {
    return this.avg
  }
  // Write your code here
}
