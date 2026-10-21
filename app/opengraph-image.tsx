import { ogImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';

export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'IDDION — workforce management software for Indian plants';

export default function Image() {
  return ogImage({ eyebrow: 'Workforce platform', title: 'Manage your contract workforce from gate to payslip', subtitle: 'Contract labour, HRIS, payroll and earned wage access on one platform.' });
}
