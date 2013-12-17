
window.App = Ember.Application.create();

App.Router.map(function() {
    this.route("about", {path: "/about"});
    this.route("references", {path: "/references"});
    this.route("contact", {path: "/contact"});
    this.route("imprint", {path: "/imprint"});
});

App.ApplicationController = Ember.Controller.extend({
    updateLinks: function(path) {
        $('.nav-link').livequery(function() {
            $(this).removeClass('active-link');
        });
        $('.link-text').livequery(function() {
            $(this).removeClass('active-text');
        });
        $('#al-' + path).livequery(function() {
            $(this).addClass('active-link');
        });
        $('#at-' + path).livequery(function() {
            $(this).addClass('active-text');
        });
    },
    init: function() {
        $('.nav-area').livequery(function() {
            var w = $(window).innerHeight();
            var a = $(this).innerHeight() - 30;

            var e = (w - a) / 2;
            
            console.log(e);
            
            $(this).css('margin-top', e + 'px');
        });
    },
    routeChanged: function() {
        this.updateLinks(this.get('currentPath'));
    }.observes('currentPath'),
    appName: 'Weber-Elektronik'
});

App.IndexRoute = Ember.Route.extend({
    beforeModel: function() {
        this.transitionTo('about');
    }
});