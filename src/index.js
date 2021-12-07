require('./db')
const {server, app} = require('./server');

server.listen(app.get('port'), ()=>{
    console.log("Server running on port: "+app.get('port'))
})