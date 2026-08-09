# Snowflake — Software Engineer, SnowConvert AI

`company:` Snowflake
`role:` Software Engineer - SnowConvert AI
`location:` Menlo Park, California, United States
`category:` Engineering
`req:` ASHREQ-5474
`captured:` 2026-08-07 (pasted by Haochen; not fetched from the posting URL)

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

### Center of gravity

**Agentic AI applied to code conversion, backed by execution-level validation.** The load-bearing
sentence is in the intro, not the requirements list:

> combining AI-based conversion with rigorous execution-level validation, ensuring that migrated
> systems are not only syntactically correct, but **semantically equivalent** to their source

That is a validation-harness problem wearing a migration hat. Everything the team builds —
"robust data migration and validation pipelines, and automatic testing components" — exists to
decide whether an LLM's output is *actually correct*, not whether it parses.

### Repeated language (what the screen scores on)

| Term | Count | Covered by |
|---|---|---|
| AI agents / agentic | 6 | `av-shopping-agent`, `av-eval-harness`, `av-eval-gate` |
| validation / testing / equivalence | 5 | `av-eval-harness`, `av-eval-gate`, `kv-chaos-aws` |
| migration / conversion | 7 | — no direct bullet; SQL depth via `ds-*` is the nearest signal |
| Python | 2 | `av-*`, `sn-*`, `ds-*` |
| distributed systems | 3 | `kv-*` |
| API design | 2 | `sn-email-digest-api`, `av-scan-pipeline`, `ds-*` |
| pipelines (data/ETL) | 5 | `av-scan-pipeline` (async task pipeline) — **weakest area** |

### Hard requirements → coverage

| Requirement | Status |
|---|---|
| Strong Python: performance, reliability, distributed systems | **Strong.** `av-*` (Python/FastAPI/Celery), `kv-*` (perf + reliability), `sn-*` (production Python) |
| Hands-on agentic AI, esp. code gen / computer control | **Strong, adjacent.** Built an LLM agent with a tool surface, iteration cap, and an adapter that runs identical agent code against fixtures and live sites. Domain is commerce, not code gen |
| Open-source agentic framework contributions (LangChain, AutoGen) | **Absent.** No OSS contributions to any agent framework. Nearest signal: built a FastMCP server + MCP client integration on the Anthropic SDK — protocol-level, not framework-level |
| Distributed systems, API design, backend architectures | **Strong.** `kv-replication-failover`, `kv-ttft-crossover`, `av-scan-pipeline` |
| High agency / ownership | **Strong.** AgentVeris is solo-built, live, and operated in production |

### Strongly-desired → coverage

| Desired | Status |
|---|---|
| GoLang for high-performance backends | **Strong.** The entire KV cache is Go |
| Big data transformation, ETL/ELT | **Weak.** No ETL/ELT work. Batch enrichment at Stringer is the only batch-pipeline bullet |
| Spark, Airflow, dbt, Kafka | **Absent.** Celery is the only orchestrator he has shipped |
| Streaming, event-driven, async processing | **Good.** Celery + async FastAPI + async replication; no true streaming (no Kafka, no consumers) |
| Optimizing pipelines for performance and cost | **Good.** `kv-eviction-pareto`, `kv-gpu-spend`, `av-cross-model` cost/latency comparison — none selected for space; all are interview material |
| Former founding engineer | **Strong.** AgentVeris: sole builder, live product, real users |

### Known gaps, stated plainly

Three things this resume cannot claim, and should not be made to look like it claims:

1. **No open-source agentic-framework contributions.** LangChain/AutoGen appear nowhere in the
   master. Do not let "MCP" in the skills line be read as more than it is.
2. **No Spark / Airflow / dbt / Kafka.** No data-engineering tool in the inventory.
3. **No code-gen or program-transformation work.** The agent domain is e-commerce, and the SQL
   depth in `ds-*` is *writing* database code, not *translating* it.

Gaps 1 and 2 are "strongly desired," not required. Gap 3 is the honest one to be ready to speak to:
the transferable claim is the validation architecture — a programmatic oracle that owns every
computable verdict, with the LLM judge confined to the subjective slice — which is exactly the
shape of a semantic-equivalence checker for converted code.
