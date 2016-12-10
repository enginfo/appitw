define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
            router.map([
                {route: '', title:'Welcome', moduleId: 'viewmodels/welcome', nav: true, menu : 'Home' },
                {route: 'directors', moduleId: 'viewmodels/directors', nav: true, menu: 'Directors'},
		{route: 'actors', moduleId: 'viewmodels/actors', nav: true, menu: 'Actors'},
	        {route: 'movies', moduleId: 'viewmodels/movies', nav: true, menu: 'Movies'},
	        {route: 'genres', moduleId: 'viewmodels/genres', nav: true, menu: 'Genres'},
               	{route: 'languages', moduleId: 'viewmodels/languages', nav: true, menu: 'Languages'},
               	{route: 'actordetails/:id', moduleId: 'viewmodels/actordetails', nav: false},
                {route: 'moviedetails/:id', moduleId: 'viewmodels/moviedetails', nav: false},
                {route: 'directordetails/:id', moduleId: 'viewmodels/directordetails', nav: false},
                {route: 'languagedetails/:id', moduleId: 'viewmodels/languagedetails', nav: false},
                {route: 'countrydetails/:id', moduleId: 'viewmodels/countrydetails', nav: false},
                {route: 'genredetails/:id', moduleId: 'viewmodels/genredetails', nav: false}
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});
