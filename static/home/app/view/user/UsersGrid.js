Ext.define('ceramica2.view.user.UsersGrid', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.users-grid',
  xtype: 'users_grid',
  requires: ['Ext.toolbar.Paging', 'ceramica2.store.Users'],
  store: Ext.create('ceramica2.store.Users'),
  reference: 'usersGrid',
  columns: [{
    dataIndex: 'username',
    text: 'Username',
    flex: 1
  }, {
    dataIndex: 'first_name',
    flex: 1,
    text: 'Name'
  }, {
    dataIndex: 'second_name',
    flex: 1,
    text: 'Apellidos'
  }, {
    dataIndex: 'third_name',
    flex: 1,
    text: 'Apellidos Mat'
  }, {
    dataIndex: 'ci',
    flex: 1,
    text: 'Carnet Identidad'
  }, {
    dataIndex: 'email',
    text: 'Email',
    flex: 1
  }],
  dockedItems: [{
    xtype: 'pagingtoolbar',
    dock: 'bottom',
    displayInfo: true
  }],
  listeners: {
    beforeRender: function(grid) {
      grid.getDockedItems('toolbar[xtype="pagingtoolbar"]')[0].bindStore(grid.getStore());
    }
  }
});