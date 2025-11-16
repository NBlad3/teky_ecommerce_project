import { useEffect, useState } from "react";
import { Profile } from "./Profile";

function ListProfile() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <div />;

  return (
    <div>
      {data.map((item) => <Profile key={item.id} item={item} />)}
    </div>
  );
}

export default ListProfile;