Ext.define('ceramica2.view.product.ProductCombobox', {
  extend: 'Ext.form.ComboBox',
  xtype: 'product_combobox',
  triggerAction: 'all',
  requires: ['ceramica2.store.Products'],
  forceSelection: true,
  typeAhead: false,
  editable: false,
  mode: 'remote',
  store: new Ext.create('ceramica2.store.Products'),
  displayField: 'name',
  valueField: 'id',
  autoLoad: true,
  name: 'product_id'
});