Ext.define('ceramica2.view.main.Main', {
  extend: 'Ext.container.Container',
  plugins: 'viewport',
  xtype: 'app-main',
  requires: ['ceramica2.view.main.Header', 'ceramica2.view.main.Footer', 'ceramica2.view.main.Panel', 'ceramica2.view.main.MainController', 'ceramica2.view.main.MainModel', 'ceramica2.view.menu.Accordion'],
  controller: 'main',
  viewModel: {
    type: 'main'
  },
  layout: {
    type: 'border'
  },
  items: [{
    region: 'center',
    xtype: 'mainpanel'
  }, {
    xtype: 'appheader',
    region: 'north'
  }, {
    xtype: 'appfooter',
    region: 'south'
  }, {
    xtype: 'mainmenu',
    region: 'west',
    plugins: 'responsive',
    responsiveConfig: {
      'width < 768': {
        visible: false
      },
      'width >= 768': {
        visible: true
      }
    }
  }]
});