import axios from "axios";
const API = import.meta.env.VITE_API_URL;

export const fetchEvents = () => axios.get(API);
export const createEvent = (data) => axios.post(API, data);
export const deleteEvent = (id) => axios.delete(`${API}/${id}`);
export const updateEvent = (id, data) => axios.put(`${API}/${id}`, data);
