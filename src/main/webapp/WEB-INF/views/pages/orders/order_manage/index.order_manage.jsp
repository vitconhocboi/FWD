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
                                                    Mã hóa đơn
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           style="text-transform: uppercase"
                                                           data-bind="value:order.orderNo.VALUE_VIEW">
                                                </div>
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
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Mã số thuế
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:order.taxCode.VALUE_VIEW">
                                                </div>
                                                <label class="col-sm-2">
                                                    Người liên hệ
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:order.contactPerson.VALUE_VIEW">
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
                                    <span class="caption-subject bold uppercase">Danh sách hóa đơn</span>
                                </div>
                                <div class="panel-body">
                                    <table class="table table-striped table-bordered table-hover table-checkable order-column"
                                           id="sample_1">
                                        <thead>
                                        <tr class="nsw-tr tr-nsw1-bgcolor">
                                            <th class="text-center">STT</th>
                                            <th class="text-center">Lịch sử</th>
                                            <th class="text-center">Mã hóa đơn</th>
                                            <th class="text-center">Tên khách hàng</th>
                                            <th class="text-center">Đươn vị thực hiện</th>
                                            <th class="text-center">Cảng đi</th>
                                            <th class="text-center">Cảng đến</th>
                                            <th class="text-center">Trạng thái</th>
                                            <th class="text-center">Dự kiến ngày đi</th>
                                            <th class="text-center">Đự kiến ngày đến</th>
                                            <th class="text-center">Hàng hóa</th>
                                            <th class="text-center">Trọng lượng/ Số khối/ Số cont</th>
                                            <th class="text-center">Loại đơn vị</th>
                                            <th class="text-center">Ghi chú</th>
                                            <th class="text-center">Sửa</th>
                                            <th class="text-center">Xóa</th>
                                        </tr>
                                        </thead>
                                        <tbody id="list-container"
                                               data-bind="foreach: { data: $root.listOrders, as: 'item'}">
                                        <tr>
                                            <td class="text-center"
                                                data-bind="text:($root.pagingVM.currentPage()-1) * $root.pagingVM.pageSize() + $index() + 1"></td>
                                            <td class="text-center">
                                                <a href="javascript:;"
                                                   data-bind="click: $root.showHistory">
                                                    <i class="fa fa-history"></i>
                                                </a>
                                            </td>
                                            <td class="text-center">
                                                <a href="javascript:;"
                                                   data-bind="click: $root.viewDetail,text: item.orderNo">
                                                </a>
                                            </td>
                                            <td class="text-center" data-bind="text: item.customerName"></td>
                                            <td class="text-center" data-bind="text: item.deptName"></td>
                                            <td class="text-center" data-bind="text: item.startPortName"></td>
                                            <td class="text-center" data-bind="text: item.endPortName"></td>
                                            <td class="text-center" data-bind="text: item.status"></td>
                                            <td class="text-center"></td>
                                            <td class="text-center"></td>
                                            <td class="text-center" data-bind="text: item.merchandise"></td>
                                            <td class="text-center" data-bind="text: item.quantity"></td>
                                            <td class="text-center" data-bind="text: item.unit"></td>
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


<script type="text/javascript" src="<c:url value="/app/orders/order_manage/index.order_manage.module.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/orders.model.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/customer.model.js"/>"
        charset="utf-8"></script>