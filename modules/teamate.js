export { Teamate }; 
export { Developer }; 

class Teamate {
  constructor(name, skill) {
    this.name = name;
    this.skill = skill; 
  }
}

class Developer extends Teamate {
  says() {
    return "i can write code!";
  }
}

