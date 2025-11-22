<script>
  /**
   * CardView Component
   * Displays a card with zoom/pan/rotate animation to reveal Easter eggs
   */
  let {
    year = 2024,
    imagePath = '',
    zoomTarget = { x: 50, y: 50, maxZoom: 3, rotation: 0 },
    isCurrentYear = false,
    isZoomed = false,
    showTapPrompt = false,
    tapPromptText = 'Tap to zoom',
    onZoom = () => {},
    devMode = false
  } = $props();

  let isAnimating = $state(false);
  let imageContainer = $state(null);
  let clicks = $state([]);

  function handleCardClick(event) {
    if (devMode) {
      handleDevModeClick(event);
      return;
    }

    if (isAnimating) return;
    isAnimating = true;
    onZoom();
    setTimeout(() => {
      isAnimating = false;
    }, 2000); // Match zoom animation duration
  }

  function handleDevModeClick(event) {
    if (!imageContainer) return;

    const rect = imageContainer.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    clicks.push({ x, y });

    // Log for single click (center point estimation)
    if (clicks.length === 1) {
      console.log(`Year ${year} - Click 1: x=${x.toFixed(1)}%, y=${y.toFixed(1)}%`);
    }

    // Log for two clicks (bounding box)
    if (clicks.length === 2) {
      const x1 = Math.min(clicks[0].x, clicks[1].x);
      const x2 = Math.max(clicks[0].x, clicks[1].x);
      const y1 = Math.min(clicks[0].y, clicks[1].y);
      const y2 = Math.max(clicks[0].y, clicks[1].y);

      const centerX = (x1 + x2) / 2;
      const centerY = (y1 + y2) / 2;
      const width = x2 - x1;
      const height = y2 - y1;

      console.log(`Year ${year} - Click 2: x=${x.toFixed(1)}%, y=${y.toFixed(1)}%`);
      console.log(`Year ${year} - Box: center=(${centerX.toFixed(1)}%, ${centerY.toFixed(1)}%), size=${width.toFixed(1)}% x ${height.toFixed(1)}%`);
      console.log(`Year ${year} - RESULT: { x: ${centerX.toFixed(1)}, y: ${centerY.toFixed(1)}, maxZoom: 3, rotation: 0 }`);
      console.log('---');

      // Reset for next card
      clicks = [];
    }
  }

  // Calculate the transform for the zoom
  let imageStyle = $derived(() => {
    // In dev mode, always show the rotation so coordinates match the visual
    if (devMode) {
      return `transform: scale(1) rotate(${zoomTarget.rotation}deg); transform-origin: center center;`;
    }

    if (!isZoomed) {
      return 'transform: scale(1) rotate(0deg); transform-origin: center center;';
    }

    const { x, y, maxZoom, rotation } = zoomTarget;
    // Convert percentage position to transform offset
    // When zoomed, we want to center the target point
    const offsetX = -(x - 50) * maxZoom;
    const offsetY = -(y - 50) * maxZoom;

    return `
      transform:
        translate(${offsetX}%, ${offsetY}%)
        scale(${maxZoom})
        rotate(${rotation}deg);
      transform-origin: center center;
    `;
  });
</script>

<div class="card-container">
  <!-- Year display above card -->
  <div class="year-display">{year}</div>

  <button
    class="card-wrapper"
    class:zoomed={isZoomed}
    onclick={handleCardClick}
    aria-label={isZoomed ? 'Tap to zoom out' : 'Tap to zoom in'}
  >
    <div class="card-image-container" bind:this={imageContainer}>
      <img
        src={imagePath}
        alt="Christmas card {year}"
        class="card-image"
        style={imageStyle()}
      />
      {#if showTapPrompt && !isZoomed && !devMode}
        <div class="tap-prompt">
          {tapPromptText}
        </div>
      {/if}
      {#if devMode}
        <div class="dev-mode-indicator">
          DEV MODE - Click {clicks.length === 0 ? 'top-left corner' : 'bottom-right corner'} of target area
        </div>
      {/if}
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
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: block;
    overflow: hidden;
    border-radius: var(--card-radius);
  }

  .card-image-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: var(--card-radius);
    background: #000000;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6),
                0 0 0 1px rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-image {
    width: 100%;
    height: auto;
    display: block;
    transform-origin: center center;
    transition: transform 2s cubic-bezier(0.4, 0.0, 0.2, 1);
    will-change: transform;
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
    z-index: 10;
  }

  .dev-mode-indicator {
    position: absolute;
    top: var(--spacing-md);
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 165, 0, 0.9);
    color: #000;
    padding: var(--spacing-xs) var(--spacing-md);
    border-radius: 20px;
    font-size: var(--font-size-small);
    font-weight: 600;
    pointer-events: none;
    z-index: 10;
  }

  @keyframes fadeInOut {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .card-image {
      transition: opacity var(--timing-fast) var(--ease);
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
