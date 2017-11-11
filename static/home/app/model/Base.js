Ext.define('ceramica2.model.Base', {
    extend: 'Ext.data.Model',

    requires: [
        'ceramica2.util.Util',
        'ceramica2.ux.data.writer.AssociatedWriter'
    ],

    schema: {
        namespace: 'ceramica2.model',
        urlPrefix: 'php',
        proxy: {
            type: 'ajax',
            api :{
                read : '{prefix}/{entityName:lowercase}/list.php',
                create: '{prefix}/{entityName:lowercase}/create.php',
                update: '{prefix}/{entityName:lowercase}/update.php',
                destroy: '{prefix}/{entityName:lowercase}/destroy.php'
            },
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            writer: {
                type: 'associatedjson',
                writeAllFields: true,
                encode: true,
                rootProperty: 'data',
                allowSingle: false
            },
            listeners: {
                exception: function(proxy, response, operation){
                    ceramica2.util.Util.showErrorMsg(response.responseText);
                }
            }
        }
    }
});