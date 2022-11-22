/*
Write a function called contains that searches for a value 
in a nested object. It returns true if the object contains that value.
*/

let nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

//let hasIt = contains(nestedObject, 44); // true
//let doesntHaveIt = contains(nestedObject, "foo"); // false

// you will have to create new loop blocks to go through the all nested
// objects, therefore recursion is required

function contains(obj, value) {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      for (const innerKey in obj[key]) {
        console.log(`${innerKey} => ${obj[key][innerKey]}`);
      }
    } else {
      console.log(`${key} => ${obj[key]}`);
    }
  }
}

//console.log(hasIt, doesntHaveIt);
//console.log(nestedObject.data.info.stuff.thing.moreStuff.magicNumber);

//recursion

//let hasIts = containsRec(nestedObject, 44); // true
//let doesntHaveIts = containsRec(nestedObject, "foo"); // false

function containsRec(obj, value) {
  for (key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      return containsRec(obj[key], value);
    } else if (obj[key] === value) {
      return true;
    }
  }
  return false;
}

//console.log(hasIts, doesntHaveIts);

console.log(Object.values(nestedObject))
