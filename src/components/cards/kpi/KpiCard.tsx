import Image from 'next/image';
import styles from './KpiCard.module.css';

export interface IKpiCard {
  image: string;
  image_alt: string;
  title: string;
  value: string;
  tag: string;
}

const KpiCard: React.FC<IKpiCard> = ({
  image,
  title,
  value,
  image_alt,
  tag,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <Image
            src={image}
            alt={image_alt}
            className={styles.card__image}
            width="275"
            height="100"
          />
        </div>
        <div className={styles.card__body}>
          <h4>{title}</h4>
          <p>{value}</p>
        </div>
        <div className={styles.card__footer}>
          <span className={`${styles.tag} ${styles['tag-blue']}`}>{tag}</span>
        </div>
      </div>
    </div>
  );
};

export default KpiCard;
