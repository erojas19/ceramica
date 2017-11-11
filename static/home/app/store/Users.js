Ext.define('ceramica2.store.Users', {
  extend: 'Ext.data.Store',
  alias: 'store.users',
  requires: ['ceramica2.ux.data.writer.AssociatedWriter', 'ceramica2.model.security.User', 'ceramica2.util.Util'],
  model: 'ceramica2.model.security.User',
  pageSize: 30,
  filters: [{
    property: 'username'
  }],
  proxy: {
    type: 'ajax',
    reader: {
      type: 'json',
      rootProperty: 'results',
      totalProperty: 'count'
    },
    writer: {
      type: 'associatedjson',
      writeAllFields: true,
      encode: true,
      //rootProperty: 'data',
      allowSingle: false
    },
    api: {
      read: 'users/'
    },
    listeners: {
      exception: function(proxy, response) {
        ceramica2.util.Util.showErrorMsg(response.responseText);
      }
    }
  }
});