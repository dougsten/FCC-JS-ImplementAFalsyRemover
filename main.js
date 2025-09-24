function bouncer(arr) {
  return arr.filter(Boolean);
};

bouncer([7, "ate", "", false, 9]); // should return [7, "ate", 9].
console.log(bouncer([7, "ate", "", false, 9])); // Output: [7, "ate", 9]