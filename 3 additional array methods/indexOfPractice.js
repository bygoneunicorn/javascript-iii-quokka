var numbers = [2,6,1235,2,3,4,25,3,true, 12];

//Find the index of 12

//Find the index of 1236

//find the indexes of all 3s

var ar1 = [2,3,4,5,6,43,3,3,3]
var first = ar1.indexOf(3) 

var nextIdx = 0
var all2s = []
while(nextIdx >= 0){
  var idx = ar1.indexOf(2, nextIdx);
  if(idx>=0){
    all2s.push(idx)
    nextIdx = idx + 1;
  }
}
all2s;