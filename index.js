//Between every two texts give a 4 sec gap
// $(window).bind("load", function() {
//
// });

$(window).bind("load", function() {

  function type(id,string){
  			var i = 0;
  			//var speed = 70;
        var speed = 2000/string.length;
    			function typeWriter(){
    			  if (i < string.length) {
    			    $(id).append(string.charAt(i));
    			    i++;
    			    setTimeout(typeWriter, speed);
    			  }
    			};
  			typeWriter();
			};

	function newText(textno,string){
        var delay = 1000;
        $("#text" + textno).fadeToggle(function(){
          $("#text" + textno)[0].innerHTML = "";
        });
        $("#text" + textno).fadeToggle();
        setTimeout(function(){
			// $("#" + slideid).append("<h2 id=" + textid2 + "><"+"/h2>");
			 type("#text" + textno,string)},delay);

	};
setTimeout(function mainFunc() {


     type("#text1","Aur Bhaiiii..!!");
//slide 1
      setTimeout(function(){
       newText("1","Pokemon Go ki aukaut nahi h..");
      },2000);

      setTimeout(function() {
       newText("1","Toh issilye ye banaya h...");
      },6000);

      setTimeout(function(){
       newText("1","...hope you'd like it...");
      },10000);

      setTimeout(function() {
       newText("1","So sit back, relax and enjoy :)");
      },14000);

      setTimeout(function(){
        $('html, body').animate({scrollTop: $("#slide2").offset().top},1000);
      },20000);
//slide 2
      setTimeout(function(){
        newText("2","U were the 1st friend I had in college...");
      },21000);

      setTimeout(function() {
        newText("2","...I'm sure you are the only one...");
      },25000);

      setTimeout(function() {
       newText("2","...Chaar saal hone wale h bro...");
     },29000);

      setTimeout(function() {
       newText("2","...Aage aur bhi honge");
     },33000);

      setTimeout(function(){
         $('html, body').animate({scrollTop: $("#slide3").offset().top},1000);
      },39000);
//slide 3
      setTimeout(function(){
        newText("3","Kya chaaru kya iti...");
      },40000);

      setTimeout(function() {
        newText("3","...Sab moh maya h bhai...");
      },44000);

      setTimeout(function() {
       newText("3","...Vo bewafa kya jane...");
     },48000);

      setTimeout(function() {
       newText("3","...Bhai ka pyaaar kya hota h");
     },52000);

      setTimeout(function(){
         $('html, body').animate({scrollTop: $("#slide4").offset().top},1000);
      },56000);

//slide 4
      setTimeout(function(){
        newText("4","Jab pata chala ki tera breakup ho gaya");
      },57000);

      setTimeout(function() {
        newText("4","Laga, ye sach nahi ho sakta");
      },61000);

      setTimeout(function() {
       newText("4","Phir meine ye photo dekhi");
     },65000);

      setTimeout(function() {
       newText("4","No Captions Needed");
     },69000);

      setTimeout(function(){
         $('html, body').animate({scrollTop: $("#slide5").offset().top},1000);
      },73000);


      setTimeout(function(){
        newText("5","Batao");
      },74000);

      setTimeout(function() {
        newText("5","Haadh hi ho gayi");
      },78000);

      setTimeout(function() {
       newText("5","Koi paani pilao ise");
     },82000);

      setTimeout(function() {
       newText("5","Shakal se hi badwa lag raha h");
     },86000);

      setTimeout(function(){
         $('html, body').animate({scrollTop: $("#slide6").offset().top},1000);
      },90000);



      setTimeout(function(){
        newText("6","Thanks for still putting up with me");
      },91000);

      setTimeout(function() {
        newText("6","With all the horrible shit I do..");
      },95000);

      setTimeout(function() {
       newText("6","..You are always there to screw me !!");
     },99000);

      setTimeout(function() {
       newText("6","..But paani abhi bhi nahi dunga");
     },103000);

      setTimeout(function(){
         $('html, body').animate({scrollTop: $("#slide7").offset().top},1000);
      },107000);



      setTimeout(function(){
        newText("7","Happy Birthday Bhai");
      },108000);

      setTimeout(function() {
        newText("7","Enjoy kar, chicken phaad, hilla..");
      },112000);

      setTimeout(function() {
       newText("7",".. Aur bandiyan gayi gand marane");
     },116000);

      setTimeout(function() {
       newText("7","Tera bhai dega na blowjob tujhe");
     },122000);

      setTimeout(function(){
         $('html, body').animate({scrollTop: $("#slide8").offset().top},1000);
      },126000);



      setTimeout(function(){
        newText("8","From your anoka chutiya friend...");
      },127000);

      setTimeout(function() {
        newText("8","...jo paani nhi deta...");
      },131000);

      setTimeout(function() {
       newText("8","...jiska bandiyan kaat deti hein...");
     },135000);

      setTimeout(function() {
       newText("8","Kashish Badwa");
     },139000);

      setTimeout(function(){
         $('html, body').animate({scrollTop: $("#slide9").offset().top},1000);
      },143000);



      setTimeout(function(){
        newText("9","#JustBlowed");
      },143000);

},1000);
$('html, body').animate({scrollTop: $("body").offset().top},1000);

$(".loader").fadeOut("slow");


});