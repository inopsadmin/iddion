import { ogImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';

export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'IDDION RegX contract labour management system';

export default function Image() {
  return ogImage({ eyebrow: 'IDDION RegX · CLMS', title: 'Contract labour management, gate to payroll', subtitle: 'Onboarding, gate compliance, CLRA registers, PF/ESI and invoice reconciliation.' });
}
