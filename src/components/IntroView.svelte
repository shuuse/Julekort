<script>
  /**
   * IntroView Component
   * Entry screen showing title, subtitle, and start button
   */
  let {
    title = '',
    subtitle = '',
    instruction = '',
    onStartJourney = () => {}
  } = $props();
</script>

<div class="intro-view">
  <img
    src="christmas_garland.png"
    alt=""
    class="garland-decoration"
    aria-hidden="true"
  />
  <div class="intro-content">
    <div class="intro-header">
      <h1 class="intro-title">{title}</h1>
      <p class="intro-subtitle">{subtitle}</p>
    </div>

    <button class="btn-primary start-button" onclick={onStartJourney}>
      {instruction}
    </button>
  </div>
</div>

<style>
  .intro-view {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-lg) var(--spacing-md);
    position: relative;
  }

  .garland-decoration {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 800px;
    height: auto;
    opacity: 0.9;
    pointer-events: none;
    animation: fadeIn var(--timing-slow) var(--ease);
  }

  .intro-content {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }

  .intro-header {
    margin-bottom: var(--spacing-xl);
    animation: fadeIn var(--timing-slow) var(--ease);
  }

  .intro-title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: var(--spacing-lg);
    letter-spacing: -0.02em;
  }

  .intro-subtitle {
    font-size: var(--font-size-body);
    color: var(--color-text-secondary);
    line-height: 1.6;
    margin: 0 auto var(--spacing-xl);
  }

  .start-button {
    animation: fadeIn var(--timing-slow) var(--ease) 0.3s backwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .intro-view {
      padding: var(--spacing-md) var(--spacing-sm);
    }

    .intro-title {
      font-size: 1.5rem;
    }

    .intro-subtitle {
      font-size: 1rem;
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .intro-header,
    .start-button {
      animation: none;
      opacity: 1;
      transform: none;
    }
  }
</style>
