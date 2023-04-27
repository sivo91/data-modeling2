/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


const easyArrays = () => {

  const router = useRouter()
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
  }

  

  // GET OPTION
  const handleChange = (e) => {
    let option = e.target.value
    
    //console.log(typeof option, option) // STRING !
  
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
    } else if (option === 'findNumber7') {
      findNumber7(numbers)
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
 

   setOutput(`Your even numbers are: ${even} and odd numbers are: ${odd} `)
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

  setOutput(`Your smallest num is: ${small} and highest num is: ${highest}.`)

}

function removeLastNum(x) {

  let array = []
  for(let i = 0; i < x.length; i++) {

    array.push(Number(x[i]))
  }
  let a = array.pop()
  
  setOutput(`Your numbers are: ${array} removed num is ${a}`)
}

function removeFirst(x) {
  let array = []
  for(let i = 0; i < x.length; i++) {
    array.push(Number(x[i]))
  }

  let f = array.shift()

  setOutput(`Your numbers are: ${array}, removed num is: ${f}`)
}

 function  sum(x) {
  let array = []
  //let singles = 0
  let result = 0

  // convert string to num
  for(let i = 0; i < x.length; i++ ) {
    array.push(Number(x[i]))
  }

  // make copy
 /*  singles = array.slice()

  for(let i = 0; i < singles.length; i++) {
    result += singles[i]
  } */

  for(let i = 0; i < array.length; i++) {
    result += array[i]
  }

  setOutput(`Sum is: ${result}`)
}

function average(x) {
  let array = []
  let counter = 0
  let result = 0

  for(let i = 0; i < x.length; i++) {
    array.push(Number(x[i]))
  }
   
  let copy = array.slice()
  
  for(let i = 0; i < copy.length; i++ ) {
    counter += copy[i]
  }

  result = counter / 2
  //console.log(counter, result)

  setOutput(`Sum is: ${counter} and average is: ${result.toFixed(2)}`)
}

function over50 (x) {
  let array = []

  for(let i = 0; i < x.length; i++) {   
    if(Number(x[i] <= 50)) {
      array.push(Number(x[i]))
    }
  }
 
  //console.log(array)
  setOutput(`Your numbers are: ${array}` ) 

}

function findPair(x) {
 let arr = []
 let pair = []
  let n = 15

  for(let i = 0; i < x.length; i++) {
     arr.push(x[i])
  }

  let last = arr.length - 1
  let ar = arr.slice(0, last)

     for(let i = 0; i < ar.length; i++) {
 
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
      setOutput(`pair of numbers were not found, please try it again`)
    } else {
      setOutput(`first num is ${pair[0]}  + second num is ${pair[1]} = ${n}`)
    }

}

function findNumber7(x) {
  console.log(x)
  const singleNumbers = x.toString().split('')
  console.log(singleNumbers)
  const arr = []
  const number7 = []
  let count7 = 0

  for(let i = 0; i < singleNumbers.length; i++) {
    if(singleNumbers[i] === ','){
      continue
    }
    arr.push(Number(singleNumbers[i]))
  }
  console.log(arr)

  for(let i = 0; i < arr.length; i++) {
       if(arr[i] === 7) {
        number7.push(arr[i])
        count7++
       }
  }

   number7.length < 1 ? 
      setOutput('Your numbers dont contains number 7') :
      setOutput(`We find ${count7} x number 7 | [ ${number7} ]`)
}



const backHome = (e) => {
  e.preventDefault()
  router.push('/')
}
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
        <option value="findNumber7">find number 7</option>
      </select> 
     
     

      <div className="my-3 text-center" id='output'>{output}</div>

      <button className='btn btn-primary mx-3'
              onClick={backHome}> 
        Back
      </button>
    </div>
  )
}

export default easyArrays