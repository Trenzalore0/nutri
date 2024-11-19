import Image from 'next/image';

export default function ProfileImage() {
  return (
    <div className='flex justify-center mb-2'>
      <div className='w-40 h-40 overflow-hidden rounded-full border-2 border-[#061e41]'>
        <Image
          src='/profile.jpg'
          alt='Profile Picture'
          width={200}
          height={200}
          loading='lazy'
          className='object-cover scale-125'
        />
      </div>
    </div>
  );
}