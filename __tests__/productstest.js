const requestPromiseNative = require('request-promise-native');

test ("testing products end points ", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/products',
            json: true
        })
        expect(body).toHaveProperty('status','success');
        expect(body).toHaveProperty('message');
        expect(body.message).toBeInstanceOf(Array);
    }
)

test ("testing products id end points ", async () => 
    {
        const body = await requestPromiseNative
        ({
            url: 'http://localhost:9090/products/63',
            json: true
        })
        expect(body).toHaveProperty('status', 'success')
        expect(body).toHaveProperty('message')
        expect(body.message).toHaveProperty('id')
        expect(typeof body.message.id).toBe('number')
    }
)