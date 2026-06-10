import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Invitation from './Invitation'
import styles from './Envelope.module.css'

export default function Envelope({ opened, onOpen }) {
  const [cardVisible, setCardVisible] = useState(false)
  const [cardRisen, setCardRisen] = useState(false)
  const [showFullscreen, setShowFullscreen] = useState(false)
  const [envelopeFaded, setEnvelopeFaded] = useState(false)

  useEffect(() => {
    if (opened) {
      setTimeout(() => setCardVisible(true), 1000)
      setTimeout(() => setCardRisen(true), 1200)
      setTimeout(() => {
        setShowFullscreen(true)
        setEnvelopeFaded(true)
      }, 2600)
    }
  }, [opened])

  return (
    <div className={styles.wrapper}>
      {/* Rising card (intermediate animation) */}
      {cardVisible && !showFullscreen && (
        <div className={`${styles.cardContainer} ${cardRisen ? styles.cardRisen : ''}`}>
          <Invitation />
        </div>
      )}

      {/*
        Portal → rendered directly under <body>, NOT inside the scaled wrapper.
        This ensures position:fixed covers the real viewport, not the
        transformed container.
      */}
      {showFullscreen && createPortal(
        <div className={styles.fullscreenOverlay}>
          <div className={styles.cardScaler}>
            <Invitation />
          </div>
        </div>,
        document.body
      )}

      {/* Envelope */}
      <div
        className={`${styles.envelope} ${opened ? styles.opened : ''} ${envelopeFaded ? styles.envelopeFaded : ''}`}
        onClick={!opened ? onOpen : undefined}
        role={!opened ? 'button' : undefined}
        tabIndex={!opened ? 0 : undefined}
        onKeyDown={!opened ? (e) => e.key === 'Enter' && onOpen() : undefined}
        aria-label="Zarfı aç"
      >
        <div className={styles.body} />
        <div className={styles.flapBottom} />
        <div className={styles.flapLeft} />
        <div className={styles.flapRight} />

        <svg
          className={styles.seams}
          viewBox="0 0 440 275"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line x1="0"   y1="0"   x2="220" y2="132" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.7"/>
          <line x1="440" y1="0"   x2="220" y2="132" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.7"/>
          <line x1="0"   y1="275" x2="220" y2="132" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.7"/>
          <line x1="440" y1="275" x2="220" y2="132" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.7"/>
        </svg>

        <div className={`${styles.flapTop} ${opened ? styles.flapTopOpen : ''}`}>
          <div className={styles.waxSeal}>
            <span className={styles.waxInitials}>M&amp;M</span>
          </div>
        </div>
      </div>

      {!opened && (
        <div className={styles.hintWrapper}>
          <div className={styles.tapIndicator} aria-hidden="true">
            <span className={styles.tapRing} />
            <span className={styles.tapRing2} />
            <svg className={styles.tapIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 11V6.5a1.5 1.5 0 0 1 3 0V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 11V5a1.5 1.5 0 0 1 3 0v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 11V8.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-1.5a1.5 1.5 0 0 1 3 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className={styles.hint}>Açmak için tıklayın</p>
        </div>
      )}
    </div>
  )
}
