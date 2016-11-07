qx.Mixin.define("${Namespace}.helpers.MDemos", {
    members: {
        func1Helper: function (text) {
            return 'F1: ' + text + ','
        },

        func2Helper: function (text) {
            return text.toUpperCase()
        }
    }
});
