// src/components/PhotoDetail.js
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { fetchPhotoById, updatePhotoTitle } from '../services/api';

const PhotoDetail = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState({});
  const [title, setTitle] = useState('');

  useEffect(() => {
    const fetchPhoto = async () => {
      const res = await fetchPhotoById(id);
      setPhoto(res.data);
      setTitle(res.data.title);
    };

    fetchPhoto();
  }, [id]);

  const handleSave = async () => {
    await updatePhotoTitle(id, title);
  };

  return (
    <div>
      <h1>Edit Photo</h1>
      <Form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSave}>Save</Button>
      </Form>
    </div>
  );
};

export default PhotoDetail;
