<script>
  /**
   * Main App Component
   * Manages application state and renders appropriate views
   */
  import { onMount } from 'svelte';
  import LanguageToggle from './components/LanguageToggle.svelte';
  import IntroView from './components/IntroView.svelte';
  import YearSequenceView from './components/YearSequenceView.svelte';
  import EndView from './components/EndView.svelte';
  import { cards } from './lib/cardsData.js';
  import { detectLanguage, t } from './lib/localization.js';

  // Application states
  const STATES = {
    INTRO: 'intro',
    SEQUENCE: 'sequence',
    END: 'end'
  };

  // Reactive state
  let currentState = $state(STATES.INTRO);
  let locale = $state('en');
  let currentCardIndex = $state(0);
  let devMode = $state(false);

  // Detect language on mount
  onMount(() => {
    locale = detectLanguage();

    // Check for dev mode URL parameter (?dev=true)
    const params = new URLSearchParams(window.location.search);
    devMode = params.get('dev') === 'true';

    if (devMode) {
      console.log('=== DEV MODE ENABLED ===');
      console.log('Click two corners of the target area on each card to log coordinates');
      console.log('======================');
    }
  });

  // Get current year card
  const currentYearCard = cards.find(card => card.isCurrentYear) || cards[0];

  // Event handlers
  function handleLocaleChange(newLocale) {
    locale = newLocale;
  }

  function handleStartJourney() {
    currentState = STATES.SEQUENCE;
    currentCardIndex = 0;
  }

  function handleContinueFromSequence() {
    currentState = STATES.END;
  }

  function handleBackInSequence() {
    if (currentCardIndex > 0) {
      currentCardIndex--;
    }
  }

  function handleReturnHome() {
    currentState = STATES.INTRO;
    currentCardIndex = 0;
  }
</script>

<div class="app">
  <!-- Language Toggle (always visible) -->
  <LanguageToggle
    currentLocale={locale}
    onLocaleChange={handleLocaleChange}
  />

  <!-- Render current view based on state -->
  {#if currentState === STATES.INTRO}
    <IntroView
      title={t('title', locale)}
      subtitle={t('subtitle', locale)}
      instruction={t('instruction', locale)}
      onStartJourney={handleStartJourney}
    />
  {:else if currentState === STATES.SEQUENCE}
    <YearSequenceView
      {cards}
      currentIndex={currentCardIndex}
      {locale}
      {devMode}
      tapPromptText={t('tapToZoom', locale)}
      currentYearBackText={t('currentYearBack', locale)}
      homeText={t('home', locale)}
      seeYearBeforeText={t('seeYearBefore', locale)}
      seeYearAfterText={t('seeYearAfter', locale)}
      onContinue={handleContinueFromSequence}
      onHome={handleReturnHome}
    />
  {:else if currentState === STATES.END}
    <EndView
      title={t('endTitle', locale)}
      message={t('endMessage', locale)}
      returnButtonText={t('returnToStart', locale)}
      onReturnToStart={handleReturnHome}
    />
  {/if}
</div>

<style>
  .app {
    min-height: 100vh;
    width: 100%;
    background-color: var(--color-bg);
    color: var(--color-text-primary);
  }
</style>
