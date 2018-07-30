<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<c:if test="${loggedinuser != null}">
    <i class="icon-home"></i><a href="<c:url value='/' />"> Trang chủ</a>
        <c:forEach items="${breadcrumbs}" var="breadcrumb" varStatus="status">
            <c:choose>
                <c:when test="${breadcrumb.url eq '#'}">
                <a>>> ${breadcrumb.name}</a>   
            </c:when>
            <c:otherwise>
                <a href="<c:url value='${breadcrumb.url}' />">>> ${breadcrumb.name}</a>
            </c:otherwise>   
        </c:choose>
    </c:forEach>
</c:if>