const ninjaIslandMap = new Map();

const ninja1 = { name: 'Yoshi' };
const ninja2 = { name: 'Hattori' };
const ninja3 = { name: 'Kuma' };

ninjaIslandMap.set(ninja1, { homeIsland: 'Honshu' });
ninjaIslandMap.set(ninja2, { homeIsland: 'Hokkaido' });

if (ninjaIslandMap.get(ninja1).homeIsland === 'Honshu')
  console.log('first mapping works');

if (ninjaIslandMap.get(ninja2).homeIsland === 'Hokkaido')
  console.log('second mapping works');

if (ninjaIslandMap.get(ninja3) === undefined)
  console.log('There is no mapping');

if (ninjaIslandMap.size === 2) console.log('created two mappings');

if (ninjaIslandMap.has(ninja1) && ninjaIslandMap.has(ninja2))
  console.log('have mappings for the first two ninjas');

if (!ninjaIslandMap.has(ninja3)) console.log('No third ninja');

ninjaIslandMap.delete(ninja1);

if (!ninjaIslandMap.has(ninja1) && ninjaIslandMap.size === 1)
  console.log('no first ninja mapping anymore!');

ninjaIslandMap.clear();

if (ninjaIslandMap.size === 0) console.log('all mappings cleared');
