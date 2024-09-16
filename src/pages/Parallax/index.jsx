import {Parallax, ParallaxLayer} from '@react-spring/parallax'


function ParallaxPage() {

    return (
        <Parallax pages={4}>
            <ParallaxLayer offset={0} speed={0.1}></ParallaxLayer>
            <ParallaxLayer offset={0.5} speed={0.1}></ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.1}></ParallaxLayer>
            <ParallaxLayer offset={1.5} speed={0.1}></ParallaxLayer>
            



        </Parallax>
    )
}

export default ParallaxPage