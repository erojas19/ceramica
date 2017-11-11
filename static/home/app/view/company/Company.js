Ext.define('ceramica2.view.company.Company', {
  extend: 'Ext.panel.Panel',
  requires: ['Ext.button.Button', 'Ext.layout.container.VBox', 'ceramica2.view.company.CompanyForm', 'ceramica2.view.company.CompanyController'],
  xtype: 'company_main',
  controller: 'company',
  layout: 'border',
  border: true,
  items: [{
    region: 'center',
    layout: 'fit',
    items: [{
      layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
      },
      items: [{
        flex: 1,
        border: false,
        padding: 10,
        xtype: 'company_form',
        listeners: {
          afterrender: 'onLoadCompany'
        },
        dockedItems: [{
          xtype: 'toolbar',
          dock: 'bottom',
          items: ['->', {
            xtype: 'button',
            text: "Actualizar y guardar",
            listeners: {
              click: 'onSaveUpdate'
            }
          }]
        }]
      }]
    }]
  }]
});