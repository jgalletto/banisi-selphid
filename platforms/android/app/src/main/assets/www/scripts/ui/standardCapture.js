/**
 * Step by step capture process (1- Front, 2- Back, 3-Face, 4- Send the info to the server).
 *
 */

//----------------------------------------------FacePhi Widget-------------------------------------------------------------------------------// 
/** Global parameters for testing environment **/
var tokenBackDocument = null;
 var tokenFrontDocument = null;
 var tokenRawBackDocument = null;
 var tokenRawFrontDocument = null;
 var tokenFaceImage = null;
 var tokenOCR = null;
 var ocrData = null;
var widgetLicense;

/**
 * Capture process button. Launches the front capture process.
 *
 * @method showWidgetRegister
 */
function showStandardCapture() {
	if(window.cordova.platformId === "android") {
		widgetLicense = widgetLicenseAndroid;
	} else {
		widgetLicense = widgetLicenseiOS;
	}
	
    var config = new window.facephi.selphid.config.WidgetSelphIDConfig();
    // This param contains the path to the widget resources. The resources .zip file must be stored in 'assets' folder.
    // TODO Uncomment to set additional configuration.
	// config.showResultAfterCapture = true;
	// config.showTutorial = false;
	// config.scanMode = window.facephi.selphid.scanmode.WidgetSelphIDScanMode.SearchMode;
	// config.specificData = "ES|<ALL>";	
    // Launch the widget process in authentication mode.
    window.facephi.selphid.universal.StartCapture(onSuccessFrontCapture, onErrorFrontCapture, // Success and error callbacks
                                                  window.facephi.selphid.operation.WidgetSelphIDOperation.CaptureFront, // The capture operation
                                                  resourcesBundlePathSelphID, // Name of the bundle with all of the widget resources
                                                  widgetLicense, // Widget license
                                                  ocrData, // Data extracted from the previous capture process to merge with the next operation (May be null)
                                                  config); // Optional widget configuration option
												  
	return false;    
};

/**
 * The callback method that receives the result of the Widget plugin if the process was executed correctly
 *
 * @method onSuccessWidgetExtraction
 * @param String result Object with response data
 */
function onSuccessFrontCapture(result) {
    
    //var username = document.getElementById('userName').value;
    
    // Here must return the value of processing Widget if is a success.
    if (result != null && result) {
        var data = (result);
        
        switch (parseInt(data['finishStatus'])) {
            case WidgetSelphIDFinishStatus.Ok: // OK
                break;
            case WidgetSelphIDFinishStatus.Error: // Error
                if (data['errorType']) {
                    if (parseInt(data['errorType']) === WidgetSelphIDErrorType.UnknownError) // Unknown Error
                    {
                        showErrorUI(fphi_str_unknown_error);
                    }
                    if (parseInt(data['errorType']) === WidgetSelphIDErrorType.CameraPermissionDenied) // Camera Permission Denied
                    {
                        showErrorUI(fphi_str_camera_permission_denied);
                    }
                    if (parseInt(data['errorType']) === WidgetSelphIDErrorType.SettingsPermissionDenied) // Settings Permission Denied
                    {
                        showErrorUI(fphi_str_settings_permission_denied);
                    }
                    if (parseInt(data['errorType']) === WidgetSelphIDErrorType.HardwareError) // Settings Permission Denied
                    {
                        showErrorUI(fphi_str_hardware_error);
                    }
                    if (parseInt(data['errorType']) === WidgetSelphIDErrorType.ExtractionLicenseError)
                    {
                        showErrorUI(fphi_str_generic_extraction_license);
                    }
                    if (parseInt(data['errorType']) === WidgetSelphIDErrorType.UnexpectedCaptureError)
                    {
                        showErrorUI(fphi_str_generic_unexpected_captured);
                    }
                    if (parseInt(data['errorType']) === WidgetSelphIDErrorType.ControlNotInitializedError)
                    {
                        showErrorUI(fphi_str_generic_control_not_initialized);
                    }
                    if (parseInt(data['errorType']) === WidgetSelphIDErrorType.BadExtractorConfiguration)
                    {
                        showErrorUI(fphi_str_generic_bad_extractor_conf);
                    }
                }
                else {
                    showErrorUI(fphi_str_unknown_error);
                }
                return;
            case WidgetSelphIDFinishStatus.CancelByUser: // CancelByUser
                showMessageUI(fphi_str_stopped_manually);
                return;
            case WidgetSelphIDFinishStatus.Timeout: // Timeout
                showMessageUI(fphi_str_timeout);
                return;
            default:
        }
        
        // The Process the Result Data.
        processCaptureDataResult(data);
        
        // Launch back capture
        var config = new window.facephi.selphid.config.WidgetSelphIDConfig();
         window.facephi.selphid.universal.StartCapture(onSuccessBackCapture, onErrorBackCapture, window.facephi.selphid.operation.WidgetSelphIDOperation.CaptureBack, resourcesBundlePathSelphID, widgetLicense, ocrData, config);
        
    } else {
        showErrorUI(fphi_str_unknown_error);
    }
};

function processCaptureDataResult(data) {
	 if(data['docData'])
		ocrData = data['docData'];
	 
	 if (data['tokenFrontDocument']) { // If the front image is correctly captured, We launch the Back Capture Process.
		tokenFrontDocument = data['tokenFrontDocument'];
	 }
	 
	 if (data['tokenBackDocument']) { // If the front image is correctly captured, We launch the Back Capture Process.
		tokenBackDocument = data['tokenBackDocument'];
	 }
	 
	 if (data['tokenFaceImage']) { // If the front image is correctly captured, We launch the Back Capture Process.
		tokenFaceImage = data['tokenFaceImage'];
	 }
	 
	 if (data['tokenRawFrontDocument']) { // If the front image is correctly captured, We launch the Back Capture Process.
		tokenRawBackDocument = data['tokenRawBackDocument'];
	 }
	 
	 if (data['tokenRawFrontDocument']) { // If the front image is correctly captured, We launch the Back Capture Process.
		tokenRawFrontDocument = data['tokenRawFrontDocument'];
	}
	 
	 if (data['tokenOCR']) { // If the front image is correctly captured, We launch the Back Capture Process.
		tokenOCR = data['tokenOCR'];
	 }
 
 };
 
 /**
 * Event launched when Widget plugin launches an exception/error.
 * @method  onErrorWidgetExtraction
 * @param String result Object with response data
 */
function onErrorFrontCapture(result) {
    
    if (result != null && result) {
        
        if (result.responseText)
            showErrorUI(result.responseText);
        else {
            var data = (result);
            switch (parseInt(data['finishStatus'])) {
                    // Shows the result operation.
                case WidgetSelphIDFinishStatus.Error: // Error
                    if (data['errorType']) {
                        if (parseInt(data['errorType']) === WidgetSelphIDErrorType.UnknownError) // Unknown Error
                        {
                            showErrorUI(fphi_str_unknown_error);
                        }
                        if (parseInt(data['errorType']) === WidgetSelphIDErrorType.CameraPermissionDenied) // Camera Permission Denied
                        {
                            showErrorUI(fphi_str_camera_permission_denied);
                        }
                        if (parseInt(data['errorType']) === WidgetSelphIDErrorType.SettingsPermissionDenied) // Settings Permission Denied
                        {
                            showErrorUI(fphi_str_settings_permission_denied);
                        }
                        if (parseInt(data['errorType']) === WidgetSelphIDErrorType.HardwareError) // Settings Permission Denied
                        {
                            showErrorUI(fphi_str_hardware_error);
                        }
                    }
                    else {
                        showErrorUI(fphi_str_unknown_error);
                    }
                    break;
                default:
                    showErrorUI(fphi_str_unknown_error);
            }
        }
    }
    
};


/**
 * The callback method that receives the result of the Widget plugin if the process was executed correctly
 *
 * @method onSuccessWidgetExtraction
 * @param String result Object with response data
 */
function onSuccessBackCapture(result) {
 
	 //var username = document.getElementById('userName').value;
	 
	 // Here must return the value of processing Widget if is a success.
	 if (result != null && result) {
	 var data = (result);
	 
	 switch (parseInt(data['finishStatus'])) {
		 case WidgetSelphIDFinishStatus.Ok: // OK
		 break;
		 case WidgetSelphIDFinishStatus.Error: // Error
		 if (data['errorType']) {
			 if (parseInt(data['errorType']) === WidgetSelphIDErrorType.UnknownError) // Unknown Error
			 {
			 showErrorUI(fphi_str_unknown_error);
			 }
			 if (parseInt(data['errorType']) === WidgetSelphIDErrorType.CameraPermissionDenied) // Camera Permission Denied
			 {
			 showErrorUI(fphi_str_camera_permission_denied);
			 }
			 if (parseInt(data['errorType']) === WidgetSelphIDErrorType.SettingsPermissionDenied) // Settings Permission Denied
			 {
			 showErrorUI(fphi_str_settings_permission_denied);
			 }
			 if (parseInt(data['errorType']) === WidgetSelphIDErrorType.HardwareError) // Settings Permission Denied
			 {
			 showErrorUI(fphi_str_hardware_error);
			 }
			 if (parseInt(data['errorType']) === WidgetSelphIDErrorType.ExtractionLicenseError)
			 {
			 showErrorUI(fphi_str_generic_extraction_license);
			 }
			 if (parseInt(data['errorType']) === WidgetSelphIDErrorType.UnexpectedCaptureError)
			 {
			 showErrorUI(fphi_str_generic_unexpected_captured);
			 }
			 if (parseInt(data['errorType']) === WidgetSelphIDErrorType.ControlNotInitializedError)
			 {
			 showErrorUI(fphi_str_generic_control_not_initialized);
			 }
			 if (parseInt(data['errorType']) === WidgetSelphIDErrorType.BadExtractorConfiguration)
			 {
			 showErrorUI(fphi_str_generic_bad_extractor_conf);
			 }
		 }
		 else {
			showErrorUI(fphi_str_unknown_error);
		 }
		 return;
		 case WidgetSelphIDFinishStatus.CancelByUser: // CancelByUser
			showMessageUI(fphi_str_stopped_manually);
			return;
		 case WidgetSelphIDFinishStatus.Timeout: // Timeout
			showMessageUI(fphi_str_timeout);
			return;
		 default:
	 }
	 
	 // The OCR Data.
	 if(data['documentData']) {
		 ocrData = data['documentData'];
		 
		 // TODO Test data
		 alert(JSON.stringify(ocrData, null, "\t").replace(/\\/g, ""));
	 }

	 } else {
		showErrorUI(fphi_str_unknown_error);
	 }
 };
 
 /**
 * Event launched when Widget plugin launches an exception/error.
 * @method  onErrorWidgetExtraction
 * @param String result Object with response data
 */
function onErrorBackCapture(result) {
 
	 if (result != null && result) {
	 
	 if (result.responseText)
			showErrorUI(result.responseText);
		 else {
			 var data = (result);
			 switch (parseInt(data['finishStatus'])) {
			 // Shows the result operation.
			 case WidgetSelphIDFinishStatus.Error: // Error
				 if (data['errorType']) {
					 if (parseInt(data['errorType']) === WidgetSelphIDErrorType.UnknownError) // Unknown Error
					 {
						showErrorUI(fphi_str_unknown_error);
					 }
					 if (parseInt(data['errorType']) === WidgetSelphIDErrorType.CameraPermissionDenied) // Camera Permission Denied
					 {
						showErrorUI(fphi_str_camera_permission_denied);
					 }
					 if (parseInt(data['errorType']) === WidgetSelphIDErrorType.SettingsPermissionDenied) // Settings Permission Denied
					 {
						showErrorUI(fphi_str_settings_permission_denied);
					 }
					 if (parseInt(data['errorType']) === WidgetSelphIDErrorType.HardwareError) // Settings Permission Denied
					 {
						showErrorUI(fphi_str_hardware_error);
					 }
				}
				else {
					showErrorUI(fphi_str_unknown_error);
			}
			 break;
			 default:
				showErrorUI(fphi_str_unknown_error);
			 }
		 }
	 }
};
