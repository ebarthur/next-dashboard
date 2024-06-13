import React from 'react';
import Avatar from 'boring-avatars';

type User = {
  username: any;
};

export const UserProfile = ({ user }: { user: User }) => {
  return (
    <div>
      <Avatar
        size={30}
        name={user.username}
        variant="bauhaus"
        colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
      />
    </div>
  );
};
