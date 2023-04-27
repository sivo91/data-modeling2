import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 const router = useRouter()

  const easyArrays = (e) => {
    e.preventDefault()
    router.push('/easyArrays')
  }

  return (
    <>
      <p className='mt-5 pt-5 text-center'>
        Data Modeling 
      </p>
      <p className='text-center'> Challanges and solutions </p> 

      <div className='btns'>
          <button
             onClick={easyArrays}
             className='btn btn-primary'>
             Easy Arrays
          </button>
      </div>

      <style>{`
       
       .btns {
        position: relative;
        width: 375px;
        margin: 0 auto;
       }
      
      `}</style>
    </>
  )
}
