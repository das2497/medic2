var bm;

function fogotpassword() {

    var m = document.getElementById("forgotPasswordModel");

    bm = new bootstrap.Modal(m);
    bm.show();

}

function chng_pswrd_type() {

    var pswrdfield = document.getElementById("Mpswd");
    var pswrdicon = document.getElementById("pswrdicon");

    // alert(pswrdfield.type);

    if (pswrdfield.type == "password") {
        pswrdfield.type = "text";
        pswrdicon.innerHTML = "<i class='bi bi-eye-slash'></i>";
    } else if (pswrdfield.type = "text") {
        pswrdfield.type = "password";
        pswrdicon.innerHTML = "<i class='bi bi-eye'></i>";
    }

}

function Mlogin() {
    var Munm = document.getElementById("Munm");
    var Mpswd = document.getElementById("Mpswd");
    var Mrm = document.getElementById("Mrm");

    var MunmSM = document.getElementById("MunmSM");
    var MpswdSM = document.getElementById("MpswdSM");

    var MtitleSM = document.getElementById("MtitleSM");

    // alert(Mrm.checked);

    var f = new FormData();
    f.append("Munm", Munm.value);
    f.append("Mpswd", Mpswd.value);
    f.append("Mrm", Mrm.checked);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
                // alert(text);

            if (text == "Please Enter Your Username") {
                MunmSM.innerHTML = text;
                MunmSM.style.display = "inline";
                MpswdSM.style.display = "none";
            } else if (text == "Please Enter Your Password") {
                MunmSM.style.display = "none";
                MpswdSM.innerHTML = text;
                MpswdSM.style.display = "inline";
            } else if (text == "1") {
                MunmSM.style.display = "none";
                MpswdSM.style.display = "none";
                MtitleSM.innerHTML = text;
                MtitleSM.style.color = "green";
                // MtitleSM.style.display = "inline";
                window.location = "patient.php";
            } else if (text == "2") {


                MunmSM.style.display = "none";
                MpswdSM.style.display = "none";
                MtitleSM.innerHTML = text;
                MtitleSM.style.color = "green";
                // MtitleSM.style.display = "inline";
                window.location = "admin.php";
            } else if (text == "3") {
                MunmSM.style.display = "none";
                MpswdSM.style.display = "none";
                MtitleSM.innerHTML = text;
                MtitleSM.style.color = "green";
                // MtitleSM.style.display = "inline";
                window.location = "doctor.php";
            } else if (text == "4") {
                MunmSM.style.display = "none";
                MpswdSM.style.display = "none";
                MtitleSM.innerHTML = text;
                MtitleSM.style.color = "green";
                // MtitleSM.style.display = "inline";
                window.location = "receptionist.php";
            } else if (text == "5") {
                MunmSM.style.display = "none";
                MpswdSM.style.display = "none";
                MtitleSM.innerHTML = text;
                MtitleSM.style.color = "green";
                // MtitleSM.style.display = "inline";
                window.location = "nurse.php";
            } else if (text == "6") {
                MunmSM.style.display = "none";
                MpswdSM.style.display = "none";
                MtitleSM.innerHTML = text;
                MtitleSM.style.color = "green";
                // MtitleSM.style.display = "inline";
                window.location = "pharmacist.php";
            } else {
                MunmSM.style.display = "none";
                MpswdSM.style.display = "none";
                MtitleSM.innerHTML = text;
                MtitleSM.style.display = "inline";
            }

        }
    }

    r.open("POST", "login_process.php", true);
    r.send(f);

}

//==========================admin=========================================================================================================

function THdash() {
    document.getElementById("THdash").style.display = "block";
    document.getElementById("THprofile").style.display = "none";
    document.getElementById("THlessons").style.display = "none";
    document.getElementById("THassignments").style.display = "none";
}

function THprofile() {
    document.getElementById("THdash").style.display = "none";
    document.getElementById("THprofile").style.display = "block";
    document.getElementById("THlessons").style.display = "none";
    document.getElementById("THassignments").style.display = "none";
}

function THstudents() {
    document.getElementById("THdash").style.display = "none";
    document.getElementById("THprofile").style.display = "none";
    document.getElementById("THlessons").style.display = "block";
    document.getElementById("THassignments").style.display = "none";
}

function THChannel() {
    document.getElementById("THdash").style.display = "none";
    document.getElementById("THprofile").style.display = "none";
    document.getElementById("THlessons").style.display = "block";
    document.getElementById("THassignments").style.display = "none";
}

function THReports() {
    document.getElementById("THdash").style.display = "none";
    document.getElementById("THprofile").style.display = "none";
    document.getElementById("THlessons").style.display = "none";
    document.getElementById("THassignments").style.display = "block";
}


//=================================admin==============================================================

function d_ch_slct() {
    var specid = document.getElementById("dchnlspecility").value;


    var f = new FormData();
    f.append("specid", specid);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
                //  alert(text);

            document.getElementById("docchnl").innerHTML = text;

        }
    }

    r.open("POST", "doctors_chnl.php", true);
    r.send(f);
}

function doctrs() {
    var specid = document.getElementById("dchnlspecility").value;


    var f = new FormData();
    f.append("specid", specid);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
                //  alert(text);

            document.getElementById("docchnl").innerHTML = text;

        }
    }

    r.open("POST", "doctors.php", true);
    r.send(f);
}

function admin_logout() {

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
                //  alert(text);

            if (text == 'success') {
                window.location = 'index.php';
            }

        }
    }

    r.open("POST", "admin_logout.php", true);
    r.send();
}

function patient_logout() {



    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
                //  alert(text);

            if (text == 'success') {
                window.location = 'index.php';
            }

        }
    }

    r.open("POST", "patient_logout.php", true);
    r.send();


}

function doctor_logout() {

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
                //  alert(text);

            if (text == 'success') {
                window.location = 'index.php';
            }

        }
    }

    r.open("POST", "doctor_logout.php", true);
    r.send();
}

function nurse_logout() {

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
                //  alert(text);

            if (text == 'success') {
                window.location = 'index.php';
            }

        }
    }

    r.open("POST", "nurse_logout.php", true);
    r.send();
}

function pharmacist_logout() {

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
                //  alert(text);

            if (text == 'success') {
                window.location = 'index.php';
            }

        }
    }

    r.open("POST", "pharmacist_logout.php", true);
    r.send();
}

function recep_logout() {

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
                //  alert(text);

            if (text == 'success') {
                window.location = 'index.php';
            }

        }
    }

    r.open("POST", "receptionist_logoot.php", true);
    r.send();
}

function doctorDetails(did, dname) {
    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
                // alert(text);

            document.getElementById("docdtails").innerHTML = text;

        }
    }

    var f = new FormData();
    f.append("did", did);
    f.append("dname", dname);

    r.open("POST", "d_chnl_details.php", true);
    r.send(f);
}

function d_chnl_back() {
    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
                // alert(text);

            document.getElementById("docdtails").innerHTML = text;

        }
    }

    r.open("POST", "patient_d_chnl.php", true);
    r.send();


}

function make_appointment(chnlid, pid) {
    // alert(chnlid + " " + pid);

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
            alert(text);

        }
    }

    var f = new FormData();
    f.append("chnlid", chnlid);
    f.append("pid", pid);

    r.open("POST", "make_appointment_patient.php", true);
    r.send(f);


}

function checkedPatient(pregno, appointment_id) {



    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
                //  alert(text);
            document.getElementById("dappoimnts").innerHTML = text;
        }
    }

    var f = new FormData();
    f.append("pid", pregno);
    f.append("appoinmtid", appointment_id);
    r.open("POST", "opened_apoinmnt.php", true);
    r.send(f);

}

function recp_patient_dtails(preg) {



    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
                //  alert(text);
            document.getElementById("pdtails").innerHTML = text;
        }
    }

    var f = new FormData();
    f.append("preg", preg);

    r.open("POST", "rcp_patient_details.php", true);
    r.send(f);



}

function pdtails_back() {

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
                //  alert(text);
            document.getElementById("pdtails").innerHTML = text;
        }
    }

    r.open("POST", "pdtails_recp.php", true);
    r.send();

}

function pdtails_update(pregno) {

    var rppreg_no = document.getElementById("rppreg_no");
    var rpuname = document.getElementById("rpuname");
    var rpname = document.getElementById("rpname");
    var rpgender_type = document.getElementById("rpgender_type");
    var rpnic = document.getElementById("rpnic");
    var rpdob = document.getElementById("rpdob");
    var rpaddress = document.getElementById("rpaddress");
    var rpcontact = document.getElementById("rpcontact");
    var rpperson = document.getElementById("rpperson");
    var rpnotes = document.getElementById("rpnotes");
    var rppass = document.getElementById("rppass");

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
            alert(text);
            //   document.getElementById("pdtails").innerHTML = text;
        }
    }

    var f = new FormData();
    f.append("rppreg_no", rppreg_no);
    f.append("rpuname", rpuname);
    f.append("rpname", rpname);
    f.append("rpgender_type", rpgender_type);
    f.append("rpnic", rpnic);
    f.append("rpdob", rpdob);
    f.append("rpaddress", rpaddress);
    f.append("rpcontact", rpcontact);
    f.append("rpperson", rpperson);
    f.append("rpnotes", rpnotes);
    f.append("rppass", rppass);

    r.open("POST", "pdtails_update_recp.php", true);
    r.send(f);

}

function patient_dtails_update() {



    var ppreg_no = document.getElementById("ppreg_no");
    var puname = document.getElementById("puname");
    var pfullname = document.getElementById("pfullname");
    var pgender = document.getElementById("pgender");
    var pnic = document.getElementById("pnic");
    var pdob = document.getElementById("pdob");
    var paddress = document.getElementById("paddress");
    var pcontact = document.getElementById("pcontact");
    var presponsible = document.getElementById("presponsible");
    var pspecialnotes = document.getElementById("pspecialnotes");
    var ppass = document.getElementById("ppass");

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
            alert(text);
        }
    }

    var f = new FormData();
    f.append("ppreg_no", ppreg_no.value);
    f.append("puname", puname.value);
    f.append("pfullname", pfullname.value);
    f.append("pgender", pgender.value);
    f.append("pnic", pnic.value);
    f.append("pdob", pdob.value);
    f.append("paddress", paddress.value);
    f.append("pcontact", pcontact.value);
    f.append("presponsible", presponsible.value);
    f.append("pspecialnotes", pspecialnotes.value);
    f.append("ppass", ppass.value);

    r.open("POST", "pdtails_update_process.php", true);
    r.send(f);

}

function back_to_appointments() {
    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
            document.getElementById("dappoimnts").innerHTML = text;
        }
    }

    var f = new FormData();

    r.open("POST", "backtoappoinmnts.php", true);
    r.send(f);

}

function add_prescription(chnlid, pid) {
    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var text = r.responseText
            document.getElementById("prescription").innerHTML = text;
        }
    }

    var f = new FormData();
    f.append("chnl_id", chnlid);
    f.append("pid", pid);
    r.open("POST", "add_prescription.php", true);
    r.send(f);
}

function saveprescrip(chnl_id, pid) {

    var d_dosse = document.getElementById("d_dosse").value;
    var a_note = document.getElementById("a_note").value;

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText
            alert(t);
        }
    }

    var f = new FormData();
    f.append("d_dosse", d_dosse);
    f.append("a_note", a_note);
    f.append("chnl_id", chnl_id);
    f.append("pid", pid);
    r.open("POST", "save_prescription.php", true);
    r.send(f);

}

//===============================Lab Report Upload===================================================================================================

function upload_lab_report() {
    var pid = document.getElementById("pidnurse").value; // patient id
    var lid = document.getElementById("lidnurse").value;



    if (pid == "") {
        document.getElementById("pidawarning").innerHTML = "Pleace Enrer Patient Id";
    } else if (lid == "") {


        document.getElementById("lidawarning").innerHTML = "Pleace Enrer Lab Report Id";
    } else {

        var view = document.getElementById("viewreportname"); //view tag
        var file = document.getElementById("uploadlabreport"); //file chooser

        file.onchange = function() {
            var file1 = this.files[0];
            var url1 = window.URL.createObjectURL(file1);
            view.innerHTML = url1;
            document.getElementById("pidawarning").innerHTML = "";
            upload_repot(pid, lid);
        }
    }
}

function upload_repot(pid, lid) {
    var file = document.getElementById("uploadlabreport");
    var form = new FormData();
    if (file.files.length == 0) {
        document.getElementById("pidawarning").innerHTML = "Pleace Select the Lab Report to upload";
    } else {
        form.append("file", file.files[0]);
        form.append("pid", pid);
        form.append("lid", lid);
    }
    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            alert(t);
            if (t == "Successfull") {
                document.getElementById("successfulUpload").style.display = "block";
                document.getElementById("successfulUpload").innerHTML = "Successfully Uploaded";
                window.location.reload();
            } else {
                document.getElementById("errorUpload").style.display = "block";
                document.getElementById("errorUpload").innerHTML = t;
            }
        }
    }
    r.open("POST", "upload_lab_report.php", true);
    r.send(form);
}

//===================================================================================================================================================================

function search_lab_report() {
    var pid = document.getElementById("searchreportnurse").value;
    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            // alert(t);
            document.getElementById("prescripsrchrslt").innerHTML = t;
        }
    }
    var f = new FormData();
    f.append("pid", pid);
    r.open("POST", "searchlabreportprocess.php", true);
    r.send(f);
}

function srchprescrippharmc() {
    var pid = document.getElementById("prescripsrch").value;
    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            // alert(t);
            document.getElementById("prescripsrchrslt").innerHTML = t;
        }
    }
    var f = new FormData();
    f.append("pid", pid);
    r.open("POST", "srchprescrippharmcprocess.php", true);
    r.send(f);
}

function admin_update_doc(docid) {
    // alert(docid);
    var uname = document.getElementById(docid + 1).value;
    var name = document.getElementById(docid + 2).value;
    var specilt = document.getElementById(docid + 3).value;

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            alert(t);

        }
    }
    var f = new FormData();
    f.append("id", docid);
    f.append("uname", uname);
    f.append("name", name);
    f.append("specilt", specilt);
    r.open("POST", "adminupdatedoc.php", true);
    r.send(f);
}

function admin_update_recp(recpid) {
    // alert(recpid);
    var uname = document.getElementById(recpid + 1).value;
    var name = document.getElementById(recpid + 2).value;
    var nic = document.getElementById(recpid + 3).value;
    var contact = document.getElementById(recpid + 4).value;
    var gender = document.getElementById(recpid + 5).value;

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            alert(t);

        }
    }
    var f = new FormData();
    f.append("id", recpid);
    f.append("uname", uname);
    f.append("name", name);
    f.append("nic", nic);
    f.append("contact", contact);
    f.append("gender", gender);
    r.open("POST", "adminupdaterecp.php", true);
    r.send(f);
}


function admin_update_phm(phmid) {
    alert(phmid);
    var uname = document.getElementById(recpid + 1).value;
    var name = document.getElementById(recpid + 2).value;
    var nic = document.getElementById(recpid + 3).value;

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            alert(t);

        }
    }
    var f = new FormData();
    f.append("id", recpid);
    f.append("uname", uname);
    f.append("name", name);
    f.append("nic", nic);
    r.open("POST", "adminupdatephm.php", true);
    r.send(f);
}

function adminaddphm() {
    var adminadduname = document.getElementById("adminaddunamephs");
    var adminaddname = document.getElementById("adminaddnamephs");
    var adminaddnic = document.getElementById("adminaddnicphs");
    var adminaddpass = document.getElementById("adminaddpassphs");

    var adminaddphssuccesssmall = document.getElementById("adminaddphssuccesssmallphs");
    var adminaddunamesmall = document.getElementById("adminaddunamesmallphs");
    var adminaddnamesmall = document.getElementById("adminaddnamesmallphs");
    var adminaddnicsmall = document.getElementById("adminaddnicsmallphs");
    var adminaddpasssmall = document.getElementById("adminaddpasssmallphs");

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            // alert(t);
            if (t == "Please enter username") {
                adminaddunamesmall.innerHTML = t;
                adminaddunamesmall.style.display = "block";
                adminaddnamesmall.style.display = "none";
                adminaddnicsmall.style.display = "none";
                adminaddpasssmall.style.display = "none";
                adminaddphssuccesssmall.style.display = "none";
            } else if (t == "Please enter name") {
                adminaddphssuccesssmall.style.display = "none";
                adminaddunamesmall.style.display = "none";
                adminaddnamesmall.innerHTML = t;
                adminaddnamesmall.style.display = "block";
                adminaddnicsmall.style.display = "none";
                adminaddpasssmall.style.display = "none";
            } else if (t == "Please enter NIC") {
                adminaddphssuccesssmall.style.display = "none";
                adminaddunamesmall.style.display = "none";
                adminaddnamesmall.style.display = "none";
                adminaddnicsmall.innerHTML = t;
                adminaddnicsmall.style.display = "block";
                adminaddpasssmall.style.display = "none";
            } else if (t == "Please enter password") {
                adminaddphssuccesssmall.style.display = "none";
                adminaddunamesmall.style.display = "none";
                adminaddnamesmall.style.display = "none";
                adminaddnicsmall.style.display = "none";
                adminaddpasssmall.innerHTML = t;
                adminaddpasssmall.style.display = "block";
            } else if (t == "Already Registered") {
                adminaddphssuccesssmall.innerHTML = t;
                adminaddphssuccesssmall.style.color = "red";
                adminaddphssuccesssmall.style.display = "block";
                adminaddunamesmall.style.display = "none";
                adminaddnamesmall.style.display = "none";
                adminaddnicsmall.style.display = "none";
                adminaddpasssmall.style.display = "none";
            } else if (t == "Successfully Added") {
                adminaddphssuccesssmall.innerHTML = t;
                adminaddphssuccesssmall.style.color = "red";
                adminaddphssuccesssmall.style.display = "block";
                adminaddunamesmall.style.display = "none";
                adminaddnamesmall.style.display = "none";
                adminaddnicsmall.style.display = "none";
                adminaddpasssmall.style.display = "none";
                location.reload();
            } else {
                adminaddphssuccesssmall.innerHTML = t;
                adminaddphssuccesssmall.style.color = "red";
                adminaddphssuccesssmall.style.display = "block";
                adminaddunamesmall.style.display = "none";
                adminaddnamesmall.style.display = "none";
                adminaddnicsmall.style.display = "none";
                adminaddpasssmall.style.display = "none";
            }
        }
    }

    var f = new FormData();
    f.append("uname", adminadduname.value);
    f.append("name", adminaddname.value);
    f.append("nic", adminaddnic.value);
    f.append("pass", adminaddpass.value);
    r.open("POST", "adminaddphm.php", true);
    r.send(f);

}

function adminadddoc() {
    // alert("okkkk");
    var adminadduname = document.getElementById("adminadduname").value;
    var adminaddname = document.getElementById("adminaddname").value;
    var adminaddspeslt = document.getElementById("adminaddspeslt").value;
    var adminaddpass = document.getElementById("adminaddpass").value;

    var adminaddunamesmall = document.getElementById("adminaddunamesmall");
    var adminaddnamesmall = document.getElementById("adminaddnamesmall");
    var adminaddspesltsmall = document.getElementById("adminaddspesltsmall");
    var adminaddpasssmall = document.getElementById("adminaddpasssmall");

    var adminaddsuccesssmall = document.getElementById("adminaddsuccesssmall");

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            // alert(t);

            if (t == "1") {
                adminaddsuccesssmall.style.display = "none";
                adminaddunamesmall.innerHTML = "Please Enter Username";
                adminaddunamesmall.style.display = "block";
                adminaddnamesmall.style.display = "none";
                adminaddspesltsmall.style.display = "none";
                adminaddpasssmall.style.display = "none";
            } else if (t == "2") {
                adminaddsuccesssmall.style.display = "none";
                adminaddunamesmall.style.display = "none";
                adminaddnamesmall.innerHTML = "Please Enter Name";
                adminaddnamesmall.style.display = "block";
                adminaddspesltsmall.style.display = "none";
                adminaddpasssmall.style.display = "none";
            } else if (t == "3") {
                adminaddsuccesssmall.style.display = "none";
                adminaddunamesmall.style.display = "none";
                adminaddnamesmall.style.display = "none";
                adminaddspesltsmall.innerHTML = "Select Specialty";
                adminaddspesltsmall.style.display = "block";
                adminaddpasssmall.style.display = "none";
            } else if (t == "4") {
                adminaddsuccesssmall.style.display = "none";
                adminaddunamesmall.style.display = "none";
                adminaddnamesmall.style.display = "none";
                adminaddspesltsmall.innerHTML = "Select Specialty";
                adminaddspesltsmall.style.display = "none";
                adminaddpasssmall.style.display = "block";
            } else if (t == "Success") {
                adminaddunamesmall.style.display = "none";
                adminaddnamesmall.style.display = "none";
                adminaddspesltsmall.style.display = "none";
                adminaddpasssmall.style.display = "none";
                adminaddsuccesssmall.innerHTML = "Success";
                adminaddsuccesssmall.style.display = "inline";
                location.reload();
            } else {
                adminaddunamesmall.style.display = "none";
                adminaddnamesmall.style.display = "none";
                adminaddspesltsmall.style.display = "none";
                adminaddpasssmall.style.display = "none";
                adminaddsuccesssmall.innerHTML = t;
                adminaddsuccesssmall.style.display = "inline";
            }

        }
    }
    var f = new FormData();
    f.append("uname", adminadduname);
    f.append("name", adminaddname);
    f.append("speslt", adminaddspeslt);
    f.append("pass", adminaddpass);
    r.open("POST", "adminadddoc.php", true);
    r.send(f);
}

function adminadddocclose() {
    var adminadduname = document.getElementById("adminadduname").value;
    var adminaddname = document.getElementById("adminaddname").value;
    var adminaddspeslt = document.getElementById("adminaddspeslt").value;
    var adminaddpass = document.getElementById("adminaddpass").value;

    var adminaddunamesmall = document.getElementById("adminaddunamesmall");
    var adminaddnamesmall = document.getElementById("adminaddnamesmall");
    var adminaddspesltsmall = document.getElementById("adminaddspesltsmall");
    var adminaddpasssmall = document.getElementById("adminaddpasssmall");

    var adminaddsuccesssmall = document.getElementById("adminaddsuccesssmall");

    adminaddunamesmall.style.display = "none";
    adminaddnamesmall.style.display = "none";
    adminaddspesltsmall.style.display = "none";
    adminaddsuccesssmall.style.display = "none";
    adminaddpasssmall.style.display = "none";

    adminadduname.value = "";
    adminaddname.value = "";
    adminaddspeslt.value = "0";
    adminaddpass.value = "";
}

function admin_delete_doc(id, uname, name) {
    var des;
    if (window.confirm("Are You Sure You Want To Delete Doctor " + name)) {
        des = "1";
    } else {
        des = "2";
    }

    if (des == "1") {
        var r = new XMLHttpRequest();
        r.onreadystatechange = function() {
            if (r.readyState == 4) {
                var t = r.responseText;
                // alert(t);

                location.reload();

            }
        }
        var f = new FormData();
        f.append("id", id);
        f.append("uname", uname);
        f.append("name", name);
        r.open("POST", "admindeletedoc.php", true);
        r.send(f);
    } else if (des == "2") {

    }
}

//=========================================================================================================================================

function adminaddrecp() {
    // alert("okkkk");

    var recipadduname = document.getElementById("recipadduname").value;
    var recipaddname = document.getElementById("recipaddname").value;
    var recipaddNIC = document.getElementById("recipaddNIC").value;
    var recipaddcontact = document.getElementById("recipaddcontact").value;
    var recipaddgendr = document.getElementById("recipaddgendr").value;
    var recipaddPassword = document.getElementById("recipaddPassword").value;

    var recipaddunamesmall = document.getElementById("recipaddunamesmall");
    var recipaddnamesmall = document.getElementById("recipaddnamesmall");
    var recipaddNICsmall = document.getElementById("recipaddNICsmall");
    var recipaddcontactsmall = document.getElementById("recipaddcontactsmall");
    var recipaddgendrsmall = document.getElementById("recipaddgendrsmall");
    var recipaddPasswordsmall = document.getElementById("recipaddPasswordsmall");

    var adminaddrecipsuccesssmall = document.getElementById("adminaddrecipsuccesssmall");

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            // alert(t);

            if (t == "Please enter username") {
                adminaddrecipsuccesssmall.style.display = "none";
                recipaddunamesmall.style.display = "block";
                recipaddunamesmall.innerHTML = t;
                recipaddnamesmall.style.display = "none";
                recipaddNICsmall.style.display = "none";
                recipaddcontactsmall.style.display = "none";
                recipaddgendrsmall.style.display = "none";
                recipaddPasswordsmall.style.display = "none";
            } else if (t == "Please enter name") {
                adminaddrecipsuccesssmall.style.display = "none";
                recipaddunamesmall.style.display = "none";
                recipaddnamesmall.style.display = "block";
                recipaddnamesmall.innerHTML = t;
                recipaddNICsmall.style.display = "none";
                recipaddcontactsmall.style.display = "none";
                recipaddgendrsmall.style.display = "none";
                recipaddPasswordsmall.style.display = "none";
            } else if (t == "Please enter NIC") {
                adminaddrecipsuccesssmall.style.display = "none";
                recipaddunamesmall.style.display = "none";
                recipaddnamesmall.style.display = "none";
                recipaddNICsmall.style.display = "block";
                recipaddNICsmall.innerHTML = t;
                recipaddcontactsmall.style.display = "none";
                recipaddgendrsmall.style.display = "none";
                recipaddPasswordsmall.style.display = "none";
            } else if (t == "Please enter contact no") {
                adminaddrecipsuccesssmall.style.display = "none";
                recipaddunamesmall.style.display = "none";
                recipaddnamesmall.style.display = "none";
                recipaddNICsmall.style.display = "none";
                recipaddcontactsmall.style.display = "block";
                recipaddcontactsmall.innerHTML = t;
                recipaddgendrsmall.style.display = "none";
                recipaddPasswordsmall.style.display = "none";
            } else if (t == "Please select gender") {
                adminaddrecipsuccesssmall.style.display = "none";
                recipaddunamesmall.style.display = "none";
                recipaddnamesmall.style.display = "none";
                recipaddNICsmall.style.display = "none";
                recipaddcontactsmall.style.display = "none";
                recipaddgendrsmall.style.display = "block";
                recipaddgendrsmall.innerHTML = t
                recipaddPasswordsmall.style.display = "none";
            } else if (t == "Please enter password") {
                adminaddrecipsuccesssmall.style.display = "none";
                recipaddunamesmall.style.display = "none";
                recipaddnamesmall.style.display = "none";
                recipaddNICsmall.style.display = "none";
                recipaddcontactsmall.style.display = "none";
                recipaddgendrsmall.style.display = "none";
                recipaddPasswordsmall.style.display = "block";
                recipaddPasswordsmall.innerHTML = t;
            } else if (t == "Successfully Added") {
                recipaddunamesmall.style.display = "none";
                recipaddnamesmall.style.display = "none";
                recipaddNICsmall.style.display = "none";
                recipaddcontactsmall.style.display = "none";
                recipaddgendrsmall.style.display = "none";
                recipaddPasswordsmall.style.display = "none";
                adminaddrecipsuccesssmall.style.display = "block";
                adminaddrecipsuccesssmall.innerHTML = t;
                location.reload();
            } else {
                recipaddunamesmall.style.display = "none";
                recipaddnamesmall.style.display = "none";
                recipaddNICsmall.style.display = "none";
                recipaddcontactsmall.style.display = "none";
                recipaddgendrsmall.style.display = "none";
                recipaddPasswordsmall.style.display = "none";
                adminaddrecipsuccesssmall.style.display = "block";
                adminaddrecipsuccesssmall.innerHTML = t;
            }

        }
    }

    var f = new FormData();
    f.append("uname", recipadduname);
    f.append("name", recipaddname);
    f.append("nic", recipaddNIC);
    f.append("contact", recipaddcontact);
    f.append("gndr", recipaddgendr);
    f.append("pass", recipaddPassword);
    r.open("POST", "adminaddrecp.php", true);
    r.send(f);
}

function adminaddrecpclose() {
    // alert("close");
    document.getElementById("recipadduname").value = "";
    document.getElementById("recipaddname").value = "";
    document.getElementById("recipaddNIC").value = "";
    document.getElementById("recipaddcontact").value = "";
    document.getElementById("recipaddgendr").value = "x";
    document.getElementById("recipaddPassword").value = "";

    document.getElementById("recipaddunamesmall").style.display = "none";
    document.getElementById("recipaddnamesmall").style.display = "none";
    document.getElementById("recipaddNICsmall").style.display = "none";
    document.getElementById("recipaddcontactsmall").style.display = "none";
    document.getElementById("recipaddgendrsmall").style.display = "none";
    document.getElementById("recipaddPasswordsmall").style.display = "none";

    document.getElementById("adminaddrecipsuccesssmall").style.display = "none";
}

function admin_delete_recip(uname, nic) {
    var des;
    if (window.confirm("Are You Sure You Want To Delete Receptionist " + uname)) {
        des = "1";
    } else {
        des = "2";
    }

    if (des == "1") {
        var r = new XMLHttpRequest();
        r.onreadystatechange = function() {
            if (r.readyState == 4) {
                var t = r.responseText;
                // alert(t);

                location.reload();

            }
        }
        var f = new FormData();
        f.append("uname", uname);
        f.append("nic", nic);
        r.open("POST", "admindeleterecip.php", true);
        r.send(f);
    } else if (des == "2") {

    }
}

//=========================================================================================================================

function adminaddnurse() {
    // alert("okkkk");

    var uname = document.getElementById("adminaddnurseuname").value;
    var name = document.getElementById("adminaddnursename").value;
    var nic = document.getElementById("adminaddnursenic").value;
    var pass = document.getElementById("adminaddnursepass").value;

    var unamesmall = document.getElementById("adminaddnurseunamesmall");
    var namesmall = document.getElementById("adminaddnursenamesmall");
    var nicsmall = document.getElementById("adminaddnursenicsmall");
    var passsmall = document.getElementById("adminaddnursepasssmall");

    var adminaddnursesuccesssmall = document.getElementById("adminaddnursesuccesssmall");

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            // alert(t);

            if (t == "Please enter username") {
                adminaddnursesuccesssmall.style.display = "none";
                unamesmall.innerHTML = t;
                unamesmall.style.display = "block";
                namesmall.style.display = "none";
                nicsmall.style.display = "none";
                passsmall.style.display = "none";
            } else if (t == "Please enter name") {
                adminaddnursesuccesssmall.style.display = "none";
                unamesmall.style.display = "none";
                namesmall.innerHTML = t;
                namesmall.style.display = "block";
                nicsmall.style.display = "none";
                passsmall.style.display = "none";
            } else if (t == "Please enter NIC") {
                adminaddnursesuccesssmall.style.display = "none";
                unamesmall.style.display = "none";
                namesmall.style.display = "none";
                nicsmall.innerHTML = t;
                nicsmall.style.display = "block";
                passsmall.style.display = "none";
            } else if (t == "Please enter password") {
                adminaddnursesuccesssmall.style.display = "none";
                unamesmall.style.display = "none";
                namesmall.style.display = "none";
                nicsmall.style.display = "none";
                passsmall.innerHTML = t;
                passsmall.style.display = "block";
            } else if (t == "Successfully Added") {
                adminaddnursesuccesssmall.innerHTML = t;
                adminaddnursesuccesssmall.style.display = "block";
                unamesmall.style.display = "none";
                namesmall.style.display = "none";
                nicsmall.style.display = "none";
                passsmall.style.display = "none";
                location.reload();
            } else {
                adminaddnursesuccesssmall.innerHTML = t;
                adminaddnursesuccesssmall.style.display = "block";
                unamesmall.style.display = "none";
                namesmall.style.display = "none";
                nicsmall.style.display = "none";
                passsmall.style.display = "none";
            }

        }
    }

    var f = new FormData();
    f.append("uname", uname);
    f.append("name", name);
    f.append("nic", nic);
    f.append("pass", pass);
    r.open("POST", "adminaddnurse.php", true);
    r.send(f);
}

function adminaddnurseclose() {
    // alert("close");
    document.getElementById("adminaddnurseuname").value = "";
    document.getElementById("adminaddnursename").value = "";
    document.getElementById("adminaddnursenic").value = "";
    document.getElementById("adminaddnursepass").value = "";

    document.getElementById("adminaddnurseunamesmall").style.display = "none";
    document.getElementById("adminaddnursenamesmall").style.display = "none";
    document.getElementById("adminaddnursenicsmall").style.display = "none";
    document.getElementById("adminaddnursepasssmall").style.display = "none";

    document.getElementById("adminaddnursesuccesssmall").style.display = "none";
}


function admin_update_nrs(nrsid) {

    var uname = document.getElementById(nrsid + 1).value;
    var name = document.getElementById(nrsid + 2).value;
    var nic = document.getElementById(nrsid + 3).value;

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            alert(t);

        }
    }
    var f = new FormData();
    f.append("id", nrsid);
    f.append("uname", uname);
    f.append("name", name);
    f.append("nic", nic);
    r.open("POST", "adminupdatenurse.php", true);
    r.send(f);
}

function admin_update_phs(uname, nic) {
    var des;
    if (window.confirm("Are You Sure You Want To Delete Nurse " + uname)) {
        des = "1";
    } else {
        des = "2";
    }

    if (des == "1") {
        var r = new XMLHttpRequest();
        r.onreadystatechange = function() {
            if (r.readyState == 4) {
                var t = r.responseText;
                alert(t);

                location.reload();

            }
        }
        var f = new FormData();
        f.append("uname", uname);
        f.append("nic", nic);
        r.open("POST", "admindeletephs.php", true);
        r.send(f);
    }
}

function admin_delete_nrs(uname, nic) {

    var des;
    if (window.confirm("Are You Sure You Want To Delete Nurse " + uname)) {
        des = "1";
    } else {
        des = "2";
    }

    if (des == "1") {
        var r = new XMLHttpRequest();
        r.onreadystatechange = function() {
            if (r.readyState == 4) {
                var t = r.responseText;
                alert(t);

                location.reload();

            }
        }
        var f = new FormData();
        f.append("uname", uname);
        f.append("nic", nic);
        r.open("POST", "admindeletenrs.php", true);
        r.send(f);
    } else if (des == "2") {

    }
}

//=============================================================================================================

function searchDoctorChannel() {
    var key = document.getElementById("dchnlpt").value;

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            if (t != " ") {
                document.getElementById("docchnl").innerHTML = t;
            }
        }
    }
    var f = new FormData();
    f.append("key", key);
    r.open("POST", "dchannel_search_process.php", true);
    r.send(f);
}

//=================================================================================================================================

function adminaddchnl() {
    var dt = document.getElementById("chnldt").value;
    var tm = document.getElementById("chnltm").value;
    var dct = document.getElementById("chnldoc").value;

    var success = document.getElementById("adminaddchnlsuccesssmall");
    var doctor = document.getElementById("adminaddchnlsmall");

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            // alert(t);
            if (t != " ") {
                if (t == "Please Select a Doctor") {
                    doctor.innerHTML = t;
                    doctor.style.display = "block";
                    success.style.display = "none";
                } else if (t == "Already have a channeling") {
                    doctor.style.display = "none";
                    success.innerHTML = t;
                    success.style.color = "red";
                    success.style.display = "block";
                } else if (t == "Success") {
                    doctor.style.display = "none";
                    success.innerHTML = t;
                    success.style.color = "green";
                    success.style.display = "block";
                }
            }
        }
    }
    var f = new FormData();
    f.append("dt", dt);
    f.append("tm", tm);
    f.append("doc", dct);
    r.open("POST", "dchnl_create.php", true);
    r.send(f);

}

function register_patient() {

    var rpreg_no = document.getElementById("rpreg_no").value;
    var rpuname = document.getElementById("rpuname").value;
    var rpname = document.getElementById("rpname").value;
    var rpgender = document.getElementById("rpgender").value;
    var rpnic = document.getElementById("rpnic").value;
    var rpdob = document.getElementById("rpdob").value;
    var rpaddress = document.getElementById("rpaddress").value;
    var rpcontact = document.getElementById("rpcontact").value;
    var rpperson = document.getElementById("rpperson").value;
    var rpnotes = document.getElementById("rpnotes").value;
    var rppass = document.getElementById("rppass").value;

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            alert(t);
        }
    }
    var f = new FormData();
    f.append("rpreg_no", rpreg_no);
    f.append("rpuname", rpuname);
    f.append("rpname", rpname);
    f.append("rpgender", rpgender);
    f.append("rpnic", rpnic);
    f.append("rpdob", rpdob);
    f.append("rpaddress", rpaddress);
    f.append("rpcontact", rpcontact);
    f.append("rpperson", rpperson);
    f.append("rpnotes", rpnotes);
    f.append("rppass", rppass);
    r.open("POST", "reg_pt.php", true);
    r.send(f);

}