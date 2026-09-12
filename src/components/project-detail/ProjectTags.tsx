import { Tag } from '../ui/Tag';

interface ProjectTagsProps {
  items: readonly string[];
  kind?: 'category' | 'technology';
}

export function ProjectTags({ items, kind = 'technology' }: ProjectTagsProps) {
  return (
    <div className="flex flex-wrap gap-2" aria-label={kind === 'category' ? 'Project categories' : 'Technologies'}>
      {items.map((item, index) => (
        <Tag key={item} tone={kind === 'category' && index === 0 ? 'accent' : 'neutral'}>
          {item}
        </Tag>
      ))}
    </div>
  );
}

