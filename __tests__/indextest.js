const requestPromiseNative = require('request-promise-native');

test ("testing index end points ", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/',
            json: true
        })
        expect(body).toHaveProperty('status','success');
        expect(body).toHaveProperty('message', 'Api server is up.');
    }
)