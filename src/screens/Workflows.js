import React, {useCallback, useMemo} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StyleSheet, View} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';

import server from '../services/server';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
});

const Status = () => {
  const workflows = useMemo(
    () => [
      {
        icon: 'undo',
        title: 'Restart',
        subtitle: 'Reboot your raspberry pi',
        action: 'request:workflow:restart',
      },
    ],
    [],
  );

  const requestWorkflow = useCallback((workflow) => {
    server.socket.emit(workflow.action);
  }, []);

  return (
    <View style={styles.container}>
      {workflows.map((workflow) => (
        <ListItem bottomDivider onPress={() => requestWorkflow(workflow)}>
          <Avatar containerStyle={{alignItems: 'center'}}>
            <Icon name={workflow.icon} color="#AAAAAA" size={30} />
          </Avatar>
          <ListItem.Content>
            <ListItem.Title>{workflow.title}</ListItem.Title>
            <ListItem.Subtitle>{workflow.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};

export default Status;
