function hidePunch([qtype],numOfPunchToHide) {
  
  var questionType = qtype;
  var x = numOfPunchToHide;
  var nthChild = x + 2;
  
  var z = $ (".answers > .groupingCols:nth-child("+nthChild+")");
  
  var a = $ ("td[headers=QGRID_c"+x+"]");
  var b = $ ("#QGRID_c"+x);
  
  
  if($ ("input:checkbox:checked").size()==0 && $ (".survey-error").size()==0 ){
     if(questionType.toUpperCase()=='M'){
      z.hide();
     }
     if(questionType.toUpperCase()=='S'){
      z.hide();
     }
     if(questionType.toUpperCase()=='G'){
        a.hide();
        b.hide();
     }
  }
}  

function hideGrid(questionName,numOfPunchToHide) {
  
  var qname = questionName;
  var x = numOfPunchToHide;
  
  var a = $ ("td[headers="+qname+"_c"+x+"]");
  var b = $ ("#"+qname+"+_c"+x);
  
  
  if($ ("input:checkbox:checked").size()==0 && $ (".survey-error").size()==0 ){
        a.hide();
        b.hide();
    }
}  

