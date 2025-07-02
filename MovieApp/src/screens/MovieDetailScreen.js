import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/favoritesSlice';
import { Share, Image } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
  padding: 18px;
`;

const Button = styled.TouchableOpacity`
  background: #0080ff;
  margin-top: 14px;
  padding: 12px;
  border-radius: 8px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export default function MovieDetailScreen({ route }) {
  const { movie } = route.params;
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const isFavorite = favorites.some(item => item.id === movie.id);

  const handleShare = () => {
    Share.share({
      message: `Şu filme bi göz at ${movie.title}`,
    });
  };

  return (
    <Container>
      <Image
        source={{ uri: movie.poster }}
        style={{ width: '100%', height: 350, borderRadius: 12 }}
      />
      <Title>{movie.title}</Title>
            <Text>Yıl: {movie.year}</Text>
      <Text>Puan: {movie.rating}</Text>
      <Desc>{movie.description}</Desc>

      <Button onPress={isFavorite
        ? () => dispatch(removeFavorite(movie.id))
        : () => dispatch(addFavorite(movie))}>
        <ButtonText>{isFavorite ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}</ButtonText>
      </Button>

      <Button onPress={handleShare}>
        <ButtonText>Paylaş</ButtonText>
      </Button>
    </Container>
  );
}

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-top: 14px;
`;

const Text = styled.Text`
  font-size: 15px;
  margin-top: 4px;
`;

const Desc = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  color: #555;
`;