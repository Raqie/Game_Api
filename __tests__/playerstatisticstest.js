const requestPromiseNative = require('request-promise-native');

test ("testing playerstatistics end points ", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/playerstatistics/76561198418464283',
            json: true
        })
        expect(body).toHaveProperty('status','success');
        expect(body).toHaveProperty('message');
        expect(body.message).toHaveProperty('steamId')
        expect(typeof body.message.steamId).toBe('string');
    }
)

test("testing general statistics", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/playerstatistics/general/76561198418464283',
            json: true
        })
        expect(body).toHaveProperty('status', 'success')
        expect(body).toHaveProperty('message')
        expect(body.message).toHaveProperty('steamId')
        expect(typeof body.message.steamId).toBe('string')
        expect(body.message).toHaveProperty('generalPlayerStatistics')
        expect(body.message.generalPlayerStatistics).toHaveProperty('kills')
        expect(typeof body.message.generalPlayerStatistics.kills).toBe('number')
    }
)

test("testing weapons statistics", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/playerstatistics/weapons/76561198418464283',
            json: true
        })
        expect(body).toHaveProperty('status', 'success')
        expect(body).toHaveProperty('message')
        expect(body.message).toHaveProperty('steamId')
        expect(typeof body.message.steamId).toBe('string')
        expect(body.message).toHaveProperty('weaponsPlayerStatistics')
        expect(body.message.weaponsPlayerStatistics).toHaveProperty('longestEnemyHit')
        expect(body.message.weaponsPlayerStatistics).toHaveProperty('longestEnemyKill')
    }
)

test("testing gadgets usage by player", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/playerstatistics/gadgets/76561198418464283',
            json: true
        })
        expect(body).toHaveProperty('status', 'success')
        expect(body).toHaveProperty('message')
        expect(body.message).toHaveProperty('steamId')
        expect(typeof body.message.steamId).toBe('string')
        expect(body.message).toHaveProperty('gadgetsPlayerStatistics')
        expect(body.message.gadgetsPlayerStatistics).toHaveProperty('useOfGadget')
    }
)

test("testing strikes usage by player", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/playerstatistics/strikes/76561198418464283',
            json: true
        })
        expect(body).toHaveProperty('status', 'success')
        expect(body).toHaveProperty('message')
        expect(body.message).toHaveProperty('steamId')
        expect(typeof body.message.steamId).toBe('string')
        expect(body.message).toHaveProperty('strikesPlayerStatistics')
        expect(body.message.strikesPlayerStatistics).toHaveProperty('useOfStrike')
    }
)

test("testing squadplay statistics", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/playerstatistics/squad/76561198418464283',
            json: true
        })
        expect(body).toHaveProperty('status', 'success')
        expect(body).toHaveProperty('message')
        expect(body.message).toHaveProperty('steamId')
        expect(typeof body.message.steamId).toBe('string')
        expect(body.message).toHaveProperty('squadplayPlayerStatistics')
    }
)

test("testing warzone player statistics", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/playerstatistics/warzone/76561198418464283',
            json: true
        })
        expect(body).toHaveProperty('status', 'success')
        expect(body).toHaveProperty('message')
        expect(body.message).toHaveProperty('steamId')
        expect(typeof body.message.steamId).toBe('string')
        expect(body.message).toHaveProperty('warzonePlayerStatistics')
    }
)

test("testing recon player statistics", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/playerstatistics/recon/76561198418464283',
            json: true
        })
        expect(body).toHaveProperty('status', 'success')
        expect(body).toHaveProperty('message')
        expect(body.message).toHaveProperty('steamId')
        expect(typeof body.message.steamId).toBe('string')
        expect(body.message).toHaveProperty('reconPlayerStatistics')
    }
)

test("testing teamdeathmatch player statistics", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/playerstatistics/teamdeathmatch/76561198418464283',
            json: true
        })
        expect(body).toHaveProperty('status', 'success')
        expect(body).toHaveProperty('message')
        expect(body.message).toHaveProperty('steamId')
        expect(typeof body.message.steamId).toBe('string')
        expect(body.message).toHaveProperty('teamDeathmatchPlayerStatistics')
    }
)

test("testing breakthrough player statistics", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/playerstatistics/breakthrough/76561198418464283',
            json: true
        })
        expect(body).toHaveProperty('status', 'success')
        expect(body).toHaveProperty('message')
        expect(body.message).toHaveProperty('steamId')
        expect(typeof body.message.steamId).toBe('string')
        expect(body.message).toHaveProperty('breakthroughPlayerStatistics')
    }
)