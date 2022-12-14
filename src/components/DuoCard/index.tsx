import { Text, TouchableOpacity, View } from 'react-native';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';
import { styles } from './styles';
import {GameController} from 'phosphor-react-native';

export interface DuoProps {
  id: string,
  hourEnd: string,
  hourStart: string,
  name: string,
  useVoiceChannel: boolean,
  weekDays: string[],
  yaearPlayer: number,
}

interface Props {
  data: DuoProps,
  onConnect: () => void,
}

export function DuoCard({data, onConnect}: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label='Nome' value={data.name} />
      <DuoInfo label='Tempo de Jogo' value={`${data.yaearPlayer} anos`} />
      <DuoInfo label='Disponibilidade' value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`} />
      <DuoInfo label='Chamada de aúdio' value={data.useVoiceChannel ? "Sim": "Não"}  colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT} />
      <TouchableOpacity onPress={onConnect} style={styles.button}><GameController color={THEME.COLORS.TEXT} size={20} /><Text style={styles.buttonTitle}>Conectar</Text></TouchableOpacity>  
    </View>
  );
}