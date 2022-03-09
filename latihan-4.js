class Human {
  constructor() {
    this._legs = 2;
    this._name = "noname";
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

class Programmer extends Human {
  constructor(level) {
    super();
    this._level = this.generatorGrade(level);
  }

  generatorGrade(value) {
    switch (value) {
      case 1:
        return "junior level";
      case 2:
        return "middle level";
      case 3:
        return "senior level";
    }
  }

  get level() {
    return this._level;
  }
}

// jawab
// ngambil class programmer kemduian masukan level nya
var programmer1 = new Programmer(1);
programmer1.name = "Mohamad Nurizki";

console.log(programmer1.name);
console.log(programmer1.level);
