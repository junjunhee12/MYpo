import { Canvas } from "@react-three/fiber";
import { useGLTF, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useState } from "react";
import styles from "./Body1.module.css"
import styles1 from "./motion.module.css"
import styled from "styled-components";

import mouse from "../assets/마우스.png"
const ImgWraper2 = styled.div`
        width: 100%;
        height: 100%;
        object-fit: cover;
        padding-top: 16px;
    `
export function Laptop({ isOpen, ...props }) {
    const { nodes, materials } = useGLTF('/laptop.glb');
  
    const variants = {
      open: {
        rotateX: (0 * Math.PI) / 180,
        x: -0.03,
        y: 111.69,
        z: 2.84
      },
      closed: {
        rotateX: (105 * Math.PI) / 180,
        x: 0,
        y: 75,
        z: 39
      }
    };
  
    return (
      <group {...props} dispose={null} position={[-0.03, -1, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.03}>
          <motion.group
            position={[-0.03, 111.69, 2.84]}
            scale={3.37}
            initial={"closed"}
            animate={isOpen ? "open" : "closed"}
            transition={{
              delay: 0.5,
              duration: 1
            }}
            variants={variants}
          >
            {/* Render laptop components */}
            <mesh geometry={nodes.Screen.geometry} material={materials.Namibia} position={[0.01, -33.13, -0.84]} scale={0.3} />
            <mesh geometry={nodes.Black_Inset.geometry} material={materials['Display Rim 1']} position={[0.01, -33.13, -0.84]} scale={0.3} />
            <mesh geometry={nodes.Rubber.geometry} material={materials['Display Rubber 1']} position={[0.01, -33.13, -0.84]} scale={0.3} />
            <mesh geometry={nodes.Screen_Back.geometry} material={materials['Body 2']} position={[0.01, -33.13, -0.84]} scale={0.3} />
          </motion.group>
          
          {/* Other laptop components */}
          <mesh geometry={nodes.Keyboard.geometry} material={materials['Keyboard 2']} />
          <mesh geometry={nodes.Touch_Panel.geometry} material={materials['Touch Bar 1']} />
          <mesh geometry={nodes.Ports.geometry} material={materials['Ports 1']} />
          <mesh geometry={nodes.Touchpad.geometry} material={materials['Touchpad 1']} />
          <mesh geometry={nodes.Body.geometry} material={materials['Body 3']} />
        </group>
      </group>
    );
  }

  function MotionEvent({onClick}){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <div className={styles1.container}>
                <Canvas>
                    <ambientLight intensity={0.8} />
                    <pointLight position={[10, 10, 50]} />
                    
                    <Laptop isOpen={isOpen} />
                    
                    <PerspectiveCamera makeDefault position={[0, 2, 15]} />
                    
                    <OrbitControls enableZoom={false} />
                </Canvas>
                <div className="footer">
                    <label className="switch">
                    <input
                        type="checkbox"
                        checked={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                    />
                    <span className="slider"></span>
                    </label>
                </div>
                <div onClick={onClick} className={isOpen ? styles.pos : styles.post}>
                <h1 className={styles.main}>신입 프론트개발자를 희망하는 전준희 입니다.
                    <div className={ styles.content}>잘 부탁드립니다.</div>
                </h1>
                <div className={styles.main1}>
                    <ImgWraper2>
                        <img  className={styles.mouse} src={mouse} />
                    </ImgWraper2>

                </div>
                {/* 클릭하는 부분 만들어주고 애니메이션 효과도 만들어준다. */}
                
                <div className={styles.click}>클릭해보세요!!</div>
            </div>

            <div className={styles1.msg}>토클버튼 클릭하세요</div>
            </div>
            
        
        </>
    )
  }

  export default MotionEvent