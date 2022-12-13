import React from 'react';
import { NavigatorLayout, Theme } from 'tuya-panel-kit';
import Page from './page';
import Home from './home';

const routers = [
  {
    id: 'page1',
    title: 'page1',
    Scene: props => <Page {...props} num={1} />,
  },
  {
    id: 'page2',
    title: 'page2',
    Scene: props => <Page {...props} num={2} />,
  },
];

class MainLayout extends NavigatorLayout {
  hookRoute(route) {
    const theRoute = routers.find(r => r.id === route.id);
    return {
      ...route,
      topbarStyle: { backgroundColor: '#ff6024' },
      topbarTextStyle: { color: '#fff' },
      showOfflineView: false, // The offline mask of the device is turned off for basic function debugging, and the production environment needs to be turned on
      title: route.id === 'main' ? 'Basic Jump Usage' : theRoute.title,
    };
  }

  renderScene(route, navigator) {
    let Scene = <Home navigator={navigator} />

    const router = routers.find(r => r.id === route.id);
    if (router && router.Scene) {
      const Component = router.Scene;
      Scene = <Component navigator={navigator} {...route} />
    }

    return Scene;
  }
}

const ThemedMainLayout = props => (
  <Theme theme={{}}>
    <MainLayout {...props} />
  </Theme>
);

export default ThemedMainLayout;