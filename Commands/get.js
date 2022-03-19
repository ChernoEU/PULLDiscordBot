const axios = require('axios')

module.exports = {
    category: 'API test',
    description: 'test get request',
    
    Permissions: ['ADMINISTRATOR'],

    maxArgs: 1,
    expectedArgs: '<id>',
    expectedArgsTypes: ['NUMBER'],

    slash: 'both',

    callback: async ({ args }) => {
        let uri = 'https://jsonplaceholder.typicode.com/posts'

        if (args.length) {
            uri += `/${args[0]}`
        }

        const { data } = await axios.get(uri)
        console.log(data)   
    },
} 
