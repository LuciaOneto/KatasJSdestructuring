//3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]
const pointList2 = [...pointsList]
console.log(pointList2)

//3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toy2 = { ...toy }
console.log(toy2)

//3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
//! const pointsList = [32, 54, 21, 64, 75, 43]
const pointsList3 = [54, 87, 99, 65, 32]

const mixPointList = [...pointsList, ...pointsList3]
console.log(mixPointList)

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
//! const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }

const mixToy = { ...toy, ...toyUpdate }
console.log('Todos los juguetes juntos', mixToy)

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']

const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)]

console.log(colorsCopy)
