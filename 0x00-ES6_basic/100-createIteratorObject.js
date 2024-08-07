export default function createIteratorObject(report) {
  const employeesIterator = [];

  for (const department in report.allEmployees) {
    if (department in report.allEmployees) {
      employeesIterator.push(...report.allEmployees[department]);
    }
  }

  return employeesIterator[Symbol.iterator](); // Return an iterator
}
