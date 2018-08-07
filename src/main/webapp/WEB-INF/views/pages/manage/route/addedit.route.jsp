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
                                                    Cảng đi
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <select class="form-control col-sm-12"
                                                            data-bind="options: $root.listPort,
                                                            optionsText: 'portName',
                                                            optionsValue: 'portId',
                                                            valueAllowUnset: true,
                                                            value: route.portOfDepartureId,
                                                            optionsCaption: '--Chọn cảng đi--'">
                                                    </select>
                                                </div>
                                                <label class="col-sm-2">
                                                    Cảng đến
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <select class="form-control col-sm-12"
                                                            data-bind="options: $root.listPort,
                                                            optionsText: 'portName',
                                                            optionsValue: 'portId',
                                                            valueAllowUnset: true,
                                                            value: route.portOfDestinationId,
                                                            optionsCaption: '--Chọn cảng đến--'">
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Loại tuyến vận tải
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <select class="form-control col-sm-12"
                                                            data-bind="valueAllowUnset: true,value: route.type">
                                                        <option value="">--Chọn loại tuyến vận tải--</option>
                                                        <option value="0">Vận tải hàng hải</option>
                                                        <option value="1">Vận tải hàng không</option>
                                                    </select>
                                                </div>
                                                <label class="col-sm-2">
                                                    Đối tác
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <select class="form-control col-sm-12"
                                                            data-bind="options: $root.listPartner,
                                                            optionsText: 'partnerName',
                                                            optionsValue: 'partnerId',
                                                            valueAllowUnset: true,
                                                            value: route.partnerId,
                                                            optionsCaption: '--Chọn đối tác--'">
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Điều kiện chuyển hàng
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:route.condition">
                                                </div>
                                                <label class="col-sm-2">
                                                    Thời gian vận chuyển
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:route.transitTime">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Giá cước
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:route.preisCharge">
                                                </div>
                                                <label class="col-sm-2">
                                                    Phụ phí
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:route.localCharge">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Loại tiền tệ
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:route.currency">
                                                </div>
                                                <label class="col-sm-2">
                                                    Hiệu lực đến ngày
                                                </label>
                                                <div class="col-sm-4">

                                                    <input class="form-control form-control-inline date-picker"
                                                           data-date-format="dd/mm/yyyy" size="16" type="text"
                                                           placeholder="dd/mm/yyyy"
                                                           data-bind="datepicker: route.valid"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Lịch đi
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:route.schedule">
                                                </div>
                                                <label class="col-sm-2">
                                                    Ghi chú
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:route.note">
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
    var routeId = "${routeId}";
</script>
<script type="text/javascript" src="<c:url value="/app/manage/route/addedit.route.module.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/route.model.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/port.model.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/partner.model.js"/>"
        charset="utf-8"></script>