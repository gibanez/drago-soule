var ClientService = function(BaseService)
{
    var url = '/client';
    this.save = function(client)
    {
        console.info(client);

        if(client.id)
        {
            return BaseService.put(url + '/' + client.id, client);
        }
        else
        {
            return BaseService.post(url, client);
        }
        //
    }

    this.getAll = function()
    {
        return BaseService.get(url);
    }
}
