// Problem 1
function deepEqual(objA, objB) {
  if (objA === objB) return true;
  if (objA === null || objB === null) return false;
  if (typeof objA !== "object" || typeof objB !== "object") return false;

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i];
    if (!keysB.includes(key)) return false;
    if (!deepEqual(objA[key], objB[key])) return false;
  }

  return true;

}
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } }));
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 }));   


// Problem 2

function diffObjects(oldObj, newObj) {
  const result = {
    added: {},
    removed: {},
    changed: {}
  };

  const oldKeys = Object.keys(oldObj);
  const newKeys = Object.keys(newObj);

  for (let i = 0; i < newKeys.length; i++) {
    const key = newKeys[i];

    if (!oldKeys.includes(key)) {
      result.added[key] = newObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      result.changed[key] = {
        from: oldObj[key],
        to: newObj[key]
      };
    }
  }

  for (let i = 0; i < oldKeys.length; i++) {
    const key = oldKeys[i];

    if (!newKeys.includes(key)) {
      result.removed[key] = oldObj[key];
    }
  }

  return result;
}
console.log(diffObjects(
  { name: 'Setemi', role: 'Engineer', country: 'Jamaica' },
  { name: 'Setemi', role: 'Senior Engineer', city: 'Kingston' }
))
// { added: { city: 'Kingston' }, removed: { country: 'Jamaica' }, changed: { role: { from: 'Engineer', to: 'Senior Engineer' } } }
