/**
 * Created by Administrador on 06/06/2015.
 */
Ext.define('ceramica2.model.menu.TreeNode', {
  extend: 'Ext.data.Model',
  fields: [
    {name: 'id', type: 'int'},
    {name: 'text'},
    {name: 'icon_cls'},
    {name: 'class_name'},
    {name: 'require_source'},
    {name: 'require_text'},
    {name: 'parent_id', mapping: 'menu_id'}
  ]
});