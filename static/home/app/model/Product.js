Ext.define('ceramica2.model.Product', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'id',
    type: 'int'
  }, {
    name: 'name',
    type: 'string'
  }, {
    name: 'description',
    type: 'string'
  }, {
    name: 'status',
    type: 'boolean'
  }],
  validators: {
    name: {
      type: 'length',
      min: 2
    },
    description: {
      type: 'length',
      min: 2
    }
  }
});