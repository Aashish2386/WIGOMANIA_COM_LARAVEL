<table>
    <tr>
        <td>


            Dear {{$name}},<br>
            Thank you for completing the coupon. <br>We are happy to offer you 15% discount at any of our hair studios.<br>
            Kindly present code 15%coupon <strong>{{$coupon}}</strong> to avail of it.<br>
            Kindly note this discount cannot be used with any other discount or offers.
            <br>
            
        </td>
    </tr>
    <tr>
        <td colspan="2">-------------------------------------------</td>
    </tr>
    <tr>
        <th style="text-align: left"> Page Title</th>
        <td>{{ !empty($page_title)?$page_title:""}}</td>
    </tr>
    <tr>
        <th style="text-align: left"> Domain Name</th>
        <td>{{ !empty($domain)?$domain:""}}</td>
    </tr>
    <tr>
        <th style="text-align: left"> Your Name</th>
        <td>{{$name}}</td>
    </tr>
    <tr>
        <th style="text-align: left"> Your Mobile Number</th>
        <td> +{{$countryCode. ' ' . $phone}}</td>
    </tr>
    <tr>
        <th style="text-align: left"> Your Email ID</th>
        <td>{{$email}}</td>
    </tr>
    <tr>
        <th style="text-align: left">Country Name</th>
        <td>{{$country_name}}</td>
    </tr>
    <tr>
        <th style="text-align: left"> What are looking for</th>
        <td>{{$help}}</td>
    </tr>
    <tr>
        <td colspan="2">Wig-O-Mania Management</td>
    </tr>
</table>
