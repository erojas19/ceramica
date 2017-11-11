Ext.define('ceramica2.view.user.User', {
  extend: 'Ext.panel.Panel',
  requires: ['Ext.button.Button', 'Ext.layout.container.VBox', 'ceramica2.view.user.UserController', 'ceramica2.view.user.UsersGrid'],
  xtype: 'user',
  controller: 'user',
  layout: {
    type: 'vbox',
    align: 'stretch'
  },
  items: [{
    xtype: 'users_grid',
    flex: 1,
    listeners: {
      afterRender: function(grid) {
        grid.getStore().load();
      }
    }
  }],
  dockedItems: [{
    xtype: 'toolbar',
    dock: 'top',
    items: [{
      xtype: 'button',
      text: 'Nuevo',
      listeners: {
        click: 'onAdd'
      }
    }, {
      xtype: 'button',
      text: 'Editar',
      listeners: {
        click: 'onEdit'
      },
      bind: {
        disabled: '{!usersGrid.selection}'
      }
    }, {
      xtype: 'button',
      text: 'Delete',
      listeners: {
        click: 'onDelete'
      },
      bind: {
        disabled: '{!usersGrid.selection}'
      }
    }]
  }]
});