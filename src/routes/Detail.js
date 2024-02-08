import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailPage from '../components/DetailPage';
import styles from './Detail.module.css';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setInfo(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(info);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <h1>Loading...</h1>
        </div>
      ) : (
        <DetailPage info={info} />
      )}
    </div>
  );
}
export default Detail;
