Ext.define('ceramica2.view.production.burn.BurnWindow', {
  extend: 'Ext.window.Window',
  xtype: 'burn_window',
  layout: 'fit',
  modal: true,
  closable: true,
  items: [{
    xtype: 'burn_form'
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