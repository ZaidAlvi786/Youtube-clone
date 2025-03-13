// pages/index.tsx

import { useState, ChangeEvent } from 'react';
import { TextInput, Button, Card, Text, Image } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setVideos } from '@/redux/videoSlice';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const dispatch = useDispatch();
  const videos = useSelector((state: any) => state.videos.list); // Get videos from redux store

  const handleSearch = async () => {
    try {
      const response = await axios.get('/api/youtube', {
        params: { query: searchTerm },
      });
      dispatch(setVideos(response.data.items));
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <TextInput
        label="Search Videos"
        placeholder="Search for videos..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-4"
      />
      <Button onClick={handleSearch} className="mb-4">Search</Button>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video: any) => (
          <Card key={video.id} shadow="sm" padding="lg" radius="md">
            <Card.Section>
              <Image src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            </Card.Section>
            <Text weight={500} mt="md">{video.snippet.title}</Text>
            <Text size="sm" color="dimmed">{video.snippet.description}</Text>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
