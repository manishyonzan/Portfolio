const dota = document.querySelector(".dota");
const dotb = document.querySelector(".dotb");
const dotc = document.querySelector(".dotc");
const dotaimage1 = document.querySelector(".firstimg1");
const dotbimage1 = document.querySelector(".secondimg1");
const dotcimage1 = document.querySelector(".thirdimg1");
const dotaimage2 = document.querySelector(".firstimg2");
const dotbimage2 = document.querySelector(".secondimg2");
const dotcimage2 = document.querySelector(".thirdimg2");
const svgimages = document.querySelector(".svgc");

const topicbox = document.querySelector(".topic-box");
const topicdescription = document.querySelector(".topic-description-content");


const buttondiv = document.querySelector(".buttondiv");
const buttondiv2 = document.querySelector(".buttondiv2");



																		// for first button

	buttondiv.addEventListener("click", function(e){

		// to change the button click color
		buttondiv.classList.add("buttondiv-click");
		buttondiv2.classList.add("buttondiv2-click");


	dota.classList.add("running");
	dota.classList.add("dotaanimation");
	dotb.classList.add("running");
	dotb.classList.add("dotbanimation");
	dotc.classList.add("running");
	dotc.classList.add("dotcanimation");
	dotaimage1.classList.add("running");
	dotaimage1.classList.add("dotaimage");
	dotaimage2.classList.add("running");
	dotaimage2.classList.add("dotaimage");
	dotbimage1.classList.add("running");
	dotbimage1.classList.add("dotbimage");
	dotbimage2.classList.add("running");
	dotbimage2.classList.add("dotbimage");
	
	dotcimage1.classList.add("running");
	dotcimage1.classList.add("dotcimage");
	dotcimage2.classList.add("running");
	dotcimage2.classList.add("dotcimage");
	
	svgimages.classList.add("running")
	svgimages.classList.add("svganimation")
	console.log("first is clicked")


	topicbox.classList.add("topic-move");
	topicdescription.classList.add("topic-description-content-move");



});

function pausefunction() {
  dota.classList.add("pause");
  dotb.classList.add("pause");
  dotc.classList.add("pause");


  dotaimage1.classList.add("pause");
  dotaimage2.classList.add("pause");
  dotbimage1.classList.add("pause");
  dotbimage2.classList.add("pause");
  dotcimage1.classList.add("pause");
  dotcimage2.classList.add("pause");
  

  svgimages.classList.add("pause");

  console.log("first is clicked 2");
}














																				//for second button
	buttondiv2.addEventListener("click", function(e){

		// to chnge the button color by removing class
		buttondiv.classList.remove("buttondiv-click");
		buttondiv2.classList.remove("buttondiv2-click");


	svgimages.classList.add("running");
  svgimages.classList.remove("svganimation");
	svgimages.classList.add("svganimation2");

	dota.classList.add("running");
	dota.classList.remove("dotaanimation");
	dota.classList.add("dotaanimation2");
	dotaimage1.classList.add("running");
	dotaimage1.classList.remove("dotaimage");
	dotaimage1.classList.add("dotaimage2");
	dotaimage2.classList.add("running");
	dotaimage2.classList.remove("dotaimage");
	dotaimage2.classList.add("dotaimage2");





	dotb.classList.add("running");
	dotb.classList.remove("dotbanimation");
	dotb.classList.add("dotbanimation2");
	dotbimage1.classList.add("running");
	dotbimage1.classList.remove("dotbimage");
	dotbimage1.classList.add("dotbimage2");
	dotbimage2.classList.add("running");
	dotbimage2.classList.remove("dotbimage");
	dotbimage2.classList.add("dotbimage2");










	dotc.classList.add("running");
	dotc.classList.remove("dotcanimation");
	dotc.classList.add("dotcanimation2");
	dotcimage1.classList.add("running");
	dotcimage1.classList.remove("dotcimage");
	dotcimage1.classList.add("dotcimage2");
	dotcimage2.classList.add("running");
	dotcimage2.classList.remove("dotcimage");
	dotcimage2.classList.add("dotcimage2");







	console.log("second is clicked");


	topicbox.classList.remove("topic-move");
	topicdescription.classList.remove("topic-description-content-move");


});

function pausefunction2() {
  
  console.log("second one is clicked 2")



  dota.classList.add("pause");
  dotb.classList.add("pause");
  dotc.classList.add("pause");


  dotaimage1.classList.add("pause");
  dotaimage2.classList.add("pause");
  dotbimage1.classList.add("pause");
  dotbimage2.classList.add("pause");
  dotcimage1.classList.add("pause");
  dotcimage2.classList.add("pause");
  

  svgimages.classList.add("pause");





  dota.classList.remove("dotaanimation2");
  dotb.classList.remove("dotbanimation2");
  dotc.classList.remove("dotcanimation2");


  dotaimage1.classList.remove("dotaimage2");
  dotaimage2.classList.remove("dotaimage2");
  dotbimage1.classList.remove("dotbimage2");
  dotbimage2.classList.remove("dotbimage2");
  dotcimage1.classList.remove("dotcimage2");
  dotcimage2.classList.remove("dotcimage2");
  

  svgimages.classList.add("pause");
  svgimages.classList.remove("svganimation2");






}
