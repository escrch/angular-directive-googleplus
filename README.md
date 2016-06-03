#Angular Google+ Sign In Button Directive

A simple Angular directive for Google+ sign-in.

#Usage
1. Add reference to `angular-directive-googleplus.js` file.
2. Add `directive-googleplus` as a dependency to your app.
3. Add `<div ng-app="directive-googleplus"><div  google-plus-sign-in clientId="{Your Client Id}" callBack="googlePlusCallBack" id="google-button"></div></div>` to your app.



#Example
HTML
```html
<div ng-app="directive-googleplus">
  <div  google-plus-sign-in clientId="{Your Client Id}" callBack="googlePlusCallBack" id="google-button"></div>
</div>
```
Javascript to handle sign in call back
```html
$scope.googlePlusCallBack = function(data) {
        // code here
        // parameter returns your profile data
        console.log(data);
};
```
#Requirements
JQuery is required.  I got lazy :p.
