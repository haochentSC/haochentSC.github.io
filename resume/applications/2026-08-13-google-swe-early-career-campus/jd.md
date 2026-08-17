# Google — Software Engineer, Early Career, Campus

`captured:` 2026-08-13 · `window:` open until at least **August 30, 2026** (may close earlier or later
based on business needs)
`locations (pick preferred at apply time):` Mountain View CA · Cambridge MA · Kirkland WA ·
Los Angeles CA · New York NY · Pittsburgh PA · San Bruno CA · Seattle WA · San Jose CA · Sunnyvale CA
`comp (US):` $123,000 – $174,000 + 15% bonus target + equity + benefits

---

## Posting (verbatim)

### Minimum qualifications
- Bachelor's degree in Computer Science, a similar technical field of study, or equivalent practical
  experience.
- Experience working with data structures or algorithms during coursework/projects, research,
  internships, or practical experience in school or work (e.g. open-source coding).
- Experience with software development in one or more programming languages (e.g., Python, C, C++,
  Java, JavaScript).
- Experience utilizing AI productivity tools to streamline business or development workflows.

### Preferred qualifications
- Master's degree in Computer Science or a related technical field.
- Experience working with one or more of the following: web or mobile application development,
  Unix/Linux environments, distributed and parallel systems, machine learning, information
  retrieval, natural language processing, networking, developing large software systems, or security
  software development.
- Experience developing accessible technologies.
- Ability to learn other coding languages as needed.

### About the job
Google's software engineers develop the next-generation technologies that change how billions of
users connect, explore, and interact with information and one another. Our products need to handle
information at massive scale, and extend well beyond web search. We're looking for engineers who
bring fresh ideas from all areas, including information retrieval, distributed computing,
large-scale system design, networking and data storage, security, artificial intelligence, natural
language processing, UI design and mobile; the list goes on and is growing every day. As a software
engineer, you will work on a specific project critical to Google's needs with opportunities to
switch teams and projects as you and our fast-paced business grow and evolve. We need our engineers
to be versatile, display leadership qualities and be enthusiastic to take on new problems across the
full-stack as we continue to push technology forward.

As a key member of a small and versatile team, you design, test, deploy and maintain software
solutions.

Google is an engineering company at heart. We hire people with a broad set of technical skills who
are ready to take on some of technology's greatest challenges and make an impact on users around the
world. At Google, engineers not only revolutionize search, they routinely work on scalability and
storage solutions, large-scale applications and entirely new platforms for developers around the
world. From Google Ads to Chrome, Android to YouTube, social to local, Google engineers are changing
the world one technological achievement after another.

### Responsibilities
- Design, develop, test, deploy, maintain, and improve software.
- Manage project priorities, deadlines, and deliverables.
- Take on tasks as requested and follow through to completion despite roadblocks or distractions.

---

## Gap analysis

### What this posting actually is

A **generalist L3 requisition**, not a specialized one. Note the phrasing: "a broad set of technical
skills," "versatile," "across the full-stack," "opportunities to switch teams." The preferred-quals
line is a nine-item **OR** list. This is the opposite of the Snowflake reqs, which wanted one deep
story (agentic AI + execution validation). Here, **breadth across distinct axes beats depth in one**,
and the resume should read as "this person can be dropped on any team."

Practical consequence for selection: the Snowflake resume's three-project spine (AgentVeris → KV
cache → Deepsick) doubled down on backend/data/SQL. For Google, the third slot is better spent on an
axis nothing else covers — **machine learning** — which the posting names twice (preferred quals and
"about the job").

### Requirement-by-requirement

| Requirement | Status | Evidence carried |
|---|---|---|
| Bachelor's in CS | **Met** | USC B.S. CS, Dec 2025 |
| Master's (preferred) | **Met** | UIUC MCS, in progress |
| Data structures / algorithms in coursework or projects | **Met, needs surfacing** | `kv-eviction-pareto` (GDSF + elastic max-min fairness — a real policy-design problem), `kv-ttft-crossover` (consistent hashing). Both are self-directed, not coursework, which is stronger |
| Software dev in ≥1 of Python/C/C++/Java/JavaScript | **Met** | Python across four subjects, TypeScript/JS on the AgentVeris frontend. Go is not on their list but reads as a plus |
| **AI productivity tools to streamline workflows** | **Met, but must be made obvious** | See below — this is the one that needs deliberate handling |
| Web or mobile app development | Met | `av-nextjs-frontend` (in stack line), `sn-autosave-nometric`, Deepsick React |
| Unix/Linux environments | Thin on paper | Docker + AWS + Railway are the proxy; carried on the skills line only |
| Distributed and parallel systems | **Strongest area** | The whole `kv-*` set; `kv-tp4-silent-corruption` is literally parallel-systems debugging |
| Machine learning | Met | `wm-*` (PyTorch, VAE, PPO, CMA-ES) |
| Information retrieval | Partial | Multi-page crawling in `av-scan-pipeline`; the real IR material (BM25, RRF, CLIP) is in Modality-Aware KV Tiering, which **has no bullets** — see the store's open items |
| Natural language processing | Adjacent, not direct | LLM inference/serving and LLM agents, not NLP modeling |
| Networking | Met | gRPC/Protobuf, cross-AZ AWS measurement, etcd |
| Developing large software systems | Met | `av-scan-pipeline`, `av-postgres-artifacts` (13 tables, 8 migrations) |
| Security software development | Thin — **deliberately not pushed** | Per the 2026-08-10 authenticity call: one security course, no deep security work. Not claimed here at all |
| Developing accessible technologies | **Not met** | No a11y evidence anywhere in the store. Do not claim it |
| Ability to learn other languages | Met implicitly | Python → Go → TypeScript → SQL across projects |

### The one requirement that needs care: "AI productivity tools"

This is a **minimum** qualification, new to Google's 2026 early-career reqs, and it is the one an ATS
keyword pass or a 10-second recruiter skim can score him down on if it is not visible.

The trap: the literal reading is "you use Copilot/Gemini/Claude in your workflow." **There is no
bullet in the master for that, and none may be written for this application** (R9/R10 — if tailoring
needs a bullet that does not exist, it does not get invented in the output).

What is legitimately in the store and reads directly onto this requirement:

- `av-mcp-both-sides` — AgentVeris exposed as a FastMCP server so an **AI client can run a scan over
  the protocol**. That is AI tooling wired into a real workflow, in the exact protocol Google's
  ecosystem now speaks.
- `av-shopping-agent` — an LLM agent that plans, searches, compares and carts autonomously: a
  business workflow automated by AI.
- `av-eval-harness` / `av-eval-gate` — held back, but they are the answer to "and how do you know the
  AI tool is actually helping?", which is the interview follow-up.

Both selected bullets go **above** the fold of the AgentVeris block, and "Anthropic SDK, LLM agents,
MCP" leads the skills section.

**Open item for Haochen:** if he does routinely use Claude Code / Copilot / Gemini in his own dev
loop — and the shape of this repo suggests he does — that is a real, ownable claim that currently has
**no bullet**. It belongs in the master (`resume-master`, as a `draft` until he confirms), not
invented here. Adding it would convert this from "met by adjacency" to "met literally."

### Weak spots, stated plainly

1. **No expected graduation date.** For a *campus* req this is a real screening field — recruiters
   filter on grad cohort. §3 of the master does not record one, so the resume carries
   `Jan 2026 – Present`. Haochen should supply it; it goes in the master first.
2. **No GPA, no coursework line.** §3 says neither is recorded. Google dropped GPA as a hard
   requirement years ago and this posting does not ask, so leaving both off is defensible. A
   *relevant coursework* line would help the "DSA during coursework" min qual, but it does not exist
   upstream.
3. **No accessibility evidence.** One of three preferred bullets is unaddressed. Accepted — the other
   two are strongly met.
4. **No open-source contribution record.** The min qual names open-source coding as an example path.
   His repos are public but they are his own projects, not contributions to others'. Not a gap that
   blocks anything, but it is the cheapest one to close over the next year.
5. **No leadership/mentorship bullet anywhere in the store.** "Display leadership qualities" is in
   the posting text and Leadership is one of Google's four scored signals. The store has nothing on
   it. This does not sink a resume screen — it surfaces in the behavioral round — but it is a real
   hole in the master, not just in this application.
6. **Information retrieval is claimed nowhere** despite being the first item Google lists. The repo
   that would back it (Modality-Aware KV Tiering: BM25, RRF, CLIP, multimodal RAG) is still not
   cloned. This is now the **second** application where that gap has cost something concrete.
