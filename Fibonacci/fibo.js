// let fibo = [0,1]
//     for(let i = 2; i < 20; i++){
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     console.log(fibo);

    // function fibo(arr){
    //     for(let i = 2; i < 20; i++){
    //         arr[i] = arr[i - 1] + arr[i - 2];
    //     }
    //     return arr;
    // }
    // let array = [0,1];
    // console.log(fibo(array))

    function fibo(arr){
        if(typeof arr != 'number'){
            return "input a number";
        }
        else if(arr < 2){
            return 'Input a number greater than 1'
        }
        let array = [0,1];
        for(let i = 2; i < arr; i++){
            array[i] = array[i - 1] + array[i - 2];
        }
        return array;
    }
  
    console.log(fibo(70))
