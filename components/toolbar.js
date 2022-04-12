import Link from "next/link";
import styles from '../styles/Home.module.css';
export const ToolBar=()=>{
    
    return(
        <>
        <div className={styles.ToolBar}>
            {/* <Link  onClick={()=>(window.location.href='/')}> Home </Link> */}
            <Link  href="/"> Home </Link>
            <Link  href="/eom"> EOM </Link>
            <Link  href="/feeds"> Feeds </Link>
            <Link  href="/feeds/from_sanity"> Sanity </Link>
        </div>
        </>
    )
}