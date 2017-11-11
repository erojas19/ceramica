Ext.define('ceramica2.model.Machine', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'id',
    type: 'int'
  }, {
    name: 'product',
    mapping: function(data) {
      if (data.product != null) {
        return data.product.name;
      } else {
        return '';
      }
    }
  }, {
    name: 'product_id',
    type: 'int',
    reference: 'Product'
  }, {
    name: 'date',
    type: 'string'
  }, {
    name: 'time_start',
    type: 'string'
  }, {
    name: 'time_end',
    type: 'string'
  }, {
    name: 'rack',
    type: 'int'
  }, {
    name: 'quantity',
    type: 'int'
  }, {
    name: 'created_at',
    type: 'string'
  }, {
    name: 'updated_at',
    type: 'string'
  }, {
    name: 'status',
    type: 'boolean'
  }],
  validators: {
    product_id: 'presence',
    date: 'presence',
    time_start: 'presence',
    time_end: 'presence',
    rack: 'presence',
    quantity: 'presence'
  }
});