function hidePunch2(numOfPunchToHide) {
  
  var x = numOfPunchToHide;
  var nthChild = x + 2;
  //var z = $ (".answers > .groupingCols:nth-child("+nthChild+")");
  
  var span = document.getElementByClass('groupingCols');
  var row = span.getElementsByTagName('div')[nthChild].childNodes[nthChild];
  
  //console.log(x);
  //console.log(nthChild);
  //z.hide();
  //return z;    
   row.hide();
  return row;
}  

function hideShowPunch(valuesToHide){
  var x = [valuesToHide];
  

  for(var i=0; i<=x.length; i++){
    hidePunch2(x[i]);
  }

  if ( $ ("div.survey-body > #primary > div").hasClass("survey-error") ) {  
      for(var i=0; i<=x.length; i++){
        showPunch(x[i]);
      }
    }  
}

function hidePunch(numOfPunchToHide) {
  
  var x = numOfPunchToHide;
  var nthChild = x + 2;
  var z = $ (".answers > .groupingCols:nth-child("+nthChild+")");
  
  console.log(x);
  console.log(nthChild);
  z.hide();
  return z;    
}  
    
function showPunch(numOfPunchToShow) {
  
  var x = numOfPunchToShow;
  var nthChild = x + 2;
  var z = $ (".answers > .groupingCols:nth-child("+nthChild+")");
  
  console.log(x);
  console.log(nthChild);
  z.show();
  return z;    
} 






function hideGridPunch(scaleValueToHide){
  var x = scaleValueToHide; 

  var y = $ ("td[headers=QGRID_c"+x+"]");
  var z = $ ("#QGRID_c"+x);

  y.hide();
  z.hide();
}


function showGridPunch(scaleValueToHide){
  var x = scaleValueToHide; 

  var y = $ ("td[headers=QGRID_c"+x+"]");
  var z = $ ("#QGRID_c"+x);

  y.show();
  z.show();
}
