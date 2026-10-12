// Small knobs you can change without touching any component.

// Path to the selfie shown on the "Sorry, di." page (lives in /public).
export const SELFIE_FILE = 'kutty-apology-selfie.png'

// Optional: a personal photo that is ALWAYS shown on the memories page.
// 1. Put the picture in /public (for example public/our-photo.jpg)
// 2. Set the file name below, e.g. 'our-photo.jpg'
// Leave it empty to just show the "add a photo" slot.
export const MEMORY_PHOTO_FILE = ''

// The shorter apology that the copy button on the last page copies.
export const SHORT_APOLOGY =
  'Kutty, andha naal naan pesina vidhathukku manasara sorry di. Nee enakku romba special, aana unna pressure panna virumbala. Unakku time eduthuko. Nee comfortable-ah irukkumbodhu pesalaam; naan un feelings-ah kekka ready-ah iruppen. ❤️'

// Resolves a file in /public in a way that works on any host or sub-path.
export const asset = (file) => `${import.meta.env.BASE_URL}${file}`
