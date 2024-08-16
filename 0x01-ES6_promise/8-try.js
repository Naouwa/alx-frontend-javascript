import divideFunction from './8-try';

try {
  console.log(divideFunction(10, 2));  // Should log: 5
  console.log(divideFunction(10, 0));  // Should throw an error
} catch (error) {
  console.error(error.message);  // Logs: cannot divide by 0
}
