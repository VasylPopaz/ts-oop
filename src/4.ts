class Key {
  private signature: number = Number((Math.random() * 100).toFixed());

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: true | false = false;
  private tenants: object[] = [];

  constructor(private key: Key) {}

  comeIn(person: Person) {
    if (this.door) this.tenants.push(person);
  }

  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  public openDoor(key: Key): void {
    if (key === person.getKey()) this.door = true;
  }
}
const key = new Key();
console.log(key);
const person = new Person(key);
const house = new MyHouse(key);

console.log(house);
house.openDoor(person.getKey());

house.comeIn(person);
console.log(house);

export {};
