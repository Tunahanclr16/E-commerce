import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function TopBar() {
  const props = useSpring({
    from: { transform: 'translateX(300%)' },
    to: async next => {
      while (true) {
        await next({ transform: 'translateX(-300%)' });
        await next({ transform: 'translateX(400%)' });
      }
    },
    config: { duration: 10000 }, // Her bir hareketin süresi (örneğin, 10 saniye)
  });

  return (
    <div className='bg-[#377DFF] gap-20 w-full h-11 overflow-hidden md:h-10 flex justify-center whitespace-nowrap items-center'>
      <animated.h2 style={props} className='text-center text-white md:text-2xl text-lg'>
        New Year's campaign has started!
      </animated.h2>
      <animated.h2 style={props} className='text-center text-white md:text-2xl text-lg'>
        New Year's campaign has started!
      </animated.h2>
      <animated.h2 style={props} className='text-center text-white md:text-2xl text-lg'>
        New Year's campaign has started!
      </animated.h2>
      <animated.h2 style={props} className='text-center text-white md:text-2xl text-lg'>
        New Year's campaign has started!
      </animated.h2>
      <animated.h2 style={props} className='text-center text-white md:text-2xl text-lg'>
        New Year's campaign has started!
      </animated.h2>
      <animated.h2 style={props} className='text-center text-white md:text-2xl text-lg'>
        New Year's campaign has started!
      </animated.h2>
      <animated.h2 style={props} className='text-center text-white md:text-2xl text-lg'>
        New Year's campaign has started!
      </animated.h2>
      <animated.h2 style={props} className='text-center text-white md:text-2xl text-lg'>
        New Year's campaign has started!
      </animated.h2>      <animated.h2 style={props} className='text-center text-white md:text-2xl text-lg'>
        New Year's campaign has started!
      </animated.h2>      <animated.h2 style={props} className='text-center text-white md:text-2xl text-lg'>
        New Year's campaign has started!
      </animated.h2>      <animated.h2 style={props} className='text-center text-white md:text-2xl text-lg'>
        New Year's campaign has started!
      </animated.h2>
    </div>
  );
}

