import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Avatar, ListItem, Text} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';

import server from '../services/server';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

const Status = () => {
  const [statusList, setStatusList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    server.socket.emit('request:status');

    server.socket.on('response:status', (data) => {
      console.log(data);
      setStatusList([
        {
          icon: 'thermometer-three-quarters',
          title: 'CPU Temperature',
          subtitle: data.cpuTemperature,
        },
        {
          icon: 'memory',
          title: 'Memory Usage',
          subtitle: data.memoryUsage,
        },
      ]);
      setLoading(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}
      {!loading &&
        statusList.map((status) => (
          <ListItem bottomDivider>
            <Avatar containerStyle={{alignItems: 'center'}}>
              <Icon name={status.icon} color="#AAAAAA" size={30} />
            </Avatar>
            <ListItem.Content>
              <ListItem.Title>{status.title}</ListItem.Title>
              <ListItem.Subtitle>{status.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
    </View>
  );
};

export default Status;
