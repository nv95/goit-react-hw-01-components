import PropTypes from 'prop-types';
import { FriendList, Item, Status } from './Friends.styled';

export const Friends = ({ friends }) => {
  return (
    <FriendList className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Item key={id}>
            <Status>{isOnline}</Status>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
          </Item>
        );
      })}
    </FriendList>
  );
};

Friends.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
