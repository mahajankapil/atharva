
export interface LinkItem {
  id: string;
  title: string;
  url: string;
  iconType: 'portfolio' | 'linkedin' | 'github' | 'projects' | 'resumes' | 'websites' | 'email' | 'camera' | 'rank' | 'ai' | 'google' | 'contacts';
  colorClass: string;
  bgClass: string;
  subtitle?: string;
}

export interface UserProfile {
  name: string;
  username: string;
  avatarUrl: string;
}
