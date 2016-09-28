import { isAuthenticated } from 'src/core/auth';
import App from './app';
import Tasks from './pages/tasks';
import About from './pages/about';


export const paths = {
  ROOT: '/',
  SIGN_IN: '/about',
  TASKS: '/',
  ABOUT: '/about'
};


const requireAuth = getState => {
  return (nextState, replace) => {
    if (!isAuthenticated(getState())) {
      replace(paths.ABOUT);
    }
  };
};

const requireUnauth = getState => {
  return (nextState, replace) => {
    if (isAuthenticated(getState())) {
      replace(paths.TASKS);
    }
  };
};

export const getRoutes = getState => {
  return {
    path: paths.ROOT,
    component: App,
    childRoutes: [
      {
        indexRoute: {
          component: Tasks,
          onEnter: requireAuth(getState)
        }
      },
      {
        path: paths.About,
        component: About,
        onEnter: requireUnauth(getState)
      },
      {
        path: paths.ABOUT,
        component: About
      }
    ]
  };
};
