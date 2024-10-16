import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const useGif = (tag) => {
    const API_KEY = 'dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW';
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(true);

    async function fetchGif() {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const response = await axios.get(tag ? url + `&tag=${tag}` : url);
        setGif(response.data.data.images.downsized_large.url);
        setLoading(false);
    }

    useEffect(() => {
        fetchGif()
    }, [])

    return { gif, loading, fetchGif }

}

export default useGif
