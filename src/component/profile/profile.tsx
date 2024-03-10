import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import { Button } from 'antd';
import { DownloadOutlined,GithubOutlined } from '@ant-design/icons';
import './profile.scss';

function Profile() {
  const textref = useRef(null);
  const githubLink = 'https://github.com/Vinh364676';
  const overleadLink = "https://drive.google.com/drive/folders/1vYNJkfU_CbsKHO1byOsA2CXQxYgp4OIC?hl=vi";
  useEffect(() => {
    if (textref.current) {
      init(textref.current, {
        strings: ['Deverloper', 'Designer'],
        showCursor: false,
        backDelay:  1500,
        backSpeed: 130,
        
      });
    }
  }, []);

  return (
    <div id='profile' className='profile '>
      <div className='profile__container'>
        <div className='profile__container__image'></div>
      </div>
      <div className='profile__content'>
        <h5 className='profile__content__top'>Hi, Myself</h5>
        <h3 className='profile__content__name'>Pham Quang Vinh</h3>
  
        <h5 className='profile__content__top profile__content__job'>
          And I'm a
          <span className='profile__content__job__text' ref={textref}>
          {' '}
          </span>
        </h5>

      
        <p className='profile__content__intro'>
          As a senior student at the Faculty of Information Technology, I specialize in the field of Software Engineering and have a strong background in web programming. My passion for creativity and problem solving has led me to explore and apply the latest knowledge in this field.
        </p>
        <div className='profile__button'>
          <Button className='header__button' icon={<DownloadOutlined />}>
            <a href={overleadLink}>
            Resume
            </a>
          </Button>
          
          <Button className='header__button'><a href={githubLink} target="_blank" rel="noopener noreferrer">
          <GithubOutlined /> <span>Github</span>
            </a></Button>
          
         
        </div>
      </div>
    </div>
  );
}

export default Profile;