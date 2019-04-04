function triangleType () {
  	function sortNumbers(a,b) { 
        return a - b;
    }
   	var args = [];
	  for (var i = 0; i < arguments.length; i++) {
	  args[i] = arguments[i];  
	 }
  args.sort(sortNumbers);    
	var maxNumber = args.pop(); //наибольшее число массива записываю в переменную и удаляю из массива (оно последнее после сортировки)
 	var sumOfSmallestNums=0;	//сумма наименьших оставшихся чисел массива
	var sumOfSquaresOfSmallestNums=0; //сумма квадратов наименьших оставшихся чисел массива
  for(var i=0;i<args.length;i++){
	    sumOfSmallestNums += (args[i]);
	    sumOfSquaresOfSmallestNums = sumOfSquaresOfSmallestNums + Math.pow((args[i]),2);    
	  }
  if (arguments.length < 3 || arguments.length > 3){
    console.log('Введите три длины сторон треугольника');
    return;
  } else if (sumOfSmallestNums <= maxNumber) { 
	  		var answer = 'не существует';
	   	} else if (sumOfSquaresOfSmallestNums === Math.pow(maxNumber, 2)) {    
	 		var answer = 'прямоугольный';
		} else if (sumOfSquaresOfSmallestNums < Math.pow(maxNumber, 2)) {    
	  		var answer = 'тупоугольный';
		} else {
	  		var answer = 'остроугольный';
	}
  console.log(`Ваш треугольник ${answer}`);
}
triangleType(2,4,6);