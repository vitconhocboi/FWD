<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<div class="row">
    <div class="col-md-12">
        <div class="portlet light " id="contentBody">
            <div class="portlet-body" id="table-search">
                <div class="table-toolbar">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <span class="caption-subject bold uppercase" data-bind="text:title"></span>
                                </div>
                                <div class="panel-body">
                                    <form class="form-horizontal">
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Tên cảng vận tải
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:port.portName">
                                                </div>
                                                <label class="col-sm-2">
                                                    Mã cảng vận tải
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:port.portCode">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Khu vực
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:port.area">
                                                </div>
                                                <label class="col-sm-2">
                                                    Quốc gia
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:port.country">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Địa điểm
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:port.location">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Ghi chú
                                                </label>
                                                <div class="col-sm-10">
                                                     <textarea class="form-control col-sm-12" rows="2"
                                                               data-bind="value:port.note">
                                                     </textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group nsw-text-center">
                                            <a href="javascript:;" class="btn green"
                                               data-bind="click: $root.save"><i class="fa fa-save"></i>
                                                Lưu</a>
                                            <a href="javascript:;" class="btn green"
                                               data-bind="click: $root.back"><i class="fa fa-backward"></i>
                                                Trở lại</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    var portId = "${portId}";
</script>
<script type="text/javascript" src="<c:url value="/app/manage/port/addedit.port.module.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/port.model.js"/>"
        charset="utf-8"></script>