Ext.define('ceramica2.view.production.discharge.Discharge', {
  extend: 'Ext.panel.Panel',
  xtype: 'discharge',
  // requires: ['ceramica2.view.production.charge.ChargeGrid', 'ceramica2.view.production.charge.ChargeController'],
  // controller: 'charge',
  layout: {
    type: 'vbox',
    align: 'stretch'
  },
  items: [{
    selModel: {
      selType: 'checkboxmodel'
    },
    xtype: 'panel',
    flex: 1
  }],
  dockedItems: [{
    xtype: 'toolbar',
    dock: 'top',
    items: [{
      xtype: 'button',
      text: 'Nuevo',
      handler: 'onNewCharge'
    }, {
      xtype: 'button',
      text: 'Editar',
      bind: {
        disabled: '{!dischargesGrid.selection}'
      }
    }, {
      xtype: 'button',
      text: 'Delete',
      bind: {
        disabled: '{!dischargesGrid.selection}'
      }
    }, {
      xtype: 'button',
      text: 'exportar',
      bind: {
        disabled: '{!burnsGrid.selection}'
      },
      handler: 'onDischargeExportExcel'
    }]
  }]
});