import type { AbiPage } from '../data/abi-pages/types';

function trimBlock(text: string): string {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join('\n\n');
}

/** Render abiPages copy as markdown for the content collection body. */
export function abiPageToMarkdown(page: AbiPage, options?: { includeH1?: boolean }): string {
  const lines: string[] = [];

  if (options?.includeH1 && page.slug !== '/') {
    lines.push(`# ${page.h1}`, '');
  }

  if (page.draftOnly && page.publishNote) {
    lines.push(`> **Draft:** ${page.publishNote.trim()}`, '');
  }

  lines.push(trimBlock(page.introduction), '');

  for (const section of page.sections) {
    lines.push(`## ${section.heading}`, '');
    for (const paragraph of section.paragraphs ?? []) {
      lines.push(trimBlock(paragraph), '');
    }
    if (section.bullets?.length) {
      for (const bullet of section.bullets) {
        lines.push(`- ${bullet.trim()}`);
      }
      lines.push('');
    }
    if (section.plans?.length) {
      for (const plan of section.plans) {
        lines.push(`### ${plan.name} — ${plan.price}`, '');
        lines.push(`**Duration:** ${plan.duration}`, '');
        lines.push(trimBlock(plan.description), '');
      }
    }
  }

  if (page.internalLinks?.length) {
    lines.push('## Related pages', '');
    for (const link of page.internalLinks) {
      lines.push(`- [${link.text}](${link.href})`);
    }
    lines.push('');
  }

  return lines.join('\n').trimEnd() + '\n';
}
