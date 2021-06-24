import React, { ReactNode } from "react";
import { 
  View, 
  Modal, 
  ModalProps,
  TouchableNativeFeedback
} from "react-native";

import { styles } from './styles'

import { Background } from '../Background'

type Props = ModalProps & {
  children: ReactNode
  closeModal: () => void
}

export function ModalView({ children, closeModal, ...rest } : Props) {
  return (
    <Modal 
      transparent
      animationType='slide'
      statusBarTranslucent
      {...rest}
    >
      <TouchableNativeFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableNativeFeedback>
    </Modal>
  )
}