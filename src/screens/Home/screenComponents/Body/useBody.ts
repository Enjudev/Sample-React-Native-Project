import React, { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import ScreenRoutes from '../../../../navigation/routes';

const useBody = () => {
    const [state,setState] = useState('Text gi do hay state o day')
    const [button,setButton] = useState('Go to Sencond Screen')
    const navigation = useNavigation();
    
    const goToSecond = () => {
        navigation.navigate(ScreenRoutes.Second)
    }
    return {
        navigation,
        state,
        button,
        goToSecond
    }
}

export default useBody;