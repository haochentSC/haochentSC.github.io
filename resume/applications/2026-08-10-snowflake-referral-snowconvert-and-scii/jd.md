# Snowflake — Referral packet for TWO postings (one resume)

`company:` Snowflake
`captured:` 2026-08-10 (pasted by Haochen; consolidated referral packet)
`context:` A Snowflake referrer will submit ONE resume against BOTH reqs below. This folder
supersedes and merges the two earlier SnowConvert-only captures
(`2026-08-07-snowflake-swe-snowconvert-ai/` and `2026-08-09-snowflake-swe-snowconvert-ai/`),
which covered the same posting as job A here.

| # | Role | Req | Location | Comp |
|---|------|-----|----------|------|
| A | Software Engineer - SnowConvert AI | ASHREQ-5474 | Menlo Park, CA | $160K – $230K |
| B | Software Engineer - Secret, Cryptographic and Identity Infrastructure (SCII) | REQ19880 | Bellevue, WA | $160K – $230K |

Both postings open with the identical "AI-native thinkers / experimental mindset / rapidly test
emerging capabilities / low-ego" boilerplate. The technical bodies diverge — one is migration +
agentic AI, the other is security infrastructure — so the merged resume must carry BOTH the
agentic-AI/validation story AND the authentication/cryptography story on one page.

---

## Posting A — Software Engineer, SnowConvert AI (ASHREQ-5474), verbatim

Snowflake redefined the data landscape over a decade ago by building the AI Data Cloud—delivering industry-leading performance and price at scale across data engineering, analytics, and AI/ML workloads. Every day, new customers begin their journey to Snowflake, but migrating existing data and applications from legacy platforms remains a complex, high-effort challenge. Customers must adapt their entire ecosystem—data, database code, ETL pipelines, and consuming applications—to fully realize Snowflake's value. The Migrations organization serves as the catalyst for this modernization, building solutions that enable customers and partners to migrate efficiently and with less risk. Within this charter, the SnowConvert AI team delivers an AI-driven migration product that moves data-centric applications to Snowflake an order of magnitude faster than industry norms. SnowConvert goes beyond schema and SQL translation, seamlessly migrating data, code, ETL pipelines, and BI tools by combining AI-based conversion with rigorous execution-level validation, ensuring that migrated systems are not only syntactically correct, but semantically equivalent to their source and production-ready on the Snowflake AI Data Cloud

RESPONSIBILITIES:
The team develops fundamental code conversion techniques, robust data migration and validation pipelines, and automatic testing components. These capabilities are then leveraged by automated AI agents that process a complete application migration to Snowflake.
- Develop the foundations that AI agents rely on for fast, consistent code conversion
- This development team sits at the center of the original SnowConvert team, AI team, FDE to deliver the architecture below.
- Careful API design is a must for an ever-changing landscape of AI capabilities.
- Iterating with the FDE team enables quick feedback to prototypes, early products.

OUR IDEAL SOFTWARE ENGINEER WILL HAVE:
- Strong software engineering experience in Python, with a focus on performance, reliability, and distributed systems.
- Hands-on experience building agentic AI applications, especially in domains such as computer control or code gen.
- Track record of contributions to open-source agentic frameworks such as LangChain, AutoGen, etc.
- Deep understanding of distributed systems, API design, and backend architectures.
- High agency—ability to take ownership, navigate ambiguity, and independently push projects forward.

STRONGLY DESIRED:
- Experience with GoLang for high-performance backend services.
- Strong understanding of big data transformation, ETL, and ELT pipelines.
- Proficiency in Spark, Airflow, dbt, Kafka or other data engineering tools.
- Familiarity with streaming architectures, event-driven systems, and async processing.
- Experience optimizing large-scale data pipelines for performance and cost efficiency.
- Former founding engineers who have built and owned significant technical projects are highly valued.

---

## Posting B — Software Engineer, SCII (REQ19880), verbatim

We are hiring a Software Engineer for our SCII (Secret, Cryptographic and Identity Infrastructure) team. SCII builds the foundational security systems that empower every Snowflake engineer to deliver the most secure Data Cloud to our customers — solving the hardest security problems at scale so the rest of the organization doesn't have to. SCII also owns the area of End-to-end encryption (E2EE), to secure customer data that prevents third parties from reading the data while at-rest or in transit to and from Snowflake and to minimize the attack surface.

AS A SOFTWARE ENGINEER AT SNOWFLAKE, YOU WILL:
- Design, develop, and scale software systems that help Snowflake engineers build secure products across a natively multi-cloud environment.
- Build and maintain security tooling to define, monitor, enforce, and detect security policy violations across the platform.
- Implement automation and self-service processes that increase developer autonomy and educate engineering teams on secure design and coding practices.
- Contribute to the architecture and evolution of core security infrastructure — spanning secret management, key management, service identity, authentication, and authorization.
- Partner with engineering teams across the company to understand security pain points and deliver solutions that reduce friction without compromising on safety.
- Write well-tested, reliable code and participate in design reviews, code reviews, and on-call rotations to keep critical systems healthy.

OUR IDEAL SOFTWARE ENGINEER WILL HAVE:
- A Bachelor's degree in Computer Science or a related technical field, or equivalent practical experience.
- Hands-on experience in software development using one or more of: JavaScript, Java, Python, C, C++, Golang, or Rust.
- Strong interpersonal and communication skills — the ability to collaborate across teams and explain technical concepts clearly.
- A genuine interest in building software that has direct security and reliability impact at scale.

BONUS POINTS FOR THE FOLLOWING:
- Master's degree or PhD in Computer Science or a related technical field.
- Experience designing, building, testing, and maintaining reliable, scalable software solutions.
- Familiarity with secure software development lifecycle (SSDLC) or security infrastructure, including secret management systems, service identity, authentication, or authorization.
- Experience deploying and operating services on Kubernetes.
- Experience building production services on AWS, Azure, or GCP.

---

## Analysis — building ONE resume for both

### The shared spine (satisfies both postings at once)

| Signal in BOTH JDs | Evidence carried |
|---|---|
| Python + Go | Python across every project; Go in the KV cache |
| Distributed systems, reliability, scale | `kv-ttft-crossover`, `kv-chaos-aws` |
| Well-tested code / automatic testing / CI | `av-eval-gate`, `kv-chaos-aws`, Deepsick tests |
| Multi-cloud (A wants distributed; B wants AWS/Azure/GCP) | AWS in KV cache; GCP/Cloud SQL in Deepsick |
| High agency / owned significant projects | AgentVeris + KV cache both solo-built |
| API design / backend architecture | Stringer REST API; FastAPI backends |

### What each posting pulls uniquely — and how the merged bullet set covers it

**Posting A (SnowConvert AI) — kept from the winning 2026-08-07/09 strategy:**
- `av-shopping-agent` — hands-on agentic AI; the frozen-fixture/live-site adapter is the migration-validation pattern.
- `av-eval-harness` — execution-level validation, programmatic oracle over LLM judge = the shape of a semantic-equivalence checker.
- `av-eval-gate` — automatic testing components; the gate proven by injecting a regression.
- `kv-ttft-crossover` — GoLang high-performance backend service, with a measured number.
- `ds-storedproc-conversation` — writes the exact class of database code SnowConvert translates.

**Posting B (SCII) — newly surfaced for this merge:**
- `ds-auth-pbkdf2` — built authentication from scratch, PBKDF2-SHA256, self-describing hash so the cost parameter rotates without invalidating existing hashes → **secret/key management + cryptography.**
- `ds-auth-hmac-session` — HMAC-SHA256-signed stateless session tokens, constant-time verification to defeat timing attacks → **service identity + authentication + cryptography.**
- `sn-api-auth-isolation` — decorator-based API-key auth + per-user fault isolation → **authentication + reliability at boundaries.**
- `kv-chaos-aws` — fault injection with a correctness verifier, 0 violations across 27,365 requests → **reliable code + on-call/reliability impact at scale + AWS.**

### Net change vs the SnowConvert-only resume (one-page budget preserved: 11 bullets)
- **Dropped:** `av-cross-model` (A-only cost bullet), `ds-fair-price-cte` (A-only analytics SQL).
- **Added:** `ds-auth-pbkdf2`, `ds-auth-hmac-session` (both crypto/auth for B).
- The summary and Skills section gain an explicit security/cryptography thread.

### Gaps not papered over (honest for both interviews)
1. **No open-source agentic-framework contributions** (LangChain/AutoGen) — Posting A. Nearest is a FastMCP server + MCP client on the Anthropic SDK (protocol-level, not framework-level).
2. **No Spark / Airflow / dbt / Kafka, no ETL/ELT** — Posting A. Celery is the only orchestrator.
3. **No Kubernetes** — Posting B bonus. Container experience is Docker + Terraform-provisioned AWS, not k8s.
4. **No production secret-manager / SSDLC tooling** — Posting B. The auth/crypto work is application-level (a marketplace built from scratch), not platform security infrastructure. Transferable claim: the cryptographic primitives (PBKDF2 cost rotation, HMAC constant-time verification) and the "make the invariant falsifiable" habit from the KV correctness oracle.
