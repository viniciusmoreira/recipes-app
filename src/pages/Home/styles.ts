import styled from 'styled-components/native';

interface TextProps {
  dark?: boolean;
  title?: boolean;
  large?: boolean;
  small?: boolean;
  bold?: boolean;
  heavy?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const RecipeBackground = styled.ImageBackground`
  width: 100%;
`;

export const MenuBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 16px 16px;
`;

export const Back = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text<TextProps>`
  color: ${({ dark }) => (dark ? '#000' : '#FFF')};
  font-family: 'RobotoSlab-Regular';

  /* eslint-disable-next-line */
  ${({ title, large, small }) => {
    if (title) return `font-size: 32px`;
    if (large) return `font-size: 20px`;
    if (small) return `font-size: 13px`;
    return null;
  }}

  ${({ bold, heavy }) => {
    if (bold) return `font-family: 'RobotoSlab-Bold'`;
    if (heavy) return `font-family: 'RobotoSlab-Medium'`;
    return null;
  }}
`;

export const MainRecipe = styled.View`
  padding: 0 32px;
  margin: 200px 0 32px 0;
`;

export const Divider = styled.View`
  border-bottom-color: #fff;
  border-bottom-width: 2px;
  width: 150px;
  margin: 8px 0;
`;

export const Button = styled.TouchableOpacity`
  margin: 0 0 48px 32px;
  background-color: rgba(255, 255, 255, 0.3);
  align-self: flex-start;
  padding: 5px 18px;
  border-radius: 100px;
`;

export const RecipesContainer = styled.ScrollView`
  margin-top: -24px;
  padding: 16px 32px;
  background-color: #fff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

export const Recipes = styled.View`
  margin-top: 16px;
`;

export const Recipe = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const RecipeImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 8px;
`;

export const RecipeInfo = styled.View`
  flex: 1;
  margin-left: 12px;
`;
