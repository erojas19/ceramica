Ext.define('ceramica2.view.company.CompanyForm', {
    extend: 'Ext.form.Panel',
    xtype: 'company_form',
    requires: ['Ext.button.Button', 'Ext.form.FieldSet', 'Ext.form.Panel', 'Ext.form.field.ComboBox', 'Ext.form.field.Hidden', 'Ext.form.field.Text', 'Ext.layout.container.Anchor', 'Ext.layout.container.Fit', 'Ext.layout.container.HBox'],
    defaults: {
        anchor: '100%',
        msgTarget: 'side',
        labelWidth: 150
    },
    items: [{
        xtype: 'hiddenfield',
        name: 'pk'
    }, {
        fieldLabel: 'Nombre Empresa',
        name: 'name',
        allowBlank: false,
        xtype: 'textfield'
    }, {
        fieldLabel: 'Dirección',
        name: 'direction',
        allowBlank: false,
        xtype: 'textfield'
    }, {
        fieldLabel: 'Nit',
        name: 'nit',
        xtype: 'textfield'
    }, {
        fieldLabel: 'Sitio web',
        name: 'website',
        xtype: 'textfield'
    }, {
        fieldLabel: 'Correo electrónico',
        name: 'email',
        vtype: 'email',
        xtype: 'textfield'
    }],
    initComponent: function () {
        this.callParent();
    }
});