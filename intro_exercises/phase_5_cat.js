function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() { return `${this.owner} loves ${this.name}`}

Cat.prototype.cuteStatement = function() { return `Everyone loves ${this.name}!`}

Cat.prototype.meow = function() { return 'meow' }

let c1 = new Cat('kitty', 'phil')

c1.meow = function() { return 'woof' }

let c2 = new Cat('lion', 'daniel')

