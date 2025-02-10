import '@/css/footer/footer.css'

export default function Footer() {
    return (
        <>
            <footer className="bg-black text-white">
                <div className="w-full p-4">
                    <div className='Responsive flex w-full justify-center gap-12 p-4 max-sm:p-0 max-lg:flex-col max-lg:items-center'>
                        <div className='flex items-center gap-15px'>
                            <div className='option-responsive flex gap-10'>
                                <div className='flex flex-col gap-6'>
                                    <div>
                                        <h3 className='text-2xl'><strong>Abstracto</strong></h3>
                                    </div>
                                    <a href="https://app.abstract.com/signup?branches=true">Iniciar Prueba</a>
                                    <a href="https://www.abstract.com/pricing">Precios</a>
                                    <a href="https://app.abstract.com/download">Descargar</a>
                                </div>
                                <div className='flex flex-col gap-6'>
                                    <div>
                                        <h3 className='text-2xl'><strong>Recursos</strong></h3>
                                    </div>
                                    <a href="https://www.abstract.com/blog">Blog</a>
                                    <a href="https://help.abstract.com/hc/en-us">Centro de Ayuda</a>
                                    <a href="https://www.abstract.com/release-notes">Notas de la versión</a>
                                    <a href="https://status.goabstract.com/">Estado</a>
                                </div>
                                <div className='flex flex-col gap-6'>
                                    <div>
                                        <h3 className='text-2xl'><strong>Comunidad</strong></h3>
                                    </div>
                                    <a href="https://x.com/goabstract">Gorjeo</a>
                                    <a href="https://www.linkedin.com/company/abstract-app/">LinkedIn</a>
                                    <a href="https://www.facebook.com/Abstract/">Facebook</a>
                                    <a href="https://dribbble.com/abstract">Dribble</a>
                                    <a href="https://www.abstract.com/podcast">Podcast</a>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex flex-col gap-6'>
                                        <div>
                                            <h3 className='text-2xl'><strong>Compañía</strong></h3>
                                        </div>
                                        <a href="https://www.abstract.com/about">Sobre nosotros</a>
                                        <a href="https://breezy.hr/">Carreras</a>
                                        <a href="https://www.abstract.com/legal">Legal</a>
                                    </div>
                                    <div className='gap-6'>
                                        <div>
                                            <p className='text-2xl max-sm:text-lg'><strong>Contáctenos</strong></p>
                                        </div>
                                        <a href="mailto:info@abstract.com" className='max-sm:text-[15px]'>info@abstract.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center'>
                            <svg className="abstract-logo-footer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 51" preserveAspectRatio="xMinYMid slice">
                                <g className="abstract-logo-mark-footer" fill="#fff">
                                    <path d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z"></path>
                                    <circle cx="21.24" cy="29.58" r="4.96"></circle>
                                </g>
                            </svg>
                            <p>&copy;Copyright 2025</p>
                            <p>Abstract Studio Design, Inc.</p>
                            <p>All rights reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}