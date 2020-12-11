/*
 * Messages from JavaScript Apps 
 */

 // RESOURCES String. 
 // This param is the name of the zip file with the resources of the widget.
 const resourcesBundlePathSelphID = "fphi-selphid-widget-resources-selphid-1.0"; // SelphID bundle
 
// Widget license
//const widgetLicense = "" // TODO Include license for Android or iOS 
const widgetLicenseAndroid = "{\n"+
"    \"customer\": \"Facephi\",\n"+
"    \"documentType\": \"LicenseEnvelope\",\n"+
"    \"license\": {\n"+
"        \"comments\": \"Programming Example\",\n"+
"        \"dateEnd\": \"2020-10-29\",\n"+
"        \"extraData\": \"3D430F0C330D073504270A331D04230F17476A4A1A1416222411293F1F535A111C05332E38513327092E2D1407573C0333743753293E2A05100F0A4E2A5C1F1E2F15343A59210100052667211E0C0B3030142A070B061A0027315C345332103D1C2272090A36250A381713193F1E322E2D3353273C512D2A190A16665D306D182A27602500772E2257165E2E6912303619093A175136571A235872022F321806183423194A633F332C292D0E22121F2930172E29020435302E36265C590E3122361A25113509170A3D1F10705820293558112337391663215A205507030A290575360A2069210E74521632311A33042E150F7B510E75242A0C7B06283433321D340033772E1A35232E1E2E2E3414042D38740F2B543802062D28271D070927234A075608293E15190556672B043F340D5C665C5F09250A2D36070F153433291C3A283327414972040025040D16353C062D040D213F0B1C2B040D1172524B3D3D0D457048491A430010231C062B0411397252491A432504330D192E083F477C3407664143450C4A0D2902160835061D121813000C4A53663D4129390B0C281206203E1E0C2A0E13000C4A451A0F4345704835640D0A0635061A233D415F7013352841434570484966413F473307042B040D1123344B7C413F47001A06211302083D01072141261D3105192A043F477C340766414345704849663D4101311C0C030F07397252491A43515562584477514E5769344B6A3D0D45704849664143450C4A052F02060B230D2D2902160835061D1A4359450C4A1A1416222411293F1F535A111C05332E38513327092E2D1407573C0333743753293E2A05100F0A4E2A5C1F1E2F15343A59210100052667211E0C0B3030142A070B061A0027315C345332103D1C2272090A36250A381713193F1E322E2D3353273C512D2A190A16665D306D182A27602500772E2257165E2E6912303619093A175136571A235872022F321806183423194A633F332C292D0E22121F2930172E29020435302E36265C590E3122361A25113509170A3D1F10705820293558112337391663215A205507030A290575360A2069210E74521632311A33042E150F7B510E75242A0C7B06283433321D340033772E1A35232E1E2E2E3414042D38740F2B543802062D28271D070927234A075608293E15190556672B043F340D5C665C5F09250A2D36070F153433291C3A2833273F477C340766414345704849663D410A23344B7C413F4711060D340E0A010C4A451A0F434570484966414339721808250A02023526082B043F476A483564020C087E0E082504130D39461E2F050400244619233D41490C0649664143457048491A4313173F0C1C25153F476A483564320609200020023D41490C0649664143457048491A431500221B00290F3F476A483564504D550C4A35284143457015451A0F43457048356411110A26010D23133F476A4835642702063538012F3D41393E154B6A430F0A370F002806415F36090535041E\",\n"+
"        \"licenseDocument\": true,\n"+
"        \"licenseFacial\": false,\n"+
"        \"licenseTokenDocument\": true,\n"+
"        \"logging\": false,\n"+
"        \"os\": \"Android\",\n"+
"        \"packageName\": \"com.facephi.widget.pe\",\n"+
"        \"product\": \"SelphID\",\n"+
"        \"version\": \"1.0\"\n"+
"    },\n"+
"    \"provider\": \"FacePhi\"\n"+
"}"; //Android
                                                
const widgetLicenseiOS =  "{\n" +
"    \"customer\": \"Facephi\",\n" +
"    \"documentType\": \"LicenseEnvelope\",\n" +
"    \"license\": {\n" +
"        \"comments\": \"Programming Example\",\n" +
"        \"dateEnd\": \"2020-10-29\",\n" +
"        \"extraData\": \"3D430F0C330D073504270A331D04230F17476A4A1A14162224112D3F1F535A111C05332E38513327092E2D1407573C0333743753293E2A052955021408050D702909503E0E0A1F0F521D3E0D0A3704111F2A2B07732B0D016611280D0B2A27362A420F24105D6323336D3707153D013910322D0964112D35105B28291B3C2D102556662E1D0A0E512D3D29002C02564A272A1C13370200095024011624316243242D343151225D3A07535552222D251C282E22690F587602391F13471A0F580052252F0D32331B30002D3C2402250C13583A71042650321A2D2558301F0A035F1F18040D1B02336D242C1F691B2C2D05505407503C2914063205262B0F3705313B5C317E563A2C330A2F3E072051112902214A170A1F19331F3908501A3D2208090F34601A1D04332B37163F2A7E155223000C332928271D29211B3C0E0F553E3B0F7015414972040025040D16353C062D040D213F0B1C2B040D1172524B3D3D0D457048491A430010231C062B0411397252491A432504330D192E083F477C3407664143450C4A0D2902160835061D121813000C4A53663D4129390B0C281206203E1E0C2A0E13000C4A451A0F4345704835640D0A0635061A233D415F7013352841434570484966413F473307042B040D1123344B7C413F47001A06211302083D01072141261D3105192A043F477C340766414345704849663D4101311C0C030F07397252491A43515562584477514E5769344B6A3D0D45704849664143450C4A052F02060B230D2D2902160835061D1A4359450C4A1A14162224112D3F1F535A111C05332E38513327092E2D1407573C0333743753293E2A052955021408050D702909503E0E0A1F0F521D3E0D0A3704111F2A2B07732B0D016611280D0B2A27362A420F24105D6323336D3707153D013910322D0964112D35105B28291B3C2D102556662E1D0A0E512D3D29002C02564A272A1C13370200095024011624316243242D343151225D3A07535552222D251C282E22690F587602391F13471A0F580052252F0D32331B30002D3C2402250C13583A71042650321A2D2558301F0A035F1F18040D1B02336D242C1F691B2C2D05505407503C2914063205262B0F3705313B5C317E563A2C330A2F3E072051112902214A170A1F19331F3908501A3D2208090F34601A1D04332B37163F2A7E155223000C332928271D29211B3C0E0F553E3B0F70153F477C340766414345704849663D410A23344B7C413F4739273A1A434F393E484966414345704835641102063B090E232F020835344B7C413F47330704680702063518012F4F140C340F0C324F13000C4A451A0F43457048496641433972181B2905160624344B7C413F47030D0536092A210C4A451A0F434570484966414339721E0C34120A0A3E344B7C413F476146591A433F0B704849661C4F393E484966413F47201A063008070022344B7C413F4716090A23310B0C0C4A35281C414972040621060A0B374A5320000F163515\",\n" +
"        \"licenseDocument\": true,\n" +
"        \"licenseFacial\": false,\n" +
"        \"licenseTokenDocument\": true,\n" +
"        \"logging\": false,\n" +
"        \"os\": \"iOS\",\n" +
"        \"packageName\": \"com.facephi.widget.pe\",\n" +
"        \"product\": \"SelphID\",\n" +
"        \"version\": \"1.0\"\n" +
"    },\n" +
"    \"provider\": \"FacePhi\"\n" +
"}";// iOS

// FORM MESSAGES
const fphi_str_welcome = "Welcome";
const fphi_str_unable_register = "Unable to perform the registration.";

/// FINISH_STATUS MESSAGES
const fphi_str_stopped_manually = "User cancelled the process.";
const fphi_str_timeout = "Process finished by timeout condition.";
const fphi_str_unknown_error = "Unexpected error.";


// ERROR TYPE MESSAGES
const fphi_str_camera_permission_denied = "Camera permission are disabled.";
const fphi_str_settings_permission_denied = "Settings permission are disabled.";
const fphi_str_no_results_message = "No results found.";
const fphi_str_low_memory = "Process cancelled due to low memory issues.";
const fphi_str_hardware_error = "A hardware internal error has occurred.";
const fphi_str_user_error = "Username is required.";

// LIVENESS DIAGNOSTIC MESSAGES
const fphi_str_photo_detected = "Photo is detected.";
const fphi_str_not_rated = "Not rated.";
const fphi_str_unsuccess = "Remain still and blink next time.";
const fphi_str_unsuccesslight = "Look for an illuminated place with no backlighting next time.";
const fphi_str_unsuccessglasses = "If you are wearing glasses, avoid the reflections next time.";
const fphi_str_unsuccesslowperformance = "The performance of the device is lower than expected.";

// DATABASE MANAGEMENT MESSAGES
const fphi_str_user_added = "The user has been added correctly.";
const fphi_str_authenticated = "User authenticated correctly.";
const fphi_str_not_authenticated = "User not authenticated.";
const fphi_str_user_not_added = "The user has not been added.";
const fphi_str_delete_user = "The user has been deleted correctly.";
const fphi_str_generic_error_auth = "Unable to perform the authentication.";
const fphi_str_generic_not_deleted = "Unable to delete the user.";
const fphi_str_generic_extraction_license = "The license data is not correct.";
const fphi_str_generic_unexpected_captured = "The capturing process has failed.";
const fphi_str_generic_control_not_initialized = "Unable to initialize the authentication.";
const fphi_str_generic_bad_extractor_conf = "The extractor configuration is not correct.";

// DATABASE EXCEPTION MESSAGES
const fphi_str_exception_notconnected = 'App can\'t connect with the database. Verify Network Connection.';
const fphi_str_exception_notfound = 'Requested page not found.';
const fphi_str_exception_internalerror = 'Internal server error.';
const fphi_str_exception_uncaught = 'Unexpected error.\n';


/**
* Method to show an error in the UI
* @method showErrorUI
* @param String message The message to show
*/
function showErrorUI(message) {

    if (!$("#popTitle") || !$("#popMessage") || !$("#popInfo")) {
        
        alert("Error:" + message);

        return;
    }

    // Shows the error message
    $("#popTitle").text("Error");

    $("#popMessage").text(message);

    $("#popInfo").popup("open");

    return;
};

/**
* Method to show a message in the UI
* @method showMessageUI
* @param String result The message to show
*/
function showMessageUI(message) {

    // Shows the message

    if (!$("#popTitle") || !$("#popMessage") || !$("#popInfo")) {

        alert(message);

        return;
    }

    $("#popTitle").text("Information");

    $("#popMessage").text(message);

    $("#popInfo").popup("open");

    return;

};

/**
 * Show the error in the UI
 * @method ShowError
 * @param String result The result object
 */
function ShowError(result) {

    // Shows the error
    if (result.status === 0) {
        showErrorUI(fphi_str_exception_notconnected);
    } else if (result.status === 404) {
        showErrorUI(fphi_str_exception_notfound);
    } else if (result.status === 500) {
        showErrorUI(fphi_str_exception_internalerror);
    }
    else {
        showErrorUI(fphi_str_exception_uncaught);
    }

}

