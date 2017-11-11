/**
 * Created by Administrador on 07/06/2015.
 */
Ext.define('ceramica2.view.production.machine.MachineGrid', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.machine-grid',
  xtype: 'machineGrid',
  requires: ['Ext.toolbar.Paging', 'ceramica2.store.Machines'],
  store: Ext.create('ceramica2.store.Machines'),
  reference: 'machineGrid',
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
    beforerender: function(grid) {
      grid.getDockedItems('toolbar[xtype="pagingtoolbar"]')[0].bindStore(grid.getStore());
    }
  }
});