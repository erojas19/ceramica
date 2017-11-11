Ext.define('ceramica2.view.menu.Tree', {
  extend: 'Ext.tree.Panel',
  xtype: 'menutree',
  requires: ['ceramica2.overrides.tree.ColumnOverride'],
  border: 0,
  autoScroll: true,
  rootVisible: false
});