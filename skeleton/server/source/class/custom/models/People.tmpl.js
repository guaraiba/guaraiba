qx.Class.define("${Namespace}.models.People", {
    extend: guaraiba.orm.Record,
    include: [guaraiba.orm.MTimestampRecord],

    statics: {
        tableName: "peoples"
    },

    properties: {
        id: {
            check: guaraiba.orm.DBSchema.Serial,
            nullable: true
        },

        name: {
            check: guaraiba.orm.DBSchema.String,
            nullable: false
        },

        age: {
            check: guaraiba.orm.DBSchema.Integer,
            nullable: false
        }
    },

    members: {}
});