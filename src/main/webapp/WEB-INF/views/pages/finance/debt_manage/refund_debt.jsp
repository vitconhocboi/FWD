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
                                    <span class="caption-subject bold uppercase">${title}</span>
                                </div>
                                <div class="panel-body">
                                    <form class="form-horizontal">
                                        <div data-bind="visible:refund.refundType()=='0'&&'${financeType}'=='0'"
                                             style="display: none">
                                            <div class="form-group">
                                                <div class="col-sm-12">
                                                    <label class="col-sm-2">
                                                        Hình thức
                                                        <span class="nsw-require-field">*</span>
                                                    </label>
                                                    <div class="col-sm-4">
                                                        <select class="form-control col-sm-12"
                                                                data-bind="value: refund.refundType, event:{ change:  $root.refresh()}">
                                                            <option value="0">Tiền mặt</option>
                                                            <option value="1">Chứng từ</option>
                                                        </select>
                                                    </div>
                                                    <label class="col-sm-2">
                                                        Số tiền
                                                        <span class="nsw-require-field">*</span>
                                                    </label>
                                                    <div class="col-sm-4">
                                                        <input class="form-control col-sm-12"
                                                               data-bind="numeric,value:refund.amount">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-bind="visible:'${financeType}'=='1'" style="display: none">
                                            <div class="form-group">
                                                <div class="col-sm-12">
                                                    <label class="col-sm-2">
                                                        Hình thức
                                                        <span class="nsw-require-field">*</span>
                                                    </label>
                                                    <div class="col-sm-4">
                                                        <select class="form-control col-sm-12"
                                                                data-bind="value: refund.refundType, event:{ change:  $root.refresh()}"
                                                                disabled>
                                                            <option value="0">Tiền mặt</option>
                                                            <option value="1">Chứng từ</option>
                                                        </select>
                                                    </div>
                                                    <label class="col-sm-2">
                                                        Đơn hàng
                                                        <span class="nsw-require-field">*</span>
                                                    </label>
                                                    <div class="col-sm-4">
                                                        <input data-bind="jqAuto: { autoFocus: true },
                                                 jqAutoQuery: searchOrder,
                                                 jqAutoValue: order,
                                                 eventSelect: selectOrder,
                                                 jqAutoSourceLabel: 'customerName',
                                                 jqAutoSourceInputValue: 'orderNo'"
                                                               class="form-control col-sm-12"
                                                               placeholder="Chọn đơn hàng..."/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="col-sm-12">
                                                    <label class="col-sm-2">
                                                        Số tiền
                                                        <span class="nsw-require-field">*</span>
                                                    </label>
                                                    <div class="col-sm-4">
                                                        <input class="form-control col-sm-12"
                                                               data-bind="value:refund.amount">
                                                    </div>
                                                    <label class="col-sm-2">
                                                        Upload hoá đơn
                                                    </label>
                                                    <div class="col-sm-4">
                                                        <input type="file"
                                                               data-bind=" event:{change: $root.fileSelect}"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="col-sm-12 nsw-text-center">
                                                    <img
                                                            data-bind="attr: {'src': refund.fileView, 'title': refund.fileName}"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-bind="visible:refund.refundType()=='1'&&('${financeType}'=='0'||'${financeType}'=='2')"
                                             style="display: none">
                                            <div class="form-group">
                                                <div class="col-sm-12">
                                                    <label class="col-sm-2">
                                                        Hình thức
                                                        <span class="nsw-require-field">*</span>
                                                    </label>
                                                    <div class="col-sm-4">
                                                        <select class="form-control col-sm-12"
                                                                data-bind="value: refund.refundType, event:{ change:  $root.refresh()}, disable:'${financeType}'=='2'">
                                                            <option value="0">Tiền mặt</option>
                                                            <option value="1">Chứng từ</option>
                                                        </select>
                                                    </div>
                                                    <label class="col-sm-2">
                                                        Đối tác
                                                        <span class="nsw-require-field">*</span>
                                                    </label>
                                                    <div class="col-sm-4">
                                                        <input data-bind="disable:'${financeType}'=='2',jqAuto: { autoFocus: true },
                                                 jqAutoQuery: searchPartner,
                                                 eventSelect: selectPartner,
                                                 jqAutoValue: partner,
                                                 jqAutoSourceLabel: 'taxCode',
                                                 jqAutoSourceInputValue: 'partnerName'"
                                                               class="form-control col-sm-12"
                                                               placeholder="Chọn đối tác..."/></td>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="col-sm-12">
                                                    <label class="col-sm-2">
                                                        Đơn hàng
                                                        <span class="nsw-require-field">*</span>
                                                    </label>
                                                    <div class="col-sm-4">
                                                        <input data-bind="jqAuto: { autoFocus: true },
                                                 jqAutoQuery: searchOrder,
                                                 jqAutoValue: order,
                                                 eventSelect: selectOrder,
                                                 jqAutoSourceLabel: 'customerName',
                                                 jqAutoSourceInputValue: 'orderNo'"
                                                               class="form-control col-sm-12"
                                                               placeholder="Chọn đơn hàng..."/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <table class="table table-striped table-bordered table-hover table-checkable order-column"
                                                       id="sample_1">
                                                    <thead>
                                                    <tr class="nsw-tr tr-nsw1-bgcolor">
                                                        <th class="text-center">STT</th>
                                                        <th class="text-center">Mã đơn hàng</th>
                                                        <th class="text-center">Tên dịch vụ</th>
                                                        <th class="text-center">Số tiền</th>
                                                        <th class="text-center">Chứng từ</th>
                                                        <th class="text-center">Ghi chú</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody id="list-container"
                                                           data-bind="foreach: { data: $root.refund.listRefund, as: 'item'}">
                                                    <tr>
                                                        <td class="text-center"
                                                            data-bind="text:$index() + 1"></td>
                                                        <td class="text-center"
                                                            data-bind="text: item.orderNo"></td>
                                                        <td class="text-center" data-bind="text: item.serviceName"></td>
                                                        <td>
                                                            <input class="col-sm-12"
                                                                   data-bind="numeric,value:item.amount"/>
                                                        </td>
                                                        <td>
                                                            <div data-bind="visible:item.fileName(),text:item.fileName">
                                                            </div>
                                                            <div data-bind="visible:!item.fileName()">
                                                                <input type="file"
                                                                       data-bind=" event:{change: $root.fileSelect}"/>
                                                            </div>
                                                        </td>
                                                        <td class="text-center">
                                                            <input class="col-sm-12" data-bind="value:item.note"/>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="form-group nsw-text-center">
                                            <a href="javascript:;" class="btn green"
                                               data-bind="click: $root.saveRefund"><i
                                                    class="fa fa-dollar"></i>
                                                Xác nhận</a>
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
    var debtId = "${debtId}";
    var objectDebtId = "${objectDebtId}";
    var objectDebtName = "${objectDebtName}";
    var financeType = "${financeType}";
</script>
<script type="text/javascript" src="<c:url value="/app/finance/debt_manage/refund.debt.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/file.model.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/partner.model.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/orders.model.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/debt.detail.model.js"/>"
        charset="utf-8"></script>