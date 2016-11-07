/**
 * This class offers the specific properties and features to configure the ${Name} application.
 *
 * @require(guaraiba.Passport)
 */
qx.Class.define('${Namespace}.Configuration', {
    type: 'singleton',
    extend: guaraiba.Configuration,

    members: {

        init: function () {
            // this.setPort(3002);
            // this.setMaxWorkers(4);
            // this.sessionSecret('a3d68565c5bd86c8d13af3b98c23e6bb');
            this.setDefaultFormat('json');
            this.setAllowCORS(false);

            // Register database schemas.
            var dbPath = guaraiba.path.join(guaraiba.appDataPath, 'app.db'),

                knexSetting = {
                    client: 'sqlite3',
                    connection: dbPath,
                    useNullAsDefault: true,
                    debug: true
                },

                jdbcSettings = {driver: 'org.sqlite.JDBC', connectString: 'jdbc:sqlite:' + dbPath}

            this.registerDBSchema(new ${Namespace}.schemas.Default(knexSetting, jdbcSettings));
        }

    }
});