/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var CASigner = {
    appletPath: '',
    onSuccess: null,
    requireCA: false,
    
    sign: function (contentToSign, contentWithSignature, onSuccess) {
        this.onSuccess = onSuccess;
        document.getElementById('myapplet').innerHTML = '';
        document.getElementById('myapplet').innerHTML = this.buildApplet(contentToSign, contentWithSignature);
    },
    buildApplet: function (content, contentWithSignature) {
        var applet = "<applet WIDTH=\"0px\" HEIGHT=\"0px\" code=\"com.ca.applet.DataSignApplet\" name=\"signApplet\" id=\"signApplet\" >\n"
                + "        <param value=\"" + this.appletPath + "\" name=\"archive\">\n"
                + "        <param value=\"yes\" name=\"mayscript\">\n"
                + "        <param value=\"true\" name=\"scriptable\">\n"
                + "        <param value=\"jsapplet\" name=\"name\">\n"
                + "        <param name=\"content\" value=\"" + content + "\">\n"
                + "        <param name=\"contentWithSignature\" value=\"" + contentWithSignature + "\">\n"
                + "        <PARAM name=\"type\" value=\"INIT\">\n"
                + "        <PARAM name=\"sign.server\" value=\"ca/SigningServlet\">\n"
                + "</applet>\n";
        return applet;
    }
};

function fillDataFromApplet(data) {
    if (data !== '') {
        var xml = window.Base64.encode(data);
        if(validate.isFunction(CASigner.onSuccess))
            CASigner.onSuccess(xml);
    }
}