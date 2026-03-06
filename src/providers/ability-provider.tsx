'use client';

import { AbilityContext } from '@/configs/AbilityContext';
import { buildAbilityFor } from '@/configs/acl';
import useProfileStore from '@/stores/profile';
import FallbackSpinner from '@/components/common/loading';
import { useEffect, useState } from 'react';

export default function AbilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const role_code = useProfileStore((state) => state.role_code);
  const [isReady, setIsReady] = useState(false);
  const ability = buildAbilityFor(role_code);

  useEffect(() => {
    // Wait for role_code to be loaded before rendering
    if (role_code !== null) {
      setIsReady(true);
    }
  }, [role_code]);

  // Show loading while waiting for profile
  if (!isReady) {
    return <FallbackSpinner />;
  }

  return (
    <AbilityContext.Provider value={ability}>
      {children}
    </AbilityContext.Provider>
  );
}
