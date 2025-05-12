//import { useEffect, useState } from "react";
//import { Text, View } from "react-native";
//import { Impacto } from "./index.js";


//export interface ImpacProps{
//   id: string,
//    name: string,
//    PE: string,
//    AO: string,
//    IDE: string,
//    Defesa: string,
//}

//export function DadosPers () {
//    const[personagens, setPersonagens] = useState<ImpacProps[]> ([])

//    useEffect(() => {
//        async function getFoods(){
//            const response = await fetch("http://192.168.0.11:3000/Impacto")
//            const data = await response.json()
//            setRestaurants(data);
//        }
        
//        getFoods();
//    }, [])

//    return(
//        <View 
//         className="px-4 flex-1 w-full h-full mb-11 gap-4"
//        >
//            {Impacto.map(item => (
//                <Impacto item={item} key={item.id}/>
//            ))}
//        </View>
//    )
    
//}