Ext.define('ceramica2.view.main.Header', {
  extend: 'Ext.toolbar.Toolbar',
  xtype: 'appheader',
  requires: ['ceramica2.view.main.ResponsiveMenuButton'],
  ui: 'footer',
  items: [{
    xtype: 'component',
    bind: {
      html: '{appHeaderIcon}'
    }
  }, {
    xtype: 'component',
    componentCls: 'app-header-title',
    bind: {
      html: '{appName}'
    }
  }, {
    xtype: 'tbfill'
  }, {
    xtype: 'responsive-mainmenu'
  }, {
    xtype: 'tbseparator'
  }, {
    xtype: 'button',
    itemId: 'logout',
    text: 'Salir',
    reference: 'logout',
    iconCls: 'fa fa-sign-out fa-lg buttonIcon',
    listeners: {
      click: 'onLogout'
    }
  }]
});