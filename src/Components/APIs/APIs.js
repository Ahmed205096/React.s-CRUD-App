import { useEffect, useState } from "react";
import axios from "axios";

const url = "http://localhost:2000/products";
export function GetAPI() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return products;
}

export function PostAPI(props) {
  axios.post(url, {
    title: props.title,
    price: props.price,
    image: props.image,
    category: "eee",
    description: props.description,
    rating: {
      rate: props.rating,
      count: 100,
    },
  });
}

export function DeleteAPI(id) {
    axios.delete(url+`/${id}`);
}
