<script>
  /**
   * LanguageToggle Component
   * Allows users to switch between English and Norwegian
   */
  let {
    currentLocale = 'en',
    onLocaleChange = () => {}
  } = $props();
</script>

<div class="language-toggle">
  <button
    class="lang-option"
    class:active={currentLocale === 'en'}
    onclick={() => onLocaleChange('en')}
    aria-label="Switch to English"
  >
    EN
  </button>
  <span class="separator">|</span>
  <button
    class="lang-option"
    class:active={currentLocale === 'no'}
    onclick={() => onLocaleChange('no')}
    aria-label="Bytt til norsk"
  >
    NO
  </button>
</div>

<style>
  .language-toggle {
    position: fixed;
    top: var(--spacing-md);
    right: var(--spacing-md);
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    z-index: 1000;
    font-size: var(--font-size-small);
    font-weight: 500;
  }

  .lang-option {
    padding: var(--spacing-xs) var(--spacing-sm);
    background: none;
    border: none;
    color: var(--color-text-tertiary);
    transition: color var(--timing-fast) var(--ease);
    letter-spacing: 0.05em;
  }

  .lang-option:hover {
    color: var(--color-text-secondary);
    opacity: 1;
  }

  .lang-option.active {
    color: var(--color-text-primary);
    opacity: 1;
  }

  .separator {
    color: var(--color-text-tertiary);
    user-select: none;
  }

  @media (max-width: 480px) {
    .language-toggle {
      top: var(--spacing-sm);
      right: var(--spacing-sm);
    }
  }
</style>
