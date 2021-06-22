import { useSelector } from 'react-redux';

import { artifactsSelector } from '../../redux/ducks/bookPage/selectors';
import { inventorySelector } from '../../redux/ducks/inventory';
import { languageSelector } from '../../redux/ducks/language';
import { ArtifactImage, StyledDiv, StyledItem } from './style';


function Inventory() {
    const isOpen = useSelector(inventorySelector);
    const english = useSelector(languageSelector);
    const uniqueArtifacts = new Set(useSelector(artifactsSelector));
    
    return (
        <StyledDiv isOpen={isOpen}>
            {uniqueArtifacts.size === 0 && <h2>{english ? 'You have no artifacts' : 'У вас нет артефактов'}</h2>}
            {
            [...uniqueArtifacts].map((artifact, id) => 
                <StyledItem key={id} title={english ? artifact.description.en : artifact.description.ru}>
                   
                    <ArtifactImage background={artifact.img}>
                        
                    </ArtifactImage>
                    <h2>{english ? artifact.name.en : artifact.name.ru}</h2>
                </StyledItem>)
            }
        </StyledDiv>
    );
};

export default Inventory;