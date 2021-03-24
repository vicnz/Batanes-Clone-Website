import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Batanes Simple Page</title>
        <meta name="description" content="The country's northernmost and smallest province, Batanes is among the most sought-after tourism frontier destinations located at the confuence of the West Philipine Sea (South China Sea) and Pacific Ocean."/>
      </Head>
      <Layout>
        <section>
          <div className="hero is-success is-medium is-bold">
            <div className="hero-body has-text-centered">
              <h1 className="title is-size-1 invert">Welcome To Batanes</h1>
              <p className="subtitle invert">Welcome To The Paradise Of The North</p>
            </div>
          </div>
          <section className="section">
            <div className="container">
              <h2 className="title has-text-success has-text-centered">Batanes</h2>
              <hr/>
              <div className="columns">
                <div className="column">
                  <div className="content">
                    <p className="block">
                      The country's northernmost and smallest province, Batanes is among the most sought-after tourism frontier destinations located at the confuence of the West Philipine Sea (South China Sea) and Pacific Ocean.
                    </p>
                    <p className="block">
                      Dubbed as "Nature's Playground", the archipelago province has been declared by the government as a Protected Landscape and Seascape because of its rare flora and fauna, undulating terrain, diverse marine life, limestone cliff, and panoramic sceneries. It boasts of stretches if white and cream colored sandy beaches and clear water.
                    </p>
                  </div>
                </div>
                <div className="column">
                  <div className="content">
                    <p className="block">Composed of 10 islands, with only three inhibited (Batan, Itbayat, Sabtang) while islets of Dinem, Siayan, Ditarem, Misanga, Mavudis, Dequey, and Vuhus are uninhabited. It has six municipalities - Basco, Mahatao, Ivana, and Uyugan (located in Batan Island), and the islands towns of Itbayat and Sabtang. Batanes's tourist icon is its Ivatan indigenous house made up of stone, coral, and lime walls, hardwood floors and windows, and cogon roofs. The province's other postcard-worthy images are its farolas of lighthouses, Spanish-Era churches and grazing hills with literally breath-taking views if waves crashing the shores.</p>
                  </div>
                </div>
                <div className="column">
                  <div className="content">
                    <p className="block">The provincial capital town Basco, is the gateway and hub of commerce and transport of teh province with the presence of the airport which flies to Manila and Tuguegarao City, Cagayan. From here tourist can go around the other towns in the Batan island.</p>
                    <p className="block">Batanes is nearer to Taiwan, which is about 190<sup>km</sup> north, than the mainland luzon which is 280<sup>km</sup> away from Appari, the northernmost tip of the Luzon mainland.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="container">
              <h2 className="title has-text-success has-text-centered">Located Where?</h2>
              <hr />
              <div className="columns">
                <div className="column">
                  <div className="content is-flex is-flex-direction-column is-justify-content-center">
                      <table className="table is-bordered">
                        <tbody>
                          <tr>
                            <td><span className="">Coordinates</span></td>
                            <td>20&deg;35'N 121&deg;54'E</td>
                          </tr>
                        </tbody>
                      </table>
                      <hr/>
                      <p className="block content">
                        Batanes is located approximately 162<sup>km</sup> (101<sup>mi</sup>) north of the Luzon mainland and about 190<sup>km</sup> (120<sup>mi</sup>) south of Taiwan (<em>Pingtung Country</em>), seperated from the Babuyan Island of Cagayan Province by the Balintang Channel, and from Taiwan by the Bashi Channel.
                      </p>
                      <p className="content is-small has-text-grey">excerped from Wikipedia</p>
                  </div>
                </div>
                <div className="column is-one-third">
                  <figure className="img is-responsive has-text-centered">
                    <img src="/map.jpg" alt="batanes map location" className="is-4by5"/>
                  </figure>
                </div>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="container">
              <h2 className="title has-text-centered has-text-success">Explore</h2>
              <hr/>
              <div className="columns">
                <div className="column">
                  <Link href="/about-batanes">
                    <a href="/about-batanes">
                      <div className="card">
                        <div className="card-content">
                          <p className="content is-small has-text-centered">About Batanes</p>
                          <p className="content has-text-centered has-text-success is-size-4">
                            "Learn more about Batanes, by land, culture, and its people.""
                          </p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="column">
                  <Link href="/investments">
                    <a href="/investments">
                      <div className="card">
                        <div className="card-content">
                        <p className="content is-small has-text-centered">Investments</p>
                          <p className="content has-text-centered has-text-success is-size-4">
                            "Investments, Products and Services that developed this commmunity."
                          </p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="column">
                  <Link href="/tourism/tourist-attractions">
                    <a href="/tourism/tourist-attractions">
                      <div className="card">
                        <div className="card-content">
                        <p className="content is-small has-text-centered">Tourist Attractions</p>
                          <p className="content has-text-centered has-text-success is-size-4">
                            "Visit toursites that makes this place a top notch tourist destination."
                          </p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </section>
      </Layout>
    </main>
  )
}
