function hidePunch([qtype],numOfPunchToHide) {
  
  var questionType = qtype;
  var x = numOfPunchToHide;
  var nthChild = x + 2;
  
  var z = $ (".answers > .groupingCols:nth-child("+nthChild+")");
  
  //var a = $ ("td[headers=QGRID_c"+x+"]");
  //var b = $ ("#QGRID_c"+x);
  
  if($ ("input:checkbox:checked").size()==0 && $ (".survey-error").size()==0 ){
     if(questionType.toUpperCase()=='M'){
      z.hide();
     }
     if(questionType.toUpperCase()=='S'){
      z.hide();
     }
     if(questionType.toUpperCase()=='G'){
        var getId = $ ('.col-legend').attr('id');
	var idLen = getId.length;
	var useId = getId.substring(0, idLen-3);

	var a = $ ("'td[headers='+useId+'_c'+x+']'");
	var b = $ ("#+useId+"_c"+x");
       
	a.hide();
        b.hide();
     }
  }
}  


/*function hidScale([questionName],valueToHide){
	var qname = questionName;
	var x = valueToHide;
	
	var ScaleHeader = $ ("td[headers="+qname+"_c"+x+"]");
	var punchesUnderTheScaleHeader = $ ("#"+qname+"_c"+x);
	
	ScaleHeader.hide();
	punchesUnderTheScaleHeader.hide();
}*/


/*
<style name="respview.client.js" with="Q47x50"><![CDATA[
<script src='https://esecretaria.github.io/eSec/eSec.js'></script>
<script>
$ (document).ready(function(){
  
  if($ ("input:checkbox:checked").size()==0 && $ (".survey-error").size()==0 ){
       $ ("td[headers=Q47x50_c4]").hide();
       $ ("#Q47x50_c4").hide();
    }

});       
</script>
]]></style>

*/
