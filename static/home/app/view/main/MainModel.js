/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ceramica2.view.main.MainModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.main',
  data: {
    name: 'ceramica2',
    appName: 'Ceramica',
    // appHeaderIcon: '<span class="fa fa-desktop fa-lg app-header-logo">',
    footer: 'Ceramica'
  }
});