# Exam Preparation

Eine lokale, statische Web-App zum Erstellen und Üben von Prüfungsvorbereitung: eigene
Fragenkataloge (**Practice Questions**) und Lernzusammenfassungen (**Study Guide**) als
Projekt hochladen und im Browser durchgehen. Kein Backend, kein Build-Schritt — eine
einzelne HTML-Datei, Daten liegen lokal im Browser (`localStorage`).



## Nutzung

1. `study_app.html` im Browser öffnen (Doppelklick reicht, oder z.B. `python -m http.server`
   im Projektordner und dann `localhost:8000` aufrufen).
2. Auf der Welcome-Seite ein gespeichertes Projekt wählen, das Beispielprojekt laden,
   oder eigene Inhalte als JSON-Datei hochladen (Vorlage: `upload-template.json`, per
   Klick auf "Upload-Template herunterladen" auch direkt aus der App verfügbar).
3. Details zum Content-Format: [`CONTENT_GUIDE.md`](./CONTENT_GUIDE.md).

Gespeicherte Projekte bleiben lokal im Browser (`localStorage`) über Sessions hinweg
erhalten — es gibt aktuell noch keinen Export/Backup-Mechanismus (siehe Backlog).


---
## Changelog
**v0.01 (03/2026) — erster Aufschlag / Idee.** Das ist noch kein stabiles Produkt, sondern
ein früher Prototyp, an dem sich das Datenmodell und die Bedienung noch ändern können.
Details zum aktuellen Stand und zur geplanten Weiterentwicklung stehen in
[`requirements.md`](./requirements.md).

**v.0.01 (15/08/2026) - erster Prototyp** Reworked the whole app to make it agnostic. You can now feed any project / practice exam (in the right format) and start learning

**v.0.01.01 (15/08/2026) - Frontend Anpassungen** Minor change, more appealing frontend

**v.0.01.02 (15/08/2026) - kleinere Fixes**


---
## Personal Note / Motivation
This project was created out of personal necessity and the desire to learn Claude Code. I'm trying my best to learn in my free time. Most work is done by Claude Code. I don't have any intentions or further plans, I'm just curious - watching and learning. 
