'use strict';

angular.module('directive-googleplus', [])
    .directive('googlePlusSignIn', function() {
        return {
            restricted: 'AE',
            transclude: true,
            template: '<span></span>',
            link: function (scope, element, attrs, ctrl, linker) {
                if (attrs.id == null || attrs.id == "") {
                    throw "You must provide 'id' attribute.";
                }
                if (attrs.callback == null || attrs.callback == "") {
                    throw "You must provide 'callBack' attribute.";
                }
                if (attrs.clientid == null || attrs.clientid == "") {
                    throw "You must provide a Google Plus Client Id.";
                }
                
                // get client id from attributes
                var ending = /\.apps\.googleusercontent\.com$/;
                attrs.clientid += (ending.test(attrs.clientid) ? '' : '.apps.googleusercontent.com');
                var clientId = attrs.clientid;
                
                 // load the G+ SDK.
                var sdkLoaded = false;
                if (!sdkLoaded) {
                    $.getScript("//apis.google.com/js/platform.js", function(data, textStatus, jqxhr) {
                        // initialize Auth2 with clientId
                        gapi.load('auth2', function () {
                            var googleAuthObj = gapi.auth2.init({
                                client_id: clientId,
                                cookie_policy: 'single_host_origin'
                            });
                            
                            googleAuthObj.attachClickHandler(attrs.id, {}, onSignInSuccess, null);
                            
                        });
                        
                        // render button
                        var options = {
                            'scope': 'profile email',
                            'width': 250,
                            'height': 50,
                            'longtitle': true,
                            'theme': 'dark',
                            'onsuccess': onSignInSuccess,
                            'onfailure': null
                        };
                          
                        gapi.signin2.render(attrs.id, options);
                        
                    });
                    
                    sdkLoaded = true;
                }
                
                function onSignInSuccess(googleUser) {
                    // hide google button after successful sign in
                    element[0].style.display = 'none';
                    
                    // bind callback function name to scope
                    scope.$apply(scope[attrs.callback](googleUser.getBasicProfile()));
                }
                
            },
        }
});
