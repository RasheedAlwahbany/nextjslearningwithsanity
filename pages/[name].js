
import { useRouter } from 'next/router';

export default function Name({data}) {
  const router=useRouter();
  const {name}=router.query;
  const {ID,Name,Age}=data;
  return (
      <div>
    <p>Client side Rendering (SSR)</p>
    <p>Server side Rendering (SSR)</p>
    <p>*this is static site Generation (SSG) page example</p>
    <p>Hello {name} with {ID}:{Name}</p>
    <ul>
    
  </ul>
  </div>
  )
}

// This is SSR Server side rendering
export async function getServerSideProps({params}){
    const req=await fetch('http://localhost:3000/data.json')
    const data=await req.json();
    return{props:{data}}
}

// This is SSG Static site generation
// 1
// export async function getStaticProps({params}){
//     const req=await fetch('http://localhost:3000/data.json')
//     const data=await req.json();
//     return{props:{data}}
// }
// 2
// export async function getStaticPaths() {
//     return {
//       paths: [
//         { params: { name:'ahmed'} }
//       ],
//       fallback: true // false or 'blocking'
//     };
//   }
