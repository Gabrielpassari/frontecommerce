import Image from 'next/image';

export default function Hero() {
    return (
        <section className='bg-[var(--prim-light)] px-[8%] py-12 lg:px-[10%]'>
            {/*Container que organiza tudo dentro do Hero */}
            <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row'>
                {/*Efeito embaixo da imagem */}
                <div className='hero-shape3'></div>
                <div className='hero-shape4'></div>
            </div>

            {/* Coluna da esquerda */}
<div className='w-full lg:w-1/2'>
    <div className='hero-content'>
        {/* Titulo destaque */}
        <h1 className='GolosText text-5xl font-semibold leading-[1.05] text-[var(--black)] md:text-6xl lg:text-[5rem]'>
            Seu estilo começa aqui
            <span className='mt-2 flex items-center gap-3'>
               <Image 
  src="/hero-shape1.png" // O Next já sabe que deve buscar na pasta public
  alt="ícone decorativo"
  width={40}
  height={40}
  className="h-10 w-10 md:h-12 md:w-12"
/>
                <span className='text-[var(--second)]'>Moda feita</span>
            </span>
        </h1>
        <p className='GolosText mt-5 text-lg text-[var(--black)] md:text-x1'>
            Frete grátis nas compras acima de {' '}
            <span className='font-mono text-[var(--second)]'>R$ 399,00</span>
        </p>
    </div>
</div>


        </section>
    )
}