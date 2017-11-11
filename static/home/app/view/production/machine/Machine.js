/**
/**
 * Created by Administrador on 01/07/2015.
 */
Ext.define('ceramica2.view.production.machine.Machine', {
  extend: 'Ext.panel.Panel',
  xtype: 'machine',
  requires: ['ceramica2.view.production.machine.MachineController', 'ceramica2.view.production.machine.MachineGrid'],
  controller: 'machine',
  layout: {
    type: 'vbox',
    align: 'stretch'
  },
  items: [{
    selModel: {
      selType: 'checkboxmodel'
    },
    xtype: 'machineGrid',
    flex: 1,
    listeners: {
      afterRender: function(grid) {
        grid.getStore().load();
      }
    }
  }],
  dockedItems: [{
    xtype: 'toolbar',
    dock: 'top',
    items: [{
      xtype: 'button',
      text: 'Nuevo',
      handler: 'onNewMachine'
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