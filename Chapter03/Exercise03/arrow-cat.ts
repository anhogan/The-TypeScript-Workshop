const deconstructObjects = (objects: string[]) => {
  if (objects.length === 0) return '';
  if (objects.length === 1) return objects[0];

  let objectString = '';

  for (let i = 0; i < objects.length; i++) {
    if (i === objects.length - 1) {
      objectString += `and ${objects[i]}.`
    } else {
      objectString += `${objects[i]}, `;
    }
  }

  return objectString;
};

export const sentence = (
  subject: string,
  verb: string,
  ...objects: string[]
): string => {
  const capitalized = `${subject[0].toUpperCase()}${subject.slice(1).toLowerCase()}`;

  return `${capitalized} ${verb} ${deconstructObjects(objects)}`;
};

console.log(sentence('the CAT', 'ate', 'apples', 'cheese', 'pancakes'));
console.log(sentence('the cat', 'slept', 'all day'));
console.log(sentence('the cat', 'sneezed'));
