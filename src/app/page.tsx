import '@/css/style.css';
import Header from "@/components/header/header";
import Footer from '@/components/footer/footer';

export default function Home() {
  return (
    <>
      <div className="Site h-screen">
        <div>
          <div>
            <Header />
            {/* Header */}
            <main className=''>
              <div className='flex flex-col'>
                <section className='section-1 pt-[80px] pb-[115px]'>
                  <div className="w-[90%] margin-center flex flex-col gap-8 !important">
                    <div className="text-black">
                      <div className="LAKQI text-[80px] text-center">
                        <p className='leading-[76px]'>How can we help?</p>
                      </div>
                    </div>
                    <div className='flex'>
                      <form role='search' className='margin-center p-[15px] flex items-center justify-center' acceptCharset='UTF-8' method='get'>
                        <input type="hidden" name="utf8" value="✓" autoComplete='off' />
                        <input type="search" name="query" id="query" className='Search-b p-2' placeholder='Buscar' />
                      </form>
                    </div>
                  </div>
                </section>
                <div className='w-full'>
                  <div className='List-cont w-[80%] margin-center'>
                    <div >
                      <div className='List-main text-lg w-full'>
                        <div className='LIst-top flex justify-between flex-wrap max-sm:flex-col'>
                          {/*  */}
                          <div className='w-[45%] flex max-sm:w-full'>
                            <div className='flex flex-col'>
                              <img src="/images/hilos.png" alt="" className='Image max-sm:max-w-max max-sm:mr-0'/>
                            </div>
                            <div className='w-full'>
                              <h4><strong>Usando Abstracto</strong></h4>
                              <p>
                                Abstract te permite administrar, versionar y documentar tus diseños en un solo lugar.</p>
                              <a href="https://help.abstract.com/hc/en-us/categories/360005436612-Using-Abstract">Más información →</a>
                            </div>
                          </div>
                          {/*  */}
                          <div className='w-[45%] flex max-sm:w-full'>
                            <div className='flex flex-col'>
                              <img src="/images/social.png" alt="" className='Image max-sm:max-w-max max-sm:mr-0'/>
                            </div>
                            <div className='w-full'>
                              <h4><strong>Administra tu cuenta</strong></h4>
                              <p>
                                Configure los ajustes de su cuenta, como su correo electrónico, detalles de perfil y contraseña.
                              </p>
                              <a href="https://help.abstract.com/hc/en-us/categories/360005449431-Manage-your-account">Más información →</a>
                            </div>
                          </div>
                          {/*  */}
                          <div className='w-[45%] flex max-sm:w-full'>
                            <div className='flex flex-col'>
                              <img src="/images/pieza.png" alt="" className='Image max-sm:max-w-max max-sm:mr-0'/>
                            </div>
                            <div className='w-full'>
                              <h4><strong>Gestionar organizaciones, equipos y proyectos</strong></h4>
                              <p>
                                Utilice organizaciones, equipos y proyectos abstractos para organizar a su gente y su trabajo.
                              </p>
                              <a href="https://help.abstract.com/hc/en-us/categories/360005449531-Manage-organizations-teams-and-projects">Más información →</a>
                            </div>
                          </div>
                          {/*  */}
                          <div className='w-[45%] flex max-sm:w-full'>
                            <div className='flex flex-col'>
                              <img src="/images/dolar.png" alt="" className='Image max-sm:max-w-max max-sm:mr-0'/>
                            </div>
                            <div className='w-full'>
                              <h4><strong>Administrar la facturación</strong></h4>
                              <p>
                                Cambiar suscripciones y detalles de pago.
                              </p>
                              <a href="https://help.abstract.com/hc/en-us/categories/360005436672-Manage-billing">Más información →</a>
                            </div>
                          </div>
                          {/*  */}
                          <div className='w-[45%] flex max-sm:w-full'>
                            <div className='flex flex-col'>
                              <img src="/images/llave.png" alt="" className='Image max-sm:max-w-max max-sm:mr-0'/>
                            </div>
                            <div className='w-full'>
                              <h4><strong>Autenticarse en Abstract</strong></h4>
                              <p>
                                Configurar y configurar SSO, SCIM y aprovisionamiento Just-in-Time.
                              </p>
                              <a href="https://help.abstract.com/hc/en-us/categories/360005436592-Authenticate-to-Abstract">Más información →</a>
                            </div>
                          </div>
                          {/*  */}
                          <div className='w-[45%] flex max-sm:w-full'>
                            <div className='flex flex-col'>
                              <img src="/images/comentario.png" alt="" className='Image max-sm:max-w-max max-sm:mr-0'/>
                            </div>
                            <div className='w-full'>
                              <h4><strong>Soporte abstracto</strong></h4>
                              <p>
                                Ponte en contacto con un humano.
                              </p>
                              <a href="https://help.abstract.com/hc/en-us/articles/360050382291-Contact-Support">Más información →</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            {/* footer */}
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}