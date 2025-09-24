function bouncer(arr) {
  return arr.filter(Boolean);
};

bouncer([7, "ate", "", false, 9]); // should return [7, "ate", 9].
console.log(bouncer([7, "ate", "", false, 9])); // Output: [7, "ate", 9].
bouncer(["a", "b", "c"]); // should return ["a", "b", "c"].
console.log(bouncer(["a", "b", "c"])); // Output: ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]); // should return [].
console.log(bouncer([false, null, 0, NaN, undefined, ""])); // Output: [].
bouncer([1, null, NaN, 2, undefined]); // should return [1, 2].
console.log(bouncer([1, null, NaN, 2, undefined])); // Output: [1, 2].
bouncer([null, NaN, 1, 2, undefined]); // should return [1, 2].
console.log(bouncer([null, NaN, 1, 2, undefined])); // Output: [1, 2].