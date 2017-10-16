var trs = document.getElementsByClassName('content');
for (var i = 0; i < trs.length; i++){
  var tr = trs[i];
  tr.addEventListener('mouseover', function(){
    this.classList.toggle('row-over');
  });
  tr.addEventListener('mouseout', function(){
    this.classList.toggle('row-over');
  });
}
