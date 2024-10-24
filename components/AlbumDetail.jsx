import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Button, Form, Row, Col } from 'react-bootstrap';
import { fetchPhotosByAlbum, updatePhotoTitle } from '../services/api';

const AlbumDetail = () => {
  const { id } = useParams(); // Get album ID from route params
  const [photos, setPhotos] = useState([]); // Store photos of the album
  const [editPhotoId, setEditPhotoId] = useState(null); // Track the photo being edited
  const [newTitle, setNewTitle] = useState(''); // Store the new title input

  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await fetchPhotosByAlbum(id);
      setPhotos(res.data);
    };

    fetchPhotos();
  }, [id]);

  // Handle the submission of the updated title
  const handleTitleUpdate = async (photoId) => {
    try {
      await updatePhotoTitle(photoId, newTitle); // Send PUT request
      // Update the title in the local state to reflect the change immediately
      setPhotos((prevPhotos) =>
        prevPhotos.map((photo) =>
          photo.id === photoId ? { ...photo, title: newTitle } : photo
        )
      );
      setEditPhotoId(null); // Exit edit mode
      setNewTitle(''); // Reset the input field
    } catch (error) {
      console.error('Failed to update title', error);
    }
  };

  return (
    <Container>
      <h1>Photos</h1>
      <Row>
        {photos.map((photo) => (
          <Col key={photo.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className='h-100' style={{ width: '100%' }}>
              <Card.Img variant="top" src={photo.url} />
              <Card.Body>
                {editPhotoId === photo.id ? (
                  <>
                    <Form.Group controlId={`editPhoto-${photo.id}`}>
                      <Form.Label>Edit Title</Form.Label>
                      <Form.Control
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      onClick={() => handleTitleUpdate(photo.id)}
                    >
                      Save
                    </Button>
                    <Button
                      variant="secondary"
                      className="ml-2"
                      onClick={() => setEditPhotoId(null)}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Card.Title>{photo.title}</Card.Title>
                    <Button
                      variant="warning"
                      onClick={() => {
                        setEditPhotoId(photo.id); // Enter edit mode for this photo
                        setNewTitle(photo.title); // Set initial value for input
                      }}
                      >
                      Edit Title 
                      <span > &nbsp;&nbsp;
                        <i className="fa fa-edit" />
                      </span>
                    </Button>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AlbumDetail;
