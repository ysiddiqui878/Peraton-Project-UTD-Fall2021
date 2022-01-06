Dropzone.autoDiscover = false;
var docDropzone = new Dropzone("#doc-dropzone", {
    url: "upload/", maxFiles: 1, maxFilesize: 1000, acceptedFiles: "application/pdf,.doc,.docx"
    });

docDropzone.on("sending", function(){
 document.getElementById("loader").style.display = "block";
 $(".dz-preview").hide();
});

docDropzone.on("success", function (event){
location.reload();
 document.getElementById("loader").style.display = "none";
 document.getElementById("dc").style.display = "block";
 document.getElementsById("displayReport"). style.display="block";
});