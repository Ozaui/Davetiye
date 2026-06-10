import styles from './Invitation.module.css'

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Karesi%2C+Bal%C4%B1kesir'

export default function Invitation() {
  return (
    <div className={styles.card}>
      <div className={styles.border}>
        <div className={styles.innerBorder}>

          {/* Top ornament */}
          <div className={styles.ornamentTop}>
            <span className={styles.ornamentLine} />
            <svg className={styles.ornamentIcon} viewBox="0 0 60 28" fill="none">
              <path d="M30 2 C20 2, 2 9, 2 16 C2 22, 10 26, 20 24 C26 23, 30 18, 30 18 C30 18, 34 23, 40 24 C50 26, 58 22, 58 16 C58 9, 40 2, 30 2Z" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.06"/>
              <circle cx="30" cy="14" r="2.5" fill="currentColor" fillOpacity="0.5"/>
            </svg>
            <span className={styles.ornamentLine} />
          </div>

          {/* Tag */}
          <p className={styles.tag}>— Nişan Davetiyesi —</p>

          {/* Names */}
          <div className={styles.namesBlock}>
            <h1 className={styles.name}>Merve</h1>
            <div className={styles.ampersand}>&</div>
            <h1 className={styles.name}>Melih</h1>
          </div>

          {/* Divider */}
          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <svg className={styles.dividerIcon} viewBox="0 0 20 20" fill="none">
              <path d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8 Z" fill="currentColor" opacity="0.55"/>
            </svg>
            <span className={styles.dividerLine} />
          </div>

          {/* Date */}
          <div className={styles.dateBlock}>
            <p className={styles.dateLabel}>Tarih</p>
            <p className={styles.date}>13 Eylül 2025</p>
            <p className={styles.dayName}>Cumartesi</p>
          </div>

          <div className={styles.divider} style={{ margin: '10px auto' }}>
            <span className={styles.dividerLine} />
          </div>

          {/* Time & Location */}
          <div className={styles.infoBlock}>
            <div className={styles.infoRow}>
              <p className={styles.infoLabel}>Saat</p>
              <p className={styles.infoValue}>18:00</p>
            </div>
            <div className={styles.infoRow}>
              <p className={styles.infoLabel}>Adres</p>
              <div className={styles.addressBlock}>
                <p className={styles.infoValue}>Karesi, Balıkesir</p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.addressLink}
                >
                  <svg className={styles.mapIcon} viewBox="0 0 16 16" fill="none">
                    <path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5zm0 6.75A1.75 1.75 0 1 1 8 4.25a1.75 1.75 0 0 1 0 3.5z" fill="currentColor"/>
                  </svg>
                  Nasıl Gelirim?
                </a>
              </div>
            </div>
          </div>

          <div className={styles.divider} style={{ margin: '12px auto' }}>
            <span className={styles.dividerLine} />
            <svg className={styles.dividerIcon} viewBox="0 0 20 20" fill="none">
              <path d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8 Z" fill="currentColor" opacity="0.55"/>
            </svg>
            <span className={styles.dividerLine} />
          </div>

          {/* Message */}
          <p className={styles.message}>
            Sizi bu özel günümüzde<br />yanımızda görmekten<br />mutluluk duyarız.
          </p>

          {/* Bottom ornament */}
          <div className={styles.ornamentBottom}>
            <span className={styles.ornamentLine} />
            <svg className={styles.ornamentIconSmall} viewBox="0 0 24 12" fill="none">
              <path d="M12 1 C8 1, 1 4, 1 7 C1 9, 4 10, 8 9 C10 8.5, 12 7, 12 7 C12 7, 14 8.5, 16 9 C20 10, 23 9, 23 7 C23 4, 16 1, 12 1Z" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.07"/>
            </svg>
            <span className={styles.ornamentLine} />
          </div>

        </div>
      </div>
    </div>
  )
}
