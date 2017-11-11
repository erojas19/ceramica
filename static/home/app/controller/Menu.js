Ext.define('ceramica2.controller.Menu', {
  extend: 'Ext.app.Controller',
  requires: ['ceramica2.view.menu.Tree'],
  stores: ['Menu'],
  refs: [{
    ref: 'mainPanel',
    selector: 'mainpanel'
  }],
  renderDynamicMenu: function (view, options) {
    var dynamicMenus = [];
    view.body.mask('Cargando Menu... Espere por favor');
    this.getMenuStore().load(function (records, op, success) {
      Ext.each(records, function (root) {
        var menu = Ext.create('ceramica2.view.menu.Tree', {
          title: root.get('text'),
          icon_cls: root.get('icon_cls')
        });
        var treeNodeStore = root.items();
        var nodes = [];
        var item;
        for (var i = 0; i < treeNodeStore.getCount(); i++) {
          item = treeNodeStore.getAt(i);
          nodes.push({
            text: item.get('text'),
            leaf: true,
            id: item.get('id'),
            class_name: item.get('class_name'),
            require_text: item.get('require_text'),
            require_source: item.get('require_source')
          });
        }
        menu.getRootNode().appendChild(nodes);
        dynamicMenus.push(menu);
      });
      view.add(dynamicMenus);
      view.body.unmask();
    });
  },
  onTreePanelItemClick: function (view, record, item, index, event, options) {
    var mainPanel = this.getMainPanel();
    var newTab = mainPanel.items.findBy(function (tab) {
      return tab.xtype === record.get('class_name');
    });
    if (!newTab) {
      Ext.Loader.loadScript({
        url: record.get('require_source'),
        onLoad: function () {
          Ext.require(record.get('require_text'), function () {
            newTab = mainPanel.add({
              xtype: record.get('class_name'),
              icon_class: record.get('icon_class'),
              title: record.get('text'),
              require_text: record.get('require_text'),
              require_source: record.get('require_source'),
              closable: true
            });
            mainPanel.setActiveTab(newTab);
          });
        },
        onError:function(){
          ceramica2.util.Util.showErrorMsg('Error al cargar el scripts');
        }
      });
    } else {
      mainPanel.setActiveTab(newTab);
    }
  },
  init: function () {
    this.control({
      "menutree": {
        itemclick: this.onTreePanelItemClick
      },
      "mainmenu": {
        render: this.renderDynamicMenu
      }
    });
  }
});