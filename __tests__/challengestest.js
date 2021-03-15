const requestPromiseNative = require('request-promise-native');

test ("testing challenges end points ", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/challenges',
            json: true
        })
        expect(body).toHaveProperty('status','success');
        expect(body).toHaveProperty('message');
        expect(body.message).toBeInstanceOf(Array);
    }
)

test ("testing challenges id end points ", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/challenges/11333',
            json: true
        })
        expect(body).toHaveProperty('status','success')
        expect(body).toHaveProperty('message')
        expect(body.message).toHaveProperty('id')
        expect(typeof body.message.id).toBe('number')
        expect(body.message).toHaveProperty('completed')
        expect(typeof body.message.completed).toBe('boolean')
        expect(body.message).toHaveProperty('displayed')
        expect(typeof body.message.displayed).toBe('boolean')
        expect(body.message).toHaveProperty('prototype')
        expect(typeof body.message.prototype).toBe('number')
        expect(body.message).toHaveProperty('player')
        expect(typeof body.message.player).toBe('string')
        expect(body.message).toHaveProperty('type')
        expect(typeof body.message.type).toBe('string')
        expect(body.message).toHaveProperty('timestamp')
        expect(typeof body.message.timestamp).toBe('number')
    }
)

test("testing player challenges: ", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/challenges/player/76561198050043666',
            json: true
        })
        expect(body).toHaveProperty('status', 'success')
        expect(body).toHaveProperty('message')
        expect(body.message).toHaveProperty('id')
        expect(typeof body.message.id).toBe('number')
        expect(body.message).toHaveProperty('timestamp')
        expect(typeof body.message.timestamp).toBe('number')
        expect(body.message).toHaveProperty('isTopLevel')
        expect(typeof body.message.isTopLevel).toBe('boolean')
        expect(body.message).toHaveProperty('type')
        expect(typeof body.message.type).toBe('string')
        expect(body.message).toHaveProperty('remainingExchanges')
        expect(typeof body.message.remainingExchanges).toBe('number')
        expect(body.message).toHaveProperty('completed')
        expect(typeof body.message.completed).toBe('boolean')
        expect(body.message).toHaveProperty('displayed')
        expect(typeof body.message.displayed).toBe('boolean')
        expect(body.message).toHaveProperty('prototype')
        expect(typeof body.message.prototype).toBe('number')
        expect(body.message).toHaveProperty('player')
        expect(typeof body.message.player).toBe('string')
        expect(body.message).toHaveProperty('subchallenges')
        expect(typeof body.message.subchallenges).toBe('object')
        expect(Array.isArray(body.message)).toBe(false)
    }
)