function hidePunch([qtype],numOfPunchToHide) {
  
  var questionType = qtype;
  var x = numOfPunchToHide;
  var nthChild = x + 2;
  
  var z = $ (".answers > .groupingCols:nth-child("+nthChild+")");
  
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

	var a = $ ("td[headers="+useId+"_c"+x+"]");
	var b = $ ("#"+useId+"_c"+x);
       
	a.hide();
        b.hide();
     }
     if(questionType.toUpperCase()=='N'){
	//var getLabel = $ ("span.label").text();
	//var lastStr = getLabel.length;
	//var labelName = getLabel.substring(1, getLabel-1);
	var excl = $ ("div.answers > div:eq("+x+")");     
	excl.hide();     
	$ ('span.qaCode').hide();
	$ ('sup.qaCode').hide();
    }
  }
}  

