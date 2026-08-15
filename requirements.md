# Requirements & Roadmap — Exam Preparation

Stand: v0.01 → v0.02 (erster Aufschlag, aktiv in Bewegung). Diese Datei hält fest, was
heute funktioniert, was als nächstes geplant ist (Longlist) und welche Ideen mittelfristig
interessant, aber noch nicht priorisiert sind (Backlog).

## Implemented

- **Practice Questions** (vormals "Practice Mode"): Kapitel auswählen, Anzahl Fragen wählen,
  Quiz durchlaufen (Multiple Choice, 4 Optionen), pro Frage Erklärung nach Beantwortung,
  Ergebnis-Screen mit Score, Pass/Fail-Schwelle und Fragen-Review.
- **Study Guide** (vormals "Exam Guide"): Inhaltsverzeichnis mit Scrollspy, Markdown-Rendering
  (Fett/Kursiv/Code/Code-Blöcke/Tabellen/Listen/Blockzitate/Trennlinien).
- **Welcome Page & Projektauswahl**: Startbildschirm zeigt gespeicherte Projekte, erlaubt das
  Öffnen eines bestehenden Projekts oder das Anlegen eines neuen; zuletzt geöffnetes Projekt
  wird beim nächsten Besuch automatisch geladen (`localStorage`, session-übergreifend).
- **Upload eigener Inhalte**: JSON-Upload für Fragen und/oder Study Guide über die
  Welcome-Seite, inkl. Basis-Validierung (gültiges JSON, erwartete Felder vorhanden) mit
  verständlicher Fehlermeldung bei ungültigen Dateien.
- **Upload-Template**: Download einer leeren Beispiel-JSON-Datei über die Welcome-Seite.
- **Beispielprojekt**: Bestehender Beispielinhalt ("Claude Certified Architect") als
  importierbares Beispielprojekt verfügbar, wird nicht automatisch geladen.
- **Naming**: App heißt einheitlich "Exam Preparation", keine personenbezogenen Strings
  mehr in Titel, Header, Dateinamen oder Doku.
- Kein Backend, keine Build-Pipeline — eine einzelne `index.html`, läuft direkt im Browser
  oder über einen simplen Static-Host.

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
