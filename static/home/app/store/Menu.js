/**
 * Created by Administrador on 06/06/2015.
 */
Ext.define('ceramica2.store.Menu', {
  extend: 'Ext.data.Store',

  requires: [
    'ceramica2.model.menu.Accordion',
    'ceramica2.util.Util'
  ],

  model: 'ceramica2.model.menu.Accordion',
  autoLoad: true,
  proxy: {
    type: 'ajax',
    url: 'menus/',
    reader: {
      type: 'json',
      rootProperty: 'results',
      totalProperty: 'total_property'
    },
    listeners: {
      exception: function (proxy, response, operation) {
        ceramica2.util.Util.showErrorMsg(response.responseText);
      }
    }
  }
});