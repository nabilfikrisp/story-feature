# Story Feature Plan

## Data Model

The app maintains an array of `Story` objects.
Each story contains:

- `id`: unique identifier
- `imageBase64`: resized image stored as base64
- `createdAt`: timestamp (`Date.now()`)
- `username` (optional): client-generated identity

## User Identity (No Auth)

- Authentication is out of scope.
- A random username is generated on first load.
- The username is stored in `sessionStorage` (tab-scoped).
- Same tab → same username, different tabs → different usernames.

## Storage & Expiration

- Stories are stored in `localStorage`.
- A story expires 24 hours after `createdAt`.
- Expired stories are removed by time comparison, not timers.
- Expiration is enforced on load, add, and render.

## Story Interaction

- Stories are displayed in a horizontal list.
- Clicking a story opens a fullscreen viewer.
- Each story is shown for **3 seconds**.
- A progress bar indicates the current story.
- Only one story is active at a time.
- Users can optionally swipe to navigate between stories.

## Image Handling

### Storage Constraints

- Images are resized **before** base64 conversion.
- Maximum source resolution: **1080 × 1920**.
- Aspect ratio is preserved.

### Display Constraints

- Story viewer has a fixed max width (e.g. 800px, responsive).
- The image is displayed using **contain** (no cropping).
- Empty space is filled with a solid color or a blurred version of the image.
