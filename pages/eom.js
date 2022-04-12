import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ToolBar } from "../components/toolbar";
const EOM = ({ employee }) => {

  const { ID, Name, Image, Desc, Position } = employee.EOM;
  return (
    <div className={styles.container}>
        <ToolBar/>
      <div className={styles.main}>
      
        <h1>The employee of month is:<br/>{ID}: {Name} </h1>
        <img src={Image} width="200" alt="Not found" height="200" />
        <p>{Position}</p> 
        <p>{Desc}</p>
      </div>
    </div>
  );
};

//all commands inside getServerSideProps run on the server
export const getServerSideProps = async (pageContext) => {
//   const eomApi=await fetch('http://localhost:3000/db.json');//locally Or 
  const eomApi = await fetch("http://localhost:83/users_json_api/db.json"); //from the server the same file and data
  const eom = await eomApi.json();
  return {
    props: {
      employee: eom,
    },
  };
};

export default EOM;
