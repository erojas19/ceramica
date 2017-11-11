Ext.define('ceramica2.view.product.ProductGridEditor', {
  extend: 'Ext.grid.Panel',
  xtype: 'productGridEditor',
  requires: ['Ext.grid.plugin.CellEditing', 'ceramica2.store.Products'],
  plugins: [
    Ext.create('Ext.grid.plugin.CellEditing', {
      clicksToEdit: 1
    })
  ],
  store: Ext.create('ceramica2.store.Products'),
  columns: [{
    dataIndex: 'id',
    text: 'Id',
    flex: 1
  }, {
    dataIndex: 'name',
    text: 'Nombre',
    flex: 2,
    editor: {
      allowBlank: false
    }
  }, {
    dataIndex: 'description',
    text: 'Descripcion',
    flex: 2,
    editor: {
      allowBlank: false
    }
  }]
});