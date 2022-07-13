
const { default: axios } = require('axios')
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
app.use(cors())

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    let userCity = req.body.userCity;
    axios.get(`https://api.yelp.com/v3/businesses/search?location=${userCity}&categories=bars`, {
      headers:{
        'Authorization': 'Bearer E9sq0Y7E8_DboWKY5PkIjLMcx1-sJa5YAkrg4W3GnoHBTNZjxErdzN-RD0luGzbZXvVTYgixAcyUcR5bqydER0sPP0rVMHlrlJV99GqV3g_UlqsORGPE67cvL_fKYnYx'
      }
    })
    .then(response => {
      console.log('yelp data', response.data);
      res.status(201).json(response.data);
    }).catch(error => {
      console.log('yelp error', error);
      res.status(500).json(error);
    })

  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


