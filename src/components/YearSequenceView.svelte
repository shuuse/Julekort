<script>
  /**
   * YearSequenceView Component
   * Manages the timeline of cards with navigation
   */
  import CardView from './CardView.svelte';
  import TimelineIndicator from './TimelineIndicator.svelte';

  let {
    cards = [],
    currentIndex = 0,
    locale = 'en',
    tapPromptText = '',
    currentYearBackText = '',
    homeText = '',
    devMode = false,
    onContinue = () => {},
    onHome = () => {}
  } = $props();

  let isZoomed = $state(false);
  let showTapPrompt = $state(true);
  let internalIndex = $state(currentIndex);

  let currentCard = $derived(cards[internalIndex] || {});
  let canGoBack = $derived(internalIndex > 0);
  let canGoForward = $derived(internalIndex < cards.length - 1);
  let isLastCard = $derived(internalIndex === cards.length - 1);

  function handleCardZoom() {
    isZoomed = !isZoomed;
    showTapPrompt = false;
  }

  function handleContinue() {
    if (isLastCard) {
      onContinue();
    } else {
      // Move to next card
      internalIndex++;
      isZoomed = false;
      showTapPrompt = true;
    }
  }

  function handleBack() {
    if (canGoBack) {
      internalIndex--;
      isZoomed = false;
      showTapPrompt = true;
    }
  }

  function handleForward() {
    console.log('handleForward called, canGoForward:', canGoForward, 'isLastCard:', isLastCard, 'internalIndex:', internalIndex);
    if (canGoForward) {
      internalIndex++;
      isZoomed = false;
      showTapPrompt = true;
      console.log('Moving forward to index:', internalIndex);
    } else if (isLastCard) {
      // On last card, go to end view
      console.log('Last card, calling onContinue');
      onContinue();
    }
  }

</script>

<div class="year-sequence-view">
  <div class="sequence-content">
    <!-- Timeline indicator -->
    <TimelineIndicator
      totalYears={cards.length}
      currentIndex={internalIndex}
    />

    <!-- Current card -->
    <div class="current-card">
      <CardView
        year={currentCard.year}
        imagePath={currentCard.imagePath}
        zoomTarget={currentCard.zoomTarget || { x: 50, y: 50, maxZoom: 3, rotation: 0 }}
        isCurrentYear={currentCard.isCurrentYear}
        {isZoomed}
        {showTapPrompt}
        {tapPromptText}
        {devMode}
        onZoom={handleCardZoom}
      />
    </div>

    <!-- Navigation controls -->
    <nav class="navigation-controls" aria-label="Card navigation">
      <button
        class="nav-button home-button"
        onclick={onHome}
        aria-label={homeText}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        <span class="nav-label">{homeText}</span>
      </button>

      <button
        class="nav-button forward-button"
        onclick={handleForward}
        aria-label={isLastCard ? 'Finish' : 'See the year before'}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
        <span class="nav-label">{isLastCard ? (locale === 'no' ? 'Ferdig' : 'Finish') : (locale === 'no' ? 'Se året før' : 'See the year before')}</span>
      </button>
    </nav>
  </div>
</div>

<style>
  .year-sequence-view {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-lg) var(--spacing-md);
    padding-bottom: 100px; /* Space for navigation */
  }

  .sequence-content {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }

  .current-card {
    margin: var(--spacing-lg) 0;
    animation: fadeIn var(--timing-medium) var(--ease);
  }

  .navigation-controls {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: var(--spacing-md);
    background: linear-gradient(to top, rgba(0, 0, 0, 0.95), transparent);
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .nav-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-xs);
    padding: var(--spacing-sm);
    color: var(--color-text-primary);
    background: none;
    border: none;
    min-height: 44px;
    min-width: 60px;
  }

  .nav-button:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .nav-button svg {
    width: 24px;
    height: 24px;
  }

  .nav-label {
    font-size: var(--font-size-small);
    color: var(--color-text-secondary);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .year-sequence-view {
      padding: var(--spacing-md) var(--spacing-sm);
      padding-bottom: 100px;
    }

    .nav-label {
      font-size: 0.75rem;
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .current-card {
      animation: none;
    }
  }
</style>
