var chrs = [
    {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
    {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
    {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
    {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
    {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
    {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];


for (var i =0; i< chrs.length; i++){
    var chrsname = chrs[i].name;
var chrsclass = chrs[i].class;
var chrsAfl = chrs[i].afl;
var chrsvehicle = chrs[i].vehicle;

var showEle= document.createElement("div");
showEle.classList.add("character");

var nameEle =document.createElement("div");
nameEle.innerHTML= "name: " + chrsname;

var classEle = document.createElement("div");
classEle.innerHTML = "Class: "+ chrsclass;

var AFLEle = document.createElement("div");
AFLEle.innerHTML= null;

var  vehicleEle = document.createElement("div");
vehicleEle.innerHTML= "Vehicle: "+ chrsvehicle;

var picEle = document.createElement("img");
picEle.classList.add("img");

    if (chrs[i].vehicle === "truck"){
        vehicleEle.style.color="blue";
    }else if (chrs[i].vehicle === "tank"){
        vehicleEle.style.color="green";
    }else if (chrs[i].vehicle === "car"){
        vehicleEle.style.color="gold"
    }else if (chrs[i].vehicle === "plane"){
        vehicleEle.style.color= "white"
    }


if (chrsAfl === "decepticon"){
    showEle.classList.add("decepticon");
    picEle.src ="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
}else if (chrsAfl === "autobot"){
    showEle.classList.add("autobot");
    picEle.src="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
}




    document.body.appendChild(showEle);
    showEle.appendChild(nameEle);
    showEle.appendChild(vehicleEle);
    showEle.appendChild(classEle);
    showEle.appendChild(picEle);
}