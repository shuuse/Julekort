<script>
  /**
   * IntroView Component
   * Entry screen showing title, subtitle, start button and a tile per card
   */
  let {
    title = '',
    subtitle = '',
    instruction = '',
    cards = [],
    locale = 'en',
    onStartJourney = () => {},
    onSelectCard = () => {}
  } = $props();

  // Oldest first. Keep each card's index in `cards` so a tile can open its card.
  let tiles = $derived(cards.map((card, index) => ({ card, index })).reverse());
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
      <svg
        class="start-arrow"
        viewBox="0 0 20 20"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M4 10h12M11 5l5 5-5 5" />
      </svg>
    </button>

    <div class="card-tiles">
      {#each tiles as { card, index } (card.year)}
        <button
          class="card-tile"
          aria-label={card.title[locale] || card.title.en}
          onclick={() => onSelectCard(index)}
        >
          <img src="cards/thumbs/{card.year}.jpg" alt="" />
          <span class="tile-year">{card.year}</span>
        </button>
      {/each}
    </div>
  </div>
</div>

<style>
  .intro-view {
    /* Keep content below the garland (800x355 image, scaled to the viewport width) */
    --garland-clearance: calc(min(100vw, 800px) * 0.444 + var(--spacing-sm));

    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-lg) var(--spacing-md);
    padding-top: var(--garland-clearance);
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

  /* Larger, glowing and with an arrow, so it reads as something to press */
  .start-button {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.875rem 2.25rem;
    font-size: 1.125rem;
    border-radius: 999px;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
    animation:
      fadeIn var(--timing-slow) var(--ease) 0.3s backwards,
      pulseRing 2.4s ease-out 1.2s infinite;
  }

  .start-button:hover:not(:disabled) {
    box-shadow: 0 6px 28px rgba(255, 255, 255, 0.35);
  }

  .start-arrow {
    transition: transform var(--timing-fast) var(--ease);
  }

  .start-button:hover .start-arrow {
    transform: translateX(4px);
  }

  @keyframes pulseRing {
    0% {
      box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2), 0 0 0 0 rgba(255, 255, 255, 0.4);
    }
    70%, 100% {
      box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2), 0 0 0 14px rgba(255, 255, 255, 0);
    }
  }

  /* Max 5 tiles per row; the last row is centered */
  .card-tiles {
    --tile-gap: 0.75rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--tile-gap);
    max-width: 480px;
    margin: var(--spacing-xl) auto 0;
    animation: fadeIn var(--timing-slow) var(--ease) 0.5s backwards;
  }

  .card-tile {
    position: relative;
    width: calc((100% - 4 * var(--tile-gap)) / 5);
    aspect-ratio: 1;
    padding: 0;
    overflow: hidden;
    border-radius: 8px;
    background-color: var(--color-accent);
    transition: transform var(--timing-fast) var(--ease);
  }

  .card-tile:hover {
    transform: translateY(-2px);
  }

  .card-tile img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .tile-year {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1rem 0 0.25rem;
    font-size: 0.75rem;
    font-weight: 600;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    pointer-events: none;
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
      padding-top: var(--garland-clearance);
    }

    .card-tiles {
      --tile-gap: 0.5rem;
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
    .start-button,
    .card-tiles {
      animation: none;
      opacity: 1;
      transform: none;
    }

    .card-tile,
    .start-arrow {
      transition: none;
    }
  }
</style>
