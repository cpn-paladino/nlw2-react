import React from "react";
import { View, Image, Text } from "react-native";

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              "https://avatars3.githubusercontent.com/u/22564040?s=460&u=e3b7d24311a454479a5b80a90691bbb33064fa1a&v=4",
          }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Christopher Paladino</Text>
          <Text style={styles.subject}>Quimica</Text>
        </View>
      </View>
      <Text style={styles.bio}>
          Entusiasta das melhores tecnologias.
          {'\n'}{'\n'}
          Apaixonado por novos desafios
      </Text>

      <View style={styles.footer}>
          <Text style={styles.price}>
              Preço/hora {'   '}
              <Text style={styles.priceValue}>R$ 20,00</Text>
          </Text>

          <View style={styles.buttonsContainer}>
                <RectButton style={styles.favoriteButton}>
                    <Image source={heartOutlineIcon}></Image>
                </RectButton>
                <RectButton style={styles.contactButton}>
                    <Image source={whatsappIcon}></Image>
                    <Text style={styles.contactButtonText}>
                        Entrar em contato
                    </Text>
                </RectButton>

                <RectButton style={styles.favoriteButton}>
                    <Image source={heartOutlineIcon}></Image>
                </RectButton>
                
          </View>          
      </View>          
    </View>
  );
}

export default TeacherItem;
