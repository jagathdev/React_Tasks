const Day1 = () => {
    return (<>
        <div>
            <h1>1. What is useState? Why use state? What is the difference between state and variable?</h1>
            <p>
                useState is a React Hook that helps us store and update data in functional components. State is like the component's memory—it remembers values even when the component refreshes.

                The main difference between state and regular variables is simple: regular variables forget their values, but state remembers them.
                I make a counter app. If I use a regular variable like let count = 0 and click a button to increase it, the count will always stay at 0. Why? Because every time React refreshes the component, it resets the variable back to 0. But if I use const [count, setCount] = useState(0), the count value stays saved. When I click the button and call setCount(count + 1), the count increases to 1, then 2, then 3, and it remembers these values.

                Another important point is that changing a regular variable doesn't update the screen. Even if the variable value changes, the user won't see it. But when we update state using the setter function, React automatically refreshes the component and shows the new value on the screen.

                Key Point: "State remembers values and updates the UI, regular variables forget values and don't update the UI."
            </p>

            <h1>2. Why React re-renders on state change?</h1>

            <p>
                React re-renders on state change because it needs to keep the UI synchronized with the data. The whole purpose of React is to make sure that what users see on the screen always matches the current state of the application.

                for example is a shopping cart. When a user adds an item to their cart, we update the cart state with setCart([...cart, newItem]). React re-renders to show the new item in the cart list and update the total price. If React didn't re-render, the user would click 'Add to Cart' but wouldn't see anything happen on the screen.

                Key Point: "React re-renders to keep the UI in sync with the data. Without re-rendering, users would see outdated information on the screen."
            </p>

            <h1>3. Why state update is async?</h1>
            <p>State updates are asynchronous means they don't happen immediately. React delays the update to improve performance.

                When you call setCount(10), React doesn't change count to 10 right away. React says 'Okay, I'll update it in a moment' and continues running your code. After collecting all the updates, React then updates everything together and re-renders once.
            </p>
            <h1>4. What happens if we mutate state?</h1>

        </div>

    </>)
};

export default Day1;
