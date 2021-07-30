// # 1. Compare two string arrays and find which strings match between the two arrays.
	const wordArr1 = ['dog', 'cat', 'fish', 'mango', 'ping', 'pong']
	const wordArr2 = ['fish', 'zebra', 'mango', 'khalifa', 'pong']
    const newWordArr = []





    for (let i = 0; i < wordArr1.length; i++) {
        
        for (let j = 0; j < wordArr2.length; j ++) {
            
            if(wordArr1[i] == wordArr2[j] ){
                newWordArr.push(wordArr1[i])
            }
            
        }
        
    }



console.log(newWordArr);

// # 2. Find the sum of the two largest numbers in numArr1.
	const numArr1 = [10, 25, 66, 78, 13, 16, 2, 95, 31]
    
    const newArr = numArr1.sort()
    

  
    console.log(newArr[numArr1.length -1] + newArr[numArr1.length -2]);


    // #3 Find the sum of the  sum of the three largest numbers in numArr2.
	const numArr2 = [10, 43, 64, 13, 12, 1, 67, 81, 51]
      const newArr2 = numArr2.sort()
    

  
    console.log(newArr2[numArr2.length -1] + newArr2[numArr2.length -2] + newArr2[numArr2.length -3]);