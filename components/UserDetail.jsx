// src/components/UserDetail.js
import  { useEffect, useState } from 'react';
import { useParams,Link  } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { fetchUserById, fetchAlbumsByUser } from '../services/api';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userRes = await fetchUserById(id);
      setUser(userRes.data);

      const albumRes = await fetchAlbumsByUser(id);
      setAlbums(albumRes.data);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h1>{user.name}</h1>
      <ListGroup>
        {albums.map((album) => (
          <ListGroup.Item key={album.id}>
             <Link to={`/album/${album.id}`}>{album.title}</Link> 
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default UserDetail;
