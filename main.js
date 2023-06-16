function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/_83g_Z-N1U/model.json",modelReady)
   
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResult(error,result){
    console.log("Got Result")
}

if(error){
    console.log("error")
    
}
else{
    console.log(result)
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;
    document.getElementById("result").innerHTML="I can hear - "+result[0].label;
    document.getElementById("confidence").innerHTML= "Accuracy-"+ (result[0].confidence*100).toFixed(2) + "%" ;
   document.getElementById("result").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
   document.getElementById("confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
 img1=document.getElementById("cough")
 img2=document.getElementById("sneeze")
 img3=document.getElementById("stuffy nose")
 img4=document.getElementById("yawning")
 if(result[0].label == "Cough"){
    img1.src="cough.gif";
    img2.src="sneeze.png";
    img3.src="stuffy nose.png";
    img4.src="yawning.png";


 }
 else if(result[0].label=="Sneeze"){
    img1.src="cough.png";
    img2.src="sneeze.gif";
    img3.src="stuffy nose.png";
    img4.src="yawning.png";
 }
 else if(result[0].label=="Snapping"){
    img1.src="cough.png";
    img2.src="sneeze.png";
    img3.src="stuffy nose.gif";
    img4.src="yawning.png";
 }
 else {
    img1.src="cough.png";
    img2.src="sneeze.png";
    img3.src="stuffy nose.png";
    img4.src="yawning.gif";
 }
}
