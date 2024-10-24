// src/pages/HomePage.js
import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchUsers, fetchAlbumsByUser } from '../services/api'; // Import API functions

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users and albums from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch users and albums
        const usersResponse = await fetchUsers();
        const albumsResponse = await Promise.all(
          usersResponse.data.map(user => fetchAlbumsByUser(user.id))
        );
        const allAlbums = albumsResponse.flatMap(response => response.data);

        setUsers(usersResponse.data);
        setAlbums(allAlbums);
        setLoading(false);
      } catch (error) {
        setError('Failed to load data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Get the number of albums for a user
  const getAlbumCount = (userId) => {
    return albums.filter((album) => album.userId === userId).length;
  };

  // Render the loading spinner
  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
        <p>Loading...</p>
      </Container>
    );
  }

  // Render the error message
  if (error) {
    return (
      <Container className="text-center mt-5">
        <p>{error}</p>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Users</h1>
      <Row>
        {users.map((user) => (
          <Col md={4} key={user.id} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`} // User image using RoboHash
                alt={`${user.name}'s avatar`}
              />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                  Username: {user.username} <br />
                  Email: {user.email} <br />
                  Albums: {getAlbumCount(user.id)}
                </Card.Text>
                <Link to={`/user/${user.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;

