# Certificate Priority System Guide

## How It Works

Certificates are sorted using a **3-level hierarchy**:

### 1. Priority (Manual Override)
Set a `priority` number on any certificate to control its position.
- **Higher number = shows first**
- Default: `0` (if not set)
- Recommended values:
  - `100` - Most important (e.g., Full Stack Diplomas)
  - `90` - Very important (e.g., Web Developer Diplomas)
  - `80` - Important (e.g., specialized certifications)
  - `50-70` - Standard certificates
  - `0` - Default (uses category + date only)

### 2. Category Priority (Automatic)
If two certificates have the same priority, they're sorted by category:

| Category       | Priority | Description                      |
|----------------|----------|----------------------------------|
| Diploma        | 100      | Highest - comprehensive programs |
| DevOps         | 80       | Infrastructure & deployment      |
| C#             | 70       | C# specializations               |
| Python         | 70       | Python specializations           |
| JavaScript     | 70       | JavaScript specializations       |
| Database       | 60       | SQL, databases                   |
| Fundamentals   | 50       | Foundation courses               |

### 3. Date (Final Sort)
If priority AND category are the same, newest certificates show first.

## Examples

### Example 1: Highlighting Your Best Work
```typescript
'cs-fullstack': {
  name: 'C# Full Stack Developer',
  issuer: 'SoftUni',
  category: 'Diploma',
  date: new Date(2023, 10, 30),
  priority: 100, // ⭐ Top of the list!
}
```

### Example 2: Multiple Important Certs
```typescript
// Both have priority 100, so they're sorted by category (both Diploma)
// Then by date (same date), so they appear together at the top
'cs-fullstack': { priority: 100, category: 'Diploma', date: new Date(2023, 10, 30) },
'python-fullstack': { priority: 100, category: 'Diploma', date: new Date(2023, 10, 30) },

// These appear after the diplomas
'devops-infra': { priority: 80, category: 'DevOps', date: new Date(2023, 5, 7) },
'cs-advanced': { priority: 70, category: 'C#', date: new Date(2021, 11, 17) },
```

### Example 3: No Priority Set (Default Behavior)
```typescript
// These will be sorted by:
// 1. Category (Diploma > C# > Python)
// 2. Date within same category
'web-diploma': { category: 'Diploma', date: new Date(2023, 9, 19) },  // Shows first
'cs-oop': { category: 'C#', date: new Date(2021, 11, 13) },          // Shows second
'python-advanced': { category: 'Python', date: new Date(2023, 1, 21) }, // Shows third
```

## Customizing Category Priority

Edit `categoryPriority` in `src/data/certificates.ts`:

```typescript
const categoryPriority: Record<string, number> = {
  'Diploma': 100,        // Highest
  'Cloud': 85,           // Add new categories
  'DevOps': 80,
  'C#': 70,
  'Python': 70,
  'JavaScript': 70,
  'Database': 60,
  'Fundamentals': 50,    // Lowest
};
```

## Quick Tips

✅ **DO:**
- Set priority on your most impressive/recent achievements
- Use consistent priority values (100, 90, 80, etc.)
- Let category priority handle the rest

❌ **DON'T:**
- Set priority on every certificate (defeats the purpose)
- Use random priority values (20, 37, 82 - hard to maintain)
- Forget that higher = shown first

## Real-World Scenario

You have 4 certificates to display:
1. Full Stack Diploma (2023) - Your crowning achievement
2. DevOps Certification (2023) - Also very proud of this
3. C# Advanced (2021) - Solid foundation
4. Programming Basics (2021) - Your start

```typescript
'fullstack': { priority: 100, category: 'Diploma', date: new Date(2023, 10) },  // #1
'devops': { priority: 85, category: 'DevOps', date: new Date(2023, 5) },        // #2
'cs-advanced': { category: 'C#', date: new Date(2021, 11) },                    // #3
'basics': { category: 'Fundamentals', date: new Date(2021, 3) },                // #4
```

Result: Shows in order 1, 2, 3, 4 - exactly as you want! 🎉
