const animaisDoZoologico = new Set()

const adicionarAnimalNoZoologico = (animal) => animaisDoZoologico.add(animal)

const removerAnimalNoZoologico = (animal) => animaisDoZoologico.delete(animal) //achei ofensivo

const listarAnimaisDoZoologico = () => animaisDoZoologico.forEach(animal => console.log(animal)) 

const possuoAnimalNoZoologico = (animal) => animaisDoZoologico.has(animal) 
    ? console.log('Esta no zoo') : console.log('Nãoo esta no zoo')

adicionarAnimalNoZoologico('Anta')
adicionarAnimalNoZoologico('Lesma')
adicionarAnimalNoZoologico('Vaca')
adicionarAnimalNoZoologico('Leão')
adicionarAnimalNoZoologico('Jaca')
adicionarAnimalNoZoologico('Dehzito')
removerAnimalNoZoologico('Lesma') // não queriamos lesmas no zoológico
listarAnimaisDoZoologico()
possuoAnimalNoZoologico('leao')