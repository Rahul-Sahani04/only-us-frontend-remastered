import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../raw_components/raw_avatar";

export const AvatarComponent = ({ src, fallbackSrc, alt, size, ...props }) => {
  return (
    <Avatar size={size}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallbackSrc}</AvatarFallback>
    </Avatar>
  );
};
