// Main Page. Implements the navigation to other pages
(function () {

    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {

        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // This application has been suspended. Save application state here.
    };

    function onResume(event) {
        // This application has been reactivated. Restore application state here.
        // IMPORTANT: The APP returns to this function when there was a memory problem during plugin execution.      
        // This application has been reactivated. Restore application state here.

        if(event.pendingResult) {
            // Status codes can be found in PluginResult.java
            if(event.pendingResult.pluginStatus === "OK") {            
                //  Here must return the value of processing User Control if is a success.
                if (event.pendingResult.result && event.pendingResult.result != null) {
                    var data = JSON.parse(event.pendingResult.result);
                    switch (parseInt(data.finishStatus)) {
                        case WidgetFinishStatus.Ok: // OK
                            break;
                        case WidgetFinishStatus.Error: // Error
                            if (data.errorType) {
                                if (parseInt(data.errorType) === WidgetErrorType.UnknownError) // Unknown Error
                                {
                                    errorAppResultCallback(fphi_str_unknown_error);
                                }                            
                                if (parseInt(data.errorType) === WidgetErrorType.HardwareError) // Settings Permission Denied
                                {
                                    errorAppResultCallback(fphi_str_low_memory); 
                                }
                            }
                            else {
                                errorAppResultCallback(fphi_str_unknown_error);
                            }
                            return;                  
                        default:
                    }
                }
            } 
        }  
    };

})();

function goStandardCapture() {

    showStandardCapture(); // standardCapture.js

    return true;
};

function goWizardCapture() {

     showWizardCapture(); // wizardCapture.js

    return true;
};