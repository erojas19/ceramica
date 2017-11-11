/**
 * Created by Administrador on 07/06/2015.
 */
Ext.define('ceramica2.view.production.machine.MachineFormCustom', {
  extend: 'Ext.window.Window',
  alias: 'widget.machine_form_custom',
  requires: [
    'Ext.button.Button',
    'Ext.form.FieldSet',
    'Ext.form.Panel',
    'Ext.form.field.ComboBox',
    'Ext.form.field.Hidden',
    'Ext.form.field.Text',
    'Ext.layout.container.Anchor',
    'Ext.layout.container.Fit',
    'Ext.layout.container.HBox',
    'ceramica2.store.Products'
  ],

  height: 450,
  width: 500,
  layout: {
    type: 'fit'
  },

  bind: {
    title: '{title}'
  },
  model: 'Machine',
  closable: false,
  modal: true,
  items: [
    {
      xtype: 'form',
      reference: 'form',
      modelValidation: true,
      bodyPadding: 5,
      layout: {
        type: 'vbox',
        align: 'stretch'
      },
      items: [
        {
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
          },
          items: [
            {
              xtype: 'hiddenfield',
              name: 'id',
              fieldLabel: 'Label'
            },
            {
              xtype: 'combobox',
              fieldLabel: 'producto',
              displayField: 'name',
              store: Ext.create('ceramica2.store.Products'),
              valueField: 'id',
              queryMode: 'remote',
              forceSelection: true,
              editable: false,
              allowBlank: false,
              name: 'product_id'
            },
            {
              xtype: 'datefield',
              maxValue: new Date(),
              fieldLabel: 'Fecha',
              name: 'date',
              allowBlank: false,
              format: 'Y-m-d',
              value: new Date(),
            },
            {
              xtype: 'datetimefield',
              format: 'Y-m-d H:i:s',
              value: new Date(),
              fieldLabel: 'Hora Inicio',
              name: 'time_start',
              allowBlank: false
            },
            {
              xtype: 'datetimefield',
              format: 'Y-m-d H:i:s',
              value: new Date(),
              fieldLabel: 'Hora Final',
              name: 'time_end'
            },
            {
              xtype: 'fieldset',
              title: 'Cantidad',
              defaults: {
                labelWidth: 90,
                anchor: '100%',
                layout: 'hbox'
              },
              items: [{
                xtype: 'fieldcontainer',
                layout: 'vbox',
                items: [
                  {
                    xtype: 'textfield',
                    name: 'rack',
                    fieldLabel: 'Estante',
                    allowBlank: false,
                    reference: 'rackTextField',
                    vtype: 'rangeNumeric'
                  }, {
                    xtype: 'textfield',
                    name: 'quantity',
                    fieldLabel: 'Unidades',
                    allowBlank: false,
                    vtype: 'integer',
                    listeners: {
                      focus: function (textField, b, c) {
                        //console.log(textField);
                        var view = textField.up('panel');
                        console.log(view.lookupReference('rackTextField'))
                      }
                    }
                  }
                ]
              }]
            },
            {
              region: 'center',
              title: 'Lista de usuario',
              reference: 'multi_user',
              xtype: 'multiselector',
              fieldName: 'username',
              viewConfig: {
                deferEmptyText: false,
                emptyText: 'Usuario no seleccionados'
              },
              search: {
                field: 'username',
                store: {
                  //source: Ext.getStore('ceramica2.store.Users'),
                  type: 'users',
                  autoLoad: true
                }
              }
            }
          ]
        }
      ]
    }
  ],
  dockedItems: [
    {
      xtype: 'toolbar',
      dock: 'bottom',
      ui: 'footer',
      layout: {
        pack: 'end',
        type: 'hbox'
      },
      items: [
        {
          xtype: 'button',
          text: 'Save',
          listeners: {
            click: 'onSaveMachine'
          }
        },
        {
          xtype: 'button',
          text: 'Cancel',
          listeners: {
            click: 'onCancelMachine'
          }
        }
      ]
    }
  ]
});