# Architecture Notes

## Core idea

Use a two-layer memory system instead of forcing one system to do everything.

### Layer 1: local memory

Best for:

- explicit facts
- preferences
- recent decisions
- low-latency retrieval

### Layer 2: long-horizon memory agent

Best for:

- long-range connections
- weak signals across time
- summarization across many events
- deeper continuity

## Routing strategy

### Local-first

Start with the cheapest, fastest path.

### Agent-second

Escalate only when:

- local recall is weak
- the question spans time
- the user asks about patterns, history, or prior decisions

### Merge

Combine both outputs into one ranked memory result before answering.

## Design goals

- keep latency low
- keep token cost under control
- preserve answer quality
- avoid unnecessary remote calls

## Future directions

- relevance scoring
- confidence thresholds
- cache merged results
- test against real conversation logs
