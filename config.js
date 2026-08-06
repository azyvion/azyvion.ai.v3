// Where the Azyvion AI backend (server.js) is deployed.
//
// - Running locally with `npm start`, or hosting server.js somewhere that
//   also serves this /docs folder: leave this as "" (same origin).
// - Hosting this frontend on GitHub Pages with the backend deployed
//   separately (Render, Railway, Fly.io, etc.): set this to that backend's
//   full URL, e.g. "https://azyvion-ai.onrender.com" (no trailing slash).
//
// Optional: enables login + chats saved per account (Supabase, free tier).
// Leave both as "" to keep the app in guest mode (chats saved only in
// this browser, like before) — nothing breaks either way.
window.AZYVION_CONFIG = {
  API_BASE_URL: "https://azyvion-ai.onrender.com",
  SUPABASE_URL: "https://hmzombpabaxnodarjbbl.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_4XtMB0fKsuoS8pvFDij6LQ_bHvEw6sl",
};
