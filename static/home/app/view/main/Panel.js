Ext.define('ceramica2.view.main.Panel', {
  extend: 'Ext.tab.Panel',
  xtype: 'mainpanel',
  activeTab: 0,
  items: [{
    xtype: 'panel',
    closable: false,
    title: 'Home',
    layout: 'fit'
  }]
});