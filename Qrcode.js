function genQR(){
    gAPI = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";

    var mytext=document.getElementById("qrtext").value;
    var myimage = document.getElementById("img");
    var mysize = document.getElementById("size").value;

    if(mytext!=="" && mysize == "100"){
        myimage.src= gAPI + "100x100" + "&chl=" + mytext;
    }
    else if(mytext!=="" && mysize == "150"){
        myimage.src= gAPI + "150x150" + "&chl=" + mytext;
    }
    else if(mytext!=="" && mysize == "200"){
        myimage.src= gAPI + "200x200" + "&chl=" + mytext;
    }
    else if(mytext!=="" && mysize == "250"){
        myimage.src= gAPI + "250x250" + "&chl=" + mytext;
    }
    else if(mytext!=="" && mysize == "300"){
        myimage.src= gAPI + "300x300" + "&chl=" + mytext;
    }
    else{
        alert("Please Enter your text");
    }
    

}