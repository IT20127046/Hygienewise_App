import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Summary from './dailyTasks/Summary';
import TaskList from './dailyTasks/TaskList';

const TaskRoute = () => <TaskList></TaskList>;

const SummaryRoute = () => <Summary></Summary>;

const CustomBottomNavigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'tasks', title: 'Tasks', focusedIcon: 'history'},
    { key: 'summary', title: 'Summary', focusedIcon: 'album' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    tasks: TaskRoute,
    summary: SummaryRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default CustomBottomNavigation;