/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

document.getElementById('SignUpAjaxButton').addEventListener("click", signUpfunc);
document.getElementById('loginButton').addEventListener("click", loginfunc);

var user = '';
var password = '';
var name = '';
var surname = '';
var phone = '';
var address = '';
var country = '';
var city = '';
var prog = '';
var pers_train = '';
var date = '';
var msg = '';
var startTime = '';
var finnishTime = '';
var today = '';
var trainName = '';
var DisHours = [];
var dur='';
//var day='';
function signUpfunc() {
    name = $('#name').val();
    surname = $('#surname').val();
    user = $('#user').val();
    password = $('#pass').val();
    phone = $('#phone').val();
    address = $('#address').val();
    country = $('#country').val();
    city = $('#city').val();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("mentionDB").innerHTML = this.responseText;
        }
    };
    $('#detailsUsersSignUp').fadeOut();
    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/register.php?name=" + name + '&surname=' + surname + '&username=' + user + '&phone=' + phone + '&address=' + address + '&country=' + country + '&city=' + city + '&password=' + password, true);
    xhttp.send();
}

function loginfunc() {
    user = $('#username').val();
    password = $('#password').val();
    localStorage.Username = user;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            if (msg === 'logged in ' + user) {
                window.location = "loggedUsers.html";
            } else if (msg === 'administrator')
                window.location = "loggedAdmin.html";
            else if (msg === 'trainer')
                window.location = "loggedTrainers.html";
            else
                $('#loginMention').text("Wrong username or password");
        }
    };
    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/login.php?username=" + user + '&password=' + password, true);
    xhttp.send();


}



$('#backToLoginPageButton').on('click', function () {
    window.location.replace("#loginPage");
});

function logout() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            localStorage.Username = "";
            window.location.replace('index.html#loginPage');
        }
    };
    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/logout.php", true);
    xhttp.send();
}

function showStaff() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            $('#showStaff').html(msg).toggle(3000);

        }
    };
    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/showStaff.php", true);
    xhttp.send();

}

function ShowPrograms() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            document.getElementById('addStaff2').innerHTML = msg;
        }
    };
    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/ShowPrograms.php", true);
    xhttp.send();
}

function addStaff() {
    ShowPrograms();
    TrainUserName = $('#TrainUserName').val();
    TrainName = $('#TrainName').val();
    TrainSurName = $('#TrainSurName').val();
    TrainAge = $('#TrainAge').val();
    TrainStartTime = $('#TrainStartTime').val();
    TrainFinnishTime = $('#TrainFinnishTime').val();
    TrainPass = $('#TrainPass').val();
    var progs = [];
    var chooseProgs = [];
    var x = document.getElementsByName("ProgramName");
    for (i = 0; i < x.length; i++) {
        progs[i] = document.getElementsByName("ProgramName")[i].value;
        if (x[i].checked == true)
            chooseProgs[i] = 'true';
        else
            chooseProgs[i] = 'false';
    }


    if ($('#addStaffForm input:checked').length < 1) {
        window.alert("You should check at least one trainer");
        throw new Error("You should check at least one trainer");
    }



    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            $('#addStaff').html(msg);
        }
    };
    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/addStaff.php?TrainUserName=" + TrainUserName + '&TrainName=' + TrainName + '&TrainSurName=' + TrainSurName + '&TrainAge=' + TrainAge + '&TrainStartTime=' + TrainStartTime + '&TrainFinnishTime=' + TrainFinnishTime + '&progs[]=' + progs + '&chooseProgs[]=' + chooseProgs +'&TrainPass=' + TrainPass, true);
    xhttp.send();

}

function showDelServ() {
    var xhttl = new XMLHttpRequest();
    xhttl.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            $('#msgdelServ').html(msg);
        }
    };
    xhttl.open("GET", "https://ptyxiaki.000webhostapp.com/ChooseDelServ.php", true);
    xhttl.send();
}

function showDelStaff() {
    var xhttl = new XMLHttpRequest();
    xhttl.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            $('#msgdelStaff').html(msg);
        }
    };
    xhttl.open("GET", "https://ptyxiaki.000webhostapp.com/ChooseTraindeleteStaff.php", true);
    xhttl.send();
}

function delStaff() {
    if ($("input[name='TrainDel']:checked").val()) {
        var deleteStaff = $("input[name='TrainDel']:checked").val();
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                msg = this.responseText;
                $('#deleteStaff').html(msg).hide(5000);
            }
        };
        xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/deleteStaff.php?UserName=" + deleteStaff, true);
        xhttp.send();
    }
}

function showTrainers() {
    var xhttl = new XMLHttpRequest();
    xhttl.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            $('#addServeTrain').html(msg);
        }
    };
    xhttl.open("GET", "https://ptyxiaki.000webhostapp.com/addServeTrain.php", true);
    xhttl.send();
}

function addServe() {
    name = document.getElementById('addedService').value;
    description = document.getElementById('addDescription').value;
    duration = document.getElementById('addDuration').value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            $('#AddService').html(msg).hide(5000);
        }
    };
    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/addService.php?ServiceName=" + name + '&ServiceDescription=' + description + '&ServiceDuration=' + duration, true);
    xhttp.send();

}


function delService() {
    if ($("input[name='delServName']:checked").val()) {
        var ServiceName = $("input[name='delServName']:checked").val();
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                msg = this.responseText;
                $('#DeleteService').html(msg);
            }
        };
        xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/deleteService.php?ServiceName=" + ServiceName, true);
        xhttp.send();
    }
}

function showServices() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            $('#ShowService').html(msg);
        }
    };
    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/ShowService.php", true);
    xhttp.send();
}

function optionsButtonClick() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            $('#chooseRoutine').html(msg);

        }
    };
    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/chooseRoutine.php", true);
    xhttp.send();

}

function staticButtonClick(){
   var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            $('#chooseStaticRoutine').html(msg);

        }
    };
    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/chooseStaticRoutine.php", true);
    xhttp.send(); 
}


function selectProgram() {

    prog = $("input[name='Program']:checked").val();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            $('#chooseTrainer').html(msg);
            if (msg == 'Please choose a program') {
                $('#datesTitle').hide();
                $('#contDatesButton').hide();
                $('#chooseDate').hide();
            }
        }
    };
    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/selectTrainer.php?prog=" + prog, true);
    xhttp.send();

}

function addWorkH() {
    var MondayStr = $('#MondayStr').val();
    var TuesdayStr = $('#TuesdayStr').val();
    var WednesdayStr = $('#WednesdayStr').val();
    var ThirsdayStr = $('#ThirsdayStr').val();
    var FridayStr = $('#FridayStr').val();
    var SaturdayStr = $('#SaturdayStr').val();
    var SundayStr = $('#SundayStr').val();
    var MondayFinn = $('#MondayFinn').val();
    var TuesdayFinn = $('#TuesdayFinn').val();
    var WednesdayFinn = $('#WednesdayFinn').val();
    var ThirsdayFinn = $('#ThirsdayFinn').val();
    var FridayFinn = $('#FridayFinn').val();
    var SaturdayFinn = $('#SaturdayFinn').val();
    var SundayFinn = $('#SundayFinn').val();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            $('#WorkHours').html(msg);

        }
    };
    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/addWorkHours.php?MondayStr=" + MondayStr + '&TuesdayStr=' + TuesdayStr + '&WednesdayStr=' + WednesdayStr + '&ThirsdayStr=' + ThirsdayStr + '&FridayStr=' + FridayStr + '&SaturdayStr=' + SaturdayStr + '&SundayStr=' + SundayStr + '&MondayFinn=' + MondayFinn + '&TuesdayFinn=' + TuesdayFinn + '&WednesdayFinn=' + WednesdayFinn + '&ThirsdayFinn=' + ThirsdayFinn + '&FridayFinn=' + FridayFinn + '&SaturdayFinn=' + SaturdayFinn + '&SundayFinn=' + SundayFinn, true);
    xhttp.send();

}



function controlDates(){
     choosedate = $("#chooseDate").val();
     trainName= $('input[name="ProgramName"]:checked').val();
      $('#chooseDate').prop( "disabled", true );
      $('#chooseTrainer').hide();
      $('#chooseRoutine').hide();
    user = localStorage.Username;
     var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            $('#comfirmMess').html(msg);
            if (msg == 'available') {
                $('#comfirmMess').html('');
                $('#ChooseHour').show();
               setDates();
                }
                
               if(msg == "Wrong date. Please check the calendar again."){
                    $('#ChooseHour').hide();
                $('#contDatesButton').hide();
            }
            else if(msg == "Sorry. You have already a date for today..."){
                $('#ChooseHour').hide();
                $('#contDatesButton').hide();
            }
            else if(msg == "Better to book a date not over 3 months..."){
                $('#ChooseHour').hide();
                $('#contDatesButton').hide();
            }
            else if(msg == "Please check a date only for the running year"){
              $('#ChooseHour').hide();
                $('#contDatesButton').hide();  
            }
        }
    };
    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/controlDates.php?today=" + choosedate + '&user=' + user, true);
    xhttp.send();
}

function setDates(){
    //var choosedate = $("#chooseDate").val();
     chooseDay = new Date(choosedate);
     $('#checkButton').hide();
       $('#deb').html("Check complete. Please press again next" +'<br>' );
     var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    chooseDay = weekday[chooseDay.getDay()];
     var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            mess=msg;
            msgarr = msg.split(" ");
            startTime = msgarr[0];
            finnishTime = msgarr[1];
           

        }
    };
    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/setDates.php?today=" + chooseDay, true);
    xhttp.send();
    returnDuration();
    duri = parseInt(dur) ;
    //$('#deb').html(mess+" "+dur);
    for(i=parseInt(startTime);i<= parseInt(finnishTime) - duri ;i++){
        var helpVariable = parseInt(i)+duri;
    $('#deb').append('<input type="radio" name="dateHour" value='+i+'>' + i +'-'+helpVariable +'<br>');
}

if ($('#deb :radio').length > 0)
     $('#checkButton').show();

    }






//static
function setStaticDates() {
   
    if ($("input:radio[name='staticProgram']").is(":checked")){
        
        tod = $('#chooseStaticDate').val();
         today = $('#chooseStaticDate').val();
         realToday = new Date();
         //window.alert("Today: "+today+"\n"+"realToday: "+realToday);
         if(today < realToday ){
         $('#showStaticDates').html("Please check the calendar again");
         $('#nextStaticBut').hide();
     }
     else
     $('#showStaticDates').html("Check complete. Please press again next" +'<br>' );
     
    //var dsplit = today.split("/");
    day = new Date(today);
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    day = weekday[day.getDay()];

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            msgarr = msg.split(" ");
            startTime = msgarr[0];
            finnishTime = msgarr[1];
        }
    };
    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/setDates.php?today=" + day, true);
    xhttp.send();
    returnStaticDuration();
  
    $('#chooseStaticRoutine').hide();
    //window.alert(day+" "+dury);
    $('#chooseStaticDate').prop( "disabled", true );
    duri = parseInt(dury);
     for(i=parseInt(startTime);i<= parseInt(finnishTime) - duri ;i++){
        var helpVariable = parseInt(i)+duri;
        $('#showStaticDates').append('<input type="radio" name="staticDateHour" value='+i+'>' + i +'-'+helpVariable +'<br>');
} 
if ($('#showStaticDates :radio').length > 0)
     $('#checkStaticButton').show();
     }
     }

function returnDuration() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            dur = msg;
        }
    };

    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/returnDuration.php?prog=" + prog, true);
    xhttp.send();
}

function returnStaticDuration() {
    if ($("input:radio[name='staticProgram']").is(":checked"))
        prog = $("input[name='staticProgram']:checked").val();
        var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            dury = msg;
            }
    };

    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/returnStaticDuration.php?prog=" + prog, true);
    xhttp.send();
    
        
}

function staticCheck(){
    var chooseToday = today;
    var hour = $('input[name="staticDateHour"]:checked').val();
    hour = hour+":00:00";
    user = localStorage.Username;
    trainName="GENERAL";
    var sdate= new Date(today).toLocaleDateString();
    var syear = sdate.substring(5,10);
    var smonth = sdate.substring(0,1);
    var sday = sdate.substring(2,4);
    //var syear= sdate.getFullYear();
    //var smonth= sdate.getMonth()+1;
   // var sday= sdate.getDays();
    sdate = syear+"-"+smonth+"-"+sday;
    //window.alert(trainName+" "+sdate+" "+prog+" "+hour+" "+user);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            //$('#staticComfirmMess').html(msg);
            $('#staticComfirmMess').dialog();
            $('#staticComfirmMess').html(msg);

        }
    };
    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/check.php?trainName=" + trainName + '&today=' + sdate + '&prog=' + prog + '&hour=' + hour + '&user=' + user, true);
    xhttp.send();
   $('#Static').hide();
    
}

function check() {

    var hour = $('input[name="dateHour"]:checked').val();
    user = localStorage.Username;
    var cdate= new Date(choosedate).toLocaleDateString();;
    //var cdate= new Date(choosedate).toLocaleDateString();
    //ccdate = cdate.split('/').reverse().join('-');
    //cdate= ccdate;
    //cyear= cdate.getFullYear();
    //cmonth= cdate.getMonth()+1;
    //cday= cdate.getDays();
    var cyear = cdate.substring(5,10);
    var cmonth = cdate.substring(0,1);
    var cday = cdate.substring(2,4);
    cdate=cyear+"-"+cmonth+"-"+cday;
    //cdate=cdate.toString();
     //cdate =cdate.toISOString().substring(0,10);
     hour = hour+":00:00";
     //window.alert(hour+" "+cdate);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            mess1=msg;
            //$('#comfirmMess').html(msg);
            $('#comfirmMess').dialog();
            $('#comfirmMess').html(msg);

        }
    };
    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/check.php?trainName=" + trainName + '&today=' + cdate + '&prog=' + prog + '&hour=' + hour + '&user=' + user, true);
    xhttp.send();
   
}


function showProfile() {
    user = localStorage.Username;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            $('#profileDetails').html(msg);
        }
    };
    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/showProfile.php?user=" + user, true);
    xhttp.send();
}

function showPastDates() {
    var xhttl = new XMLHttpRequest();
    xhttl.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            $('#pastDatesTrainers').html(msg).toggle(3000);

        }
    };
       xhttl.open("GET", "https://ptyxiaki.000webhostapp.com/showPastDates.php", true);
    xhttl.send();
       
       }
       


function showFutureDates() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            $('#futureDates').html(msg);
        }
    };
    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/showFutureDates.php", true);
    xhttp.send();
}

function addStaticServe() {
    name = document.getElementById('addedStaticService').value;
    description = document.getElementById('addStaticDescription').value;
    duration = document.getElementById('addStaticDuration').value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            $('#AddStaticService').html(msg).hide(5000);
        }
    };
    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/addStaticService.php?ServiceName=" + name + '&ServiceDescription=' + description + '&ServiceDuration=' + duration, true);
    xhttp.send();

}

function showGymPastDates(){
     var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            $('#pastGymDates').html(msg);
        }
    };
    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/showPastDates.php", true);
    xhttp.send();
}

function showGymFutureDates(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            $('#futureGymDates').html(msg);
        }
    };
    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/showFutureDates.php", true);
    xhttp.send();
}

function showMyPastDates(){
     var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            $('#myPastDates').html(msg);
        }
    };
    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/showMyPastDates.php?TrainerName="+localStorage.Username, true);
    xhttp.send();
}

function showMyFutureDates(){
   var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            msg = this.responseText;
            $('#myFutureDates').html(msg);
        }
    };
    xhttp.open("GET", "https://ptyxiaki.000webhostapp.com/showMyFutureDates.php?TrainerName="+localStorage.Username, true);
    xhttp.send();
}