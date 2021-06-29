'use strict';
const uuid = require('uuid').v4;

class Clothes {
  constructor() {
    // initializing tempMemory
    this.tempMemory = [];

  }
//class Methods
  read(id) {
    if (id) {
      return this.tempMemory.find((record) => record.id === id);
    } else {
      return this.tempMemory;
    }
  }

  create(obj) {
    const record = {
      id: uuid(),
      data: obj,
    };
    this.tempMemory.push(record);
    return record;
  }
  update(id, obj) {
    for (let i = 0; i < this.tempMemory.length; i++) {
      if (this.tempMemory[i].id === id) {
        this.tempMemory[i].data = obj;
        return this.tempMemory[i];
      }
    }
  }

  delete(id) {
    this.tempMemory = this.tempMemory.filter((record) => record.id !== id);
  }
}
module.exports = Food;