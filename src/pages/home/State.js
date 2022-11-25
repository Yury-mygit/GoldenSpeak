import { generate, pics, defBlock } from '../../Utils/blockListGenerator';

const state = [
    {type: 'face',    id: 1,    data:{ fon: pics.fon_block_1, imgs:[]}},
    {type: 'content', id: 2,    data:
    { 
        layers: 4, 
        imgs:[pics.fr_b2_pic_1,pics.fr_b2_pic_2,pics.fr_b2_pic_3,pics.fr_b2_pic_4,],
        maitTitle:'Направления нашей работы',
    }},
    {type: 'benefit', id: 3,    data:{ imgs:[]}},
    {type: 'costs',   id: 4,    data:{ imgs:[]}},
    {type: 'rewiews', id: 5,    data:{ imgs:[]}},  
]

export default state