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
                                    <span class="caption-subject bold uppercase">Tìm kiếm khách hàng</span>
                                </div>
                                <div class="panel-body">
                                    <form class="form-horizontal">
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Tên công ty
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:customer.customerName.VALUE_VIEW">
                                                </div>
                                                <label class="col-sm-2">
                                                    Địa chỉ
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:customer.address.VALUE_VIEW">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Số điện thoại
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:customer.phone.VALUE_VIEW">
                                                </div>
                                                <label class="col-sm-2">
                                                    Mã số thuế
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:customer.taxCode.VALUE_VIEW">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Nhân viên liên hệ
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:customer.contactStaff.VALUE_VIEW">
                                                </div>
                                                <label class="col-sm-2">
                                                    Số điện thoại nhân viên liên hệ
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:customer.phoneContactStaff.VALUE_VIEW">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Ngày thành lập
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:customer.establishmentDate">
                                                </div>
                                                <label class="col-sm-2">
                                                    Nhân viên sale
                                                </label>
                                                <div class="col-sm-4">
                                                    <select class="form-control col-sm-12"
                                                            data-bind="options: $root.listUser,
                                                            optionsText: 'fullName',
                                                            optionsValue: 'userId',
                                                            valueAllowUnset: true,
                                                            value: customer.userSaleId,
                                                            optionsCaption: '--Chọn nhân viên sale--'">
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Loại hình kinh doanh
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:customer.businessType.VALUE_VIEW">
                                                </div>
                                                <label class="col-sm-2">
                                                    Nhu cầu xuất nhập hàng hóa
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:customer.merchandize.VALUE_VIEW">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <label class="col-sm-2">
                                                    Các tuyến đi chính
                                                </label>
                                                <div class="col-sm-4">
                                                    <input class="form-control col-sm-12"
                                                           data-bind="value:customer.journey.VALUE_VIEW">
                                                </div>
                                                <label class="col-sm-2">
                                                    Trạng thái
                                                </label>
                                                <div class="col-sm-4">
                                                    <select class="form-control col-sm-12"
                                                            data-bind="value: customer.status">
                                                        <option value="">--Chọn trạng thái--</option>
                                                        <option value="1">Hoạt động</option>
                                                        <option value="0">Không hoạt động</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group nsw-text-center">
                                            <a href="javascript:;" class="btn green"
                                               data-bind="click: $root.search"><i class="fa fa-search"></i>
                                                Tìm kiếm</a>
                                            <a href="javascript:;" class="btn green"
                                               data-bind="click: $root.addnewcustomer"><i class="fa fa-plus"></i>
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
                                    <span class="caption-subject bold uppercase">Danh sách khách hàng</span>
                                </div>
                                <div class="panel-body">
                                    <table class="table table-striped table-bordered table-hover table-checkable order-column"
                                           id="sample_1">
                                        <thead>
                                        <tr class="nsw-tr tr-nsw1-bgcolor">
                                            <th class="text-center">STT</th>
                                            <th class="text-center">Tên công ty</th>
                                            <th class="text-center">Địa chỉ</th>
                                            <th class="text-center">Số điện thoại</th>
                                            <th class="text-center">Mã số thuế</th>
                                            <th class="text-center">Nhân viên liên hệ</th>
                                            <th class="text-center">Số điện thoại nhân viên liên hệ</th>
                                            <th class="text-center">Ngày thành lập</th>
                                            <th class="text-center">Nhân viên sale</th>
                                            <th class="text-center">Loại hình kinh doanh</th>
                                            <th class="text-center">Hàng hóa</th>
                                            <th class="text-center">Tuyến đi chính</th>
                                            <th class="text-center">Trạng thái</th>
                                            <th class="text-center">Sửa</th>
                                            <th class="text-center">Xóa</th>
                                        </tr>
                                        </thead>
                                        <tbody id="list-container"
                                               data-bind="foreach: { data: $root.listCustomer, as: 'item'}">
                                        <tr>
                                            <td class="text-center"
                                                data-bind="text:($root.pagingVM.currentPage()-1) * $root.pagingVM.pageSize() + $index() + 1"></td>
                                            <td class="text-center" data-bind="text: item.customerName"></td>
                                            <td class="text-center" data-bind="text: item.address"></td>
                                            <td class="text-center" data-bind="text: item.phone"></td>
                                            <td class="text-center" data-bind="text: item.taxCode"></td>
                                            <td class="text-center" data-bind="text: item.contactStaff"></td>
                                            <td class="text-center" data-bind="text: item.phoneContactStaff"></td>
                                            <td class="text-center"
                                                data-bind="text: item.establishmentDate()?moment(item.establishmentDate()).format('DD/MM/YYYY'):''">
                                            </td>
                                            <td class="text-center" data-bind="text: item.userSaleId"></td>
                                            <td class="text-center" data-bind="text: item.businessType"></td>
                                            <td class="text-center" data-bind="text: item.merchandize"></td>
                                            <td class="text-center" data-bind="text: item.journey"></td>
                                            <td class="text-center" data-bind="text: item.status"></td>
                                            <td class="text-center">
                                                <a href="javascript:;"
                                                   data-bind="click: $root.editCustomer">
                                                    <i class="fa fa-edit"></i>
                                                </a>
                                            </td>
                                            <td class="text-center">
                                                <a href="javascript:;"
                                                   data-bind="click: $root.deleteCustomer">
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
<script type="text/javascript" src="<c:url value="/app/manage/customer/index.customer.module.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/customer.model.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/user.model.js"/>"
        charset="utf-8"></script>