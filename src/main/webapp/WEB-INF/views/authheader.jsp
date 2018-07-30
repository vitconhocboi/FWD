<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page isELIgnored="false" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>
<div class="authbar">
    Language: <a href="?lang=en">English</a> - <a href="?lang=vi">VI</a><br>
    
    <span>Dear <strong>${loggedinuser}</strong>, </span> <span class="floatRight"><a href="<c:url value='/logout' />">Logout</a></span>
</div>
