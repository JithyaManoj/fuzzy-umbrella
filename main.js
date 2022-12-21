modelstatus = "";
chicen = [];
m = "M.mp3"

function setup() {
    canv = createCanvas(380, 380);
    canv.center();
    vi = createCapture(VIDEO);
    vi.size(380, 380);
    vi.hide();
    modelobj = ml5.objectDetector("cocossd", mol);
}

function mol() {
    console.log("ghfhgdgfhsfg");
    document.getElementById("status").innerHTML = "status: ready for ACTION";
    modelstatus = true;
    modelobj.detect(vi, resolt);
}

function draw() {
    image(video, 0, 0, 380, 380);
    if (modelstatus != "") {
        modelobj.detect(vi, resolt);
        for (f = 0; f < chicen.length; f++) {
            obj_nam = chicen[f].label;
            if(obj_nam=="person"||obj_nam=="Person")
            {
                document.getElementById("status").innerHTML = "Status : Baby is found";
                m.stop();
            }
            else{
            document.getElementById("status").innerHTML = "Status : baby is missing ";
                m.play();
            }
        }
        if(chicen.length<=0){
            document.getElementById("status").innerHTML = "Status : baby is missing ";
                m.play();
        }
    }
}

function resolt(a, b) {
    if (a) {
        console.error(a);
    } else {
        console.log(b)
        chicen = b;

    }
}