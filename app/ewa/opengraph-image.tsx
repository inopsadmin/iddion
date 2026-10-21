import { ogImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';

export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'IDDION Salary++ earned wage access';

export default function Image() {
  return ogImage({ eyebrow: 'Salary++ · Earned wage access', title: 'Earned wages, before payday', subtitle: 'Not a loan, no interest, recovered in payroll. Zero capital for employers.' });
}
