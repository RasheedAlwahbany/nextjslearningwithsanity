import { ToolBar } from "../../components/toolbar";
import Link from "next/link";
import styles from '../../styles/Home.module.css';
function Feed({ pageId, articles }) {

    // if(articles.length<=pageId && pageId>0 ){
    if(pageId>0 ){

    const article=articles.filter((article)=>article.ID===pageId);
    if(article){
    return (
    <div className={styles.main}>
      <ToolBar />

      <h1>Hello world to feed by id</h1>
      <ul>
          
            <li>
            <div  className={styles.card}>
              <h1>
                {article[0].ID}: {article[0].Name}
              </h1>
              {!!article[0].Image && <img src={article[0].Image} width="200" alt="Not found" height="200" />}
              <p>{article[0].Position}</p>
              <p>{article[0].Desc}</p>
            
               </div>
               </li>
      </ul>
    </div>
  );
    }
            }
    
}

export const getServerSideProps = async (pageContext) => {
  const pageId = pageContext.query.pageId;
  if (!pageId || pageId<0) {
    return {
      props: {
        articles: [],
        pageId: 1,
      },
    };
  }
  // From server api with authentication
  // const apiResponse=await fetch("http://localhost:83/users_json_api/db.json",{headers:{Authorization:'Bearer.${process.env.NEXT_PUBLIC_KEY}',}});
  const apiResponse = await fetch("http://localhost:83/users_json_api/db.json");
  const { feeds } = await apiResponse.json();
  return {
    props: {
      articles: feeds,
      pageId: Number.parseInt(pageId),
    },
  };
};

export default Feed;
