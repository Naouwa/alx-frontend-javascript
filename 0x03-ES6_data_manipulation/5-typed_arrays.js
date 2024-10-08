export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);

  // check if position outside range
  if (position >= length) throw new Error('Position outside range');
  // set the new value in the desired position
  dataView.setInt8(position, value);

  return dataView;
}
