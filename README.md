# OpenClaw Hybrid Memory Starter

[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-starter-blue.svg)](#)

A polished starter repository that shows how to build **hybrid memory retrieval** for OpenClaw-style assistants.

It combines:

- **fast local recall** for precise facts
- **long-horizon memory** for deeper continuity
- **fallback-aware routing** for better cost, latency, and reliability

## Why this exists

A lot of assistants are good at the current message and bad at everything before it.

This repo demonstrates a simple, practical idea:

1. search local memory first
2. escalate to a long-horizon memory agent when needed
3. merge both into one response path

That gives you better recall without paying the cost of deep memory on every turn.

## Architecture

```text
User question
   ↓
Local memory search
   ↓
Enough context? ── yes ──→ answer
   │
   no
   ↓
Long-horizon memory agent
   ↓
Merge + rank results
   ↓
Final answer
```

## Repository structure

```text
.
├── README.md
├── LICENSE
├── .gitignore
├── memory.example.json
├── docs/
│   ├── APPLY.md
│   └── ARCHITECTURE.md
└── examples/
    └── merge-memory.js
```

## Example configuration

```json
{
  "memory": {
    "local": {
      "enabled": true
    },
    "agent": {
      "enabled": true,
      "endpoint": "http://localhost:8888"
    },
    "strategy": "local-first-agent-second"
  }
}
```

## Example use cases

- remembering prior user preferences
- carrying project context across sessions
- retrieving long-range decisions and timelines
- keeping prompt size small while preserving continuity

## What makes this useful

- low complexity
- easy to explain in an application or demo
- aligns with real-world agent memory design
- can be extended into a full memory layer later

## Next improvements

- [ ] add benchmark notes for latency and cost
- [ ] add a tiny demo app
- [ ] add ranked merge heuristics
- [ ] add screenshots / diagrams

## For application reviewers

If you are reviewing this repo as part of an OpenAI Pro / builder / startup / student-style application, the short version is:

- this project explores practical memory infrastructure for AI assistants
- it focuses on reliability and cost-aware retrieval
- it is intentionally small, readable, and extensible

See [`docs/APPLY.md`](docs/APPLY.md) for a concise application-oriented summary.

## License

MIT
