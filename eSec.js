function hidePunch([qtype],numOfPunchToHideMulti) {
  
  var x = numOfPunchToHideMulti;
  var nthChild = x + 2;
  var z = $ (".answers > .groupingCols:nth-child("+nthChild+")");
  var questionType = qtype;
  
  if(questionType.toUpperCase()=='M'){
    if($ ("input:checkbox:checked").size()==0 && $ (".survey-error").size()==0 ){
      z.hide();
    }
  }
  
  if(questionType.toUpperCase()=='S'){
    if($ ("input:radio:checked").size()==0 && $ (".survey-error").size()==0 ){
      z.hide();
    }
  }
  //console.log(x);
  //console.log(nthChild);
  return z;    
}  

function hideScale(scaleValueToHide){
  var x = scaleValueToHide; 

  var y = $ ("td[headers=QGRID_c"+x+"]");
  var z = $ ("#QGRID_c"+x);
  
  if($ ("input:radio:checked").size()==0 && $ (".survey-error").size()==0 ){
    y.hide();
    z.hide();
  }
}





/*------     no longer needed ----- */
/*-----  efforts that why it's not deleted ---*/

/*  --- First try

function showPunch(numOfPunchToShow) {
  
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



/*  Revision 2


function mPunch(numOfPunchToHideMulti) {
  
  var x = numOfPunchToHideMulti;
  var nthChild = x + 2;
  var z = $ (".answers > .groupingCols:nth-child("+nthChild+")");
  
  if($ ("input:checkbox:checked").size()==0 && $ (".survey-error").size()==0 ){
    z.hide();
  }

  console.log(x);
  console.log(nthChild);
 
  return z;    
}  

function sPunch(numOfPunchToHideSingle) {
  
  var x = numOfPunchToHideSingle;
  var nthChild = x + 2;
  var z = $ (".answers > .groupingCols:nth-child("+nthChild+")");
  
  if($ ("input:radio:checked").size()==0 && $ (".survey-error").size()==0 ){
    z.hide();
  }

  console.log(x);
  console.log(nthChild);
 
  return z;    
}

function gPunch(scaleValueToHide){
  var x = scaleValueToHide; 

  var y = $ ("td[headers=QGRID_c"+x+"]");
  var z = $ ("#QGRID_c"+x);
  
  if($ ("input:radio:checked").size()==0 && $ (".survey-error").size()==0 ){
    y.hide();
    z.hide();
  }
}
*/
