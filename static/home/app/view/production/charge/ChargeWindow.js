Ext.define('ceramica2.view.production.charge.ChargeWindow', {
  extend: 'Ext.window.Window',
  xtype: 'charge_window',
  layout: 'fit',
  modal: true,
  closable: true,
  items: [{
    xtype: 'charge_form'
  }],
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