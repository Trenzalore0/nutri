import ProfileImage from '@/components/profileImage/page';

export default function PagesLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ProfileImage />
      {children}
    </>
  );
}
