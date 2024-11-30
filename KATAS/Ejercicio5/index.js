// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array  con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]

const filtered = ages.filter((age) => age > 18)
console.log(filtered)
// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
//! const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const par = ages.filter((age) => age % 2 == 0)
console.log(par)
// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const LoL = streamers.filter(
  (streamer) => streamer.gameMorePlayed == 'League of Legends'
)

console.log(LoL)

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.
/* const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];*/

const letterU = streamers.filter((streamer) => streamer.name.includes('u'))

console.log(letterU)

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación.Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

const newArray = streamers.filter((streamer) => {
  if (streamer.gameMorePlayed.includes('Legends')) {
    if (streamer.age > 35) {
      streamer.gameMorePlayed = streamer.gameMorePlayed.toLocaleUpperCase()
    }
    return true
  }
  return false
})

console.log(newArray)
