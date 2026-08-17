# Team research — SnowConvert AI (ASHREQ-5474) & SCII (REQ19880)

`researched:` 2026-08-12 · public sources only (Snowflake docs, Snowflake blog, press, trade press)
`purpose:` interview prep + deciding which req to weight, for the Xiaodong referral

---

## A. SnowConvert AI — Migrations org, Menlo Park

### Origin: this is an acquired compiler team, now wrapped in agents

SnowConvert was **not** built at Snowflake. It came from **Mobilize.Net**, a Bellevue, WA software
company; Snowflake announced intent to acquire in Jan 2023 and closed in **Feb 2023**. Snowflake
took on Mobilize employees and expanded its engineering/professional-services footprint in
**Bellevue, Costa Rica, and Colombia**. At acquisition the tool had already converted **1.5B+ lines
of code**.

This explains the JD's otherwise-odd sentence — *"this development team sits at the center of the
original SnowConvert team, AI team, FDE."* Those are three real, distinct populations:

| Group | What they are |
|---|---|
| **Original SnowConvert team** | The ex-Mobilize compiler engineers. Deterministic AST-based transpiler heritage. |
| **AI team** | The newer agentic/Cortex layer bolted on top. |
| **FDE** | Forward Deployed Engineers — customer-embedded engineers who own code/config/deployment *inside the customer's environment* and feed real migration failures back. There is a matching `Lead Forward Deployed Engineer – Migration` req in Menlo Park. |

**Read:** the role is the seam between a mature deterministic compiler and a new probabilistic
agent layer, with a customer-facing feedback loop. That is a genuinely hard and genuinely
interesting API-design problem, which is why the JD stresses *"careful API design is a must for an
ever-changing landscape of AI capabilities."*

### Architecture (what's publicly documented)

- **Deterministic core:** parse source → AST → semantic model.
- **AI layer:** Snowflake **Cortex AI** handles ambiguous patterns, cross-platform behavioral
  differences, and complex procedural logic needing contextual reasoning.
- **AI-Powered Code Conversion is GA** as of the Feb 2026 release.
- **Unified CLI** shipped — explicitly "purpose built for headless execution, noninteractive runs,
  and integration with modern developer and agentic tools." I.e. the product itself is being made
  agent-drivable.

### Verification — the part that matters most for Haochen

This is the "rigorous execution-level validation / semantically equivalent" language in the JD,
made concrete:

| Mode | Mechanism |
|---|---|
| **One-sided** | Execute converted code on Snowflake against **AI-generated synthetic test data**; catch syntax/logic errors pre-deployment. Weaker — no ground truth. |
| **Two-sided** | Execute AI-generated test cases on **both** the source system and Snowflake, diff the results. Discrepancies trigger **AI-powered remediation in a closed loop**. Currently **SQL Server only**, expanding. |

- **Baseline capture** two ways: parse **query logs** (real params + real outputs), or **AI-assisted
  — "a swarm of specialized agents generates test cases covering business logic, data-driven
  scenarios, and edge cases by analyzing the source SQL."**
- **Fix loop:** deploy → test → diagnose failure → patch → re-test, until output matches or the
  user opts to skip.
- **Data validation, three levels:** schema (columns/types) → metrics (row counts, aggregates) →
  **row-by-row MD5 hash comparison**, with row/column partitioning for large tables.

### Source platforms supported

Oracle, SQL Server, Teradata, Redshift, BigQuery, Greenplum, Sybase, Synapse, Netezza, PostgreSQL,
Databricks SQL. Feb 2026 additions: Sybase stored procedures/UDFs, and **SSIS → dbt** project
conversion.

> **Note the dbt signal.** The JD lists dbt under "strongly desired"; SSIS→dbt just shipped. dbt is
> not a checkbox here, it's an active output target. Same for the ETL/ELT ask — that's the SSIS
> pipeline-conversion workstream, not generic data engineering.

### Why Haochen's evidence lands here (and why it needs no overselling)

Two-sided verification **is** a programmatic oracle: ground truth from the source system, computed
verdict, no judge involved. One-sided verification is the weaker mode used when ground truth isn't
reachable. That is exactly the split in `av-eval-harness` — *a programmatic oracle owns every
computable verdict, an LLM judge owns only the subjective slice.* He arrived at the same
architecture independently on a different problem. `av-eval-gate` (CI fails the PR when a measured
metric drops below a committed baseline, proven by injecting a regression) is the regression-control
version of the same instinct.

The correct move in an interview is **not** to assert the parallel — it's to ask about it:
*"Is two-sided verification the default when the source system is reachable, and what do you fall
back to when it isn't?"* That question demonstrates the understanding without claiming the credit.

### Honest gaps against posting A

1. **No OSS contributions to LangChain/AutoGen** — explicitly listed. Nearest real thing:
   `av-mcp-both-sides` (a FastMCP server exposing 3 tools + 5 resources, and an MCP-readiness
   scoring category). Protocol-level, not framework-level. Say so plainly.
2. **No Spark / Airflow / Kafka; dbt only by name** — and dbt now matters more than it did.
3. **Go is a real exposure gap** — see the separate discussion; the JD lists Go under strongly
   desired, so a Go project on the resume may invite a Go conversation.

---

## B. SCII (Secret, Cryptographic & Identity Infrastructure) — Bellevue

### The context that explains why this team is funded

Mid-2024: a credential-stuffing campaign hit **at least 160 Snowflake customer environments** —
AT&T, Ticketmaster, Santander, Neiman Marcus among them. Mandiant's finding: **Snowflake itself was
not breached.** The common factor across every victim was **no MFA**, with credentials harvested by
infostealer malware, compounded by credential reuse and no network allow-listing.

Snowflake's response set the current agenda:

- July 2024 — admins can mandate MFA org-wide.
- **Oct 2024 — MFA enforced by default for all human users** in newly created accounts.
- 14-character minimum passwords.
- **Trust Center** GA.
- Signed CISA's **Secure by Design** pledge.

The strategic direction since is **secretless authentication**:

- **Workload Identity Federation (WIF)** — a workload on AWS/Azure/GCP uses its *existing cloud IdP
  identity* to obtain a short-lived attestation; Snowflake validates it directly with the IdP and
  never stores a static service credential.
- **SPIFFE**-based workload identity; Snowflake publicly described a Workload IAM model (April 2024,
  with Aembit).

### E2EE and key management — the domain the JD says SCII owns

- Client-side encryption on the user's machine before data reaches an internal stage.
- **Tri-Secret Secure:** a customer-managed key (CMK) in the cloud provider's KMS + a
  Snowflake-managed key → a **composite master key**.
- Hierarchical key wrapping: composite master key wraps **table master keys**, which derive **file
  keys**, which encrypt raw data. The composite master key never touches raw data.
- **Revoke the CMK and Snowflake can no longer decrypt the data.** That is the whole point.
- Officially supported HSM/key manager: Thales HSM + CipherTrust Cloud Key Manager.

### The reframe that matters for Haochen

Read the JD's six responsibility bullets again. Only **one** is about cryptography. The rest:

> build/maintain security **tooling** to define, monitor, enforce and **detect policy violations** ·
> implement **automation and self-service** that increases developer autonomy · **partner with
> engineering teams** to reduce friction without compromising safety · well-tested code, design
> reviews, **on-call**

**SCII is a platform-engineering team whose domain happens to be security.** Its customers are
Snowflake's own engineers. "Solving the hardest security problems at scale so the rest of the
organization doesn't have to" is a developer-productivity charter.

That reframe changes what evidence is relevant. `av-eval-gate` — an automated gate that blocks a
merge when a committed policy threshold is violated, validated by deliberately injecting a
violation it must catch — is structurally *the same object* as "define, monitor, enforce, and detect
security policy violations." `kv-chaos-aws` (a correctness verifier that keeps running while faults
are injected) is the on-call/reliability posture. Neither requires claiming cryptographic depth.

### Honest gaps against posting B

1. **No Kubernetes** (bonus item). Real experience is Docker + Terraform-provisioned AWS.
2. **No production secret-management or SSDLC tooling.** The auth work (`ds-auth-basic`) is
   application-level, on a 4-person course project. Keep it to the one modest line already on the
   resume — the 2026-08-10 authenticity call was correct and this research reinforces it.
3. **Do not go deep on crypto unprompted.** Tri-Secret Secure and key-wrapping hierarchies are worth
   *reading* so the domain isn't foreign, but volunteering PBKDF2/HMAC detail invites a drilling
   that isn't winnable.

### The bar is notably lower on paper

Posting B's stated minimum: a **Bachelor's**, hands-on development in **one** of
JS/Java/Python/C/C++/Go/Rust, strong communication, and *"a genuine interest in building software
that has direct security and reliability impact at scale."* A Master's is a **bonus** item.

Compare posting A: distributed-systems depth, agentic-AI build experience, OSS agentic-framework
contributions, high agency, founding-engineer background valued.

**Conclusion: SnowConvert AI is the better *fit*; SCII is the more *attainable* req.** Worth
knowing, since a referrer submitting to both may get different outcomes and Haochen should not read
an SCII-only callback as a downgrade.

---

## C. Practical flags

1. **Timing.** Both are full-time SWE reqs at $160–230K. Haochen graduates **Spring–Fall 2027**.
   A likely outcome is a redirect to a university/new-grad pipeline or a "reconnect closer to
   graduation." Worth pre-empting with Xiaodong rather than being surprised by it.
2. **Location.** Menlo Park (A) vs Bellevue (B) — two different metros. Have an answer ready for
   both; note Bellevue is the legacy Mobilize.Net office town and a real Snowflake engineering site.
3. **Values framing.** Snowflake hires against Put Customers First, Think Big, Get It Done, **Own
   It**, Make Each Other the Best, with Integrity Always as an overarching filter. "Own It" is
   weighted most and wants evidence of *choosing* responsibility. Both of Haochen's main projects
   were self-directed, which is the strongest card he holds.

## D. Questions worth asking (they signal understanding without claiming credit)

**SnowConvert AI**
- Is two-sided verification the default whenever the source system is reachable, and what's the
  fallback posture when it isn't?
- How do you keep the agent-generated test suite from drifting toward cases the converter already
  passes?
- Where's the boundary today between the deterministic AST path and the Cortex path — is the AI a
  fallback for what the grammar can't handle, or is it in the main line?
- With the CLI built for headless/agentic use, is the API surface versioned for external agents?

**SCII**
- How far along is the move from stored secrets to WIF/SPIFFE-style attestation for internal
  service-to-service auth?
- Is the tooling mandate closer to detection (find violations) or enforcement (make the violation
  impossible)?
- What does on-call look like for a team whose systems are in everyone else's critical path?

---

## Sources

- Snowflake docs — AI code conversion / verification, data validation, E2EE, Tri-Secret Secure,
  encryption key management, Workload Identity Federation
- Snowflake blog — *What's New in SnowConvert AI: February 2026*; *MFA by Default*;
  *Go Secretless with Workload Identity Federation*; *Accelerating Redshift Modernization*
- Press — Snowflake press release + BusinessWire (Mobilize.Net/SnowConvert acquisition, Jan 2023);
  TechTarget, GeekWire, VentureBeat, SiliconANGLE (acquisition close, Feb 2023, Bellevue)
- Breach coverage — The Register, Cybersecurity Dive, GovInfoSecurity, Cloud Security Alliance
- Careers — Snowflake `Lead Forward Deployed Engineer – Migration` (Menlo Park); Snowflake hiring
  values via Built In and behavioral-interview writeups
