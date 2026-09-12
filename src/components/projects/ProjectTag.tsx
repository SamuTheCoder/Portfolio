import { Tag } from '../ui/Tag';

interface ProjectTagProps {
  children: string;
  category?: boolean;
  index?: number;
}

export function ProjectTag({ children, category = false, index = 0 }: ProjectTagProps) {
  const tone = category ? (index === 0 ? 'accent' : 'neutral') : 'neutral';
  return <Tag tone={tone}>{children}</Tag>;
}

