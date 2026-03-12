const localResults = [
  { source: 'local', score: 0.92, text: 'User prefers Chinese by default.' },
  { source: 'local', score: 0.87, text: 'User cares about execution speed and continuity.' }
];

const agentResults = [
  { source: 'agent', score: 0.81, text: 'Across sessions, the user consistently optimizes for low-friction automation.' }
];

const merged = [...localResults, ...agentResults]
  .sort((a, b) => b.score - a.score)
  .map((item, index) => ({ rank: index + 1, ...item }));

console.log(JSON.stringify(merged, null, 2));
