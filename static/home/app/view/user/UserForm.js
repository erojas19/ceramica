/**
 * Created by Administrador on 07/06/2015.
 */
Ext.define('ceramica2.view.user.UserForm', {
  extend: 'Ext.window.Window',
  alias: 'widget.user-form',
  requires: ['Ext.button.Button', 'Ext.form.FieldSet', 'Ext.form.Panel', 'Ext.form.field.ComboBox', 'Ext.form.field.Hidden', 'Ext.form.field.Text', 'Ext.layout.container.Anchor', 'Ext.layout.container.Fit', 'Ext.layout.container.HBox'],
  height: 450,
  width: 450,
  layout: {
    type: 'fit'
  },
  bind: {
    title: '{title}'
  },
  model: 'User',
  closable: false,
  modal: true,
  items: [{
    xtype: 'form',
    reference: 'form',
    modelValidation: true,
    bodyPadding: 5,
    layout: {
      type: 'hbox',
      align: 'stretch'
    },
    items: [{
      xtype: 'fieldset',
      flex: 1,
      title: 'Informacion Usuario',
      layout: 'anchor',
      defaults: {
        anchor: '100%',
        xtype: 'textfield',
        msgTarget: 'side',
        labelWidth: 100
      },
      items: [{
        xtype: 'hiddenfield',
        name: 'id',
        fieldLabel: 'Label'
      }, {
        fieldLabel: 'Username',
        name: 'username',
        allowBlank: false
      }, {
        fieldLabel: 'Name',
        name: 'first_name',
        allowBlank: false
      }, {
        fieldLabel: 'Apellidos',
        name: 'second_name'
      }, {
        fieldLabel: 'Apellidos',
        name: 'third_name'
      }, {
        fieldLabel: 'Carnet Identidad',
        name: 'ci',
        allowBlank: false,
        vtype: 'integer'
      }, {
        fieldLabel: 'Email',
        name: 'email',
        vtype: 'email'
      }]
    }]
  }],
  dockedItems: [{
    xtype: 'toolbar',
    dock: 'bottom',
    ui: 'footer',
    layout: {
      pack: 'end',
      type: 'hbox'
    },
    items: [{
      xtype: 'button',
      text: 'Save',
      listeners: {
        click: 'onSaveUser'
      }
    }, {
      xtype: 'button',
      text: 'Cancel',
      listeners: {
        click: 'onCancel'
      }
    }]
  }]
});