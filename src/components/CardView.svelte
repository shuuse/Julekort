<script>
  /**
   * CardView Component
   * Displays a card with front/back flip functionality
   */
  let {
    year = 2024,
    imagePath = '',
    hintRegion = { x: 50, y: 50, zoom: 150, rotation: 0 },
    isCurrentYear = false,
    isFlipped = false,
    showTapPrompt = false,
    tapPromptText = 'Tap to flip',
    onFlip = () => {}
  } = $props();

  let isAnimating = $state(false);

  function handleCardClick() {
    if (isAnimating) return;
    isAnimating = true;
    onFlip();
    setTimeout(() => {
      isAnimating = false;
    }, 500); // Match flip animation duration
  }

  // Calculate the transform for the cutout
  let cutoutStyle = $derived(() => {
    const { x, y, zoom, rotation } = hintRegion;
    // Convert percentage position to CSS transform
    const translateX = -(x - 50);
    const translateY = -(y - 50);
    const scale = zoom / 100;

    return `
      transform:
        translate(${translateX}%, ${translateY}%)
        scale(${scale})
        rotate(${rotation}deg);
      transform-origin: center;
    `;
  });
</script>

<div class="card-container">
  <!-- Year display above card -->
  <div class="year-display">{year}</div>

  <button
    class="card-wrapper"
    class:flipped={isFlipped}
    onclick={handleCardClick}
    aria-label={isFlipped ? 'Flip to front' : 'Flip to back'}
  >
    <div class="card">
      <!-- Front Face -->
      <div class="card-face card-front">
        <img
          src={imagePath}
          alt="Christmas card {year}"
          class="card-image"
        />
        {#if showTapPrompt && !isFlipped}
          <div class="tap-prompt">
            {tapPromptText}
          </div>
        {/if}
      </div>

      <!-- Back Face - Image Cutout -->
      <div class="card-face card-back">
        <div class="cutout-container">
          <img
            src={imagePath}
            alt="Zoomed detail from {year}"
            class="cutout-image"
            style={cutoutStyle()}
          />
        </div>
      </div>
    </div>
  </button>
</div>

<style>
  .card-container {
    width: 100%;
    max-width: var(--max-card-width);
    margin: 0 auto;
    padding: var(--spacing-md);
  }

  .year-display {
    text-align: center;
    font-size: var(--font-size-title);
    font-weight: 600;
    letter-spacing: -0.02em;
    margin-bottom: var(--spacing-md);
    color: var(--color-text-primary);
    opacity: 0.9;
  }

  .card-wrapper {
    width: 100%;
    perspective: 1000px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: block;
  }

  .card {
    position: relative;
    width: 100%;
    transform-style: preserve-3d;
    transition: transform var(--timing-flip) var(--ease);
  }

  .card-wrapper.flipped .card {
    transform: rotateY(180deg);
  }

  .card-face {
    width: 100%;
    backface-visibility: hidden;
    border-radius: var(--card-radius);
    overflow: hidden;
  }

  .card-front {
    position: relative;
  }

  .card-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotateY(180deg);
    background: #000000;
    overflow: hidden;
    border-radius: var(--card-radius);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6),
                0 0 0 1px rgba(255, 255, 255, 0.1);
  }

  .cutout-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    border-radius: var(--card-radius);
  }

  .cutout-image {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: auto;
    display: block;
    will-change: transform;
  }

  .card-image {
    width: 100%;
    height: auto;
    display: block;
    border-radius: var(--card-radius);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6),
                0 0 0 1px rgba(255, 255, 255, 0.1);
  }

  .tap-prompt {
    position: absolute;
    bottom: var(--spacing-md);
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: var(--color-text-primary);
    padding: var(--spacing-xs) var(--spacing-md);
    border-radius: 20px;
    font-size: var(--font-size-small);
    opacity: 0;
    animation: fadeInOut 2s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes fadeInOut {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .card {
      transition: opacity var(--timing-fast) var(--ease);
    }

    .card-wrapper.flipped .card {
      transform: none;
      opacity: 0.9;
    }

    .tap-prompt {
      animation: none;
      opacity: 0.7;
    }
  }

  @media (max-width: 480px) {
    .card-container {
      padding: var(--spacing-sm);
    }

    .year-display {
      font-size: 1.5rem;
    }
  }
</style>
