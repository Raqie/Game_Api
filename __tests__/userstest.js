const requestPromiseNative = require('request-promise-native');

test ("testing users end points ", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/users',
            json: true
        })
        expect(body).toHaveProperty('status','success');
        expect(body).toHaveProperty('message');
        expect(body.message).toBeInstanceOf(Array);
    }
)

test ("testing end points for user  ", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/users/76561198418464283',
            json: true
        })
        expect(body).toHaveProperty('status','success');
        expect(body).toHaveProperty('message');
        expect(body.message).toHaveProperty('steamId')
        expect(typeof body.message.steamId).toBe('string')
        expect(body.message).toHaveProperty('matchSummary')
        expect(body.message.matchSummary).toHaveProperty('earnings')
        expect(body.message.matchSummary).toHaveProperty('performance')
        expect(body.message).toHaveProperty('playerFactionHistoryData')
    }
)