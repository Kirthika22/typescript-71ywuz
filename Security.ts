//class
export class Security {
  //properties
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  //behaviour
  idCheck() {
    console.log('id card is checked by', this.name);
  }
  toSayRoute() {
    console.log('the route is said by', this.name);
  }
}
