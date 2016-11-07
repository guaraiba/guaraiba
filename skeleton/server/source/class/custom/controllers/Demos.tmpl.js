qx.Class.define("${Namespace}.controllers.Demos", {
    extend: guaraiba.Controller,
    include: ${Namespace}.helpers.MDemos,

    members: {

        indexAction: function (request, response, params) {
            var data = this.__prepareData('TEST-001', 'ejs');

            this.respond(data, { engine: 'ejs' });
        },

        d1Action: function (request, response, params) {
            var data = this.__prepareData('TEST-001', 'ejs');

            this.respond(data, { engine: 'ejs' });
        },

        d2Action: function (request, response, params) {
            var data = this.__prepareData('TEST-002', 'jade');

            this.respond(data, { engine: 'jade' });
        },

        d4Action: function (request, response, params) {
            var data = this.__prepareData('TEST-004', 'handlebars');

            this.respond(data, { engine: 'hbs' });
        },

        d5Action: function (request, response, params) {
            var jasperReport = guaraiba.template.engines.JasperReport.getInstance(),
                jdbcSettings = this.getDBSchema().getJdbcSettings();

            this.respond({
                connection: jasperReport.getSqlDataSource(
                    jdbcSettings.driver,
                    jdbcSettings.connectString
                ),
                reportParams: function () {
                    return {
                        TITLE: "GUARAIBA APP DEMO\n TEST-006: JRXML TEMPLATE ENGINE"
                    }
                }
            });
        },

        d6Action: function (request, response, params) {
            var jasperReport = guaraiba.template.engines.JasperReport.getInstance(),
                data = this.__prepareData('TEST-006', 'jasperReport'),
                file = new guaraiba.tmp.File('guaraiba');

            //Save data as json in temporal file.
            file.writeFile(JSON.stringify(data), qx.lang.Function.bind(function (err) {

                // Generate document and send response.
                this.respond({
                    dataSource: jasperReport.getJsonDataSource(file.path, 'items'),
                    reportParams: function () {
                        return {
                            name: 'TEST-006',
                            description: 'Generate document from json data.'
                        }
                    }
                });

                // Remove temporal file.
                file.unlink();
            }, this));
        },

        __prepareData: function (name, engine) {
            var // Get session var requested count.
                session = this.getSession(),
                requested = session.get('requested') || 0,

                // Create response data.
                data = {
                    name: name,
                    description: 'Session get an set with ' + engine + ' template engine for html format.',
                    sessionId: session.get('id'),
                    items: [
                        { a: 1, b: Math.round(Math.random() * 100) },
                        { a: 2, b: Math.round(Math.random() * 100) },
                        { a: 3, b: Math.round(Math.random() * 100) },
                        { a: 4, b: Math.round(Math.random() * 100) },
                        { a: 5, b: Math.round(Math.random() * 100) }
                    ],
                    requested: requested++
                }

            // Save new value of session var requested count.
            session.set('requested', requested);

            return data
        }
    }
});
