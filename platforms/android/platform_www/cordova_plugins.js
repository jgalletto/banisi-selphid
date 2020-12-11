cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection",
        "navigator.network.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "fphi-cordova-selphid-widget-plugin.WidgetSelphIDConfig",
      "file": "plugins/fphi-cordova-selphid-widget-plugin/www/WidgetSelphIDConfig.js",
      "pluginId": "fphi-cordova-selphid-widget-plugin",
      "clobbers": [
        "facephi.selphid.config"
      ]
    },
    {
      "id": "fphi-cordova-selphid-widget-plugin.WidgetSelphIDErrorType",
      "file": "plugins/fphi-cordova-selphid-widget-plugin/www/WidgetSelphIDErrorType.js",
      "pluginId": "fphi-cordova-selphid-widget-plugin",
      "clobbers": [
        "facephi.selphid.error"
      ]
    },
    {
      "id": "fphi-cordova-selphid-widget-plugin.WidgetSelphIDFinishStatus",
      "file": "plugins/fphi-cordova-selphid-widget-plugin/www/WidgetSelphIDFinishStatus.js",
      "pluginId": "fphi-cordova-selphid-widget-plugin",
      "clobbers": [
        "facephi.selphid.finish"
      ]
    },
    {
      "id": "fphi-cordova-selphid-widget-plugin.WidgetSelphIDOperation",
      "file": "plugins/fphi-cordova-selphid-widget-plugin/www/WidgetSelphIDOperation.js",
      "pluginId": "fphi-cordova-selphid-widget-plugin",
      "clobbers": [
        "facephi.selphid.operation"
      ]
    },
    {
      "id": "fphi-cordova-selphid-widget-plugin.WidgetSelphIDResult",
      "file": "plugins/fphi-cordova-selphid-widget-plugin/www/WidgetSelphIDResult.js",
      "pluginId": "fphi-cordova-selphid-widget-plugin",
      "clobbers": [
        "facephi.selphid.result"
      ]
    },
    {
      "id": "fphi-cordova-selphid-widget-plugin.WidgetSelphIDUtils",
      "file": "plugins/fphi-cordova-selphid-widget-plugin/www/WidgetSelphIDUtils.js",
      "pluginId": "fphi-cordova-selphid-widget-plugin",
      "clobbers": [
        "facephi.selphid.utils"
      ]
    },
    {
      "id": "fphi-cordova-selphid-widget-plugin.WidgetSelphIDFacephi",
      "file": "plugins/fphi-cordova-selphid-widget-plugin/www/WidgetSelphIDFacephi.js",
      "pluginId": "fphi-cordova-selphid-widget-plugin",
      "clobbers": [
        "facephi.selphid.universal"
      ]
    },
    {
      "id": "fphi-cordova-selphid-widget-plugin.WidgetSelphIDScanMode",
      "file": "plugins/fphi-cordova-selphid-widget-plugin/www/WidgetSelphIDScanMode.js",
      "pluginId": "fphi-cordova-selphid-widget-plugin",
      "clobbers": [
        "facephi.selphid.scanmode"
      ]
    },
    {
      "id": "fphi-cordova-selphid-widget-plugin.WidgetSelphIDDocumentType",
      "file": "plugins/fphi-cordova-selphid-widget-plugin/www/WidgetSelphIDDocumentType.js",
      "pluginId": "fphi-cordova-selphid-widget-plugin",
      "clobbers": [
        "facephi.selphid.doctype"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-network-information": "1.2.1",
    "cordova-plugin-whitelist": "1.3.3",
    "fphi-cordova-selphid-widget-plugin": "1.2.4"
  };
});