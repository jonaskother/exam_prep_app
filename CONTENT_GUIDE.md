# Content Guide — Claude Certified Architect Study App

Alle Inhalte werden in `content.js` gepflegt. Schreib deinen Content zunächst als Markdown
(z.B. in deinen bestehenden `.md`-Dateien) und übertrage ihn dann in die entsprechenden
Template-Literal-Felder (`\`...\``) in `content.js`.

---

## Frage hinzufügen

```js
{
  id: "d1-q5",          // Eindeutige ID pro Kapitel
  scenario: `
    Szenario-Text hier. Unterstützt **fett**, \`code\` etc.
    Mehrere Zeilen sind möglich.
  `,
  question: "Was ist der beste Ansatz?",   // Optional — nur wenn Frage separat vom Szenario
  options: [
    "Option A Text",
    "Option B Text",
    "Option C Text",   // ← correct: 2 zeigt auf diesen Index
    "Option D Text"
  ],
  correct: 2,           // 0-basierter Index der richtigen Antwort (0=A, 1=B, 2=C, 3=D)
  explanation: `
    **Warum C:** Erklärung hier mit voller Markdown-Unterstützung.

    - Punkt 1
    - Punkt 2
  `
}
```

---

## Study Guide Abschnitt hinzufügen

```js
{
  id:    "sg-2",
  title: "2. Agentic Systems & Orchestration",
  content: `
## Was du wissen musst

Text mit **Fett**, *Kursiv*, \`inline code\`.

## Tabellen

| Setting   | Bedeutung                        | Anwendungsfall           |
|-----------|----------------------------------|--------------------------|
| \`auto\`  | Claude kann Tool nutzen oder nicht | Allgemeine Agenten      |
| \`any\`   | Claude muss ein Tool nutzen        | Extraction-Pipelines    |
| \`tool\`  | Bestimmtes Tool erzwingen          | Feste Pipeline-Stage    |
| \`none\`  | Kein Tool erlaubt                  | Reine Textantworten     |

## Code-Beispiele

\`\`\`python
response = client.messages.create(
    model="claude-opus-4-7",
    tool_choice={"type": "tool", "name": "extract_metadata"},
    tools=[...],
    messages=[...]
)
\`\`\`

> **Merksatz:** Tool-Enforcement ist zuverlässiger als Prompt-Anweisungen.

---

## Nächstes Thema

...
  `
}
```

---

## Markdown-Referenz

| Syntax               | Ergebnis          |
|----------------------|-------------------|
| `**text**`           | **Fett**          |
| `*text*`             | *Kursiv*          |
| `` `code` ``         | `Inline Code`     |
| ` ``` ` … ` ``` `    | Code-Block        |
| `## Heading`         | Abschnittsüberschrift |
| `\| col \| col \|`   | Tabelle           |
| `- item`             | Aufzählung        |
| `1. item`            | Nummerierte Liste |
| `> text`             | Blockzitat        |
| `---`                | Trennlinie        |

---

## Workflow-Empfehlung

1. **Schreib/kopiere** deinen Content in die bestehenden `.md`-Dateien (z.B. `exam-preparation-guide.md`)
2. **Übertrage** Abschnitte als Template Literals in das `content` Feld in `content.js`
3. **Backticks** im Text müssen escaped werden: `` \` ``
4. **Backslashes** im Text: `\\`
5. **Fragen** aus `curated_practice_questions_v2.md` in das `questions`-Array des jeweiligen Kapitels kopieren

### Tipp: Fragen aus deiner MD-Datei übertragen

Deine `curated_practice_questions_v2.md` hat folgendes Format:
```
## Frage 1: Titel
**Szenario:** ...
- [ ] Option A
- [ ] Option B
- [X] Option C  ← korrekt
- [ ] Option D
```
→ `correct: 2` (0-basiert: A=0, B=1, C=2, D=3)
