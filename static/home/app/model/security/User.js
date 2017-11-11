Ext.define('ceramica2.model.security.User', {
  extend: 'Ext.data.Model',
  entityName: 'User',
  fields: [
    {name: 'username'},
    {name: 'first_name'},
    {name: 'last_name'},
    {name: 'third_name'},
  ],

  validators: {
    name: [
      {type: 'presence', message: 'This field is mandatory'},
      {type: 'length', min: 3, max: 100}
    ],
    last_name: [
      {type: 'presence', message: 'Este campo es requerindo'},
      {type: 'length', min: 3, max: 100}
    ],
    username: [
      {type: 'format', matcher: /([a-z]+)/i},
      {type: 'presence', message: 'This field is mandatory'},
      {type: 'length', min: 3, max: 25}
    ],
    email: [
      {type: 'presence', message: 'Este campo es requerido'},
      {type: 'length', min: 5, max: 100},
      {type: 'email'}
    ],
  }
});