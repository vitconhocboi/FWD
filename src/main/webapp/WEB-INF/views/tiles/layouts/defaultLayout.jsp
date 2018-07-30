<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>

<html>
<head>
    <meta charset="utf-8"/>
    <title><tiles:getAsString name="title"/></title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta content="width=device-width, initial-scale=1" name="viewport"/>
    <link rel="shortcut icon" href="" type="image/vnd.microsoft.icon"/>
    <%--<c:url value='/static/images/favicon.ico' />--%>

    <%--<link href="<c:url value='/static/css/fonts.css' />" rel="stylesheet" type="text/css" />--%>
    <link href="<c:url value='/static/assets/global/plugins/font-awesome/css/font-awesome.min.css' />" rel="stylesheet"
          type="text/css"/>
    <link href="<c:url value='/static/assets/global/plugins/simple-line-icons/simple-line-icons.min.css' />"
          rel="stylesheet" type="text/css"/>
    <link href="<c:url value='/static/assets/global/plugins/bootstrap/css/bootstrap.css" rel="stylesheet' />"
          type="text/css"/>
    <link href="<c:url value='/static/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css' />"
          rel="stylesheet" type="text/css"/>

    <!-- BEGIN PAGE LEVEL PLUGINS -->

    <!-- TREE PLUGIN -->
    <link href="<c:url value='/static/assets/global/plugins/jstree/dist/themes/default/style.min.css' />"
          rel="stylesheet" type="text/css"/>

    <!-- BUTTON PLUGIN -->
    <link href="<c:url value='/static/assets/global/plugins/ladda/ladda-themeless.min.css' />" rel="stylesheet"
          type="text/css"/>

    <!-- DATETIME PLUGINS -->
    <link href="<c:url value='/static/assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.css' />"
          rel="stylesheet" type="text/css"/>
    <link href="<c:url value='/static/assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css' />"
          rel="stylesheet" type="text/css"/>
    <link href="<c:url value='/static/assets/global/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css' />"
          rel="stylesheet" type="text/css"/>
    <link href="<c:url value='/static/assets/global/plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css' />"
          rel="stylesheet" type="text/css"/>

    <!-- FILE PLUGINS -->
    <link href="<c:url value='/static/assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css' />"
          rel="stylesheet" type="text/css"/>
    <!-- END PAGE LEVEL PLUGINS -->

    <link href="<c:url value='/static/assets/global/plugins/select2/css/select2.min.css' />" rel="stylesheet"
          type="text/css"/>
    <link href="<c:url value='/static/assets/global/plugins/select2/css/select2-bootstrap.min.css' />" rel="stylesheet"
          type="text/css"/>

    <link href="<c:url value='/static/assets/global/plugins/bootstrap-modal/css/bootstrap-modal-bs3patch.css' />"
          rel="stylesheet" type="text/css"/>
    <link href="<c:url value='/static/assets/global/plugins/bootstrap-modal/css/bootstrap-modal.css' />"
          rel="stylesheet" type="text/css"/>
    <link href="<c:url value='/static/assets/global/plugins/bootstrap-toastr/toastr.min.css' />" rel="stylesheet"
          type="text/css"/>

    <!-- BEGIN THEME GLOBAL STYLES -->
    <link href="<c:url value='/static/assets/global/css/components.css' />" rel="stylesheet" id="style_components"
          type="text/css"/>
    <link href="<c:url value='/static/assets/global/css/plugins.css' />" rel="stylesheet" type="text/css"/>
    <!-- END THEME GLOBAL STYLES -->

    <!-- BEGIN THEME LAYOUT STYLES -->
    <link href="<c:url value='/static/assets/layouts/layout3/css/layout.css' />" rel="stylesheet" type="text/css"/>
    <link href="<c:url value='/static/assets/layouts/layout3/css/themes/default.css' />" rel="stylesheet"
          type="text/css" id="style_color"/>
    <link href="<c:url value='/static/assets/layouts/layout3/css/custom.css' />" rel="stylesheet" type="text/css"/>
    <!-- END THEME LAYOUT STYLES -->

    <!-- CUSTOM CSS -->
    <link href="<c:url value='/static/css/app.css' />" rel="stylesheet" type="text/css"/>
    <!-- END CUSTOM CSS -->

    <!-- BEGIN CORE PLUGINS -->
    <script src="<c:url value='/static/assets/global/plugins/jquery.min.js' />" type="text/javascript"></script>
    <script src="<c:url value='/static/assets/global/plugins/bootstrap/js/bootstrap.min.js' />"
            type="text/javascript"></script>
    <script src="<c:url value='/static/assets/global/plugins/js.cookie.min.js" type="text/javascript' />"></script>
    <script src="<c:url value='/static/assets/global/plugins/jquery.blockui.min.js' />" type="text/javascript"></script>
    <script src="<c:url value='/static/assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js' />"
            type="text/javascript"></script>
    <!-- END CORE PLUGINS -->

    <!-- PLUGINS -->
    <script src="<c:url value='/static/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js' />"
            type="text/javascript"></script>
    <script src="<c:url value='/static/assets/global/plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js' />"
            type="text/javascript"></script>
    <script src="<c:url value='/static/assets/global/plugins/select2/js/select2.full.min.js' />"
            type="text/javascript"></script>
    <script src="<c:url value='/static/assets/global/plugins/bootstrap-modal/js/bootstrap-modalmanager.js' />"
            type="text/javascript"></script>
    <script src="<c:url value='/static/assets/global/plugins/bootstrap-modal/js/bootstrap-modal.js' />"
            type="text/javascript"></script>
    <script src="<c:url value='/static/assets/global/plugins/bootstrap-toastr/toastr.min.js' />"
            type="text/javascript"></script>
    <script src="<c:url value='/static/assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js' />"
            type="text/javascript"></script>
    <script src="<c:url value='/static/lib/handlebars-v4.0.5.js' />" type="text/javascript"></script>
    <script src="<c:url value='/static/lib/validate.min.js' />" type="text/javascript"></script>
    <script src="<c:url value='/static/lib/catiline.min.js' />" type="text/javascript"></script>
    <script src="<c:url value='/static/lib/Base64.js' />" type="text/javascript"></script>
    <script src="<c:url value='/static/lib/jquery.simplePagination.js' />" type="text/javascript"></script>
    <script src="<c:url value='/static/lib/jquery.history.js' />" type="text/javascript"></script>
    <script src="<c:url value='/static/lib/knockout-3.4.2.js' />" type="text/javascript"></script>
    <script src="<c:url value='/static/lib/knockout.binding.js' />" type="text/javascript"></script>
    <script src="<c:url value='/static/lib/knockout.mapping.js' />" type="text/javascript"></script>
    <script src="<c:url value='/static/lib/knockout.validation.min.js' />" type="text/javascript"></script>
    <script src="<c:url value='/static/lib/knockout.common.vm.js?v=${version}' />" type="text/javascript"></script>
    <script src="<c:url value='/static/lib/sockjs-0.3.4.js' />" type="text/javascript"></script>
    <script src="<c:url value='/static/lib/stomp.js' />" type="text/javascript"></script>
    <script src="<c:url value='/app/knockout.common.vm.js' />" type="text/javascript"></script>
    <script src="<c:url value='/static/lib/moment.min.js' />" type="text/javascript"></script>

    <script type="text/javascript">
        var context = '${pageContext.request.contextPath}';
    </script>

    <script src="<c:url value='/app/constants.js?v=${version}' />" type="text/javascript"></script>
    <script src="<c:url value='/app/extension.js?v=${version}' />" type="text/javascript"></script>
    <script src="<c:url value='/app/all.js?v=${version}' />" type="text/javascript"></script>
    <script src="<c:url value='/app/util.js?v=${version}' />" type="text/javascript"></script>
    <script src="<c:url value='/app/app.js?v=${version}' />" type="text/javascript"></script>
    <script src="<c:url value='/app/knockout.extenders.js?v=${version}' />" type="text/javascript"></script>
</head>

<body class="page-container-bg-solid">
<input type="hidden" id="csrfToken" value="${_csrf.token}"/>
<input type="hidden" id="csrfHeader" value="${_csrf.headerName}"/>
<script type="text/javascript">
    var app = null;
    $(document).ready(function () {
        app = new APP();
        app.version = '${version}';
        app.init({context: context});
        Util.context = context;
    });
</script>
<c:if test="${loggedinuser != null}">
    <script type="text/javascript">
        var user = '${loggedinuser}';
    </script>
</c:if>
<div class="page-wrapper">
    <div class="page-wrapper-row">
        <div class="page-header">
            <tiles:insertAttribute name="header"/>
            <tiles:insertAttribute name="menu"/>
        </div>
    </div>
    <div class="page-wrapper-row full-height">
        <div class="page-wrapper-middle">
            <div class="page-container">
                <div class="page-content-wrapper">
                    <div class="page-head">
                        <div class="container-fluid"></div>
                    </div>
                    <div class="page-content">
                        <div class="container-fluid">
                            <div class="page-content-inner">
                                <tiles:insertAttribute name="breadcrumb"/>
                                <tiles:insertAttribute name="body"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="page-wrapper-row">
        <tiles:insertAttribute name="footer"/>
    </div>
</div>
<div>
    <div id="nsw-modal-templ" class="modal fade in modal-overflow" tabindex="-1">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
            <b class="modal-title"></b>
        </div>
        <div class="modal-body"></div>
        <div class="modal-footer">

        </div>
    </div>
</div>

<!-- BEGIN THEME GLOBAL SCRIPTS -->
<script src="<c:url value='/static/assets/global/scripts/app.min.js' />" type="text/javascript"></script>
<!-- END THEME GLOBAL SCRIPTS -->
<!-- BEGIN THEME LAYOUT SCRIPTS -->
<script src="<c:url value='/static/assets/layouts/layout3/scripts/layout.min.js' />" type="text/javascript"></script>
<!-- END THEME LAYOUT SCRIPTS -->
</body>
</html>