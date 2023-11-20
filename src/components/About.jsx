import React from 'react';

const TextSection = ({ title, content, titleClass, contentClass }) => (
  <div className='max-w-[1500px] w-full grid md:grid-cols-2 gap-4 py-8'>
    <div className={titleClass}>
      <p>{title}</p>
    </div>
    <div className={contentClass}>
      <p>{content}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <section name='about' className='flex w-full min-h bg-[#2b2b2b]'>
      <div className='flex flex-col justify-center items-start w-full h-full px-4'>
        <div className='max-w-[1500px] w-full'>
          <div className='pb-4'>
            <p className='pr-2 text-4xl font-bold inline border-b-4 border-pink-700'>About</p>
          </div>
        </div>
        <TextSection
          title="Hi, I'm Iago, nice to meet you."
          content="I am a versatile professional with a demonstrated history of successfully implementing a variety of applications within the life sciences sector. Proven expertise in crafting customized solutions, executing large-scale projects."
          titleClass="sm:text-left text-4xl font-semibold p-2"
          contentClass="sm:text-left sm:text-xl text-2xl lg:text-2xl xl:text-3xl px-2 py-2"
        />
        <TextSection
          title='My Background'
          content={
            <>
              <h1 className='py-2 text-2xl font-semibold'>Orginally from Sunny Spain☀️</h1>
              <p className='py-1'> My journey took me to the UK during my teenage years to complete high school and pursue a coveted bachelor's degree.</p>
              <p className='py-1'>After a six-year adventure, weaving through the streets of London and the hills of Edinburgh. Everything fell into place in 2022 as I proudly graduated with a major in Pharmacology.</p>
              <p className='py-1'>Despite my studies being rooted in the pure sciences, I have always had a thing for tech.</p>
              <h2 className='py-2 text-2xl font-semibold'>Then it hit me. 💡</h2>
              <p className='py-1'>Why confine myself to one narrow field when I could embrace both?</p>
              <p className='py-1'>Instead of limiting my exploration to a single area, I realized I could cause a greater impact by utilizing technology to accelerate processes and address the industry's contemporary challenges. </p>
              <h3 className='py-2 text-2xl font-semibold'>Where I Stand?</h3>
              <p>Through continuous learning and diverse experiences, I've reached a point where I can leverage tech to contribute to the thrilling world of life sciences. Here's to the exciting journey ahead! 🚀</p>
            </>
          }
          titleClass='sm:text-left text-4xl font-semibold p-2'
          contentClass='text-lg md:text-2lg lg:text-2lg xl:text-3lg px-2 py-2'
        />
      </div>
    </section>
  );
};

export default About;
