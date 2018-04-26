
var people=[];
function addfunction(){
var myinfo={};
 myinfo.name = document.getElementById('name').value;
 myinfo.age = document.getElementById('age').value;
  
  
  people.push(myinfo);
  console.log(people);
  
}

function findfunction(){
  //return myinfo[key];
  var result = document.getElementById('find').value;
  var findlist=[];
  if(myinfo.name===result){
    var findlist = people.map(function()) {
     console.log(people.name);
})
    
  }
  //console.log(myinfo[key]);
}

function findSameAge(arr,str){
    var flagAge = 0;
    for (var i=0;i<arr.length;i++){
        if(arr[i].name == str){
          flagAge = arr[i].age;

        }
    }
    function isequal(el) {
        return  el.age === flagAge;
    }
    return arr.filter(isequal);
   
}

   
 output.forEach(function(el){
        var li = '<li>'+ el.name +' '+ el.age +'</li>';
        document.getElementById('ul').append(li);
})



