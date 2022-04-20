const ninjas = new Set(['kuma', 'hattori', 'yagyu', 'hattori']);

if (ninjas.has('hattori')) console.log('hattori is in set');
if (ninjas.size === 3) console.log('only three ninjas in set');

if (!ninjas.has('yoshi')) console.log('yoshi not yet');
ninjas.add('yoshi');
if (ninjas.has('yoshi')) console.log('yoshi is added');
if (ninjas.size === 4) console.log('four ninjas');

if (ninjas.has('kuma')) console.log('kuma is already in');
ninjas.add('kuma');
if (ninjas.size === 4) console.log('adding kuma no effect');

console.log(ninjas);

for (let ninja of ninjas) {
  if (ninja !== null) console.log(ninja);
}
