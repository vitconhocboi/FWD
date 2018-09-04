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
                                                    Dịch vụ
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <select class="form-control col-sm-12"
                                                            data-bind="options: $root.listService,
                                                            optionsText: 'serviceName',
                                                            optionsValue: 'serviceId',
                                                            valueAllowUnset: true,
                                                            value: servicePort.serviceId,
                                                            optionsCaption: '--Chọn dịch vụ--'">
                                                    </select>
                                                </div>
                                                <label class="col-sm-2">
                                                    Cảng
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <select class="form-control col-sm-12"
                                                            data-bind="options: $root.listPort,
                                                            optionsText: 'portName',
                                                            optionsValue: 'portId',
                                                            valueAllowUnset: true,
                                                            value: servicePort.portId,
                                                            optionsCaption: '--Chọn cảng--'">
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Đối tác
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <select class="form-control col-sm-12"
                                                            data-bind="options: $root.listPartner,
                                                            optionsText: 'partnerName',
                                                            optionsValue: 'partnerId',
                                                            valueAllowUnset: true,
                                                            value: servicePort.partnerId,
                                                            optionsCaption: '--Chọn đối tác--'">
                                                    </select>
                                                </div>
                                                <div class="col-sm-2">
                                                    <label>
                                                        Giá cước
                                                    </label>
                                                    <span class="nsw-require-field">*</span>
                                                </div>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="numeric,value:servicePort.price">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Loại tiền tệ
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:servicePort.currency">
                                                </div>
                                                <label class="col-sm-2">
                                                    Ghi chú
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:servicePort.note">
                                                    </input>
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
    var servicePortId = "${servicePortId}";
</script>
<script type="text/javascript" src="<c:url value="/app/manage/service_port/addedit.service_port.module.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/service_port.model.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/service.model.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/port.model.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/partner.model.js"/>"
        charset="utf-8"></script>