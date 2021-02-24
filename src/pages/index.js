import { useState } from 'react';
import styles from '../styles/Home.module.scss';
import Global from '../components/Global/Global';
import Recent from '../components/Recent/Recent';

export default function Home() {
  const [title, setTitle] = useState(['Global Top 50', 'Songs You Might Like']);
  return (
    <div className={styles.home_wrapper}>
      {title.map(til => (
        <Global title={til} key={til} />
      ))}
      <Recent />
    </div>
  );
}
