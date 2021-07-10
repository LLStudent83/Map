
export default class ErrorRepository {
  constructor(errArr) {
    this.errMap = new Map(errArr);
  }

  translate(code) {
    if (this.errMap.has(code)) {
      console.log(this.errMap.get(code));
      return this.errMap.get(code);
    }
    return 'Unknown error';
  }
}

// [[1, "Это не функция"], [2, "Это не объект"]]
