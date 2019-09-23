function hidePunch([qtype(10)],numOfPunchToHide) {
  
  var questionType = qtype;
  var x = numOfPunchToHide;
  var nthChild = x + 2;
  
  var z = $ (".answers > .groupingCols:nth-child("+nthChild+")");
  
  var a = $ ("td[headers=QGRID_c"+x+"]");
  var b = $ ("#QGRID_c"+x);
  
  
  if(questionType.toUpperCase()=='MTYPE'){
    if($ ("input:checkbox:checked").size()==0 && $ (".survey-error").size()==0 ){
      z.hide();
    }
  }
  
  if(questionType.toUpperCase()=='STYPE'){
    if($ ("input:radio:checked").size()==0 && $ (".survey-error").size()==0 ){
      z.hide();
    }
    return z;
  }
  //console.log(x);
  //console.log(nthChild);
  //return z;   

  if(questionType.toUpperCase()=='SCALE'){ 
    if($ ("input:radio:checked").size()==0 && $ (".survey-error").size()==0 ){
      a.hide();
      b.hide();
    }
  }
}  

/*
function hideScale(scaleValueToHide){
  var x = scaleValueToHide; 

  var y = $ ("td[headers=QGRID_c"+x+"]");
  var z = $ ("#QGRID_c"+x);
  
  if($ ("input:radio:checked").size()==0 && $ (".survey-error").size()==0 ){
    y.hide();
    z.hide();
  }
}
*/





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
