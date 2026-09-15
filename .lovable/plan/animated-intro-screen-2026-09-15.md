# Animated intro screen

## What will change
- Add a short full-screen intro before the portfolio appears.
- Use the site’s black header styling as the visual base.
- Show the existing circular portrait, “Marziyeh Lak,” and “Senior AI & Full-Stack Engineer.”
- Add a polished, fast loading animation using the current yellow accent.
- Fade the intro away and reveal the existing site automatically.

## Experience
- The intro will play once per page load and remain brief, so it does not slow access to the site.
- Motion will be reduced or skipped for visitors who prefer reduced animation.
- The layout will remain centered and readable on mobile and desktop without overflow.

## Technical details
- Keep this entirely in the existing front-end with no external service or new dependency.
- Reuse the public portrait file so it continues to work on deployed sites.
- Prevent the underlying page from scrolling while the intro is visible, then restore normal scrolling.
- Verify the intro and transition at mobile and desktop sizes.
