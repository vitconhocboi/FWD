
<div id="myapplet" style="height: 200px; width: 200px"></div>
<input type="hidden" id="hdfCa" name="hdfCa" />
<a href="javascript:;" class="btn green" id="btnSign"><i class="fa fa-search"></i> Sign</a>

<script>
    var appletPath = 'http://localhost:8003/NSW/static/ca/Applet_Sign_CA.jar';

    function Sign(contentToSign, contentWithSignature, link) {
        console.log(contentToSign);
        document.getElementById('myapplet').innerHTML = buildApplet(contentToSign, contentWithSignature, link);
        return false;
    }

    function buildApplet(content, contentWithSignature, link) {
        var applet = "<applet WIDTH=\"0px\" HEIGHT=\"0px\" code=\"com.ca.applet.DataSignApplet\" name=\"signApplet\" id=\"signApplet\" >\n"
                + "        <param value=\"" + link + "\" name=\"archive\">\n"
                + "        <param value=\"yes\" name=\"mayscript\">\n"
                + "        <param value=\"true\" name=\"scriptable\">\n"
                + "        <param value=\"jsapplet\" name=\"name\">\n"
                + "        <param name=\"content\" value=\"" + content + "\">\n"
                + "        <param name=\"contentWithSignature\" value=\"" + contentWithSignature + "\">\n"
                + "        <PARAM name=\"type\" value=\"INIT\">\n"
                + "        <PARAM name=\"permissions\" value=\"all-permissions\">\n"
                + "        <PARAM name=\"application-library-allowable-codebase\" value=\"http://localhost:8003\">\n"
                + "        <PARAM name=\"sign.server\" value=\"ca/SigningServlet\">\n"
                + "</applet>\n";
        return applet;
    }

    function fillDataFromApplet(data) {
        console.log(data);
        if (data !== '') {
            var s = window.Base64.encode(data);
            $('#hdfCa').val(s);
        }
    }
    
    $(document).ready(function () {
        var content = 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48RW52ZWxvcGU+PEhlYWRlcj48UmVmZXJlbmNlPjx2ZXJzaW9uPjE8L3ZlcnNpb24+PG1lc3NhZ2VJZD41ZGI0NGYwMWNmMjQ0ZWM3YWMwYzllYjg3NWNiOTY1MzwvbWVzc2FnZUlkPjwvUmVmZXJlbmNlPjxGcm9tPjxuYW1lPkROQTwvbmFtZT48aWRlbnRpdHk+MDEwMDEwMDE4MTwvaWRlbnRpdHk+PC9Gcm9tPjwvSGVhZGVyPjwvRW52ZWxvcGU+';
        var contentWithSignature = 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48RW52ZWxvcGU+PEhlYWRlcj48UmVmZXJlbmNlPjx2ZXJzaW9uPjE8L3ZlcnNpb24+PG1lc3NhZ2VJZD41ZGI0NGYwMWNmMjQ0ZWM3YWMwYzllYjg3NWNiOTY1MzwvbWVzc2FnZUlkPjwvUmVmZXJlbmNlPjxGcm9tPjxuYW1lPkROQTwvbmFtZT48aWRlbnRpdHk+MDEwMDEwMDE4MTwvaWRlbnRpdHk+PC9Gcm9tPjwvSGVhZGVyPjwvRW52ZWxvcGU+';
        $('#btnSign').on('click', function (e) {
            e.preventDefault();            
            Sign(content, contentWithSignature, appletPath);
            return false;
        });

    });
</script>