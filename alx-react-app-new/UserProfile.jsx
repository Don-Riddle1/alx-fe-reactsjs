function UserProfile(props) {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }}>
            <h2 style={{ color: 'blue' }}>{props.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
            <p>Bio: {props.bio}</p>
        </div>
    );
}

export default UserProfile;
