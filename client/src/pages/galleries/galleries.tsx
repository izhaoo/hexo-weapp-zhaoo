import { useState, useEffect } from 'react';
import { View } from '@tarojs/components';
import GalleryItem from '@/components/gallery-item';
import { getGalleries } from '@/apis/api';
import { IGalleryItem } from '@/types/gallery';
import './galleries.scss';

const Galleries = () => {
  const [galleries, setGalleries] = useState<IGalleryItem[]>([]);

  useEffect(() => {
    fetchGalleriesData();
  }, []);

  const fetchGalleriesData = async () => {
    const res = await getGalleries();
    setGalleries(res);
  };

  return (
    <View className='galleries'>
      {galleries.length > 0
        ? galleries.map((item, index: number) => (
            <GalleryItem data={item} key={index} />
          ))
        : null}
    </View>
  );
};

export default Galleries;
