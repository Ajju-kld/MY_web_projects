/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Model({ ...props }) {
   const group = useRef();
   const { nodes, materials, animations } = useGLTF('/model.glb');

   const { actions } = useAnimations(animations, group);

   // 'Armature|mixamo.com|Layer0' is the name of the animation we need to run.
   // console.log(actions);

   useEffect(() =>
      {actions['Armature|mixamo.com|Layer0'].play();
   });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
          <skinnedMesh name="Wolf3D_Body" geometry={nodes.Wolf3D_Body.geometry} material={materials['Wolf3D_Body.005']} skeleton={nodes.Wolf3D_Body.skeleton} />
          <skinnedMesh name="Wolf3D_Glasses" geometry={nodes.Wolf3D_Glasses.geometry} material={materials['Wolf3D_Glasses.005']} skeleton={nodes.Wolf3D_Glasses.skeleton} />
          <skinnedMesh name="Wolf3D_Hair" geometry={nodes.Wolf3D_Hair.geometry} material={materials['Wolf3D_Hair.005']} skeleton={nodes.Wolf3D_Hair.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Bottom" geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials['Wolf3D_Outfit_Bottom.005']} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Footwear" geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials['Wolf3D_Outfit_Footwear.005']} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top" geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials['Wolf3D_Outfit_Top.005']} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
          <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials['Wolf3D_Eye.005']} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
          <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials['Wolf3D_Eye.005']} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials['Wolf3D_Skin.005']} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials['Wolf3D_Teeth.005']} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
        </group>
        <group name="Armature004">
          <primitive object={nodes.Hips_1} />
          <skinnedMesh name="Wolf3D_Body002" geometry={nodes.Wolf3D_Body002.geometry} material={materials['Wolf3D_Body.007']} skeleton={nodes.Wolf3D_Body002.skeleton} />
          <skinnedMesh name="Wolf3D_Glasses002" geometry={nodes.Wolf3D_Glasses002.geometry} material={materials['Wolf3D_Glasses.007']} skeleton={nodes.Wolf3D_Glasses002.skeleton} />
          <skinnedMesh name="Wolf3D_Hair002" geometry={nodes.Wolf3D_Hair002.geometry} material={materials['Wolf3D_Hair.007']} skeleton={nodes.Wolf3D_Hair002.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Bottom002" geometry={nodes.Wolf3D_Outfit_Bottom002.geometry} material={materials['Wolf3D_Outfit_Bottom.007']} skeleton={nodes.Wolf3D_Outfit_Bottom002.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Footwear002" geometry={nodes.Wolf3D_Outfit_Footwear002.geometry} material={materials['Wolf3D_Outfit_Footwear.007']} skeleton={nodes.Wolf3D_Outfit_Footwear002.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top002" geometry={nodes.Wolf3D_Outfit_Top002.geometry} material={materials['Wolf3D_Outfit_Top.007']} skeleton={nodes.Wolf3D_Outfit_Top002.skeleton} />
          <skinnedMesh name="EyeLeft002" geometry={nodes.EyeLeft002.geometry} material={materials['Wolf3D_Eye.007']} skeleton={nodes.EyeLeft002.skeleton} morphTargetDictionary={nodes.EyeLeft002.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft002.morphTargetInfluences} />
          <skinnedMesh name="EyeRight002" geometry={nodes.EyeRight002.geometry} material={materials['Wolf3D_Eye.007']} skeleton={nodes.EyeRight002.skeleton} morphTargetDictionary={nodes.EyeRight002.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight002.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Head002" geometry={nodes.Wolf3D_Head002.geometry} material={materials['Wolf3D_Skin.007']} skeleton={nodes.Wolf3D_Head002.skeleton} morphTargetDictionary={nodes.Wolf3D_Head002.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head002.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Teeth002" geometry={nodes.Wolf3D_Teeth002.geometry} material={materials['Wolf3D_Teeth.007']} skeleton={nodes.Wolf3D_Teeth002.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth002.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth002.morphTargetInfluences} />
        </group>
        <group name="Armature001">
          <primitive object={nodes.Hips_2} />
          <skinnedMesh name="Wolf3D_Body001" geometry={nodes.Wolf3D_Body001.geometry} material={materials['Wolf3D_Body.005']} skeleton={nodes.Wolf3D_Body001.skeleton} />
          <skinnedMesh name="Wolf3D_Glasses003" geometry={nodes.Wolf3D_Glasses003.geometry} material={materials['Wolf3D_Glasses.005']} skeleton={nodes.Wolf3D_Glasses003.skeleton} />
          <skinnedMesh name="Wolf3D_Hair003" geometry={nodes.Wolf3D_Hair003.geometry} material={materials['Wolf3D_Hair.005']} skeleton={nodes.Wolf3D_Hair003.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Bottom001" geometry={nodes.Wolf3D_Outfit_Bottom001.geometry} material={materials['Wolf3D_Outfit_Bottom.005']} skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Footwear001" geometry={nodes.Wolf3D_Outfit_Footwear001.geometry} material={materials['Wolf3D_Outfit_Footwear.005']} skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top001" geometry={nodes.Wolf3D_Outfit_Top001.geometry} material={materials['Wolf3D_Outfit_Top.005']} skeleton={nodes.Wolf3D_Outfit_Top001.skeleton} />
          <skinnedMesh name="EyeLeft003" geometry={nodes.EyeLeft003.geometry} material={materials['Wolf3D_Eye.005']} skeleton={nodes.EyeLeft003.skeleton} morphTargetDictionary={nodes.EyeLeft003.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft003.morphTargetInfluences} />
          <skinnedMesh name="EyeRight003" geometry={nodes.EyeRight003.geometry} material={materials['Wolf3D_Eye.005']} skeleton={nodes.EyeRight003.skeleton} morphTargetDictionary={nodes.EyeRight003.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight003.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Head003" geometry={nodes.Wolf3D_Head003.geometry} material={materials['Wolf3D_Skin.005']} skeleton={nodes.Wolf3D_Head003.skeleton} morphTargetDictionary={nodes.Wolf3D_Head003.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head003.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Teeth003" geometry={nodes.Wolf3D_Teeth003.geometry} material={materials['Wolf3D_Teeth.005']} skeleton={nodes.Wolf3D_Teeth003.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth003.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth003.morphTargetInfluences} />
        </group>
        <mesh name="Wolf3D_Head001" geometry={nodes.Wolf3D_Head001.geometry} material={materials['Wolf3D_Skin.006']} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="EyeLeft001" geometry={nodes.EyeLeft001.geometry} material={materials['Wolf3D_Eye.006']} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Wolf3D_Hair001" geometry={nodes.Wolf3D_Hair001.geometry} material={materials['Wolf3D_Hair.006']} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Wolf3D_Glasses001" geometry={nodes.Wolf3D_Glasses001.geometry} material={materials['Wolf3D_Glasses.006']} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="EyeRight001" geometry={nodes.EyeRight001.geometry} material={materials['Wolf3D_Eye.006']} rotation={[Math.PI / 2, 0, 0]} />
        <mesh name="Wolf3D_Teeth001" geometry={nodes.Wolf3D_Teeth001.geometry} material={materials['Wolf3D_Teeth.006']} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/model.glb')
