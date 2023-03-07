import PropTypes from 'prop-types';
import {
  UserCard,
  Description,
  Img,
  Name,
  Tag,
  Location,
  Stats,
  Label,
  Item,
  Quantity,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <UserCard>
      <Description>
        <Img src={avatar} alt={avatar} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        {Object.keys(stats).map(key => {
          return (
            <Item key={key}>
              <Label>{key}</Label>
              <Quantity>{stats[key]}</Quantity>
            </Item>
          );
        })}
      </Stats>
    </UserCard>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
