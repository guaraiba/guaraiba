/**
 * Singleton instance class for define any route for application action.
 */
qx.Class.define("${Namespace}.Router", {
    type: 'singleton',
    extend: guaraiba.routes.Router,

    members: {
        /**
         * Initialise the routes for any action.
         */
        init: function () {
            this.get('/').to(${Namespace}.controllers.Demos, {format: '.html'});
            this.get('/demos/:action(.:format)').to(${Namespace}.controllers.Demos, ':action');

            // BEGIN REGISTER RESOURCE ROUTERS. DON'T REMOVE OR CHANGE THIS COMMENTARY.
            this.resource(${Namespace}.controllers.Peoples);
            // END REGISTER RESOURCE ROUTERS. DON'T REMOVE OR CHANGE THIS COMMENTARY.
        }
    }
});