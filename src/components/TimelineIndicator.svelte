<script>
  /**
   * TimelineIndicator Component
   * Shows progress through the years with dots
   */
  let {
    totalYears = 0,
    currentIndex = 0
  } = $props();
</script>

<div class="timeline-indicator" role="status" aria-label="Timeline progress">
  <div class="dots">
    {#each Array(totalYears) as _, index}
      <div
        class="dot"
        class:active={index === currentIndex}
        class:visited={index < currentIndex}
        aria-hidden="true"
      ></div>
    {/each}
  </div>
  <div class="sr-only">
    Year {currentIndex + 1} of {totalYears}
  </div>
</div>

<style>
  .timeline-indicator {
    display: flex;
    justify-content: center;
    padding: var(--spacing-md) 0;
  }

  .dots {
    display: flex;
    gap: var(--spacing-xs);
    align-items: center;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--color-text-tertiary);
    opacity: 0.3;
    transition: all var(--timing-medium) var(--ease);
  }

  .dot.visited {
    background-color: var(--color-text-secondary);
    opacity: 0.5;
  }

  .dot.active {
    width: 10px;
    height: 10px;
    background-color: var(--color-text-primary);
    opacity: 1;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
  }

  /* Screen reader only */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  @media (max-width: 480px) {
    .dot {
      width: 6px;
      height: 6px;
    }

    .dot.active {
      width: 8px;
      height: 8px;
    }
  }
</style>
