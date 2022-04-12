import { ToolBar } from "../../components/toolbar";
import styles from '../../styles/Home.module.css';
import Link from "next/link";
function Feeds({ articles }) {
  return (
    <>
    <div className={styles.main}>
      <ToolBar />
      <h1>Hello world to feed</h1>
      <ul>
        {articles.map((article) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <li> 
            <div  className={styles.card}>
              <h1>
              <a href={'/feeds/'+article.ID}>{article.ID}: {article.Name}</a>
              </h1>
              <a href={'/feeds/'+article.ID}>{!!article.Image && <img src={article.Image} width="200" alt="Not found" height="200" />}</a>
              <p>{article.Position}</p>
              <p>{article.Desc}</p>
              </div>
            </li>
          );
        })}
      </ul>
      </div>
    </>
  );
}

export const getServerSideProps = async (pageContext) => {

  // From server api with authentication
  // const apiResponse=await fetch("http://localhost:83/users_json_api/db.json",{headers:{Authorization:'Bearer.${process.env.NEXT_PUBLIC_KEY}',}});
  const apiResponse = await fetch("http://localhost:83/users_json_api/db.json");
  const { feeds } = await apiResponse.json();
  return {
    props: {
      articles: feeds,
    },
  };
};

export default Feeds;
