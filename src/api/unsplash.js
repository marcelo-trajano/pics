import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 1yfdKdgA0H1u9pRjdd5at9smN1f9xi6VD5AZf9ro2ZY",
  },
});
