import type { SiteFaqItem } from './faq';
import { abiPages } from './abi-pages/index';

const faq = (id: string, q: string, a: string): SiteFaqItem => ({
  id,
  topic: 'products',
  icon: 'faqWhatIsEsp',
  q,
  a: a.trim(),
});

export const bodycamPageFaqsByRoute: Record<string, SiteFaqItem[]> = Object.fromEntries(
  Object.entries(abiPages).map(([key, page]) => [
    page.slug,
    page.faqs.map((item, index) => faq(`abi-${key}-${index}`, item.question, item.answer)),
  ]),
);
