// src/components/UserList.js
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchUsers, fetchAlbumsByUser } from '../services/api';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userRes = await fetchUsers();
      setUsers(userRes.data);

      const albumRes = await fetchAlbumsByUser();
      setAlbums(albumRes.data);
    };

    fetchData();
  }, []);

  const getAlbumCount = (userId) => albums.filter((album) => album.userId === userId).length;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Albums</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td><Link to={`/user/${user.id}`}>{user.name}</Link></td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{getAlbumCount(user.id)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserList;
