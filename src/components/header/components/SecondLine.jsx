import React from 'react';
import { Link } from 'react-router-dom';
import { useGetPageDataQuery } from '../../../API/pageAPI';

const SecondLine = () => {

    const 
    { 
        data, 
        isError, 
        isLoading, 
        isFetching 
    } = useGetPageDataQuery (10001)

    if (!isLoading){
        // console.log(data.map(i=>i.page + ' ' + i.id))
       // console.log(rtkdata)


       return (
        <div style={{...styles.container}}>

                {data.map(i=>
                    <Link to={i.path}  key={i.id}  style={{...styles.links}}> {i.title} </Link>
                )}
                
            </div>
        );


    }
    
    return <div>Loading</div>



    // return (
    //     <div style={{...styles.container}}>
    //             <Link to={'/'}         style={{...styles.links}}> Главная </Link>
    //             {/* <Link to={'/about'}     style={{...styles.links}}> О нас </Link> */}
    //             <Link to={'/news'}      style={{...styles.links}}> Новости</Link>
    //             <Link to={'/articles'}  style={{...styles.links}}> Статьи </Link>
    //             <Link to={'/pay'}       style={{...styles.links}}> Оплата </Link>
    //             <Link to={'/contacts'}  style={{...styles.links}}> Контакты </Link>
    //             {/* <Link to={'/club'}      style={{...styles.links}}> Клуб логопедов </Link> */}
    //             <Link to={'/tasks'}     style={{...styles.links}}> Задания </Link>
    //         </div>
    // );
};

export default SecondLine;

const links__container = {
    marginLeft: '25px',
    display: 'flex',
    flexDirection: 'row',
    height:'50px',
}

const links = {
    margin: '10px',
    textDecoration: 'none',
}

const styles = {
    container : {
       
        display: 'flex',
        flexDirection: 'row',
        height:'50px',
    },
    links : {
        margin: '10px 30px 10px 10px',
        textDecoration: 'none',
        color:'black',
        fontSize:'20px'
    }
}