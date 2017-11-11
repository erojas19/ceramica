Ext.define('ceramica2.view.production.charge.ChargeForm', {
  extend: 'Ext.form.Panel',
  alias: 'widget.charge_form',
  requires: ['Ext.button.Button', 'Ext.form.FieldSet', 'Ext.form.Panel', 'Ext.form.field.ComboBox', 'Ext.form.field.Hidden', 'Ext.form.field.Text', 'Ext.layout.container.Anchor', 'Ext.layout.container.Fit', 'Ext.layout.container.HBox', 'ceramica2.store.Products'],
  height: 300,
  width: 600,
  layout: 'anchor',
  defaults: {
    anchor: '100%'
  },
  items: [{
    xtype: 'fieldset',
    flex: 1,
    title: 'Datos',
    layout: 'anchor',
    scrollable: 'y',
    defaults: {
      anchor: '95%',
      xtype: 'textfield',
      msgTarget: 'side',
      labelWidth: 100
    }, items: [{
      xtype: 'textfield',
      hidden: true
    }, {
      xtype: 'combobox',
      fieldLabel: 'producto',
      displayField: 'name',
      store: {
        type: 'products'
      },
      valueField: 'id',
      queryMode: 'remote',
      forceSelection: true,
      editable: false,
      allowBlank: false,
      name: 'product_id'
    }, {
      xtype: 'datefield',
      name: 'date',
      fieldLabel: 'Fecha',
      allowBlank: false
    }, {
      xtype: 'timefield',
      fieldLabel: 'Hora inicio',
      name: 'time_start',
      allowBlank: false,
      format: 'H:i'
    }, {
      xtype: 'timefield',
      name: 'time_end',
      fieldLabel: 'Hora final',
      allowBlank: false,
      format: 'H:i'
    }, {
      xtype: 'numberfield',
      name: 'rack',
      fieldLabel: 'Rack',
      allowBlank: false
    }]
  }]
});