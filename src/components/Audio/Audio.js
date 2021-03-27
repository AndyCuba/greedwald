import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import audio from './ambient.mp3';
import unmute from '../../images/unmute.png';
import mute from '../../images/mute.png';
import { ACTION_TOGGLE_MUTE_MUSIC } from '../../ducks/music';

const StyledAnch = styled.a`
  position: absolute;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  transition: all 0.2s;
  background: url(${props => props.muted ? mute : unmute}) no-repeat center;
  background-size: cover;
  top: 1.1rem;
  left: 1rem;
  z-index: 10;
`;


const mainTheme = new Audio(audio);

const BackgroundMusic = () => {
    const isPlaying = useSelector(state => state.music.isPlaying);
    const isMuted = useSelector(state => state.music.isMuted);

    console.log('music is playing:', isPlaying, 'music is muted:', isMuted);

    isPlaying ? mainTheme.play() : mainTheme.pause();
    
    mainTheme.muted = isMuted;
    mainTheme.loop = true;

    const dispatch = useDispatch();

    const onToggleMuteMusic = () => {
        dispatch(ACTION_TOGGLE_MUTE_MUSIC);
    }

  return (
     <div>
       <StyledAnch 
       href="#" 
       muted={isMuted} 
       onClick={onToggleMuteMusic}>

       </StyledAnch>
     </div>
  );
};



export default BackgroundMusic;
