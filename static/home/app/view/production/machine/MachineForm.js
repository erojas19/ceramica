/**
 * Created by Administrador on 07/06/2015.
 */
Ext.define('ceramica2.view.production.machine.MachineForm', {
  extend: 'Ext.form.Panel',
  alias: 'widget.machine_form',
  requires: ['Ext.button.Button', 'Ext.form.FieldSet', 'Ext.form.Panel', 'Ext.form.field.ComboBox', 'Ext.form.field.Hidden', 'Ext.form.field.Text', 'Ext.layout.container.Anchor', 'Ext.layout.container.Fit', 'Ext.layout.container.HBox', 'ceramica2.store.Products'],
  height: 200,
  width: 600,
  layout: 'anchor',
  defaults: {
    anchor: '100%'
  },
  items: [{
    xtype: 'textfield',
    hidden: true
  }, {
    xtype: 'combobox',
    fieldLabel: 'producto',
    displayField: 'name',
    store: Ext.create('ceramica2.store.Products'),
    valueField: 'id',
    queryMode: 'remote',
    forceSelection: true,
    editable: false,
    allowBlank: false,
    //name: 'product_id'
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
  }, {
    xtype: 'numberfield',
    name: 'quantity',
    fieldLabel: 'Cantidad',
    allowBlank: false
  }]
});