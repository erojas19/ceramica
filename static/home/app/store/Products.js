Ext.define('ceramica2.store.Products', {
  extend: 'Ext.data.Store',
  alias: 'store.products',
  requires: ['ceramica2.model.Product', 'ceramica2.util.Util', 'ceramica2.ux.data.writer.AssociatedWriter'],
  model: 'ceramica2.model.Product',
  pageSize: 30,
  proxy: {
    type: 'ajax',
    reader: {
      type: 'json',
      rootProperty: 'results',
      totalProperty: 'count'
    },
    api: {
      read: 'products/'
    },
    listeners: {
      exception: function(proxy, response) {
        ceramica2.util.Util.showErrorMsg(response.responseText);
      }
    }
  }
});