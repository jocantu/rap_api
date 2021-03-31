const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers = {
  '21 savage':{
    age: 30,
    birthName: 'Joel Cantu',
    birthLocation: 'Torreón, México'
  },
  'cartel de santa':{
    age: 45,
    birthName: 'Hecot Montaño',
    birthLocation: 'Guadalajara, México'
  },
  'el gran silencio':{
    age: 52,
    birthName: 'Carlos Lozada',
    birthLocation: 'CDMX, México'
  },
  'unknown':{
    age: 999,
    birthName: 'unknown',
    birthLocation: 'unknown'
  }
}

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/rappers/:rapperName', (request, response) => {
  const rapName = request.params.rapperName.toLowerCase()
  console.log(rapName)
  if(rappers[rapName]){
    response.json(rappers[rapName])
  } else {
    response.json(rappers['unknown'])
  }
})

app.listen(process.env.PORT || PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})
