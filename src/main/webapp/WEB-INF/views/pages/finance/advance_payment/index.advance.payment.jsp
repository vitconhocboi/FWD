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
                                    <span class="caption-subject bold uppercase">Tra cứu ứng tiền</span>
                                </div>
                                <div class="panel-body">
                                    <form class="form-horizontal">
                                        <sec:authorize access="hasAnyRole('FINANCE','ADMIN')">
                                            <div class="form-group">
                                                <div class="col-sm-12">
                                                    <label class="col-sm-2">
                                                        Phòng ban
                                                        <span class="nsw-require-field">*</span>
                                                    </label>
                                                    <div class="col-sm-4">
                                                        <select class="form-control col-sm-12"
                                                                data-bind="options: $root.listDepartment,
                                                            optionsText: 'deptName',
                                                            optionsValue: 'id',
                                                            valueAllowUnset: true,
                                                            value: payment.deptId,
                                                            optionsCaption: '--Chọn phòng ban--'">
                                                        </select>
                                                    </div>
                                                    <label class="col-sm-2">
                                                        Nhân viên
                                                        <span class="nsw-require-field">*</span>
                                                    </label>
                                                    <div class="col-sm-4">
                                                        <select class="form-control col-sm-12"
                                                                data-bind="options: $root.listUser,
                                                            optionsText: 'fullName',
                                                            optionsValue: 'userId',
                                                            valueAllowUnset: true,
                                                            value: payment.objectDebtId,
                                                            optionsCaption: '--Chọn nhân viên--'">
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </sec:authorize>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Ứng tiền từ ngày
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control form-control-inline date-picker"
                                                           data-date-format="dd/mm/yyyy" size="16" type="text"
                                                           placeholder="dd/mm/yyyy"
                                                           data-bind="datepicker: payment.createdDate.FROM"/>
                                                </div>
                                                <label class="col-sm-2">
                                                    Ứng tiền đến ngày
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control form-control-inline date-picker"
                                                           data-date-format="dd/mm/yyyy" size="16" type="text"
                                                           placeholder="dd/mm/yyyy"
                                                           data-bind="datepicker: payment.createdDate.TO"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group nsw-text-center">
                                            <a href="javascript:;" class="btn green"
                                               data-bind="click: $root.search"><i class="fa fa-search"></i>
                                                Tìm kiếm</a>
                                            <a href="javascript:;" class="btn green"
                                               data-bind="click: $root.addnew"><i class="fa fa-plus"></i>
                                                Xin ứng tiền</a>
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
                                    <span class="caption-subject bold uppercase">Danh sách phiếu ứng tiền</span>
                                </div>
                                <div class="panel-body">
                                    <table class="table table-striped table-bordered table-hover table-checkable order-column"
                                           id="sample_1">
                                        <thead>
                                        <tr class="nsw-tr tr-nsw1-bgcolor">
                                            <th class="text-center">STT</th>
                                            <th class="text-center">Tên nhân viên</th>
                                            <th class="text-center">Số tiền ứng</th>
                                            <th class="text-center">Ngày ứng tiền</th>
                                            <th class="text-center">Ngày hoàn ứng</th>
                                            <th class="text-center">Lý do</th>
                                            <th class="text-center">Trạng thái</th>
                                            <th class="text-center">Ghi chú</th>
                                            <th class="text-center">Sửa</th>
                                        </tr>
                                        </thead>
                                        <tbody id="list-container"
                                               data-bind="foreach: { data: $root.listAdvancePayment, as: 'item'}">
                                        <tr data-bind="click: $root.selectedItem,style: { 'background-color': $root.selectedItem()==item?'#adb4c1':''}"
                                            style="cursor: pointer">
                                            <td class="text-center"
                                                data-bind="text:($root.pagingVM.currentPage()-1) * $root.pagingVM.pageSize() + $index() + 1"></td>
                                            <td class="text-center" data-bind="text: item.objectDebtName"></td>
                                            <td class="text-center" data-bind="text: item.amount"></td>
                                            <td class="text-center"
                                                data-bind="text: item.createdDate()?moment(item.createdDate()).format('DD/MM/YYYY'):''"></td>
                                            <td class="text-center"
                                                data-bind="text: item.refundDate()?moment(item.refundDate()).format('DD/MM/YYYY'):''"></td>
                                            <td class="text-center" data-bind="text: item.reason"></td>
                                            <td class="text-center"
                                                data-bind="text: $root.getStatusName(item.status())"></td>
                                            <td class="text-center"
                                                data-bind="text: item.note">
                                            </td>
                                            <td class="text-center">
                                                <a href="javascript:;"
                                                   data-bind="click: $root.edit, visible: item.status()==0">
                                                    <i class="fa fa-edit"></i>
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
                                    <div class="form-group nsw-text-center">
                                        <sec:authorize access="hasAnyRole('FINANCE','ADMIN')">
                                            <a href="javascript:;" class="btn green" style="display: none"
                                               data-bind="click: $root.approve, visible:  $root.selectedItem()&&$root.selectedItem().status()==0"><i
                                                    class="fa fa-apple"></i>
                                                Duyệt</a>
                                        </sec:authorize>
                                        <a href="javascript:;" class="btn green" style="display: none"
                                           data-bind="click: $root.unapprove, visible:  $root.selectedItem()&&$root.selectedItem().status()==0"><i
                                                class="fa fa-apple"></i>
                                            Bỏ duyệt</a>
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
<script type="text/javascript" src="<c:url value="/app/finance/advance_payment/index.advance.payment.module.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/department.model.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/user.model.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/debt.detail.model.js"/>"
        charset="utf-8"></script>