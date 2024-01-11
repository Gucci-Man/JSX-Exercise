const App = () => (
    <div>
        <Tweet username="Batman" name="Bruce" date="03-10-23" message="I rule Gotham!"/>
        <Tweet username="Robin" name="Dick" date="10-11-22" message="Batman Smells!"/>
        <Tweet username="Joker" name="John Doe" date="05-05-22" message="Robin laid an egg!"/>
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"))