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
                                    <span class="caption-subject bold uppercase">Tìm kiếm công nợ</span>
                                </div>
                                <div class="panel-body">
                                    <form class="form-horizontal">
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Đối tượng công nợ
                                                    <span class="nsw-require-field">*</span>
                                                </label>
                                                <div class="col-sm-4">
                                                    <select class="form-control col-sm-12"
                                                            data-bind="value: debt.type, event:{ change:  debt.objectDebtId(null)}">
                                                        <option value="">--Tất cả--</option>
                                                        <option value="0">Nhân viên</option>
                                                        <option value="1">Khách hàng</option>
                                                        <option value="2">Đối tác</option>
                                                    </select>
                                                </div>
                                                <div data-bind="visible: debt.type()=='0'" style="display: none">
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
                                                            value: debt.objectDebtId,
                                                            optionsCaption: '--Chọn nhân viên--'">
                                                        </select>
                                                    </div>
                                                </div>
                                                <div data-bind="visible:debt.type()=='1'" style="display: none">
                                                    <label class="col-sm-2">
                                                        Khách hàng
                                                        <span class="nsw-require-field">*</span>
                                                    </label>
                                                    <div class="col-sm-4">
                                                        <select class="form-control col-sm-12"
                                                                data-bind="options: $root.listCustomer,
                                                            optionsText: 'customerName',
                                                            optionsValue: 'customerId',
                                                            valueAllowUnset: true,
                                                            value: debt.objectDebtId,
                                                            optionsCaption: '--Chọn khách hàng--'">
                                                        </select>
                                                    </div>
                                                </div>
                                                <div data-bind="visible:debt.type()=='2'" style="display: none">
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
                                                            value: debt.objectDebtId,
                                                            optionsCaption: '--Chọn đối tác--'">
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group nsw-text-center">
                                            <a href="javascript:;" class="btn green"
                                               data-bind="click: $root.search"><i class="fa fa-search"></i>
                                                Tìm kiếm</a>
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
                                            <th class="text-center">Tên công nợ</th>
                                            <th class="text-center">Số tiền công nợ</th>
                                            <th class="text-center">Đối tượng công nợ</th>
                                            <th class="text-center">Xem chi tiết</th>
                                            <th class="text-center">Gạch nợ</th>
                                        </tr>
                                        </thead>
                                        <tbody id="list-container"
                                               data-bind="foreach: { data: $root.listDebt, as: 'item'}">
                                        <tr>
                                            <td class="text-center"
                                                data-bind="text:($root.pagingVM.currentPage()-1) * $root.pagingVM.pageSize() + $index() + 1"></td>
                                            <td class="text-center" data-bind="text: item.objectDebtName"></td>
                                            <td class="text-center" data-bind="text: item.amount.formatted"></td>
                                            <td class="text-center"
                                                data-bind="text: item.type()=='0'?'Nhân viên':item.type()=='1'?'Khách hàng':item.type()=='2'?'Đối tác':''"></td>
                                            <td class="text-center">
                                                <a href="javascript:;"
                                                   data-bind="click: $root.viewDetailDebt">
                                                    <i class="fa fa-eye"></i>
                                                </a>
                                            </td>
                                            <td class="text-center">
                                                <a href="javascript:;"
                                                   data-bind="click: $root.refund">
                                                    <i class="fa fa-dollar"></i>
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
<script type="text/javascript" src="<c:url value="/app/finance/debt_manage/index.debt.manage.module.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/finance/debt_manage/view.detail.debt.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/partner.model.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/user.model.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/customer.model.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/debt.manage.model.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/debt.detail.model.js"/>"
        charset="utf-8"></script>