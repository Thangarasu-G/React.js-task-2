

export default function Child(props) {
  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <p><b>City:</b> {props.city}</p>
      <p><b>Age:</b> {props.age}</p>
      <p><b>Email:</b> {props.email}</p>
      <p><b>Phone:</b> {props.phone}</p>
    </div>
  );
}
