import axios from "./axios";

export const createImageRequest = (image) => axios.post("/upload", image);
export const getImageRequest = () => axios.get("/upload");
