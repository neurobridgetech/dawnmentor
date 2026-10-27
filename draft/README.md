# Dawn Mentor — first draft

Responsive React/Vite landing page based on the selected prism concept.

## Run

npm install
npm run dev -- --host 127.0.0.1 --port 4173

## Build

npm run build

## Content and links

- Edit src/App.jsx for teacher, resource and blog content.
- Both Chanakya AI buttons open https://edu.aichanakya.in/ in a new tab.
- Resources are deliberately marked Coming soon until real content is supplied.
- Blog links point to the existing Dawn Mentor site.
- No Dawn Mentor authentication or backend is implemented in this landing-page draft.
- Generated prism, assessment artwork and transparent logo mark are in public/assets/.
- logo-lockup.png is an exported preview of the complete mark + wordmark on white. The page uses live text with the mark for sharp rendering.
- DM Sans is loaded from Google Fonts; Arial is the offline fallback. Icons use Phosphor.

## Verification

Production build passes. Desktop and mobile screenshots and comparison evidence are in qa/. See design-qa.md. The live Dawn Mentor website has not been changed.
