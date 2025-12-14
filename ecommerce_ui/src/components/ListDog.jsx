import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
EditOutlined,
EllipsisOutlined,
SettingOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

export const ListDog = () => {
  const navigate = useNavigate();
  const [param, setParam] = useState({
    page: 1,
    limit: 5,
  });
  const [data, setData] = useState(null);

  const handleChangePage = (step) => {
    setParam((prevParam) => ({
      ...prevParam,
      page: Math.max(1, prevParam.page + step),
    }));
  };

  const handleSettingClick = (id) => {
    navigate(`/profile/${id}`);
  };

  useEffect(() => {
    fetch(
      `https://dragonball-api.com/api/characters?page=${param.page}&limit=${param.limit}`,
    )
      .then((response) => response.json())
      .then((json) => {
      console.log(json);
      setData(json.items);
    });
  }, [param]);

  if (!data) return <div>Loading...</div>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {data.map((item) => (
        <Card>
          style={{ width: 300 }}
          cover={
            <img
              style={{ maxHeight: "30rem" }}
              draggable={false}
              alt="example"
              src={item.image}
            />
          }
          actions={[
            <SettingOutlined
              key="setting"
              onClick={() => handleSettingClick(item.id)}
            />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
          <Meta
            title={item.name}
            description={handleLimitCharacter(item.description, 100)}
          />
        </Card>
      ))}
      <button onClick={() => handleChangePage(-1)}>Prev Page</button>
      <button onClick={() => handleChangePage(1)}>Next Page</button>
    </div>
  );
};

export default ListDog;
