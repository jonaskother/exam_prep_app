# Content Guide — Exam Preparation

Inhalte werden nicht mehr manuell im Code gepflegt, sondern als **JSON-Datei** über die
Welcome-Seite der App hochgeladen. Ein Projekt besteht aus drei Teilen: `meta`, `chapters`
(Practice Questions) und `studyGuide` (Study Guide).

Lade `upload-template.json` über den Button **"Upload-Template herunterladen"** auf der
Welcome-Seite herunter (oder nutze die Datei direkt aus dem Repo) und fülle es mit deinem
Content. Wenn du bestehenden Content als Markdown geschrieben hast, übertrage ihn in die
`scenario`/`question`/`explanation`/`content`-Felder unten.

---

## Struktur einer Datei

```json
{
  "meta": {
    "title": "Mein Projekt",
    "subtitle": "Kurzer Untertitel",
    "passingScore": 720,
    "totalQuestions": 77,
    "scoreRange": "100–1.000"
  },
  "chapters": [ /* siehe unten */ ],
  "studyGuide": [ /* siehe unten */ ]
}
```

`meta`, `chapters` und `studyGuide` sind alle optional — ein Projekt kann z.B. nur
Practice Questions oder nur einen Study Guide enthalten. Mindestens eines der beiden
Arrays muss aber Inhalte haben, sonst wird der Upload abgelehnt.

---

## Frage hinzufügen (`chapters`)

```json
{
  "id": "domain-1",
  "title": "Domain 1 – Titel",
  "weight": "27%",
  "questions": [
    {
      "id": "d1-q1",
      "scenario": "Szenario-Text hier. Unterstützt **fett**, `code` etc.\nMehrere Zeilen über \\n möglich.",
      "question": "Was ist der beste Ansatz?",
      "options": ["Option A Text", "Option B Text", "Option C Text", "Option D Text"],
      "correct": 2,
      "explanation": "**Warum C:** Erklärung hier mit voller Markdown-Unterstützung.\n\n- Punkt 1\n- Punkt 2"
    }
  ]
}
```

- `id` pro Kapitel und pro Frage muss eindeutig sein.
- `question` ist optional, falls die Frage bereits im `scenario` steht.
- `correct` ist der 0-basierte Index der richtigen Antwort (0=A, 1=B, 2=C, 3=D).
- Mehrzeiliger Text in JSON: Zeilenumbrüche als `\n` schreiben.

---

## Study-Guide-Abschnitt hinzufügen (`studyGuide`)

```json
{
  "id": "sg-2",
  "title": "2. Agentic Systems & Orchestration",
  "content": "## Was du wissen musst\n\nText mit **Fett**, *Kursiv*, `inline code`.\n\n## Tabellen\n\n| Setting | Bedeutung | Anwendungsfall |\n|---------|-----------|----------------|\n| `auto`  | Claude kann Tool nutzen oder nicht | Allgemeine Agenten |\n\n> **Merksatz:** Tool-Enforcement ist zuverlässiger als Prompt-Anweisungen."
}
```

---

## Markdown-Referenz

Gilt für `scenario`, `question`, `explanation` und `content`-Felder:

| Syntax               | Ergebnis          |
|-----------------------|-------------------|
| `**text**`           | **Fett**          |
| `*text*`              | *Kursiv*          |
| `` `code` ``          | `Inline Code`     |
| ` ``` ` … ` ``` `     | Code-Block        |
| `## Heading`          | Abschnittsüberschrift |
| `\| col \| col \|`    | Tabelle           |
| `- item`              | Aufzählung        |
| `1. item`             | Nummerierte Liste |
| `> text`              | Blockzitat        |
| `---`                 | Trennlinie        |

---

## Workflow-Empfehlung

1. **Kopiere** `upload-template.json` (oder lade es über den Button in der App herunter).
2. **Fülle** `meta`, `chapters` und/oder `studyGuide` mit deinem Content.
3. **Zeilenumbrüche** in mehrzeiligem Text als `\n` schreiben, Anführungszeichen als `\"` escapen.
4. **Lade** die fertige JSON-Datei über die Welcome-Seite hoch ("Datei auswählen…").
5. Alternativ: über **"Beispielprojekt laden"** direkt ein befülltes Beispielprojekt
   (`sample-project.json`, gleiches Schema) importieren und daran orientieren.
