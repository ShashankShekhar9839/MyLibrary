import Card  from './Card';
import '../../../sass-compile/assets/scss/assets/_card.scss';

export default {
    title  : 'Example/Card', 
    component : Card,
    parameters  :  {
        layout : 'centered',
    }, 
}; 
let defaultProps = {
    title : "I am the title of your component", 
    subtitle : 'I am the sub title of your component'
}
export const Primary = {
    args : {
        ...defaultProps
    }
} 

// export const CardComponent = () => {
//     <Card
//     title = 'I am the title of your card component'
//     >I am the body of your card component</Card>
// }