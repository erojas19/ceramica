Ext.define('ceramica2.view.production.burn.BurnController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.burn',
  requires: ['Ext.view.MultiSelector',
    'ceramica2.view.production.burn.BurnGrid', 'ceramica2.model.Burn',
    'ceramica2.view.production.burn.BurnForm','ceramica2.view.production.burn.BurnWindow'
  ],
  onNewBurn: function () {
    this.createDialogBurn(null);
  },
  createDialogBurn: function (record) {
    var me = this;
    var view = me.getView();
    me.dialog = view.add({
      xtype: 'burn_window'
    });
    if (record != null) {
      me.dialog.items.items[0].getForm().loadRecord(record);
    }
    me.dialog.show();
  },
  onAddMachine: function (btn) {
    var grid = btn.up('grid');
    grid.getStore().insert(0, {});
  },
  onCancelMachine: function () {
    var me = this;
    me.dialog = Ext.destroy(me.dialog);
  },
  onSaveMachine: function (btn) {
    var me = this;
    var form = me.lookupReference('form');
    var users = me.lookupReference('multi_user');
    if (form.isValid()) {
      if (users.getStore().getData().items.length > 0) {
        //var data = form.getForm().getFieldValues();
        var data = form.getForm().getValues();
        console.log(data);
        for (var i in data) {
          if (data.hasOwnProperty(i)) {
            if (/^textfield.*$/.test(i)) {
              console.log(i)
              delete data[i];
            }
          }
        }
        data['users'] = Ext.Array.pluck(users.getStore().getData().items, "data");
        Ext.Ajax.request({
          url: 'new_machine/',
          method: 'POST',
          params: { data: Ext.util.JSON.encode(data) },
          scope: me,
          //success: 'onSaveSuccess',
          //failure: 'onSaveFailure'
        });
      } else {
        ceramica2.util.Util.showToast('Adicioine por lo menis un usuario');
      }
    }
  }
});