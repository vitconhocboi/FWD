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
                                    <span class="caption-subject bold uppercase">Thông tin đơn hàng</span>
                                </div>
                                <div class="panel-body" align="center">
                                    <table cellspacing="0" border="0">
                                        <colgroup width="68"></colgroup>
                                        <colgroup width="208"></colgroup>
                                        <colgroup span="2" width="64"></colgroup>
                                        <colgroup width="66"></colgroup>
                                        <colgroup width="128"></colgroup>
                                        <colgroup width="92"></colgroup>
                                        <colgroup width="111"></colgroup>
                                        <colgroup width="106"></colgroup>
                                        <tr>
                                            <td colspan=3 height="21" align="center" valign=middle><font
                                                    face="Times New Roman" size=3 color="#000000">CÔNG TY TNHH MTV
                                                LOGISTICS VIETTEL</font></td>
                                            <td align="left" valign=middle><font face="Times New Roman" size=3
                                                                                 color="#000000"><br></font></td>
                                            <td align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <font face="Times New Roman" color="#000000"><br></font></td>
                                            <td align="center" valign=middle><font face="Times New Roman"
                                                                                   color="#000000"><br></font></td>
                                            <td align="center" valign=middle sdnum="1033;0;#,##0"><font
                                                    face="Times New Roman" color="#000000"><br></font></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                colspan=2 align="center" valign=middle bgcolor="#FFFF00"
                                                sdnum="1033;0;#,##0"><b><font face="Times New Roman" color="#0000FF">MẪU:
                                                LOG-03A/DTĐH</font></b></td>
                                        </tr>
                                        <tr>
                                            <td colspan=3 height="21" align="center" valign=middle><b><font
                                                    face="Times New Roman" size=3 color="#000000">ĐƠN VỊ: CHI NHÁNH LOG
                                                HCM</font></b></td>
                                            <td align="left" valign=middle><b><font face="Times New Roman" size=3
                                                                                    color="#000000"><br></font></b></td>
                                            <td align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <font face="Times New Roman" color="#000000"><br></font></td>
                                            <td colspan=4 align="right" valign=middle sdnum="1033;0;#,##0"><b><font
                                                    face="Times New Roman" color="#0000FF">(Áp dụng cho Công ty TNHH MTV
                                                Logistics Viettel)</font></b></td>
                                        </tr>
                                        <tr>
                                            <td colspan=3 height="21" align="left" valign=middle><b><font
                                                    face="Times New Roman" size=3 color="#000000"><br></font></b></td>
                                            <td align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <font face="Times New Roman" color="#000000"><br></font></td>
                                            <td align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <font face="Times New Roman" color="#000000"><br></font></td>
                                            <td align="center" valign=middle><b><font face="Times New Roman"
                                                                                      color="#000000"><br></font></b>
                                            </td>
                                            <td align="left" valign=middle><b><font face="Times New Roman" size=3>Số
                                                File:</font></b></td>
                                            <td colspan=2 align="left" valign=middle sdnum="1033;0;#,##0"><b><font
                                                    face="Times New Roman" color="#0000FF">---</font></b></td>
                                        </tr>
                                        <tr>
                                            <td height="20" align="center" valign=middle><font face="Times New Roman"
                                                                                               color="#000000"><br></font>
                                            </td>
                                            <td align="left" valign=middle><font face="Times New Roman" color="#000000"><br></font>
                                            </td>
                                            <td align="left" valign=middle><font face="Times New Roman" color="#000000"><br></font>
                                            </td>
                                            <td align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <font face="Times New Roman" color="#000000"><br></font></td>
                                            <td align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <font face="Times New Roman" color="#000000"><br></font></td>
                                            <td align="center" valign=middle><font face="Times New Roman"
                                                                                   color="#000000"><br></font></td>
                                            <td align="center" valign=middle sdnum="1033;0;#,##0"><font
                                                    face="Times New Roman" color="#000000"><br></font></td>
                                            <td align="left" valign=middle sdnum="1033;0;#,##0"><b><font
                                                    face="Times New Roman"><br></font></b></td>
                                            <td align="left" valign=middle sdnum="1033;0;#,##0"><b><font
                                                    face="Times New Roman"><br></font></b></td>
                                        </tr>
                                        <tr>
                                            <td colspan=9 height="27" align="center" valign=middle><b><font
                                                    face="Times New Roman" size=4>DỰ TOÁN ĐƠN HÀNG</font></b></td>
                                        </tr>
                                        <tr>
                                            <td colspan=9 height="23" align="center" valign=middle><b><i><font
                                                    face="Times New Roman" size=3>(Giải trinh Doanh thu - Chi phí - Lợi
                                                nhuận)</font></i></b></td>
                                        </tr>
                                        <tr>
                                            <td colspan=9 height="25" align="center" valign=middle sdnum="1033;0;#,##0">
                                                <font face="Times New Roman" size=3>Ngày……. Tháng ..…. Năm 2018</font>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan=9 height="20" align="left" valign=middle><b><u><font
                                                    face="Times New Roman">I. PHẦN I: THÔNG TIN ĐƠN HÀNG</font></u></b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan=2 height="20" align="left" valign=middle><b><font
                                                    face="Times New Roman">Tên Công ty/Chi nhánh/Bưu cục</font></b></td>
                                            <td colspan=3 align="left" valign=middle sdnum="1033;0;#,##0"><b><font
                                                    face="Times New Roman" color="#0000FF" data-bind="text:order.deptName"></font></b></td>
                                            <td align="center" valign=middle><b><font face="Times New Roman"><br></font></b>
                                            </td>
                                            <td align="center" valign=middle sdnum="1033;0;#,##0"><font
                                                    face="Times New Roman"><br></font></td>
                                            <td align="left" valign=middle sdnum="1033;0;#,##0"><b><font
                                                    face="Times New Roman">Mã đơn vị/Bưu cục</font></b></td>
                                            <td align="left" valign=middle sdnum="1033;0;#,##0"><font
                                                    face="Times New Roman" color="#0000FF" data-bind="text:order.deptCode"><br></font></td>
                                        </tr>
                                        <tr>
                                            <td colspan=2 height="20" align="left" valign=middle><b><font
                                                    face="Times New Roman">Nhân viên Kinh Doanh ( Salesman)</font></b>
                                            </td>
                                            <td colspan=2 align="left" valign=middle><b><font face="Times New Roman"
                                                                                              color="#0000FF" data-bind="text:order.userName"></font></b></td>
                                            <td align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <font face="Times New Roman"><br></font></td>
                                            <td align="left" valign=middle><b><font
                                                    face="Times New Roman">SĐT:</font></b></td>
                                            <td align="left" valign=middle sdnum="1033;0;@"><font face="Times New Roman"
                                                                                                  color="#0000FF" data-bind="text:order.phone"></font>
                                            </td>
                                            <td align="left" valign=middle><font face="Times New Roman"><br></font></td>
                                            <td align="left" valign=middle><font face="Times New Roman" color="#0000FF"><br></font>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan=2 height="20" align="left" valign=middle><b><font
                                                    face="Times New Roman">Tên Khách hàng chính ( Customer)</font></b>
                                            </td>
                                            <td colspan=5 align="left" valign=middle><font face="Times New Roman"
                                                                                           color="#0000FF" data-bind="text:order.customerName"></font></td>
                                            <td align="left" valign=middle sdnum="1033;0;#,##0"><b><font
                                                    face="Times New Roman">Mã KH tại đơn vị</font></b></td>
                                            <td align="left" valign=middle sdnum="1033;0;#,##0"><font
                                                    face="Times New Roman" color="#0000FF" data-bind="text:order.customerCode"><br></font></td>
                                        </tr>
                                        <tr>
                                            <td colspan=2 height="20" align="left" valign=middle><b><font
                                                    face="Times New Roman">Thông tin xuất hóa đơn: </font></b></td>
                                            <td colspan=7 align="left" valign=top><font face="Times New Roman"
                                                                                        color="#0000FF" data-bind="text:order.customerInvoiceName"></font></td>
                                        </tr>
                                        <tr>
                                            <td colspan=2 height="20" align="left" valign=middle><b><font
                                                    face="Times New Roman">Địa chỉ:</font></b></td>
                                            <td colspan=7 align="left" valign=middle><font face="Times New Roman"
                                                                                           color="#0000FF" data-bind="text:order.address"></font></td>
                                        </tr>
                                        <tr>
                                            <td colspan=2 height="20" align="left" valign=middle><b><font
                                                    face="Times New Roman">Mã số thuế:</font></b></td>
                                            <td colspan=3 align="left" valign=middle sdnum="1033;0;@"><font
                                                    face="Times New Roman" color="#0000FF" data-bind="text:order.taxCode"></font></td>
                                            <td align="left" valign=middle><font face="Times New Roman"><br></font></td>
                                            <td align="center" valign=middle sdnum="1033;0;#,##0"><font
                                                    face="Times New Roman"><br></font></td>
                                            <td align="left" valign=middle sdnum="1033;0;#,##0"><font
                                                    face="Times New Roman"><br></font></td>
                                            <td align="left" valign=middle sdnum="1033;0;#,##0"><font
                                                    face="Times New Roman"><br></font></td>
                                        </tr>
                                        <tr>
                                            <td colspan=2 height="20" align="left" valign=middle><b><font
                                                    face="Times New Roman">Thông tin liên lạc / Contact
                                                details</font></b></td>
                                            <td align="left" valign=middle><b><font face="Times New Roman">Người liên
                                                hệ:</font></b></td>
                                            <td colspan=2 align="left" valign=middle sdnum="1033;0;#,##0"><font
                                                    face="Times New Roman" color="#0000FF" data-bind="text:order.contactPerson"></font></td>
                                            <td align="left" valign=middle><b><font face="Times New Roman">Chức
                                                vụ:</font></b></td>
                                            <td colspan=2 align="left" valign=middle><font face="Times New Roman"
                                                                                           color="#0000FF" data-bind="text:order.position"></font></td>
                                            <td align="left" valign=middle sdnum="1033;0;#,##0"><font
                                                    face="Times New Roman"><br></font></td>
                                        </tr>
                                        <tr>
                                            <td height="20" align="left" valign=middle><b><font
                                                    face="Times New Roman"><br></font></b></td>
                                            <td align="left" valign=middle><b><font
                                                    face="Times New Roman"><br></font></b></td>
                                            <td align="left" valign=middle><b><font face="Times New Roman">Cell
                                                phone:</font></b></td>
                                            <td colspan=2 align="left" valign=middle sdnum="1033;0;@"><font
                                                    face="Times New Roman" color="#0000FF" data-bind="text:order.phoneContact"></font></td>
                                            <td align="left" valign=middle><b><font
                                                    face="Times New Roman">E-mail: </font></b></td>
                                            <td colspan=2 align="left" valign=middle><font face="Times New Roman"
                                                                                           color="#0000FF"><a data-bind="text:order.emailContact,href:order.emailContact"></a></font>
                                            </td>
                                            <td align="left" valign=middle sdnum="1033;0;#,##0"><font
                                                    face="Times New Roman"><br></font></td>
                                        </tr>
                                        <tr>
                                            <td colspan=2 height="20" align="left" valign=middle><b><font
                                                    face="Times New Roman">Mô tả hàng hóa ( Goods
                                                Description)</font></b></td>
                                            <td colspan=7 align="left" valign=middle><font face="Times New Roman"
                                                                                           color="#0000FF" data-bind="text:order.merchandise"></font>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan=2 height="20" align="left" valign=middle><b><font
                                                    face="Times New Roman">Trọng lượng/Số khối/Số Cont</font></b></td>
                                            <td colspan=3 align="left" valign=middle><b><font face="Times New Roman"
                                                                                              color="#0000FF" data-bind="text:order.quantity"></font></b>
                                            </td>
                                            <td align="left" valign=middle><b><font face="Times New Roman">Loại
                                                xe:</font></b></td>
                                            <td align="left" valign=middle sdnum="1033;0;#,##0"><font
                                                    face="Times New Roman" color="#0000FF" data-bind="text:order.unit"></font></td>
                                            <td align="left" valign=middle><b><font face="Times New Roman">Số vận
                                                đơn:</font></b></td>
                                            <td align="left" valign=middle sdnum="1033;0;#,##0"><font
                                                    face="Times New Roman" color="#0000FF"></font></td>
                                        </tr>
                                        <tr>
                                            <td colspan=2 height="20" align="left" valign=middle><b><font
                                                    face="Times New Roman">Dự kiến ngày đi (ETD)</font></b></td>
                                            <td colspan=3 align="left" valign=middle sdval="42647"
                                                sdnum="1033;1033;M/D/YYYY"><font face="Times New Roman" color="#0000FF"></font>
                                            </td>
                                            <td align="left" valign=middle sdnum="1033;1033;D-MMM"><b><font
                                                    face="Times New Roman">Ngày dự kiến đến</font></b></td>
                                            <td align="left" valign=middle sdval="42655" sdnum="1033;1033;M/D/YYYY">
                                                <font face="Times New Roman" color="#0000FF"></font></td>
                                            <td align="left" valign=middle><b><font face="Times New Roman">Số
                                                cont/Seal:</font></b></td>
                                            <td align="left" valign=middle sdnum="1033;0;#,##0"><font
                                                    face="Times New Roman" color="#0000FF"></font></td>
                                        </tr>
                                        <tr>
                                            <td colspan=2 height="20" align="left" valign=middle><b><font
                                                    face="Times New Roman">Cảng đi / Nơi đi</font></b></td>
                                            <td colspan=5 align="left" valign=middle><font face="Times New Roman"
                                                                                           color="#0000FF" data-bind="text:order.startPortName"></font>
                                            </td>
                                            <td align="left" valign=middle sdnum="1033;0;#,##0"><b><font
                                                    face="Times New Roman">Số tờ khai:</font></b></td>
                                            <td align="left" valign=middle sdnum="1033;0;@"><font face="Times New Roman"
                                                                                                  color="#0000FF"></font>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan=2 height="20" align="left" valign=middle><b><font
                                                    face="Times New Roman">Cảng đích / Nơi đến</font></b></td>
                                            <td colspan=7 align="left" valign=middle><font face="Times New Roman"
                                                                                           color="#0000FF" data-bind="text:order.endPortName"></font>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan=2 height="20" align="left" valign=middle><b><font
                                                    face="Times New Roman">Địa chỉ giao hàng đích (kho khách
                                                hàng)</font></b></td>
                                            <td colspan=7 align="left" valign=middle><font face="Times New Roman"
                                                                                           color="#0000FF" data-bind="text:order.deliveryAddress"></font></td>
                                        </tr>
                                        <tr>
                                            <td style="border-bottom: 2px solid #000000" colspan=9 height="21"
                                                align="left" valign=middle><b><u><font face="Times New Roman">II. PHẦN
                                                2: GIẢI TRÌNH DOANH THU - CHI PHÍ - LỢI NHUẬN</font></u></b></td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000"
                                                rowspan=2 height="40" align="center" valign=middle bgcolor="#F2F2F2"><b><font
                                                    face="Times New Roman" color="#000000">TT</font></b></td>
                                            <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                rowspan=2 align="center" valign=middle bgcolor="#F2F2F2"><b><font
                                                    face="Times New Roman" color="#000000">NỘI DUNG</font></b></td>
                                            <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                rowspan=2 align="center" valign=middle bgcolor="#F2F2F2"><b><font
                                                    face="Times New Roman">ĐƠN GIÁ</font></b></td>
                                            <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                rowspan=2 align="center" valign=middle bgcolor="#F2F2F2"
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"> TỶ GIÁ </font></b></td>
                                            <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                rowspan=2 align="center" valign=middle bgcolor="#F2F2F2"
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"> SỐ LƯỢNG </font></b></td>
                                            <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                colspan=2 align="center" valign=middle bgcolor="#F2F2F2"
                                                sdnum="1033;0;#,##0"><b><font face="Times New Roman">GIÁ TRỊ</font></b>
                                            </td>
                                            <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                rowspan=2 align="center" valign=middle bgcolor="#F2F2F2"
                                                sdnum="1033;0;#,##0"><b><font face="Times New Roman">TỔNG
                                                TIỀN</font></b></td>
                                            <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000"
                                                rowspan=2 align="center" valign=middle bgcolor="#F2F2F2"><b><font
                                                    face="Times New Roman">GHI CHÚ</font></b></td>
                                        </tr>
                                        <tr>
                                            <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#F2F2F2" sdnum="1033;0;#,##0">
                                                <b><font face="Times New Roman">TIỀN HÀNG</font></b></td>
                                            <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#F2F2F2" sdnum="1033;0;#,##0">
                                                <b><font face="Times New Roman">TIỀN THUẾ</font></b></td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000"
                                                height="20" align="center" valign=middle sdval="1" sdnum="1033;">
                                                <b><font face="Times New Roman">1</font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><b><font face="Times New Roman">DOANH THU/GIÁ
                                                BÁN</font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><b><font
                                                    face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="65000000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"> 65,000,000 </font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="6500000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"> 6,500,000 </font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="71500000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"> 71,500,000 </font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000"
                                                align="center" valign=middle><b><font face="Times New Roman"><br></font></b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000"
                                                height="20" align="center" valign=middle><b><i><font
                                                    face="Times New Roman">-</font></i></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><i><font face="Times New Roman">Phí vận
                                                chuyển HP-BN</font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="right" valign=middle bgcolor="#FFFFFF" sdval="4000000"
                                                sdnum="1033;0;#,##0"><i><font face="Times New Roman" color="#000000">4,000,000</font></i>
                                            </td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="right" valign=middle bgcolor="#FFFFFF" sdval="1"
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 1.00 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="right" valign=middle bgcolor="#FFFFFF" sdval="10"
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 10.00 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="40000000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 40,000,000 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="4000000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 4,000,000 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="44000000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 44,000,000 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF"><i><font
                                                    face="Times New Roman" color="#FF0000"><br></font></i></td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000"
                                                height="20" align="center" valign=middle><b><i><font
                                                    face="Times New Roman">-</font></i></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><i><font face="Times New Roman">Cước Biển HPG
                                                - HCM</font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="right" valign=middle bgcolor="#FFFFFF" sdval="2000000"
                                                sdnum="1033;0;#,##0"><i><font face="Times New Roman" color="#000000">2,000,000</font></i>
                                            </td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="right" valign=middle bgcolor="#FFFFFF" sdval="1"
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 1.00 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="right" valign=middle bgcolor="#FFFFFF" sdval="10"
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 10.00 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="20000000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 20,000,000 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="2000000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 2,000,000 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="22000000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 22,000,000 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF"><i><font
                                                    face="Times New Roman" color="#FF0000"><br></font></i></td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000"
                                                height="20" align="center" valign=middle><b><i><font
                                                    face="Times New Roman">-</font></i></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><i><font face="Times New Roman">Phí dịch vụ
                                                hải quan</font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="right" valign=middle bgcolor="#FFFFFF" sdval="500000"
                                                sdnum="1033;0;#,##0"><i><font face="Times New Roman" color="#000000">500,000</font></i>
                                            </td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="right" valign=middle bgcolor="#FFFFFF" sdval="1"
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 1.00 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="right" valign=middle bgcolor="#FFFFFF" sdval="10"
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 10.00 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="5000000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 5,000,000 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="500000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 500,000 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="5500000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 5,500,000 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF"><i><font
                                                    face="Times New Roman" color="#FF0000"><br></font></i></td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000"
                                                height="20" align="center" valign=middle sdval="2" sdnum="1033;">
                                                <b><font face="Times New Roman">2</font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><b><font face="Times New Roman">GIÁ VỐN/ GIÁ
                                                MUA (2.1+2.2)</font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><b><font
                                                    face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="53150000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"> 53,150,000 </font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="5315000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"> 5,315,000 </font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="58465000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"> 58,465,000 </font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000"
                                                align="center" valign=middle><b><font face="Times New Roman"><br></font></b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000"
                                                height="20" align="center" valign=middle sdval="2.1" sdnum="1033;">
                                                <b><font face="Times New Roman">2.1</font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><b><font face="Times New Roman">Chi phí thuê
                                                đối tác</font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><b><font
                                                    face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="52500000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"> 52,500,000 </font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="5250000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"> 5,250,000 </font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="57750000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"> 57,750,000 </font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000"
                                                align="center" valign=middle><b><font face="Times New Roman"><br></font></b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000"
                                                height="20" align="center" valign=middle><b><i><font
                                                    face="Times New Roman">-</font></i></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><i><font face="Times New Roman">Vận chuyển
                                                HNI - HPG</font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="right" valign=middle bgcolor="#FFFFFF" sdval="3400000"
                                                sdnum="1033;0;#,##0"><i><font face="Times New Roman" color="#000000">3,400,000</font></i>
                                            </td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="right" valign=middle bgcolor="#FFFFFF" sdval="1"
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 1.00 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="right" valign=middle bgcolor="#FFFFFF" sdval="10"
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 10.00 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="34000000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 34,000,000 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="3400000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 3,400,000 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="37400000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 37,400,000 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF"><i><font
                                                    face="Times New Roman" color="#0000FF">Tên đối tác</font></i></td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000"
                                                height="20" align="center" valign=middle><b><i><font
                                                    face="Times New Roman">-</font></i></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><i><font face="Times New Roman">Cước Biển HPG
                                                - HCM</font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="right" valign=middle bgcolor="#FFFFFF" sdval="1850000"
                                                sdnum="1033;0;#,##0"><i><font face="Times New Roman" color="#000000">1,850,000</font></i>
                                            </td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="right" valign=middle bgcolor="#FFFFFF" sdval="1"
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 1.00 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="right" valign=middle bgcolor="#FFFFFF" sdval="10"
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 10.00 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="18500000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 18,500,000 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="1850000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 1,850,000 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="20350000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 20,350,000 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF"><i><font
                                                    face="Times New Roman" color="#0000FF">Tên đối tác</font></i></td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000"
                                                height="20" align="center" valign=middle><b><i><font
                                                    face="Times New Roman">-</font></i></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><i><font face="Times New Roman">Phí dịch vụ
                                                hải quan</font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="right" valign=middle bgcolor="#FFFFFF" sdval="250000"
                                                sdnum="1033;0;#,##0"><i><font face="Times New Roman" color="#000000">250,000</font></i>
                                            </td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="right" valign=middle bgcolor="#FFFFFF" sdval="1"
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 1.00 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="right" valign=middle bgcolor="#FFFFFF" sdval="10"
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 10.00 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="2500000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 2,500,000 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="250000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 250,000 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="2750000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 2,750,000 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF"><i><font
                                                    face="Times New Roman" color="#0000FF">Tên đối tác</font></i></td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000"
                                                height="20" align="center" valign=middle sdval="2.2" sdnum="1033;">
                                                <b><font face="Times New Roman">2.2</font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><b><font face="Times New Roman">Chi phí tự
                                                thực hiện</font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><b><font
                                                    face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="650000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"> 650,000 </font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="65000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"> 65,000 </font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="715000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"> 715,000 </font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000"
                                                align="center" valign=middle><b><font face="Times New Roman"
                                                                                      color="#0000FF"><br></font></b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000"
                                                height="20" align="center" valign=middle><b><i><font
                                                    face="Times New Roman">-</font></i></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><i><font face="Times New Roman">Chi phí sử
                                                dụng vốn</font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="right" valign=middle bgcolor="#FFFFFF" sdval="0.01"
                                                sdnum="1033;0;0.0%"><i><font face="Times New Roman"
                                                                             color="#000000">1.0%</font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="right" valign=middle bgcolor="#FFFFFF" sdval="1"
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 1.00 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="right" valign=middle bgcolor="#FFFFFF" sdval="1"
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 1.00 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="650000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 650,000 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="65000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 65,000 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="715000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 715,000 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000"
                                                align="right" valign=middle bgcolor="#FFFFFF"><i><font
                                                    face="Times New Roman" color="#0000FF">1%/ tháng</font></i></td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000"
                                                height="20" align="center" valign=middle><b><i><font
                                                    face="Times New Roman">-</font></i></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><i><font face="Times New Roman">Chi phí giao
                                                dịch</font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle bgcolor="#FFFFFF" sdnum="1033;0;#,##0">
                                                <i><font face="Times New Roman" color="#000000"><br></font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle bgcolor="#FFFFFF"
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"><br></font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle bgcolor="#FFFFFF"
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"><br></font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="0"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> - </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="0"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> - </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="0"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> - </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000"
                                                align="right" valign=middle bgcolor="#FFFFFF"><i><font
                                                    face="Times New Roman" color="#0000FF">Tên đ.vị thực hiện</font></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000"
                                                height="20" align="center" valign=middle sdval="3" sdnum="1033;">
                                                <b><font face="Times New Roman">3</font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><b><font face="Times New Roman">CHI PHÍ CHI
                                                HỘ TRẢ HỘ (nếu có)</font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><b><font
                                                    face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="1000000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"> 1,000,000 </font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="100000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"> 100,000 </font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="1100000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"> 1,100,000 </font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000"
                                                align="center" valign=middle><b><font face="Times New Roman"><br></font></b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000"
                                                height="20" align="center" valign=middle><b><i><font
                                                    face="Times New Roman">+</font></i></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><i><font face="Times New Roman">Local charge
                                                tại Hai Phong</font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><i><font
                                                    face="Times New Roman"><br></font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"><br></font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"><br></font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="1000000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 1,000,000 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="100000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 100,000 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="1100000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 1,100,000 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000"
                                                align="center" valign=middle><b><i><font
                                                    face="Times New Roman"><br></font></i></b></td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000"
                                                height="20" align="center" valign=middle sdval="4" sdnum="1033;">
                                                <b><font face="Times New Roman">4</font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><b><font face="Times New Roman">LỢI NHUẬN GỘP
                                                ĐƠN HÀNG (1-2)</font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><b><font
                                                    face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="11850000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"> 11,850,000 </font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="1185000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"> 1,185,000 </font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="13035000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"> 13,035,000 </font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000"
                                                align="center" valign=middle sdval="0.182307692307692"
                                                sdnum="1033;0;0.0%"><b><font face="Times New Roman">18.2%</font></b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000"
                                                height="20" align="center" valign=middle sdval="5" sdnum="1033;">
                                                <b><font face="Times New Roman">5</font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><b><font face="Times New Roman">LỢI NHUẬN
                                                KHOÁN = (1) * 2%</font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><b><font
                                                    face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="1300000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"> 1,300,000 </font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000"
                                                align="center" valign=middle bgcolor="#FFFFFF" sdval="0.02"
                                                sdnum="1033;0;0.0%"><i><font face="Times New Roman"
                                                                             color="#000000">2.0%</font></i></td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000"
                                                height="20" align="center" valign=middle sdval="6" sdnum="1033;">
                                                <b><font face="Times New Roman">6</font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><b><font face="Times New Roman">NGUỒN QUỸ (4
                                                - 5)</font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle><b><font face="Times New Roman"><br></font></b>
                                            </td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="10550000"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"> 10,550,000 </font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"><br></font></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000"
                                                align="center" valign=middle sdval="0.162307692307692"
                                                sdnum="1033;0;0.0%"><b><font face="Times New Roman">16.2%</font></b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000"
                                                height="20" align="center" valign=middle><b><i><font
                                                    face="Times New Roman">-</font></i></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><i><font face="Times New Roman">Nguồn quỹ cho
                                                bộ phận bán hàng (sales) = (6)*35%</font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle sdnum="1033;0;#,##0.00"><i><font
                                                    face="Times New Roman"><br></font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"><br></font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"><br></font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="3692500"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 3,692,500 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"><br></font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"><br></font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000"
                                                align="center" valign=middle sdval="0.35" sdnum="1033;0;0.0%"><i><font
                                                    face="Times New Roman" color="#000000">35.0%</font></i></td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000"
                                                height="20" align="center" valign=middle><b><i><font
                                                    face="Times New Roman">-</font></i></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><i><font face="Times New Roman">Nguồn quỹ cho
                                                bộ phận CS = (6)*12,5%</font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle sdnum="1033;0;#,##0.00"><i><font
                                                    face="Times New Roman"><br></font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"><br></font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"><br></font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="1318750"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 1,318,750 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"><br></font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"><br></font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000"
                                                align="center" valign=middle sdval="0.125" sdnum="1033;0;0.0%"><i><font
                                                    face="Times New Roman" color="#000000">12.5%</font></i></td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000"
                                                height="21" align="center" valign=middle><b><i><font
                                                    face="Times New Roman">-</font></i></b></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle><i><font face="Times New Roman">Nguồn quỹ cho
                                                bộ phận OP = (6)*12,5%</font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle sdnum="1033;0;#,##0.00"><i><font
                                                    face="Times New Roman"><br></font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"><br></font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"><br></font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdval="1318750"
                                                sdnum="1033;0;_-* #,##0_-;-* #,##0_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <i><font face="Times New Roman"> 1,318,750 </font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdnum="1033;0;#,##0"><i><font
                                                    face="Times New Roman"><br></font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000"
                                                align="center" valign=middle sdnum="1033;0;#,##0"><i><font
                                                    face="Times New Roman"><br></font></i></td>
                                            <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000"
                                                align="center" valign=middle sdval="0.125" sdnum="1033;0;0.0%"><i><font
                                                    face="Times New Roman" color="#000000">12.5%</font></i></td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 2px solid #000000" colspan=9 height="20" align="left"
                                                valign=middle><i><font face="Times New Roman">Lưu ý: Đơn vị lập dự toán
                                                phải điền đầy đủ, trung thực các thông tin trên mẫu Dự toán trước khi
                                                trình các bộ phận phê duyệt.</font></i></td>
                                        </tr>
                                        <tr>
                                            <td height="20" align="left" valign=middle><i><font
                                                    face="Times New Roman"><br></font></i></td>
                                            <td align="left" valign=middle><b><font
                                                    face="Times New Roman"><br></font></b></td>
                                            <td align="left" valign=middle><b><font
                                                    face="Times New Roman"><br></font></b></td>
                                            <td align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"><br></font></b></td>
                                            <td align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"><br></font></b></td>
                                            <td align="center" valign=middle><b><font face="Times New Roman"><br></font></b>
                                            </td>
                                            <td align="left" valign=middle><font face="Times New Roman" color="#000000"><br></font>
                                            </td>
                                            <td align="left" valign=middle><font face="Times New Roman" color="#000000"><br></font>
                                            </td>
                                            <td align="left" valign=middle><font face="Times New Roman" color="#000000"><br></font>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td height="20" align="center" valign=middle><b><font
                                                    face="Times New Roman"><br></font></b></td>
                                            <td align="left" valign=middle><b><font face="Times New Roman">NGƯỜI
                                                LẬP </font></b></td>
                                            <td colspan=2 align="center" valign=middle><b><font face="Times New Roman">PHỤ
                                                TRÁCH ĐƠN VỊ </font></b></td>
                                            <td align="left" valign=middle><font face="Times New Roman" color="#000000"><br></font>
                                            </td>
                                            <td align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"> PHÒNG TÀI CHÍNH </font></b></td>
                                            <td align="left" valign=middle
                                                sdnum="1033;0;_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-">
                                                <b><font face="Times New Roman"><br></font></b></td>
                                            <td align="left" valign=middle sdnum="1033;0;#,##0"><b><font
                                                    face="Times New Roman">GIÁM ĐỐC CÔNG TY</font></b></td>
                                            <td align="left" valign=middle sdnum="1033;0;#,##0"><b><font
                                                    face="Times New Roman"><br></font></b></td>
                                        </tr>
                                    </table>
                                    <div class="form-group nsw-text-center" style="margin-top: 30px">
                                        <a href="javascript:;" class="btn green"
                                           data-bind="click: $root.edit"><i class="fa fa-edit"></i>
                                            Chỉnh sửa</a>
                                        <a href="javascript:;" class="btn green"
                                           data-bind="click: $root.back"><i class="fa fa-backward"></i>
                                            Trở lại</a>
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
<script>
    var orderId = "${orderId}";
</script>
<script type="text/javascript" src="<c:url value="/app/orders/order_manage/view.order_manage.module.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/orders.model.js"/>"
        charset="utf-8"></script>