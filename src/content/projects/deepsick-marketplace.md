---
title: Deepsick Marketplace
tagline: Second-hand marketplace with fair-price analytics — React + FastAPI + MySQL on GCP, with auth, buyer-seller messaging, and advanced database programs.
role: Auth, messaging & advanced DB programs (team of 4)
period: Spring 2026
status: complete
stack:
  - React 19
  - Vite
  - FastAPI
  - Python
  - MySQL 8
  - GCP (Cloud SQL + hosting)
  - Cloud SQL Auth Proxy
  - PBKDF2 / HMAC
metrics:
  - { label: "PBKDF2-SHA256 iterations", value: "390k" }
  - { label: "Mercari listings seeded", value: "~1.4M" }
  - { label: "normalized tables", value: "6" }
categories:
  - fullstack
  - backend
  - database
links: {}
featured: true
order: 4
---

## Problem

A second-hand marketplace (CS411 database project, team of 4) where buyers evaluate used items with
data-driven context. The differentiator is **fair-price comparison** against a peer group of similar
listings — same category, brand, and condition — seeded from ~1.4M Mercari listings, on a normalized
6-table MySQL 8 schema. Both the FastAPI backend and the database are hosted on **Google Cloud
Platform** — MySQL 8 on **Cloud SQL**, reached through the Cloud SQL Auth Proxy.

<figure>
  <img src="/media/deepsick-marketplace/01_marketplace.png" alt="Deepsick Marketplace browse page: a product grid of second-hand listings with category, brand, condition, and status filters, each card showing price and a Message Seller button." />
  <figcaption>Marketplace browse — product grid with category / brand / condition / status filters, fair-price detail, and per-listing seller contact.</figcaption>
</figure>

<figure>
  <img src="/media/deepsick-marketplace/02_price_assistant.png" alt="Fair-price analytics table comparing each listing's selling price against the peer average price and peer count for the same brand, category, and condition." />
  <figcaption>Fair-price assistant — the differentiator: each listing's price vs. the peer average (matching brand, category, and condition) across active and sold listings.</figcaption>
</figure>

## My role

I owned the **authentication system, the messaging backend, all three advanced database programs, and
the database connection pooling** that backs every request to Cloud SQL.

### Authentication — built from scratch, no framework
- **Password hashing** with PBKDF2-SHA256 at **390,000 iterations** and a random 16-byte salt
  (OWASP-aligned), stored as a structured `pbkdf2_sha256$iterations$salt$digest` string so parameters
  can evolve without breaking existing hashes — plus a multi-format verifier to migrate legacy MD5
  hashes from the Mercari import.
- **Stateless session tokens** signed with HMAC-SHA256 (`user_id:issued_at` + server secret), avoiding
  any server-side session store; verification uses constant-time comparison (`hmac.compare_digest`) to
  defeat timing attacks, with careful Base64 padding handling across platforms.

### Messaging + advanced database programs
- **Messaging backend**: thread + message CRUD with per-message read tracking and thread archiving.
- **Stored procedure** `initiate_conversation` — encapsulates the whole "contact seller" flow in the
  database: validates the product is active, confirms buyer/seller are distinct valid users, dedupes
  existing threads, rate-limits active conversations, and creates-or-appends. Uses a multi-relation
  JOIN and a `GROUP BY` aggregation, with `IF … SIGNAL` control structures for descriptive errors.
- **Trigger** `after_message_insert` — auto-reopens an archived thread (`is_archived = FALSE`) when a
  new message arrives, keeping inbox state aligned with activity without app-layer logic.
- **SERIALIZABLE transaction wrapper** — wraps the stored-procedure call at the strictest isolation
  level so two rapid "Message Seller" clicks can't create duplicate threads; either everything commits
  or everything rolls back.

<figure>
  <img src="/media/deepsick-marketplace/04_messages.png" alt="Buyer-seller messaging UI: an inbox of conversation threads on the left and an open thread on the right showing a back-and-forth between a buyer and seller about a listing." />
  <figcaption>Messaging backend — threads created from a listing's "Message Seller" land in the inbox; opening one shows the buyer↔seller conversation, reopened automatically on a new message by the <code>after_message_insert</code> trigger.</figcaption>
</figure>

<figure>
  <img src="/media/deepsick-marketplace/05_seller_profile.png" alt="Unified seller profile timeline: a single table interleaving active listings and completed/returned sales with amount, transaction id, status, buyer, return status, and timestamp." />
  <figcaption>Seller profile — one stored-procedure-backed timeline interleaving active listings, completed/returned sales, and the latest return status per item.</figcaption>
</figure>

<figure>
  <img src="/media/deepsick-marketplace/03_power_users.png" alt="Power-users ranking table listing users by an engagement score combining completed purchases, completed sales, and active listings." />
  <figcaption>Power-users analytics — ranks users active as both buyers and sellers by an engagement score (purchases + sales + active listings).</figcaption>
</figure>

## Schema design

Six normalized tables (`users`, `products`, `transactions`, `returns`, `message_threads`, `messages`)
with `ENUM`-constrained states (status, condition), foreign keys with `ON DELETE CASCADE` /
`SET NULL`, and boolean state columns (`is_archived`, `is_read`) that enable archiving and unread
counts without extra tables.
