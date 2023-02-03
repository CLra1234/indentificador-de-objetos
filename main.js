Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
})
var camera=document.getElementById("camera")
Webcam.attach("#camera")
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capturad_image' src='"+data_uri+"'/>"
    })
}

console.log("iml5 v: ",ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/s_2oi5ajX/model.json',modelLoaded)

function modelLoaded(){
    console.log("modelo carregado")
}

function check(){
    var img = document.getElementById("capturad_image")
    classifier.classify(img,gotResult)
}

function gotResult(error,results){
    if (error) {
        console.log(error)
    } else {
       console.log(results) 
      document.getElementById("resultObjectName").innerHTML=results[0].label
      document.getElementById("resultObjectAccuracy").innerHTML=results[0].confidence
    }
}