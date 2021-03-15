var FindOptionBuilder = function()
{
    this.Options = {};

    this.WithLimit = function (inLimit)
    {
        this.Options.limit = inLimit;
        return this;
    }

    this.WithSkip = function (inSkip)
    {
        this.Options.skip = inSkip;
        return this;
    }

    this.Build = function ()
    {
        return this.Options;
    }
    
}

module.exports = {
    FindOptionBuilder,
    SearchOptions: function() { return new FindOptionBuilder(); },
    TrimMongoDBInternals: function(response) { 
        if(!response)
            throw 'Incorrect query parameters.';

        if(Array.isArray(response))
            [...response].forEach((obj) => {delete obj._id;})
        else
            delete response._id;
    }


}