// src/components/AlbumDetail.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Button, Form } from 'react-bootstrap';
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
      <div className="d-flex flex-wrap">
        {photos.map((photo) => (
          <Card key={photo.id} style={{ width: '18rem', margin: '1rem' }}>
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
                  </Button>
                </>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default AlbumDetail;
