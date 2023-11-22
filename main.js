SpeechRecognition=window.webkitSpeechRecognition
r=new SpeechRecognition()
function start() {
    document.getElementById("textbox").innerHTML=""
    r.start()
}
r.onresult=function(event)
{console.log(event)
content=event.results[0][0].transcript
document.getElementById("textbox").innerHTML=content
if (content=="take my selfie") {
    speak()
}

}
var camera=document.getElementById("camera")
function speak() {
    var s=window.speechSynthesis
    //var speakdata=document.getElementById("textbox").value 
    var speakdata="taking your selfie in 3 seconds"
    var utter=new SpeechSynthesisUtterance(speakdata)
    s.speak(utter)
    Webcam.attach(camera)
    setTimeout(function () {
        take_snapshot()
        save()
    },3000)
}
Webcam.set({ 
    width:360,
    height:250,
    image_format:"png",
    png_quality:90,
})
 function take_snapshot() {
    Webcam.snap(function (data_url) {
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_url+'">'
    })
}
function save() {
    link=document.getElementById("link")
    image=document.getElementById("selfie_image").src
link.href=image
link.click()
}