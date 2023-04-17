// COLLABORATORS Ludjy, Amaury, Malik
const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
// const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname
  const params = querystring.parse(url.parse(req.url).query)
  console.log(page)
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)
      res.end()
    })
  }
  else if (page == '/api') {
    if('pointSystem' in params){
      if((params['pointSystem'] >= 0 && params['pointSystem'] < 3)){
        res.writeHead(200, {'Content-Type': 'application/json'})
        const objToJson = {
          name: "Righteous Contender",
          song: "Triumph"
        }
        res.end(JSON.stringify(objToJson))
      }
      else if((params['pointSystem'] >= 4 && params['pointSystem'] < 6)){
        res.writeHead(200, {'Content-Type': 'application/json'})
        const objToJson = {
          name: "Ol' Funk Monk",
          song: "Protect Ya Neck"
        }
        res.end(JSON.stringify(objToJson))
      }
      else if((params['pointSystem'] >= 7 && params['pointSystem'] < 9)){
        res.writeHead(200, {'Content-Type': 'application/json'})
        const objToJson = {
          name: "Teeq the Freak",
          song: "Drunk Tongue"
        }
        res.end(JSON.stringify(objToJson))
      }
      else if((params['pointSystem'] >= 10 && params['pointSystem'] < 12)){
        res.writeHead(200, {'Content-Type': 'application/json'})
        const objToJson = {
          name: "Yakazuya",
          song: "Duck Season"
        }
        res.end(JSON.stringify(objToJson))
      }
      else if((params['pointSystem'] >= 13 && params['pointSystem'] < 15)){
        res.writeHead(200, {'Content-Type': 'application/json'})
        const objToJson = {
          name: "Shi Shea",
          song: "Careful",
        }
        res.end(JSON.stringify(objToJson))
      }
    }
  }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data)
      res.end()
    })
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'})
      res.write(data)
      res.end()
    })
  }else{
    // figlet('404!!', function(err, data) {
    //   if (err) {
    //       console.log('Something went wrong...')
    //       console.dir(err)
    //       return
    //   }
    //   res.write(data)
    //   res.end()
    // })
  }
})

server.listen(8000)
