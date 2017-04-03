export default class Set {
  constructor(){
    this.storage = []
    this.data = 0
  }

  add(element){

    if(!this.contains(element)){
      this.storage[this.data++] = element
    }
  }

  isEmpty() {
    return this.data === 0
  }

  contains(element) {
    for(let i = 0; i < this.data; i++) {
      if(this.storage[i] === element) {
        return true
      }
    }
    return false
  }

  remove(element) {
    let newArray = []
    let newData = 0
    for(let i = 0; i < this.data; i++){
      if(this.storage[i] !== element){
        newArray[newData++] = this.storage[i]
      }
    }
    this.storage = newArray
    this.data = newData
  }

  forEach(callback) {
    for(let i = 0; i < this.data; i++) {
      this.storage[i] = callback(this.storage[i])
    }
  }

  size() {
    return this.data
  }

  union(set) {
    const tempSet = new Set()
    for(let i = 0; i < this.storage.length; i++){
      tempSet.add(this.storage[i])
    }
    for(let i = 0; i < set.storage.length; i++){
      if(!tempSet.contains(set.storage[i])) {
        tempSet.storage.push(set.storage[i])
      }
    }
    return tempSet
  }

  intersect(set) {
    const tempSet = new Set()
    for(let i = 0; i < this.storage.length; i++) {
      if(set.contains(this.storage[i])) {
        tempSet.add(this.storage[i])
      }
    }
    return tempSet
  }

  difference(set) {
    const tempSet = new Set()
    for(let i = 0; i < this.storage.length; i++){
      if(!set.contains(this.storage[i])){
        tempSet.add(this.storage[i])
      }
    }
    return tempSet
  }

  isSubset(set) {
    for(let i = 0; i < this.data; i++) {
      if(!set.contains(this.storage[i])){
        return false
      }
    }
    return false
  }

  clone() {
    let newData = 0
    let newArray = []
    for(let i = 0; i < this.data; i++){
      newArray[newData++] = this.storage[i]
    }
    return newArray
  }
}