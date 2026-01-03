const Home = () => {
    return (
        <div className="p-6 space-y-8">
            <h1 className="text-3xl font-bold text-center">React Tasks – Practice Dashboard</h1>

            {/* ---------- DAY 1 ---------- */}
            <section className="border p-5 rounded-lg">
                <h2 className="text-xl font-bold text-blue-600 mb-3">
                    🟢 DAY 1 – useState + Rendering
                </h2>

                <h3 className="font-semibold mb-2">🔧 TASKS</h3>

                {/* 🔥 CHANGED TO ORDERED LIST */}
                <ol className="list-decimal ml-6 space-y-1">
                    <li>Counter App – Increment / Decrement / Reset</li>
                    <li>Render users list using map()</li>
                    <li>Toggle Login / Logout</li>
                    <li>Update profile object (name, age)</li>
                    <li>Conditional rendering (Admin / User)</li>
                    <li>Like button</li>
                    <li>Change background on click</li>
                    <li>Add / Remove item in array</li>
                    <li>Disable button after click</li>
                    <li>Simple form input using state</li>
                </ol>

                <h3 className="font-semibold mt-4 mb-2">🎤 INTERVIEW QUESTIONS (15)</h3>
                <ol className="list-decimal ml-6 space-y-1">
                    <li>What is useState?</li>
                    <li>Why React re-renders on state change?</li>
                    <li>State vs normal variable</li>
                    <li>Why state update is async?</li>
                    <li>What happens if we mutate state?</li>
                    <li>How React identifies state change?</li>
                    <li>Why spread operator in state?</li>
                    <li>Can we store object in useState?</li>
                    <li>Can we store array in useState?</li>
                    <li>What is conditional rendering?</li>
                    <li>Difference: && vs ternary</li>
                    <li>What happens if key is missing in map?</li>
                    <li>Why key should be unique?</li>
                    <li>Can state be passed to child?</li>
                    <li>What is single source of truth?</li>
                </ol>
            </section>

            {/* ---------- DAY 2 ---------- */}
            <section className="border p-5 rounded-lg">
                <h2 className="text-xl font-bold text-yellow-600 mb-3">
                    🟡 DAY 2 – useRef + DOM Control
                </h2>

                <h3 className="font-semibold mb-2">🔧 TASKS</h3>

                {/* 🔥 CHANGED TO ORDERED LIST */}
                <ol className="list-decimal ml-6 space-y-1">
                    <li>Focus input on button click</li>
                    <li>Clear input using ref</li>
                    <li>Auto-save input to localStorage</li>
                    <li>Theme change using ref + Tailwind</li>
                    <li>Scroll to top button</li>
                    <li>Change font size using ref</li>
                    <li>Video play / pause using ref</li>
                    <li>Count clicks without re-render</li>
                    <li>Read input without state</li>
                    <li>Show / Hide element using ref</li>
                </ol>

                <h3 className="font-semibold mt-4 mb-2">🎤 INTERVIEW QUESTIONS (15)</h3>
                <ol className="list-decimal ml-6 space-y-1">
                    <li>What is useRef?</li>
                    <li>Does useRef cause re-render?</li>
                    <li>useRef vs useState</li>
                    <li>What is ref.current?</li>
                    <li>Can useRef store any value?</li>
                    <li>Why useRef is mutable?</li>
                    <li>When should we avoid useState?</li>
                    <li>Can useRef access DOM?</li>
                    <li>Is useRef reactive?</li>
                    <li>useRef vs getElementById</li>
                    <li>Can we use multiple refs?</li>
                    <li>useRef in forms</li>
                    <li>Real-time use cases</li>
                    <li>UseRef with Tailwind</li>
                    <li>Can useRef replace useState?</li>
                </ol>
            </section>

            {/* ---------- DAY 3 ---------- */}
            <section className="border p-5 rounded-lg">
                <h2 className="text-xl font-bold text-blue-800 mb-3">
                    🔵 DAY 3 – useEffect + Side Effects
                </h2>

                <h3 className="font-semibold mb-2">🔧 TASKS</h3>

                {/* 🔥 CHANGED TO ORDERED LIST */}
                <ol className="list-decimal ml-6 space-y-1">
                    <li>Log on component mount</li>
                    <li>Timer with cleanup</li>
                    <li>Fetch API and render list</li>
                    <li>Dependency-based effect</li>
                    <li>Cleanup example</li>
                    <li>Scroll event listener</li>
                    <li>Window resize listener</li>
                    <li>Auto-focus on load</li>
                    <li>Change title using effect</li>
                    <li>localStorage sync with effect</li>
                </ol>

                <h3 className="font-semibold mt-4 mb-2">🎤 INTERVIEW QUESTIONS (15)</h3>
                <ol className="list-decimal ml-6 space-y-1">
                    <li>What is useEffect?</li>
                    <li>Why side effects?</li>
                    <li>When does useEffect run?</li>
                    <li>[] vs no dependency</li>
                    <li>What is cleanup?</li>
                    <li>Why cleanup is needed?</li>
                    <li>useEffect vs componentDidMount</li>
                    <li>Multiple useEffects?</li>
                    <li>Incorrect dependency issues</li>
                    <li>Infinite loop in useEffect</li>
                    <li>Why API call in useEffect?</li>
                    <li>useEffect + localStorage</li>
                    <li>useEffect vs useLayoutEffect</li>
                    <li>Is useEffect async?</li>
                    <li>Best practices</li>
                </ol>
            </section>

            {/* ---------- DAY 4 ---------- */}
            <section className="border p-5 rounded-lg">
                <h2 className="text-xl font-bold text-purple-700 mb-3">
                    🟣 DAY 4 – Components + Mini Projects
                </h2>

                <h3 className="font-semibold mb-2">🔧 TASKS</h3>

                {/* 🔥 CHANGED TO ORDERED LIST */}
                <ol className="list-decimal ml-6 space-y-1">
                    <li>Parent → Child props passing</li>
                    <li>Child → Parent callback</li>
                    <li>Container vs Presentational component</li>
                    <li>Reusable Button component</li>
                    <li>Card component rendering list</li>
                    <li>Modal show/hide</li>
                    <li>Theme switcher</li>
                    <li>Counter component</li>
                    <li>Form with validation</li>
                    <li>Mini Todo App</li>
                </ol>

                <h3 className="font-semibold mt-4 mb-2">🎤 INTERVIEW QUESTIONS (15)</h3>
                <ol className="list-decimal ml-6 space-y-1">
                    <li>What is a component?</li>
                    <li>Functional vs Class component</li>
                    <li>Props vs State</li>
                    <li>Can child update parent?</li>
                    <li>What is lifting state up?</li>
                    <li>Presentational vs Container</li>
                    <li>Reusable components</li>
                    <li>Why reuse components?</li>
                    <li>What is prop drilling?</li>
                    <li>How to avoid prop drilling?</li>
                    <li>Component re-render reasons</li>
                    <li>Keys in list</li>
                    <li>Controlled vs Uncontrolled</li>
                    <li>React folder structure</li>
                    <li>How React starts rendering?</li>
                </ol>
            </section>
        </div>
    );
};

export default Home;
