Ext.define('ceramica2.model.menu.Accordion', {
  extend: 'Ext.data.Model',
  requires: ['ceramica2.model.menu.TreeNode'],
  fields: [{
    name: 'id',
    type: 'int'
  }, {
    name: 'text'
  }, {
    name: 'icon_cls'
  }, {
    name: 'class_name'
  },{
    name: 'require_text'
  }],
  hasMany: {
    model: 'ceramica2.model.menu.TreeNode',
    foreignKey: 'parent_id',
    name: 'items'
  }
});