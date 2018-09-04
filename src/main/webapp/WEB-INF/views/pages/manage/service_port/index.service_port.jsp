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
                                    <span class="caption-subject bold uppercase">Tìm kiếm dịch vụ vận tải</span>
                                </div>
                                <div class="panel-body">
                                    <form class="form-horizontal">
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Dịch vụ
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
                                        <div class="form-group nsw-text-center">
                                            <a href="javascript:;" class="btn green"
                                               data-bind="click: $root.search"><i class="fa fa-search"></i>
                                                Tìm kiếm</a>
                                            <a href="javascript:;" class="btn green"
                                               data-bind="click: $root.addnew"><i class="fa fa-plus"></i>
                                                Thêm mới</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="portlet-body" id="table-content">
                <div class="table-toolbar">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <span class="caption-subject bold uppercase">Danh sách dịch vụ vận tải</span>
                                </div>
                                <div class="panel-body">
                                    <table class="table table-striped table-bordered table-hover table-checkable order-column"
                                           id="sample_1">
                                        <thead>
                                        <tr class="nsw-tr tr-nsw1-bgcolor">
                                            <th class="text-center">STT</th>
                                            <th class="text-center">Tên dịch vụ</th>
                                            <th class="text-center">Tên cảng</th>
                                            <th class="text-center">Đối tác</th>
                                            <th class="text-center">Giá</th>
                                            <th class="text-center">Loại tiền tệ</th>
                                            <th class="text-center">Ghi chú</th>
                                            <th class="text-center">Sửa</th>
                                            <th class="text-center">Xóa</th>
                                        </tr>
                                        </thead>
                                        <tbody id="list-container"
                                               data-bind="foreach: { data: $root.listServicePort, as: 'item'}">
                                        <tr>
                                            <td class="text-center"
                                                data-bind="text:($root.pagingVM.currentPage()-1) * $root.pagingVM.pageSize() + $index() + 1"></td>
                                            <td class="text-left"
                                                data-bind="text: $root.getServiceName(item.serviceId())"></td>
                                            <td class="text-left"
                                                data-bind="text: $root.getPortName(item.portId())"></td>
                                            <td class="text-left"
                                                data-bind="text: $root.getPartnerName(item.partnerId())"></td>
                                            <td class="text-right" data-bind="text: item.price.formatted"></td>
                                            <td class="text-center" data-bind="text: item.currency"></td>
                                            <td class="text-left" data-bind="text: item.note"></td>
                                            <td class="text-center">
                                                <a href="javascript:;"
                                                   data-bind="click: $root.edit">
                                                    <i class="fa fa-edit"></i>
                                                </a>
                                            </td>
                                            <td class="text-center">
                                                <a href="javascript:;"
                                                   data-bind="click: $root.delete">
                                                    <i class="fa fa-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div class="row">
                                        <div class="col-md-12 nsw-text-right">
                                            <div class="nsw-flr" data-bind="if: pagingVM.totalCount() > 5">
                                                <ul class="flip pull-left pagination pagination-sm">
                                                    <li data-bind="css: { disabled: !pagingVM.firstPageActive() }"
                                                        class="previous disabled"><a href="#" aria-label="First"
                                                                                     data-bind="click: goToFirst">
                                                        Trang đầu
                                                    </a></li>
                                                    <li data-bind="css: { disabled: !pagingVM.previousPageActive()  }"
                                                        class="previous disabled"><a href="#" aria-label="Previous"
                                                                                     data-bind="click: goToPrevious">
                                                        Trang trước
                                                    </a></li>
                                                    <!-- ko foreach: $root.pagingVM.getPages() -->
                                                    <li data-bind="css: { active: $data == $root.pagingVM.currentPage() }">
                                                        <a href="#"
                                                           data-bind="text: $data, click: $root.goToPage.bind($data)"></a>
                                                    </li>
                                                    <!-- /ko -->
                                                    <li data-bind="css: { disabled: !pagingVM.nextPageActive() }"
                                                        class="next"><a href="#" aria-label="Next"
                                                                        data-bind="click: goToNext">
                                                        Trang sau
                                                    </a></li>
                                                    <li data-bind="css: { disabled: !pagingVM.lastPageActive() }"
                                                        class="next"><a href="#" aria-label="Last"
                                                                        data-bind="click: goToLast">Trang cuối
                                                    </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="<c:url value="/app/manage/service_port/index.service_port.module.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/service.model.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/service_port.model.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/port.model.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/partner.model.js"/>"
        charset="utf-8"></script>