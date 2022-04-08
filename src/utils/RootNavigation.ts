import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params?: Object) {
  navigationRef.dispatch(
    CommonActions.navigate({
      name: name,
      params: params,
    }),
  );
}
