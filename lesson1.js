var array1 = [2,4,6,8,10],
    array2 = [],
    temp = "";
for(var i = 0 ; i< array1.length; i++){
  
 temp =  array1[i]*10 /2;
  array2.push(array1[i]*2);
}
//temp="";

console.log( "Array 2 ",array2);

function arrayMagic(arr, fn){

for( i=0; i< 10 ; i++){
	fn(i);
}
fn(array2);
}

var coolArray = arrayMagic(array1, function(item){
	for ( var i = 0 ; i < array1.length -1 ; i ++){

	console.log( array1[i] ," X ", item, " = ",  array1[i]*item );


	}


});

// coolArray;4

//  these changes are on the Git Branches ---


// change one 
// change two
// changes four
///////////////////////////////////////////

// 1
// 2
// 3
5
6
6
7
