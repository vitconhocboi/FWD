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
                                    <span class="caption-subject bold uppercase">Tìm kiếm tuyến vận tải</span>
                                </div>
                                <div class="panel-body">
                                    <form class="form-horizontal">
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Cảng đi
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
                                                    Đối tác
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
                                                <label class="col-sm-2">
                                                    Loại tuyến vận tải
                                                </label>
                                                <div class="col-sm-4">
                                                    <select class="form-control col-sm-12"
                                                            data-bind="value: route.type">
                                                        <option value="">--Chọn loại tuyến vận tải--</option>
                                                        <option value="0">Vận tải hàng hải</option>
                                                        <option value="1">Vận tải hàng không</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Giá cước tối đa
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:route.preisCharge.VALUE_VIEW">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group nsw-text-center">
                                            <a href="javascript:;" class="btn green"
                                               data-bind="click: $root.search"><i class="fa fa-plus"></i>
                                                Tìm kiếm</a>
                                            <a href="javascript:;" class="btn green"
                                               data-bind="click: $root.addnew"><i class="fa fa-edit"></i>
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
                                    <span class="caption-subject bold uppercase">Danh sách tuyến vận tải</span>
                                </div>
                                <div class="panel-body">
                                    <table class="table table-striped table-bordered table-hover table-checkable order-column"
                                           id="sample_1">
                                        <thead>
                                        <tr class="nsw-tr tr-nsw1-bgcolor">
                                            <th class="text-center">STT</th>
                                            <th class="text-center">Tên cảng đi</th>
                                            <th class="text-center">Tên cảng đến</th>
                                            <th class="text-center">Loại hình vận tải</th>
                                            <th class="text-center">Tên đối tác</th>
                                            <th class="text-center">Thời gian vận chuyển</th>
                                            <th class="text-center">Điều kiện hàng hóa</th>
                                            <th class="text-center">Giá cước</th>
                                            <th class="text-center">Phụ phí</th>
                                            <th class="text-center">Loại tiền tệ</th>
                                            <th class="text-center">Ngày hiệu lực</th>
                                            <th class="text-center">Lịch đi hàng tuần</th>
                                            <th class="text-center">Ghi chú</th>
                                            <th class="text-center">Sửa</th>
                                            <th class="text-center">Xóa</th>
                                        </tr>
                                        </thead>
                                        <tbody id="list-container"
                                               data-bind="foreach: { data: $root.listRoute, as: 'item'}">
                                        <tr>
                                            <td class="text-center"
                                                data-bind="text:($root.pagingVM.currentPage()-1) * $root.pagingVM.pageSize() + $index() + 1"></td>
                                            <td class="text-center"
                                                data-bind="text: $root.getPortName(item.portOfDepartureId())"></td>
                                            <td class="text-center"
                                                data-bind="text: $root.getPortName(item.portOfDestinationId())"></td>
                                            <td class="text-center" data-bind="text: item.type"></td>
                                            <td class="text-center"
                                                data-bind="text: $root.getPartnerName(item.partnerId())"></td>
                                            <td class="text-center" data-bind="text: item.transitTime"></td>
                                            <td class="text-center" data-bind="text: item.condition"></td>
                                            <td class="text-center" data-bind="text: item.preisCharge"></td>
                                            <td class="text-center" data-bind="text: item.localCharge"></td>
                                            <td class="text-center" data-bind="text: item.currency"></td>
                                            <td class="text-center"
                                                data-bind="text: item.valid()?moment(item.valid()).format('DD/MM/YYYY'):''"></td>
                                            <td class="text-center" data-bind="text: item.schedule"></td>
                                            <td class="text-center" data-bind="text: item.note"></td>
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
<script type="text/javascript" src="<c:url value="/app/manage/route/index.route.module.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/route.model.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/port.model.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/partner.model.js"/>"
        charset="utf-8"></script>