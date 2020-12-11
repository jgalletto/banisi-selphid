cordova.define("fphi-cordova-selphid-widget-plugin.WidgetSelphIDFacephi", function(require, exports, module) {
var exec = require("cordova/exec");
/**
 * Calls the native code of the Widget SelphID Plugin. 
 * @param Callback successCallback		The callback for the success event.
 * @param Callback errorCallback 		The callback for the error event.
 * @param WidgetSelphIDOperation operation  The operation of the Widget execution.
 * @param String resourcesPath 		Name of the resources bundle used by the plugin.
 * @param String license 			Widget license formatted in base64.
 * @param WidgetSelphIDConfig config        Optional parameter. Aditional configuration params for the widget.
 */
StartCapture = function(operation, resourcesPath, license, previousOCRData, config) {
    return new Promise((resolve, reject) => {
        try {
            actualConfig = [];
            action = operation;

            switch (arguments.length) {
                case 5:
                    if (previousOCRData == null)
                        actualConfig = [{ "operation": operation, "resourcesPath": resourcesPath, "license": license, "config": config }];
                    else
                        actualConfig = [{ "operation": operation, "resourcesPath": resourcesPath, "license": license, "previousOCRData": previousOCRData, "config": config }];
                    break;
                default:
                    break;
            }
        } catch (e) {}

        exec(
            resolve, // success callback function
            reject, // error callback function
            'WidgetSelphID', // mapped to our native Java class called "WidgetSelphIDFacephi"
            'StartCapture', // with this action name
            actualConfig
        );
    });
};

StartTest = function(operation, resourcesPath, license, previousOCRData, config, testImage) {
    return new Promise((resolve, reject) => {
        actualConfig = [];
        action = operation;

        if (previousOCRData == null)
            resolve = [{ "operation": operation, "resourcesPath": resourcesPath, "license": license, "previousOCRData": previousOCRData, "config": config }];
        else
            actualConfig = [{ "operation": operation, "resourcesPath": resourcesPath, "license": license, "previousOCRData": previousOCRData, "config": config, "testImage": testImage }];

        exec(
            resolve, // success callback function
            reject, // error callback function
            'WidgetSelphID', // mapped to our native Java class called "WidgetSelphIDFacephi"
            'StartTest', // with this action name
            actualConfig
        );
    });
};

module.exports.StartTest = StartTest;
module.exports.StartCapture = StartCapture;
});
