import { ToolBar } from "../../components/toolbar";
import styles from '../../styles/Home.module.css';
import { useRouter } from "next/router";
function Feed({ pageId, articles }) {
    const router=useRouter();
const itemsCount=articles.length;
    if(itemsCount>=pageId && pageId>0 ){
    

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
      <div className={styles.code}>
            <span desabled={pageId===1?false:true} onClick={()=>{
                if(pageId>1){
                        router.push('/feeds/'+(pageId-1))
                }
            }}>{'<- Prev'}</span>  |   <span desabled={pageId===itemsCount?false:true} onClick={()=>{
                if(pageId<itemsCount){
                        router.push('/feeds/'+(pageId+1))
                }
            }}>{'Next ->'}</span>
      </div>
    </div>
  );
    }
            }else
            return (
                <div className={styles.main}>
                    <ToolBar />
                    <h1>
                    The feed you want is not exists.
                    </h1>
                </div>
            )
    
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
