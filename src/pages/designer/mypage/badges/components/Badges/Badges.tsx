import { BadgeWrapper, BadgeImage, BadgeTitle } from "./Badges.styles";

export interface BadgesProps {
  src: string;
  title: string;
  onClick?: () => void; 
}

export function Badges({ src, title, onClick }: BadgesProps) {
  return (
    <div onClick={onClick} >
      <BadgeWrapper>
        <BadgeImage src={src} alt={title} />
      </BadgeWrapper>
      <BadgeTitle>{title}</BadgeTitle>
    </div>
  );
}
