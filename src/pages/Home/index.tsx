/* eslint-disable react/no-array-index-key */
import React from 'react';
import { SafeAreaView } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import {
  Container,
  RecipeBackground,
  MenuBar,
  Back,
  Text,
  MainRecipe,
  Divider,
  Button,
  RecipesContainer,
  Recipes,
  Recipe,
  RecipeImage,
  RecipeInfo,
} from './styles';

const Home: React.FC = () => {
  const recipes = [
    {
      name: 'Pad Thai',
      info: '45 min | 2 servings',
      image:
        'https://dailycristina.com/wp-content/uploads/2018/04/pad-thai-receita-tailandia.jpg',
    },
    {
      name: 'Seared Scallops with Romesco Sauce',
      info: '20 min | 4 servings',
      image: 'https://feedmephoebe.com/wp-content/uploads/2014/05/IMG_0953.jpg',
    },
    {
      name: 'Grilled Chicken with Lemon Butter',
      info: '60 min | 2 servings',
      image:
        'https://i2.wp.com/gimmedelicious.com/wp-content/uploads/2019/12/Garlic-Butter-Chicken-2.jpg',
    },
    {
      name: 'Pad Thai',
      info: '45 min | 2 servings',
      image:
        'https://dailycristina.com/wp-content/uploads/2018/04/pad-thai-receita-tailandia.jpg',
    },
    {
      name: 'Seared Scallops with Romesco Sauce',
      info: '20 min | 4 servings',
      image: 'https://feedmephoebe.com/wp-content/uploads/2014/05/IMG_0953.jpg',
    },
    {
      name: 'Grilled Chicken with Lemon Butter',
      info: '60 min | 2 servings',
      image:
        'https://i2.wp.com/gimmedelicious.com/wp-content/uploads/2019/12/Garlic-Butter-Chicken-2.jpg',
    },
    {
      name: 'Pad Thai',
      info: '45 min | 2 servings',
      image:
        'https://dailycristina.com/wp-content/uploads/2018/04/pad-thai-receita-tailandia.jpg',
    },
    {
      name: 'Seared Scallops with Romesco Sauce',
      info: '20 min | 4 servings',
      image: 'https://feedmephoebe.com/wp-content/uploads/2014/05/IMG_0953.jpg',
    },
    {
      name: 'Grilled Chicken with Lemon Butter',
      info: '60 min | 2 servings',
      image:
        'https://i2.wp.com/gimmedelicious.com/wp-content/uploads/2019/12/Garlic-Butter-Chicken-2.jpg',
    },
  ];

  return (
    <Container>
      <RecipeBackground
        source={{
          uri:
            'https://www.simplywhisked.com/wp-content/uploads/2012/11/Moroccan-Shrimp-3.jpg',
        }}
      >
        <SafeAreaView>
          <MenuBar>
            <Back>
              <Icon name="arrowleft" size={24} color="#FFF" />
              <Text style={{ marginLeft: 10 }}>Ingredients</Text>
            </Back>
            <Icon name="heart" size={24} color="#FFF" />
          </MenuBar>
          <MainRecipe>
            <Text title heavy>
              Spicy Shrimp
            </Text>
            <Divider />
            <Text bold>80 calories per 100g</Text>
            <Text>3g fat | 10g protein | 8g carbs</Text>
          </MainRecipe>
          <Button>
            <Text bold small>
              LEARN MORE
            </Text>
          </Button>
        </SafeAreaView>
      </RecipeBackground>
      <RecipesContainer showsVerticalScrollIndicator={false}>
        <Text dark bold large>
          Recipes
        </Text>
        <Text dark small>
          18 recipes available
        </Text>
        <Recipes>
          {recipes.map((recipe, index) => {
            return (
              <Recipe key={`${index}`}>
                <RecipeImage source={{ uri: recipe.image }} />
                <RecipeInfo>
                  <Text dark bold>
                    {recipe.name}
                  </Text>
                  <Text dark small>
                    {recipe.info}
                  </Text>
                </RecipeInfo>
                <Icon name="hearto" size={18} color="#000" />
              </Recipe>
            );
          })}
        </Recipes>
      </RecipesContainer>
    </Container>
  );
};

export default Home;
