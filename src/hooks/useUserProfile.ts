
import { useState } from 'react';

export interface UserProfile {
  id: string;
  name: string;
  bio: string;
  avatar?: string;
  skills: string[];
  rating: number;
  memberSince: string;
  connections: number;
  topInstructor: boolean;
  skillsTaught: number;
  studentsHelped: number;
  location?: string;
  occupation?: string;
  availableForMentoring?: boolean;
  lastActive?: string;
  email?: string;
}

export const useUserProfile = () => {
  const [profile, setProfile] = useState<UserProfile>({
    id: 'user1',
    name: "John Doe",
    bio: "UX designer with a passion for creating intuitive digital experiences. I love sharing my knowledge about design principles and user research methodologies.",
    avatar: undefined,
    skills: ["UX Design", "UI Design", "User Research", "Prototyping", "Figma"],
    rating: 4.8,
    memberSince: "Mar 2023",
    connections: 42,
    topInstructor: true,
    skillsTaught: 3,
    studentsHelped: 126,
    location: "San Francisco, CA",
    occupation: "Senior UX Designer",
    availableForMentoring: true,
    lastActive: "2 hours ago",
    email: "john.doe@example.com",
  });

  const updateProfile = (updatedProfile: Partial<UserProfile>) => {
    setProfile(prev => ({
      ...prev,
      ...updatedProfile
    }));
  };

  return {
    profile,
    updateProfile
  };
};
