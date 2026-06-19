side_quests/2026_06
    > react docs "synchronizing with effects"
        DONE side_quests/2026_06/useeffect01
            https://react.dev/learn/synchronizing-with-effects
            CI=true npm create vite@latest useeffect01 -- --template react && cd useeffect01 && npm install && npm run dev
            see App.jsx in that folder for work and notes
        WIP side_quests/2026_06/useeffect02
            https://react.dev/learn/synchronizing-with-effects
            CI=true npm create vite@latest useeffect02 -- --template react && cd useeffect02 && npm install && npm run dev
    > build a github user search from scratch
    > frontend mentor   
        their free challenges (e.g. IP Address Tracker, REST Countries) give you a real UI where you have to decide: "does this fetch go in a click handler or in useEffect?" That decision point is exactly what your notes are drilling.
    > useState functional updates + stale closures
        Advent of Frontend or typeHero — both have short isolated puzzles. Search for "stale closure" or "functional update" problems. The failure mode you hit today (batched clicks not accumulating) is a classic one worth seeing a second time in a different context.

    > revisit these original AI suggestions that precepitated this side quest
        Based on your notes and challenges, you've been focused on: useEffect (rules, async patterns, cleanup, the ignore flag), useState (functional updates), and side effect classification. Here are targeted places to reinforce each:

        useEffect + async data fetching (your hardest struggle in this session)

        React docs "Synchronizing with Effects" — it has inline quizzes and the exact ignore flag pattern you just saw. The "You Might Not Need an Effect" page is also worth reading back-to-back with your notes.
        Build a GitHub user search from scratch — same shape as the HackerNews challenge (search input → fetch → paginate), but no scaffolding. Forces you to reach for the ignore flag on your own.
        Side effect classification (Rule 0 / 1 / 2 from your notes)

        Frontend Mentor — their free challenges (e.g. IP Address Tracker, REST Countries) give you a real UI where you have to decide: "does this fetch go in a click handler or in useEffect?" That decision point is exactly what your notes are drilling.
        useState functional updates + stale closures

        Advent of Frontend or typeHero — both have short isolated puzzles. Search for "stale closure" or "functional update" problems. The failure mode you hit today (batched clicks not accumulating) is a classic one worth seeing a second time in a different context.
        Everything together

        Continue on react.gg — you're clearly mid-course. The progression from useState → useEffect → the HackerNews challenge is the right order, and you're right at the hardest inflection point. The next challenges will likely introduce useReducer and useContext, which will make the state patterns click even more.
        The single highest-leverage thing: rebuild the HackerNews challenge from a blank file without looking at the solution. You'll know you've internalized it when the ignore flag feels obvious rather than surprising.