import '../styles/repositories.scss';
import { GoMarkGithub } from "react-icons/go";

interface RepositoryAvatarProps {
    profile: {
        login: string;
        avatar_url: string;
        html_url: string;
        name: string;
    }
}

export function RepositoryAvatar(props: RepositoryAvatarProps) {
    return (
        <div className="profile">
            <h1><strong>{props.profile.name}</strong></h1>
            <img src={props.profile.avatar_url} alt="avatar-img" />
            <p>{props.profile.login} - <a href={props.profile.html_url}>GitHub <GoMarkGithub/></a></p>
        </div>
    );
}