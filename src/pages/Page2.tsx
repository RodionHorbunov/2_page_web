import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import styles from './Page.module.css';

export function Page2() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Page 2</h1>
      <div className={styles.buttons}>
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
        <Button>8</Button>
      </div>
      <Link className={styles.backLink} to="/">
        ← Back to Page 1
      </Link>
    </main>
  );
}
