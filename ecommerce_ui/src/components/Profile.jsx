export const Profile = ({ item }) => {
  return (
    <div>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Card title {item.userId}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.title}</h6>
                <p className="card-text">{item.id}</p>
            </div>
        </div>
    </div>
  );
};