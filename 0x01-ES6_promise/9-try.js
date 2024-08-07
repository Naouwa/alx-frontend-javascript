export default function guardrail(mathFunction) {
  const queue = [];

  try {
    // Execute the function and push the result
    queue.push(mathFunction());
  } catch (err) {
    // Push the error message if an error is thrown
    queue.push(`Error: ${err.message}`);
  } finally {
    // Always add the processing message
    queue.push("Guardrail was processed");
  }

  return queue;
}
