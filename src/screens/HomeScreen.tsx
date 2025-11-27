import { View } from 'react-native';
import Counter from '../components/Counter';
import { useAppSelector } from '../hooks/hooks';
import { DarkTheme, LightTheme } from '../theme/appTheme';

export default function HomeScreen() {
  // Get current theme mode from Redux
  const mode = useAppSelector(state => state.theme.mode);
  const theme = mode === 'light' ? LightTheme : DarkTheme;
  return (
    <View style={[{ backgroundColor: theme.background, flex: 1 }]}>
      <Counter />
    </View>
  );
}
