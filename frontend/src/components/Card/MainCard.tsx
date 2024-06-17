interface ICard {
  title: string;
  subtitle: string;
  index: number;
  // imageSrc: string;
}

export default function Card({ title, subtitle, index }: ICard) {
  return (
    <div className='flex flex-row items-center justify-start gap-[22px]'>
      <div className='m-auto flex items-center justify-center w-[51px] h-[51px] p-6 font-bold text-[17px] leading-[20.4px] text-white bg-[#0074CC] rounded-full'>
        {index + 1}
      </div>
      <div>
        <h5 className='font-bold text-[17px]'>{title}</h5>
        <p className='text-white text-[15px]'>{subtitle}</p>
      </div>
    </div>
  );
}
