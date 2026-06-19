// ============================================================
// content.js — Claude Certified Architect Study App
//
// Fülle hier deinen gesamten Lerninhalt ein.
// Unterstützte Markdown-Syntax in explanation/content-Feldern:
//   **fett**  *kursiv*  `inline code`  ```code-block```
//   ## Überschrift  | Tabelle |  - Liste  > Blockzitat  ---
// ============================================================


// ── Metadaten ────────────────────────────────────────────────
const META = {
  title:          "Claude Certified Architect",
  subtitle:       "Foundations",
  passingScore:   720,
  totalQuestions: 77,
  scoreRange:     "100–1.000"
};


// ── Kapitel & Fragen ─────────────────────────────────────────
//
// Struktur einer Frage:
// {
//   id:          "d1-q1",        // eindeutige ID
//   scenario:    `...`,          // Szenario-Text (Markdown OK)
//   question:    "...",          // Optional: separate Frage nach dem Szenario
//   options: [                   // genau 4 Antwortoptionen
//     "Option A",
//     "Option B",
//     "Option C",
//     "Option D"
//   ],
//   correct: 2,                  // 0-basierter Index der richtigen Antwort
//   explanation: `...`           // Erklärung (Markdown OK)
// }
//
// ─────────────────────────────────────────────────────────────
const CHAPTERS = [

  // ──────────────────────────────────────────────────────────
  // DOMAIN 1: Agentic Architecture & Orchestration (27%)
  // ──────────────────────────────────────────────────────────
  {
    id:    "domain-1",
    title: "Domain 1 – Agentic Architecture & Orchestration",
    weight: "27%",
    questions: [

      {
        id: "d1-q1",
        scenario: `[BEISPIEL] Ein Multi-Agenten-System nutzt einen Koordinator und spezialisierte Subagenten. Der Dokumentenanalyse-Subagent folgt fälschlicherweise Links innerhalb von Dokumenten zu unautorisierten Quellen (Blogs, Login-Seiten), anstatt nur den genehmigten Katalog zu nutzen.`,
        question: "Welche Maßnahme behebt das Problem am zuverlässigsten auf architektonischer Ebene?",
        options: [
          "`fetch_url` verfügbar lassen, aber Prompt-Anweisungen hinzufügen, die das Öffnen interner Links verbieten.",
          "Dem Subagenten Websuch-Tools geben, damit er die Relevanz verlinkter Seiten unabhängig prüfen kann.",
          "`fetch_url` durch ein `load_document`-Tool ersetzen, das Katalog-IDs oder genehmigte URLs akzeptiert und vor dem Abrufen validiert.",
          "`fetch_url` für jeden Link erlauben und den Synthese-Agenten anweisen, Citations außerhalb des Katalogs zu verwerfen."
        ],
        correct: 2,
        explanation: `**Warum C:** Tool-Enforcement ist zuverlässiger als Prompt-Anweisungen. Ein \`load_document\`-Tool, das Eingaben vor dem Fetch validiert, verhindert unauthorisierten Zugriff **by Design** — unabhängig davon, was das Modell entscheidet.

Prompt-Anweisungen (A) können vom Modell in Edge Cases versehentlich verletzt werden. Web-Such-Tools (B) erweitern den Scope statt ihn einzuschränken. Post-hoc-Filtering (D) lässt unauthorisierte Fetches trotzdem stattfinden.`
      },

      // Weitere Fragen einfügen...

    ]
  },


  // ──────────────────────────────────────────────────────────
  // DOMAIN 2: Tool Design & MCP Integration (18%)
  // ──────────────────────────────────────────────────────────
  {
    id:    "domain-2",
    title: "Domain 2 – Tool Design & MCP Integration",
    weight: "18%",
    questions: [

      // Fragen hier einfügen...

    ]
  },


  // ──────────────────────────────────────────────────────────
  // DOMAIN 3: Claude Code Configuration & Workflows (20%)
  // ──────────────────────────────────────────────────────────
  {
    id:    "domain-3",
    title: "Domain 3 – Claude Code Configuration & Workflows",
    weight: "20%",
    questions: []
  },


  // ──────────────────────────────────────────────────────────
  // DOMAIN 4: Prompt Engineering & Structured Output (20%)
  // ──────────────────────────────────────────────────────────
  {
    id:    "domain-4",
    title: "Domain 4 – Prompt Engineering & Structured Output",
    weight: "20%",
    questions: []
  },


  // ──────────────────────────────────────────────────────────
  // DOMAIN 5: Context Management & Reliability (15%)
  // ──────────────────────────────────────────────────────────
  {
    id:    "domain-5",
    title: "Domain 5 – Context Management & Reliability",
    weight: "15%",
    questions: []
  }

];


// ── Study Guide ──────────────────────────────────────────────
//
// Jeder Eintrag = ein Abschnitt im Exam Guide.
// Das content-Feld unterstützt volle Markdown-Syntax.
// Tipp: Backtick-Strings (` `) erlauben mehrzeiligen Text.
//       Escaping: \` für ein Backtick im Text, \\ für Backslash.
//
// ─────────────────────────────────────────────────────────────
const STUDY_GUIDE = [

  {
    id:    "sg-overview",
    title: "Prüfungsübersicht",
    content: `
## Format

- **Format:** Multiple Choice, 4 Optionen pro Frage (1 korrekt, 3 Distraktoren)
- **Fragen:** 77
- **Score:** Skaliert 100–1.000, Mindest-Passing-Score: **720**
- **Unbeantwortete Fragen:** Als falsch gewertet — immer raten, niemals leer lassen

## Domänen & Gewichtung

| Domain | Thema | Gewichtung | Fragen (ca.) |
|--------|-------|-----------|--------------|
| 1 | Agentic Architecture & Orchestration | 27% | ~21 |
| 2 | Tool Design & MCP Integration | 18% | ~14 |
| 3 | Claude Code Configuration & Workflows | 20% | ~15 |
| 4 | Prompt Engineering & Structured Output | 20% | ~15 |
| 5 | Context Management & Reliability | 15% | ~12 |

## Lernhinweis

Die Prüfung testet **praktisches Urteilsvermögen**, keine Definitionen auswendig.
Die entscheidende Frage bei jeder Aufgabe lautet: *Wo soll Verantwortung liegen?*

- Das Modell: Sprache interpretieren, zwischen gut beschriebenen Optionen wählen, Erkenntnisse synthestisieren.
- Anwendungs-Code: Deterministische Garantien — Berechtigungen, Compliance, State-Persistenz, Retries, Validierung, Auditierung.
- Tool- und Schema-Design: Formen das Verhalten des Modells. Vages Tool-Design erzeugt Modellfehler, die wie "Reasoning"-Fehler aussehen, aber Interface-Fehler sind.
    `.trim()
  },

  {
    id:    "sg-1",
    title: "1. API Fundamentals & Output Control",
    content: `[INHALT HIER EINFÜGEN]

## Was du wissen musst

Claude's Messages API ist **stateless**. Claude erinnert sich nicht an vorherige API-Calls, es sei denn, deine Anwendung schickt den relevanten Inhalt im nächsten Request mit.

...`
  },

  {
    id:    "sg-2",
    title: "2. Agentic Systems & Orchestration",
    content: `[INHALT HIER EINFÜGEN]`
  },

  {
    id:    "sg-3",
    title: "3. Tool Design & MCP",
    content: `[INHALT HIER EINFÜGEN]`
  },

  {
    id:    "sg-4",
    title: "4. Claude Code",
    content: `[INHALT HIER EINFÜGEN]`
  },

  {
    id:    "sg-5",
    title: "5. Prompt Engineering & Structured Output",
    content: `[INHALT HIER EINFÜGEN]`
  },

  {
    id:    "sg-6",
    title: "6. Context Management & Reliability",
    content: `[INHALT HIER EINFÜGEN]`
  }

];
