Ext.define('ceramica2.view.product.ProductController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.product',
  requires: [
    'ceramica2.model.Product'
  ],
  onAddProduct: function () {
    var me = this;
    var view = me.getView();
    var grid = view.down('grid');
    var newProduct = Ext.create('ceramica2.model.Product');
    grid.getStore().insert(0, newProduct);
  },
  onUpdateProduct: function () {
    var me = this;
    var view = me.getView();
    var grid = view.down('grid');
    var record = grid.getSelectionModel().getLastSelected();
    if (/^\d+$/.test(record.data.id)) {
      Ext.Ajax.request({
        url: 'update_product/',
        method: 'POST',
        params: {data: Ext.util.JSON.encode(record.data)},
        success: function () {
          grid.getStore().reload();
        }
      });
    } else {
      Ext.Ajax.request({
        url: 'new_product/',
        method: 'POST',
        params: {data: Ext.util.JSON.encode(record.data)},
        success: function () {
          grid.getStore().reload();
        }
      });
    }
  },
  onDeleteProduct: function () {
    var me = this;
    var view = me.getView();
    var grid = view.down('grid');
    var record = grid.getSelectionModel().getLastSelected();
    if (record) {
      Ext.Msg.show({
        title: 'Eliminar?',
        msg: 'Esta seguro de eliminar?',
        buttons: Ext.Msg.YESNO,
        icon: Ext.Msg.QUESTION,
        fn: function (buttonId) {
          if (buttonId == 'yes') {
            record.data['status'] = true;
            Ext.Ajax.request({
              url: 'delete_product/' + record.data.id + '/',
              method: 'POST',
              params: {data: JSON.encode(record.data)},
              success: function () {
                grid.getStore().reload();
              }
            });
          }
        }
      });
    } else {
      ceramica2.util.Util.showErrorMsg('debe seleccionar un producto')
    }
  },
  onRejectChangeProduct: function () {
    var me = this;
    var view = me.getView();
    var grid = view.down('grid');
    grid.getStore().rejectChanges();
  }
});