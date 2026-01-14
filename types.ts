import { LucideIcon } from 'lucide-react';

export interface UserProfile {
  name: string;
  profession: string;
  avatarUrl?: string;
  isPro?: boolean;
}

export interface UsageStat {
  label: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
}

export interface ScenarioData {
  name: string;
  value: number;
  fill: string;
}

export interface SettingsItem {
  id: string;
  label: string;
  icon: LucideIcon;
  category?: string;
  action?: () => void;
}