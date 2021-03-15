const requestPromiseNative = require('request-promise-native');

test ("testing matches end points ", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/matches',
            json: true
        })
        expect(body).toHaveProperty('status','success');
        expect(body).toHaveProperty('message');
        expect(body.message).toBeInstanceOf(Array);
    }
)

test("testing arrays of server id", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/matches/serverid/90130324019588098',
            json: true
        })
        expect(body).toHaveProperty('status', 'success')
        expect(body).toHaveProperty('message')
        expect(body.message).toBeInstanceOf(Object)
        expect(Array.isArray(body.message)).toBe(false)
        expect(body.message).toHaveProperty('serverId')
        expect(typeof body.message.serverId).toBe('string')
        expect(body.message.serverId = String).toBe(String)
    }
)

test('checking steam ids', async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/matches/player/76561198822234381',
            json: true
        })
        expect(body).toHaveProperty('status','success')
        expect(body).toHaveProperty('message')
        expect(body.message).toHaveProperty('serverId')
        expect(typeof body.message.serverId).toBe('string')
        expect(body.message).toHaveProperty('playersSummarysArray')
        expect(body.message.playersSummarysArray).toBeInstanceOf(Array)
    }
)

test('checking id/ip', async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/matches/76561198418464283/90130097870760962',
            json: true
        })
        expect(body).toHaveProperty('status', 'success')
        expect(body).toHaveProperty('message')
        expect(body.message).toHaveProperty('serverId')
        expect(typeof body.message.serverId).toBe('string')
        expect(body.message).toHaveProperty('playersSummarysArray')
        expect(body.message.playersSummarysArray).toBeInstanceOf(Array)
        for (const summary of body.message.playersSummarysArray) 
        {
            expect(summary).toHaveProperty('playerSteamId')
        }
    }
)