/**
 * Whether the visitor has already had the "tap the photo" overlay.
 * Lives at module level so it survives going back to the start page,
 * but resets on a page reload.
 */
export const tapHint = $state({ seen: false });
