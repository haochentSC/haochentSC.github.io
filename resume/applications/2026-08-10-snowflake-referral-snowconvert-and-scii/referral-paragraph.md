# Referral paragraph — requested by Xiaodong (2026-08-12)

Xiaodong needs a "why is this candidate a good fit" paragraph to attach to the referral
submission covering both reqs (ASHREQ-5474 SnowConvert AI, REQ19880 SCII).

## Why this reads the way it does

Grounded in two things found on 2026-08-12:

1. **Snowflake's hiring values** are Put Customers First, Think Big, Get It Done, **Own It**,
   Make Each Other the Best, with Integrity Always as an overarching filter. "Own It" is the
   north star: they want evidence of *choosing* responsibility — "someone else could have handled
   this, you stepped in" — not evidence of executing an assigned task.
2. **Stories that are "too tidy" lose credibility.** Naming where an approach failed strengthens
   the case rather than weakening it.

So: no metric dump. Every number in the earlier draft is already on the resume Xiaodong is
attaching, and repeating them in prose reads as keyword-matching rather than as a person talking.
The paragraph instead carries the negative result (real, and the most distinctive thing in the KV
cache project) and the fact that nobody assigned either project.

| Claim | Source |
|---|---|
| KV cache in Go, benchmarked on real GPUs | `kv-ttft-crossover` (`measured`) |
| "the range where remote caching doesn't pay" | `kv-crossover-envelope`, `kv-a100-no-crossover` (both `measured`) |
| live product with an LLM agent | `av-shopping-agent`, `av-deploy` |
| eval harness that grades it | `av-eval-harness` |
| CI gate blocking his own PRs | `av-eval-gate` |
| self-directed, unassigned | `attribution: mine` on both projects; AgentVeris is a solo-built live SaaS |

Deliberately left out: the auth/crypto line (`ds-auth-basic`) — one honest clause on a resume is
fine, but a referral paragraph that reaches for it would be reaching. SCII can read the resume.

## Primary — first person (what Xiaodong asked for)

I'm a CS master's student at UIUC with a software engineering internship behind me, and most of
what I know came from building things end to end in Python and Go and then checking whether they
actually worked. I wrote a distributed KV cache for LLM inference in Go and benchmarked it against
real GPUs; the most useful thing I got out of it was the negative result — the range where remote
caching doesn't pay for itself — and I published that next to the win. I do the same on the AI
side: I build and operate a live product with an LLM agent in it, and the piece I'm proudest of
isn't the agent but the evaluation harness that grades it and the CI gate that blocks my own pull
requests when its reliability drops. Nobody assigned me either project — I started them because I
wanted to know the answer. That instinct, own the thing end to end and then prove it works, is
what I'd bring to Snowflake, where a lot of other teams' work sits on top of whatever
infrastructure you ship.

## Third person (if the form is worded from the referrer's side)

Haochen is a CS master's student at UIUC with a software engineering internship behind him, and
what stands out is that he builds things end to end and then checks whether they actually worked.
He wrote a distributed KV cache for LLM inference in Go and benchmarked it against real GPUs — and
published the negative result, the range where remote caching doesn't pay for itself, right
alongside the win. Same on the AI side: he builds and operates a live product with an LLM agent in
it, and the part he's proudest of isn't the agent but the evaluation harness that grades it and the
CI gate that blocks his own pull requests when reliability drops. Neither project was assigned to
him. That combination — owning something end to end and then proving it works rather than asserting
it — is why I think he'd do well here.

## Alternative — if the form wants concrete numbers

I'm a CS master's student at UIUC with a production SWE internship and two self-directed systems
projects. In Go I built a distributed KV cache for LLM inference — consistent-hash sharding, RF=2
replication, etcd-coordinated failover — that cut time-to-first-token 10.9% on 4k-token shared
prefixes on AWS, and held zero correctness violations across 27,365 fault-injected requests under
chaos testing. I also published where it *doesn't* help, which I think is the more useful half. In
Python I build and operate a live SaaS product whose LLM agent runs on the Anthropic SDK, along
with the eval harness and CI gate that block a merge when the agent's measured reliability
regresses. Nobody assigned me either project. What I'd bring is the habit of owning a system end to
end and verifying it rather than asserting it.
