module.exports = {
    /**
     * Fills koa context with object returnerd from passed function
     * If there is a need to return an error.
     * Just throw anything, response will be automatically set for you to: 
     *  {
     *      status: 'error',
     *      message: 'An error has occured.'
     *  }
     * @param ctx koa context to fill
     * @param inFunction function that will be called to fill the context
     * @param params parameters needed by inFunction to be called 
     */
    GuardExecution: async function(ctx, inFunction, ...params) 
    { 
        if(typeof inFunction !== typeof(Function))
            throw 'bad parameter';

        try{
            Out = await inFunction(...params);
            ctx.body = this.CreateSuccessResponse(Out);
        } catch(err) {
            ctx.body = this.CreateFailureResponse(null);
        }
    },

    /**
     * Unified way to create positive responses from server used in @GuardedExecution.
     */
    CreateSuccessResponse: function(inMsg) {
        return {
            status: 'success',
            message: inMsg
        }
    },

    
    /**
     * Unified way to create negative responses from server used in @GuardedExecution.
     */
    CreateFailureResponse: function(inMsg) {
        return {
            status: 'error',
            message: inMsg ? inMsg : 'An error has occured.'
        }
    }

    //RaiseError: function(inMsg)
}