import { ogImage, ogSize, ogContentType } from '@/lib/og';

export const runtime = 'edge';

export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'IDDION HRIS and payroll software';

export default function Image() {
  return ogImage({ eyebrow: 'IDDION HRIS', title: 'HR software built for Indian manufacturing', subtitle: 'Attendance, leave, statutory payroll and self-service on one engine.' });
}
