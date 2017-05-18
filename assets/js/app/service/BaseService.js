var BaseService = function($http, $rootScope)
{
    $rootScope.loading = true;
    this.get = function(url)
    {
        return new Promise(function(resolve, reject){
            $http.get(url).then(function(data)
            {
                resolve(data.data);
                $rootScope.loading = false;
            }).catch(reject);
        });
    };
    this.post = function(url, data)
    {
        return $http.post(url, data);
    }
    this.put = function(url, data)
    {
        return $http.put(url, data);
    }

};
