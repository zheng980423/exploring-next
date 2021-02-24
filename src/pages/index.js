import styles from '../styles/Home.module.scss';
import Global from '../components/Global/Global';

export default function Home() {
  return (
    <div className={styles.home_wrapper}>
      <Global title={`Global Top 50`} />
      <Global title={`Songs You Might Like`} />
    </div>
  );
}
