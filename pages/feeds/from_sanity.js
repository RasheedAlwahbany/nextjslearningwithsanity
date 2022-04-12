import { ToolBar } from "../../components/toolbar";
import styles from '../../styles/Home.module.css';
function Authors({ articles }) {
  console.log(articles[0].image.asset._ref);
  console.log('https://cdn.sanity.io/images/vaa4iwre/production/'+articles[0].image.asset._ref.split('-')[1]+articles[0].image.asset._ref.split('-')[2]+'.jpg');
  const article=articles[0];
  return (
    <>
    <div className={styles.main}>
      <ToolBar />
      <h1>Hello world to feed from sanity.io</h1>
      <ul>
        
           
            <li> 
            <div  className={styles.card}>
              <h1>
              <a >{article.name}</a>
              </h1>
              <a href={'/feeds/'+article.ID}>{!!article.image.asset._ref && <img src={'https://cdn.sanity.io/images/vaa4iwre/production/'+article.image.asset._ref.split('-')[1]+'-'+article.image.asset._ref.split('-')[2]+'.jpg'} width="200" alt="Not found" height="200" />}</a>
              <p>{article._type}</p>
              <p>{article._updatedAt}</p>
              </div>
            </li>
          
      </ul>
      </div>
    </>
  );
}

export const getServerSideProps = async (pageContext) => {

  // From server api with authentication
  const apiResponse = await fetch(`https://vaa4iwre.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "author"]`);
  const { result } = await apiResponse.json();
  return {
    props: {
      articles: result,
    },
  };
};

export default Authors;
