
import Child from "./Child.jsx";
import "./App.css";

export default function App() {

  const users = [
    {
      name: "Thangarasu G",
      city: "Namakkal",
      age: 25,
      email: "thangarasu@gmail.com",
      phone: "9876543210"
    },
    {
      name: "Gowtham Bharathi T",
      city: "Salem",
      age: 25,
      email: "gowtham@gmail.com",
      phone: "9876543211"
    },
    {
      name: "Suriya M",
      city: "Salem",
      age: 26,
      email: "suriya@gmail.com",
      phone: "9876543212"
    },
    {
      name: "Kavi",
      city: "Salem",
      age: 21,
      email: "kavi@gmail.com",
      phone: "9876543213"
    },
    {
      name: "Ajith",
      city: "Trichy",
      age: 25,
      email: "ajith@gmail.com",
      phone: "9876543214"
    }
  ];

  return (
    <div className="container">
      <h1>User Details</h1>

      <div className="user-container">
        {users.map((user, index) => (
          <Child
            key={index}
            name={user.name}
            city={user.city}
            age={user.age}
            email={user.email}
            phone={user.phone}
          />
        ))}
      </div>

    </div>
  );
}

