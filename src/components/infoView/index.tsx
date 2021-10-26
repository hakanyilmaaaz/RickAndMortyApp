import React, {FC} from 'react';
import {Text} from 'react-native';
import {InfoViewProps} from './infoView';
import {styles} from './style';

const InfoView: FC<InfoViewProps> = props => {
  return (
    <>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.description}>{props.description}</Text>
    </>
  );
};

export default InfoView;
