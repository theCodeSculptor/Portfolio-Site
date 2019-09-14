$("document").ready(function(){
  $("button").click(function(){
  if($("button").text() == "✖"){
  $("button").text("☰");
  }else{        
  $("button").text("✖");      
}
$(".nav-bar li").toggle("slow");
  });
});
