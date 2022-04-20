const directory = new Map();

directory.set('Yoshi', '010-1111-1111');
directory.set('Kuma', '010-2222-2222');
directory.set('Hiro', '010-3333-3333');

console.log(directory);

for (let item of directory) {
  console.log('item[0]:' + item[0]);
  console.log('item[1]:' + item[1]);
}

for (let key of directory.keys()) {
  console.log('key: ' + key);
  console.log('directory.get(key): ' + directory.get(key));
}

for (let value of directory.values()) {
  console.log('value: ' + value);
}
