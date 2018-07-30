<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div class="row">
    <div class="col-md-12 page-500">
        <div class=" number font-red"> 500 </div>
        <div class=" details">
            <h3>Oops! Something went wrong.</h3>
            <p> We are fixing it! Please come back in a while.
                <br/> </p>
            <p>
                <a href="<c:url value='/home' />" class="btn red btn-outline"> Return home </a>
                <br> </p>
        </div>
    </div>
</div>