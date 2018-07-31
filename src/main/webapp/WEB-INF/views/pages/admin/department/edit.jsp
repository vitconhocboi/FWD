<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<div class="row">
    <div class="col-md-12">
        <div class="portlet light " id="contentBody">
            <div class="panel-heading">
                <span class="caption-subject bold uppercase" data-bind="text:title"></span>
            </div>
            <div class="panel-body">
                <form role="form" class="form-horizontal " name="departmentdetail">
                    <div class="form-group">
                        <div class="col-sm-12">
                            <div class="col-sm-6">
                                <label class="col-sm-3">Tên phòng ban: </label>
                                <div class="col-md-9">
                                    <input data-bind="value:currentDepartment.deptName" class="col-sm-12">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <label class="col-sm-3">Trực thuộc: </label>
                                <div class="col-md-9">
                                    <select class="form-control col-sm-9"
                                            data-bind="options: $root.danhsachphongban,
                                                            optionsText: 'deptName',
                                                            optionsValue: 'id',
                                                            valueAllowUnset: true,
                                                            value: currentDepartment.parentId" disabled>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-12">
                            <div class="col-sm-6">
                                <label class="col-md-3">Loại phòng ban: </label>
                                <div class="col-md-9">
                                    <select class="form-control col-sm-9"
                                            data-bind="value: currentDepartment.deptType">
                                        <option>--Chọn loại phòng ban--</option>
                                        <option value="0">Phòng ban</option>
                                        <option value="1">Chi nhánh</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group nsw-text-center">
                        <a href="javascript:;" class="btn green"
                           data-bind="click: $root.save"><i class="fa fa-plus"></i>
                            Lưu</a>
                        <a href="javascript:;" class="btn green"
                           data-bind="click: $root.back"><i class="fa fa-edit"></i>
                            Trở lại</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<script>
    var departmentId = "${departmentId}";
    var parentId = "${parentId}";
</script>
<script type="text/javascript" src="<c:url value="/app/admin/department/edit.module.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/department.model.js"/>"
        charset="utf-8"></script>