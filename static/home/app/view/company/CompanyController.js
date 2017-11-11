Ext.define('ceramica2.view.company.CompanyController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.company',
  requires: ['ceramica2.util.Util'],
  onLoadCompany: function () {
    var me = this;
    var view = me.getView();
    var form = ceramica2.util.Util.findComponentXtype(view, 'company_form');
    Ext.Ajax.request({
      url: 'empresa/show_empresa/',
      method: 'GET',
      callback: function (options, success, response) {
        if (success) {
          var data = JSON.parse(response.responseText);
          if (data.results.pk != null) {
            form.getForm().findField('pk').setValue(data.results.pk);
            form.getForm().findField('name').setValue(data.results.name);
            form.getForm().findField('direction').setValue(data.results.direction);
            form.getForm().findField('nit').setValue(data.results.nit);
            form.getForm().findField('website').setValue(data.results.website);
            form.getForm().findField('email').setValue(data.results.email);
          }
        }
      }
    });
  },
  onSaveUpdate: function () {
    var me = this;
    var view = me.getView();
    var form = ceramica2.util.Util.findComponentXtype(view, 'company_form');
    if (form.isValid()) {
      var record = form.getValues();
      if (record != null) {
        Ext.Ajax.request({
          url: 'empresa/save_empresa/',
          method: 'POST',
          params: {
            data: Ext.util.JSON.encode(record)
          },
          scope: me,
          success: 'onSaveSuccess',
          failure: 'onSaveFailure'
        });
      }
    }
  },
  onSaveSuccess: function (form) {
    var me = this;
    var res = JSON.parse(form.responseText);
    if (res.hasOwnProperty('success')) {
      if (res.success) {
        ceramica2.util.Util.showToast('Se ha guardado correctamente');
        me.onLoadCompany();
      } else {
        ceramica2.util.Util.showToast('Ha ocurrido un error, por favor vuelve a guardar.');
      }
    } else {
      ceramica2.util.Util.showToast('Ha ocurrido un error, por favor vuelve a guardar.');
    }
  },
  onSaveFailure: function (form, action) {
    ceramica2.util.Util.handleFormFailure(action);
  },
});