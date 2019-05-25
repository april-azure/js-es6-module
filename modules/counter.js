class Counter {
  constructor(val) {
    this.val = val;
  }

  increment() {
    this.val ++;
  }

  decrement() {
    this.val --; 
  }

  getCount() {
    return this.val; 
  }
}

export default Counter; 
