interface ProfileImageProps {
  src: string;
  alt?: string;
  size: number;
}

const ProfileImage = ({
  src,
  alt = 'user-profile-img',
  size,
}: ProfileImageProps) => {
  const defaultImg = '/avatar.svg';
  return (
    <img
      src={src || defaultImg}
      alt={alt}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        objectFit: 'cover',
      }}
      onError={(e) => {
        e.currentTarget.src = defaultImg;
      }}
    />
  );
};

export default ProfileImage;
