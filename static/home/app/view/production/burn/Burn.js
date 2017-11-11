Ext.define('ceramica2.view.production.burn.Burn', {
  extend: 'Ext.panel.Panel',
  xtype: 'burn',
  requires: ['ceramica2.view.production.burn.BurnGrid', 'ceramica2.view.production.burn.BurnController'],
  controller: 'burn',
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
      handler: 'onNewBurn'
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