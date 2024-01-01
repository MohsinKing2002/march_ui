import { sessionActions } from '@/redux/reducer/session';
import { navigationActions } from '@/redux/reducer/navigation';

// Actions from SessionReducer
export const { loadingStart, loadingStop, login, logout, signup, navbarToggle } = sessionActions;
// Actions from Nav Reducer
export const { setCollapsed, setActiveRoute } = navigationActions;
