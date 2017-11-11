/**
 * Created by Administrador on 07/06/2015.
 */
Ext.define('ceramica2.view.production.machine.MachineEditGrid', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.machine_edit_grid',
  xtype: 'machine_edit_grid',
  plugins: [
    Ext.create('Ext.grid.plugin.CellEditing', {
      clicksToEdit: 1
    })
  ],
  requires: [
    'Ext.ux.DateTimeField',
    'Ext.toolbar.Paging',
    'ceramica2.store.Machines',
    'ceramica2.view.product.ProductCombobox'
  ],
  store: Ext.create('ceramica2.store.Machines'),
  columns: [
    {
      dataIndex: 'id',
      text: 'Id',
      flex: 1,
      hidden: true
    },
    {
      dataIndex: 'product_id',
      text: 'Producto',
      editor: {
        xtype: 'product_combobox'
      },
      flex: 1
    },
    {
      dataIndex: 'date',
      flex: 1,
      text: 'Fecha',
      editor: {
        xtype: 'datefield',
        maxValue: new Date()
      }
    },
    {
      dataIndex: 'time_start',
      flex: 1,
      text: 'Hora Inicio',
      editor: {
        xtype: 'datetimefield',
        format: 'Y-m-d H:i:s',
        value: new Date()
      }
    },
    {
      dataIndex: 'time_end',
      flex: 1,
      text: 'Hora Final',
      editor: {
        xtype: 'datetimefield',
        format: 'Y-m-d H:i:s',
        value: new Date()
      }
    },
    {
      dataIndex: 'rack',
      text: 'Estante',
      flex: 1,
      editor: {
        xtype: 'numberfield',
        value: 0,
        maxValue: 55,
        minValue: 0
      }
    }, {
      dataIndex: 'quantity',
      flex: 1,
      text: 'Cantidad',
      editor: {
        xtype: 'numberfield',
        value: 0,
        maxValue: 55,
        minValue: 0
      }
    }
  ]
});