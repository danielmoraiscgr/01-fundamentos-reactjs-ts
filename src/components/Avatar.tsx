import styles from './Avatar.module.css';
import { ImgHTMLAttributes} from 'react'

interface AvatarProps {
    hasBorder?: boolean;
    src: string;
    alt: string;
}
export function Avatar({ hasBorder = true, ...props}: AvatarProps) {

    return (
        <img 
          className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
          {...props}
          />
    )
}