Ext.define('ceramica2.store.PhaseProductions', {
  extend: 'Ext.data.Store',
  uses: ['ceramica2.model.PhaseProduction', 'ceramica2.util.Util', 'ceramica2.ux.data.writer.AssociatedWriter'],
  model: 'ceramica2.model.PhaseProduction',
  pageSize: 30,
  proxy: {
    type: 'ajax',
    api: {
      read: 'phaseproduction/',
    },
    reader: {
      type: 'json',
      rootProperty: 'results',
      totalProperty: 'count'
    },
    listeners: {
      exception: function(proxy, response) {
        ceramica2.util.Util.showErrorMsg(response.responseText);
      }
    }
  }
});