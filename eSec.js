function hidePunch(qType,numOfPunchToHide) {
  
  var x = numOfPunchToHide;
  var nthChild = x + 2;
  var z = $ (".answers > .groupingCols:nth-child("+nthChild+")");
  var questionType = qType;
  
  if(questionType.toUpperCase()=='M'){ // for multi
      if($ ("input:checkbox:checked").size()==0 && $ (".survey-error").size()==0 ){
        z.hide();
      }
  }
  
 if(questionType.toUpperCase()=='S'){ // for single
      if($ ("input:checkbox:checked").size()==0 && $ (".survey-error").size()==0 ){
        z.hide();
      }
  }
  console.log(x);
  console.log(nthChild);
 
  return z;    
}  

function hideGridPunch(scaleValueToHide){
  var x = scaleValueToHide; 

  var y = $ ("td[headers=QGRID_c"+x+"]");
  var z = $ ("#QGRID_c"+x);

  y.hide();
  z.hide();
}


/*------     no longer needed ----- */
/*function showPunch(numOfPunchToShow) {
  
  var x = numOfPunchToShow;
  var nthChild = x + 2;
  var z = $ (".answers > .groupingCols:nth-child("+nthChild+")");
  
  console.log(x);
  console.log(nthChild);
  z.show();
  return z;    
} 

function showGridPunch(scaleValueToHide){
  var x = scaleValueToHide; 

  var y = $ ("td[headers=QGRID_c"+x+"]");
  var z = $ ("#QGRID_c"+x);

  y.show();
  z.show();
}
*/
