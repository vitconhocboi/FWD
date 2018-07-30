<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="login-container">
    <div class="login-card">
        <div class="login-form">
            <c:url var="loginUrl" value="/login" />
            <form action="${loginUrl}" method="post" class="form-horizontal">
                <c:if test="${param.error != null}">
                    <div class="alert alert-danger">
                        <p>Invalid username and password.</p>
                    </div>
                </c:if>
                <c:if test="${param.logout != null}">
                    <div class="alert alert-success">
                        <p>You have been logged out successfully.</p>
                    </div>
                </c:if>
                <div class="input-group input-sm">
                    <label class="input-group-addon" for="username"><i class="fa fa-user"></i></label>
                    <input type="text" class="form-control" id="username" name="ssoId" value="" placeholder="Enter Username" required>
                </div>
                <div class="input-group input-sm">
                    <label class="input-group-addon" for="password"><i class="fa fa-lock"></i></label> 
                    <input type="password" class="form-control" id="password" name="password" value="" placeholder="Enter Password" required>
                </div>
                <div class="input-group input-sm">
                    <div class="checkbox">
                        <label><input type="checkbox" id="rememberme" name="remember-me"> Remember Me</label>  
                    </div>
                </div>
                <input type="hidden" name="${_csrf.parameterName}"  value="${_csrf.token}" />

                <div class="form-actions">
                    <input type="submit" id="btnLogin"
                           class="btn btn-block btn-primary btn-default" value="Log in">
                </div>
            </form>
        </div>
    </div>
</div>
<script type="text/javascript">
    $(document).ready(function () {
        var isAutoLogin = Util.getParameterByName('auto');
        if (isAutoLogin) {
            var id = Util.getParameterByName('id');
            var key = Util.getParameterByName('key');
            $('#username').val(id);
            $('#password').val(key);
            $('#btnLogin').click();
        }
    });
</script>