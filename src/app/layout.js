import '../../assets/components/style.scss';

export const metadata = {
  title: {
    default: 'Fate SRD',
    template: '%s | Fate SRD',
  },
  description: 'The official Fate Roleplaying Game SRD.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
