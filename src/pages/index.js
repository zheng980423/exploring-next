import { useState } from 'react';
import styles from '../styles/Home.module.scss';
import Global from '../components/Global/Global';
import Recent from '../components/Recent/Recent';

export default function Home() {
  const [title, setTitle] = useState(['Global Top 50', 'Songs You Might Like']);
  const [songs, setSongs] = useState([
    { id: 1, source: 'en', name: '嗯', artist: '李榮浩' },
    { id: 2, source: 'erduo', name: '耳朵', artist: '李榮浩' },
    { id: 3, source: 'maque', name: '麻雀', artist: '李榮浩' },
  ]);
  return (
    <div className={styles.home_wrapper}>
      {title.map(til => (
        <Global title={til} key={til} songs={songs} />
      ))}
      <Recent songs={songs} />
    </div>
  );
}
