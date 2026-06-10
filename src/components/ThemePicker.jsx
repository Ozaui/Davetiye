import styles from './ThemePicker.module.css'

const THEMES = [
  { id: 'gold', label: 'Klasik Altın' },
  { id: 'night', label: 'Gece Mavisi' },
  { id: 'rose', label: 'Gül Kurusu' },
  { id: 'emerald', label: 'Zümrüt' },
]

export default function ThemePicker({ onSelect }) {
  return (
    <div className={styles.picker}>
      <p className={styles.kicker}>Merve &amp; Melih</p>
      <h1 className={styles.title}>Davetiye tasarımını seçin</h1>

      <div className={styles.grid}>
        {THEMES.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`${styles.option} theme-${t.id}`}
            onClick={() => onSelect(t.id)}
          >
            <span className={styles.preview}>
              <span className={styles.previewInner}>
                <span className={styles.previewTag}>Nişan Davetiyesi</span>
                <span className={styles.previewNames}>M &amp; M</span>
                <span className={styles.previewLine} />
                <span className={styles.previewDate}>13 Eylül 2025</span>
              </span>
            </span>
            <span className={styles.optionLabel}>{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
