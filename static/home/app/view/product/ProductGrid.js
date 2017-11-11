/**
 * Created by Administrador on 04/07/2015.
 */
Ext.define('ceramica2.view.product.ProductGrid', {
  extend: 'Ext.grid.Panel',
  xtype: 'productGrid',
  columns: [{
    dataIndex: 'id',
    text: 'Id',
    flex: 1
  }, {
    dataIndex: 'name',
    text: 'Nombre',
    flex: 2
  }, {
    dataIndex: 'description',
    text: 'Descripcion',
    flex: 2
  }, {
    dataIndex: 'status',
    text: 'Estado',
    hidden: true
  }]
});