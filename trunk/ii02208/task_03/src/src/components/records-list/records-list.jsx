import styles from "./records-list.module.css";

export function RecordsList({ recordPreviews, setRecord }) {
  return (
    <div className={styles.wrap}>
      {recordPreviews.map((record) => (
        <div
          className={styles.recordItemContent}
          key={record.key}
          onClick={() => setRecord(record.key)}
        >
          <img
            draggable={false}
            className={styles.image}
            src={record.image}
            width={180}
            height={180}
            alt={record.name}
          />
          <div className={styles.name}>{record.name}</div>
          <div className={styles.date}>{record.date}</div>
        </div>
      ))}
    </div>
  );
}