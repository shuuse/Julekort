<script>
  /**
   * EndView Component
   * Final screen after viewing all cards
   */
  let {
    title = '',
    message = '',
    returnButtonText = '',
    onReturnToStart = () => {}
  } = $props();
</script>

<div class="end-view">
  <img
    src="/christmas_garland.png"
    alt=""
    class="garland-decoration"
    aria-hidden="true"
  />
  <div class="end-content">
    <div class="end-icon">✨</div>
    <h1 class="end-title">{title}</h1>
    <p class="end-message">{message}</p>
    <button
      class="btn-primary return-button"
      onclick={onReturnToStart}
    >
      {returnButtonText}
    </button>
  </div>
</div>

<style>
  .end-view {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-lg);
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

  .end-content {
    text-align: center;
    max-width: 600px;
    animation: fadeIn var(--timing-slow) var(--ease);
  }

  .end-icon {
    font-size: 4rem;
    margin-bottom: var(--spacing-lg);
    animation: sparkle 2s ease-in-out infinite;
  }

  @keyframes sparkle {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.1);
    }
  }

  .end-title {
    font-size: var(--font-size-title);
    font-weight: 600;
    margin-bottom: var(--spacing-md);
    letter-spacing: -0.02em;
  }

  .end-message {
    font-size: var(--font-size-body);
    color: var(--color-text-secondary);
    line-height: 1.6;
    margin-bottom: var(--spacing-xl);
  }

  .return-button {
    margin-top: var(--spacing-lg);
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
    .end-icon {
      font-size: 3rem;
    }

    .end-title {
      font-size: 1.5rem;
    }

    .end-message {
      font-size: 1rem;
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .end-content {
      animation: none;
    }

    .end-icon {
      animation: none;
    }
  }
</style>
