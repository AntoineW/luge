# Changelog

## 1.0.0 — 2026-11-09

- Refresh the documentation and demos for the current API.
- Preserve both UMD paths and add the `@waaark/luge/css` import.
- Fix lifecycle completion after callback removal.
- Fix reveal scheduling, dynamic insertion, bottom-of-page visibility and delayed callbacks after page cleanup.
- Correct initial lazy Lottie measurements and release page loading when a required animation fails. Failed players emit `lottieerror` and receive `is-error`.
- Prevent queued loop callbacks from accessing retired Lottie players.
- Preserve native modified clicks and downloads, Back/Forward history, and navigation failure fallback.
- Serialize overlapping transitions, retaining the latest queued destination.
- Make the plain `slide` loader/preloader animation an alias of `slide-to-top`.
- Update build tooling while preserving animation formulas, settings and runtime dependency versions.
