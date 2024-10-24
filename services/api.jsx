// src/services/api.js
import axios from 'axios';

// Create an instance of Axios
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// Function to fetch users
export const fetchUsers = () => api.get('/users');

// Function to fetch a user by ID
export const fetchUserById = (id) => api.get(`/users/${id}`);

// Function to fetch albums by user ID
export const fetchAlbumsByUser = (userId) => api.get(`/albums?userId=${userId}`);

// Function to fetch photos by album ID
export const fetchPhotosByAlbum = (albumId) => api.get(`/photos?albumId=${albumId}`);

// Function to fetch a photo by ID
export const fetchPhotoById = (id) => api.get(`/photos/${id}`);

// Function to update a photo's title
export const updatePhotoTitle = (id, title) => api.put(`/photos/${id}`, { title });

export default api;
