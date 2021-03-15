const requestPromiseNative = require('request-promise-native');

test ("testing profiles end points ", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/profile/',
            json: true
        })
        expect(body).toHaveProperty('status', 'success');
        expect(body).toHaveProperty('message');
    }
)

test ("testing profile end points ", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/profile/76561198050043666',
            json: true
        })
        expect(body).toHaveProperty('status', 'success');
        expect(body.message).toHaveProperty('steamId');
        expect(typeof body.message.steamId).toBe('string')
    }
)

test ("testing profiles /short end points ", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/profile/76561198822195351/short',
            json: true
        })
        expect(body).toHaveProperty('status', 'success');
        expect(body).toHaveProperty('message');
        expect(body.message).toHaveProperty('steamId',);
        expect(typeof body.message.steamId).toBe('string')
        
        expect(body.message).toHaveProperty('totalExperience');
        expect(typeof body.message.totalExperience).toBe('number');
        expect(body.message.totalExperience >= 0).toBe(true);

        expect(body.message).toHaveProperty('playerLevel');
        expect(typeof body.message.playerLevel).toBe('number');
        expect(body.message.playerLevel >=0 ).toBe(true)

        expect(body.message).toHaveProperty('prestigeLevel');
        expect(typeof body.message.prestigeLevel).toBe('number');
        expect(body.message.prestigeLevel >=0).toBe(true);

        expect(body.message).toHaveProperty('silverAmount');
        expect(typeof body.message.silverAmount).toBe('number');
        expect(body.message.silverAmount >=0).toBe(true);

        expect(body.message).toHaveProperty('goldAmount');
        expect(typeof body.message.goldAmount).toBe('number');
        expect(body.message.silverAmount >=0).toBe(true)

        expect(body.message).toHaveProperty('suppliesAmount');
        expect(typeof body.message.suppliesAmount).toBe('number');
        expect(body.message.suppliesAmount >=0).toBe(true);

        expect(body.message).toHaveProperty('factionMembership');
        expect(typeof body.message.factionMembership).toBe('number');
        expect(body.message.factionMembership >=0).toBe(true)
    }
)