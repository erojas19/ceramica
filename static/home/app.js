Ext.Loader.setConfig({
  enabled: true
});
Ext.Loader.setPath("Ext.ux.DateTimePicker", "/static/home/app/ux/dateTimeField/DateTimePicker.js");
Ext.Loader.setPath("Ext.ux.DateTimeField", "/static/home/app/ux/dateTimeField/DateTimeField.js");
Ext.application({
  name: 'ceramica2',
  extend: 'ceramica2.Application',
  appFolder: '/static/home/app',
  autoCreateViewport: 'ceramica2.view.main.Main'
});
