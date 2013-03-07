/*
Developer:Mohsen Sharify at 2012
type:opensource

-----------------------------
Using:
  $(document).ready(function(){
         $.animateTo('YourSelector', {
             pointsX: [201,373,489,587],
             pointsY: [181,181,272,272]
        });
    });
*/


(function($){
  $.animateTo = function(selector, settings){
	var config = settings;
	var obj = $(selector);
	var script="";
	
	obj.css("position","absolute");//set absolute position for set tops/rights
	
	
	for (var i = config.pointsX.length; i > 0; i--)//make animate scripts one by one
	{
		script = '$("'+selector+'").animate({"right":"' + config.pointsX[i-1] + '","top":"' + config.pointsY[i-1] + '"},1000,function(){' + script + '});';
	}
	setTimeout(script, 1);//run combined script just now
  };
})(jQuery);
