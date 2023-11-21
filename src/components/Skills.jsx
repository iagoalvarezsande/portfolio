import React from 'react';
import Icon_Coding_Skill from '../assets/CodingSkill.png'
import Icon_Project_Management from '../assets/Project Management Skill.png'
import Icon_Pharma_Industry from '../assets/Pharma Industry.png'
import Icon_Cloud from '../assets/Cloud.png'

const SkillContainer = ({ title, description, iconSrc }) => {
    return (
      <div className='w-full md:w-1/2 lg:pr-4 lg:pl-4 mb-4 md:mb-0'>
        <div className='p-6 rounded-lg flex flex-col items-center'>
          <img style={{ width: '100px', height: '100px', marginBottom: '10px' }} src={iconSrc} alt={title} />
          <h3 className='text-xl font-semibold mb-4'>{title}</h3>
          <p className='py-1 text-left'>{description}</p>
        </div>
      </div>
    );
  };
  
  
  

const Skills = () => {
  return (
    <section name='skills' className='flex w-full min-h'>
      <div className='flex-col justify-center items-start w-full h-full px-4'>
        <div className='max-w-[1500px] w-full'>
          <div className='pb-4'>
            <p className='pr-3 text-4xl font-bold inline border-b-4 border-pink-700'>Skills</p>
          </div>
        </div>
        <div className='flex flex-wrap -mx-4'>
          <SkillContainer
            title='Project Management'
            description='Orchestration of end-to-end solutions, meticulous strategic roadmap planning, and the seamless execution of dynamic workshops. Proficient in Agile frameworks and Scrum methodologies, I ensure the delivery of projects that are both efficient and adaptive to evolving requirements.'
            iconSrc={Icon_Project_Management}
          />
          <SkillContainer
            title='Pharmaceutical Industy'
            description='With a nuanced understanding of intricate business processes, specialized knowledge in clinical trials regulatory processes, and a comprehensive grasp of quality and manufacturing intricacies, I am adept at implementing cutting-edge SaaS applications tailored precisely to sophisticated processes.'
            iconSrc={Icon_Pharma_Industry}
          />
          <SkillContainer
            title='Coding Skills'
            description='With a foundational grasp of Python and JavaScript, I leverage coding skills to enhance data analysis, automate processes, and contribute to projects in laboratory research and data migration..'
            iconSrc={Icon_Coding_Skill}
          />
          <SkillContainer
            title='Cloud Architecture'
            description='Holding certification as an AWS Associate Cloud Architect, I demonstrate prowess in the design and implementation of scalable, secure, and cost-effective cloud solutions. My mastery of cloud architecture principles ensures the establishment of a robust and resilient digital infrastructure.'
            iconSrc={Icon_Cloud}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;