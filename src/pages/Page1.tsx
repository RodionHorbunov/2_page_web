import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import styles from './Page.module.css';

export function Page1() {
  const navigate = useNavigate();

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Page 1</h1>
      <div className={styles.buttons}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button onClick={() => navigate('/page2')}>4</Button>
      </div>
    </main>
  );
}
