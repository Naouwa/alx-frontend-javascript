/**
 * Executes the provided math function and handles any errors.
 * 
 * @param {Function} mathFunction - The function to be executed.
 * @returns {Array} An array containing the result of the function or the error message, followed by a processing message.
 */
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    // Execute the function and push the result
    queue.push(mathFunction());
  } catch (err) {
    // Push the error message with "Error: " prefix if an error is thrown
    queue.push(`Error: ${err.message}`);
  } finally {
    // Always add the processing message
    queue.push("Guardrail was processed");
  }

  return queue;
}
