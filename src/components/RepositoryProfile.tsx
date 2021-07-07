import { useEffect, useState } from "react";
import { RepositoryAvatar } from "./RepositoryAvatar";

interface Profile {
    login: string;
    avatar_url: string;
    html_url: string;
    name: string;
}

export function RepositoryProfile() {
    const [profiles, setProfiles] = useState<Profile[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/MatheusDamascenoDev')
        .then(response => response.json())
        .then(data => setProfiles([data]))
    }, []);

    return (
        <section className="profile-list">
                {profiles.map(profile => {
                    return <RepositoryAvatar key={profile.name} profile = {profile}/>
                })}  
        </section>        
    );
}