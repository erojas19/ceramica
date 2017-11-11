Ext.define('ceramica2.store.Machines', {
  extend: 'Ext.data.Store',
  requires: ['ceramica2.model.Machine', 'ceramica2.util.Util', 'ceramica2.ux.data.writer.AssociatedWriter'],
  model: 'ceramica2.model.Machine',
  remoteSort: true,
  remoteFilter: true,
  pageSize: 30,
  proxy: {
    type: 'ajax',
    reader: {
      type: 'json',
      rootProperty: 'results',
      totalProperty: 'total'
    },
    writer: {
      type: 'associatedjson',
      writeAllFields: true,
      encode: true,
      rootProperty: 'data',
      allowSingle: false
    },
    api: {
      read: 'machines/'
    },
    listeners: {
      exception: function(proxy, response) {
        ceramica2.util.Util.showErrorMsg(response.responseText);
      }
    }
  }
});