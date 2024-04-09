function slugify(title) {
  const titleNormalized = title.toLowerCase();
  const createArray = titleNormalized.split(' ');

  return createArray.join('-');
}
console.log(slugify('Arrays for begginers'));
console.log(slugify('English for developer'));
console.log(slugify('Ten secrets of JavaScript'));
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));
