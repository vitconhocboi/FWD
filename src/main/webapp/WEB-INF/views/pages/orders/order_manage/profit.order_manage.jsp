<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<link href="<c:url value='/static/css/stylesheet.css' />" rel="stylesheet" type="text/css"/>
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
                                    <table border=0 cellpadding=0 cellspacing=0 width=974 style='border-collapse:
 collapse;table-layout:fixed;width:731pt'>
                                        <col width=64 style='mso-width-source:userset;mso-width-alt:2340;width:48pt'>
                                        <col width=212 style='mso-width-source:userset;mso-width-alt:7753;width:159pt'>
                                        <col width=91 style='mso-width-source:userset;mso-width-alt:3328;width:68pt'>
                                        <col width=64 span=2 style='width:48pt'>
                                        <col width=62 style='mso-width-source:userset;mso-width-alt:2267;width:47pt'>
                                        <col width=121 style='mso-width-source:userset;mso-width-alt:4425;width:91pt'>
                                        <col width=87 style='mso-width-source:userset;mso-width-alt:3181;width:65pt'>
                                        <col width=109 style='mso-width-source:userset;mso-width-alt:3986;width:82pt'>
                                        <col width=100 style='mso-width-source:userset;mso-width-alt:3657;width:75pt'>
                                        <tr height=21 style='height:15.75pt'>
                                            <td colspan=3 height=21 class=xl141 width=367 style='height:15.75pt;
  width:275pt'>CÔNG TY TNHH MTV LOGISTICS VIETTEL
                                            </td>
                                            <td class=xl65 width=64 style='width:48pt'></td>
                                            <td class=xl65 width=64 style='width:48pt'></td>
                                            <td class=xl66 width=62 style='width:47pt'></td>
                                            <td class=xl67 width=121 style='width:91pt'></td>
                                            <td class=xl68 width=87 style='width:65pt'></td>
                                            <td colspan=2 class=xl145 width=209 style='border-right:.5pt solid black;
  width:157pt'>M&#7850;U: LOG-03A/DT&#272;H
                                            </td>
                                        </tr>
                                        <tr height=21 style='height:15.75pt'>
                                            <td colspan=3 height=21 class=xl142 style='height:15.75pt'>&#272;&#416;N
                                                V&#7882;: CHI NHÁNH LOG HCM
                                            </td>
                                            <td class=xl69></td>
                                            <td class=xl69></td>
                                            <td class=xl66></td>
                                            <td class=xl67></td>
                                            <td colspan=3 class=xl140>(Áp d&#7909;ng cho Công ty TNHH MTV Logistics
                                                Viettel)
                                            </td>
                                        </tr>
                                        <tr height=21 style='height:15.75pt'>
                                            <td colspan=3 height=21 class=xl147 style='height:15.75pt'></td>
                                            <td class=xl66></td>
                                            <td class=xl66></td>
                                            <td class=xl66></td>
                                            <td class=xl70></td>
                                            <td class=xl71>S&#7889; File:</td>
                                            <td colspan=2 class=xl136>---</td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td height=20 class=xl67 style='height:15.0pt'></td>
                                            <td class=xl72></td>
                                            <td class=xl72></td>
                                            <td class=xl66></td>
                                            <td class=xl66></td>
                                            <td class=xl66></td>
                                            <td class=xl67></td>
                                            <td class=xl68></td>
                                            <td class=xl73></td>
                                            <td class=xl73></td>
                                        </tr>
                                        <tr height=27 style='height:20.25pt'>
                                            <td colspan=10 height=27 class=xl148 style='height:20.25pt'>D&#7920; TOÁN
                                                &#272;&#416;N HÀNG
                                            </td>
                                        </tr>
                                        <tr height=23 style='height:17.25pt'>
                                            <td colspan=10 height=23 class=xl149 style='height:17.25pt'>(Gi&#7843;i
                                                trinh
                                                Doanh thu - Chi phí - L&#7907;i nhu&#7853;n)
                                            </td>
                                        </tr>
                                        <tr height=25 style='mso-height-source:userset;height:18.75pt'>
                                            <td colspan=10 height=25 class=xl143 style='height:18.75pt'>Ngày……. Tháng
                                                ..…. N&#259;m 2018
                                            </td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td colspan=10 height=20 class=xl137 style='height:15.0pt'>I. PH&#7846;N I:
                                                THÔNG TIN &#272;&#416;N HÀNG
                                            </td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td colspan=2 height=20 class=xl76 style='height:15.0pt'>Tên Công ty/Chi
                                                nhánh/B&#432;u c&#7909;c
                                            </td>
                                            <td colspan=4 class=xl144><span data-bind="text:order.deptName"/></td>
                                            <td class=xl75></td>
                                            <td class=xl78></td>
                                            <td class=xl73>Mã &#273;&#417;n v&#7883;/B&#432;u c&#7909;c</td>
                                            <td class=xl79><span data-bind="text:order.deptCode"/></td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td colspan=2 height=20 class=xl76 style='height:15.0pt'>Nhân viên Kinh
                                                Doanh
                                                <font class="font20">( Salesman)</font></td>
                                            <td colspan=2 class=xl128><span data-bind="text:order.userName"/></td>
                                            <td class=xl128></td>
                                            <td class=xl77></td>
                                            <td class=xl76>S&#272;T:</td>
                                            <td class=xl80><span data-bind="text:order.phone"/></td>
                                            <td class=xl81></td>
                                            <td class=xl82></td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td colspan=2 height=20 class=xl76 style='height:15.0pt'>Tên Khách hàng
                                                chính<font
                                                        class="font20"> ( Customer)</font></td>
                                            <td colspan=6 class=xl138><span data-bind="text:order.customerName"/></td>
                                            <td class=xl73>Mã KH t&#7841;i &#273;&#417;n v&#7883;</td>
                                            <td class=xl84><span data-bind="text:order.customerCode"/></td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td colspan=2 height=20 class=xl76 style='height:15.0pt'>Thông tin xu&#7845;t
                                                hóa &#273;&#417;n:<span style='mso-spacerun:yes'>            </span>
                                            </td>
                                            <td colspan=8 class=xl139><span data-bind="text:order.customerInvoiceName"/>
                                            </td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td colspan=2 height=20 class=xl76 style='height:15.0pt'>&#272;&#7883;a
                                                ch&#7881;:
                                            </td>
                                            <td colspan=8 class=xl138><span data-bind="text:order.address"/></td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td colspan=2 height=20 class=xl76 style='height:15.0pt'>Mã s&#7889;
                                                thu&#7871;:
                                            </td>
                                            <td colspan=4 class=xl80><span data-bind="text:order.taxCode"/></td>
                                            <td class=xl83></td>
                                            <td class=xl78></td>
                                            <td class=xl85></td>
                                            <td class=xl86></td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td colspan=2 height=20 class=xl76 style='height:15.0pt'>Thông tin liên
                                                l&#7841;c / Contact details
                                            </td>
                                            <td class=xl76>Ng&#432;&#7901;i liên h&#7879;:</td>
                                            <td colspan=3 class=xl79><span data-bind="text:order.contactPerson"/></td>
                                            <td class=xl76>Ch&#7913;c v&#7909;:</td>
                                            <td colspan=2 class=xl138><span data-bind="text:order.position"/></td>
                                            <td class=xl86></td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td height=20 class=xl76 style='height:15.0pt'></td>
                                            <td class=xl76></td>
                                            <td class=xl76>Cell phone:</td>
                                            <td colspan=3 class=xl80><span data-bind="text:order.phoneContact"/></td>
                                            <td class=xl76>E-mail:<span style='mso-spacerun:yes'> </span></td>
                                            <td colspan=2 class=xl138><span data-bind="text:order.emailContact"/></td>
                                            <td class=xl86></td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td colspan=2 height=20 class=xl76 style='height:15.0pt'>Mô t&#7843; hàng
                                                hóa
                                                <font class="font20">( Goods Description)</font></td>
                                            <td colspan=8 class=xl138><span data-bind="text:order.merchandise"/></td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td colspan=2 height=20 class=xl135 width=276 style='height:15.0pt;
  width:207pt'>Tr&#7885;ng l&#432;&#7907;ng/S&#7889; kh&#7889;i/S&#7889; Cont
                                            </td>
                                            <td colspan=4 class=xl128><span data-bind="text:order.quantity"/></td>
                                            <td class=xl76>Lo&#7841;i xe:</td>
                                            <td class=xl79><span data-bind="text:order.unit"/></td>
                                            <td class=xl76>S&#7889; v&#7853;n &#273;&#417;n:</td>
                                            <td class=xl84>EVL123644258….</td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td colspan=2 height=20 class=xl76 style='height:15.0pt'>D&#7921; ki&#7871;n
                                                ngày &#273;i <font class="font20">(ETD)</font></td>
                                            <td colspan=4 class=xl88></td>
                                            <td class=xl87>Ngày d&#7921; ki&#7871;n &#273;&#7871;n</td>
                                            <td class=xl88></td>
                                            <td class=xl76>S&#7889; cont/Seal:</td>
                                            <td class=xl84>MU221258…</td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td colspan=2 height=20 class=xl76 style='height:15.0pt'>C&#7843;ng &#273;i
                                                /
                                                N&#417;i &#273;i
                                            </td>
                                            <td colspan=6 class=xl138><span data-bind="text:order.startPortName"/></td>
                                            <td class=xl73>S&#7889; t&#7901; khai:</td>
                                            <td class=xl89>12369857441…</td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td colspan=2 height=20 class=xl76 style='height:15.0pt'>C&#7843;ng &#273;ích
                                                / N&#417;i &#273;&#7871;n
                                            </td>
                                            <td colspan=8 class=xl138><span data-bind="text:order.endPortName"/></td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td colspan=2 height=20 class=xl135 width=276 style='height:15.0pt;
  width:207pt'>&#272;&#7883;a ch&#7881; giao hàng &#273;ích (kho khách hàng)
                                            </td>
                                            <td colspan=8 class=xl138><span data-bind="text:order.deliveryAddress"/>
                                            </td>
                                        </tr>
                                        <tr height=21 style='height:15.75pt'>
                                            <td colspan=10 height=21 class=xl150 style='height:15.75pt'>II. PH&#7846;N
                                                2:
                                                GI&#7842;I TRÌNH DOANH THU - CHI PHÍ - L&#7906;I NHU&#7852;N
                                            </td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td rowspan=2 height=40 class=xl155 width=64 style='border-bottom:.5pt solid black;
  height:30.0pt;width:48pt'>TT
                                            </td>
                                            <td rowspan=2 class=xl157 width=212 style='border-bottom:.5pt solid black;
  width:159pt'>NỘI DUNG
                                            </td>
                                            <td rowspan=2 class=xl159 style='border-bottom:.5pt solid black;border-top:
  none'>ĐƠN GIÁ
                                            </td>
                                            <td rowspan=2 class=xl129 style='border-bottom:.5pt solid black;border-top:
  none'><span style='mso-spacerun:yes'> </span>TỶ GIÁ<span
                                                    style='mso-spacerun:yes'> </span></td>
                                            <td rowspan=2 class=xl131 width=64 style='border-bottom:.5pt solid black;
  width:48pt'><span style='mso-spacerun:yes'> </span>SỐ LƯỢNG<span style='mso-spacerun:yes'> </span></td>
                                            <td rowspan=2 class=xl131 width=62 style='border-bottom:.5pt solid black;
  width:47pt'><span style='mso-spacerun:yes'> </span>THUẾ
                                                (%)<span style='mso-spacerun:yes'> </span></td>
                                            <td colspan=2 class=xl133 width=208 style='border-right:.5pt solid black;
  border-left:none;width:156pt'>GIÁ TRỊ
                                            </td>
                                            <td rowspan=2 class=xl152 style='border-bottom:.5pt solid black;border-top:
  none'>TỔNG TIỀN
                                            </td>
                                            <td rowspan=2 class=xl153 width=100 style='border-bottom:.5pt solid black;
  width:75pt'>GHI CHÚ
                                            </td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td height=20 class=xl90 width=121 style='height:15.0pt;border-left:none;
  width:91pt'>TIỀN HÀNG
                                            </td>
                                            <td class=xl91 style='border-left:none'>TIỀN THUẾ</td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td height=20 class=xl92 style='height:15.0pt;border-top:none'>1</td>
                                            <td class=xl163 width=212
                                                style='border-left:none;width:159pt'>DOANH
                                                THU/GIÁ BÁN
                                            </td>
                                            <td class=xl93 style='border-left:none'>&nbsp;</td>
                                            <td class=xl94 style='border-left:none'>&nbsp;</td>
                                            <td class=xl94 style='border-left:none'>&nbsp;</td>
                                            <td class=xl94 style='border-left:none'>&nbsp;</td>
                                            <td class=xl114 style='border-left:none'>
                                                <span data-bind="text: $root.sumAmountNotVatRevenue.formatted"/>
                                            </td>
                                            <td class=xl114 style='border-left:none'>
                                                <span data-bind="text: $root.sumAmountVatRevenue.formatted"/>
                                            </td>
                                            <td class=xl114 style='border-left:none'>
                                                <span data-bind="text: $root.sumAmountTotalRevenue.formatted"/>
                                            </td>
                                            <td class=xl96 style='border-left:none'>&nbsp;</td>
                                        </tr>
                                        <tbody data-bind="foreach: { data: $root.listAmountRevenue, as: 'item'}">
                                        <tr height=20 style='height:15.0pt;background-color: #c3cc36'>
                                            <td height=20 class=xl97 style='height:15.0pt;'>
                                                <span>-</span>
                                            </td>
                                            <td class=xl161 width=212
                                                style='border-left:none;width:159pt'>
                                                    <span
                                                            data-bind="text: item.serviceName" style="width:100%"/>
                                            </td>
                                            <td class=xl99 align=right style='border-left:none'>
                                                <input
                                                        data-bind="value: item.price.formatted" style="width:100%"/>
                                            </td>
                                            <td class=xl100 style='border-left:none'>
                                                    <span
                                                            data-bind="text: item.exchangeRate.formatted"
                                                            style="width:100%"/>
                                            </td>
                                            <td class=xl100 style='border-left:none'>
                                                    <span
                                                            data-bind="text: item.quantity.formatted"
                                                            style="width:100%"/>
                                            </td>
                                            <td class=xl100 style='border-left:none'>
                                                    <span
                                                            data-bind="text: item.tax.formatted" style="width:100%"/>
                                            </td>
                                            <td class=xl101>
                                                <span data-bind="text: item.amountNotVat.formatted"/>
                                            </td>
                                            <td class=xl101>
                                                <span data-bind="text: item.amountVat.formatted"/>
                                            </td>
                                            <td class=xl101>
                                                <span data-bind="text: item.amountTotal.formatted"/>
                                            </td>
                                            <td class=xl103 style='border-left:none'>&nbsp;</td>
                                        </tr>
                                        </tbody>
                                        <tr height=20 style='height:15.0pt'>
                                            <td height=20 class=xl92 style='height:15.0pt;'>2</td>
                                            <td class=xl163 width=212
                                                style='border-left:none;width:159pt'>GIÁ
                                                VỐN/ GIÁ MUA (2.1+2.2)
                                            </td>
                                            <td class=xl93 style='border-left:none'>&nbsp;</td>
                                            <td class=xl94 style='border-left:none'>&nbsp;</td>
                                            <td class=xl94 style='border-left:none'>&nbsp;</td>
                                            <td class=xl94 style='border-left:none'>&nbsp;</td>
                                            <td class=xl114 style='border-left:none'>
                                                <span data-bind="text: $root.sumAmountNotVat.formatted"/>
                                            </td>
                                            <td class=xl114 style='border-left:none'>
                                                <span data-bind="text: $root.sumAmountVat.formatted"/>
                                            </td>
                                            <td class=xl114 style='border-left:none'>
                                                <span data-bind="text: $root.sumAmountTotal.formatted"/>
                                            </td>
                                            <td class=xl96 style='border-left:none'>&nbsp;</td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td height=20 class=xl92 style='height:15.0pt;border-top:none'>2.1</td>
                                            <td class=xl163 width=212
                                                style='border-left:none;width:159pt'>Chi
                                                phí thuê đối tác
                                            </td>
                                            <td class=xl93 style='border-left:none'>&nbsp;</td>
                                            <td class=xl94 style='border-left:none'>&nbsp;</td>
                                            <td class=xl94 style='border-left:none'>&nbsp;</td>
                                            <td class=xl94 style='border-left:none'>&nbsp;</td>
                                            <td class=xl114 style='border-left:none'>
                                                <span data-bind="text: $root.sumAmountNotVatRent.formatted"/>
                                            </td>
                                            <td class=xl114 style='border-left:none'>
                                                <span data-bind="text: $root.sumAmountVatRent.formatted"/>
                                            </td>
                                            <td class=xl114 style='border-left:none'>
                                                <span data-bind="text: $root.sumAmountTotalRent.formatted"/>
                                            </td>
                                            <td class=xl96 style='border-left:none'>&nbsp;</td>
                                        </tr>
                                        <tbody data-bind="foreach: { data: $root.listAmountRent, as: 'item'}">
                                        <tr height=20 style='height:15.0pt'>
                                            <td height=20 class=xl97 style='height:15.0pt;'>
                                                <span>-</span>
                                            </td>
                                            <td class=xl161 width=212
                                                style='border-left:none;width:159pt'>
                                                    <span
                                                            data-bind="text: item.serviceName" style="width:100%"/>
                                            </td>
                                            <td class=xl99 align=right style='border-left:none'>
                                                    <span
                                                            data-bind="text: item.price.formatted" style="width:100%"/>
                                            </td>
                                            <td class=xl100 style='border-left:none'>
                                                    <span
                                                            data-bind="text: item.exchangeRate.formatted"
                                                            style="width:100%"/>
                                            </td>
                                            <td class=xl100 style='border-left:none'>
                                                    <span
                                                            data-bind="text: item.quantity.formatted"
                                                            style="width:100%"/>
                                            </td>
                                            <td class=xl100 style='border-left:none'>
                                                    <span
                                                            data-bind="text: item.tax.formatted" style="width:100%"/>
                                            </td>
                                            <td class=xl101>
                                                <span data-bind="text: item.amountNotVat.formatted"/>
                                            </td>
                                            <td class=xl101>
                                                <span data-bind="text: item.amountVat.formatted"/>
                                            </td>
                                            <td class=xl101>
                                                <span data-bind="text: item.amountTotal.formatted"/>
                                            </td>
                                            <td class=xl103 style='border-left:none'><span data-bind="text: item.note"/></td>
                                        </tr>
                                        </tbody>
                                        <tr height=20 style='height:15.0pt'>
                                            <td height=20 class=xl92 style='height:15.0pt;'>2.2</td>
                                            <td class=xl163 width=212
                                                style='border-left:none;width:159pt'>Chi
                                                phí tự thực hiện
                                            </td>
                                            <td class=xl93 style='border-left:none'>&nbsp;</td>
                                            <td class=xl94 style='border-left:none'>&nbsp;</td>
                                            <td class=xl94 style='border-left:none'>&nbsp;</td>
                                            <td class=xl94 style='border-left:none'>&nbsp;</td>
                                            <td class=xl114 style='border-left:none'>
                                                <span data-bind="text: $root.sumAmountNotVatProcess.formatted"/>
                                            </td>
                                            <td class=xl114 style='border-left:none'>
                                                <span data-bind="text: $root.sumAmountVatProcess.formatted"/>
                                            </td>
                                            <td class=xl114 style='border-left:none'>
                                                <span data-bind="text: $root.sumAmountTotalProcess.formatted"/>
                                            </td>
                                            <td class=xl105 style='border-left:none'>&nbsp;</td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td height=20 class=xl97 style='height:15.0pt;'>
                                                <span>-</span>
                                            </td>
                                            <td class=xl161 width=212
                                                style='border-left:none;width:159pt'>
                                                <span style="width:100%">Chi phí sử dụng vốn</span>
                                            </td>
                                            <td class="xl99 percent" align=right style='border-left:none '>
                                                    <span
                                                            data-bind="text: $root.order.paymentWithin()"/>
                                            </td>
                                            <td class=xl100 align="right" style='border-left:none'>
                                                <span style="width:100%">1</span>
                                            </td>
                                            <td class=xl100 align="right" style='border-left:none'>
                                                <span style="width:100%">1</span>
                                            </td>
                                            <td class="xl100 percent" align="right" style='border-left:none'>
                                                <span style="width:100%">10</span>
                                            </td>
                                            <td class=xl101>
                                                <span data-bind="text: $root.sumAmountNotVatProcess.formatted"/>
                                            </td>
                                            <td class=xl101>
                                                <span data-bind="text: $root.sumAmountVatProcess.formatted"/>
                                            </td>
                                            <td class=xl101>
                                                <span data-bind="text: $root.sumAmountTotalProcess.formatted"/>
                                            </td>
                                            <td class=xl103 style='border-left:none'>&nbsp;</td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td height=20 class=xl92 style='height:15.0pt;'>3</td>
                                            <td class=xl163 width=212
                                                style='border-left:none;width:159pt'>CHI
                                                PHÍ CHI HỘ TRẢ HỘ (nếu có)
                                            </td>
                                            <td class=xl93 style='border-left:none'>&nbsp;</td>
                                            <td class=xl94 style='border-left:none'>&nbsp;</td>
                                            <td class=xl94 style='border-left:none'>&nbsp;</td>
                                            <td class=xl94 style='border-left:none'>&nbsp;</td>
                                            <td class=xl114 style='border-left:none'>
                                                <span data-bind="text: $root.sumAmountNotVatPay.formatted"/>
                                            </td>
                                            <td class=xl114 style='border-left:none'>
                                                <span data-bind="text: $root.sumAmountVatPay.formatted"/>
                                            </td>
                                            <td class=xl114 style='border-left:none'>
                                                <span data-bind="text: $root.sumAmountTotalPay.formatted"/>
                                            </td>
                                            <td class=xl96 style='border-left:none'>&nbsp;</td>
                                        </tr>
                                        <tbody data-bind="foreach: { data: $root.listAmountPay, as: 'item'}">
                                        <tr height=20 style='height:15.0pt'>
                                            <td height=20 class=xl97 style='height:15.0pt;'>
                                                <span>-</span>
                                            </td>
                                            <td class=xl161 width=212
                                                style='border-left:none;width:159pt'>
                                                    <span
                                                            data-bind="text: item.serviceName" style="width:100%"/>
                                            </td>
                                            <td class=xl99 align=right style='border-left:none'>
                                                    <span
                                                            data-bind="text: item.price.formatted" style="width:100%"/>
                                            </td>
                                            <td class=xl100 style='border-left:none'>
                                                    <span
                                                            data-bind="text: item.exchangeRate.formatted"
                                                            style="width:100%"/>
                                            </td>
                                            <td class=xl100 style='border-left:none'>
                                                    <span
                                                            data-bind="text: item.quantity.formatted"
                                                            style="width:100%"/>
                                            </td>
                                            <td class=xl100 style='border-left:none'>
                                                    <span
                                                            data-bind="text: item.tax.formatted" style="width:100%"/>
                                            </td>
                                            <td class=xl101>
                                                <span data-bind="text: item.amountNotVat.formatted"/>
                                            </td>
                                            <td class=xl101>
                                                <span data-bind="text: item.amountVat.formatted"/>
                                            </td>
                                            <td class=xl101>
                                                <span data-bind="text: item.amountTotal.formatted"/>
                                            </td>
                                            <td class=xl103 style='border-left:none'>&nbsp;</td>
                                        </tr>
                                        </tbody>
                                        <tr height=20 style='height:15.0pt'>
                                            <td height=20 class=xl92 style='height:15.0pt;'>4</td>
                                            <td class=xl163 width=212
                                                style='border-left:none;width:159pt'>L&#7906;I
                                                NHU&#7852;N G&#7896;P &#272;&#416;N HÀNG (1-2)
                                            </td>
                                            <td class=xl93 style='border-left:none'>&nbsp;</td>
                                            <td class=xl94 style='border-left:none'>&nbsp;</td>
                                            <td class=xl94 style='border-left:none'>&nbsp;</td>
                                            <td class=xl94 style='border-left:none'>&nbsp;</td>
                                            <td class=xl114>
                                                <span data-bind="text: $root.profitNotVat.formatted"/>
                                            </td>
                                            <td class=xl114>
                                                <span data-bind="text: $root.profitVat.formatted"/>
                                            </td>
                                            <td class=xl114>
                                                <span data-bind="text: $root.profitTotal.formatted"/>
                                            </td>
                                            <td class=xl111 style='border-left:none'>
                                                <span data-bind="text: $root.profitRate.formatted"/>
                                            </td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td height=20 class=xl92 style='height:15.0pt;border-top:none'>5</td>
                                            <td class=xl163 width=212
                                                style='border-left:none;width:159pt'>L&#7906;I
                                                NHU&#7852;N KHOÁN = (1) * 2%
                                            </td>
                                            <td class=xl93 style='border-left:none'>&nbsp;</td>
                                            <td class=xl94 style='border-left:none'>&nbsp;</td>
                                            <td class=xl94 style='border-left:none'>&nbsp;</td>
                                            <td class=xl94 style='border-left:none'>&nbsp;</td>
                                            <td class=xl114>
                                                <span data-bind="text: $root.profitContract.formatted"
                                                      style="width:100%">
                                            </td>
                                            <td class=xl95 style='border-left:none'>&nbsp;</td>
                                            <td class=xl95 style='border-left:none'>&nbsp;</td>
                                            <td class=xl111 style='border-left:none'><span
                                                    data-bind="text: $root.rateProfit.formatted"/></td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td height=20 class=xl92 style='height:15.0pt;border-top:none'>6</td>
                                            <td class=xl163 width=212
                                                style='border-left:none;width:159pt'>NGUỒN QUỸ (4 - 5)
                                            </td>
                                            <td class=xl113 style='border-left:none'>&nbsp;</td>
                                            <td class=xl114 style='border-left:none'>&nbsp;</td>
                                            <td class=xl114 style='border-left:none'>&nbsp;</td>
                                            <td class=xl114 style='border-left:none'>&nbsp;</td>
                                            <td class=xl114>
                                                <span data-bind="text: $root.fund.formatted" style="width:100%"/>
                                            </td>
                                            <td class=xl95 style='border-left:none'>&nbsp;</td>
                                            <td class=xl95 style='border-left:none'>&nbsp;</td>
                                            <td class=xl111 style='border-left:none'>
                                                <span data-bind="text: $root.rateFund.formatted"/>
                                            </td>
                                        </tr>
                                        <tr height=34 style='height:25.5pt'>
                                            <td height=34 class=xl97 style='height:25.5pt;border-top:none'>-</td>
                                            <td class=xl161 width=212
                                                style='border-left:none;width:159pt'>Nguồn quỹ cho bộ phận bán hàng
                                                (sales) = (6)*35%
                                            </td>
                                            <td class=xl115 style='border-left:none'>&nbsp;</td>
                                            <td class=xl116 style='border-left:none'>&nbsp;</td>
                                            <td class=xl116 style='border-left:none'>&nbsp;</td>
                                            <td class=xl116 style='border-left:none'>&nbsp;</td>
                                            <td class=xl101>
                                                <span data-bind="text: $root.fundSale.formatted" style="width:100%"/>
                                            </td>
                                            <td class=xl109 style='border-left:none'>&nbsp;</td>
                                            <td class=xl109 style='border-left:none'>&nbsp;</td>
                                            <td class=xl109 style='border-left:none'>
                                                <span data-bind="text: $root.rateSale.formatted"/>
                                            </td>
                                        </tr>
                                        <tr height=34 style='height:25.5pt;'>
                                            <td height=34 class=xl97 style='height:25.5pt;border-top:none'>-</td>
                                            <td class=xl161 width=212
                                                style='border-left:none;width:159pt'>Ngu&#7891;n
                                                qu&#7929; cho b&#7897; ph&#7853;n CS = (6)*12,5%
                                            </td>
                                            <td class=xl115 style='border-left:none'>&nbsp;</td>
                                            <td class=xl116 style='border-left:none'>&nbsp;</td>
                                            <td class=xl116 style='border-left:none'>&nbsp;</td>
                                            <td class=xl116 style='border-left:none'>&nbsp;</td>
                                            <td class=xl101>
                                                <span data-bind="text: $root.fundCS.formatted" style="width:100%"/>
                                            </td>
                                            <td class=xl109 style='border-left:none'>&nbsp;</td>
                                            <td class=xl109 style='border-left:none'>&nbsp;</td>
                                            <td class=xl117 style='border-left:none'>
                                                <span data-bind="text: $root.rateCS.formatted"/>
                                            </td>
                                        </tr>
                                        <tr height=35 style='height:26.25pt'>
                                            <td height=35 class=xl118 style='height:26.25pt;border-top:none'>-</td>
                                            <td class=xl162 width=212
                                                style='border-left:none;width:159pt'>Ngu&#7891;n
                                                qu&#7929; cho b&#7897; ph&#7853;n OP = (6)*12,5%
                                            </td>
                                            <td class=xl119 style='border-left:none'>&nbsp;</td>
                                            <td class=xl120 style='border-left:none'>&nbsp;</td>
                                            <td class=xl120 style='border-left:none'>&nbsp;</td>
                                            <td class=xl120 style='border-left:none'>&nbsp;</td>
                                            <td class=xl101>
                                                <span data-bind="text: $root.fundOP.formatted" style="width:100%"/>
                                            </td>
                                            <td class=xl122 style='border-left:none'>&nbsp;</td>
                                            <td class=xl122 style='border-left:none'>&nbsp;</td>
                                            <td class=xl123 style='border-left:none'>
                                                <span data-bind="text: $root.rateOP.formatted"/>
                                            </td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td colspan=10 height=20 class=xl151 style='height:15.0pt'><font
                                                    class="font26">L&#432;u ý</font><font class="font27">: </font><font
                                                    class="font25">&#272;&#417;n v&#7883; l&#7853;p d&#7921; toán ph&#7843;i
                                                &#273;i&#7873;n &#273;&#7847;y &#273;&#7911;, trung th&#7921;c các thông
                                                tin
                                                trên m&#7851;u D&#7921; toán tr&#432;&#7899;c khi trình các b&#7897;
                                                ph&#7853;n phê duy&#7879;t.</font></td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td height=20 class=xl124 style='height:15.0pt'></td>
                                            <td class=xl125></td>
                                            <td class=xl125></td>
                                            <td class=xl74></td>
                                            <td class=xl74></td>
                                            <td class=xl74></td>
                                            <td class=xl75></td>
                                            <td class=xl72></td>
                                            <td class=xl72></td>
                                            <td class=xl72></td>
                                        </tr>
                                        <tr height=20 style='height:15.0pt'>
                                            <td height=20 class=xl75 style='height:15.0pt'></td>
                                            <td class=xl126>NG&#431;&#7900;I L&#7852;P<span
                                                    style='mso-spacerun:yes'>                               </span><span
                                                    style='display:none'><span
                                                    style='mso-spacerun:yes'>                             </span></span>
                                            </td>
                                            <td colspan=2 class=xl75>PH&#7908; TRÁCH &#272;&#416;N V&#7882;<span
                                                    style='mso-spacerun:yes'>    </span></td>
                                            <td class=xl75></td>
                                            <td class=xl72></td>
                                            <td class=xl74 colspan=2 style='mso-ignore:colspan'><span
                                                    style='mso-spacerun:yes'> </span>PHÒNG TÀI CHÍNH<span
                                                    style='mso-spacerun:yes'>    </span></td>
                                            <td class=xl127 colspan=2 style='mso-ignore:colspan'>GIÁM &#272;&#7888;C
                                                CÔNG
                                                TY
                                            </td>
                                        </tr>
                                        <![if supportMisalignedColumns]>
                                        <tr height=0 style='display:none'>
                                            <td width=64 style='width:48pt'></td>
                                            <td width=212 style='width:159pt'></td>
                                            <td width=91 style='width:68pt'></td>
                                            <td width=64 style='width:48pt'></td>
                                            <td width=64 style='width:48pt'></td>
                                            <td width=62 style='width:47pt'></td>
                                            <td width=121 style='width:91pt'></td>
                                            <td width=87 style='width:65pt'></td>
                                            <td width=109 style='width:82pt'></td>
                                            <td width=100 style='width:75pt'></td>
                                        </tr>
                                        <![endif]>
                                    </table>
                                    <div class="form-group nsw-text-center" style="margin-top: 30px">
                                        <a href="javascript:;" class="btn green"
                                           data-bind="click: $root.save"><i class="fa fa-save"></i>
                                            Lưu</a>
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
<script type="text/javascript" src="<c:url value="/app/orders/order_manage/profit.order_manage.module.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/orders.model.js"/>"
        charset="utf-8"></script>
<script type="text/javascript" src="<c:url value="/app/model/orderdetail.model.js"/>"
        charset="utf-8"></script>