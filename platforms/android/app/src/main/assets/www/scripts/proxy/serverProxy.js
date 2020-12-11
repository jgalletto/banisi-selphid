/**
 * Gets the list of users stored in the database.
 * @param Function callBackServerSuccess       The callback that processes the web service result when server responds ok.
 * @param Function callBackServerError   The callback that processes the web service result when server responds with an error.
 */
function serverCallGetUsers(callBackServerSuccess, callBackServerError) {
    var soapRequest = '<?xml version="1.0" encoding="utf-8"?>' +
                        '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
                        '<soap:Body>' +
                            '<getUsers xmlns="http://tempuri.org/"/>' +
                        '</soap:Body>' +
                        '</soap:Envelope>';
					
    if (serverUseJava) {
        $.ajax({
            url: serverPath,
            type: "POST",
            headers: {
                SOAPAction: serverPath + '/getUsers'
            },
            contentType: "text/xml",
            dataType: 'xml',
            data: soapRequest,
            success: function (responseData) {
                if (responseData.documentElement.textContent) {
                    callBackServerSuccess(parseXMLUserArray(responseData));
                }
                else {
                    callBackServerSuccess(0);
                }
            },
            error: callBackServerError
        });


    } else {
        $.ajax({
            url: serverPath,
            type: "POST",
            contentType: "text/xml",
            dataType: 'xml',
            data: soapRequest,
            success: function (responseData) {
                if (responseData.documentElement.textContent) {
                    callBackServerSuccess(parseXMLUserArray(responseData));
                }
                else {
                    callBackServerSuccess(0);
                }
            },
            error: callBackServerError
        });
    }
};

/**
 * Authenticates a user registered the database by id.
 * @param Boolean identifier               The user identifier.
 * @param Boolean actualTemplate           The user's actual template.
 * @param Function callBackServerSuccess   The callback that processes the web service result when server responds ok.
 * @param Function callBackServerError     The callback that processes the web service result when server responds with an error.
 */
function serverCallAuthenticate(identifier, actualTemplate, callBackServerSuccess, callBackServerError) {
    var soapRequest = '<?xml version="1.0" encoding="utf-8"?>' +
                        '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
                        '<soap:Body>' +
                            '<authenticate xmlns="http://tempuri.org/">' +
                            '<identifier>' + identifier + '</identifier>' +
                            '<template>' + actualTemplate + '</template>' +
                            '</authenticate>' +
                        '</soap:Body>' +
                        '</soap:Envelope>';
    if (serverUseJava) {
        $.ajax({
            url: serverPath,
            type: "POST",
            headers: {
                SOAPAction: serverPath + '/authenticate'
            },
            contentType: "text/xml",
            dataType: 'xml',
            data: soapRequest,
            success: function (responseData) {
                if (responseData.documentElement.textContent) {
                    callBackServerSuccess(responseData.documentElement.textContent);
                }
                else {
                    callBackServerSuccess(0);
                }
            },
            error: callBackServerError
        });

    } else {
        $.ajax({
            url: serverPath,
            type: "POST",
            contentType: "text/xml",
            dataType: 'xml',
            data: soapRequest,
            success: function (responseData) {
                if (responseData.documentElement.textContent) {
                    callBackServerSuccess(responseData.documentElement.textContent);
                }
                else {
                    callBackServerSuccess(0);
                }
            },
            error: callBackServerError
        });
    }
};


/**
 * Registers the user in the web service.
 * @param String username                  The username.
 * @param Boolean template                 The user's template.
 * @param Function callBackServerSuccess   The callback that processes the web service result when server responds ok.
 * @param Function callBackServerError     The callback that processes the web service result when server responds with an error.
 */
function serverCallRegister(username, template, callBackServerSuccess, callBackServerError) {
    var soapRequest = '<?xml version="1.0" encoding="utf-8"?>' +
                        '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
                        '<soap:Body>' +
                            '<createUser xmlns="http://tempuri.org/">' +
                            '<name>' + username + '</name>' +
                            '<template>' + template + '</template>' +
                            '</createUser>' +
                        '</soap:Body>' +
                        '</soap:Envelope>';

    if (serverUseJava) {
        return $.ajax({
            url: serverPath,
            type: 'POST',
            headers: {
                SOAPAction: serverPath + '/createUser'
            },
            contentType: "text/xml",
            dataType: 'xml',
            data: soapRequest,
            success: function (responseData) {
                callBackServerSuccess(responseData.documentElement.textContent);
            },
            error: callBackServerError
        });
    } else {
        return $.ajax({
            url: serverPath,
            type: 'POST',
            contentType: "text/xml",
            dataType: 'xml',
            data: soapRequest,
            success: function (responseData) {
                callBackServerSuccess(responseData.documentElement.textContent);
            },
            error: callBackServerError
        });
	}
};

/**
 * Deletes a user registered the database by id.
 * @param Boolean identifier                   The user identifier.
 * @param Function callBackServerSuccess       The callback that processes the web service result when server responds ok.
 * @param Function callBackServerError         The callback that processes the web service result when server responds with an error.
 */
function serverCallDelete(identifier, callBackServerSuccess, callBackServerError) {

    var soapRequest = '<?xml version="1.0" encoding="utf-8"?>' +
                        '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
                        '<soap:Body>' +
                            '<delete xmlns="http://tempuri.org/">' +
                            '<identifier>' + identifier + '</identifier>' +
                            '</delete>' +
                        '</soap:Body>' +
                        '</soap:Envelope>';

    if (serverUseJava){
        $.ajax({
            url: serverPath,
            type: "POST",
            headers: {
                SOAPAction: serverPath + '/delete'
            },
            contentType: "text/xml",
            dataType: 'xml',
            data: soapRequest,
            success: function (responseData) {
                callBackServerSuccess(responseData.documentElement.textContent);
            },
            error: callBackServerError
        });
    }
    else {
        $.ajax({
            url: serverPath,
            type: "POST",
            contentType: "text/xml",
            dataType: 'xml',
            data: soapRequest,
            success: function (responseData) {
                callBackServerSuccess(responseData.documentElement.textContent);
            },
            error: callBackServerError
        });
    }
};

/**
 * Parses the array of the user.
 * @param String response The string with the response.
 */
function parseXMLUserArray(response) {

    var userField = 0;
    var userArray = [];
    var user = {
        Id: null,
        Name: null
    };

    if (serverUseJava) {
        var doc = $(response);
        doc.find('getUsersResponse *').each(function (index, el) {
            if (userField % 3 != 0) {
                if (userField % 3 == 1) {
                    user.Id = $.trim(el.textContent);
                }
                if (userField % 3 == 2) {
                    user.Name = $.trim(el.textContent);
                    userArray.push(user);
                    user = {
                        Id: null,
                        Name: null
                    };
                }
            }
            userField++;
        });
    }
    else {
        var doc = $(response.documentElement);
        doc.find('DtoUserSerializer *').each(function (index, el) {
            userField++;
            if (userField > 1) {
                userField = 0;
                user.Name = $.trim(el.textContent);
                userArray.push(user);
                user = {
                    Id: null,
                    Name: null
                };
            }
            else {
                user.Id = $.trim(el.textContent);
            }
        });
    }

    return userArray;
}