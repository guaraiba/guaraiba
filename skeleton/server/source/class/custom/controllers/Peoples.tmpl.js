qx.Class.define("${Namespace}.controllers.Peoples", {
    extend: guaraiba.controllers.RestModelController,

    /**
     * @param request {guaraiba.Request}
     * @param response {guaraiba.Response}
     * @param params {Object?} Params hash.
     */
    construct: function (request, response, params) {
        this.base(arguments, request, response, params);
        this.setRecordClass(${Namespace}.models.People);
        this.setAcceptFilters(true);

        // Add action hooks.
        //this.beforeAll('requireAuth');
    }
});