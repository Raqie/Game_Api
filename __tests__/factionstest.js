const requestPromiseNative = require('request-promise-native');

test ("testing factions end points ", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/factions',
            json: true
        })
        expect(body).toHaveProperty('status','success');
        expect(body).toHaveProperty('message');
        expect(body.message).toBeInstanceOf(Array);
        expect(Array.isArray(body.message)).toBe(true)
    }
)