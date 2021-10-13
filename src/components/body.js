
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import img from '../assets/images/F1/download.jpg';
import "../assets/css/body.css"


function Body() {

    return (

        <div>
            <Container>
                <Image src={img} alt="f1" rounded className="photo" />


                <p> Enim laboris dolor occaecat nulla irure esse sint amet eiusmod velit qui ea velit. Irure sunt Lorem sint anim veniam adipisicing nostrud voluptate. Culpa cillum aliquip reprehenderit labore excepteur minim officia nisi ad.

                    Elit cupidatat in nulla nulla esse duis. Culpa sunt deserunt labore commodo amet non Lorem velit. Amet eu minim ex fugiat exercitation nostrud laboris elit. Mollit nisi veniam voluptate laborum sint amet elit id minim excepteur. Velit tempor amet dolor laborum ullamco reprehenderit exercitation veniam aliquip est esse. Adipisicing commodo laborum nisi fugiat consequat enim elit eiusmod aliquip nostrud.

                    Velit sunt cupidatat magna do. Tempor exercitation esse veniam ad Lorem aliquip est deserunt. Anim et cupidatat cupidatat amet excepteur incididunt commodo sit. Duis nulla fugiat culpa ex anim dolor adipisicing et ad dolore. Adipisicing quis esse tempor eu officia velit id. Adipisicing anim consequat ea cupidatat cillum veniam magna tempor mollit enim cupidatat Lorem.
                </p>
            </Container>
        </div>

    )
}


export default Body;