const samurai = new Set('Toyotomi', 'Takeda', 'Akiyama', 'Akiyama');

samurai.add('Akiyama');

if (samurai.has('Hattori')) console.log('Hattori is in!');
