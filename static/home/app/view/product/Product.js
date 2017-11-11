Ext.define('ceramica2.view.product.Product', {
  extend: 'Ext.Container',
  xtype: 'product',
  requires: ['Ext.toolbar.Toolbar', 'ceramica2.view.product.ProductController', 'ceramica2.view.product.ProductGridEditor'],
  controller: 'product',
  items: [{
    xtype: 'productGridEditor',
    listeners: {
      beforerender: function(grid) {
        grid.addDocked({
          xtype: 'toolbar',
          dock: 'top',
          items: [{
            text: 'Nuevo',
            handler: 'onAddProduct'
          }, {
            text: 'Guardar Cambios',
            handler: 'onUpdateProduct'
          }, {
            text: 'Cancelar Cambios',
            handler: 'onRejectChangeProduct'
          }, {
            text: 'Eliminar',
            handler: 'onDeleteProduct'
          }]
        });
      },
      afterRender: function(grid) {
        grid.getStore().load();
      }
    }
  }]
});