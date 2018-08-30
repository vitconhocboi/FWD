<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<link rel="stylesheet" type="text/css" href="<c:url value='/static/assets/global/plugins/dx-tree/dx.spa.css' />">
<link rel="stylesheet" type="text/css" href="<c:url value='/static/assets/global/plugins/dx-tree/dx.common.css' />">
<link rel="stylesheet" type="text/css" href="<c:url value='/static/assets/global/plugins/dx-tree/dx.light.css' />">
<link rel="stylesheet" type="text/css" href="<c:url value='/static/css/tree.css' />"/>
<script src="<c:url value='/static/assets/global/plugins/dx-tree/dx.all.js' />"></script>
<div class="row">
    <div class="col-md-12">
        <div class="portlet light " id="contentBody">
            <div class="portlet-body" id="table-search">
                <div class="table-toolbar">
                    <div class="col-sm-3">
                        <div class="panel-heading">
                            <span class="caption-subject bold uppercase">Cây đơn vị phòng ban</span>
                        </div>
                        <div class="panel-body">
                            <form role="form" class="form-horizontal " name="departmenttree">
                                <div class="input-group col-md-12">
                                    <input type="text" class="  search-query form-control" placeholder="Search"/>
                                    <span class="input-group-btn">
                                    <button class="btn btn-danger" type="button" style="height:34px">
                                        <span class=" glyphicon glyphicon-search"></span>
                                    </button>
                                </span>
                                </div>
                                <div id="simple-treeview" data-bind="dxTreeView: treeOption"></div>
                            </form>
                        </div>
                    </div>
                    <div class="col-sm-9">
                        <div class="panel-heading">
                            <span class="caption-subject bold uppercase">Chi tiết phòng ban</span>
                        </div>
                        <div class="panel-body">
                            <form role="form" class="form-horizontal " name="departmentdetail">
                                <div class="form-group">
                                    <div class="col-sm-12">
                                        <div class="col-sm-6">
                                            <label class="col-sm-3">Tên phòng ban: </label>
                                            <div class="col-md-9">
                                                <input data-bind="value:selected.deptName"
                                                       class="form-control  col-sm-12" disabled>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <label class="col-sm-3">Trực thuộc: </label>
                                            <div class="col-md-9">
                                                <input data-bind="value:selected.parentName"
                                                       class="form-control col-sm-12" disabled>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-12">
                                        <div class="col-sm-6">
                                            <label class="col-sm-3">Mã đơn vị: </label>
                                            <div class="col-md-9">
                                                <input data-bind="value:selected.unitCode"
                                                       class="form-control  col-sm-12" disabled>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <label class="col-md-3">Loại phòng ban: </label>
                                            <div class="col-md-9">
                                                <select id="trangThaiHoSo" name="trangThaiHoSo"
                                                        class="form-control col-sm-9"
                                                        data-bind="value: selected.deptType" disabled>
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
                                       data-bind="click: $root.addChild"><i class="fa fa-plus"></i>
                                        Thêm phòng ban</a>
                                    <a href="javascript:;" class="btn green"
                                       data-bind="click: $root.editDepartment"><i class="fa fa-edit"></i>
                                        Chỉnh sửa</a>
                                    <a href="javascript:;" class="btn green"
                                       data-bind="click: $root.deleteDepartment"><i class="fa fa-trash"></i>
                                        Xóa</a>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript" src="<c:url value="/app/admin/department/department.module.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/department.model.js"/>"
        charset="utf-8"></script>