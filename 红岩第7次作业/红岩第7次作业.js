//map方法
function person(a){
  var sum=a*2;
  return sum;
}
var a=[1,2,3,4];
var b;
for(var i=0;i<4;i++)
{
   b=a[i];
   var c= person(a[i]);
   console.log(c)
}
//reduce方法
var a=[1,2,3,4];
var b=0;
function sum(a){
 for(var i=0;i<4;i++)
{
	 b+=a[i];
}
return b;
}
var c=sum(a);
console.log(c);
//forEach方法
var a=[1,2,3,4];
var c;
function each(b){
for(var i=0;i<4;i++){
 c+=b[i]+"llp"
console.log(c)
}
return c;
}
var d= each(a);
console.log(d);
//some方法
var a=[2,2,3,4]
function xuanze(j){
	var c=0;
	for(var i=0;i<4;i++)
	{
		var b=j[i];
     console.log(b);
     if(b>2)
     {
     	alert(true);
     	
     }
	}
		
}
xuanze(a);
//filter方法
var a=[5,9,6,7,10]
function bj(c){
	var b=new Array();
	for(var i=0;i<5;i++)
	{
		if (c[i]>6) {
			b+=c[i]
		}
	}
	return b;
}
var h=bj(a);