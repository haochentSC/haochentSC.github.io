# Snowflake — Software Engineer, SnowConvert AI

`company:` Snowflake
`role:` Software Engineer - SnowConvert AI
`location:` Menlo Park, California, United States (US-CA-Menlo Park)
`employment:` Full time
`department:` Engineering
`compensation:` $160K – $230K
`captured:` 2026-08-09 (pasted by Haochen; re-capture of the posting, now with comp band + location metadata)

> **Re-capture of the same posting as `2026-08-07-snowflake-swe-snowconvert-ai`.** The posting text
> is unchanged; this capture additionally records the compensation band ($160K–$230K), the Menlo Park
> location, full-time status, and the Engineering department, which the 2026-08-07 capture did not
> carry. The req number (ASHREQ-5474) was not re-listed in this paste but is presumed identical.

---

## Posting, verbatim

At Snowflake, we are powering the era of the agentic enterprise. To usher in this new era, we seek AI-native thinkers across every function who are energized by the opportunity to reinvent how they work. You don't just use tools; you possess an innate curiosity, treating AI as a high-trust collaborator that is core to how you solve problems and accelerate your impact. We look for low-ego individuals who thrive in dynamic and fast-moving environments and move with an experimental mindset — who rapidly test emerging capabilities to discover simpler, more powerful ways to deliver results. At Snowflake, your role isn't just to execute a function, but to help redefine the future of how work gets done.

Snowflake redefined the data landscape over a decade ago by building the AI Data Cloud—delivering industry-leading performance and price at scale across data engineering, analytics, and AI/ML workloads. Every day, new customers begin their journey to Snowflake, but migrating existing data and applications from legacy platforms remains a complex, high-effort challenge. Customers must adapt their entire ecosystem—data, database code, ETL pipelines, and consuming applications—to fully realize Snowflake's value. The Migrations organization serves as the catalyst for this modernization, building solutions that enable customers and partners to migrate efficiently and with less risk. Within this charter, the SnowConvert AI team delivers an AI-driven migration product that moves data-centric applications to Snowflake an order of magnitude faster than industry norms. SnowConvert goes beyond schema and SQL translation, seamlessly migrating data, code, ETL pipelines, and BI tools by combining AI-based conversion with rigorous execution-level validation, ensuring that migrated systems are not only syntactically correct, but semantically equivalent to their source and production-ready on the Snowflake AI Data Cloud

RESPONSIBILITIES:
The team develops fundamental code conversion techniques, robust data migration and validation pipelines, and automatic testing components. These capabilities are then leveraged by automated AI agents that process a complete application migration to Snowflake.

Develop the foundations that AI agents rely on for fast, consistent code conversion

This development team sits at the center of the original SnowConvert team, AI team, FDE to deliver the architecture below.

Careful API design is a must for an ever-changing landscape of AI capabilities.

Iterating with the FDE team enables quick feedback to prototypes, early products.

OUR IDEAL SOFTWARE ENGINEER WILL HAVE:
Strong software engineering experience in Python, with a focus on performance, reliability, and distributed systems.

Hands-on experience building agentic AI applications, especially in domains such as computer control or code gen.

Track record of contributions to open-source agentic frameworks such as LangChain, AutoGen, etc.

Deep understanding of distributed systems, API design, and backend architectures.

High agency—ability to take ownership, navigate ambiguity, and independently push projects forward.

STRONGLY DESIRED:
Experience with GoLang for high-performance backend services.

Strong understanding of big data transformation, ETL, and ELT pipelines.

Proficiency in Spark, Airflow, dbt, Kafka or other data engineering tools.

Familiarity with streaming architectures, event-driven systems, and async processing.

Experience optimizing large-scale data pipelines for performance and cost efficiency.

Former founding engineers who have built and owned significant technical projects are highly valued.

---

## Analysis

The full center-of-gravity / requirement-coverage / gap analysis is in
`../2026-08-07-snowflake-swe-snowconvert-ai/jd.md` and is unchanged — the posting text is identical.
Only the delta specific to this capture is recorded here.

### What changed in this version's resume

This resume keeps the winning strategy from 2026-08-07 (lead with AgentVeris's agentic AI +
execution-level validation, then the Go KV cache, then Deepsick's database-code depth) but makes
**one swap** to close a gap the prior version flagged and left as interview-only:

- **Out:** `av-scan-pipeline` (async Celery pipeline — covered "async processing", but that theme is
  already carried by the Celery mention in `av-eval-*` and the async replication in `kv-*`).
- **In:** `av-cross-model` — measured Claude Sonnet 4.6 vs open-weight gpt-oss:120b on task success,
  cost, and latency across the same 9 eval cases.

**Why the swap fits this posting specifically:**

| JD signal | How `av-cross-model` answers it |
|---|---|
| "experimental mindset — rapidly test emerging capabilities" | Added an Ollama backend mirroring the Anthropic API to A/B two model families on the same harness |
| "optimizing large-scale data pipelines for performance and **cost efficiency**" (strongly desired) | The one selected bullet that carries a measured cost/latency tradeoff ($0.035 vs $0 per task; 14.9 s vs 8.4 s) |
| "AI-native thinkers… treating AI as a high-trust collaborator" | Treats model choice as a measured eval dimension, not a default |

### Gaps unchanged from 2026-08-07 (do not paper over)

1. **No open-source agentic-framework contributions** (LangChain/AutoGen). Nearest signal is a
   FastMCP server + MCP client on the Anthropic SDK — protocol-level, not framework-level.
2. **No Spark / Airflow / dbt / Kafka**, and **no ETL/ELT** work. Celery is the only orchestrator.
3. **No code-gen / program-transformation** work — the agent domain is e-commerce. The transferable
   claim is the validation architecture (programmatic oracle owns computable verdicts, LLM judge
   confined to the subjective slice), which is the shape of a semantic-equivalence checker.
