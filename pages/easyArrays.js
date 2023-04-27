/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState } from 'react'


const easyArrays = () => {

  
  const [numbers, setNumbers] = useState([])
  const [select, setSelect] = useState('')
  const [output, setOutput] = useState(null)
  
 
  // GET RANDOM NUMBERS
  const getNumbers = (e) => {
    e.preventDefault()
    
    setOutput('')
    let arr = []

    for(let i = 0; i < 8; i++) {

      let n = Math.floor(Math.random() * 90 )
      if(arr[i] === n) {
        n == Math.floor(Math.random() * 90 )
      } else {
        arr.push(n)
      }     
    }
    setNumbers(arr)
  }


  // CLEAR FIELD
  const clearData = () => {
       setNumbers([])
       setOutput('')
       setSelect('')
  }

  

  // GET OPTION
  const handleChange = (e) => {
    let option = e.target.value
    
    //console.log(typeof option, option) // STRING !
    setSelect(option)
    if(numbers.length < 2) {
      alert('Plese select numbers')
    }
    if(option === 'even') { 
      evenOdd(numbers)
    } else if(option === 'small') {
      findSmall(numbers)
    } else if ( option === 'pop') {
      removeLastNum(numbers)
    } else if ( option === 'removeFirst') {
      removeFirst(numbers)
    } else if ( option === 'sum'){
      sum(numbers)
    } else if (option === 'avg') {
      average(numbers)
    } else if ( option === 'over50') {
      over50(numbers)
    } else if (option === 'pair') {
      findPair(numbers)
    }
  }

  /*****  FUNCTIONS TO GET SOLUTION *******/

  // EVEN/ODD
  const evenOdd = (x) => {
    let even = []
    let odd = []

  for(let i = 0; i < x.length - 1; i++) {
    let num = Number(x[i])
    if(num % 2 === 0) {
      even.push(num)
    } else {
      odd.push(num)
    }
  }
 

   setOutput(`Your even numbers are: ${even} ` + '<br><br>' +  `and odd numbers are: ${odd} `)
}

function findSmall(arr) {
 
   let small = arr[0]
   let highest = arr[0]

   for(let i = 0; i < arr.length; i++) {
    let array = Number(arr[i])

   if(array < small ) {
    small = array
   } 
    if (array > highest) {
     highest = array
    } 
   }

  setOutput(`Your smallest num is: ${small}` + '<br><br>' + `and highest num is: ${highest}.`)

}

function removeLastNum(x) {

  let array = []
  for(let i = 0; i < x.length; i++) {

    array.push(Number(x[i]))
  }
  let a = array.pop()
  
  setOutput(`Your smallest num is: ${small}` + '<br><br>' + `and highest num is: ${highest}.`)
}

function removeFirst(x) {
  let array = []
  for(let i = 0; i < x.length; i++) {
    array.push(Number(x[i]))
  }

  let f = array.shift()

  setOutput(`Your numbers are: ${array}` + '<br><br>' + ` removed num is: ${f}`)
}

/* function  sum(x) {
  let array = []
  let singles
  let count = 0
  
  // convert for obj to num
  for(let i = 0; i < x.length; i+=3 ) {
    array.push(Number(x[i]))
  }

  // make copy
  singles = array.slice()

  let result = 0

  for(let i = 0; i < singles.length; i++) {
    result += singles[i]
  }
  console.log(result) 
  document.getElementById('output').innerHTML = `Sum is: ${result}`

}

function average(x) {
  let arr = x.split('')
  let array = []
  counter = 0

  for(let i = 0; i < arr.length; i+=3) {
    if(arr[i] === ',') {
      continue
    }

    array.push(Number(arr[i] + arr[i + 1]))
  }
   
  let copy = array.slice()
  console.log(copy)
  

  for(let i = 0; i < copy.length; i++ ) {
    counter += copy[i]
  }

  let result = counter / 2
  console.log(counter, result)

  output.innerHTML = `Sum is: ${counter}` + '<br><br>' + ` and average is: ${result}` 

}

function over50 (x) {
  let arr = x.split('')
  let array = []

  for(let i = 0; i < arr.length; i+=3) {
    if(arr[i] === ',') {
      continue
    }
   
    if(Number(arr[i] + arr[i + 1]) <= 50) {
      array.push(Number(arr[i] + arr[i + 1]))
    }
  }
 
  console.log(array)
  output.innerHTML = `Your numbers are: ${array}`  

}

function findPair(x) {
 let array = x.split('')
 //console.log(array)

 let arr = []

  pair = []
  let n = 15

  for(let i = 0; i < array.length; i++) {
     if(array[i] === ',') {
      continue
     }
     arr.push(array[i])
  }

  let last = arr.length - 1
  let ar = arr.slice(0, last)

   //console.log(ar, typeof ar)


    for(let i = 0; i < ar.length; i++) {
      //let x = Number(ar[i])
      //console.log(x)
       
       for(let j = i + 1; j < ar.length; j++) {
           let a = Number(ar[i])
           let b = Number(ar[j])
        if( a + b === n) {
          pair.push(a, b)
        } 
       }
    }
    console.log(pair)

    if(pair[0] === undefined && pair[1] === undefined) {
      output.innerHTML = `pair of numbers were not found, please try it again`
    } else {
      output.innerHTML = `first num is ${pair[0]}  + second num is ${pair[1]} = ${n}`
    }

}
 */

  return (

    <div className="container">
     

      <div className='mt-5 py-5'>
        <button className="btn btn-outline-primary addNum ms-3  mx-auto" type="button"
                onClick={getNumbers}>
           Generate Numbers
        </button>

        <button className="btn btn-outline-danger reload ms-3  mx-auto" type="button"
                onClick={clearData}>
          Clear
        </button>
      </div>

      <div className="text-center">{numbers.join(' , ')}</div>


      
      <select className="form-select my-4" 
           id='select-option'
           aria-label="Default select example"
           onChange={handleChange}>
        <option value={''}>select menu</option>
        <option value="even">even/odd nums</option>
        <option value="small">smallest/highest nums</option>
        <option value="pop">remove last number</option>
        <option value="removeFirst">remove first number</option>
        <option value="sum">sum of numbers</option>
        <option value="avg">Average of nums</option>
        <option value="over50">remove num bigger than 50</option>
        <option value="pair">find 2 numbers to sum 15</option>
      </select> 
     
     

      <div className="my-3 text-center" id='output'>{output}</div>
    </div>
  )
}

export default easyArrays