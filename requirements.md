# Requirements & Roadmap — Exam Preparation

## Shortlist

- **Multiple Choice**

## Longlist

Konkret als Nächstes vorgesehen, aber noch nicht (vollständig) umgesetzt:

- **Robustere Upload-Validierung**: Detailprüfung pro Frage/Abschnitt (z.B. fehlende
  `options`, `correct` außerhalb des gültigen Index-Bereichs, doppelte IDs) mit
  feldgenauen Fehlermeldungen statt der aktuellen Basis-Prüfung.
- **Projektverwaltung in der Welcome-Ansicht**: Projekte umbenennen, duplizieren, löschen.
- **Export/Backup eines Projekts**: Aktives Projekt als JSON herunterladen — Schutz vor
  Datenverlust, da Inhalte aktuell ausschließlich in `localStorage` liegen (z.B. verloren
  bei Browser-Reset, Inkognito-Modus oder Gerätewechsel).

## Backlog

Ideen, gesammelt beim Brainstorming, noch nicht priorisiert oder terminiert:

- **Fortschritt/Statistiken je Projekt**: Score-Historie über mehrere Practice-Sessions,
  falsch beantwortete Fragen merken, Review-/Spaced-Repetition-Modus für Problemfragen.
- **Cross-Device-Sync**: Projekte über Geräte hinweg verfügbar machen (würde ein Backend
  oder einen Sync-Dienst erfordern — Bruch mit dem bisherigen reinen Static-/No-Backend-Ansatz).
- **Suche** über Fragen und Study-Guide-Inhalte.
- **Versionierung des Content-Schemas**, damit künftige Formatänderungen bestehende
  gespeicherte Projekte nicht brechen.
- **Warnung bei großen Uploads**: `localStorage` hat ein Limit von ca. 5–10 MB pro Origin;
  bei sehr umfangreichen Projekten sollte die App frühzeitig warnen statt still zu scheitern.
- **Barrierefreiheit**: Tastaturnavigation, ARIA-Labels, Fokus-Management in Quiz und
  Study Guide.
- **Mehrsprachigkeit** der Inhalte (mehrere Sprachvarianten pro Projekt).
- **Print/PDF-Export** des Study Guide.
- **Favicon & weitere Branding-Assets**.
- **Mobile-Optimierung**: aktuelles Layout ist primär für Desktop-Breiten ausgelegt.
