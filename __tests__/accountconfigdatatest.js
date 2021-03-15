const requestPromiseNative = require('request-promise-native');

test ("testing AccountConfigData end points ", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/accountconfigdata',
            json: true,
        })
        expect(body).toHaveProperty('status','success');
        expect(body).toHaveProperty('message');
        expect(body.message).toBeInstanceOf(Array);
    }
)

test ("testing AccountConfigData by user id end points ", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/accountconfigdata/76561198050043666',
            json: true
        })
        expect(body).toHaveProperty('status','success');
        expect(body).toHaveProperty('message');
        expect(body.message).toHaveProperty('steamId');
        expect(typeof body.message.steamId).toBe('string')
    }
)