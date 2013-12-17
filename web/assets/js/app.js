
window.App = Ember.Application.create();

window.App.Router.map(function() {
    this.route("about", {path: "/about"});
    this.route("references", {path: "/references"});
    this.route("contact", {path: "/contact"});
});

window.App.ApplicationController = Ember.Controller.extend({
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
    routeChanged: function() {
        this.updateLinks(this.get('currentPath'));
    }.observes('currentPath')
});

App.IndexRoute = Ember.Route.extend({
    beforeModel: function() {
        this.transitionTo('about');
    }
});

App.AboutRoute = Ember.Route.extend({
    setupController: function(controller) {
    }
});