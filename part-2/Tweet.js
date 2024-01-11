const Tweet = (props) => {
    return (
        <div className="text-style">
            <p>Username: {props.username}</p>
            <p>Name: {props.name}</p>
            <p>Date: {props.date}</p>
            <p>Message: {props.message}</p>
        </div>
    );
}