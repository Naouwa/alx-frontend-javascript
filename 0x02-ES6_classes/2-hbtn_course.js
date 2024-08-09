export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('Name must be a String!');
    if (typeof length !== 'number') throw new TypeError('Length must be a Number!');
    if ( !Array.isArray(students)) throw new TypeError('Students must be an Array!');
  
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(Name) {
    if (typeof Name !== 'string') throw new typeError('Name must be a string');
    this._name = Name;
  }

  get length() {
    return this._length;
  }

  set length(Length) {
    if (typeof Length !== 'number') throw new TypeError('Length must be a number');
    this._length = Length;
  }

  get students() {
    return this._students;
  }

  set students(Students) {
    if (!Array.isArray(Students)) throw new TypeError('Studens must be an array');
    this._students = Students;
  }
}
