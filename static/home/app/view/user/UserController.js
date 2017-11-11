/**
 * Created by Administrador on 07/06/2015.
 */
Ext.define('ceramica2.view.user.UserController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.user',
  requires: ['ceramica2.util.Util', 'ceramica2.view.user.UserForm',
    //'ceramica2.view.user.UserPasswordForm'
  ],
  onAdd: function() {
    this.createDialog(null);
  },
  onEdit: function() {
    var me = this,
      records = me.getRecordsSelected();
    if (records[0]) {
      me.createDialog(records[0]);
    }
  },
  onModifiedPassword: function(grid, rowIndex) {
    var record = grid.getStore().getAt(rowIndex);
    this.createDialogPassword(record);
  },
  createDialogPassword: function(record) {
    var me = this;
    var view = me.getView();
    me.dialog = view.add({
      xtype: 'user_password_form',
      title: 'Contrasenia'
    });
    if (record != null) {
      me.dialog.items.items[0].getForm().loadRecord(record);
    }
    me.dialog.show();
  },
  createDialog: function(record) {
    var me = this;
    var view = me.getView();
    me.dialog = view.add({
      xtype: 'user-form',
      viewModel: {
        data: {
          title: record ? 'Cambiar: ' + record.get('username') : 'Nuevo usuario'
        }
      }
    });
    me.dialog.show();
    if (record != null) {
      me.dialog.items.items[0].getForm().loadRecord(record);
      me.dialog.items.items[0].getForm().findField("username").disable();
      me.dialog.items.items[0].getForm().findField("email").disable();
      //me.dialog.items.items[0].getForm().findField("ci").setValue(record.data['profile'].ci);
    }
  },
  getRecordsSelected: function() {
    var grid = this.lookupReference('usersGrid');
    return grid.getSelection();
  },
  onDelete: function() {
    var me = this;
    var view = me.getView();
    var grid = view.down('grid');
    var records = grid.getSelectionModel().getLastSelected();
    if (records) {
      Ext.Msg.show({
        title: 'Delete?',
        msg: 'Are you sure you want to delete?',
        buttons: Ext.Msg.YESNO,
        icon: Ext.Msg.QUESTION,
        fn: function(buttonId) {
          if (buttonId == 'yes') {
            Ext.Ajax.request({
              url: 'delete_user/',
              method: 'POST',
              params: {
                data: Ext.util.JSON.encode(records.data)
              },
              scope: me,
              success: 'onSaveSuccess',
              failure: 'onSaveFailure'
            });
          }
        }
      });
    } else {
      Ext.Msg.show({
        title: 'Warning',
        msg: 'You cannot delete all the users from the application.',
        buttons: Ext.Msg.OK,
        icon: Ext.Msg.WARNING
      });
    }
  },
  onSaveUser: function() {
    var me = this;
    var form = me.lookupReference('form');
    if (form.isValid()) {
      var record = form.getValues();
      if (record != null) {
        if (/^\d+$/.test(record.id)) {
          Ext.Ajax.request({
            url: 'update_user/',
            method: 'POST',
            params: {
              data: Ext.util.JSON.encode(record)
            },
            scope: me,
            success: 'onSaveSuccess',
            failure: 'onSaveFailure'
          });
        } else {
          Ext.Ajax.request({
            url: 'new_user/',
            method: 'POST',
            params: {
              data: Ext.util.JSON.encode(record)
            },
            scope: me,
            success: 'onSaveSuccess',
            failure: 'onSaveFailure'
          });
        }
      }
    }
  },
  onSavePassword: function() {
    var me = this;
    var form = me.lookupReference('form');
    if (form.isValid()) {
      form.submit({
        clientValidation: true,
        url: 'php/user/savePassword.php',
        scope: me,
        success: 'onSaveSuccess',
        failure: 'onSaveFailure'
      });
    }
  },
  onSaveSuccess: function(form) {
    var me = this;
    var res = JSON.parse(form.responseText);
    if (res.hasOwnProperty('msg')) {
      var cad = res['msg'].join('<br/>');
      ceramica2.util.Util.showToast(cad);
    } else {
      me.onCancel();
      me.refresh();
      ceramica2.util.Util.showToast('Success! User saved.');
    }
  },
  onSaveFailure: function(form, action) {
    ceramica2.util.Util.handleFormFailure(action);
  },
  onCancel: function() {
    var me = this;
    me.dialog = Ext.destroy(me.dialog);
  },
  onCancelPassword: function() {
    var me = this;
    me.dialog = Ext.destroy(me.dialog);
  },
  refresh: function() {
    var me = this;
    var view = me.getView();
    var grid = view.down('grid');
    grid.store.load();
  }
});