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
                                                    Tên khách hàng
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <select class="form-control col-sm-12"
                                                            data-bind="options: $root.listCustomer,
                                                            optionsText: 'customerName',
                                                            optionsValue: 'customerId',
                                                            valueAllowUnset: true,
                                                            value: order.customerId,
                                                            event:{ change: $root.selectCustomer},
                                                            optionsCaption: '--Chọn khách hàng--'">
                                                    </select>
                                                </div>
                                                <label class="col-sm-2">
                                                    Thông tin xuất hóa đơn
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:order.customerInvoiceName">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Địa chỉ
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:order.address">
                                                </div>
                                                <label class="col-sm-2">
                                                    Mã số thuế
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:order.taxCode" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Người liên hệ
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:order.contactPerson">
                                                </div>
                                                <label class="col-sm-2">
                                                    Số điện thoại liên hệ
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:order.phoneContact">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Email liên hệ
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:order.emailContact">
                                                </div>
                                                <label class="col-sm-2">
                                                    Chức vụ
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:order.position">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Mô tả hàng hóa
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:order.merchandise">
                                                </div>
                                                <label class="col-sm-2">
                                                    Địa điểm giao hàng
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:order.deliveryAddress">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Trọng lương/số khối/Số cont
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:order.quantity">
                                                </div>
                                                <label class="col-sm-2">
                                                    Loại đơn vị
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:order.unit">
                                                </div>
                                            </div>
                                        </div>
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
                                                            value: order.startPortId,
                                                            event:{ change: $root.selectStartPort},
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
                                                            value: order.endPortId,
                                                            event:{ change: $root.selectEndPort},
                                                            optionsCaption: '--Chọn cảng đến--'">
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Thời gian thanh toán
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12" placeholder="Số tháng hoàn thành tài chính"
                                                           data-bind="value:order.paymentWithin">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Ghi chú
                                                </label>
                                                <div class="col-sm-10">
                                                    <textarea class="form-control col-sm-12"
                                                              data-bind="value:order.note">
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
    var orderId = "${orderId}";
</script>
<script type="text/javascript" src="<c:url value="/app/orders/order_manage/addedit.order_manage.module.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/orders.model.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/customer.model.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/port.model.js"/>"
        charset="utf-8"></script>