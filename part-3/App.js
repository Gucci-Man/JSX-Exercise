const App = () => (
    <div>
        <Person name="Bruce" age={21} hobbies={['Reading', 'Video games', 'Board games']}/>
        <Person name="Mysterio" age={16} hobbies={['Magic', 'Flying', 'Walking']}/>
        <Person name="Natasha" age={18} hobbies={['Spying', 'Boxing', 'Sneaking']}/>
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"))