import React from 'react'
import style from './Productdetailes.module.css';
import Image from 'next/image';
import { cardData } from '@/constant/card';

export default function Productdetailes(props:{cardId:number}) {

const data =cardData.find((item) => {return(item.id == props.cardId)


})
  return (
    <div>
            <section className={style.product}>

                <div className={style.imageDiv} style={{backgroundColor:data?.backgroundColor}}>

                        <Image src={data!.img} alt="models" width={300} height={400} className={style.img}></Image> 
                </div>


                <div className={style.content}>

                <h1>{data?.title}</h1>

                <p>{data?.price}</p>

                <div className={style.cartDiv}>
                        <input type="number" min={1} max={100} value={1}></input>
                        <button>ADD TO CART</button>

                </div>

                <p style={{fontSize:"20px"}}>Product Detailes:</p>
                <p style={{fontSize:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.</p>
                </div>
            </section>


    </div>
  )
}
