import Image from 'next/image';
import heroshap1 from '@/../public/hero-shape1.png';
import hero from '@../public/Hero.png';

export default function Hero() {
    return (
        <section className='bg-[var(--prim-light)] px-[8%] py-12 lg:px-[10%]'>
            {/*Container que organiza tudo dentro do Hero */}
            <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row'>
                {/*Efeito embaixo da imagem */}
                <div className='hero-shape3'></div>
                <div className='hero-shape4'></div>
            </div>

            
        </section>
    )
}