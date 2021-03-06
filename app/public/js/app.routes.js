var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider,$locationProvider){

    $routeProvider

    .when('/',{
        templateUrl:'partials/home.html',
    })

    .when('/Person/add',{
        templateUrl:'partials/Person/addPerson.html',
        controller: 'PersonCtrl',
    })

    .when('/Person/details/:id',{
        templateUrl:'partials/Person/details_Person.html',
        controller : 'PersonCtrl',
    })
    .when('/Person',{
        templateUrl:'partials/Person/allPerson.html',
        controller :'PersonCtrl',
    })
    .when('/Person/notes/:id',{
        templateUrl:'partials/Person/Notes/notes.html',
        controller : 'NotesCtrl',
    })
    .when('/Person/notes/details/:idUser/:idNote',{
        templateUrl:'partials/Person/Notes/detailsNote.html',
        controller : 'NotesCtrl',
    })
    .when('/Person/notes/newNote/:id',{
        templateUrl:'partials/Person/Notes/newNote.html',
        controller : 'NotesCtrl',
    })

    .when('/addSchoolandClass',{
        templateUrl:'partials/addSchoolandClass.html',
        controller :'SchoolCtrl',
    })
    .when('/Schools',{
        templateUrl:'partials/School/all_Schools.html',
        controller : 'SchoolCtrl',
    })
    .when('/Schools/edit/:id',{
        templateUrl:'partials/School/edit_Schools.html',
        controller : 'SchoolCtrl',
    })

    .when('/Schools/details/:id',{
        templateUrl:'partials/School/details_Schools.html',
        controller : 'SchoolCtrl',
    })


    .when('/Class/edit/:id',{
        templateUrl:'partials/SchoolClass/edit_SchoolClass.html',
        controller : 'ClassCtrl',
    })
    .when('/Class/details/:id',{
        templateUrl:'partials/SchoolClass/details_SchoolClass.html',
        controller : 'ClassCtrl',
    })


    .when('/HealthCenter',{
        templateUrl:'partials/HealthCenter/HC.html',
        controller : 'HealthCenter',
    })
    .when('/HealthCenter/details/:id',{
        templateUrl:'partials/HealthCenter/details_HC.html',
        controller : 'HealthCenter',
    })


    .otherwise({redirectTo: '/'});

    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    // });

}).run(function(){

    
})








