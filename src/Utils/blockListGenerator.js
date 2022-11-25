import fon_block_1 from '../media/front/fon_block_1.jpeg'
import pic_2 from '../media/front/pic_2.jpg'
import pic_3 from '../media/front/pic_3.jpg'
import pic_4 from '../media/front/pic_4.jpg'
import pic_5 from '../media/front/pic_5.jpg'

import BlockFixed from '../pages/home/components/BlockFixed/BlockFixed';
import BlockFotoText from '../pages/home/components/BlockFotoText/BlockFotoText';
import BlockBenefits from '../pages/home/components/BlockBenefits/BlockBenefits';
import BlockCosts from '../pages/home/components/BlockCosts/BlockCosts';
import BlockReviews from '../pages/home/components/BlockReviews/BlockReviews';

const Blocks = [
    {type: 'face',    id: 1,    data:{id:1, fon: fon_block_1}},
    // {type: 'face',    id: 1,    data:{id:1, fon: fon_block_1}},
    {type: 'content', id: 1,    data:{id:1, fon: fon_block_1}},
    {type: 'benefit', id: 1,    data:{id:1, fon: fon_block_1}},
    {type: 'costs',   id: 1,    data:{id:1, fon: fon_block_1}},
    {type: 'rewiews', id: 1,    data:{id:1, fon: fon_block_1}},
]

const generator = (data) => {

    let blockArray = []

    data.forEach((value, index, array) => {
        switch (value.type) {
            case 'face': blockArray.push(typeFaceExecutor(value.data) ); break;
            case 'content': blockArray.push(typeContentExecutor(value.data) ); break;
            case 'benefit': blockArray.push(typeBenefitExecutor(value.data) ); break;
            case 'costs': blockArray.push(typeCoastExecutor(value.data) ); break;
            case 'rewiews': blockArray.push(typeRewiewsExecutor(value.data) ); break;
           
            default: blockArray.push(defaultExecutor())
        }
    })

    return blockArray

}


const generate = () => {
    return generator(Blocks)
}

export {generate}


let typeFaceExecutor = (data) => {
    return (<BlockFixed key={1} id={1} pic_2={fon_block_1}/>)
}
let typeContentExecutor = (data) => {
    return (<BlockFotoText key={2} id={2} pic_2={pic_3}/>)
}
let typeBenefitExecutor = (data) => {
    return (<BlockBenefits key={3}/>)
}
let typeCoastExecutor = (data) => {
    return (<BlockCosts key={4}/>)
}
let typeRewiewsExecutor = (data) => {
    return (<BlockReviews key={5}/>)
}

let defaultExecutor = () => {
    return (<div>Ошибка, такого блока нет</div>)
}