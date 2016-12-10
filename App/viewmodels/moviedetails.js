define(['plugins/router', 'durandal/app', 'knockout'], function (router, app, ko) {

    var ViewModel = function () {
	console.log('ViewModel initiated...');
        var self = this;
	var moviesUri = 'http://192.168.160.39/api/Movies/';
        self.movie_info = ko.observableArray();
      	self.id = ko.observable();

	var url = location.hash;
        self.id(url.split("/").pop());
        console.log(self.id());

        function ajaxHelper(uri, method, data) {
            return $.ajax({
                type: method,
                url: uri,
                dataType: 'json',
                contentType: 'application/json',
                data: data ? JSON.stringify(data) : null,
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("AJAX Call[" + uri + "] Fail...");
                    self.error(errorThrown);
                }
            });
        }
       getAllInfo = function () {
            console.log('CALL: getAllInfo...');
            ajaxHelper(moviesUri+self.id(), 'GET').done(function (data) {
                self.movie_info(data);
            });
        };

        getAllInfo();

    };

    return ViewModel;

});
