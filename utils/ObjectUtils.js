export function mergeObjs(obj1, obj2) {
  const merged = {};
  let keys1 = Object.keys(obj1);
  keys1.forEach((k1) => {
    merged[k1] = obj2[k1] || obj1[k1]; // replace values from 2nd object, if any
  });
  Object.keys(obj2).forEach((k2) => {
    if (!keys1.includes(k2)) merged[k2] = obj2[k2]; // add additional properties from second object, if any
  });
  return merged;
}
