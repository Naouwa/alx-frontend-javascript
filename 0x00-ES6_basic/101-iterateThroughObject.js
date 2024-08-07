export default function iterateThroughObject(reportWithIterator) {
  let employeeString = '';
  let isFirst = true;

  for (const employee of reportWithIterator) {
    if (!isFirst) {
      employeeString += ' | ';
    }
    employeeString += employee;
    isFirst = false;
  }

  return employeeString;
}
