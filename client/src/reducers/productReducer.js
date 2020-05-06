import Img from '../assets/images/sofware.jpg';


const initialState = {
    products: [
        {id: 1, 
         title: 'Bronze', 
         descriptionitem1:'5GB Space',
         descriptionitem2:'10GB Bandwith',
         descriptionitem3:'15 Email Accounts',
         descriptionitem4:'Domain Name',
         descriptionitem5:'5Hours per/month Support',
         price: '100',
         image: `${Img}`,
         amount: 10},
        {id: 2, 
         title: 'Silver"',
         descriptionitem1:'10GB Space',
         descriptionitem2:'20GB Bandwith',
         descriptionitem3:'50 Email Accounts',
         descriptionitem4:'Domain Name',
         descriptionitem5:'10Hours per/month Support',
         price: '200 ', 
         image: `${Img}`, 
         amount: 10},
        {id: 3, title: 'Gold',
        descriptionitem1:'15GB Space',
        descriptionitem2:'40GB Bandwith',
        descriptionitem3:'75 Email Accounts',
        descriptionitem4:'Domain Name',
        descriptionitem5:'20Hours per/month Support',
        price: '300', 
         image:`${Img}` , 
         amount: 10},
        {id: 4, 
        title: 'Platinum', 
        descriptionitem1:'100GB Space',
        descriptionitem2:'100GB Bandwith',
        descriptionitem3:'300 Email Accounts',
        descriptionitem4:'Domain Name',
        descriptionitem5:'50Hours per /month Support',
        price: '400', 
        image: `${Img}`, 
        amount: 10}
    ]
  };
  
   
   const productReducer = (state = initialState, action) => {
 
    return state;
    
};

export default productReducer;