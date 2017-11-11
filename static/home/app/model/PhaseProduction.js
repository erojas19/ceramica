Ext.define('ceramica2.model.PhaseProduction', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'id',
    type: 'int'
  }, {
    name: 'fase',
    type: 'string'
  }, {
    name: 'estado',
    type: 'boolean'
  }]
});