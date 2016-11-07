/* ************************************************************************

 Copyright:

 License:

 Authors:

 ************************************************************************ */

/**
 * This is the main application class of your custom application "${Name}" server.
 *
 * @asset(*)
 *
 * @ignore(environment)
 * @ignore(process)
 */
qx.Class.define("${Namespace}.Application", {
    extend: guaraiba.Application,

    /**
     * Constructor
     */
    construct: function () {
        this.base(arguments);
        this.setConfiguration(${Namespace}.Configuration.getInstance());
        this.setRouter(${Namespace}.Router.getInstance());
    }
});
