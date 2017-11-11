Ext.define('ceramica2.view.production.burn.BurnGrid', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.burn-grid',
  xtype: 'burnGrid',
  requires: ['ceramica2.store.Burns'],
  store: { type: 'burns' },
  reference: 'burnGrid',
  plugins: 'gridfilters',
  emptyText: 'No Matching Records',
  loadMask: true,
  stateful: true,
  columns: [{
    dataIndex: 'id',
    text: 'Id',
    flex: 1
  }, {
    dataIndex: 'product',
    text: 'Producto',
    flex: 1,
    filter: {
      type: 'string',
      itemDefaults: {
        emptyText: 'Search for...'
      }
    }
  }, {
    dataIndex: 'date',
    flex: 1,
    text: 'Fecha',
    filter: {
      type: 'date'
    }
  }, {
    dataIndex: 'time_start',
    flex: 1,
    text: 'Hora Inicio'
  }, {
    dataIndex: 'time_end',
    flex: 1,
    text: 'Hora Final'
  }, {
    dataIndex: 'rack',
    text: 'Estante',
    flex: 1
  }, {
    dataIndex: 'quantity',
    flex: 1,
    text: 'Cantidad'
  }],
  dockedItems: [{
    xtype: 'pagingtoolbar',
    dock: 'bottom',
    displayInfo: true
  }],
  listeners: {
    beforerender: function (grid) {
      grid.getDockedItems('toolbar[xtype="pagingtoolbar"]')[0].bindStore(grid.getStore());
    }
  }
});