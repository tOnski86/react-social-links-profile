import Button from './Button';

function Card() {
  return (
    <div className='bg-grey-800 grid sm:grid-cols-1 mx-6 p-8 rounded-2xl text-center sm:w-96'>
      <div className='flex flex-col items-center'>
        <img
          src='/avatar-jessica.jpeg'
          alt='Photo of Jessica Randall'
          className='rounded-full w-28 mb-8'
        />
        <h1 className='text-white text-[1.7rem] font-semibold mb-3'>
          Jessica Randall
        </h1>
        <h2 className='text-green font-semibold mb-6'>
          London, United Kingdom
        </h2>
        <p className='text-white mb-7'>
          &quot;Front-end developer and avid reader.&quot;
        </p>
      </div>
      <div className='grid sm:grid-cols-1 gap-4'>
        <Button>GitHub</Button>
        <Button>Frontend Mentor</Button>
        <Button>LinkedIn</Button>
        <Button>Twitter</Button>
        <Button>Instagram</Button>
      </div>
    </div>
  );
}

export default Card;
