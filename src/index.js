require('./services/mongo')

const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const init = async()=>{
    const server  = Hapi.Server({
        port: 3000,
        host: 'localhost'
    })

    await server.start()

    server.route(routes)

    console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err)=>{
    console.log(err)
    process.exit(1)
})

init()