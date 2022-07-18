import React, { useMemo } from 'react';
import { Redirect } from 'react-router-dom';
import { isEmpty } from 'lodash';

function PermissionWrapper({
  permits, route, component: Component, ...props
}) {
  const canViewComponent = useMemo(() => {
    let canView = false;

    if (isEmpty(permits)) {
      canView = true;
    } else {
      canView = false;
    }

    return canView;
  }, [permits]);

  return canViewComponent ? (
    <Component {...props} />
  ) : (
    <Redirect to='/dashboard' />
  );
}

export default PermissionWrapper;
