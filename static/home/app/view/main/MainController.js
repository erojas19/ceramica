Ext.define('ceramica2.view.main.MainController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.main',
  requires: ['ceramica2.util.Util'],
  init: function() {
    ceramica2.app.createController('Root');
  },
  onLogout: function(button, e, options) {
    var me = this;
    Ext.Ajax.request({
      url: 'accounts/logout/',
      scope: me,
      success: 'onLogoutSuccess',
      failure: 'onLogoutFailure'
    });
  },
  onLogoutSuccess: function(conn, response, options, eOpts) {
    var result = ceramica2.util.Util.decodeJSON(conn.responseText);
    if (result.success) {
      this.getView().destroy();
      window.location.href = window.location;
    } else {
      ceramica2.util.Util.showErrorMsg(result.msg);
      window.location.href = window.location;
    }
  },
  onLogoutFailure: function(conn, response, options, eOpts) {
    ceramica2.util.Util.showErrorMsg(conn.responseText);
  }
});