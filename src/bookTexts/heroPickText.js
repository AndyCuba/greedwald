import dwarf from '../images/dwarf.jpg';
import human from '../images/human.jpg';
import elf from '../images/elf.jpeg';

const heroPickText = {
    dwarf: {
        h1: {
            en: 'Dwarf',
            ru: 'Дворф'
        },
        image: dwarf,
        description: {
            en: 'They are usually short and brawny sometimes living underground or in mountains with skills in metallurgy. In this adventure, the dwarf uses brute force.',
            ru: 'Обычно они невысокого роста и мускулистые, иногда живут под землей, или в горах и обладают навыками в металлургии. В этом приключении дворф использует грубую силу.'
        }
    },
    human: {
        h1: {
            en: 'Human',
            ru: 'Человек'
        },
        image: human,
        description: {
            en: 'The most adaptable race in Eredhen. Today the kingdom of people is the largest and is at the peak of it\'s power. The human uses cunning in this adventure.',
            ru: 'Наиболее легко приспосабливающаяся раса в Эредене. Королевсто людей сейчас самое большое и на пике своего могущества. Человек пользуется хитростью.'
        }
    },
    elf: {
        h1: {
            en: 'Elf',
            ru: 'Эльф'
        },
        image: elf,
        description: {
            en: 'Elves are renowned for their grace and mastery of magic and weapons such as the bow or sword. Usually, elves are a naturally slender and athletic. In this adventure, the elf uses agility.',
            ru: 'Эльфы славятся своей грацией и мастерством магии и оружия, такого как лук или меч, а так же атлетичностью и стройностью. В этом приключении эльф использует ловкость.'
        }
    }
};

const dwarfHeading = heroPickText.dwarf.h1;
const dwarfImage = heroPickText.dwarf.image;
const dwarfDescription = heroPickText.dwarf.description;
const humanHeading = heroPickText.human.h1;
const humanImage = heroPickText.human.image;
const humanDescription = heroPickText.human.description;
const elfHeading = heroPickText.elf.h1;
const elfImage = heroPickText.elf.image;
const elfDescription = heroPickText.elf.description;

export { 
    dwarfHeading,
    dwarfImage,
    dwarfDescription,
    humanHeading,
    humanImage,
    humanDescription,
    elfHeading,
    elfImage,
    elfDescription
 };