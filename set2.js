const ninja = ['kuma', 'hattori', 'yagyu'];
const samurai = ['oda', 'hattori', 'tomoe'];

const warriors = new Set([...ninja, ...samurai]);

console.log(warriors);

for (let warrior of warriors) {
  console.log(warrior);
}
