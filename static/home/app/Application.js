/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('ceramica2.Application', {
    extend: 'Ext.app.Application',
    name: 'ceramica2',
    appFolder: '/static/home/app',
    enableQuickTips: true,
    // requires: ['ceramica2.util.CrsfTokenHelper', 'ceramica2.view.user.User', 'ceramica2.view.product.Product', 'ceramica2.view.production.machine.Machine', 'ceramica2.view.company.Company', 'ceramica2.view.production.charge.Charge', 'ceramica2.view.production.burn.Burn', 'ceramica2.view.production.discharge.Discharge'],
    requires: ['ceramica2.util.CrsfTokenHelper'],
    stores: [
    ],
    controllers: [
        'Menu'
    ],
    launch: function () {
    },
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?', function (choice) {
            if (choice === 'yes') {
                window.location.reload();
            }
        });
    }
});