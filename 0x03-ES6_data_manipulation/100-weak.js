// 1. Create and export the WeakMap instance
export const weakMap = new WeakMap();

// 2. Create and export the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the WeakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Get the current count from the WeakMap
  const currentCount = weakMap.get(endpoint);

  // Increment the count
  const newCount = currentCount + 1;
  weakMap.set(endpoint, newCount);

  // Check if the count is greater than or equal to 5
  if (newCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
