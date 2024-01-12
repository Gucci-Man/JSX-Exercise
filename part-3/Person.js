const Person = ({age, name, hobbies}) => {
    const votingMsg = age >= 18 ? "Please go vote!" : "You must be 18.";
    const nameDisplay = name.length > 8 ? name.substring(0, 6) + '...' : name;
    return (
        <div>
            <p>Learn some information about {nameDisplay}.</p>
            <h3>{votingMsg}</h3>
            <ul>
                {hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </div>
    );
}