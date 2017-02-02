$("#menu-toggle").click(function() {  
          // console.log("Hello");
             $("#outputblock").toggleClass("marginZero");
             $("#sidebar-wrapper").toggle();
          
           
          
         });
$( window ).resize(function() {
        if (window.outerWidth < 450)
            {
                $(".col_3").hide();
                $(".vol_2").hide();
                $(".vol_3").hide();
                $(".vol_4").hide();
                $(".vol_5").hide();
    
            }
          if (window.outerWidth > 450)
            {
                $(".col_3").show();  
                $(".vol_2").hide();
                $(".vol_3").hide();
                $(".vol_4").hide();
                $(".vol_5").hide();
            }
    });

$( document ).ready
(
    init_system
);
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


function paginatefunction(page, pagesperind, maxind, tableind)
{
    var activedocument;

    if(tableind == 1)
    { activedocument = document.getElementById('legistableID').getElementsByTagName('tr'); }
    else if(tableind == 2)
    {activedocument = document.getElementById('billtableID').getElementsByTagName('tr');}
    else
    {activedocument = document.getElementById('commtableID').getElementsByTagName('tr');}
    for(var i = 1; i < page; ++i)
    {
        for(j = ((i - 1) * pagesperind) + 1; j <= ((i - 1) * pagesperind + pagesperind); ++j)
        {
            activedocument[j].style.display = "none";
        }
    }

    /* show selected index rows */
    for(var i = page; i <= page; ++i)
    {
        for(j = ((i - 1) * pagesperind); j < ((i - 1) * pagesperind + pagesperind); ++j)
        {
            activedocument[j].style.display = "";
        }
    }

    /* hide future rows */
    for(var i = page + 1; i <= maxind; ++i)
    {
        for(j = ((i - 1) * pagesperind); j < ((i - 1) * pagesperind + pagesperind); ++j)
        {
            activedocument[j].style.display = "none";
        }
    }
}

function header(val){
    if (val == "1"){
        text="<h3 style=\"margin-left:30px\">Legislators</h3><hr style=\"border: 1px solid #aaa; margin-top:0px; margin-bottom:10px;\">";
        $("#menubar").html(text);
        cretaeTabPage(1);
        
    }
    else if(val == "2"){
        text="<h3 style=\"margin-left:30px\">Bills</h3><hr style=\"border: 1px solid #aaa; margin-top:0px; margin-bottom:10px;\">";
        $("#menubar").html(text);
        cretaeTabPage(2);
       
    }
    else if(val == "3"){
        text="<h3 style=\"margin-left:30px\">Committees</h3><hr style=\"border: 1px solid #aaa; margin-top:0px; margin-bottom:10px;\">";
        $("#menubar").html(text);
        cretaeTabPage(3);
        
    }
    else{
        text="<h3 style=\"margin-left:30px\">Favorites</h3><hr style=\"border: 1px solid #aaa; margin-top:0px; margin-bottom:10px;\">";
        $("#menubar").html(text);
        cretaeTabPage(4);
     
    }  
}

function cretaeTabPage(tabval){
    var text;
    if (tabval == 1){
        text="<li class = \"active\" data-toggle=\"tab\"><a onclick=\"legnext(1)\">By State</a></li>";
        text+="<li data-toggle=\"tab\"><a onclick=\"legnext(2)\">House</a></li>";
        text+="<li data-toggle=\"tab\"><a onclick=\"legnext(3)\">Senate</a></li>";
        legnext(1);
        $("#tabsid").html(text);
        
    }
    else if (tabval == 2){
        text="<li class = \"active\" data-toggle=\"tab\"><a onclick=\"billnext(1)\">Active Bills</a></li>";
        text+="<li data-toggle=\"tab\"><a onclick=\"billnext(2)\">New Bills</a></li>";
        billnext(1);
        $("#tabsid").html(text);
        
    }
    else if (tabval == 3){
        text="<li class = \"active\" data-toggle=\"tab\"><a onclick=\"commnext(1)\">House</a></li>";
        text+="<li data-toggle=\"tab\"><a onclick=\"commnext(2)\">Senate</a></li>";
        text+="<li data-toggle=\"tab\"><a onclick=\"commnext(3)\">Joint</a></li>";
        commnext(1);
        $("#tabsid").html(text);
        
    }
    else{
        //document.getElementById("display-header").innerHTML="";
        text="<li class = \"active\" data-toggle=\"tab\"><a onclick=\"favnext(1)\">Legislators</a></li>";
        text+="<li data-toggle=\"tab\"><a onclick=\"favnext(2)\">Bills</a></li>";
        text+="<li data-toggle=\"tab\"><a onclick=\"favnext(3)\">Committees</a></li>";
        favnext(1);
        $("#tabsid").html(text);
    }
    //$("#tabsid").html(text);
}

function legnext(nextval){
    if (nextval == "1"){
        var drop=stateDropDown();
        text="<div class=\"col-xs-12\">";
        text+="<span class=\"col-xs-6\" style=\"font-weight:bold\">Legislator By State</span>";
        text+="<span class=\"col-xs-6\" id=\"statedropdown\" style=\"float:right\">"+drop;
        text+="</span></div>";
        $("#display-header").html(text);
        legiblock(nextval);
    }
    else if (nextval == "2"){
        var search=searchBox();
        text="<div class=\"col-xs-12\">";
        text+="<span class=\"col-xs-6\" style=\"font-weight:bold\">Legislator By House</span>";
        text+="<span class=\"col-xs-6\" id=\"searchb\" style=\"float:right\">"+search;
        text+="</span></div>";
        $("#display-header").html(text);
        legiblock(nextval);
    }
    else {
        var search=searchBox();
        text="<div class=\"col-xs-12\">";
        text+="<span class=\"col-xs-6\" style=\"font-weight:bold\"s>Legislator By Senate</span>";
        text+="<span class=\"col-xs-6\" id=\"searchb\" style=\"float:right\">"+search;
        text+="</span></div>";
        $("#display-header").html(text);
        legiblock(nextval);
        
    }
}

function billnext(nextval){
    var text;
    if (nextval == "1"){
        var search=searchBoxBills();
        text="<div class=\"col-xs-12\">";
        text+="<span class=\"col-xs-6\" style=\"font-weight:bold\">Active Bills</span>";
        text+="<span class=\"col-xs-6\" id=\"searchb\" style=\"float:right\">"+search;
        text+="</span></div>";
        //$("#display-header").html(text);
        billblock(nextval);
    }
    else {
        var search=searchBoxBills();
        text="<div class=\"col-xs-12\">";
        text+="<span class=\"col-xs-6\" style=\"font-weight:bold\">New Bills</span>";
        text+="<span class=\"col-xs-6\" id=\"searchb\" style=\"float:right\">"+search;
        text+="</span></div>";
        //$("#display-header").html(text);
        billblock(nextval);
    }
    $("#display-header").html(text);
}
function commnext(nextval){
    if (nextval == "1"){
        var search=searchBoxComm();
        text="<div class=\"col-xs-12\">";
        text+="<span class=\"col-xs-6\" style=\"font-weight:bold\">House</span>";
        text+="<span class=\"col-xs-6\" id=\"searchb\" style=\"float:right\">"+search;
        text+="</span></div>";
        $("#display-header").html(text);
        commblock(nextval);
    }
    else if (nextval == "2"){
        var search=searchBoxComm();
        text="<div class=\"col-xs-12\">";
        text+="<span class=\"col-xs-6\" style=\"font-weight:bold\">Senate</span>";
        text+="<span class=\"col-xs-6\" id=\"searchb\" style=\"float:right\">"+search;
        text+="</span></div>";
        $("#display-header").html(text);
        commblock(nextval);
    }
    else{
        var search=searchBoxComm();
        text="<div class=\"col-xs-12\">";
        text+="<span class=\"col-xs-6\" style=\"font-weight:bold\">Joint</span>";
        text+="<span class=\"col-xs-6\" id=\"searchb\" style=\"float:right\">"+search;
        text+="</span></div>";
        $("#display-header").html(text);
        commblock(nextval);
    }
    
}

function favnext(nextval){
    if (nextval == "1"){
        text="<div class=\"col-xs-12\">";
        text+="<span class=\"col-xs-6\" style=\"font-weight:bold\">Favorite Legislators</span>";
        text+="</div>";
        $("#display-header").html(text);
        legisFav();
    }
    else if(nextval == "2"){
        text="<div class=\"col-xs-12\">";
        text+="<span class=\"col-xs-6\" style=\"font-weight:bold\">Favorite Bills</span>";
        text+="</div>";
        $("#display-header").html(text);
        billFav();
    }
    else {
       text="<div class=\"col-xs-12\">";
        text+="<span class=\"col-xs-6\" style=\"font-weight:bold\">Favorite Committees</span>";
        text+="</div>";
        $("#display-header").html(text); 
        commfav();
    }
}

function legiblock(val){
   
    
     $.ajax({
    url:"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/hw8.php",
    datatype:"string",
    data:({main:'legislator'}),
    type:"GET",
    success : function(data){
       
     legstruct(data,val)
    },    
    error: function(){
        alert("no output found");
    }
    });
    
}
function legstruct(data,val){
    var text1;
    //alert(data);
    if (val == "3"){
        
        var tag="legsenate";
        localStorage.setItem('legsenate', data);
        var obj=JSON.parse(localStorage.getItem('legsenate'));
       // alert(obj);
        text1="<table class=\"table\" id=\"legistableID\">";
        text1=text1+"<thead><tr><th>Party</th><th>Name</th><th>Chamber</th><th>State</th><th></th></tr></thead>";
        text1=text1+"<tbody>";
       
        var numofrows=0;
        for (var i=0;i<=obj.results.length-1;i++){
            
            if (obj.results[i].chamber == "senate"){
               text1=text1+"<tr>";
                if (obj.results[i].party == "R")
                    text1=text1+"<td><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/r.png\"></img></td>";
                else
                    text1=text1+"<td><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/d.png\"></img></td>";
                var first_name=obj.results[i].first_name;
                var last_name=obj.results[i].last_name;
                text1=text1+"<td>"+ obj.results[i].first_name+" "+obj.results[i].last_name+"</td>";
                text1=text1+"<td><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/s.svg\"></img>&nbsp;" + obj.results[i].chamber.toUpperCase()+"</td>";
                text1=text1+"<td>"+ obj.results[i].state_name+"</td>";
                text1=text1+"<td><button type=\"button\" class=\"btn btn-primary\" onclick=\"viewLegDetails(" +"'"+i+"'"+","+"'"+tag+"'"+")\">View Details</button></td>";
                text1=text1+"</tr>"; 
                ++numofrows;
            }     
            }
        text1=text1+"</tbody>";
        text1=text1+"</table>";
        text1+="<nav aria-label=\"Page navigation\" style=\"display:block;text-align:center\"><ul class=\"pagination\" id=\"pagination\"></ul></nav>";
            $("#display").html(text1);
            var obj = $('#pagination').twbsPagination({
                totalPages: Math.ceil(numofrows / 10),
                visiblePages: 6,
                onPageClick: function (event, page)
                {
                    current_page_index = page;
                    paginatefunction(page,10,Math.ceil(numofrows / 10), 1);
                }
            }); 
    }
    else if (val == "2"){
        var tag="leghouse";
        localStorage.setItem('leghouse', data)
        var obj=JSON.parse(localStorage.getItem('leghouse'));
        text1="<table class=\"table\" id=\"legistableID\">";
            text1=text1+"<thead><tr><th>Party</th><th>Name</th><th>Chamber</th><th>District</th><th>State</th><th></th></tr></thead>";
            text1=text1+"<tbody>";
            var numofrows=0;
            for (var i=0;i<=obj.results.length-1;i++){
                if (obj.results[i].chamber == "house"){
                    text1=text1+"<tr>";
                if (obj.results[i].party == "R")
                    text1=text1+"<td><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/r.png\"></img></td>";
                else
                    text1=text1+"<td><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/d.png\"></img></td>";
                var first_name=obj.results[i].first_name;
                var last_name=obj.results[i].last_name;
                text1=text1+"<td>"+ obj.results[i].first_name+" "+obj.results[i].last_name+"</td>";
                //text1=text1+"<td>"+ obj.results[i].chamber.toUpperCase()+"</td>";
                text1=text1+"<td><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/h.png\"></img>&nbsp;"+" "+ obj.results[i].chamber.toUpperCase()+"</td>";
                
                if (typeof obj.results[i].district == "undefined" || obj.results[i].district == null)
                    text1=text1+"<td> NA </td>";
                else
                    text1=text1+"<td>"+"District "+ obj.results[i].district+"</td>";
                
//                if (obj.results[i].district == "")
//                    text1=text1+"<td> NA </td>";
//                else
//                    text1=text1+"<td>"+"District "+ obj.results[i].district+"</td>";
                text1=text1+"<td>"+ obj.results[i].state_name+"</td>";
                text1=text1+"<td><button type=\"button\" class=\"btn btn-primary\" onclick=\"viewLegDetails(" +"'"+i+"'"+","+"'"+tag+"'"+")\">View Details</button></td>";
                text1=text1+"</tr>"; 
                ++numofrows;
                }
            }
        text1=text1+"</tbody>";
        text1=text1+"</table>";
        text1+="<nav aria-label=\"Page navigation\" style=\"display:block;text-align:center\"><ul class=\"pagination\" id=\"pagination\"></ul></nav>";
            $("#display").html(text1);
            var obj = $('#pagination').twbsPagination({
                totalPages: Math.ceil(numofrows / 10),
                visiblePages: 6,
                onPageClick: function (event, page)
                {
                    current_page_index = page;
                    paginatefunction(page,10,Math.ceil(numofrows / 10), 1);
                }
            }); 
    }
    else {
            var tag="legstate";
            localStorage.setItem('legstate', data)
            var obj=JSON.parse(localStorage.getItem('legstate'));
            text1="<table class=\"table\" id=\"legistableID\">";
            text1=text1+"<thead><tr><th>Party</th><th>Name</th><th>Chamber</th><th>District</th><th>State</th><th></th></tr></thead>";
            text1=text1+"<tbody>";
            var numofrows=0;
            for (var i=0;i<=obj.results.length-1;i++){
                //text1=text1+"<tr dir-paginate=\"item in items | itemsPerPage: 10\" pagination-id=\"legpagin\">";
                if (obj.results[i].party == "R")
                    text1=text1+"<td><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/r.png\"></img></td>";
                else
                    text1=text1+"<td><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/d.png\"></img></td>";
                text1=text1+"<td>"+ obj.results[i].first_name+" "+obj.results[i].last_name+"</td>";
                if (obj.results[i].chamber == "house")
                    text1=text1+"<td><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/h.png\"></img>&nbsp;"+" "+ obj.results[i].chamber.toUpperCase()+"</td>";
                else
                    text1=text1+"<td><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/s.svg\"></img>&nbsp;" + obj.results[i].chamber.toUpperCase()+"</td>";
                
                if (typeof obj.results[i].district == "undefined" || obj.results[i].district == null)
                    text1=text1+"<td> NA </td>";
                else
                    text1=text1+"<td>"+"District "+ obj.results[i].district+"</td>";
                
//                if (obj.results[i].district == "")
//                    text1=text1+"<td> NA </td>";
//                else
//                    text1=text1+"<td>"+"District "+ obj.results[i].district+"</td>";
                
                text1=text1+"<td>"+ obj.results[i].state_name+"</td>";
                text1=text1+"<td><button type=\"button\" class=\"btn btn-primary\" onclick=\"viewLegDetails(" +"'"+i+"'"+","+"'"+tag+"'"+")\">View Details</button></td>";
                text1=text1+"</tr>";
                 ++numofrows;
            }
            text1=text1+"</tbody>";
            text1=text1+"</table>";
            text1+="<nav aria-label=\"Page navigation\" style=\"display:block;text-align:center;\"><ul class=\"pagination\" id=\"pagination\" style=\"text-color:black;\"></ul></nav>";
            $("#display").html(text1);
            var obj = $('#pagination').twbsPagination({
                totalPages: Math.ceil(numofrows / 10),
                visiblePages: 6,
                onPageClick: function (event, page)
                {
                    current_page_index = page;
                    paginatefunction(page,10,Math.ceil(numofrows / 10), 1);
                }
            }); 
        
    }
}

function viewLegDetails(indexToLookup,tag){
    var obj=JSON.parse(localStorage.getItem(tag));
    //alert(obj.results[indexToLookup].first_name);
    var j="leg";
    var jp=".jpg";
    var ur="http://theunitedstates.io/images/congress/original/";
    text1="<div>";
    text1=text1+"<div class=\"col-xs-6\"><a class=\"btn btn-sm btn-default\" style=\"float:left\" onclick=\"carouseltoprev()\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a><span style=\"font-weight:bold;font-size:15px\">&nbsp;Details</span></div>";  
    text1=text1+"<div class=\"col-xs-6\"><a class=\"btn btn-sm btn-default\" style=\"float:right\" id=\"favbtn\" onclick=\"favit(" +"'"+indexToLookup+"'"+","+"'"+tag+"'"+")\"><span class=\"glyphicon glyphicon-star-empty\"></span></a></div>";
    text1+="</div><hr>";
    text1+="<div><div class=\"col-sm-6\"><div class=\"col-md-12\"><div class=\"col-sm-6\">";
    text1=text1+"<img style=\"width:200px;height:200px; \" src='"+ur+obj.results[indexToLookup].bioguide_id+jp+"'>";
    text1+="</div><div class=\"col-sm-6 table-responsive\"><table class=\"table\"><tbody><tr>";
    text1=text1+"<td>"+obj.results[indexToLookup].title+" "+obj.results[indexToLookup].first_name+" "+obj.results[indexToLookup].last_name+"</td></tr>";
    if (typeof obj.results[indexToLookup].oc_email == "undefined" || obj.results[indexToLookup].oc_email == null)
        text1=text1+"<td> NA </td>";
    else
        text1=text1+"<tr><td><a target='_blank' href=mailto:"+obj.results[indexToLookup].oc_email+" >"+obj.results[indexToLookup].oc_email+"</a></td></tr>";
    text1=text1+"<tr><td>Chamber:"+" "+obj.results[indexToLookup].chamber.capitalize()+"</td></tr>";
    text1=text1+"<tr><td>Contact:"+" "+obj.results[indexToLookup].phone+ "</td></tr>";
    if (obj.results[indexToLookup].party == "R")
        text1=text1+"<td><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/r.png\"></img>&nbsp;&nbsp;Republican</td></tr>";
    else
        text1=text1+"<td><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/d.png\"></img>&nbsp;&nbsp;Democrat</td></tr>";         
    text1=text1+"</tbody></table></div></div><div class=\"col-md-12 table-responsive\"><table class=\"table\"><tbody>";
    text1=text1+"<tr><td>Start Term</td><td>"+moment(obj.results[indexToLookup].term_start).format('MMM DD[,] YYYY')+"</td></tr>";
    text1=text1+"<tr><td>End Term</td><td>"+moment(obj.results[indexToLookup].term_end).format('MMM DD[,] YYYY')+"</td></tr>";
    dated = 1000 * 3600 * 24;
    ProgressBar = Math.ceil(((new Date() - new Date(obj.results[indexToLookup].term_start)) / dated) / ((new Date(obj.results[indexToLookup].term_end) - new Date(obj.results[indexToLookup].term_start)) / dated) * 100);
    text1=text1+"<tr><td>Term</td><td><div class=\"progress\"><div class=\"progress-bar  progress-bar-success\" role=\"progressbar\" aria-valuenow=\"" + ProgressBar + " \" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:" + ProgressBar + "%\">"+ProgressBar+ "%</div></div></td></tr>"; 
    text1=text1+"<tr><td>Office</td><td>"+obj.results[indexToLookup].office+"</td></tr>";
    text1=text1+"<tr><td>State</td><td>"+obj.results[indexToLookup].state_name+"</td></tr>";
    
    if (typeof obj.results[indexToLookup].fax == "undefined" || obj.results[indexToLookup].fax == null)
        text1=text1+"<tr><td>Fax</td><td>NA</td></tr>";
    else
        text1=text1+"<tr><td>Fax</td><td>"+obj.results[indexToLookup].fax+"</td></tr>";
    text1=text1+"<tr><td>Birthday</td><td>"+moment(obj.results[indexToLookup].birthday).format('MMM DD[,] YYYY')+"</td></tr>";
    faceb="http://www.facebook.com/"+obj.results[indexToLookup].facebook_id; 
    tweet="http://www.twitter.com/"+obj.results[indexToLookup].twitter_id;
    web=obj.results[indexToLookup].website;
    text1=text1+"<tr><td>Social Links</td><td><a target='_blank' href="+tweet+"><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/t.png\"></img></a><a target='_blank' href="+faceb+"><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/f.png\"></img></a><a target='_blank' href="+web+"><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/w.png\"></img></a></td></tr>";
    text1=text1+"</tbody></table></div></div>";
    text1=text1+"<div class=\"col-sm-6\"><div class=\"table-responsive\">";
    text1=text1+"<h3>Committees</h3><div id=\"singh\">";
    text1=text1+ viewlegdetailcomm(obj.results[indexToLookup].bioguide_id);
    text1=text1+"</div><div class=\"table-responsive\">";
    text1=text1+"<h3>Bills</h3><div id=\"nicky\">";   
    text1=text1+ viewlegdetailBill(obj.results[indexToLookup].bioguide_id);
    text1=text1+"</div></div></div>";
    $("#view_details").html(text1);  
    carouseltonext();
    text1=text1+"<tbody></tbody></table>";
   
}
function viewlegdetailBill(bioguide){
     $.ajax({
    url:"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/hw8.php",
    datatype:"string",
    data:({main:'viewlegdetailBill',bioguide:bioguide}),
    type:"GET",
    success : function(data){
        writebilllegTable(data);
    },    
    error: function(){
        alert("no output found");}
    }
    );
}
function writebilllegTable(data){
    localStorage.setItem('key', data)
    var obj=JSON.parse(localStorage.getItem('key'));
    text="<div class = \"table-responsive\"><table class=\"table\"><thead><tr><th class=\"vol_1\">Bill ID</th><th class=\"vol_2\">Title</th><th class=\"vol_3\">Chamber</th><th class=\"vol_4\">Bill Type</th><th class=\"vol_5\">Congress</th><th class=\"vol_6\">Link</th></tr></thead><tbody>";
    for (var i=0;i<=obj.results.length-1;i++){
        text=text+"<tr>";   
        text+="<td class=\"vol_1\">"+obj.results[i].bill_id.toUpperCase()+"</td>";
        text+="<td class=\"vol_2\">"+obj.results[i].official_title+"</td>";
        text+="<td class=\"vol_3\">"+obj.results[i].chamber+"</td>";
        text+="<td class=\"vol_4\">"+obj.results[i].bill_type+"</td>";
        text+="<td class=\"vol_5\">"+obj.results[i].congress+"</td>";
        text+="<td class=\"vol_6\"><a target='_blank' href="+obj.results[i].last_version.urls.pdf+">Link</a></td>";
        text=text+"</tr>";
        
    }
    text1+="</tbody></table></div>";
    $("#nicky").html(text);
}
function viewlegdetailcomm(bioguide){
    $.ajax({
    url:"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/hw8.php",
    datatype:"string",
    data:({main:'viewlegdetailcomm',bioguide:bioguide}),
    type:"GET",
    success : function(data){
        writecommlegTable(data);
    },    
    error: function(){
        alert("no output found");}
    }
    );
}
function writecommlegTable(data){
    localStorage.setItem('key', data)
    var obj=JSON.parse(localStorage.getItem('key'));
    //text="<div class = \"table-responsive\"><table class=\"table\"><thead><tr><th>Chamber</th><th>Committee ID</th><th>Name</th></tr></thead><tbody>";
    text="<div class = \"table-responsive\"><table class=\"table\"><thead><tr><th class=\"col_1\">Chamber</th><th class=\"col_2\">Committee ID</th><th class=\"col_3\">Name</th></tr></thead><tbody>";
    for (var i=0;i<=obj.results.length-1;i++){
        text=text+"<tr>";   
        text+="<td class=\"col_1\">"+obj.results[i].chamber.capitalize()+"</td>";
        text+="<td class=\"col_2\">"+obj.results[i].committee_id.toUpperCase()+"</td>";
        text+="<td class=\"col_3\">"+obj.results[i].name+"</td>";
        text=text+"</tr>";
    }
    text1+="</tbody></table></div>";
    $("#singh").html(text);
    
}

function billblock(val){
    $.ajax({
    url:"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/hw8.php",
    datatype:"string",
    data:({main:'bill',chamber:val}),
    type:"GET",
    success : function(data){
        billstruct(data,val)
        
    },    
    error: function(){
        alert("no output found");}
    }
    );
}
function billstruct(data,val){
    var numofrows=0;
    //localStorage.setItem('key', data)
    //var obj=JSON.parse(localStorage.getItem('key'));
    if (val == "1"){
            var tag="active";
            localStorage.setItem('active', data)
            var obj=JSON.parse(localStorage.getItem('active'));
            text1="<table class=\"table\" id=\"billtableID\">";
            text1=text1+"<thead><tr><th>Bill ID</th><th>Bill Type</th><th>Title</th><th>Chamber</th><th>Introduced On</th><th>Sponsor</th><th></th></tr></thead>";
            text1=text1+"<tbody>";
            for (var i=0;i<=obj.results.length-1;i++){
                    text1=text1+"<tr>";
                    text1=text1+"<td>"+ obj.results[i].bill_id.toUpperCase()+"</td>";
                    text1=text1+"<td>"+ obj.results[i].bill_type.toUpperCase()+"</td>";
                    text1=text1+"<td>"+ obj.results[i].official_title+"</td>";
                    if (obj.results[i].chamber == "house")
                        text1=text1+"<td><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/h.png\"></img>"+" "+ obj.results[i].chamber+"</td>";
                    else
                        text1=text1+"<td><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/s.svg\"></img>"+" "+ obj.results[i].chamber+"</td>";    
                    text1=text1+"<td>"+ obj.results[i].introduced_on+"</td>";
                    text1=text1+"<td>"+obj.results[i].sponsor.title+" "+obj.results[i].sponsor.first_name+" "+obj.results[i].sponsor.last_name+"</td>";
                    text1=text1+"<td><button type=\"button\" class=\"btn btn-primary\" onclick=\"viewBillDetails(" +"'"+i+"'"+","+"'"+tag+"'"+")\">View Details</button></td>";
                    text1=text1+"</tr>";  
                ++numofrows;
            }
            text1=text1+"</tbody>";
            text1=text1+"</table>";
            text1+="<nav aria-label=\"Page navigation\" style=\"display:block;text-align:center\"><ul class=\"pagination\" id=\"pagination\"></ul></nav>";
            $("#display").html(text1);
            var obj = $('#pagination').twbsPagination({
                totalPages: Math.ceil(numofrows / 10),
                visiblePages: 6,
                onPageClick: function (event, page)
                {
                    current_page_index = page;
                    paginatefunction(page,10,Math.ceil(numofrows / 10), 2);
                }
            }); 
    }
    else{ 
            var tag="new1";
            localStorage.setItem('new1', data)
            var obj=JSON.parse(localStorage.getItem('new1'));
            text1="<table class=\"table\" id=\"billtableID\">";
            text1=text1+"<thead><tr><th>Bill ID</th><th>Bill Type</th><th>Title</th><th>Chamber</th><th>Introduced On</th><th>Sponsor</th><th></th></tr></thead>";
            text1=text1+"<tbody>";
            for (var i=0;i<=obj.results.length-1;i++){
                    text1=text1+"<tr>";
                    text1=text1+"<td>"+ obj.results[i].bill_id.toUpperCase()+"</td>";
                    text1=text1+"<td>"+ obj.results[i].bill_type.toUpperCase()+"</td>";
                    text1=text1+"<td>"+ obj.results[i].official_title+"</td>";
                    if (obj.results[i].chamber == "house")
                        text1=text1+"<td><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/h.png\"></img>"+" "+ obj.results[i].chamber+"</td>";
                    else
                        text1=text1+"<td><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/s.svg\"></img>"+" "+ obj.results[i].chamber+"</td>"; 
                    text1=text1+"<td>"+ obj.results[i].introduced_on+"</td>";
                    text1=text1+"<td>"+obj.results[i].sponsor.title+" "+obj.results[i].sponsor.first_name+" "+obj.results[i].sponsor.last_name+"</td>";
                    text1=text1+"<td><button type=\"button\" class=\"btn btn-primary\" onclick=\"viewBillDetails(" +"'"+i+"'"+","+"'"+tag+"'"+")\">View Details</button></td>";
                    text1=text1+"</tr>";
                    ++numofrows;
            }
            text1=text1+"</tbody>";
            text1=text1+"</table>";
            text1+="<nav aria-label=\"Page navigation\" style=\"display:block;text-align:center\"><ul class=\"pagination\" id=\"pagination\"></ul></nav>";
            $("#display").html(text1);
            var obj = $('#pagination').twbsPagination({
                totalPages: Math.ceil(numofrows / 10),
                visiblePages: 6,
                onPageClick: function (event, page)
                {
                    current_page_index = page;
                    paginatefunction(page,10,Math.ceil(numofrows / 10), 2);
                }
            }); 
    }  
}

function viewBillDetails(indexToLookup,tag){
    var obj=JSON.parse(localStorage.getItem(tag));
    var j="bill";
    text1="<div>";
    text1=text1+"<div class=\"col-xs-6\"><a class=\"btn btn-sm btn-default\" style=\"float:left\" onclick=\"carouseltoprev()\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a><span style=\"font-weight:bold;font-size:15px\">&nbsp;Details</span></div>";  
    text1=text1+"<div class=\"col-xs-6\"><a class=\"btn btn-sm btn-default\" style=\"float:right\" id=\"favbtn\" onclick=\"favit(" +"'"+indexToLookup+"'"+","+"'"+tag+"'"+")\"><span class=\"glyphicon glyphicon-star-empty\"></span></a></div>";
    text1+="</div><div><hr></div";
    
    text1+="<div class=\"row\"><div class=\"col-sm-6 col-xs-12 table-responsive\">";
    text1=text1+"<table class=\"table\"><tbody>";
    text1=text1+"<tr><td>Bill ID</td><td>"+obj.results[indexToLookup].bill_id.toUpperCase()+"</td></tr>";
    text1=text1+"<tr><td>Title</td><td>"+obj.results[indexToLookup].official_title+"</td></tr>";
    text1=text1+"<tr><td>Bill Type</td><td>"+obj.results[indexToLookup].bill_type.toUpperCase()+"</td></tr>";
    text1=text1+"<tr><td>Sponsor</td><td>"+obj.results[indexToLookup].sponsor.title+" "+obj.results[indexToLookup].sponsor.first_name+" "+obj.results[indexToLookup].sponsor.last_name+"</td></tr>";
    text1=text1+"<tr><td>Chamber</td><td>"+obj.results[indexToLookup].chamber.capitalize()+"</td></tr>";
    //text1=text1+"<tr><td>Status</td><td>"+obj.results[indexToLookup].history.active+"</td></tr>";
    if (tag == "new1")
        text1=text1+"<tr><td>Status</td><td>New</td></tr>";
    else
        text1=text1+"<tr><td>Status</td><td>Active</td></tr>";
    text1=text1+"<tr><td>Introduced On</td><td>"+moment(obj.results[indexToLookup].introduced_on).format('MMM DD[,] YYYY')+"</td></tr>";
    text1=text1+"<tr><td>Congress URL</td><td><a target='_blank' href="+obj.results[indexToLookup].urls.congress+">URL</a></td></tr>";
    text1=text1+"<tr><td>Version Status</td><td>"+obj.results[indexToLookup].last_version.version_name+"</td></tr>";
    text1=text1+"<tr><td>Bill URL</td><td><a target='_blank' href="+obj.results[indexToLookup].last_version.urls.pdf+">Link</a></td></tr>";
    text1=text1+"</tbody></table>";
    text1=text1+"</div><div class=\"col-sm-6 col-xs-12 table-responsive\">";
    text1=text1+"<embed src="+obj.results[indexToLookup].last_version.urls.pdf+" width=\"480\" height=\"500\" type='application/pdf'>";
    text1=text1+"</div></div>";
    
//    text1+="<div class=\"tab-content\"><div class=\"col-xs-6 tab-pane fade in active\">";       
//    text1=text1+"<table class=\"table\"><tbody>";
//    text1=text1+"<tr><td>Bill ID</td><td>"+obj.results[indexToLookup].bill_id.toUpperCase()+"</td></tr>";
//    text1=text1+"<tr><td>Title</td><td>"+obj.results[indexToLookup].official_title+"</td></tr>";
//    text1=text1+"<tr><td>Bill Type</td><td>"+obj.results[indexToLookup].bill_type.toUpperCase()+"</td></tr>";
//    text1=text1+"<tr><td>Sponsor</td><td>"+obj.results[indexToLookup].sponsor.title+" "+obj.results[indexToLookup].sponsor.first_name+" "+obj.results[indexToLookup].sponsor.last_name+"</td></tr>";
//    text1=text1+"<tr><td>Chamber</td><td>"+obj.results[indexToLookup].chamber.capitalize()+"</td></tr>";
//    //text1=text1+"<tr><td>Status</td><td>"+obj.results[indexToLookup].history.active+"</td></tr>";
//    if (tag == "new1")
//        text1=text1+"<tr><td>Status</td><td>New</td></tr>";
//    else
//        text1=text1+"<tr><td>Status</td><td>Active</td></tr>";
//    text1=text1+"<tr><td>Introduced On</td><td>"+moment(obj.results[indexToLookup].introduced_on).format('MMM DD[,] YYYY')+"</td></tr>";
//    text1=text1+"<tr><td>Congress URL</td><td><a target='_blank' href="+obj.results[indexToLookup].urls.congress+">URL</a></td></tr>";
//    text1=text1+"<tr><td>Version Status</td><td>"+obj.results[indexToLookup].last_version.version_name+"</td></tr>";
//    text1=text1+"<tr><td>Bill URL</td><td><a target='_blank' href="+obj.results[indexToLookup].last_version.urls.pdf+">Link</a></td></tr>";
//    text1=text1+"</tbody></table></div>";
//    text1=text1+"<div class=\"col-xs-6 tab-pane fade in active\">";
//    text1=text1+"<embed src="+obj.results[indexToLookup].last_version.urls.pdf+" width=\"480\" height=\"500\" type='application/pdf'></div></div>";  
    $("#view_details").html(text1);
    carouseltonext();
    
}

function commblock(val){
    $.ajax({
    url:"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/hw8.php",
    datatype:"string",
    data:({main:'committe',chamber:val}),
    type:"GET",
    success : function(data){
        //alert(data);
        commstruct(data,val)
    },    
    error: function(){
        alert("no output found");
    }
    });
}
function commstruct(data,val){  
    var numofrows=0;
    //localStorage.setItem('key', data)
    var j="comm";
    //var obj=JSON.parse(localStorage.getItem('key'));
    if (val == "1"){
        var tag="commhouse";
        localStorage.setItem('commhouse', data)
        var obj=JSON.parse(localStorage.getItem('commhouse'));
        text1="<table class=\"table\" id=\"commtableID\">";
        text1=text1+"<thead><tr><th></th><th>Chamber</th><th>Committee ID</th><th>Name</th><th>Parent Committee </th><th>Contact</th><th>Office</th></tr></thead>";
        text1=text1+"<tbody>";
        for (var i=0;i<=obj.results.length-1;i++){
            text1=text1+"<tr>";
             
            
            text1=text1+"<td><span class=\"float-right\"><button class=\"btn btn-default btn-sm\" id = \"favbtn\" onclick=favit(" +"'"+i+"'"+","+"'"+tag+"'"+")><i class=\"fa fa-star-o\" aria-hidden=\"true\"></i></button></span></td>";
            
           
            
            text1=text1+"<td><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/h.png\"></img>"+" "+ obj.results[i].chamber.capitalize()+"</td>";
            text1=text1+"<td>"+ obj.results[i].committee_id+"</td>";
            text1=text1+"<td>"+ obj.results[i].name+"</td>";
            
            if (typeof obj.results[i].parent_committee_id == "undefined" || obj.results[i].parent_committee_id == null)
                text1=text1+"<td> NA </td>";
            else
                text1=text1+"<td>"+ obj.results[i].parent_committee_id+"</td>";
            
            //text1=text1+"<td>"+ obj.results[i].parent_committee_id+"</td>";

            text1=text1+"<td>"+ obj.results[i].phone+"</td>";

//            text1=text1+"<td>"+ obj.results[i].office+"</td>";
            if (typeof obj.results[i].office == "undefined" || obj.results[i].office == null)
                text1=text1+"<td> NA </td>";
            else
                text1=text1+"<td>"+ obj.results[i].office+"</td>";
            
            text1=text1+"</tr>";
            ++numofrows;
        }
        text1=text1+"</tbody>";
        text1=text1+"</table>";
        text1+="<nav aria-label=\"Page navigation\" style=\"display:block;text-align:center\"><ul class=\"pagination\" id=\"pagination\"></ul></nav>";
            $("#display").html(text1);
            var obj = $('#pagination').twbsPagination({
                totalPages: Math.ceil(numofrows / 10),
                visiblePages: 6,
                onPageClick: function (event, page)
                {
                    current_page_index = page;
                    paginatefunction(page,10,Math.ceil(numofrows / 10), 3);
                }
            }); 
    }
    else if (val == "2"){
        var tag="commsenate";
        localStorage.setItem('commsenate', data)
        var obj=JSON.parse(localStorage.getItem('commsenate'));
        if (obj.results.length > 0)
        text1="<table class=\"table\" id=\"commtableID\">";
        text1=text1+"<thead><tr><th></th><th>Chamber</th><th>Committee ID</th><th>Name</th><th>Parent Committee </th></tr></thead>";
        text1=text1+"<tbody>";
        for (var i=0;i<=obj.results.length-1;i++){
            
            text1=text1+"<tr>";
            
            
            text1=text1+"<td><span class=\"float-right\"><button class=\"btn btn-default btn-sm\" id = \"favbtn\" onclick=favit(" +"'"+i+"'"+","+"'"+tag+"'"+")><i class=\"fa fa-star-o\" aria-hidden=\"true\"></i></button></span></td>";
            
            text1=text1+"<td><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/s.svg\"></img>"+" "+ obj.results[i].chamber.capitalize()+"</td>";
            text1=text1+"<td>"+ obj.results[i].committee_id+"</td>";
            text1=text1+"<td>"+ obj.results[i].name+"</td>";
            text1=text1+"<td>"+ obj.results[i].parent_committee_id+"</td>";
            text1=text1+"</tr>";
            ++numofrows;
        }
        text1=text1+"</tbody>";
        text1=text1+"</table>";
        text1+="<nav aria-label=\"Page navigation\" style=\"display:block;text-align:center\"><ul class=\"pagination\" id=\"pagination\"></ul></nav>";
        $("#display").html(text1);
        var obj = $('#pagination').twbsPagination({
                totalPages: Math.ceil(numofrows / 10),
                visiblePages: 6,
                onPageClick: function (event, page)
                {
                    current_page_index = page;
                    paginatefunction(page,10,Math.ceil(numofrows / 10), 3);
                }
            }); 
    }
    else{
        var tag="commjoint";
        localStorage.setItem('commjoint', data)
        var obj=JSON.parse(localStorage.getItem('commjoint'));
        text1="<table class=\"table\" id=\"commtableID\">";
        text1=text1+"<thead><tr><th></th><th>Chamber</th><th>Committee ID</th><th>Name</th></tr></thead>";
        text1=text1+"<tbody>";
        for (var i=0;i<=obj.results.length-1;i++){
            text1=text1+"<tr>";
               
            text1=text1+"<td><span class=\"float-right\"><button class=\"btn btn-default btn-sm\" id = \"favbtn\" onclick=favit(" +"'"+i+"'"+","+"'"+tag+"'"+")><i class=\"fa fa-star-o\" aria-hidden=\"true\"></i></button></span></td>";
            
            text1=text1+"<td><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/s.svg\"></img>&nbsp;"+ obj.results[i].chamber.capitalize()+"</td>";
            text1=text1+"<td>"+ obj.results[i].committee_id+"</td>";
            text1=text1+"<td>"+ obj.results[i].name+"</td>";
            text1=text1+"</tr>";
            ++numofrows;
        }
        text1=text1+"</tbody>";
        text1=text1+"</table>";
        text1+="<nav aria-label=\"Page navigation\" style=\"display:block;text-align:center\"><ul class=\"pagination\" id=\"pagination\"></ul></nav>";
        $("#display").html(text1);
        var obj = $('#pagination').twbsPagination({
                totalPages: Math.ceil(numofrows / 10),
                visiblePages: 6,
                onPageClick: function (event, page)
                {
                    current_page_index = page;
                    paginatefunction(page,10,Math.ceil(numofrows / 10), 3);
                }
            }); 
    }
}

function legisFav(){
    
    text="<table id =\"favlegtable\" class=\"table\"><thead><tr><th></th><th>Image</th><th>Party</th><th>Name</th><th>Chamber</th><th>State</th><th>Email</th><th></th></tr></thead>";
    text+="<tbody id=\"legtb\">" + legmarkedFav('leghouse','fav_leghouse');
    text+="<tbody id=\"legtb\">" + legmarkedFav('legstate','fav_legstate');
    text+="<tbody id=\"legtb\">" + legmarkedFav('legsenate','fav_legsenate');  
    text+="</tbody></table>";
    $("#display").html(text);
}

function legmarkedFav(mainstorage,favlist){

    var obj= JSON.parse(localStorage.getItem(mainstorage));
    var list= JSON.parse(localStorage.getItem(favlist));
    if(list == null)
            list = [];
    var text1 ="";
    
        for (var i=0;i < list.length;i++){

        text1+="<tr>";  
        text1+="<td><button type=\"button\" class=\"btn btn-default\" onclick =\"deleteI(" +"'"+list[i]+"'"+","+"'"+favlist+"'"+   ","+"'"+mainstorage+"'"+      ")\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>";
        text1+="</td><td>"
        text1+='<img class = "img-auto" style=\"width:33px;display:block;float:left;\" src="https://theunitedstates.io/images/congress/original/' + obj.results[parseInt(list[i])].bioguide_id + '.jpg">';
        text1+="</td><td>"
        text1+=obj.results[parseInt(list[i])].party == 'R' ? "<img style=\"width:33px;display:block;float:left;\" class = \"img-auto\" src = \"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/r.png\">" : "<img style=\"width:33px;display:block;float:left;\" class = \"img-auto\" src = \"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/d.png\">";
        text1+="</td><td>";
        text1+=obj.results[parseInt(list[i])].last_name + ", " + obj.results[parseInt(list[i])].first_name;
        text1+="</td><td>";
        text1+=obj.results[parseInt(list[i])].chamber == 'senate' ? " <img style=\"width:33px;display:block;float:left;\" class = \"img-auto\" src = \"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/s.svg\">&nbsp;  Senate" : "<img style=\"width:33px;display:block;float:left;\" class = \"img-auto\" src = \"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/h.png\">&nbsp;   House";
        text1+="</td><td>";
        text1+=obj.results[parseInt(list[i])].state_name;
        text1+="</td><td>";
            //edit here
        
        //text1+="<a target='_blank' href=mailto:"+obj.results[indexToLookup].oc_email+" >"+obj.results[indexToLookup].oc_email+"</a>";
            
        text1+=obj.results[parseInt(list[i])].oc_email == null ? 'N.A.' : ('<a target="_blank" href =mailto:"' + obj.results[parseInt(list[i])].oc_email + '">' + obj.results[parseInt(list[i])].oc_email.toLowerCase() + '</a>');
        text1+="</td><td>";
        text1+="<button type=\"button\" class=\"btn btn-primary\" onclick=\"viewLegDetails(" +"'"+parseInt(list[i])+"'"+","+"'"+mainstorage+"'"+")\">View Details</button>";
        text1+="</td>"
        text1+="</tr>";  
    }
    
    return text1;
    
   // $("#legtb").html(text1);
}
function deleteI(index,favlist, mainstorage){
//   console.log(favlist);
//    console.log(index);
//     console.log(typeof (index));
  
     var list1= JSON.parse(localStorage.getItem(favlist));
    for(var i=0; i< list1.length; i++){
        if(index ==list1[i] ){
            indexToRemove = i;
            break;
        }
    }
    if(list1.length != 0)
        list1.splice(indexToRemove, 1);
    else
        list1 =[];
    localStorage.setItem(favlist, JSON.stringify(list1));
   // var indexToRemove = parseInt(index) + 1;
    var removeValue =  indexToRemove+1;
   $( '#legtb >:nth-child(' +removeValue+')' ).remove();
}

function deleteBill(index,favlist, mainstorage){  
     var list1= JSON.parse(localStorage.getItem(favlist));
    for(var i=0; i< list1.length; i++){
        if(index ==list1[i] ){
            indexToRemove = i;
            break;
        }
    }
    if(list1.length != 0)
        list1.splice(indexToRemove, 1);
    else
        list1 =[];
    
    localStorage.setItem(favlist, JSON.stringify(list1));
   // var indexToRemove = parseInt(index) + 1;
    var removeValue =  indexToRemove+1;
   $( '#billtb >:nth-child(' +removeValue+')' ).remove();
}

function billFav(){
    text="<table id =\"favbilltable\" class=\"table\"><thead><tr><th></th><th>Bill ID</th><th>Bill Type</th><th>Title</th><th>Chamber</th><th>Introduced On</th><th>Sponsor</th><th></th></tr></thead>";
    text+="<tbody id=\"billtb\">" + billmarkedFav('active','fav_active');
    text+="<tbody id=\"billtb\">" + billmarkedFav('new1','fav_new1');
    text+="</tbody></table>";
    $("#display").html(text);
}
function billmarkedFav(mainstorage,favlist){
    var obj= JSON.parse(localStorage.getItem(mainstorage));
    var list= JSON.parse(localStorage.getItem(favlist));
     if(list == null)
            list = [];
    var text1 ="";
    for (var i=0;i < list.length;i++){
        text1+="<tr>";
        text1+="<td><button type=\"button\" class=\"btn btn-default\" onclick =\"deleteBill(" +"'"+list[i]+"'"+","+"'"+favlist+"'"+   ","+"'"+mainstorage+"'"+      ")\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>";
        text1+="</td><td>";
        text1+=obj.results[parseInt(list[i])].bill_id.toUpperCase();
        text1+="</td><td>";
        text1+=obj.results[parseInt(list[i])].bill_type.toUpperCase();
        text1+="</td><td>";
        text1+=obj.results[parseInt(list[i])].official_title;
        text1+="</td><td>";
        text1+=obj.results[parseInt(list[i])].chamber == 'senate' ? " <img style=\"width:33px;display:block;float:left;\" class = \"img-auto\" src = \"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/s.svg\">  Senate" : "<img style=\"width:33px;display:block;float:left;\" class = \"img-auto\" src = \"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/h.png\">   House";
        text1+="</td><td>";
        text1+=obj.results[parseInt(list[i])].introduced_on;
        text1+="</td><td>";
        text1+=obj.results[parseInt(list[i])].sponsor.title + '. ' + obj.results[parseInt(list[i])].sponsor.last_name + ', ' +  obj.results[parseInt(list[i])].sponsor.first_name;
        text1+="</td><td>";
        text1+= "<button type=\"button\" class=\"btn btn-primary\" onclick=\"viewBillDetails(" +"'"+parseInt(list[i])+"'"+","+"'"+mainstorage+"'"+")\">View Details</button>";
        text1+="</td><td>";
        text1+="</tr>"; 
    }
    return text1;
//viewBillDetails(" +"'"+parseInt(list[i])+"'"+","+"'"+mainstorage+"'"+")    
    
}
function commfav(){
    text="<table id =\"favcommtable\" class=\"table\"><thead><tr><th></th><th>Chamber</th><th>Committee ID</th><th>Name</th><th>Parent Committee</th><th>Sub Committee</th></tr></thead>";
    text+="<tbody id=\"commtb\">" + commmarkedFav('commhouse','fav_commhouse');
    text+="<tbody id=\"commtb\">" + commmarkedFav('commsenate','fav_commsenate');
    text+="<tbody id=\"commtb\">" + commmarkedFav('commjoint','fav_commjoint');
    text+="</tbody></table>";
    $("#display").html(text);
}
function commmarkedFav(mainstorage,favlist){
    var obj= JSON.parse(localStorage.getItem(mainstorage));
    var list= JSON.parse(localStorage.getItem(favlist));
    if(list == null)
            list = [];
    //console.log(obj);
    //console.log(list);
    var text1 ="";
    for (var i=0;i < list.length;i++){
        text1+="<tr>";
        text1+="<td><button type=\"button\" class=\"btn btn-default\" onclick =\"deleteComm(" +"'"+list[i]+"'"+","+"'"+favlist+"'"+   ","+"'"+mainstorage+"'"+      ")\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>";
        text1+="</td>";
        
        
        if (obj.results[parseInt(list[i])].chamber == "house")
            text1+="<td><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/h.png\"></img>&nbsp; Senate</td>";
        else if(obj.results[parseInt(list[i])].chamber == "senate")
            text1+="<td><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/s.svg\"></img>&nbsp; Senate</td>";
        else
            text1+="<td><img style=\"width:33px;display:block;float:left;\" src=\"http://congress.qzfd3282bu.us-west-2.elasticbeanstalk.com/images/s.svg\"></img>&nbsp; Joint</td>";
        
        text1+="</td><td>";
        text1+=obj.results[parseInt(list[i])].committee_id.toUpperCase();
        text1+="</td><td>";
        text1+=obj.results[parseInt(list[i])].name;
        text1+="</td><td>";
        text1+=obj.results[parseInt(list[i])].parent_committee_id;
        text1+="</td><td>";
        text1+=obj.results[parseInt(list[i])].subcommittee ? 'True' : 'False';
        text1+="</td>";
        text1+="</tr>";
    }
    
    
    
    return text1;
}
function deleteComm(index,favlist, mainstorage){  
     var list1= JSON.parse(localStorage.getItem(favlist));
    for(var i=0; i< list1.length; i++){
        if(index ==list1[i] ){
            indexToRemove = i;
            break;
        }
    }
    if(list1.length != 0)
        list1.splice(indexToRemove, 1);
    else
        list1 =[];
    
    localStorage.setItem(favlist, JSON.stringify(list1));
   // var indexToRemove = parseInt(index) + 1;
    var removeValue =  indexToRemove+1;
   $( '#commtb >:nth-child(' +removeValue+')' ).remove();
}
function favit(index,tag){
    document.getElementById('favbtn').innerHTML = '<i class="fa fa-star" aria-hidden="true" style="color:yellow"></i>';
    var favvtag="fav_"+tag;
    var obj=JSON.parse(localStorage.getItem(favvtag));
     if(obj == null)
            obj = [];    
    var checkDuplicate =  obj.indexOf(index)
  if( checkDuplicate != -1)
      return;
    
    if (obj == null){
       var storeContent = [];
        
        storeContent.push(index);
        localStorage.setItem(favvtag,JSON.stringify(storeContent));
    }
    else{
        obj.push(index);
        localStorage.setItem(favvtag,JSON.stringify(obj));
   }

 }
    
   

function searchdata()
{
    var textInput = document.getElementById("legsearchID").value;
    var tableRows = document.getElementById("legistableID").getElementsByTagName('tr');

    for(var rowc = 1; rowc < tableRows.length; ++rowc)
    {
        if( tableRows[rowc].getElementsByTagName('td')[1].innerHTML.toUpperCase().indexOf(textInput.toUpperCase()) >  -1 ||
            tableRows[rowc].getElementsByTagName('td')[2].innerHTML.toUpperCase().indexOf(textInput.toUpperCase()) >  -1 ||
            tableRows[rowc].getElementsByTagName('td')[3].innerHTML.toUpperCase().indexOf(textInput.toUpperCase()) >  -1 ||
            tableRows[rowc].getElementsByTagName('td')[4].innerHTML.toUpperCase().indexOf(textInput.toUpperCase()) >  -1
          )
        {
            tableRows[rowc].style.display = "";
        }
        else
        {
            tableRows[rowc].style.display = "none";
        }
    }
}

//search for bills
function searchdataBills(){
    var textInput = document.getElementById("billsearchID").value;
    var tableRows = document.getElementById("billtableID").getElementsByTagName('tr');
    for(var rowc = 1; rowc < tableRows.length; ++rowc){
        if( tableRows[rowc].getElementsByTagName('td')[0].innerHTML.toUpperCase().indexOf(textInput.toUpperCase()) >  -1 ||
            tableRows[rowc].getElementsByTagName('td')[1].innerHTML.toUpperCase().indexOf(textInput.toUpperCase()) >  -1 ||
            tableRows[rowc].getElementsByTagName('td')[2].innerHTML.toUpperCase().indexOf(textInput.toUpperCase()) >  -1 ||
            tableRows[rowc].getElementsByTagName('td')[3].innerHTML.toUpperCase().indexOf(textInput.toUpperCase()) >  -1 ||
            tableRows[rowc].getElementsByTagName('td')[4].innerHTML.toUpperCase().indexOf(textInput.toUpperCase()) >  -1 ||
            tableRows[rowc].getElementsByTagName('td')[5].innerHTML.toUpperCase().indexOf(textInput.toUpperCase()) >  -1
          )
            {
            tableRows[rowc].style.display = "";
        }
        else
        {
            tableRows[rowc].style.display = "none";
        } 
    }
}

function searchdataComm(){
    var textInput = document.getElementById("commsearchID").value;
    var tableRows = document.getElementById("commtableID").getElementsByTagName('tr');
    var tavtd= document.getElementById("commtableID").getElementsByTagName('td');
    for(var rowc = 1; rowc < tableRows.length; ++rowc){
        alert(tavtd.length);
        if( tableRows[rowc].getElementsByTagName('td')[1].innerHTML.toUpperCase().indexOf(textInput.toUpperCase()) >  -1 ||
            tableRows[rowc].getElementsByTagName('td')[2].innerHTML.toUpperCase().indexOf(textInput.toUpperCase()) >  -1 ||
            tableRows[rowc].getElementsByTagName('td')[3].innerHTML.toUpperCase().indexOf(textInput.toUpperCase()) >  -1 
          )
            {
            tableRows[rowc].style.display = "";
        }
        else
        {
            tableRows[rowc].style.display = "none";
        } 
    }
}


function stateDropDown ()
{
    var text;
    
    text  = '<select id=\"statename\" onChange="search_state()" style="float:right">';
    text +='<option value="All States">All States </option>';
    text +='<option value="Albama">Alabama       </option>'; 
    text +='<option >Alaska        </option>';
    text +='<option>Arizona       </option>'; 
    text +='<option>Arkansas      </option>';
    text +='<option>California    </option>'; 
    text +='<option>Colorado      </option>';
    text +='<option>Connecticut   </option>'; 
    text +='<option>Delaware      </option>';
    text +='<option>Florida       </option>'; 
    text +='<option>Georgia       </option>';
    text +='<option>Hawaii        </option>'; 
    text +='<option>Idaho         </option>';
    text +='<option>Illinois      </option>'; 
    text +='<option>Indiana       </option>';
    text +='<option>Iowa          </option>'; 
    text +='<option>Kansas        </option>';
    text +='<option>Kentucky      </option>'; 
    text +='<option>Louisiana     </option>';
    text +='<option>Maine         </option>'; 
    text +='<option>Maryland      </option>';
    text +='<option>Massachusetts </option>'; 
    text +='<option>Michigan      </option>';
    text +='<option>Minnesota     </option>'; 
    text +='<option>Mississippi   </option>';
    text +='<option>Missouri      </option>'; 
    text +='<option>Montana       </option>';
    text +='<option >Nebraska     </option>'; 
    text +='<option>Nevada        </option>';
    text +='<option>New Hampshire </option>'; 
    text +='<option>New Jersey    </option>';
    text +='<option>New Mexico    </option>'; 
    text +='<option>New York      </option>';
    text +='<option>North Carolina</option>'; 
    text +='<option>North Dakota  </option>';
    text +='<option>Ohio          </option>'; 
    text +='<option>Oklahoma      </option>';
    text +='<option>Oregon        </option>'; 
    text +='<option>Pennsylvania  </option>';
    text +='<option>Rhode Island  </option>'; 
    text +='<option>South Carolina</option>';
    text +='<option>South Dakota  </option>'; 
    text +='<option>Tennessee     </option>';
    text +='<option>Texas         </option>'; 
    text +='<option>Utah          </option>';
    text +='<option>Vermont       </option>'; 
    text +='<option>Virginia      </option>';
    text +='<option>Washington    </option>'; 
    text +='<option>West Virginia </option>';
    text +='<option>Wisconsin     </option>'; 
    text +='<option>Wyoming       </option>'; 
    text += '</select>';

    return text;
}


function search_state()
{   
  var selectedanswer=document.getElementById("statename").selectedIndex;
    var clickedItem = document.getElementsByTagName("option")[selectedanswer].value;
    
 // var textInput = document.getElementById("commsearchID").value;
    var tableRows = document.getElementById("legistableID").getElementsByTagName('tr');
    var tavtd= document.getElementById("legistableID").getElementsByTagName('td');
    for(var rowc = 1; rowc < tableRows.length; ++rowc){
        var curr = tableRows[rowc].getElementsByTagName('td')[4];
        if( tableRows[rowc].getElementsByTagName('td')[4].innerHTML == clickedItem)
            {
            tableRows[rowc].style.display = "";
        }
        else
        {
            tableRows[rowc].style.display = "none";
        } 
    }
}
function searchBox()
{
    var text;
    text = '<input style="float:right" type="text" id="legsearchID" onkeyup="searchdata()" placeholder="Search">';
    return text;
}
function searchBoxBills()
{
    var text;
    text = '<input style="float:right" type="text" id="billsearchID" onkeyup="searchdataBills()" placeholder="Search">';
    return text;
}
function searchBoxComm(){
    var text;
    text = '<input style="float:right" type="text" id="commsearchID" onkeyup="searchdataComm()" placeholder="Search">';
    return text;
}

function init_carousal()
{
    $("#myCarousel").carousel({interval:false});
}


function carouseltoprev()
{
    $("#myCarousel").carousel("prev");
    
}

function carouseltonext()
{
    $("#myCarousel").carousel("next");
}

function init_system()
{
    init_carousal();
    header(1);

}
