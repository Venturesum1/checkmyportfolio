import { LimelightNav, NavItem } from "@/components/ui/limelight-nav";
import { Home, User, Briefcase, Code, FolderOpen, Mail, Globe} from 'lucide-react';

const navItems: NavItem[] = [
  { 
    id: 'home', 
    icon: <Home />, 
    label: 'Home', 
    onClick: () => {
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    }
  },
  { 
    id: 'about', 
    icon: <User />, 
    label: 'About', 
    onClick: () => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }
  },
  { 
    id: 'work', 
    icon: <Briefcase />, 
    label: 'How I Work', 
    onClick: () => {
      document.getElementById('how-i-work')?.scrollIntoView({ behavior: 'smooth' });
    }
  },
  { 
    id: 'skills', 
    icon: <Code />, 
    label: 'Skills', 
    onClick: () => {
      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
    }
  },
  { 
    id: 'projects', 
    icon: <FolderOpen />, 
    label: 'Projects', 
    onClick: () => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  },
  { 
    id: 'contact', 
    icon: <Mail />, 
    label: 'Contact', 
    onClick: () => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  },
   { 
    id: 'globe', 
    icon: <Globe />, 
    label: 'Globe', 
    onClick: () => {
      document.getElementById('globe')?.scrollIntoView({ behavior: 'smooth' });
    }
  },
];

export const Navbar = () => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <LimelightNav 
        items={navItems} 
        className="bg-card/60 border-border/30 shadow-lg shadow-background/20"
      />
    </div>
  );
};