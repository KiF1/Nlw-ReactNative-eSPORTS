import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native';
import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';
import * as Clipboard from 'expo-clipboard';
import { useState } from 'react';

interface Props extends ModalProps{
    discord: string;
    onClose: () => void;
}

export function DuoMatch({discord, onClose, ...rest}: Props) {

const [isCopping, setCoping] = useState(false);

async function handleCopyDiscordToClipboard(){
  setCoping(true);
  await Clipboard.setStringAsync(discord);
  Alert.alert('Discord Copiado!', 'Usúario disponivel para colar no Discord');
  setCoping(false);
}

  return (
    <Modal transparent animationType='fade' statusBarTranslucent {...rest}>
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
          <MaterialIcons name='close' size={20} color={THEME.COLORS.CAPTION_500} />
        </TouchableOpacity>
        <CheckCircle size={64} color={THEME.COLORS.SUCCESS} />
        <Heading title='Lets Play' subtitle='Agora é só começar a jogar' style={{alignItems: 'center', marginTop: 24}} />
        <Text style={styles.label}>Adicione seu Discord</Text>
        <TouchableOpacity style={styles.discordButton} onPress={handleCopyDiscordToClipboard} disabled={isCopping}>
        <Text style={styles.discord}>{isCopping ? <ActivityIndicator color={THEME.COLORS.SUCCESS} /> : discord}</Text>
        </TouchableOpacity>
      </View>
    </View>
    </Modal>
  );
}