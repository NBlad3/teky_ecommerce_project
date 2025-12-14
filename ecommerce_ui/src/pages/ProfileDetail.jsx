import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProfileDetail() {
  const { idProfile } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${idProfile}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [idProfile]);

  if (!data) return null;

  return (
    <div>Pro&ileDetail</div>
  );
}

export default ProfileDetail;
