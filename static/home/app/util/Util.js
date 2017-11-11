Ext.define('ceramica2.util.Util', {
  requires: ['Ext.window.Toast'],
  statics: {
    required: '<span style="color:red;font-weight:bold" data-qtip="Required"> *</span>',
    decodeJSON: function(text) {
      var result = Ext.JSON.decode(text, true);
      if (!result) {
        result = {};
        result.success = false;
        result.msg = text;
      }
      return result;
    },
    showErrorMsg: function(text) {
      Ext.Msg.show({
        title: 'Error!',
        msg: text,
        icon: Ext.Msg.ERROR,
        buttons: Ext.Msg.OK
      });
    },
    handleFormFailure: function(action) {
      var me = this,
        result = ceramica2.util.Util.decodeJSON(action.response.responseText);
      switch (action.failureType) {
        case Ext.form.action.Action.CLIENT_INVALID:
          me.showErrorMsg('Form fields may not be submitted with invalid values');
          break;
        case Ext.form.action.Action.CONNECT_FAILURE:
          me.showErrorMsg(action.response.responseText);
          break;
        case Ext.form.action.Action.SERVER_INVALID:
          me.showErrorMsg(result.msg);
      }
    },
    showToast: function(text) {
      Ext.toast({
        html: text,
        closable: false,
        align: 't',
        slideInDuration: 400,
        minWidth: 400
      });
    },
    findComponentXtype: function(component, xtypeValue) {
      if (typeof(component['xtype']) != 'undefined') {
        if (component['xtype'] == xtypeValue) {
          return component;
        }
        if (component.items && component.items.items.length > 0) {
          var children = component.items.items;
          for (var i in children) {
            if (children.hasOwnProperty(i)) {
              var node = this.findComponentXtype(children[i], xtypeValue);
              if (node != null) {
                return node;
              }
            }
          }
        }
      }
      return null;
    },
  }
});
Ext.apply(Ext.form.field.VTypes, {
  integer: function(val) {
    return /\d+/.test(val);
  },
  integerText: 'Debe introducir un numero entero'
});
var range = /^(\d+)$|^([0-9]+)-([0-9]+)$|^[(\d+)(\,)(\d+)]{1,}$/;
Ext.apply(Ext.form.field.VTypes, {
  rangeNumeric: function(val, field) {
    return range.test(val);
  },
  rangeNumericText: 'No es valido funcion, ejemplo: 2 o 2-3 o 2,3,4,5'
});